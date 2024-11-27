import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ellipseFaq1 from "../assets/ellipsefaq.png";
import ellipseBottom from "../assets/ellipsebottom.png";

const Faqs = () => {
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
    <div id="faqs" className=" relative py-12 px-4 md:px-6 ">
      <div className="absolute z-[10] -bottom-80 -left-40 ">
        <img src={ellipseFaq1} className="opacity-30" />
      </div>
      <div className="absolute z-[10] -right-96 -top-96 ">
        <img src={ellipseBottom} className="opacity-30" />
      </div>
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/5 relative z-[20] backdrop-blur-md border-none shadow-2xl py-4">
          <div className="flex justify-center">
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
                  className="border-custom-border px-14 py-4"
                >
                  <AccordionTrigger className="text-white font-raleway hover:text-white/90 text-base md:text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-faq-answer font-raleway TE text-sm md:text-base">
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
