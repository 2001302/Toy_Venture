'use client'

import { GalleryItem } from "@/types/gallery"
import { Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { GalleryItemDialog } from "./gallery-item-dialog"

interface GalleryGridProps {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative bg-card rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => {
              setSelectedItem(item)
              setDialogOpen(true)
            }}
          >
            <div className="aspect-square">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm opacity-90">by {item.author}</p>
              <Badge variant="secondary" className="mt-2">
                <Heart className="w-3 h-3 mr-1" />
                {item.likes}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      <GalleryItemDialog 
        item={selectedItem}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  )
} 