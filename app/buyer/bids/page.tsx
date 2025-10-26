"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { BidsList } from "@/components/bids-list"
import { ChatInterface } from "@/components/chat-interface"
import { mockProducts, generateMockMessages, type Bid } from "@/lib/mock-data"

export default function BuyerBidsPage() {
  const [bids, setBids] = useState<Bid[]>([])
  const [selectedBid, setSelectedBid] = useState<Bid | null>(null)

  useEffect(() => {
    // Load bids from localStorage
    const storedBids = JSON.parse(localStorage.getItem("userBids") || "[]")

    // Convert stored bids to full Bid objects with messages
    const fullBids: Bid[] = storedBids
      .map((stored: any) => {
        const product = mockProducts.find((p) => p.id === stored.productId)
        if (!product) return null

        const currentOffer = Math.floor((stored.maxPrice + product.price) / 2)

        return {
          id: `bid-${stored.productId}`,
          productId: stored.productId,
          maxPrice: stored.maxPrice,
          currentOffer,
          status: "active" as const,
          messages: generateMockMessages(stored.productId, stored.maxPrice, product.price),
        }
      })
      .filter(Boolean)

    setBids(fullBids)
    if (fullBids.length > 0 && !selectedBid) {
      setSelectedBid(fullBids[0])
    }
  }, [])

  const selectedProduct = selectedBid ? mockProducts.find((p) => p.id === selectedBid.productId) : null

  return (
    <div className="min-h-screen bg-[#F2F7F2]">
      <Navigation mode="buyer" />

      <div className="flex h-[calc(100vh-4rem)]">
        <BidsList bids={bids} products={mockProducts} selectedBidId={selectedBid?.id} onSelectBid={setSelectedBid} />

        <div className="flex-1">
          {selectedBid && selectedProduct ? (
            <ChatInterface bid={selectedBid} product={selectedProduct} mode="buyer" />
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-[#5C80BC] text-lg">No active bids yet</p>
                <p className="text-[#4D5061]">Start browsing the marketplace to place your first bid!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
