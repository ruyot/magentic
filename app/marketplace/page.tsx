"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { MagazineHeader } from "@/components/magazine-header"
import { ProductDetailsDialog } from "@/components/product-details-dialog"
import { mockProducts, type Product } from "@/lib/mock-data"
import { getProductIcon } from "@/lib/product-icons"
import { Search, SlidersHorizontal } from "lucide-react"

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

  const categories = ["all", "Electronics", "Computers", "Apparel", "Books", "Home Goods", "Entertainment", "Sports & Outdoors", "School Supplies"]

  return (
    <div className="min-h-screen bg-white">
      <MagazineHeader currentPage="marketplace" />

      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Magazine-style Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b-2 border-black pb-8 mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-4" style={{ color: '#E91E8C' }}>
            MARKETPLACE
          </h1>
          <p className="text-xl text-gray-600 uppercase tracking-wide">
            {filteredProducts.length} Items Available • Updated Daily
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-black text-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Category Pills */}
          <div className="flex gap-3 flex-wrap items-center">
            <SlidersHorizontal className="h-5 w-5 text-gray-600" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 uppercase text-sm font-bold tracking-wider transition-all border-2 border-black ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid - Magazine Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer"
            >
              {/* Product Image */}
              <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden mb-4 border-2 border-black">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center p-6 opacity-0 group-hover:opacity-5 transition-opacity">
                    <div className="text-6xl mb-4">{getProductIcon(product.category)}</div>
                  </div>
                </div>
                {product.condition && (
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs uppercase font-bold tracking-wider">
                    {product.condition}
                  </div>
                )}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold uppercase tracking-tight line-clamp-2 group-hover:text-gray-600 transition-colors">
                  {product.title}
                </h3>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black">${product.price}</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">{product.location}</span>
                  </div>
                  {product.priceRange && (
                    <p className="text-xs text-gray-500 italic">
                      Similar products seen at ${product.priceRange.min}-${product.priceRange.max}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl font-bold uppercase tracking-wide text-gray-400">No items found</p>
          </motion.div>
        )}
      </main>

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
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <MarketplaceContent />
    </Suspense>
  )
}
