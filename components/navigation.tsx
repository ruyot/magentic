"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, ShoppingBag, Store } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  mode?: "buyer" | "seller"
}

export function Navigation({ mode }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className="bg-[#4D5061] text-[#F2F7F2] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Store className="h-8 w-8 text-[#02A9EA]" />
            <span className="font-bold text-xl">Marketplace</span>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/">
              <Button
                variant={pathname === "/" ? "secondary" : "ghost"}
                className={
                  pathname === "/" ? "bg-[#5C80BC] text-white hover:bg-[#4A6A9E]" : "text-[#F2F7F2] hover:bg-[#5C80BC]"
                }
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>

            <Link href="/marketplace?mode=buyer">
              <Button
                variant={pathname === "/marketplace" ? "secondary" : "ghost"}
                className={
                  pathname === "/marketplace"
                    ? "bg-[#5C80BC] text-white hover:bg-[#4A6A9E]"
                    : "text-[#F2F7F2] hover:bg-[#5C80BC]"
                }
              >
                <Search className="h-4 w-4 mr-2" />
                Discover
              </Button>
            </Link>

            {mode === "buyer" && (
              <Link href="/buyer/bids">
                <Button
                  variant={pathname === "/buyer/bids" ? "secondary" : "ghost"}
                  className={
                    pathname === "/buyer/bids"
                      ? "bg-[#5C80BC] text-white hover:bg-[#4A6A9E]"
                      : "text-[#F2F7F2] hover:bg-[#5C80BC]"
                  }
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  My Bids
                </Button>
              </Link>
            )}

            {mode === "seller" && (
              <Link href="/seller/listings">
                <Button
                  variant={pathname === "/seller/listings" ? "secondary" : "ghost"}
                  className={
                    pathname === "/seller/listings"
                      ? "bg-[#5C80BC] text-white hover:bg-[#4A6A9E]"
                      : "text-[#F2F7F2] hover:bg-[#5C80BC]"
                  }
                >
                  <Store className="h-4 w-4 mr-2" />
                  My Listings
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
