"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

export function Header() {
  const [cartCount] = useState(0)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
            <span className="font-[family-name:var(--font-playfair)] bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              SliverFresh
            </span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Shop", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Cart & CTA */}
          <div className="flex items-center gap-4">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative">
              <ShoppingCart className="w-6 h-6 text-foreground/80" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-primary/50 transition-all duration-300">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
