import Section from '../components/Section';

export default function Introduction() {
  return (
    <Section className="bg-gray-900/50">
      <div className="space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient">
          引言
        </h2>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
            我好奇 AI 的出現會怎麼影響設計師運用 Figma 這樣的工具，
            並且我想假設 AI 的出現將會讓 Figma 這樣的產品逐漸消失。
          </p>
        </div>

        <div className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
          <p className="text-gray-400 italic">
            這個假設看似大膽，但當我們深入探討 AI 對設計流程的影響時，
            會發現這並非不可能的未來。
          </p>
        </div>
      </div>
    </Section>
  );
}
