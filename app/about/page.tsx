'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Globe, Zap, Shield, Heart } from 'lucide-react'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
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

export default function AboutPage() {
  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to bring luxury electronics to everyone' },
    { year: '2021', title: 'First 1000 Customers', description: 'Reached our first milestone with premium product quality' },
    { year: '2022', title: 'International Expansion', description: 'Expanded to serve customers across 25+ countries' },
    { year: '2023', title: 'Premium Partnership', description: 'Partnered with top brands like Apple, Samsung, Sony' },
    { year: '2024', title: 'AI-Powered Experience', description: 'Launched personalized shopping with AI recommendations' }
  ]

  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We curate only the finest electronics from world-renowned brands'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and transactions are protected with enterprise-grade security'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Always bringing you the latest technology and cutting-edge products'
    },
    {
      icon: Heart,
      title: 'Customer Obsessed',
      description: 'Your satisfaction is our top priority, with 24/7 premium support'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving luxury tech enthusiasts in 50+ countries worldwide'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Tech specialists and luxury consultants to guide your purchase'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeInUp}
              className={`${playfair.className} text-5xl lg:text-7xl font-bold text-white mb-6`}
            >
              Our <span className="text-gradient">Story</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className={`${inter.className} text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed`}
            >
              From a small startup to a global luxury electronics destination, 
              discover how LUXE is redefining premium technology shopping.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-12 mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold text-white mb-6`}>
                  Founded on Excellence
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    LUXE was born from a simple belief: everyone deserves access to the world's finest technology. 
                    Founded in 2020 by tech enthusiasts and luxury retail experts, we set out to create more than 
                    just another electronics store.
                  </p>
                  <p>
                    We envisioned a premium destination where cutting-edge technology meets unparalleled service, 
                    where every product is carefully curated and every customer experience is crafted to perfection.
                  </p>
                  <p>
                    Today, LUXE stands as a testament to what happens when passion meets purpose, serving over 
                    100,000+ satisfied customers worldwide with the finest selection of premium electronics.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f5c542]/20 to-[#ffd700]/20 rounded-3xl blur-3xl" />
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600"
                  alt="LUXE Store"
                  width={600}
                  height={400}
                  className="relative z-10 rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${playfair.className} text-4xl lg:text-5xl font-bold text-white text-center mb-16`}
          >
            Our <span className="text-gradient">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f5c542] to-[#ffd700]" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#f5c542] to-[#ffd700] rounded-full border-4 border-[#0b0b0b]" />
                
                {/* Content */}
                <div className="ml-16 glass-card p-6 flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl font-bold text-gradient">{milestone.year}</span>
                    <h3 className={`${playfair.className} text-xl font-bold text-white`}>
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${playfair.className} text-4xl lg:text-5xl font-bold text-white text-center mb-16`}
          >
            Our <span className="text-gradient">Values</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex p-4 bg-gradient-to-r from-[#f5c542] to-[#ffd700] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className={`${playfair.className} text-xl font-bold text-white mb-4`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card p-12"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: '100K+', label: 'Happy Customers' },
                { number: '500+', label: 'Premium Products' },
                { number: '50+', label: 'Countries Served' },
                { number: '99.9%', label: 'Satisfaction Rate' },
              ].map((stat, index) => (
                <motion.div key={stat.label} variants={fadeInUp}>
                  <div className={`${playfair.className} text-3xl lg:text-5xl font-bold text-gradient mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}