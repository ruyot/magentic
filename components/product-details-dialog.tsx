"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MapPin, Tag } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getProductIcon } from "@/lib/product-icons"
import type { Product } from "@/lib/mock-data"

interface ProductDetailsDialogProps {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductDetailsDialog({ product, open, onOpenChange }: ProductDetailsDialogProps) {
  const router = useRouter()
  const [showBidInput, setShowBidInput] = useState(false)
  const [maxPrice, setMaxPrice] = useState("")

  if (!product) return null

  const handleProceedToDetails = () => {
    setShowBidInput(true)
  }

  const handleSubmitBid = (e: React.FormEvent) => {
    e.preventDefault()
    if (maxPrice && Number.parseFloat(maxPrice) > 0) {
      // Store bid in localStorage for demo purposes
      const bids = JSON.parse(localStorage.getItem("userBids") || "[]")
      bids.push({
        productId: product.id,
        maxPrice: Number.parseFloat(maxPrice),
        timestamp: new Date().toISOString(),
      })
      localStorage.setItem("userBids", JSON.stringify(bids))

      // Navigate to bids page
      router.push("/buyer/bids")
      onOpenChange(false)
      setShowBidInput(false)
      setMaxPrice("")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto border-2 border-black p-0">
        {/* Magazine Header */}
        <div className="border-b-2 border-black p-6">
          <DialogHeader>
            <DialogTitle className="text-3xl font-black uppercase tracking-tight leading-tight">
              {product.title}
            </DialogTitle>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-6">
          {/* Product Image */}
          <div className="aspect-[4/3] border-2 border-black bg-gray-100 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-8xl mb-4">{getProductIcon(product.category)}</div>
              <p className="text-sm uppercase tracking-wide text-gray-600">{product.category}</p>
            </div>
          </div>

          {/* Product Info Grid */}
          <div className="grid grid-cols-3 gap-6 py-6 border-y-2 border-black">
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-600 mb-2">Price</div>
              <div className="text-4xl font-black">
                {product.price === 0 ? "FREE" : `$${product.price.toLocaleString()}`}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-600 mb-2">Location</div>
              <div className="font-bold uppercase tracking-tight text-sm flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {product.location}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-600 mb-2">Category</div>
              <div className="font-bold uppercase tracking-tight text-sm flex items-center gap-2">
                <Tag className="h-4 w-4" />
                {product.category}
              </div>
            </div>
          </div>

          {/* Condition Badge */}
          {product.condition && (
            <div className="inline-block border-2 border-black px-4 py-2">
              <span className="font-bold uppercase tracking-wider text-sm">
                Condition: {product.condition}
              </span>
            </div>
          )}

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-xl font-black uppercase tracking-tight border-b-2 border-black pb-2">
              Description
            </h3>
            <p className="leading-relaxed text-gray-800">{product.description}</p>
          </div>

          {/* Bid Input Form */}
          {showBidInput && (
            <form onSubmit={handleSubmitBid} className="space-y-4 pt-4 border-t-2 border-black">
              <div className="space-y-3">
                <Label htmlFor="maxPrice" className="text-sm font-black uppercase tracking-wide block">
                  Enter Your Maximum Bid
                </Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-black">$</span>
                  <Input
                    id="maxPrice"
                    type="number"
                    placeholder="0.00"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="pl-10 h-14 border-2 border-black text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-black"
                    min="0"
                    step="0.01"
                    required
                    autoFocus
                  />
                </div>
                <p className="text-sm text-gray-600 uppercase tracking-wide">
                  → AI Agent will negotiate up to this amount
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t-2 border-black p-6 bg-gray-50">
          <DialogFooter>
            {!showBidInput ? (
              <button
                onClick={handleProceedToDetails}
                className="w-full bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                disabled={product.price === 0}
              >
                Place Bid →
              </button>
            ) : (
              <button
                onClick={handleSubmitBid}
                className="w-full bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                disabled={!maxPrice || Number.parseFloat(maxPrice) <= 0}
              >
                Start AI Negotiation →
              </button>
            )}
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
