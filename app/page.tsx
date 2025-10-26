"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ShoppingBag, Store, Sparkles, TrendingUp, Shield } from "lucide-react"
import { useRef } from "react"

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Magazine Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b-2 border-black fixed top-0 left-0 right-0 bg-white z-50"
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors">
              AgentMarket
            </Link>
            <div className="flex gap-8 text-sm uppercase tracking-wider">
              <Link href="/marketplace?mode=buyer" className="hover:text-gray-600 cursor-pointer transition-colors">Browse</Link>
              <Link href="/seller/listings" className="hover:text-gray-600 cursor-pointer transition-colors">Sell</Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Magazine Layout */}
      <main className="max-w-7xl mx-auto px-8 pt-16 pb-16">
        {/* Magazine Title - Fades on scroll */}
        <motion.div
          style={{ opacity: titleOpacity, scale: titleScale }}
          className="text-center mb-16 min-h-screen flex flex-col justify-center sticky top-0"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-8xl md:text-[12rem] font-black leading-none tracking-tighter mb-4"
          >
            AGENT<span className="block">MARKET</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "16rem" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-black mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl md:text-3xl tracking-wide font-light italic"
            style={{ color: '#D4AF37' }}
          >
            The Future of Trading Used Goods
          </motion.p>
        </motion.div>

        {/* Feature Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          {/* Left Column - Main Story */}
          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6">
              <h2 className="text-5xl font-bold leading-tight mb-4">
                NEVER GET<br />GHOSTED AGAIN
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Set your price, let AI agents negotiate on your behalf, and close deals 
                <span className="font-bold" style={{ color: '#D4AF37' }}> 10x faster</span> with 
                <span className="font-bold" style={{ color: '#D4AF37' }}> zero ghosting</span>.
              </p>
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-gray-800">
              <p>
                <span className="font-bold text-2xl">AI agents</span> on both sides communicate 
                in real-time, negotiating deals while you focus on what matters.
              </p>
              <p>
                No more waiting months for a deal to pull through. No more endless messaging. 
                Just intelligent automation with human intervention at critical moments.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="/marketplace?mode=buyer" className="group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black text-white px-8 py-5 text-center font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors relative overflow-hidden"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <ShoppingBag className="h-5 w-5" />
                    <span>Browse as Buyer</span>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gray-700"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>

              <Link href="/seller/listings" className="group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-black px-8 py-5 text-center font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Store className="h-5 w-5" />
                    <span>Sell with AI</span>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <Sparkles className="h-24 w-24 text-white mx-auto mb-6" />
                  <div className="text-6xl font-black text-white leading-tight">
                    10X<br />FASTER
                  </div>
                  <div className="text-white/80 text-xl font-light tracking-wide">
                    Deal Closure Rate
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white px-4 py-2 font-bold text-sm uppercase tracking-wider">
                AI Powered
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center font-bold uppercase tracking-wide">
              Stress tested with real world data
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          <div className="border-t-4 border-black pt-6">
            <TrendingUp className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3 uppercase tracking-wide" style={{ color: '#D4AF37' }}>Smart Bidding</h3>
            <p className="text-gray-700 leading-relaxed">
              Set your maximum price and let AI agents negotiate the best deal within your budget. 
              Market analysis included.
            </p>
          </div>

          <div className="border-t-4 border-black pt-6">
            <Sparkles className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3 uppercase tracking-wide" style={{ color: '#D4AF37' }}>Real-Time Chat</h3>
            <p className="text-gray-700 leading-relaxed">
              Watch agents communicate and finalize deals instantly. Human intervention only 
              at critical checkpoints.
            </p>
          </div>

          <div className="border-t-4 border-black pt-6">
            <Shield className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3 uppercase tracking-wide" style={{ color: '#D4AF37' }}>Zero Ghosting</h3>
            <p className="text-gray-700 leading-relaxed">
              AI agents never sleep, never ghost. They respond instantly and keep negotiations 
              moving forward 24/7.
            </p>
          </div>
        </motion.div>

            {/* Agents Callout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black text-white p-12 mb-20"
            >
              <div className="text-center space-y-6">
                <h2 className="text-5xl font-black uppercase tracking-tight">
                  AGENTS DEPLOYED ON<br />FETCH.AI AGENTVERSE
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Buyer and seller agents use Claude AI via Lava Gateway for intelligent negotiation
                </p>
                <Link href="/agents">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors mt-4"
                  >
                    View Agent Details →
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-t-2 border-b-2 border-black py-12"
            >
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-6xl font-black mb-2">10X</div>
                  <div className="text-sm uppercase tracking-wider text-gray-600">Faster Deals</div>
                </div>
                <div>
                  <div className="text-6xl font-black mb-2">24/7</div>
                  <div className="text-sm uppercase tracking-wider text-gray-600">AI Active</div>
                </div>
                <div>
                  <div className="text-6xl font-black mb-2">0%</div>
                  <div className="text-sm uppercase tracking-wider text-gray-600">Ghost Rate</div>
                </div>
              </div>
            </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 border-t-2 border-black mt-20"
        >
          <div className="text-sm uppercase tracking-widest text-gray-600 mb-4">
            Powered by Fetch.ai • Arize • Letta
          </div>
          <div className="text-xs text-gray-500">
            © 2025 AgentMarket. AI-Powered Marketplace.
          </div>
        </motion.div>
      </main>
    </div>
  )
}
