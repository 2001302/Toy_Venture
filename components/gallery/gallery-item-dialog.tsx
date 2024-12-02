'use client'

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { GalleryItem } from "@/types/gallery"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'
import { Heart, Loader2 } from "lucide-react"
import { ModelViewer } from "./model-viewer"
import { Suspense, useState } from "react"

interface GalleryItemDialogProps {
  item: GalleryItem | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function GalleryItemDialog({ item, open, onOpenChange }: GalleryItemDialogProps) {
  const [isModelLoading, setIsModelLoading] = useState(true)

  if (!item) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl h-[80vh] p-0">
        <div className="grid md:grid-cols-2 h-full">
          {/* 3D 모델 프리뷰 영역 */}
          <div className="bg-muted h-full relative">
            <Suspense 
              fallback={
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin" />
                </div>
              }
            >
              <ModelViewer modelUrl={item.modelFile} />
            </Suspense>
          </div>
          
          {/* 상세 정보 영역 */}
          <div className="p-6 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-sm text-muted-foreground">
                  by {item.author} • {formatDistanceToNow(new Date(item.created_at), { addSuffix: true, locale: ko })}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="secondary">
                  <Heart className="w-3 h-3 mr-1" />
                  {item.likes}
                </Badge>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">설명</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">지원 파일 형식</h3>
                <div className="flex gap-2">
                  {['.glb'].map((format) => (
                    <Badge key={format} variant="outline">{format}</Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">조작 방법</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 마우스 드래그: 모델 회전</li>
                  <li>• 스크롤: 확대/축소</li>
                  <li>• 우클릭 드래그: 이동</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 