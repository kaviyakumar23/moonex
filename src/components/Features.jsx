import SectionHeader from "./shared/SectionHeader";
import cert from "../assets/features/cert.svg";
import cheap from "../assets/features/cheap.svg";
import contractsell from "../assets/features/contractsell.svg";
import support from "../assets/features/support.svg";
import { Card, CardContent } from "./ui/card";

const Features = () => {
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
    <div className="px-4 py-6 lg:px-16">
      <div className="flex justify-center">
        <SectionHeader text={"Our Features"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/75 transition-colors"
          >
            <CardContent className="pt-6">
              <div className="space-y-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-16 w-16"
                />
                <h3 className="text-xl font-semibold text-custom-white font-raleway">
                  {feature.title}
                </h3>
                <p className="text-custom-grey text-sm font-roboto">
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
