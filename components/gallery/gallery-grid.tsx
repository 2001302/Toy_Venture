import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GalleryItem } from "@/types/gallery"
import { supabase } from "@/lib/supabase/client"

interface GalleryGridProps {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const getImageUrl = (path: string) => {
    const { data } = supabase.storage.from('gallery').getPublicUrl(path)
    return data.publicUrl
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="group overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <Image
                src={getImageUrl(item.thumbnail)}
                alt={item.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-4">
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              by {item.author}
            </p>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {item.description}
            </p>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span className="text-sm">{item.likes}</span>
              </div>
            </div>
            <Button asChild className="w-full mt-3">
              <Link href={`/gallery/${item.id}`}>
                자세히 보기
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
} 