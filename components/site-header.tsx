import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#1E2235]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1E2235]/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-white">ToyVenture</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link
              href="/coloring"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              색칠 놀이
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              전시장
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-white/10"
            >
              로그인
            </Button>
            <Button 
              size="sm"
              className="bg-white text-[#1E2235] hover:bg-gray-200"
            >
              시작하기
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

