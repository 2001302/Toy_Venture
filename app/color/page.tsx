import { ColorFilters } from "@/components/color/color-filters"
import { ColorGrid } from "@/components/color/color-grid"

export default function ColorPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">색칠 놀이</h1>
          <p className="text-muted-foreground">
            다양한 3D 모델에 나만의 색을 입혀보세요. 디지털과 실물 패키지를 모두 제공합니다.
          </p>
        </div>
        <ColorFilters />
        <ColorGrid />
      </div>
    </div>
  )
} 