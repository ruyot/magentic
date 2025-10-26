"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { MagazineHeader } from "@/components/magazine-header"
import { ChatInterface } from "@/components/chat-interface"
import { mockProducts, generateMockMessages, type Bid } from "@/lib/mock-data"
import { ShoppingBag, TrendingUp, MessageSquare } from "lucide-react"

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
    <div className="min-h-screen bg-white">
      <MagazineHeader currentPage="bids" />

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Magazine-style Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b-2 border-black pb-8 mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            YOUR <span style={{ color: '#D4AF37' }}>BIDS</span>
          </h1>
          <div className="flex gap-8 text-sm uppercase tracking-wide">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <span>{bids.length} Active Negotiations</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <span>AI Agents Working</span>
            </div>
          </div>
        </motion.div>

        {bids.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 border-2 border-gray-300"
          >
            <ShoppingBag className="h-20 w-20 mx-auto mb-6 text-gray-400" />
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4 text-gray-400">
              No Active Bids
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Start browsing the marketplace to place your first bid
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/marketplace?mode=buyer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider border-2 border-black hover:bg-white hover:text-black transition-all"
                >
                  Browse Marketplace
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  localStorage.removeItem("userBids");
                  window.location.reload();
                }}
                className="bg-white text-black px-6 py-4 font-bold uppercase tracking-wider border-2 border-black hover:bg-gray-100 transition-all text-sm"
              >
                Reset
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Bids List */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-1 space-y-4"
              >
                <h2 className="text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2 mb-4">
                  Active Bids
                </h2>
              {bids.map((bid, index) => {
                const product = mockProducts.find((p) => p.id === bid.productId)
                if (!product) return null

                const isSelected = selectedBid?.id === bid.id

                return (
                  <motion.div
                    key={bid.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedBid(bid)}
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
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold uppercase text-sm tracking-tight line-clamp-2 mb-1">
                          {product.title}
                        </h3>
                        <p className="text-xs uppercase tracking-wide mb-1">
                          Listed: ${product.price}
                        </p>
                        <p className="text-lg font-black">Your Max: ${bid.maxPrice}</p>
                        <div className={`text-xs uppercase tracking-wide mt-1 ${
                          isSelected ? "text-gray-300" : "text-gray-600"
                        }`}>
                          Current: ${bid.currentOffer}
                        </div>
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
              {selectedBid && selectedProduct ? (
                <div className="border-2 border-black h-[calc(100vh-300px)]">
                  <ChatInterface bid={selectedBid} product={selectedProduct} mode="buyer" />
                </div>
              ) : (
                <div className="h-[calc(100vh-300px)] border-2 border-gray-300 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MessageSquare className="h-16 w-16 mx-auto text-gray-400" />
                    <p className="text-2xl font-bold uppercase tracking-wide text-gray-400">
                      Select a bid
                    </p>
                    <p className="text-gray-500">View negotiations and agent activity</p>
                  </div>
                </div>
              )}
              </motion.div>
            </div>

            {/* Reset Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center pt-8 border-t-2 border-gray-300"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (confirm("Are you sure you want to clear all bids?")) {
                    localStorage.removeItem("userBids");
                    window.location.reload();
                  }
                }}
                className="bg-white text-gray-700 px-6 py-3 font-bold uppercase tracking-wider border-2 border-gray-400 hover:border-black hover:text-black transition-all text-sm"
              >
                Reset All Bids
              </motion.button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
