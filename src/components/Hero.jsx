import Header from "./Header";
import Button from "./shared/Button";
import ellipseBgTop from "../assets/ellipsetop.png";
import ellipseBgBottom from "../assets/ellipsebottom.png";

const Hero = () => {
  return (
    <div className="relative h-[110vh]">
      <div className="absolute z-[998] top-0 left-0">
        <img src={ellipseBgTop} className="opacity-30" />
      </div>
      <Header />
      <div className="absolute z-[999] inset-0 flex flex-col justify-center xl:max-w-6xl lg:max-w-2xl items-start px-8 lg:left-20 md:left-10 font-fira">
        <h1 className="md:text-7xl text-4xl font-extrabold text-white mb-4 text-left">
          Trusted Multi-Chain <br />{" "}
          <span className="text-custom-base">DEX</span> Platform
        </h1>
        <p className="md:text-xl text-base text-gray-400 text-left">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>
        <div className="flex gap-4 mt-8">
          <Button>Connect Wallet</Button>
          <Button variant="outlined">Trade Crypto</Button>
        </div>
      </div>
      <div className="absolute z-[998] bottom-0 right-0">
        <img src={ellipseBgBottom} className="opacity-30" />
      </div>
    </div>
  );
};
export default Hero;
