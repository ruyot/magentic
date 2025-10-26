"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { ProductGrid } from "@/components/product-grid"
import { MarketplaceSidebar } from "@/components/marketplace-sidebar"
import { ProductDetailsDialog } from "@/components/product-details-dialog"
import { mockProducts, type Product } from "@/lib/mock-data"

function MarketplaceContent() {
  const searchParams = useSearchParams()
  const mode = (searchParams.get("mode") as "buyer" | "seller") || "buyer"

  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts = mockProducts.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation mode={mode} />

      <div className="flex">
        <MarketplaceSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">Today's Picks</h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"} available
              </p>
            </div>

            <ProductGrid products={filteredProducts} onProductClick={setSelectedProduct} />
          </div>
        </main>
      </div>

      <ProductDetailsDialog
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      />
    </div>
  )
}

export default function MarketplacePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F2F7F2]" />}>
      <MarketplaceContent />
    </Suspense>
  )
}
