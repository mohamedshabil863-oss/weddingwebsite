import { HeroSection } from "@/components/wedding/hero-section"
import { CoupleSection } from "@/components/wedding/couple-section"
import { EventsSection } from "@/components/wedding/events-section"
import { LocationSection } from "@/components/wedding/location-section"
import { Footer } from "@/components/wedding/footer"

export default function WeddingInvitation() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <CoupleSection />
      <EventsSection />
      <LocationSection />
      <Footer />
    </main>
  )
}
