import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = {
  "서비스 이용": [
    {
      question: "디지털 색칠 놀이는 어떻게 시작하나요?",
      answer: "태블릿과 스타일러스 펜을 준비한 후, 원하는 3D 모델을 선택하여 구매하세요. 구매 후 제공되는 가이드 영상을 참고하여 색칠을 시작할 수 있습니다."
    },
    {
      question: "실물 패키지는 어떤 구성인가요?",
      answer: "KC 인증을 받은 PVC 재질의 3D 아트토이, 5가지 색상의 환경 친화적 물감 세트, 다양한 크기의 붓 3종이 기본으로 제공됩니다."
    }
  ],
  "3D 모델": [
    {
      question: "지원되는 3D 파일 형식은 무엇인가요?",
      answer: ".fbx, .gltf, .glb, .obj 형식을 지원합니다. 모든 파일은 최적화되어 제공됩니다."
    },
    {
      question: "커스텀 3D 모델 제작은 얼마나 걸리나요?",
      answer: "기본적으로 7-14일 정도 소요되며, 복잡도에 따라 기간이 달라질 수 있습니다. 진행 상황은 실시간으로 확인 가능합니다."
    }
  ],
  "결제 및 환불": [
    {
      question: "어떤 결제 수단을 지원하나요?",
      answer: "신용카드, 체크카드, 계좌이체, 카카오페이 등 다양한 결제 수단을 지원합니다."
    },
    {
      question: "환불 정책은 어떻게 되나요?",
      answer: "디지털 상품의 경우 다운로드 전까지, 실물 상품의 경우 제품 수령 후 7일 이내 환불이 가능합니다."
    }
  ],
  "기술 지원": [
    {
      question: "3D 프린팅 서비스도 제공하나요?",
      answer: "현재 직접적인 3D 프린팅 서비스는 제공하지 않으나, 협력 업체를 통해 출력 서비스를 연결해드립니다."
    },
    {
      question: "추천하는 3D 모델링 소프트웨어가 있나요?",
      answer: "초보자의 경우 Blender를, 전문가의 경우 Substance Painter를 추천드립니다. 각 소프트웨어의 기초 사용법 가이드를 제공합니다."
    }
  ]
}

export function FaqContent() {
  return (
    <div className="space-y-6">
      {Object.entries(faqData).map(([category, items]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-xl font-semibold">{category}</h2>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
} 