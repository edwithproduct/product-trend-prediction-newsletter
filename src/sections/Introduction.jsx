import Section from '../components/Section';

export default function Introduction() {
  return (
    <Section className="bg-gray-50">
      <div className="space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          引言
        </h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
            我好奇 <strong className="text-amber-900">AI 的出現會怎麼影響設計師運用 Figma 這樣的工具</strong>，
            並且我想假設 <strong className="text-amber-900">AI 的出現將會讓 Figma 這樣的產品逐漸消失</strong>。
          </p>
        </div>

        <div className="mt-12">
          <p className="text-xl text-gray-600 italic leading-relaxed">
            這個假設看似大膽，但當我們深入探討 AI 對設計流程的影響時，
            會發現這並非不可能的未來。
          </p>
        </div>
      </div>
    </Section>
  );
}
