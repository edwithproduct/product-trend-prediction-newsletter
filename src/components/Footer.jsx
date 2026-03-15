export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Elmon
        </p>
        <p className="text-sm text-gray-600">
          這是一個關於 AI 如何影響設計工具的探索性分析
        </p>
      </div>
    </footer>
  );
}
