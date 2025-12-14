'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Playfair_Display, Inter } from 'next/font/google'
import ProductCard from '@/components/ProductCard'
import products from '@/data/products.json'

// Premium fonts
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'] })
const inter = Inter({ subsets: ['latin'] })

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

export default function Home() {
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="min-h-screen bg-[#0b0b0b] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0b] via-[#1a1a1a] to-[#0b0b0b]" />
        
        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f5c542]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#f5c542]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center perspective-1000"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className={`${playfair.className} text-6xl lg:text-8xl font-black mb-6 leading-tight`}
            >
              <span className="text-white block">Luxury</span>
              <span className="bg-gradient-to-r from-[#f5c542] via-[#ffd700] to-[#f5c542] bg-clip-text text-transparent block">
                Redefined
              </span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className={`${inter.className} text-xl lg:text-2xl text-gray-300/80 mb-12 max-w-2xl leading-relaxed`}
            >
              Experience the pinnacle of craftsmanship with our curated collection of 
              <span className="text-[#f5c542]"> premium products</span>.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/products" 
                  className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#f5c542] to-[#ffd700] text-black font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#f5c542]/30"
                >
                  <span className="relative z-10">Shop Collection</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700] to-[#f5c542] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
              
              {/* Secondary CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="group relative inline-flex items-center justify-center px-10 py-5 border-2 border-[#f5c542] text-[#f5c542] font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:text-black hover:shadow-2xl hover:shadow-[#f5c542]/20"
                >
                  <span className="relative z-10">Our Story</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f5c542] to-[#ffd700] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Product Card with 3D Effects */}
          <motion.div
            variants={fadeInLeft}
            className="flex justify-center lg:justify-end perspective-1000"
          >
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotateX: [0, 2, 0],
                rotateY: [0, -2, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 8,
                rotateX: -3,
                z: 50,
                transition: { duration: 0.4 }
              }}
              className="relative group cursor-pointer transform-gpu preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Shadow Layer */}
              <div className="absolute inset-0 bg-black/20 rounded-3xl blur-xl transform translate-z-[-20px] scale-95 opacity-60" />
              
              {/* Glassmorphism Card with 3D depth */}
              <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:shadow-[#f5c542]/20 transition-all duration-500 transform-gpu">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f5c542]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Product Image with 3D tilt */}
                <div className="relative z-10 transform-gpu group-hover:translate-z-[10px] transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
                    alt="Luxury Smartwatch"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-xl transform-gpu group-hover:rotateX-[5deg] transition-transform duration-500"
                    priority
                  />
                  
                  {/* Product Info Overlay with depth */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 transform-gpu group-hover:translate-z-[15px] transition-transform duration-500">
                    <h3 className={`${playfair.className} text-white text-xl font-bold mb-1`}>
                      Luxury Smartwatch Elite
                    </h3>
                    <p className="text-[#f5c542] text-lg font-semibold">
                      ₹24,999
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements with 3D positioning */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#f5c542] rounded-full animate-ping transform-gpu translate-z-[20px]" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#f5c542]/60 rounded-full animate-pulse transform-gpu translate-z-[15px]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-32 px-6 lg:px-8 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className={`${playfair.className} text-5xl lg:text-7xl font-black text-white mb-6`}>
              Featured{' '}
              <span className="bg-gradient-to-r from-[#f5c542] via-[#ffd700] to-[#f5c542] bg-clip-text text-transparent">
                Collection
              </span>
            </h2>
            <p className={`${inter.className} text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed`}>
              Handpicked premium products that define excellence and luxury
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {featuredProducts.map((product, index) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-[#f5c542] to-[#ffd700] text-black font-bold text-xl rounded-2xl hover:shadow-2xl hover:shadow-[#f5c542]/30 transition-all duration-300"
              >
                View All Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-[#1a1a1a] to-[#0b0b0b] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f5c542' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '500+', label: 'Premium Products' },
              { number: '50+', label: 'Countries' },
              { number: '99%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className={`${playfair.className} text-4xl lg:text-6xl font-black bg-gradient-to-r from-[#f5c542] to-[#ffd700] bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className={`${inter.className} text-gray-400 text-lg font-medium`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}