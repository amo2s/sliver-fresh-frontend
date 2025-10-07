"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

const products = [
  {
    name: "Tropical Punch",
    description: "A vibrant blend of mango, pineapple, and passion fruit",
    price: "$8.99",
    color: "from-orange-400 to-pink-500",
  },
  {
    name: "Citrus Glow",
    description: "Refreshing orange, lemon, and grapefruit fusion",
    price: "$7.99",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Berry Blast",
    description: "Rich strawberry, blueberry, and raspberry mix",
    price: "$9.99",
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Mint Revival",
    description: "Cool cucumber, mint, and lime refresher",
    price: "$7.49",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Golden Sunrise",
    description: "Energizing carrot, orange, and turmeric blend",
    price: "$8.49",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Green Vitality",
    description: "Nutrient-packed kale, apple, and ginger juice",
    price: "$9.49",
    color: "from-lime-400 to-green-600",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-background" id="shop">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)] text-balance">
            Our Signature Flavors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Each bottle is a masterpiece of flavor, crafted with the finest ingredients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden">
                <CardHeader className="p-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`h-64 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="text-center text-white"
                    >
                      <div className="text-7xl mb-4">🧃</div>
                      <p className="font-semibold text-lg px-4">[{product.name} Bottle]</p>
                    </motion.div>

                    {/* Shine effect */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </motion.div>
                </CardHeader>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
                    <PlusCircle className="w-5 h-5 mr-2 group-hover/btn:rotate-90 transition-transform duration-300" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
