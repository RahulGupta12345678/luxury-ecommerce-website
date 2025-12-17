import Link from 'next/link'
import { Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/rahul__kshatriya.india/', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ]

  return (
    <footer className="bg-luxury-darker border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">LUXE</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience luxury redefined. Premium products crafted for those who appreciate excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-luxury-gold transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Products', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-luxury-gold transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-white font-semibold mb-4">Policies</h4>
            <ul className="space-y-2">
              {[
                { name: 'Cancellation & Refunds', href: '/cancellation-refunds' },
                { name: 'Terms & Conditions', href: '/terms-conditions' },
                { name: 'Shipping Policy', href: '/shipping' },
                { name: 'Privacy Policy', href: '/privacy' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-luxury-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 shrink-0" />
                <span>rahulgupta102003@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 7990381197</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 LUXE. All rights reserved. Crafted with excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}