import { NextResponse } from 'next/server'
import products from '@/data/products.json'

export async function GET() {
  return NextResponse.json(products)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { search, category, minPrice, maxPrice, sortBy } = body
  
  let filteredProducts = [...products]
  
  // Search filter
  if (search) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    )
  }
  
  // Price filter
  if (minPrice) {
    filteredProducts = filteredProducts.filter(product => product.price >= minPrice)
  }
  if (maxPrice) {
    filteredProducts = filteredProducts.filter(product => product.price <= maxPrice)
  }
  
  // Sort
  if (sortBy) {
    switch (sortBy) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating)
        break
      default:
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
    }
  }
  
  return NextResponse.json(filteredProducts)
}