export interface Product {
  id: string
  title: string
  price: number
  location: string
  category: string
  image: string
  description: string
  sellerId: string
  condition?: string
}

export interface Bid {
  id: string
  productId: string
  maxPrice: number
  currentOffer: number
  status: "active" | "won" | "lost"
  messages: ChatMessage[]
}

export interface ChatMessage {
  id: string
  sender: "buyer-agent" | "seller-agent"
  message: string
  timestamp: Date
}

export const categories = [
  "Electronics",
  "Computers",
  "Apparel",
  "Books",
  "Home Goods",
  "Entertainment",
  "Sports & Outdoors",
  "School Supplies",
]

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "MacBook Pro 14-inch M3 Pro",
    price: 1899,
    location: "Berkeley, CA",
    category: "Computers",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Barely used MacBook Pro with M3 Pro chip, 16GB RAM, 512GB SSD. Perfect for students and professionals. Includes original box and charger.",
    sellerId: "seller1",
    condition: "Like New",
  },
  {
    id: "2",
    title: "iPhone 15 Pro 256GB - Blue Titanium",
    price: 899,
    location: "Stanford, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Unlocked iPhone 15 Pro in excellent condition. Battery health at 98%. Comes with case and screen protector.",
    sellerId: "seller2",
    condition: "Excellent",
  },
  {
    id: "3",
    title: "iPad Air 5th Gen with Apple Pencil",
    price: 549,
    location: "Palo Alto, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "64GB iPad Air in space gray with 2nd gen Apple Pencil. Great for note-taking and digital art. Includes keyboard case.",
    sellerId: "seller3",
    condition: "Very Good",
  },
  {
    id: "4",
    title: "Sony WH-1000XM5 Noise Cancelling Headphones",
    price: 299,
    location: "San Jose, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Premium noise-cancelling headphones in black. Perfect for studying or commuting. Includes carrying case and all accessories.",
    sellerId: "seller4",
    condition: "Like New",
  },
  {
    id: "5",
    title: "AirPods Pro 2nd Generation",
    price: 189,
    location: "Mountain View, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Sealed AirPods Pro with USB-C charging case. Active noise cancellation and spatial audio. Never opened.",
    sellerId: "seller5",
    condition: "New",
  },
  {
    id: "6",
    title: 'Samsung 27" 4K Monitor',
    price: 279,
    location: "Sunnyvale, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Crystal clear 4K display perfect for coding and content creation. HDMI and USB-C connectivity. Adjustable stand included.",
    sellerId: "seller1",
    condition: "Excellent",
  },
  {
    id: "7",
    title: "Logitech MX Master 3S Wireless Mouse",
    price: 79,
    location: "Cupertino, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Ergonomic wireless mouse with precision scrolling. Works on any surface. Battery lasts up to 70 days.",
    sellerId: "seller2",
    condition: "Very Good",
  },
  {
    id: "8",
    title: "Mechanical Keyboard - Cherry MX Blue",
    price: 119,
    location: "San Francisco, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "RGB backlit mechanical keyboard with Cherry MX Blue switches. Perfect for typing and gaming. USB-C connection.",
    sellerId: "seller3",
    condition: "Like New",
  },
  {
    id: "9",
    title: "Anker 20000mAh Power Bank",
    price: 45,
    location: "Oakland, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "High-capacity portable charger with fast charging. Can charge phone 4-5 times. Dual USB ports and USB-C.",
    sellerId: "seller4",
    condition: "New",
  },
  {
    id: "10",
    title: "USB-C Hub 7-in-1 Adapter",
    price: 35,
    location: "Fremont, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Essential hub with HDMI, USB 3.0, SD card reader, and more. Perfect for MacBooks and laptops with limited ports.",
    sellerId: "seller5",
    condition: "New",
  },
  {
    id: "11",
    title: "Calculus Textbook - 9th Edition",
    price: 89,
    location: "Berkeley, CA",
    category: "Books",
    image: "/placeholder.svg?height=300&width=400",
    description: "Stewart Calculus textbook in great condition. Minimal highlighting. Perfect for MATH 1A/1B courses.",
    sellerId: "seller1",
    condition: "Good",
  },
  {
    id: "12",
    title: "Nintendo Switch OLED with Games",
    price: 299,
    location: "San Mateo, CA",
    category: "Entertainment",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Switch OLED console with 3 games: Zelda, Mario Kart, and Animal Crossing. Includes carrying case and extra controller.",
    sellerId: "seller2",
    condition: "Very Good",
  },
  {
    id: "13",
    title: "Backpack - North Face Surge",
    price: 79,
    location: "Redwood City, CA",
    category: "Apparel",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Durable laptop backpack with padded compartment for 15-inch laptop. Multiple pockets and water bottle holders.",
    sellerId: "seller3",
    condition: "Like New",
  },
  {
    id: "14",
    title: "Desk Lamp with Wireless Charging",
    price: 42,
    location: "Milpitas, CA",
    category: "Home Goods",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "LED desk lamp with adjustable brightness and color temperature. Built-in wireless charging pad for phones.",
    sellerId: "seller4",
    condition: "New",
  },
  {
    id: "15",
    title: "Bose SoundLink Bluetooth Speaker",
    price: 99,
    location: "Santa Clara, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description: "Portable Bluetooth speaker with amazing sound quality. 12-hour battery life. Perfect for dorm rooms.",
    sellerId: "seller5",
    condition: "Excellent",
  },
  {
    id: "16",
    title: "Canon EOS M50 Camera with Lens",
    price: 549,
    location: "San Jose, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Mirrorless camera perfect for vlogging and photography. Includes 15-45mm lens, SD card, and camera bag.",
    sellerId: "seller1",
    condition: "Very Good",
  },
  {
    id: "17",
    title: "Electric Scooter - Xiaomi Mi",
    price: 349,
    location: "Palo Alto, CA",
    category: "Sports & Outdoors",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Foldable electric scooter with 18-mile range. Great for campus commuting. Includes lock and phone holder.",
    sellerId: "seller2",
    condition: "Good",
  },
  {
    id: "18",
    title: "Instant Pot Duo 6-Quart",
    price: 69,
    location: "Sunnyvale, CA",
    category: "Home Goods",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "7-in-1 programmable pressure cooker. Perfect for quick dorm meals. Barely used, includes recipe book.",
    sellerId: "seller3",
    condition: "Like New",
  },
  {
    id: "19",
    title: "Kindle Paperwhite 11th Gen",
    price: 119,
    location: "Mountain View, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Waterproof e-reader with adjustable warm light. 16GB storage holds thousands of books. Includes cover.",
    sellerId: "seller4",
    condition: "Excellent",
  },
  {
    id: "20",
    title: "Yoga Mat with Carrying Strap",
    price: 29,
    location: "Fremont, CA",
    category: "Sports & Outdoors",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Extra thick yoga mat with non-slip surface. Includes carrying strap and storage bag. Perfect for fitness classes.",
    sellerId: "seller5",
    condition: "New",
  },
  {
    id: "21",
    title: "Apple Watch Series 9 GPS 45mm",
    price: 349,
    location: "Berkeley, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Midnight aluminum case with sport band. Tracks fitness and health metrics. Includes charger and extra band.",
    sellerId: "seller1",
    condition: "Like New",
  },
  {
    id: "22",
    title: "Dyson V8 Cordless Vacuum",
    price: 249,
    location: "San Francisco, CA",
    category: "Home Goods",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Lightweight cordless vacuum perfect for apartments. 40-minute runtime. Includes multiple attachments.",
    sellerId: "seller2",
    condition: "Very Good",
  },
  {
    id: "23",
    title: "Hydro Flask 32oz Water Bottle",
    price: 32,
    location: "Oakland, CA",
    category: "Sports & Outdoors",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Insulated stainless steel water bottle keeps drinks cold for 24 hours. Wide mouth design. Multiple colors available.",
    sellerId: "seller3",
    condition: "New",
  },
  {
    id: "24",
    title: "Ring Light with Tripod Stand",
    price: 45,
    location: "San Jose, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "10-inch LED ring light with adjustable tripod. Perfect for video calls, streaming, and content creation.",
    sellerId: "seller4",
    condition: "Like New",
  },
  {
    id: "25",
    title: "Patagonia Fleece Jacket - Medium",
    price: 89,
    location: "Cupertino, CA",
    category: "Apparel",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Classic Patagonia fleece in navy blue. Size medium, fits true to size. Warm and comfortable for campus.",
    sellerId: "seller5",
    condition: "Excellent",
  },
  {
    id: "26",
    title: "Graphing Calculator TI-84 Plus",
    price: 79,
    location: "Palo Alto, CA",
    category: "School Supplies",
    image: "/placeholder.svg?height=300&width=400",
    description: "Essential calculator for math and science courses. Includes protective case and fresh batteries.",
    sellerId: "seller1",
    condition: "Good",
  },
  {
    id: "27",
    title: "Desk Chair - Ergonomic Office",
    price: 149,
    location: "Sunnyvale, CA",
    category: "Home Goods",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Comfortable mesh office chair with lumbar support. Adjustable height and armrests. Perfect for long study sessions.",
    sellerId: "seller2",
    condition: "Very Good",
  },
  {
    id: "28",
    title: "Portable SSD 1TB - Samsung T7",
    price: 89,
    location: "Mountain View, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description: "Ultra-fast external SSD with USB-C. Transfer speeds up to 1050MB/s. Compact and durable design.",
    sellerId: "seller3",
    condition: "New",
  },
  {
    id: "29",
    title: "Coffee Maker - Keurig K-Mini",
    price: 59,
    location: "San Mateo, CA",
    category: "Home Goods",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Compact single-serve coffee maker perfect for dorms. Brews in minutes. Includes starter pack of K-cups.",
    sellerId: "seller4",
    condition: "Like New",
  },
  {
    id: "30",
    title: "Wireless Earbuds - Jabra Elite",
    price: 79,
    location: "Fremont, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "True wireless earbuds with active noise cancellation. 28-hour battery life with case. Great sound quality.",
    sellerId: "seller5",
    condition: "Excellent",
  },
  {
    id: "31",
    title: "Standing Desk Converter",
    price: 129,
    location: "Berkeley, CA",
    category: "Home Goods",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Adjustable height desk converter. Easy to set up on any desk. Promotes better posture during study sessions.",
    sellerId: "seller1",
    condition: "Very Good",
  },
  {
    id: "32",
    title: "Webcam 1080p with Microphone",
    price: 49,
    location: "San Francisco, CA",
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "HD webcam with built-in microphone. Auto-focus and light correction. Perfect for online classes and meetings.",
    sellerId: "seller2",
    condition: "New",
  },
  {
    id: "33",
    title: "Whiteboard 24x36 with Markers",
    price: 25,
    location: "Oakland, CA",
    category: "School Supplies",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Magnetic dry erase board with aluminum frame. Includes 4 markers and eraser. Great for brainstorming.",
    sellerId: "seller3",
    condition: "New",
  },
]

