"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { SellerListingsList } from "@/components/seller-listings-list"
import { ChatInterface } from "@/components/chat-interface"
import { mockProducts, generateMockMessages, type Bid } from "@/lib/mock-data"

export default function SellerListingsPage() {
  const [listings, setListings] = useState<typeof mockProducts>([])
  const [activeBids, setActiveBids] = useState<Bid[]>([])
  const [selectedListing, setSelectedListing] = useState<(typeof mockProducts)[0] | null>(null)
  const [selectedBid, setSelectedBid] = useState<Bid | null>(null)

  useEffect(() => {
    // For demo, show first 5 products as seller's listings
    const sellerProducts = mockProducts.slice(0, 5)
    setListings(sellerProducts)

    // Generate mock bids for these listings
    const mockBids: Bid[] = sellerProducts.map((product, index) => {
      const buyerMaxPrice = product.price + Math.floor(Math.random() * 500) + 100
      const currentOffer = Math.floor((buyerMaxPrice + product.price) / 2)

      return {
        id: `seller-bid-${product.id}`,
        productId: product.id,
        maxPrice: buyerMaxPrice,
        currentOffer,
        status: "active" as const,
        messages: generateMockMessages(product.id, buyerMaxPrice, product.price),
      }
    })

    setActiveBids(mockBids)

    if (sellerProducts.length > 0) {
      setSelectedListing(sellerProducts[0])
      setSelectedBid(mockBids[0])
    }
  }, [])

  const handleSelectListing = (product: (typeof mockProducts)[0]) => {
    setSelectedListing(product)
    const bid = activeBids.find((b) => b.productId === product.id)
    setSelectedBid(bid || null)
  }

  return (
    <div className="min-h-screen bg-[#F2F7F2]">
      <Navigation mode="seller" />

      <div className="flex h-[calc(100vh-4rem)]">
        <SellerListingsList
          listings={listings}
          activeBids={activeBids}
          selectedListingId={selectedListing?.id}
          onSelectListing={handleSelectListing}
        />

        <div className="flex-1">
          {selectedListing && selectedBid ? (
            <ChatInterface bid={selectedBid} product={selectedListing} mode="seller" />
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-[#5C80BC] text-lg">No active listings</p>
                <p className="text-[#4D5061]">Create your first listing to start selling!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
