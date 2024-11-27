import Hero from "./components/Hero";
import Comparison from "./components/Comparison";
import Features from "./components/Features";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen relative bg-[#071624]">
        <div className="absolute inset-0 bg-[url('/src/assets/bg-img.png')] bg-cover bg-center bg-no-repeat"></div>
        <Hero />
        <Comparison />
        <Features />
        <Faqs />
      </div>
      <Footer />
    </>
  );
}

export default App;
