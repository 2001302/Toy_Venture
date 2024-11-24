import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"

export default async function Home() {
  return (
    <div className="flex flex-col">
      {/* @ts-expect-error Async Server Component */}
      <HeroSection />
      <FeaturesSection />
    </div>
  )
}

