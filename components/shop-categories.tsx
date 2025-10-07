"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Droplets, Zap, Shield } from "lucide-react"

const categories = [
  {
    name: "Detox",
    description: "Cleanse and refresh your body",
    icon: Droplets,
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    name: "Energy Boost",
    description: "Power through your day",
    icon: Zap,
    gradient: "from-orange-400 to-red-500",
  },
  {
    name: "Immune Power",
    description: "Strengthen your defenses",
    icon: Shield,
    gradient: "from-purple-400 to-pink-500",
  },
]

export function ShopCategories() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)] text-balance">
            Shop Our Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover juices tailored to your wellness goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className={`h-64 bg-gradient-to-br ${category.gradient} flex flex-col items-center justify-center p-8 relative`}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <category.icon className="w-20 h-20 text-white mb-4" />
                  </motion.div>

                  <div className="text-center text-white">
                    <p className="text-sm font-semibold mb-2">[{category.name} Category Image]</p>
                    <p className="text-xs opacity-80">Premium juice collection</p>
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80"
                  >
                    View All
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
