"use client"

import { useEffect, useRef } from "react"
import { Bot } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
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
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-[#4D5061]">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
            <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex-1">
            <h2 className="font-semibold text-lg text-white line-clamp-1">{product.title}</h2>
            <div className="flex items-center gap-4 mt-2 text-sm text-[#F2F7F2]">
              <span>Listed: ${product.price}</span>
              <span>•</span>
              <span>Your Max: ${bid.maxPrice}</span>
              <span>•</span>
              <span className="text-[#02A9EA] font-medium">Current Offer: ${bid.currentOffer}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4 max-w-4xl mx-auto">
          {bid.messages.map((message) => {
            const isBuyerAgent = message.sender === "buyer-agent"
            const isCurrentUserAgent = mode === "buyer" ? isBuyerAgent : !isBuyerAgent

            return (
              <div key={message.id} className={`flex gap-3 ${isCurrentUserAgent ? "justify-end" : "justify-start"}`}>
                {!isCurrentUserAgent && (
                  <div className="w-8 h-8 rounded-full bg-[#DC136C] flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                )}

                <Card
                  className={`max-w-[70%] p-3 ${
                    isCurrentUserAgent ? "bg-[#02A9EA] text-white border-[#02A9EA]" : "bg-white border-[#5C80BC]/20"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-medium ${isCurrentUserAgent ? "text-white/90" : "text-[#5C80BC]"}`}
                      >
                        {isBuyerAgent ? "Buyer Agent" : "Seller Agent"}
                      </span>
                      <span className={`text-xs ${isCurrentUserAgent ? "text-white/70" : "text-[#5C80BC]/70"}`}>
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed ${isCurrentUserAgent ? "text-white" : "text-[#4D5061]"}`}>
                      {message.message}
                    </p>
                  </div>
                </Card>

                {isCurrentUserAgent && (
                  <div className="w-8 h-8 rounded-full bg-[#02A9EA] flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>
            )
          })}

          <div className="flex justify-center py-4">
            <div className="flex items-center gap-2 text-[#5C80BC] text-sm">
              <div className="w-2 h-2 bg-[#02A9EA] rounded-full animate-pulse" />
              <span>Agents are negotiating...</span>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
