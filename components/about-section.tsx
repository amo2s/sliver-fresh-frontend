"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Leaf, Zap, Heart } from "lucide-react"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="py-24 bg-muted/30 relative overflow-hidden" id="about">
      {/* Parallax background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)] text-balance">
              The Story Behind SliverFresh
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              SliverFresh is a next-generation juice brand under SliverVerse, where nature meets innovation. We believe
              that the purest ingredients, combined with cutting-edge technology, create drinks that are not just
              refreshing — they're transformative.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Every bottle is crafted with precision, sustainability, and a commitment to your well-being. From farm to
              bottle, we ensure that each sip delivers the brilliance of nature in its most powerful form.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Leaf, label: "Pure & Natural", color: "text-primary" },
                { icon: Zap, label: "Innovative", color: "text-secondary" },
                { icon: Heart, label: "Sustainable", color: "text-accent" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background shadow-lg mb-3 ${item.color}`}
                  >
                    <item.icon className="w-8 h-8" />
                  </motion.div>
                  <p className="font-semibold text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl p-12 backdrop-blur-sm border border-border shadow-2xl"
            >
              <div className="aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-6">🏭</div>
                  <p className="text-foreground font-semibold text-xl mb-2">[Juice Production Process]</p>
                  <p className="text-muted-foreground">State-of-the-art facility with sustainable practices</p>
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
