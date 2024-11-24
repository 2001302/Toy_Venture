import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#1E2235]">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  )
}

