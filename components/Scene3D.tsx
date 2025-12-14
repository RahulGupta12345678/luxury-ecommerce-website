'use client'
import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface Scene3DProps {
  children: React.ReactNode
  intensity?: number
  className?: string
}

export default function Scene3D({ children, intensity = 1, className = '' }: Scene3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15 * intensity, -15 * intensity])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15 * intensity, 15 * intensity])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      
      const mouseX = (e.clientX - rect.left - width / 2) / width
      const mouseY = (e.clientY - rect.top - height / 2) / height
      
      x.set(mouseX)
      y.set(mouseY)
    }
    
    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }
    
    const element = ref.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
      element.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        element.removeEventListener('mousemove', handleMouseMove)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [x, y])
  
  return (
    <div ref={ref} className={`perspective-1000 ${className}`}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="transform-gpu"
      >
        {children}
      </motion.div>
    </div>
  )
}