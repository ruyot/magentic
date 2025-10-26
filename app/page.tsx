"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, Store } from "lucide-react"
import { Button } from "@/components/ui/button"

const catchphrases = [
  "Never get ghosted during a deal again",
  "Close deals 10x faster with AI agents",
  "Your time is valuable, let agents negotiate",
  "Smart bidding, smarter deals",
  "Real-time negotiations, zero hassle",
]

export default function LandingPage() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % catchphrases.length)
        setIsVisible(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">Welcome to the Marketplace</h1>
            <div className="h-16 flex items-center justify-center">
              <p
                className={`text-xl md:text-2xl text-primary max-w-2xl mx-auto text-balance transition-opacity duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {catchphrases[currentPhrase]}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/marketplace?mode=buyer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg h-auto min-w-[200px] shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <ShoppingBag className="mr-2 h-6 w-6" />
                Join as Buyer
              </Button>
            </Link>

            <Link href="/seller/listings">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg h-auto min-w-[200px] shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <Store className="mr-2 h-6 w-6" />
                Join as Seller
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 border-primary">
              <h3 className="font-semibold text-lg text-card-foreground mb-2">Smart Bidding</h3>
              <p className="text-muted-foreground">Set your max price and let our agents negotiate for you</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 border-accent">
              <h3 className="font-semibold text-lg text-card-foreground mb-2">Real-time Chat</h3>
              <p className="text-muted-foreground">Watch agents communicate and finalize deals instantly</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 border-secondary">
              <h3 className="font-semibold text-lg text-card-foreground mb-2">Easy Listing</h3>
              <p className="text-muted-foreground">Manage all your products and bids in one place</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-muted text-muted-foreground py-6 text-center">
        <p className="text-sm">© 2025 Marketplace. Powered by intelligent agents.</p>
      </footer>
    </div>
  )
}
