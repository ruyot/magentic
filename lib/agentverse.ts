/**
 * Agentverse API Integration
 * Connects to deployed Fetch.ai agents for real-time negotiation
 */

export const AGENT_ADDRESSES = {
  seller: "agent1qdfdtamlep3j3536qpktqj284ypkuj0d9ns8j9ywxuedmez0hckhug3cmkk",
  buyer: "agent1qvwdru4myafsv7xyvxhxpcpkrhpvuqn6ae2jge3vg6cmwxtkwj3wzlakt98",
} as const

export interface AgentInfo {
  address: string
  name: string
  readme: string
  running: boolean
  compiled: boolean
  revision: number
  wallet_address: string
}

export interface NegotiationMessage {
  from: "buyer" | "seller"
  message: string
  offer?: number
  timestamp: string
  agentAddress: string
}

/**
 * Get agent information from Agentverse
 */
export async function getAgentInfo(agentAddress: string): Promise<AgentInfo | null> {
  try {
    const response = await fetch(`https://agentverse.ai/v1/search/agents/${agentAddress}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      console.error(`Failed to fetch agent info: ${response.status}`)
      return null
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching agent info:", error)
    return null
  }
}

/**
 * Send negotiation request to buyer agent
 */
export async function sendBuyerNegotiation(params: {
  productId: string
  productTitle: string
  listingPrice: number
  maxBuyerPrice: number
  currentOffer?: number
}): Promise<NegotiationMessage | null> {
  try {
    // In production, this would be a POST request to the agent's endpoint
    // For now, we'll simulate the agent's response structure
    
    const agentInfo = await getAgentInfo(AGENT_ADDRESSES.buyer)
    
    if (!agentInfo) {
      throw new Error("Buyer agent not available")
    }

    // This is where you'd make the actual agent call
    // The agent would analyze and return a negotiation message
    return {
      from: "buyer",
      message: `Buyer agent analyzing offer for ${params.productTitle}...`,
      offer: params.currentOffer,
      timestamp: new Date().toISOString(),
      agentAddress: AGENT_ADDRESSES.buyer,
    }
  } catch (error) {
    console.error("Error contacting buyer agent:", error)
    return null
  }
}

/**
 * Send negotiation request to seller agent
 */
export async function sendSellerNegotiation(params: {
  productId: string
  productTitle: string
  listingPrice: number
  minSellerPrice: number
  buyerOffer: number
}): Promise<NegotiationMessage | null> {
  try {
    const agentInfo = await getAgentInfo(AGENT_ADDRESSES.seller)
    
    if (!agentInfo) {
      throw new Error("Seller agent not available")
    }

    // This is where you'd make the actual agent call
    return {
      from: "seller",
      message: `Seller agent considering offer of $${params.buyerOffer}...`,
      offer: params.buyerOffer,
      timestamp: new Date().toISOString(),
      agentAddress: AGENT_ADDRESSES.seller,
    }
  } catch (error) {
    console.error("Error contacting seller agent:", error)
    return null
  }
}

/**
 * Simulate agent negotiation based on actual agent logic
 * This mirrors the behavior of our deployed Fetch.ai agents
 * 
 * In production, agents would communicate via uAgents protocol on Fetch.ai
 * For demo purposes, this simulates their intelligent negotiation behavior
 */
export async function startAgentNegotiation(params: {
  productId: string
  productTitle: string
  listingPrice: number
  maxBuyerPrice: number
  minSellerPrice?: number
  onMessage?: (message: NegotiationMessage) => void
}): Promise<{ messages: NegotiationMessage[]; finalOffer?: number }> {
  const messages: NegotiationMessage[] = []
  
  console.log("🤖 Starting agent negotiation for:", params.productTitle)
  console.log("📊 Listing price:", params.listingPrice)
  console.log("💰 Buyer max:", params.maxBuyerPrice)
  
  try {
    // Simulate agent thinking time
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // STEP 1: Buyer Agent analyzes and makes initial offer
    // Uses same logic as deployed agent: starts below max, strategic offering
    const sellerFloor = params.minSellerPrice || Math.floor(params.listingPrice * 0.85)
    const initialOffer = Math.floor(params.maxBuyerPrice * 0.91) // Strategic: ~91% of max
    
    const buyerMessage: NegotiationMessage = {
      from: "buyer",
      message: `Hey! Before we talk price — any scratches on the screen or body? I'm interested in the ${params.productTitle}.`,
      timestamp: new Date().toISOString(),
      agentAddress: AGENT_ADDRESSES.buyer,
    }
    
    messages.push(buyerMessage)
    params.onMessage?.(buyerMessage)
    
    // Simulate seller pre-check response
    await new Promise(resolve => setTimeout(resolve, 1200))
    
    const sellerPrecheck: NegotiationMessage = {
      from: "seller",
      message: "There's a tiny hairline scratch on the screen—barely noticeable; everything else is mint.",
      timestamp: new Date().toISOString(),
      agentAddress: AGENT_ADDRESSES.seller,
    }
    
    messages.push(sellerPrecheck)
    params.onMessage?.(sellerPrecheck)
    
    // Buyer makes offer after precheck
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const buyerOfferMessage: NegotiationMessage = {
      from: "buyer",
      message: `Appreciate it. Given the tiny screen scratch, could you do $${initialOffer}?`,
      offer: initialOffer,
      timestamp: new Date().toISOString(),
      agentAddress: AGENT_ADDRESSES.buyer,
    }
    
    messages.push(buyerOfferMessage)
    params.onMessage?.(buyerOfferMessage)
    
    // STEP 2: Seller Agent counters strategically
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Seller starts high, but below listing
    const sellerCounter1 = Math.floor(params.listingPrice * 0.96)
    
    const sellerCounter1Message: NegotiationMessage = {
      from: "seller",
      message: `Hi — I can do $${sellerCounter1}.`,
      offer: sellerCounter1,
      timestamp: new Date().toISOString(),
      agentAddress: AGENT_ADDRESSES.seller,
    }
    
    messages.push(sellerCounter1Message)
    params.onMessage?.(sellerCounter1Message)
    
    // STEP 3: Buyer negotiates closer
    await new Promise(resolve => setTimeout(resolve, 1200))
    
    const buyerCounter2 = Math.floor(params.maxBuyerPrice * 0.97)
    
    const buyerCounter2Message: NegotiationMessage = {
      from: "buyer",
      message: `Could you do $${buyerCounter2}? I can meet downtown.`,
      offer: buyerCounter2,
      timestamp: new Date().toISOString(),
      agentAddress: AGENT_ADDRESSES.buyer,
    }
    
    messages.push(buyerCounter2Message)
    params.onMessage?.(buyerCounter2Message)
    
    // STEP 4: Seller accepts or final counter
    await new Promise(resolve => setTimeout(resolve, 1400))
    
    // Find middle ground - final offer
    const finalOffer = Math.floor((buyerCounter2 + sellerCounter1) / 2)
    
    if (finalOffer >= sellerFloor && finalOffer <= params.maxBuyerPrice) {
      const sellerFinalMessage: NegotiationMessage = {
        from: "seller",
        message: `Hi — I can do $${finalOffer}.`,
        offer: finalOffer,
        timestamp: new Date().toISOString(),
        agentAddress: AGENT_ADDRESSES.seller,
      }
      
      messages.push(sellerFinalMessage)
      params.onMessage?.(sellerFinalMessage)
      
      // Buyer accepts
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const buyerAcceptMessage: NegotiationMessage = {
        from: "buyer",
        message: `Deal at $${finalOffer}! Let's set a time.`,
        offer: finalOffer,
        timestamp: new Date().toISOString(),
        agentAddress: AGENT_ADDRESSES.buyer,
      }
      
      messages.push(buyerAcceptMessage)
      params.onMessage?.(buyerAcceptMessage)
      
      // Coordinate meetup
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const buyerMeetupMessage: NegotiationMessage = {
        from: "buyer",
        message: "Can meet today 6:00 PM–8:00 PM at Union Station. Does that work?",
        timestamp: new Date().toISOString(),
        agentAddress: AGENT_ADDRESSES.buyer,
      }
      
      messages.push(buyerMeetupMessage)
      params.onMessage?.(buyerMeetupMessage)
      
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const sellerMeetupMessage: NegotiationMessage = {
        from: "seller",
        message: "Great — see you today 6:00 PM–8:00 PM at Union Station.",
        timestamp: new Date().toISOString(),
        agentAddress: AGENT_ADDRESSES.seller,
      }
      
      messages.push(sellerMeetupMessage)
      params.onMessage?.(sellerMeetupMessage)
      
      console.log("✅ Negotiation complete! Final price:", finalOffer)
      
      return {
        messages,
        finalOffer,
      }
    }
    
    return {
      messages,
      finalOffer: messages[messages.length - 1]?.offer,
    }
  } catch (error) {
    console.error("❌ Error in negotiation:", error)
    
    // Fallback message
    const fallbackMessage: NegotiationMessage = {
      from: "buyer",
      message: `Analyzing ${params.productTitle}...`,
      timestamp: new Date().toISOString(),
      agentAddress: AGENT_ADDRESSES.buyer,
    }
    
    messages.push(fallbackMessage)
    params.onMessage?.(fallbackMessage)
    
    return { messages }
  }
}

/**
 * Check if agents are currently running
 */
export async function checkAgentsStatus(): Promise<{
  buyer: boolean
  seller: boolean
}> {
  try {
    const [buyerInfo, sellerInfo] = await Promise.all([
      getAgentInfo(AGENT_ADDRESSES.buyer),
      getAgentInfo(AGENT_ADDRESSES.seller),
    ])

    return {
      buyer: buyerInfo?.running ?? false,
      seller: sellerInfo?.running ?? false,
    }
  } catch (error) {
    console.error("Error checking agent status:", error)
    return { buyer: false, seller: false }
  }
}

