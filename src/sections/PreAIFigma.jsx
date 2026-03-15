import Section from '../components/Section';

export default function PreAIFigma() {
  const advantages = [
    {
      title: '元件功能',
      description: '類似於 React 或 Vue 的元件，當你需要一鍵修改同一個 UI 時，可以免去一個個修改的麻煩。'
    },
    {
      title: '提供 CSS 給工程師',
      description: '當設計需要 hand-off 時，可以減少撰寫詳細 design spec 的時間。'
    },
    {
      title: '協作與討論',
      description: '多名設計師可針對同一頁或特定 UI 進行討論，有類似留言的功能，讓團隊成員知道彼此的想法。'
    },
    {
      title: 'Hi-fi 原型模擬',
      description: '可以在 Figma 模擬高保真原型，幫助團隊了解真實產品互動時的樣子。'
    },
    {
      title: '版本紀錄',
      description: '幫助你了解過往在同一個頁面或 UI 上，做過了什麼樣的嘗試。'
    }
  ];

  return (
    <Section>
      <div className="space-y-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Figma 在過去的優劣
          </h2>
          <p className="text-gray-400 text-lg">
            先回到 AI 還沒有大舉入侵 Coding 的年代，大家會怎麼形容 Figma 的好？
          </p>
        </div>

        {/* 優點部分 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-figma-purple">✨ Figma 的優勢</h3>
          <div className="grid gap-4">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-figma-purple/50 transition-colors"
              >
                <h4 className="text-lg font-semibold text-gray-200 mb-2">
                  {index + 1}. {advantage.title}
                </h4>
                <p className="text-gray-400">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 批評部分 */}
        <div className="mt-12 p-8 bg-red-900/20 rounded-lg border border-red-800/50">
          <h3 className="text-2xl font-semibold text-red-400 mb-4">⚠️ 反對的聲音</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              但在那個時候，我看到了一篇有趣的留言是關於 Figma 可能會<strong className="text-red-400">延長你工作時長 20 倍</strong>的論點。
            </p>
            <p>
              這是一名來自 Perpetual Education 的 Design Director <strong>Derek Thomas Wood</strong> 的言論，
              他認為 Figma 會讓團隊召開大量不必要但看似重要的會議。
            </p>
            <p>
              此外，Figma 的內容到了真實建立產品時，仍有一些落差，
              在這過程中會存在各種爭執，並且你可能無法執行真正的用戶測試。
            </p>
            <p className="italic text-gray-400">
              他反而認為應該用紙筆溝通，而網站的建立終究來自程式碼。
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
