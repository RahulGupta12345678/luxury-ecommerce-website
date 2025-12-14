import { NextResponse } from 'next/server'

// In-memory cart storage (use database in production)
let cartItems: any[] = []

export async function GET() {
  return NextResponse.json({ items: cartItems })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { action, productId, quantity, product } = body
  
  switch (action) {
    case 'add':
      const existingItem = cartItems.find(item => item.id === productId)
      if (existingItem) {
        existingItem.quantity += quantity || 1
      } else {
        cartItems.push({ ...product, quantity: quantity || 1 })
      }
      break
      
    case 'remove':
      cartItems = cartItems.filter(item => item.id !== productId)
      break
      
    case 'update':
      const itemToUpdate = cartItems.find(item => item.id === productId)
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity
      }
      break
      
    case 'clear':
      cartItems = []
      break
  }
  
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  
  return NextResponse.json({ 
    items: cartItems, 
    total,
    totalItems 
  })
}