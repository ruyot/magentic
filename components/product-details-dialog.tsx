"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MapPin, Tag } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#4D5061]">{product.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
            <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-[#4D5061]">
                {product.price === 0 ? "FREE" : `$${product.price.toLocaleString()}`}
              </p>
              <div className="flex items-center gap-2 text-[#5C80BC]">
                <Tag className="h-4 w-4" />
                <span className="text-sm">{product.category}</span>
              </div>
            </div>

            <div className="flex items-center text-[#5C80BC]">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{product.location}</span>
            </div>

            {product.mileage && (
              <p className="text-sm text-[#5C80BC]">
                <span className="font-semibold">Mileage:</span> {product.mileage}
              </p>
            )}

            <div className="pt-2">
              <h3 className="font-semibold text-[#4D5061] mb-2">Description</h3>
              <p className="text-[#5C80BC] leading-relaxed">{product.description}</p>
            </div>
          </div>

          {showBidInput && (
            <form onSubmit={handleSubmitBid} className="space-y-4 pt-4 border-t">
              <div className="space-y-2">
                <Label htmlFor="maxPrice" className="text-[#4D5061]">
                  Enter your maximum bid price
                </Label>
                <Input
                  id="maxPrice"
                  type="number"
                  placeholder="Enter amount"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="border-[#5C80BC]/30 focus:border-[#02A9EA] focus:ring-[#02A9EA]"
                  min="0"
                  step="0.01"
                  required
                  autoFocus
                />
                <p className="text-sm text-[#5C80BC]">
                  Our agent will negotiate on your behalf up to this amount. Press Enter to continue.
                </p>
              </div>
            </form>
          )}
        </div>

        <DialogFooter>
          {!showBidInput ? (
            <Button
              onClick={handleProceedToDetails}
              className="bg-[#02A9EA] hover:bg-[#0290C8] text-white"
              disabled={product.price === 0}
            >
              Proceed to Details
            </Button>
          ) : (
            <Button
              onClick={handleSubmitBid}
              className="bg-[#DC136C] hover:bg-[#C01160] text-white"
              disabled={!maxPrice || Number.parseFloat(maxPrice) <= 0}
            >
              Start Negotiation
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
