import { useState, useEffect } from "react";
import SectionHeader from "./shared/SectionHeader";
import cert from "../assets/features/cert.svg";
import cheap from "../assets/features/cheap.svg";
import contractsell from "../assets/features/contractsell.svg";
import support from "../assets/features/support.svg";
import { Card, CardContent } from "./ui/card";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("features-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const features = [
    {
      icon: cheap,
      title: "Cheapest TXs",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
      icon: cert,
      title: "CerTIK",
      description:
        "We are Audited by Certik. CertiK is the leading security-focused ranking platform to",
    },
    {
      icon: contractsell,
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets",
    },
    {
      icon: support,
      title: "CrossDex Support",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
  ];

  return (
    <div id="features-section" className="px-4 py-6 lg:px-16">
      <div
        className={`flex justify-center transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <SectionHeader text={"Our Features"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`bg-slate-900/50 border-slate-800 backdrop-blur-sm 
              hover:bg-slate-900/75 hover:scale-105
              transition-all duration-500 ease-out
              transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            style={{
              transitionDelay: `${150 * index}ms`,
            }}
          >
            <CardContent className="pt-6">
              <div className="space-y-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  loading="lazy"
                  className={`h-16 w-16 transition-transform duration-500 ${
                    isVisible ? "scale-100" : "scale-0"
                  }`}
                  style={{
                    transitionDelay: `${300 + 150 * index}ms`,
                  }}
                />
                <h3
                  className={`text-xl font-semibold text-custom-white font-raleway transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${450 + 150 * index}ms`,
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-custom-grey text-sm font-roboto transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${600 + 150 * index}ms`,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