export function generateMockMessages(productId: string, maxPrice: number, productPrice: number): ChatMessage[] {
  const currentOffer = Math.floor((maxPrice + productPrice) / 2)

  return [
    {
      id: "1",
      sender: "buyer-agent",
      message: `Hello! I'm interested in this item listed at $${productPrice}. My client has authorized me to negotiate up to $${maxPrice}.`,
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: "2",
      sender: "seller-agent",
      message: `Thank you for your interest! The item is in excellent condition. Would your client consider $${productPrice - 50}?`,
      timestamp: new Date(Date.now() - 3000000),
    },
    {
      id: "3",
      sender: "buyer-agent",
      message: `I appreciate the offer. Based on market analysis, I can propose $${currentOffer}. This is a fair price considering similar items.`,
      timestamp: new Date(Date.now() - 1800000),
    },
    {
      id: "4",
      sender: "seller-agent",
      message: `Let me discuss this with my client. That's within a reasonable range. Can we meet at $${currentOffer + 25}?`,
      timestamp: new Date(Date.now() - 900000),
    },
    {
      id: "5",
      sender: "buyer-agent",
      message: `I'm analyzing this counteroffer. Checking if it fits within my client's budget parameters...`,
      timestamp: new Date(Date.now() - 300000),
    },
  ]
}
