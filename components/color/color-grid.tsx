import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// 임시 데이터
const colorItems = [
  {
    id: 1,
    title: "우주인 곰돌이",
    thumbnail: "/thumbnails/bear-astronaut.jpg",
    type: "digital",
    category: "character",
    difficulty: "beginner",
    price: 15000,
  },
  {
    id: 2,
    title: "공룡 친구들",
    thumbnail: "/thumbnails/dinosaur-friends.jpg",
    type: "physical",
    category: "animal",
    difficulty: "intermediate",
    price: 25000,
  },
  // 더 많은 아이템 추가...
]

export function ColorGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {colorItems.map((item) => (
        <Link key={item.id} href={`/color/${item.id}`}>
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
                <Badge variant="outline">{item.difficulty}</Badge>
              </div>
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.price.toLocaleString()}원
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
} 