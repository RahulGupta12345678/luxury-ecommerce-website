'use client'
import { motion } from 'framer-motion'
import { Laptop, Smartphone, Tablet, Headphones, Watch, Monitor, Camera, Gamepad2, Mouse, Grid3X3 } from 'lucide-react'

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: 'all', name: 'All Products', icon: Grid3X3 },
  { id: 'laptops', name: 'Laptops', icon: Laptop },
  { id: 'mobiles', name: 'Mobiles', icon: Smartphone },
  { id: 'tablets', name: 'Tablets', icon: Tablet },
  { id: 'audio', name: 'Audio', icon: Headphones },
  { id: 'wearables', name: 'Wearables', icon: Watch },
  { id: 'monitors', name: 'Monitors', icon: Monitor },
  { id: 'cameras', name: 'Cameras', icon: Camera },
  { id: 'gaming', name: 'Gaming', icon: Gamepad2 },
  { id: 'accessories', name: 'Accessories', icon: Mouse },
]

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => {
        const Icon = category.icon
        const isSelected = selectedCategory === category.id
        
        return (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
              isSelected
                ? 'bg-gradient-to-r from-[#f5c542] to-[#ffd700] text-black shadow-lg shadow-[#f5c542]/30'
                : 'bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-[#f5c542]/30'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{category.name}</span>
          </motion.button>
        )
      })}
    </div>
  )
}