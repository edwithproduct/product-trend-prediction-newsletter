import Section from '../components/Section';

export default function FigmaFuture() {
  return (
    <Section className="bg-white">
      <div className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Figma 的未來
        </h2>

        {/* 核心論點 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            核心洞察：回歸 Lo-fi Wireframe
          </h3>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              儘管前面提及 Figma 推出了一系列 Figma Make 等 AI 功能，
              但我在消化{' '}
              <a
                href="https://www.youtube.com/watch?v=eh8bcBIAAFo"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:text-blue-800 underline"
              >
                Jenny Wen
              </a>{' '}
              於 Lenny's Podcast 上的分享，
              以及{' '}
              <a
                href="https://www.youtube.com/watch?v=ZZFewJceMbY"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:text-blue-800 underline"
              >
                Ryo Lu
              </a>{' '}
              於 First of Kind 的分享之後，
              我認為設計師或是 PM 未來使用 Figma 的方式會更像是在過往我們認知的 <strong className="text-amber-900">lo-fi wireframe</strong>。
            </p>
            <p className="italic text-gray-600">
              這也讓我想到一個很有名的例子：Spotify 在紙巾上的 wireframe。
            </p>
            <p>
              我想這也是作為一個 PM 或是設計師表現品味的時候，
              即使他只是一個極其簡易的線稿，<strong className="text-amber-900">但也足以指出產品的方向</strong>。
            </p>
          </div>
        </div>

        {/* Jenny Wen 的觀點 */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-amber-900">
              Jenny Wen 的觀點
            </h4>
            <p className="text-gray-700 leading-relaxed">
              寫程式是一個<strong className="text-amber-900">線性的過程</strong>，
              並且我自己在實際體驗 AI 輔助我創造原型時，他需要花費的時間仍然是較久的。
            </p>
            <p className="text-gray-700 leading-relaxed">
              然而當今天還沒有確定要用哪一個方案時，
              Figma 提供的畫面確實可以<strong className="text-amber-900">很快速地創造出好幾種選擇</strong>，
              幫助自己思索該推進哪一個方案。
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-amber-900">
              微小任務的處理方式
            </h4>
            <p className="text-gray-700 leading-relaxed">
              而設計師在現在以及未來，如果有任何<strong className="text-amber-900">微小且明確的任務</strong>需要處理時，
              更應該<strong className="text-amber-900">直接於 Code 完成相應的調整</strong>，
              既不是讓 AI 輔助你完成，也不是再回到 Figma 製作相應的圖稿。
            </p>
          </div>
        </div>

        {/* Figma 的角色轉變 */}
        <div className="mt-12 space-y-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Figma 的新定位
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div>
              <p className="text-lg">
                <strong className="text-amber-900">Figma = 快速探索多個方案的思考工具</strong>
              </p>
              <p className="text-gray-600 mt-1">
                當你不確定方向時，用 Figma 快速產出多個視覺選項。
              </p>
            </div>
            <div>
              <p className="text-lg">
                <strong className="text-amber-900">Code = 實際執行與微調的工具</strong>
              </p>
              <p className="text-gray-600 mt-1">
                當方案確定後，直接在程式碼中實作與調整細節。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
