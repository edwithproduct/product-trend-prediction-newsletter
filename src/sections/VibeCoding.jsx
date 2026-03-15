import Section from '../components/Section';

export default function VibeCoding() {
  const tools = ['Lovable', 'v0 (Vercel)', 'Replit', 'Cursor', 'Claude Code'];

  return (
    <Section className="bg-gray-900/50">
      <div className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient">
          Vibe Coding 產品對 Figma 的影響
        </h2>

        {/* Vibe Coding 工具列表 */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-300">🚀 新興的 Vibe Coding 工具</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-figma-purple/20 to-figma-blue/20 rounded-full border border-gray-700 hover:border-figma-purple transition-colors"
              >
                <span className="text-gray-200 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Figma Make 的推出 */}
        <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-figma-purple">
            Figma 的回應：Figma Make
          </h3>
          <div className="space-y-4 text-gray-300">
            <p>
              當這些 Vibe Coding SaaS 出現時，Figma 也在 <strong className="text-figma-blue">2025 年 7 月 24 日</strong> 釋出了 <strong>Figma Make</strong>。
            </p>
            <p>
              這是一個可以透過輸入提示詞產出 App 或 Website 的工具，
              允許 Designers 與 <strong className="text-yellow-400">Product Builders</strong> 創造可互動且 hi-fi 的原型，
              不論他們是否具備技術背景。
            </p>
          </div>
        </div>

        {/* 防禦性策略 */}
        <div className="p-8 bg-yellow-900/20 rounded-lg border border-yellow-800/50">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">🛡️ 這更像是一個防禦性策略</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>為什麼 Figma 需要提供這個功能呢？</strong>
            </p>
            <p>
              從他們的描述綜合那個時候出現的競品來說，產品團隊的成員在建構產品可能往往會出現一件事情：
              <strong className="text-yellow-300">不確定設計稿的內容到了真實產品上會變成什麼模樣</strong>。
            </p>
            <p>
              所以這一個功能的推出，我認為更像是一個防禦的手段，
              因為他們發現如果不這麼做，自己的客戶可能會開始取消訂閱，移轉到其他平台。
            </p>
          </div>
        </div>

        {/* 核心洞察 */}
        <div className="mt-8 p-6 bg-red-900/20 rounded-lg border border-red-800/50">
          <p className="text-xl text-center text-gray-300">
            讓我們看見即使在 Figma 內部也存在了<br />
            <strong className="text-red-400 text-2xl">設計師與工程師協作上的摩擦力</strong>
          </p>
          <p className="text-center text-gray-400 mt-4">
            過往設計師與工程師之間的協作，尤其是 hand-off 是費時的，
            因為這部分可能會出現解讀上的誤解或是優先級的衝突。
          </p>
        </div>

        {/* Figma 的優勢 */}
        <div className="p-8 bg-green-900/20 rounded-lg border border-green-800/50">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">
            ✅ Figma 在 Vibe Coding 時代原本保有的優勢
          </h3>
          <p className="text-gray-300 text-lg">
            那就是既有的客戶在 Figma 建立的設計，可以提取設計並在 Figma Make 打造原型，
            <strong className="text-green-300">加速團隊對於想法上的對齊</strong>。
          </p>
        </div>
      </div>
    </Section>
  );
}
