import Link from "next/link"
import { Github } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">ToyVenture</h3>
            <p className="text-sm text-muted-foreground">
              아이들의 상상력을 키우는 창의적인 3D 장난감의 세계
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/color" className="text-sm text-muted-foreground hover:text-foreground">
                  디지털 색칠 놀이
                </Link>
              </li>
              <li>
                <Link href="/color" className="text-sm text-muted-foreground hover:text-foreground">
                  실물 색칠 놀이
                </Link>
              </li>
              <li>
                <Link href="/custom" className="text-sm text-muted-foreground hover:text-foreground">
                  커스텀 3D 모델
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">고객지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-sm text-muted-foreground hover:text-foreground">
                  이용 가이드
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">법적 고지</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © 2024 ToyVenture. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link 
              href="https://github.com/your-repo" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 