'use client'
import { motion } from 'framer-motion'
import { Playfair_Display, Inter } from 'next/font/google'
import { Truck, Globe, Clock, Package } from 'lucide-react'

const playfair = Playfair_Display({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function ShippingPage() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className={`${playfair.className} text-4xl lg:text-6xl font-bold text-white mb-6`}>
                        Shipping <span className="text-gradient">Policy</span>
                    </h1>
                    <p className={`${inter.className} text-xl text-gray-400 max-w-2xl mx-auto`}>
                        We ensure your premium products reach you safely and on time.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Domestic Shipping */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8"
                    >
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#f5c542] to-[#ffd700] rounded-xl flex items-center justify-center mb-4">
                                <Truck className="w-6 h-6 text-black" />
                            </div>
                            <h2 className={`${playfair.className} text-2xl font-bold text-white mb-4`}>
                                Domestic Shipping
                            </h2>
                            <ul className={`${inter.className} space-y-3 text-gray-300`}>
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#f5c542] rounded-full" />
                                    <span>Free shipping on orders above ₹5000</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#f5c542] rounded-full" />
                                    <span>Standard delivery: 5-7 business days</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#f5c542] rounded-full" />
                                    <span>Express delivery: 2-3 business days</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* International Shipping */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-card p-8"
                    >
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#f5c542] to-[#ffd700] rounded-xl flex items-center justify-center mb-4">
                                <Globe className="w-6 h-6 text-black" />
                            </div>
                            <h2 className={`${playfair.className} text-2xl font-bold text-white mb-4`}>
                                International Shipping
                            </h2>
                            <ul className={`${inter.className} space-y-3 text-gray-300`}>
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#f5c542] rounded-full" />
                                    <span>Available to over 50 countries</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#f5c542] rounded-full" />
                                    <span>Delivery time: 10-15 business days</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#f5c542] rounded-full" />
                                    <span>Customs duties may apply</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Processing */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass-card p-8"
                    >
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#f5c542] to-[#ffd700] rounded-xl flex items-center justify-center mb-4">
                                <Clock className="w-6 h-6 text-black" />
                            </div>
                            <h2 className={`${playfair.className} text-2xl font-bold text-white mb-4`}>
                                Processing Time
                            </h2>
                            <p className={`${inter.className} text-gray-300 leading-relaxed`}>
                                Orders are processed within 24-48 hours of payment confirmation. Orders placed on weekends or holidays will be processed on the next business day.
                            </p>
                        </div>
                    </motion.div>

                    {/* Tracking */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass-card p-8"
                    >
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#f5c542] to-[#ffd700] rounded-xl flex items-center justify-center mb-4">
                                <Package className="w-6 h-6 text-black" />
                            </div>
                            <h2 className={`${playfair.className} text-2xl font-bold text-white mb-4`}>
                                Order Tracking
                            </h2>
                            <p className={`${inter.className} text-gray-300 leading-relaxed`}>
                                Once your order ships, you will receive a confirmation email containing your tracking number. You can use this to track your package on our website.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
