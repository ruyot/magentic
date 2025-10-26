"use client"

import { Store, TrendingUp, DollarSign } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product, Bid } from "@/lib/mock-data"

interface SellerListingsListProps {
  listings: Product[]
  activeBids: Bid[]
  selectedListingId: string | undefined
  onSelectListing: (listing: Product) => void
}

export function SellerListingsList({
  listings,
  activeBids,
  selectedListingId,
  onSelectListing,
}: SellerListingsListProps) {
  return (
    <aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4 border-b border-gray-200 bg-[#4D5061]">
        <div className="flex items-center gap-2 text-white">
          <Store className="h-5 w-5" />
          <h2 className="font-semibold text-lg">My Listings</h2>
        </div>
        <p className="text-[#F2F7F2] text-sm mt-1">{listings.length} active products</p>
      </div>

      <div className="p-2 space-y-2">
        {listings.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-[#5C80BC] text-sm">No active listings</p>
          </div>
        ) : (
          listings.map((listing) => {
            const bid = activeBids.find((b) => b.productId === listing.id)
            const isSelected = listing.id === selectedListingId
            const hasBid = !!bid

            return (
              <Card
                key={listing.id}
                className={`p-3 cursor-pointer transition-all hover:shadow-md ${
                  isSelected ? "border-[#DC136C] border-2 bg-[#DC136C]/5" : "border-[#5C80BC]/20"
                }`}
                onClick={() => onSelectListing(listing)}
              >
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm text-[#4D5061] line-clamp-2 leading-snug mb-1">
                      {listing.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs mb-2">
                      <DollarSign className="h-3 w-3 text-[#5C80BC]" />
                      <span className="text-[#4D5061] font-medium">${listing.price}</span>
                    </div>

                    {hasBid ? (
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-[#DC136C]" />
                        <span className="text-xs text-[#DC136C] font-medium">Active Bid: ${bid.currentOffer}</span>
                      </div>
                    ) : (
                      <Badge variant="outline" className="text-xs border-[#5C80BC]/30 text-[#5C80BC]">
                        No bids yet
                      </Badge>
                    )}
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
