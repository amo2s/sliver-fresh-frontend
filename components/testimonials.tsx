"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    content:
      "SliverFresh has completely transformed my morning routine. The flavors are incredible and I can feel the difference in my energy levels!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Busy Professional",
    content:
      "Finally, a juice brand that delivers on both taste and quality. The convenience of having premium nutrition in a bottle is unmatched.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Wellness Coach",
    content:
      "I recommend SliverFresh to all my clients. The purity and innovation behind each bottle is exactly what modern wellness needs.",
    rating: 5,
  },
  {
    name: "David Martinez",
    role: "Health Blogger",
    content:
      "The attention to detail in every aspect, from ingredients to packaging, shows that SliverFresh truly cares about their customers.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)] text-balance">
            Loved by Thousands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join our community of health-conscious juice lovers
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2 shadow-2xl">
                <CardContent className="p-12">
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-6 h-6 fill-secondary text-secondary" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-2xl text-center mb-8 leading-relaxed text-foreground/90 text-balance">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="text-center">
                    <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
