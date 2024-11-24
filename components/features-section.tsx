import { Palette, CuboidIcon as Cube, Share2, Shapes } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "디지털 색칠 놀이",
    description: "태블릿과 스타일러스로 3D 모델에 자유롭게 색칠하세요.",
    icon: Palette,
  },
  {
    title: "실물 색칠 놀이",
    description: "KC 인증을 받은 PVC 재질의 말랑말랑한 3D 아트토이로 직접 색칠해보세요.",
    icon: Cube,
  },
  {
    title: "커스텀 3D 모델",
    description: "상상하는 모든 것을 3D 모델로 만들어드립니다.",
    icon: Shapes,
  },
  {
    title: "작품 공유",
    description: "완성된 작품을 커뮤니티에서 공유하고 다른 작품도 구경해보세요.",
    icon: Share2,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#161827]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            주요 서비스
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            ToyVenture와 함께 창의적인 3D 장난감의 세계를 경험해보세요.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-[#1E2235] border-gray-800">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-white" />
                  <CardTitle className="mt-4 text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

