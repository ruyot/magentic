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
  priceRange?: {
    min: number
    max: number
  }
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
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    description:
      "Barely used MacBook Pro with M3 Pro chip, 16GB RAM, 512GB SSD. Perfect for students and professionals. Includes original box and charger.",
    sellerId: "seller1",
    condition: "Like New",
    priceRange: { min: 1700, max: 2100 },
  },
  {
    id: "2",
    title: "iPhone 13 128GB - Blue",
    price: 640,
    location: "Stanford, CA",
    category: "Electronics",
    image: "/iphone13.png",
    description:
      "Unlocked iPhone 13, Midnight Blue. Battery health at 90%. Tiny hairline scratch on screen (barely noticeable). Includes original box and USB-C cable.",
    sellerId: "seller2",
    condition: "Excellent",
    priceRange: { min: 580, max: 650 },
  },
  {
    id: "3",
    title: "iPad Air 5th Gen with Apple Pencil",
    price: 549,
    location: "Palo Alto, CA",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    description:
      "64GB iPad Air in space gray with 2nd gen Apple Pencil. Great for note-taking and digital art. Includes keyboard case.",
    sellerId: "seller3",
    condition: "Very Good",
    priceRange: { min: 450, max: 650 },
  },
  {
    id: "4",
    title: "Sony WH-1000XM5 Noise Cancelling Headphones",
    price: 299,
    location: "San Jose, CA",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
    description:
      "Premium noise-cancelling headphones in black. Perfect for studying or commuting. Includes carrying case and all accessories.",
    sellerId: "seller4",
    condition: "Like New",
    priceRange: { min: 250, max: 350 },
  },
  {
    id: "5",
    title: "AirPods Pro 2nd Generation",
    price: 189,
    location: "Mountain View, CA",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
    description:
      "Sealed AirPods Pro with USB-C charging case. Active noise cancellation and spatial audio. Never opened.",
    sellerId: "seller5",
    condition: "New",
    priceRange: { min: 170, max: 220 },
  },
  {
    id: "6",
    title: 'Samsung 27" 4K Monitor',
    price: 279,
    location: "Sunnyvale, CA",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    description:
      "Crystal clear 4K display perfect for coding and content creation. HDMI and USB-C connectivity. Adjustable stand included.",
    sellerId: "seller1",
    condition: "Excellent",
    priceRange: { min: 220, max: 320 },
  },
  {
    id: "7",
    title: "Logitech MX Master 3S Wireless Mouse",
    price: 79,
    location: "Cupertino, CA",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    description:
      "Ergonomic wireless mouse with precision scrolling. Works on any surface. Battery lasts up to 70 days.",
    sellerId: "seller2",
    condition: "Very Good",
    priceRange: { min: 60, max: 95 },
  },
  {
    id: "8",
    title: "Mechanical Keyboard - Cherry MX Blue",
    price: 119,
    location: "San Francisco, CA",
    category: "Electronics",
    image: "/kbmx.png",
    description:
      "RGB backlit mechanical keyboard with Cherry MX Blue switches. Perfect for typing and gaming. USB-C connection.",
    sellerId: "seller3",
    condition: "Like New",
    priceRange: { min: 90, max: 140 },
  },
  {
    id: "9",
    title: "Anker 20000mAh Power Bank",
    price: 45,
    location: "Oakland, CA",
    category: "Electronics",
    image: "/anker.png",
    description:
      "High-capacity portable charger with fast charging. Can charge phone 4-5 times. Dual USB ports and USB-C.",
    sellerId: "seller4",
    condition: "New",
    priceRange: { min: 35, max: 55 },
  },
  {
    id: "10",
    title: "USB-C Hub 7-in-1 Adapter",
    price: 35,
    location: "Fremont, CA",
    category: "Electronics",
    image: "/usbc.png",
    description:
      "Essential hub with HDMI, USB 3.0, SD card reader, and more. Perfect for MacBooks and laptops with limited ports.",
    sellerId: "seller5",
    condition: "New",
    priceRange: { min: 25, max: 45 },
  },
  {
    id: "11",
    title: "Calculus Textbook - 9th Edition",
    price: 89,
    location: "Berkeley, CA",
    category: "Books",
    image: "/calc.png",
    description: "Stewart Calculus textbook in great condition. Minimal highlighting. Perfect for MATH 1A/1B courses.",
    sellerId: "seller1",
    condition: "Good",
    priceRange: { min: 70, max: 110 },
  },
  {
    id: "12",
    title: "Nintendo Switch OLED with Games",
    price: 299,
    location: "San Mateo, CA",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=300&fit=crop",
    description:
      "Switch OLED console with 3 games: Zelda, Mario Kart, and Animal Crossing. Includes carrying case and extra controller.",
    sellerId: "seller2",
    condition: "Very Good",
    priceRange: { min: 250, max: 350 },
  },
  {
    id: "13",
    title: "Backpack",
    price: 79,
    location: "Redwood City, CA",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    description:
      "Durable laptop backpack with padded compartment for 15-inch laptop. Multiple pockets and water bottle holders.",
    sellerId: "seller3",
    condition: "Like New",
    priceRange: { min: 60, max: 95 },
  },
  {
    id: "14",
    title: "Desk Lamp with Wireless Charging",
    price: 42,
    location: "Milpitas, CA",
    category: "Home Goods",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
    description:
      "LED desk lamp with adjustable brightness and color temperature. Built-in wireless charging pad for phones.",
    sellerId: "seller4",
    condition: "New",
    priceRange: { min: 35, max: 55 },
  },
  {
    id: "15",
    title: "UBL Bluetooth Speaker",
    price: 99,
    location: "Santa Clara, CA",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    description: "Portable Bluetooth speaker with amazing sound quality. 12-hour battery life. Perfect for dorm rooms.",
    sellerId: "seller5",
    condition: "Excellent",
    priceRange: { min: 80, max: 120 },
  },
  {
    id: "16",
    title: "Canon EOS M50 Camera with Lens",
    price: 549,
    location: "San Jose, CA",
    category: "Electronics",
    image: "/canon.png",
    description:
      "Mirrorless camera perfect for vlogging and photography. Includes 15-45mm lens, SD card, and camera bag.",
    sellerId: "seller1",
    condition: "Very Good",
    priceRange: { min: 450, max: 650 },
  },
  {
    id: "17",
    title: "Electric Scooter - Xiaomi Mi",
    price: 349,
    location: "Palo Alto, CA",
    category: "Sports & Outdoors",
    image: "/electricscooter.png",
    description:
      "Foldable electric scooter with 18-mile range. Great for campus commuting. Includes lock and phone holder.",
    sellerId: "seller2",
    condition: "Good",
    priceRange: { min: 280, max: 400 },
  },
  {
    id: "18",
    title: "Instant Pot Duo 6-Quart",
    price: 69,
    location: "Sunnyvale, CA",
    category: "Home Goods",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=300&fit=crop",
    description:
      "7-in-1 programmable pressure cooker. Perfect for quick dorm meals. Barely used, includes recipe book.",
    sellerId: "seller3",
    condition: "Like New",
    priceRange: { min: 55, max: 85 },
  },
  {
    id: "19",
    title: "Kindle Paperwhite 11th Gen",
    price: 150,
    location: "Mountain View, CA",
    category: "Electronics",
    image: "/kindle.png",
    description:
      "Waterproof e-reader with adjustable warm light. 16GB storage holds thousands of books. Includes cover.",
    sellerId: "seller4",
    condition: "Excellent",
    priceRange: { min: 130, max: 170 },
  },
  {
    id: "20",
    title: "Yoga Mat with Carrying Strap",
    price: 29,
    location: "Fremont, CA",
    category: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop",
    description:
      "Extra thick yoga mat with non-slip surface. Includes carrying strap and storage bag. Perfect for fitness classes.",
    sellerId: "seller5",
    condition: "New",
    priceRange: { min: 20, max: 40 },
  },
  {
    id: "21",
    title: "Apple Watch Series 9 GPS 45mm",
    price: 349,
    location: "Berkeley, CA",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=300&fit=crop",
    description:
      "Midnight aluminum case with sport band. Tracks fitness and health metrics. Includes charger and extra band.",
    sellerId: "seller1",
    condition: "Like New",
    priceRange: { min: 300, max: 400 },
  },
  {
    id: "22",
    title: "Dyson V8 Cordless Vacuum",
    price: 249,
    location: "San Francisco, CA",
    category: "Home Goods",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop",
    description:
      "Lightweight cordless vacuum perfect for apartments. 40-minute runtime. Includes multiple attachments.",
    sellerId: "seller2",
    condition: "Very Good",
    priceRange: { min: 200, max: 290 },
  },
  {
    id: "23",
    title: "Hydro Flask 32oz Water Bottle",
    price: 32,
    location: "Oakland, CA",
    category: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
    description:
      "Insulated stainless steel water bottle keeps drinks cold for 24 hours. Wide mouth design. Multiple colors available.",
    sellerId: "seller3",
    condition: "New",
    priceRange: { min: 25, max: 40 },
  },
  {
    id: "24",
    title: "Ring Light with Tripod Stand",
    price: 45,
    location: "San Jose, CA",
    category: "Electronics",
    image: "/light.png",
    description:
      "10-inch LED ring light with adjustable tripod. Perfect for video calls, streaming, and content creation.",
    sellerId: "seller4",
    condition: "Like New",
    priceRange: { min: 35, max: 60 },
  },
  {
    id: "25",
    title: "Patagonia Fleece Jacket - Medium",
    price: 89,
    location: "Cupertino, CA",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=300&fit=crop",
    description:
      "Classic Patagonia fleece in navy blue. Size medium, fits true to size. Warm and comfortable for campus.",
    sellerId: "seller5",
    condition: "Excellent",
    priceRange: { min: 70, max: 105 },
  },
  {
    id: "26",
    title: "Graphing Calculator TI-84 Plus",
    price: 79,
    location: "Palo Alto, CA",
    category: "School Supplies",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
    description: "Essential calculator for math and science courses. Includes protective case and fresh batteries.",
    sellerId: "seller1",
    condition: "Good",
    priceRange: { min: 60, max: 95 },
  },
  {
    id: "27",
    title: "Desk Chair - Ergonomic Office",
    price: 149,
    location: "Sunnyvale, CA",
    category: "Home Goods",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=300&fit=crop",
    description:
      "Comfortable mesh office chair with lumbar support. Adjustable height and armrests. Perfect for long study sessions.",
    sellerId: "seller2",
    condition: "Very Good",
    priceRange: { min: 120, max: 180 },
  },
  {
    id: "28",
    title: "Portable SSD 1TB - Samsung T7",
    price: 89,
    location: "Mountain View, CA",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
    description: "Ultra-fast external SSD with USB-C. Transfer speeds up to 1050MB/s. Compact and durable design.",
    sellerId: "seller3",
    condition: "New",
    priceRange: { min: 75, max: 110 },
  },
  {
    id: "29",
    title: "Coffee Maker - Keurig K-Mini",
    price: 59,
    location: "San Mateo, CA",
    category: "Home Goods",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=300&fit=crop",
    description:
      "Compact single-serve coffee maker perfect for dorms. Brews in minutes. Includes starter pack of K-cups.",
    sellerId: "seller4",
    condition: "Like New",
    priceRange: { min: 45, max: 75 },
  },
  {
    id: "30",
    title: "Wireless Earbuds - Jabra Elite",
    price: 79,
    location: "Fremont, CA",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
    description:
      "True wireless earbuds with active noise cancellation. 28-hour battery life with case. Great sound quality.",
    sellerId: "seller5",
    condition: "Excellent",
    priceRange: { min: 65, max: 95 },
  },
  {
    id: "31",
    title: "Standing Desk Converter",
    price: 129,
    location: "Berkeley, CA",
    category: "Home Goods",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=400&h=300&fit=crop",
    description:
      "Adjustable height desk converter. Easy to set up on any desk. Promotes better posture during study sessions.",
    sellerId: "seller1",
    condition: "Very Good",
    priceRange: { min: 100, max: 160 },
  },
  {
    id: "32",
    title: "Webcam 1080p with Microphone",
    price: 49,
    location: "San Francisco, CA",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=400&h=300&fit=crop",
    description:
      "HD webcam with built-in microphone. Auto-focus and light correction. Perfect for online classes and meetings.",
    sellerId: "seller2",
    condition: "New",
    priceRange: { min: 40, max: 65 },
  },
  {
    id: "33",
    title: "Whiteboard 24x36 with Markers",
    price: 25,
    location: "Oakland, CA",
    category: "School Supplies",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
    description:
      "Magnetic dry erase board with aluminum frame. Includes 4 markers and eraser. Great for brainstorming.",
    sellerId: "seller3",
    condition: "New",
    priceRange: { min: 18, max: 35 },
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
