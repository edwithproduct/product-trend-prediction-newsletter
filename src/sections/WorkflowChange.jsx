import Section from '../components/Section';

export default function WorkflowChange() {
  return (
    <Section className="bg-gray-50">
      <div className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          當 AI 出現，軟體開發流程產生了什麼變化？
        </h2>

        {/* 傳統流程 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">傳統的軟體開發流程</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div>
              <h4 className="font-semibold text-amber-900 text-lg">PM 定義問題與撰寫 PRD</h4>
              <p className="text-gray-600">產品經理分析需求，撰寫產品需求文件</p>
            </div>

            <div>
              <h4 className="font-semibold text-amber-900 text-lg">設計師根據 PRD 設計介面</h4>
              <p className="text-gray-600">設計用戶流程與視覺呈現，可能花費 1 個月打磨</p>
            </div>

            <div>
              <h4 className="font-semibold text-amber-900 text-lg">工程師進行實際開發</h4>
              <p className="text-gray-600">根據設計稿實作產品功能</p>
            </div>
          </div>
        </div>

        {/* AI 帶來的變革 */}
        <div className="mt-12 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            開發速度 10-20 倍提升
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              傳統的流程正在瓦解中。過往設計可能針對一個大型專案需要花上 <strong className="text-amber-900">1 個月</strong> 打磨畫面的呈現或是來回討論各種問題。
            </p>
            <p className="text-lg">
              但現在，<strong className="text-amber-900">PM 與設計師正在被 AI 的變革改變原有的工作流程</strong>。
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
