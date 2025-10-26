"use client"

import { useEffect, useRef } from "react"
import { Bot } from "lucide-react"
import type { Bid, Product } from "@/lib/mock-data"

interface ChatInterfaceProps {
  bid: Bid
  product: Product
  mode: "buyer" | "seller"
}

export function ChatInterface({ bid, product, mode }: ChatInterfaceProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Auto-scroll to bottom when messages change
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [bid.messages])

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header - Magazine Style */}
      <div className="p-6 border-b-2 border-black bg-white">
        <div className="flex items-start gap-4">
          <div className="w-24 h-24 border-2 border-black bg-gray-100 flex-shrink-0 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="font-black text-xl uppercase tracking-tight line-clamp-2 mb-2">{product.title}</h2>
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">Listed Price</div>
                  <div className="font-bold text-lg">${product.price}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">Your Max</div>
                  <div className="font-bold text-lg">${bid.maxPrice}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">Current Offer</div>
                  <div className="font-bold text-lg text-black">${bid.currentOffer}</div>
                </div>
              </div>
              {product.priceRange && (
                <p className="text-xs text-gray-500 italic">
                  Similar products typically seen at ${product.priceRange.min}-${product.priceRange.max}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Messages - Magazine Style */}
      <div className="flex-1 overflow-y-auto p-6" ref={scrollRef}>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="text-center border-t border-b border-gray-300 py-2 mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-500">Negotiation Transcript</p>
          </div>

          {bid.messages.map((message) => {
            const isBuyerAgent = message.sender === "buyer-agent"
            const isCurrentUserAgent = mode === "buyer" ? isBuyerAgent : !isBuyerAgent

            return (
              <div key={message.id} className="border-l-4 border-black pl-4 py-2">
                <div className="flex items-start gap-3 mb-2">
                  <div className={`w-10 h-10 border-2 border-black flex items-center justify-center flex-shrink-0 ${
                    isCurrentUserAgent ? "bg-black text-white" : "bg-white"
                  }`}>
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-sm font-black uppercase tracking-wide">
                        {isBuyerAgent ? "Buyer Agent" : "Seller Agent"}
                      </span>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-800">
                      {message.message}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

          <div className="flex justify-center py-6 border-t border-gray-300">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Agents Negotiating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Action Bar */}
      <div className="border-t-2 border-black p-4 bg-gray-50">
        <div className="text-center">
          <p className="text-xs uppercase tracking-wide text-gray-600 mb-2">
            You'll be notified when agents reach a final offer
          </p>
          <button className="bg-black text-white px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
            View Full History
          </button>
        </div>
      </div>
    </div>
  )
}
