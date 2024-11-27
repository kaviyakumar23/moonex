import Hero from "./components/Hero";
import Comparison from "./components/Comparison";
import Features from "./components/Features";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen relative bg-[#071624] overflow-hidden">
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
