import Section from '../components/Section';

export default function Conclusion() {
  return (
    <Section className="bg-gray-50">
      <div className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Figma 會消失嗎？
        </h2>

        {/* 核心問題 */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-gray-900">
            假設 Figma 剩下的用途更接近於製作 lo-fi 線稿時...
          </h3>
          <p className="text-xl text-gray-700">
            那是否會逐漸消失？
          </p>
        </div>

        {/* 我的答案 */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              我的看法
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              我認為是<strong className="text-amber-900">極有可能的</strong>。
            </p>
            <p className="text-gray-700 leading-relaxed">
              不過在這裡我認為的消失，我更專注於 <strong className="text-amber-900">Figma Design 這條產品線</strong>上。
            </p>
          </div>

          {/* 但是... */}
          <div className="mt-8 space-y-4">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              但我也看到了新的可能性
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                我也看到 Figma 與 <strong className="text-amber-900">Anthropic</strong> 合作推出了 <strong className="text-amber-900">MCP</strong>，
                可以讓實際開發的內容可以彙整至 Figma 上。
              </p>
              <p className="text-lg">
                這也讓我想到了一個可能性：
              </p>
              <div className="mt-4 space-y-3">
                <p className="text-xl font-semibold text-amber-900">
                  作為「設計版本控制工具」持續存在於未來的設計當中
                </p>
                <p className="text-gray-600">
                  藉此可以幫助產品團隊清楚紀錄每一種設計樣式帶來的成效是如何，
                  成為設計決策的歷史記錄與分析平台。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 總結 */}
        <div className="mt-12 p-10 rounded-2xl border-2 border-gray-300">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
            總結
          </h3>
          <div className="space-y-4 text-center text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
            <p>
              AI 的出現正在重塑設計師與 PM 的工作方式。
            </p>
            <p>
              <strong className="text-amber-900">Figma Design</strong> 作為精細設計工具的角色可能逐漸淡化，
              轉而成為<strong className="text-amber-900">快速思考與版本管理</strong>的工具。
            </p>
            <p className="text-xl font-semibold pt-4 text-gray-900">
              真正的實作，將直接在程式碼中完成。
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
