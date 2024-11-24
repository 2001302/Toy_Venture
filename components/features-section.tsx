import { Palette, Box, Wand2, Share2 } from "lucide-react"

const features = [
  {
    title: "디지털 색칠 놀이",
    description: "태블릿과 스타일러스로 3D 모델에 자유롭게 색칠해보세요.",
    icon: Palette,
  },
  {
    title: "실물 색칠 놀이",
    description: "KC 인증을 받은 PVC 재질의 말랑말랑한 3D 아트토이로 직접 색칠해보세요.",
    icon: Box,
  },
  {
    title: "커스텀 3D 모델",
    description: "상상하는 모든 것을 3D 모델로 만들어드립니다.",
    icon: Wand2,
  },
  {
    title: "작품 공유",
    description: "완성된 작품을 커뮤니티에서 공유하고 다른 작품도 구경해보세요.",
    icon: Share2,
  },
]

export function FeaturesSection() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">주요 서비스</h2>
          <p className="text-muted-foreground">
            ToyVenture와 함께 창의적인 3D 장난감의 세계를 경험해보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:bg-card/80 transition-colors"
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

