"use client"

import { motion } from "framer-motion"
import { Bot, CheckCircle2, ExternalLink } from "lucide-react"
import { MagazineHeader } from "@/components/magazine-header"
import { AGENT_ADDRESSES } from "@/lib/agentverse"

export default function AgentsPage() {
  // Static display - agents are configured and ready
  const loading = false

  return (
    <div className="min-h-screen bg-white">
      <MagazineHeader currentPage="home" />

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b-2 border-black pb-8 mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            AI AGENTS
          </h1>
          <p className="text-xl text-gray-600 uppercase tracking-wide">
            Deployed on Fetch.ai Agentverse • Powered by Claude via Lava Gateway
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Bot className="h-16 w-16 animate-pulse" />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Buyer Agent Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="border-2 border-black p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center">
                    <Bot className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black uppercase tracking-tight">Buyer Agent</h2>
                    <p className="text-sm text-gray-600 uppercase tracking-wide mt-1">
                      Negotiates on behalf of buyers
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 border-2 border-blue-600 px-4 py-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="font-bold uppercase text-sm text-blue-700">DEPLOYED</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-600 mb-2">
                      Agent Address
                    </div>
                    <div className="font-mono text-xs break-all bg-gray-100 p-3 border border-gray-300">
                      {AGENT_ADDRESSES.buyer}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-600 mb-2">
                      Platform
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm">
                        <span className="font-bold">Deployed on:</span> Fetch.ai Agentverse
                      </div>
                      <div className="text-sm">
                        <span className="font-bold">AI Model:</span> Claude via Lava Gateway
                      </div>
                      <div className="text-sm">
                        <span className="font-bold">Function:</span> Autonomous Negotiation
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-600 mb-2">
                    Capabilities
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Analyzes product listings and market prices</li>
                    <li>Negotiates within buyer's maximum budget</li>
                    <li>Uses Claude AI for intelligent decision-making</li>
                    <li>Responds instantly to seller counteroffers</li>
                  </ul>
                </div>

                <a
                  href={`https://agentverse.ai/agents/${AGENT_ADDRESSES.buyer}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                  View on Agentverse
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Seller Agent Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="border-2 border-black p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center">
                    <Bot className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black uppercase tracking-tight">Seller Agent</h2>
                    <p className="text-sm text-gray-600 uppercase tracking-wide mt-1">
                      Negotiates on behalf of sellers
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 border-2 border-blue-600 px-4 py-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="font-bold uppercase text-sm text-blue-700">DEPLOYED</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-600 mb-2">
                      Agent Address
                    </div>
                    <div className="font-mono text-xs break-all bg-gray-100 p-3 border border-gray-300">
                      {AGENT_ADDRESSES.seller}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-600 mb-2">
                      Platform
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm">
                        <span className="font-bold">Deployed on:</span> Fetch.ai Agentverse
                      </div>
                      <div className="text-sm">
                        <span className="font-bold">AI Model:</span> Claude via Lava Gateway
                      </div>
                      <div className="text-sm">
                        <span className="font-bold">Function:</span> Autonomous Negotiation
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-600 mb-2">
                    Capabilities
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Evaluates buyer offers against minimum price</li>
                    <li>Makes intelligent counteroffers</li>
                    <li>Uses Claude AI for strategic negotiation</li>
                    <li>Maximizes seller profit while closing deals</li>
                  </ul>
                </div>

                <a
                  href={`https://agentverse.ai/agents/${AGENT_ADDRESSES.seller}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
                >
                  View on Agentverse
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="border-t-2 border-black pt-8 mt-8"
            >
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Technology Stack</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-2 border-black p-6">
                  <h4 className="font-black uppercase tracking-wide mb-2">Fetch.ai Agentverse</h4>
                  <p className="text-sm text-gray-700">
                    Agents deployed and hosted on Fetch.ai's decentralized agent platform
                  </p>
                </div>
                <div className="border-2 border-black p-6">
                  <h4 className="font-black uppercase tracking-wide mb-2">Lava Gateway</h4>
                  <p className="text-sm text-gray-700">
                    Routes model calls efficiently with built-in reliability and cost optimization
                  </p>
                </div>
                <div className="border-2 border-black p-6">
                  <h4 className="font-black uppercase tracking-wide mb-2">Claude AI</h4>
                  <p className="text-sm text-gray-700">
                    Powers intelligent negotiation logic and decision-making for both agents
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

