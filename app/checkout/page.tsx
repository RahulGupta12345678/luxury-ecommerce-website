'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CreditCard, Smartphone, Building2, Wallet, Lock, ArrowLeft } from 'lucide-react'
import { Playfair_Display, Inter } from 'next/font/google'
import { useCartStore } from '@/store/cartStore'
import { formatPrice } from '@/utils/formatPrice'
import Link from 'next/link'

const playfair = Playfair_Display({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCartStore()
  const [selectedPayment, setSelectedPayment] = useState('card')
  const [isProcessing, setIsProcessing] = useState(false)

  const subtotal = getTotalPrice()
  const tax = Math.round(subtotal * 0.18)
  const shipping = subtotal > 50000 ? 0 : 500
  const total = subtotal + tax + shipping

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Visa, Mastercard, RuPay'
    },
    {
      id: 'upi',
      name: 'UPI',
      icon: Smartphone,
      description: 'PhonePe, GPay, Paytm'
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: Building2,
      description: 'All major banks'
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      icon: Wallet,
      description: 'Paytm, Amazon Pay'
    }
  ]

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      alert('Payment Successful! Order placed successfully.')
      clearCart()
      setIsProcessing(false)
    }, 3000)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">No items in cart</h1>
          <Link href="/products" className="luxury-button">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/cart" className="flex items-center text-gray-400 hover:text-[#f5c542] mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cart
          </Link>
          <h1 className={`${playfair.className} text-4xl font-bold text-white mb-2`}>
            Checkout
          </h1>
          <p className="text-gray-400">Complete your luxury purchase</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card p-6 mb-6">
              <h2 className={`${playfair.className} text-2xl font-bold text-white mb-6`}>
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{item.name}</h3>
                      <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                      <p className="text-[#f5c542] font-bold">
                        ₹{formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>₹{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax (18%)</span>
                  <span>₹{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span className="text-gradient">₹{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment & Shipping */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Shipping Address */}
            <div className="glass-card p-6">
              <h3 className={`${playfair.className} text-xl font-bold text-white mb-4`}>
                Shipping Address
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#f5c542]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#f5c542]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#f5c542] sm:col-span-2"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#f5c542] sm:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#f5c542] sm:col-span-2"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#f5c542]"
                />
                <input
                  type="text"
                  placeholder="PIN Code"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#f5c542]"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="glass-card p-6">
              <h3 className={`${playfair.className} text-xl font-bold text-white mb-4`}>
                Payment Method
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {paymentMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <motion.button
                      key={method.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        selectedPayment === method.id
                          ? 'border-[#f5c542] bg-[#f5c542]/10'
                          : 'border-white/10 bg-white/5 hover:border-[#f5c542]/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${
                          selectedPayment === method.id ? 'text-[#f5c542]' : 'text-gray-400'
                        }`} />
                        <div className="text-left">
                          <p className="text-white font-semibold text-sm">{method.name}</p>
                          <p className="text-gray-400 text-xs">{method.description}</p>
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              {/* Payment Details */}
              {selectedPayment === 'card' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#f5c542]"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#f5c542]"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#f5c542]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#f5c542]"
                  />
                </motion.div>
              )}

              {selectedPayment === 'upi' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    placeholder="UPI ID (e.g., user@paytm)"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#f5c542]"
                  />
                </motion.div>
              )}
            </div>

            {/* Place Order */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                isProcessing
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#f5c542] to-[#ffd700] text-black hover:shadow-lg hover:shadow-[#f5c542]/30'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Lock className="w-5 h-5" />
                {isProcessing ? 'Processing...' : `Pay ₹${formatPrice(total)}`}
              </div>
            </motion.button>

            <p className="text-center text-gray-400 text-sm">
              Your payment information is secure and encrypted
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}