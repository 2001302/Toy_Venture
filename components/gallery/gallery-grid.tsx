import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart } from "lucide-react"

// 임시 데이터
const galleryItems = [
  {
    id: 1,
    title: "우주인 곰돌이",
    author: "토이메이커",
    thumbnail: "/gallery/space-bear.jpg",
    type: "digital",
    likes: 128,
  },
  {
    id: 2,
    title: "무지개 공룡",
    author: "아트토이",
    thumbnail: "/gallery/rainbow-dino.jpg",
    type: "physical",
    likes: 256,
  },
  // 더 많은 아이템 추가...
]

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {galleryItems.map((item) => (
        <Link key={item.id} href={`/gallery/${item.id}`}>
          <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={item.type === "digital" ? "default" : "secondary"}>
                  {item.type === "digital" ? "디지털" : "실물"}
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Heart className="h-4 w-4 mr-1" />
                  {item.likes}
                </div>
              </div>
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                by {item.author}
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
} 