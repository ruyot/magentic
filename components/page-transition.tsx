"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ 
          opacity: 0,
          rotateY: -15,
          transformPerspective: 1200,
          transformOrigin: "left center"
        }}
        animate={{ 
          opacity: 1,
          rotateY: 0,
          transformPerspective: 1200
        }}
        exit={{ 
          opacity: 0,
          rotateY: 15,
          transformPerspective: 1200,
          transformOrigin: "right center"
        }}
        transition={{
          duration: 0.7,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

