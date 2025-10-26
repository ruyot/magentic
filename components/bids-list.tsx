"use client"

import { ShoppingBag, TrendingUp, CheckCircle, XCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Bid, Product } from "@/lib/mock-data"

interface BidsListProps {
  bids: Bid[]
  products: Product[]
  selectedBidId: string | undefined
  onSelectBid: (bid: Bid) => void
}

export function BidsList({ bids, products, selectedBidId, onSelectBid }: BidsListProps) {
  return (
    <aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4 border-b border-gray-200 bg-[#4D5061]">
        <div className="flex items-center gap-2 text-white">
          <ShoppingBag className="h-5 w-5" />
          <h2 className="font-semibold text-lg">My Active Bids</h2>
        </div>
        <p className="text-[#F2F7F2] text-sm mt-1">{bids.length} active negotiations</p>
      </div>

      <div className="p-2 space-y-2">
        {bids.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-[#5C80BC] text-sm">No active bids</p>
          </div>
        ) : (
          bids.map((bid) => {
            const product = products.find((p) => p.id === bid.productId)
            if (!product) return null

            const isSelected = bid.id === selectedBidId

            return (
              <Card
                key={bid.id}
                className={`p-3 cursor-pointer transition-all hover:shadow-md ${
                  isSelected ? "border-[#02A9EA] border-2 bg-[#02A9EA]/5" : "border-[#5C80BC]/20"
                }`}
                onClick={() => onSelectBid(bid)}
              >
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm text-[#4D5061] line-clamp-2 leading-snug mb-1">
                      {product.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-[#5C80BC]">List: ${product.price}</span>
                      <span className="text-[#4D5061]">•</span>
                      <span className="text-[#02A9EA] font-medium">Max: ${bid.maxPrice}</span>
                    </div>

                    <div className="flex items-center gap-1 mt-2">
                      {bid.status === "active" && (
                        <>
                          <TrendingUp className="h-3 w-3 text-[#02A9EA]" />
                          <span className="text-xs text-[#02A9EA] font-medium">Negotiating</span>
                        </>
                      )}
                      {bid.status === "won" && (
                        <>
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span className="text-xs text-green-600 font-medium">Won</span>
                        </>
                      )}
                      {bid.status === "lost" && (
                        <>
                          <XCircle className="h-3 w-3 text-red-600" />
                          <span className="text-xs text-red-600 font-medium">Lost</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })
        )}
      </div>
    </aside>
  )
}
