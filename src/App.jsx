import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Comparison from "./components/Comparison";
import Features from "./components/Features";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import MoonexLoader from "./components/MoonexLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-screen bg-[#071624] flex items-center justify-center">
          <MoonexLoader />
        </div>
      ) : (
        <>
          <div className="min-h-screen relative bg-[#071624] overflow-hidden">
            <Hero />
            <Comparison />
            <Features />
            <Faqs />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
