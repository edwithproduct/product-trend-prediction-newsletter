import Section from '../components/Section';

export default function ProductBuilder() {
  return (
    <Section>
      <div className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          人人都是 <span className="text-gradient">Product Builder</span>
        </h2>

        <p className="text-xl text-gray-400 leading-relaxed">
          Claude Code、Cursor 等 AI Coding Tools 的出現，
          他們如何影響了 PM 與設計師的工作？
        </p>

        {/* Product Builder 的起源 */}
        <div className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-gray-200">📖 Product Builder 的出現</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-yellow-400">2005 年</strong> Y Combinator 推動的創業文化，
              開始強調能從 0 到 1 打造產品的全端能力。
            </p>
            <p>
              Builder 在過往到 2025 年，我認為其本質並未有太多的改變，
              只是過往可能是創業者具備直接打造產品的能力。
            </p>
            <p>
              而到了現在，如果你是一個<strong className="text-figma-purple">設計師</strong>或是一個<strong className="text-figma-blue">產品經理</strong>，
              那麼我們也被賦予這樣的期待，希望可以動手打造產品，去嘗試各種可能。
            </p>
            <p className="text-sm text-gray-500 italic">
              LinkedIn 也在 2025 年開始招募 Associate Product Builder 這個職位。
            </p>
          </div>
        </div>

        {/* PM 的新能力 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-800/50">
            <h4 className="text-xl font-semibold text-blue-400 mb-3">👨‍💼 PM 的轉變</h4>
            <p className="text-gray-300">
              針對問題提出的解法，可以依產品建構好的設計規範等，
              <strong className="text-blue-300">直接於程式碼呈現解法</strong>。
            </p>
          </div>

          <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-800/50">
            <h4 className="text-xl font-semibold text-purple-400 mb-3">🎨 設計師的轉變</h4>
            <p className="text-gray-300">
              針對產品，有能力可以<strong className="text-purple-300">直接介入該如何調整</strong>互動上的體驗、
              色號的改變等，以提供用戶擁有更佳的體驗。
            </p>
          </div>
        </div>

        {/* 核心問題 */}
        <div className="mt-8 p-8 bg-gradient-to-r from-figma-purple/20 to-figma-blue/20 rounded-lg border border-gray-700">
          <h3 className="text-3xl font-bold text-center text-gradient mb-4">
            那面對這樣的改變，Figma 又該何去何從？
          </h3>
        </div>
      </div>
    </Section>
  );
}
