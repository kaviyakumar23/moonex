import { Fragment } from "react";
import { Card, CardContent } from "./ui/card";
import moonexLogo from "../assets/moonex-logo-small.svg";
import UniSwapLogo from "../assets/uniswap-logo.svg";
import check from "../assets/check.svg";
import close from "../assets/close.svg";

const Comparison = () => {
  const comparisonPoints = [
    "Point no one",
    "Point no two this",
    "Point no two this",
    "Point no two this",
    "Point no two this",
  ];
  return (
    <div className="px-6 py-6 lg:px-16 text-white ">
      <h1 className="px-6 py-5 lg:px-16 font-fira md:text-5xl text-2xl font-extrabold">
        Why <span className="text-custom-header pr-1">MoonEX</span>?
      </h1>
      <div className="p-6">
        <Card className="bg-white/5 backdrop-blur-md border-none shadow-2xl">
          <CardContent className="p-0">
            <div className="grid grid-cols-3 p-7">
              <div className="px-6 py-6 lg:py-0 border-b border-r border-custom-border flex items-center justify-center ">
                <h2 className="text-2xl font-bold text-custom-header font-audiowide">
                  Comparison
                </h2>
              </div>
              <div className="px-6 border-b border-r border-custom-border flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <img
                    src={moonexLogo}
                    alt="MoonEX Logo"
                    className="lg:h-auto h-14"
                  />
                </div>
              </div>
              <div className="px-6 border-b border-custom-border flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <img
                    src={UniSwapLogo}
                    alt="Uniswap Logo"
                    className="lg:h-auto h-10"
                  />
                </div>
              </div>

              {comparisonPoints.map((point, index) => (
                <Fragment key={index}>
                  <div
                    className={`py-6 lg:pl-16 pl-6 border-r border-custom-border ${
                      index < comparisonPoints.length - 1 ? "border-b " : ""
                    }`}
                  >
                    <p className="text-gray-300 font-fira text-left">{`${
                      index + 1
                    } . ${point}`}</p>
                  </div>
                  <div
                    className={`p-6 border-r border-custom-border ${
                      index < comparisonPoints.length - 1 ? "border-b " : ""
                    } flex justify-center`}
                  >
                    <img src={check} className=" w-6 h-6" />
                  </div>
                  <div
                    className={`p-6  ${
                      index < comparisonPoints.length - 1
                        ? "border-b border-custom-border"
                        : ""
                    } flex justify-center`}
                  >
                    <img src={close} className="w-6 h-6" />
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
