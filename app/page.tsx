import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutSection } from "@/components/about-section"
import { ShopCategories } from "@/components/shop-categories"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <ShopCategories />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  )
}
