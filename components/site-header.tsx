import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">ToyVenture</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link href="/color" className="text-sm font-medium transition-colors hover:text-foreground/80">
            색칠 놀이
          </Link>
          <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-foreground/80">
            전시장
          </Link>
          <Link href="/faq" className="text-sm font-medium transition-colors hover:text-foreground/80">
            FAQ
          </Link>
          <ThemeToggle />
          <Button>시작하기</Button>
        </nav>
      </div>
    </header>
  )
}

