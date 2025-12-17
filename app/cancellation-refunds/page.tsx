'use client'
import { motion } from 'framer-motion'
import { Playfair_Display, Inter } from 'next/font/google'
import { FileText, RotateCcw, AlertCircle, CheckCircle } from 'lucide-react'

const playfair = Playfair_Display({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function CancellationRefundsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`${playfair.className} text-4xl lg:text-6xl font-bold text-white mb-6`}>
            Cancellation & <span className="text-gradient">Refunds</span>
          </h1>
          <p className={`${inter.className} text-xl text-gray-400 max-w-2xl mx-auto`}>
            Our commitment to your satisfaction includes a transparent and fair cancellation and refund process.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Order Cancellation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-r from-[#f5c542] to-[#ffd700] rounded-xl shrink-0">
                <FileText className="w-6 h-6 text-black" />
              </div>
              <div className="space-y-4">
                <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                  Order Cancellation
                </h2>
                <div className={`${inter.className} text-gray-300 space-y-4`}>
                  <p>
                    You may cancel your order within 24 hours of placement for a full refund. After 24 hours, if the order has not yet been shipped, a cancellation fee of 5% may apply.
                  </p>
                  <p>
                    Once an order has been shipped, it cannot be cancelled. You will need to wait for the package to arrive and initiate a return.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Refund Policy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-r from-[#f5c542] to-[#ffd700] rounded-xl shrink-0">
                <RotateCcw className="w-6 h-6 text-black" />
              </div>
              <div className="space-y-4">
                <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                  Return & Refund Eligibility
                </h2>
                <div className={`${inter.className} text-gray-300 space-y-4`}>
                  <p>
                    We express strict quality control, but if you are not satisfied, you may return items within 7 days of delivery.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>Items must be unused and in original condition.</li>
                    <li>Original tags and packaging must be intact.</li>
                    <li>Proof of purchase is required.</li>
                    <li>Personalized or custom items are not eligible for return.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Damaged Items */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-r from-[#f5c542] to-[#ffd700] rounded-xl shrink-0">
                <AlertCircle className="w-6 h-6 text-black" />
              </div>
              <div className="space-y-4">
                <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                  Damaged or Defective Items
                </h2>
                <div className={`${inter.className} text-gray-300 space-y-4`}>
                  <p>
                    If you receive a damaged or defective item, please notify us within 48 hours of delivery. We will arrange for a pickup and replacement at no extra cost to you.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-r from-[#f5c542] to-[#ffd700] rounded-xl shrink-0">
                <CheckCircle className="w-6 h-6 text-black" />
              </div>
              <div className="space-y-4">
                <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                  Refund Process
                </h2>
                <div className={`${inter.className} text-gray-300 space-y-4`}>
                  <p>
                    Once we receive and inspect your return, we will notify you of the approval or rejection of your refund.
                  </p>
                  <p>
                    If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-7 business days.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
