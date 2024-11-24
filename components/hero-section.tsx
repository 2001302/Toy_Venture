import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-32 bg-[#1a1f2e] w-full">
      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
            창의적인 3D 장난감의 세계
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            아이들의 상상력을 키우는 디지털 & 실물 색칠 놀이, 직접 디자인하고, 색칠하고, 3D로 출력하여 나만의 장난감을 만들어보세요.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-[#1a1f2e] hover:bg-gray-100">
              시작하기
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              더 알아보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

