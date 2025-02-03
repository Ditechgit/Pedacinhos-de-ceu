import Header from "./components/Header";
import MainSection from "./components/MainSection";
import LandingSection from "./components/LandingSection";
import FeaturesSection from "./components/FeaturesSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import ArrowTop from "./components/ArrowTop";

function App() {
  const [showButton, setShowButton] = useState(false);

  // Função para rolar a página para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Efeito para mostrar/esconder o botão com base na posição de rolagem
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="m-0 p-0 box-border list-none font-serif bg-[url('./assets/background-image.png')] bg-cover ">
      <Header />
      <Sidebar />
      <main className="grid grid-cols-1 gap-5 max-w-7xl my-0 mx-auto items-center">
        <MainSection />
        <LandingSection />
        <FeaturesSection />
        <FaqSection />
      </main>
      <Footer />

      {/* Botão "Voltar ao Topo" */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-4 bg-orange-300 text-slate-800 rounded-full shadow-lg hover:bg-orange-400 hover:text-orange-200 transition-colors"
        >
          <ArrowTop />
        </button>
      )}
    </div>
  );
}

export default App;
