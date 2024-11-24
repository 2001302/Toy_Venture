import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-[#1a1f2e]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/santa-3d.png"
          alt="3D Santa Claus"
          fill
          className="opacity-90 object-cover"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="flex flex-col items-center space-y-4 text-center w-full">
          <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
            창의적인 3D 장난감의 세계
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            아이들의 상상력을 키우는 디지털 & 실물 색칠 놀이, 직접 디자인하고, 색칠하고, 3D로 출력하여 나만의 장난감을 만들어보세요.
          </p>
          <div className="flex items-center space-x-3">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-[#1a1f2e] dark:text-white hover:bg-white/10 hover:text-[#1a1f2e] dark:hover:text-white"
            >
              로그인
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-[#1a1f2e] hover:bg-white/90"
            >
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

