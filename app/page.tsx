import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"

export default async function Page() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
    </div>
  )
}

