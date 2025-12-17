'use client'
import { motion } from 'framer-motion'
import { Playfair_Display, Inter } from 'next/font/google'
import { Scale, Users, ShieldCheck, Copyright } from 'lucide-react'

const playfair = Playfair_Display({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function TermsConditionsPage() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className={`${playfair.className} text-4xl lg:text-6xl font-bold text-white mb-6`}>
                        Terms & <span className="text-gradient">Conditions</span>
                    </h1>
                    <p className={`${inter.className} text-xl text-gray-400 max-w-2xl mx-auto`}>
                        Please read these terms and conditions carefully before using our website.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8"
                    >
                        <h2 className={`${playfair.className} text-2xl font-bold text-white mb-4`}>
                            1. Acceptance of Terms
                        </h2>
                        <div className={`${inter.className} text-gray-300 leading-relaxed`}>
                            <p>
                                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's, you shall be subject to any posted guidelines or rules applicable to such services.
                            </p>
                        </div>
                    </motion.div>

                    {/* Use of Service */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-card p-8"
                    >
                        <div className="flex items-start space-x-4 mb-4">
                            <Users className="w-6 h-6 text-[#f5c542]" />
                            <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                                2. Use of Service
                            </h2>
                        </div>
                        <div className={`${inter.className} text-gray-300 leading-relaxed space-y-4`}>
                            <p>
                                You agree to use this site only for lawful purposes, and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the site.
                            </p>
                            <p>
                                We reserve the right to withdraw or amend the service we provide on our site without notice. We will not be liable if for any reason our site is unavailable at any time or for any period.
                            </p>
                        </div>
                    </motion.div>

                    {/* Intellectual Property */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass-card p-8"
                    >
                        <div className="flex items-start space-x-4 mb-4">
                            <Copyright className="w-6 h-6 text-[#f5c542]" />
                            <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                                3. Intellectual Property
                            </h2>
                        </div>
                        <div className={`${inter.className} text-gray-300 leading-relaxed`}>
                            <p>
                                The Site and its original content, features, and functionality are owned by LUXE and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                            </p>
                        </div>
                    </motion.div>

                    {/* Liability */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass-card p-8"
                    >
                        <div className="flex items-start space-x-4 mb-4">
                            <ShieldCheck className="w-6 h-6 text-[#f5c542]" />
                            <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                                4. Limitation of Liability
                            </h2>
                        </div>
                        <div className={`${inter.className} text-gray-300 leading-relaxed`}>
                            <p>
                                In no event shall LUXE, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for damages, direct or indirect, special, incidental, or consequential, resulting from your use of this site or from any other claim related in any way to your use of the site.
                            </p>
                        </div>
                    </motion.div>

                    {/* Governing Law */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="glass-card p-8"
                    >
                        <div className="flex items-start space-x-4 mb-4">
                            <Scale className="w-6 h-6 text-[#f5c542]" />
                            <h2 className={`${playfair.className} text-2xl font-bold text-white`}>
                                5. Governing Law
                            </h2>
                        </div>
                        <div className={`${inter.className} text-gray-300 leading-relaxed`}>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
