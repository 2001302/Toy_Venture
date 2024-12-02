'use client'

import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { GalleryFilters } from "@/components/gallery/gallery-filters"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { GalleryItem } from "@/types/gallery"
import { toast } from "sonner"

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGalleryItems() {
      try {
        const { data, error } = await supabase
          .from('gallery_items')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error

        const formattedData: GalleryItem[] = data.map(item => {
          const thumbnailUrl = supabase.storage
            .from('gallery')
            .getPublicUrl(item.thumbnail)
            .data.publicUrl

          const modelFileUrl = supabase.storage
            .from('gallery')
            .getPublicUrl(item.model_file)
            .data.publicUrl

          return {
            id: item.id,
            title: item.title,
            description: item.description,
            author: item.author,
            thumbnail: thumbnailUrl,
            modelFile: modelFileUrl,
            likes: item.likes,
            created_at: item.created_at,
            updated_at: item.updated_at,
          }
        })

        setItems(formattedData)
      } catch (error) {
        console.error('Error fetching gallery items:', error)
        toast.error('갤러리 아이템을 불러오는데 실패했습니다.')
      } finally {
        setLoading(false)
      }
    }

    fetchGalleryItems()
  }, [])

  return (
    <div className="container py-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">전시장</h1>
          <p className="text-muted-foreground">
            다양한 3D 모델들을 구경해보세요
          </p>
        </div>
        <GalleryFilters />
        {loading ? (
          <div className="text-center py-10">로딩 중...</div>
        ) : (
          <GalleryGrid items={items} />
        )}
      </div>
    </div>
  )
} 