import { GalleryFilters } from "@/components/gallery/gallery-filters"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export default function GalleryPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">전시장</h1>
          <p className="text-muted-foreground">
            ToyVenture 커뮤니티의 창작물을 감상하고 공유해보세요.
          </p>
        </div>
        <GalleryFilters />
        <GalleryGrid />
      </div>
    </div>
  )
} 