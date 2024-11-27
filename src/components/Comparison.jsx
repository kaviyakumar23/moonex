import { Fragment } from "react";
import { Card, CardContent } from "./ui/card";
import moonexLogo from "../assets/moonex-logo-small.svg";
import UniSwapLogo from "../assets/uniswap-logo.svg";
import check from "../assets/check.svg";
import close from "../assets/close.svg";
import SectionHeader from "./shared/SectionHeader";
import ellipseCenter from "../assets/ellipsecenter.png";
import ellipseBgBottom from "../assets/ellipsebottom.png";

const Comparison = () => {
  const comparisonPoints = [
    "Point no one",
    "Point no two this",
    "Point no two this",
    "Point no two this",
    "Point no two this",
  ];

  return (
    <div id="about" className="relative px-4 py-6 lg:px-16 text-white ">
      <div className="absolute z-[10] top-0 left-0">
        <img src={ellipseCenter} className="opacity-30" />
      </div>
      <div className="absolute z-[10] -right-96  -top-64">
        <img src={ellipseBgBottom} className="opacity-30" />
      </div>
      <SectionHeader text="Why MoonEX?" />

      <div className="p-2 sm:p-4">
        <Card className="bg-white/5 backdrop-blur-md border-none shadow-2xl">
          <CardContent className="p-0">
            <div className="grid grid-cols-3 p-2 sm:p-3 lg:p-7 ">
              <div className="px-2 sm:px-6 py-3 sm:py-6 lg:py-0 border-b border-r border-custom-border flex items-center justify-center">
                <h2 className="text-xs sm:text-xl lg:text-2xl font-bold text-custom-header font-audiowide">
                  Comparison
                </h2>
              </div>
              <div className="px-2 sm:px-6 border-b border-r border-custom-border flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <img
                    src={moonexLogo}
                    alt="MoonEX Logo"
                    className="h-8 sm:h-8 lg:h-12"
                  />
                </div>
              </div>
              <div className="px-2 sm:px-6 border-b border-custom-border flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <img
                    src={UniSwapLogo}
                    alt="Uniswap Logo"
                    className="h-5 sm:h-6 lg:h-8"
                  />
                </div>
              </div>
              {comparisonPoints.map((point, index) => (
                <Fragment key={index}>
                  <div
                    className={`py-3 sm:py-6 px-2 sm:px-6 border-r border-custom-border ${
                      index < comparisonPoints.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <p className="text-gray-300 font-fira text-xs sm:text-sm lg:text-base text-left">
                      {`${index + 1}. ${point}`}
                    </p>
                  </div>
                  <div
                    className={`p-2 sm:p-6 border-r border-custom-border ${
                      index < comparisonPoints.length - 1 ? "border-b" : ""
                    } flex justify-center`}
                  >
                    <img
                      src={check}
                      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                    />
                  </div>
                  <div
                    className={`p-2 sm:p-6 ${
                      index < comparisonPoints.length - 1
                        ? "border-b border-custom-border"
                        : ""
                    } flex justify-center`}
                  >
                    <img
                      src={close}
                      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                    />
                  </div>
                </Fragment>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Comparison;
