import { Noto_Sans_KR } from "next/font/google"
import { ThemeProvider } from "@/app/providers"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-kr',
})

export const metadata = {
  title: 'ToyVenture - 창의적인 3D 장난감의 세계',
  description: '아이들의 상상력을 키우는 디지털 & 실물 색칠 놀이, 직접 디자인하고, 색칠하고, 3D로 출력하여 나만의 장난감을 만들어보세요.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

