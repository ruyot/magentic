"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { MagazineHeader } from "@/components/magazine-header"
import { ChatInterface } from "@/components/chat-interface"
import { mockProducts, generateMockMessages, type Bid } from "@/lib/mock-data"
import { TrendingUp, DollarSign, MessageSquare } from "lucide-react"

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
    <div className="min-h-screen bg-white">
      <MagazineHeader currentPage="seller" />

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Magazine-style Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b-2 border-black pb-8 mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            YOUR <span style={{ color: '#E91E8C' }}>LISTINGS</span>
          </h1>
          <div className="flex gap-8 text-sm uppercase tracking-wide">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <span>{listings.length} Active Listings</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <span>{activeBids.length} Active Negotiations</span>
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Listings List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 space-y-4"
          >
            <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2 mb-4">
              Products
            </h2>
            {listings.map((listing, index) => {
              const bid = activeBids.find((b) => b.productId === listing.id)
              const isSelected = selectedListing?.id === listing.id

              return (
                <motion.div
                  key={listing.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleSelectListing(listing)}
                  className={`border-2 p-4 cursor-pointer transition-all ${
                    isSelected
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  <div className="flex gap-4">
                    <div className={`w-20 h-20 border-2 overflow-hidden ${
                      isSelected ? "border-white" : "border-black"
                    }`}>
                      <img 
                        src={listing.image} 
                        alt={listing.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold uppercase text-sm tracking-tight line-clamp-2 mb-1">
                        {listing.title}
                      </h3>
                      <p className="text-lg font-black">${listing.price}</p>
                      {bid && (
                        <div className={`text-xs uppercase tracking-wide mt-1 ${
                          isSelected ? "text-gray-300" : "text-gray-600"
                        }`}>
                          Current Offer: ${bid.currentOffer}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right: Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {selectedListing && selectedBid ? (
              <div className="border-2 border-black h-[calc(100vh-300px)]">
                <ChatInterface bid={selectedBid} product={selectedListing} mode="seller" />
              </div>
            ) : (
              <div className="h-[calc(100vh-300px)] border-2 border-gray-300 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <DollarSign className="h-16 w-16 mx-auto text-gray-400" />
                  <p className="text-2xl font-bold uppercase tracking-wide text-gray-400">
                    Select a listing
                  </p>
                  <p className="text-gray-500">View negotiations and agent activity</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
