// Category-specific product icons for visual appeal
export const productIcons: Record<string, string> = {
  "Electronics": "📱",
  "Computers": "💻",
  "Apparel": "👕",
  "Books": "📚",
  "Home Goods": "🏠",
  "Entertainment": "🎮",
  "Sports & Outdoors": "⚽",
  "School Supplies": "✏️",
}

export function getProductIcon(category: string): string {
  return productIcons[category] || "📦"
}

