# AgentMarket

> **Never get ghosted again.** An AI-powered marketplace where intelligent agents negotiate deals on behalf of buyers and sellers, closing deals 10x faster with zero hassle.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

## The Problem

Traditional online marketplaces like Facebook Marketplace suffer from:
- **Ghosting**: Sellers and buyers disappear mid-negotiation
- **Delays**: Deals take weeks or months to close
- **Time waste**: Endless back-and-forth messaging
- **Missed opportunities**: Good deals fall through due to slow responses

## Our Solution

AgentMarket uses AI agents powered by [Fetch.ai's Agentverse](https://fetch.ai/) to automate the negotiation process. Both buyers and sellers have their own AI agents that:

1. **Understand intent**: Know their client's goals and price constraints
2. **Negotiate intelligently**: Communicate in real-time to find mutually beneficial deals
3. **Act autonomously**: Handle the entire negotiation without constant human input
4. **Request intervention**: Alert humans only at critical moments (final offers, meeting confirmations)

## Hackathon Sponsor Tracks

This project is designed to hit multiple sponsor tracks:

### Primary Tracks
- **Fetch.ai** : AI Agents built on Agentverse that understand user goals & take action
- **Arize**: Tracing, debugging, and evaluation for AI agents
- **Letta**: Deploy agents with Letta cloud for awesome AI agent experience
- **Rox**: Build AI agents that handle messy, real-world data robustly

### Additional Tracks
- **sim.ai**: AI agents that perform autonomous tasks
- **Composio**: Integration with thousands of apps for complex agent workflows

## Features

### For Buyers
- Browse marketplace catalog with search and filters
- Select products and set maximum bid price
- Watch AI agents negotiate in real-time
- Receive notifications at critical checkpoints
- View active and completed deal history

### For Sellers
- List products on the marketplace
- Set listing prices and minimum acceptable offers
- Monitor AI agent negotiations across all listings
- Confirm final deals when agents reach agreement
- Track bidding activity and deal status

### Intelligent Negotiation System

The AI agents handle three types of scenarios:

1. **Seller's Price > Buyer's Max**: Buyer agent negotiates downward
2. **Prices Match/Close**: Quick deal closure
3. **Buyer's Max > Seller's Price**: Competitive negotiation or quick acceptance

## Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Radix UI + Custom Components
- **Font**: Inter (modern, highly readable)
- **Animations**: Tailwind Animate

### Backend & AI
- **AI Agent Platform**: [Fetch.ai Agentverse](https://fetch.ai/)
- **LLM Gateway**: Lava Network → Claude
- **Agent Monitoring**: Arize
- **Agent Hosting**: Letta Cloud

### Data
- Mock data sourced from real-world product listings
- Handles unstructured, messy data (Rox track requirement)
- Stored in TypeScript files for rapid prototyping

## User Flow

### Buyer Journey
1. **Land** → Choose "Join as Buyer"
2. **Browse** → Search marketplace, filter by category
3. **Select** → Click product → Press "Next"
4. **Set Price** → Enter maximum bid → Press "Next"
5. **Watch** → View AI agent negotiating in real-time
6. **Confirm** → Approve final deal or meeting details
7. **Track** → See all active/completed bids

### Seller Journey
1. **Land** → Choose "Join as Seller"
2. **List** → Add products to marketplace
3. **Monitor** → View all active listings and bids
4. **Watch** → AI agent handles multiple negotiations
5. **Confirm** → Approve final deals
6. **Track** → See deal history and analytics

## Project Structure

```
marketplace/
├── app/
│   ├── page.tsx                 # Landing page with role selection
│   ├── marketplace/             # Buyer marketplace view
│   │   └── page.tsx
│   ├── buyer/
│   │   └── bids/               # Active bids & chat interface
│   │       └── page.tsx
│   ├── seller/
│   │   └── listings/           # Seller listings & negotiations
│   │       └── page.tsx
│   ├── layout.tsx              # Root layout (Inter font)
│   └── globals.css             # Global styles & theme
├── components/
│   ├── navigation.tsx          # Top navigation bar
│   ├── marketplace-sidebar.tsx # Category filters & search
│   ├── product-grid.tsx        # Product display grid
│   ├── product-details-dialog.tsx # Product detail popup
│   ├── bids-list.tsx          # Buyer's active bids
│   ├── seller-listings-list.tsx # Seller's listings
│   ├── chat-interface.tsx     # Real-time agent chat
│   └── ui/                    # Reusable UI components
├── lib/
│   ├── mock-data.ts           # Product & bid data
│   └── utils.ts               # Utility functions
└── public/                    # Static assets
```

## Design Philosophy

### Typography
- **Primary Font**: Inter - designed for computer screens, excellent readability
- **Weight Range**: 400-700 for hierarchy
- **Line Height**: Optimized for both body text and UI elements

### Color Scheme
- **Primary**: Navy blue tones for trust and professionalism
- **Accent**: Complementary blues for highlights
- **Neutral**: Black, white, and grays for clarity
- **Semantic**: Clear success, warning, and error states

### UI/UX Principles
- **Clean & Modern**: Minimal clutter, focus on content
- **Intuitive Navigation**: Clear user flows for both roles
- **Real-time Feedback**: Live updates during negotiations
- **Mobile Responsive**: Works on all screen sizes

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- pnpm, npm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/agentmarket.git
cd agentmarket

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Mock Data

The project includes extensive mock data (33+ products across 8 categories) sourced from real marketplace listings. This provides:
- **Realistic scenarios** for testing agent negotiations
- **Diverse product types** (electronics, furniture, books, etc.)
- **Price variations** to test different negotiation cases
- **Messy data handling** (Rox track requirement)

Categories include:
- Electronics
- Computers
- Apparel
- Books
- Home Goods
- Entertainment
- Sports & Outdoors
- School Supplies

## AI Agent Architecture

### Agent Components
1. **Buyer Agent**
   - Understands buyer's max price constraint
   - Analyzes market conditions
   - Negotiates to get best deal within budget
   - Alerts buyer at critical moments

2. **Seller Agent**
   - Knows listing price and minimum acceptable offer
   - Evaluates buyer offers
   - Counter-offers strategically
   - Confirms deals with seller

### Communication Protocol
- Agents communicate via structured messages
- Real-time chat interface for human monitoring
- Automatic checkpoints for human approval
- Deal history and audit trail

### Integration Points
- **Agentverse**: Agent creation and management
- **Lava Gateway**: LLM calls to Claude for decision-making
- **Arize**: Agent performance monitoring
- **Letta Cloud**: Agent hosting and deployment

## Monitoring & Analytics

Using Arize, users can:
- Track agent performance metrics
- View negotiation success rates
- Analyze pricing patterns
- Debug failed negotiations
- Optimize agent strategies

## Future Enhancements

- [ ] Multi-item bundle negotiations
- [ ] Escrow payment integration
- [ ] Reputation system for users
- [ ] Advanced filters and recommendations
- [ ] Mobile app (React Native)
- [ ] Image recognition for product verification
- [ ] Delivery/pickup coordination agents
- [ ] Cross-marketplace arbitrage

