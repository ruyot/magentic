"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface MagazineHeaderProps {
  currentPage: string
}

export function MagazineHeader({ currentPage }: MagazineHeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b-2 border-black bg-white z-50"
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-black uppercase tracking-tighter hover:text-gray-600 transition-colors">
            AgentMarket
          </Link>
          <div className="flex gap-8 text-sm uppercase tracking-wider font-semibold">
            <Link 
              href="/marketplace?mode=buyer" 
              className={`hover:text-gray-600 transition-colors ${currentPage === 'marketplace' ? 'text-black border-b-2 border-black' : 'text-gray-600'}`}
            >
              Browse
            </Link>
            <Link 
              href="/seller/listings" 
              className={`hover:text-gray-600 transition-colors ${currentPage === 'seller' ? 'text-black border-b-2 border-black' : 'text-gray-600'}`}
            >
              Sell
            </Link>
            <Link 
              href="/buyer/bids" 
              className={`hover:text-gray-600 transition-colors ${currentPage === 'bids' ? 'text-black border-b-2 border-black' : 'text-gray-600'}`}
            >
              My Bids
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

