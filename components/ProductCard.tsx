'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ShoppingCart } from 'lucide-react'
import { Playfair_Display, Inter } from 'next/font/google'
import { Product, useCartStore } from '@/store/cartStore'

const playfair = Playfair_Display({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        y: -15,
        scale: 1.02,
        rotateY: 5,
        rotateX: -2,
        z: 30,
        transition: { duration: 0.4 }
      }}
      className="group relative perspective-1000"
    >
      {/* Floating animation with 3D rotation */}
      <motion.div
        animate={{ 
          y: [-5, 5, -5],
          rotateX: [0, 1, 0],
          rotateY: [0, -1, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
        className="relative transform-gpu preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* 3D Shadow layers */}
        <div className="absolute inset-0 bg-black/10 rounded-3xl blur-lg transform translate-z-[-15px] scale-98 opacity-40" />
        <div className="absolute inset-0 bg-black/5 rounded-3xl blur-md transform translate-z-[-10px] scale-99 opacity-60" />
        
        {/* Glassmorphism Card with 3D depth */}
        <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl group-hover:shadow-[#f5c542]/20 transition-all duration-500 overflow-hidden transform-gpu">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5c542]/10 via-transparent to-[#f5c542]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <Link href={`/products/${product.id}`} className="relative z-10">
            {/* Product Image with 3D depth */}
            <div className="relative overflow-hidden rounded-2xl mb-6 transform-gpu group-hover:translate-z-[8px] transition-transform duration-500">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 transform-gpu"
              />
              
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Floating badge with 3D effect */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#f5c542] text-black text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 group-hover:translate-z-[12px] transform-gpu">
                Premium
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              {/* Product Name */}
              <h3 className={`${playfair.className} text-xl font-bold text-white group-hover:text-[#f5c542] transition-colors duration-300`}>
                {product.name}
              </h3>
              
              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 transition-colors duration-200 ${
                      i < Math.floor(product.rating)
                        ? 'text-[#f5c542] fill-current'
                        : 'text-gray-500'
                    }`}
                  />
                ))}
                <span className={`${inter.className} text-sm text-gray-400 ml-2 font-medium`}>
                  {product.rating}
                </span>
              </div>

              {/* Description */}
              <p className={`${inter.className} text-gray-300 text-sm leading-relaxed line-clamp-2`}>
                {product.description}
              </p>
              
              {/* Price and Add to Cart with 3D positioning */}
              <div className="flex items-center justify-between pt-2 transform-gpu group-hover:translate-z-[5px] transition-transform duration-500">
                <span className={`${playfair.className} text-2xl font-bold bg-gradient-to-r from-[#f5c542] to-[#ffd700] bg-clip-text text-transparent`}>
                  ₹{product.price.toLocaleString()}
                </span>
                
                {/* Add to Cart Button with 3D hover */}
                <motion.button
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    z: 15,
                    rotateX: -10
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleAddToCart}
                  className="relative p-3 bg-gradient-to-r from-[#f5c542] to-[#ffd700] text-black rounded-2xl shadow-lg hover:shadow-[#f5c542]/40 transition-all duration-300 group/btn overflow-hidden transform-gpu"
                >
                  <ShoppingCart className="w-5 h-5 relative z-10" />
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700] to-[#f5c542] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Decorative elements with 3D positioning */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#f5c542] rounded-full opacity-60 animate-ping transform-gpu translate-z-[20px]" />
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#f5c542]/40 rounded-full animate-pulse transform-gpu translate-z-[15px]" />
      </motion.div>
    </motion.div>
  )
}