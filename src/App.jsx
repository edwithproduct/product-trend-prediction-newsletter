import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Introduction from './sections/Introduction';
import PreAIFigma from './sections/PreAIFigma';
import WorkflowChange from './sections/WorkflowChange';
import ProductBuilder from './sections/ProductBuilder';
import VibeCoding from './sections/VibeCoding';
import FigmaFuture from './sections/FigmaFuture';
import Conclusion from './sections/Conclusion';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <ScrollProgress />

      <main>
        <Hero />
        <Introduction />
        <PreAIFigma />
        <WorkflowChange />
        <ProductBuilder />
        <VibeCoding />
        <FigmaFuture />
        <Conclusion />
      </main>

      <Footer />
    </div>
  );
}

export default App;
