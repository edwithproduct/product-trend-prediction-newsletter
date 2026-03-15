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
    <Section className="bg-white">
      <div className="space-y-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Figma 在過去的優劣
          </h2>
          <p className="text-gray-600 text-lg">
            先回到 AI 還沒有大舉入侵 Coding 的年代，大家會怎麼形容 Figma 的好？
          </p>
        </div>

        {/* 優點部分 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900">Figma 的優勢</h3>
          <div className="space-y-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="space-y-1">
                <h4 className="text-lg font-semibold text-amber-900">
                  {advantage.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {advantage.description}
                </p>
                {index === 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-3">範例影片：Figma 可以用類似 React 元件的方式建立設計</p>
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/JpizbChgUrc?si=lX29tieH_oT61JyS&amp;clip=UgkxdGuc1m-A0GOQTDAwmeh4HiXXODYPv4no&amp;clipt=EOOXCRjM_wo"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 批評部分 */}
        <div className="mt-12 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">反對的聲音</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              但在那個時候，我看到了一篇有趣的留言是關於 Figma 可能會<strong className="text-amber-900">延長你工作時長 20 倍</strong>的論點。
            </p>
            <p>
              這是一名來自 Perpetual Education 的 Design Director <strong className="text-amber-900">Derek Thomas Wood</strong> 的言論，
              他認為 <strong className="text-amber-900">Figma 會讓團隊召開大量不必要但看似重要的會議</strong>。
            </p>
            <p>
              此外，Figma 的內容到了真實建立產品時，仍有一些落差，
              在這過程中會存在各種爭執，並且你可能無法執行真正的用戶測試。
            </p>
            <p className="italic text-gray-600">
              他反而認為應該用紙筆溝通，而網站的建立終究來自程式碼。
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
