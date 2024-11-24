import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              창의적인 3D 장난감의 세계
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl">
              아이들의 상상력을 키우는 디지털 & 실물 색칠 놀이. 
              직접 디자인하고, 색칠하고, 3D로 출력하여 나만의 장난감을 만들어보세요.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button 
                size="lg"
                className="bg-white text-[#1E2235] hover:bg-gray-200"
              >
                시작하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                더 알아보기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

