'use client'
import { motion } from 'framer-motion'
import { Playfair_Display, Inter } from 'next/font/google'
import { Lock, Eye, Database, Share2, Cookie } from 'lucide-react'

const playfair = Playfair_Display({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function PrivacyPage() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className={`${playfair.className} text-4xl lg:text-6xl font-bold text-white mb-6`}>
                        Privacy <span className="text-gradient">Policy</span>
                    </h1>
                    <p className={`${inter.className} text-xl text-gray-400 max-w-2xl mx-auto`}>
                        We value your trust and are committed to protecting your personal information.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {/* Data Collection */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8"
                    >
                        <div className="flex items-start space-x-4 mb-6">
                            <Database className="w-6 h-6 text-[#f5c542]" />
                            <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                                Information We Collect
                            </h2>
                        </div>
                        <div className={`${inter.className} text-gray-300 space-y-4`}>
                            <p>
                                We collect information you provide directly to us when you create an account, make a purchase, or contact us. This includes your name, email address, shipping address, and payment information.
                            </p>
                            <p>
                                We also automatically collect certain information when you visit our website, such as your IP address, browser type, and device information.
                            </p>
                        </div>
                    </motion.div>

                    {/* Usage */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-card p-8"
                    >
                        <div className="flex items-start space-x-4 mb-6">
                            <Eye className="w-6 h-6 text-[#f5c542]" />
                            <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                                How We Use Your Information
                            </h2>
                        </div>
                        <ul className={`${inter.className} list-disc pl-10 space-y-2 text-gray-300`}>
                            <li>To process your orders and payments.</li>
                            <li>To communicate with you about your order status.</li>
                            <li>To send you promotional emails (if you opted in).</li>
                            <li>To improve our website and customer service.</li>
                            <li>To detect and prevent tracking and fraud.</li>
                        </ul>
                    </motion.div>

                    {/* Sharing */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass-card p-8"
                    >
                        <div className="flex items-start space-x-4 mb-6">
                            <Share2 className="w-6 h-6 text-[#f5c542]" />
                            <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                                Information Sharing
                            </h2>
                        </div>
                        <p className={`${inter.className} text-gray-300`}>
                            We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                        </p>
                    </motion.div>

                    {/* Security */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass-card p-8"
                    >
                        <div className="flex items-start space-x-4 mb-6">
                            <Lock className="w-6 h-6 text-[#f5c542]" />
                            <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                                Data Security
                            </h2>
                        </div>
                        <p className={`${inter.className} text-gray-300`}>
                            We implement a variety of security measures to maintain the safety of your personal information. Your payment information is encrypted using secure socket layer technology (SSL) and stored with AES-256 encryption.
                        </p>
                    </motion.div>

                    {/* Cookies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="glass-card p-8"
                    >
                        <div className="flex items-start space-x-4 mb-6">
                            <Cookie className="w-6 h-6 text-[#f5c542]" />
                            <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                                Cookies Policy
                            </h2>
                        </div>
                        <p className={`${inter.className} text-gray-300`}>
                            We use cookies to enhance your experience. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. If you turn cookies off, some features will be disabled.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
