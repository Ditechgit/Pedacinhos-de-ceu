import Header from "./components/Header";
import MainSection from "./components/MainSection";
import LandingSection from "./components/LandingSection";
import FeaturesSection from "./components/FeaturesSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";




function App() {
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
    </div>
  );
}

export default App;
