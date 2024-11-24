import { FaqContent } from "@/components/faq/faq-content"

export default function FaqPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold mb-2">자주 묻는 질문</h1>
          <p className="text-muted-foreground">
            ToyVenture 서비스 이용에 대한 궁금증을 해결해드립니다.
          </p>
        </div>
        <FaqContent />
      </div>
    </div>
  )
} 