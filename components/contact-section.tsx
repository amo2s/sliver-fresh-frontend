"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 bg-background" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)] text-balance">
            Stay Connected with SliverFresh
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Have questions? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-effect border-2 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <Input
                      placeholder="Your name"
                      className="bg-background/50 backdrop-blur-sm border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background/50 backdrop-blur-sm border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us what's on your mind..."
                      rows={5}
                      className="bg-background/50 backdrop-blur-sm border-2 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 shadow-lg hover:shadow-primary/50 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Map Placeholder */}
            <Card className="border-2 shadow-xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="font-semibold text-lg">[Map / Store Location]</p>
                  <p className="text-muted-foreground text-sm mt-2">Interactive map placeholder</p>
                </div>
              </div>
            </Card>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "hello@sliverfresh.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Address", value: "123 Fresh Street, Juice City, JC 12345" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
