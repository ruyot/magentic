"use client"

import { Search, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/mock-data"

interface MarketplaceSidebarProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function MarketplaceSidebar({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: MarketplaceSidebarProps) {
  return (
    <aside className="w-80 bg-card border-r border-border sticky top-0 h-screen overflow-y-auto p-4">
      <div className="space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Marketplace"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Browse All Button */}
        <Button
          variant={selectedCategory === "all" ? "default" : "outline"}
          className="w-full justify-start"
          onClick={() => onCategoryChange("all")}
        >
          <Search className="mr-2 h-4 w-4" />
          Browse all
        </Button>

        {/* Settings Button */}
        <Button variant="outline" className="w-full justify-start bg-transparent">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>

        {/* Categories */}
        <div className="space-y-2">
          <h3 className="font-semibold text-card-foreground text-sm mb-3">Categories</h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
