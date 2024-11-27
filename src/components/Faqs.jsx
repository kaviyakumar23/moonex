import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import ellipseFaq1 from "../assets/ellipsefaq.png";
import ellipseBottom from "../assets/ellipsebottom.png";

const Faqs = () => {
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

    const element = document.getElementById("faqs-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const faqData = [
    {
      question: "How do I get a Referral Code?",
      answer: "Instructions for getting a referral code would go here.",
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "How do I get a Referral Code?",
      answer: "Additional instructions about referral codes would go here.",
    },
  ];

  return (
    <div id="faqs-section" className="relative py-12 px-4 md:px-6">
      <div className="absolute z-[10] -bottom-80 -left-40">
        <img src={ellipseFaq1} className="opacity-30" />
      </div>
      <div className="absolute z-[10] -right-96 -top-96">
        <img src={ellipseBottom} className="opacity-30" />
      </div>
      <div className="max-w-4xl mx-auto">
        <Card
          className={`bg-white/5 relative z-[20] backdrop-blur-md border-none shadow-2xl py-4
            transform transition-all duration-700 ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-20 opacity-0 scale-95"
            }
          `}
        >
          <div
            className={`flex justify-center transform transition-all duration-500 delay-300
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-custom-header font-fira">
              FAQs
            </h1>
          </div>
          <CardContent className="px-0 py-6">
            <Accordion type="single" collapsible>
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`border-custom-border px-14 py-4 transform transition-all duration-500
                    ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${500 + index * 100}ms`,
                  }}
                >
                  <AccordionTrigger
                    className="text-white font-raleway hover:text-white/90 text-base md:text-lg font-medium
                      transition-all duration-300 ease-in-out hover:scale-[1.01] group"
                  >
                    <span className="group-hover:pl-2 transition-all duration-300">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-faq-answer font-raleway text-sm md:text-base
                      transition-all duration-300 data-[state=open]:animate-fadeIn"
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Faqs;
