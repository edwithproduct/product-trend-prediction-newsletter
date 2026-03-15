import Section from '../components/Section';

export default function WorkflowChange() {
  return (
    <Section className="bg-gray-900/50">
      <div className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient">
          當 AI 出現，軟體開發流程產生了什麼變化？
        </h2>

        {/* 傳統流程 */}
        <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-300 mb-6">傳統的軟體開發流程</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-200">PM 定義問題與撰寫 PRD</h4>
                <p className="text-gray-400">產品經理分析需求，撰寫產品需求文件</p>
              </div>
            </div>

            <div className="ml-6 border-l-2 border-gray-700 h-8"></div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-200">設計師根據 PRD 設計介面</h4>
                <p className="text-gray-400">設計用戶流程與視覺呈現，可能花費 1 個月打磨</p>
              </div>
            </div>

            <div className="ml-6 border-l-2 border-gray-700 h-8"></div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-200">工程師進行實際開發</h4>
                <p className="text-gray-400">根據設計稿實作產品功能</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI 帶來的變革 */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-figma-purple/10 to-figma-blue/10 blur-3xl"></div>
          <div className="relative p-8 bg-gray-800/50 rounded-lg border border-figma-purple/50">
            <h3 className="text-2xl font-semibold text-gradient mb-6">
              開發速度 10-20 倍提升
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                傳統的流程正在瓦解中。過往設計可能針對一個大型專案需要花上 <strong className="text-figma-purple">1 個月</strong> 打磨畫面的呈現或是來回討論各種問題。
              </p>
              <p className="text-lg">
                但現在，PM 與設計師正在被 AI 的變革<strong className="text-figma-blue">改變原有的工作流程</strong>。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
