"use client"

import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/mock-data"

interface ProductGridProps {
  products: Product[]
  onProductClick: (product: Product) => void
}

export function ProductGrid({ products, onProductClick }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No products found. Try adjusting your search or filters.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          className="cursor-pointer hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border overflow-hidden group"
          onClick={() => onProductClick(product)}
        >
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-bold text-lg text-foreground">
                  {product.price === 0 ? "FREE" : `$${product.price.toLocaleString()}`}
                </p>
                {product.condition && (
                  <Badge variant="secondary" className="text-xs">
                    {product.condition}
                  </Badge>
                )}
              </div>
              <h3 className="text-sm text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" />
                {product.location}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
