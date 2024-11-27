import Header from "./Header";
import Button from "./shared/Button";
import ellipseBgTop from "../assets/ellipsetop.png";
import ellipseBgBottom from "../assets/ellipsebottom.png";

const Hero = () => {
  return (
    <div className="relative h-[110vh] ">
      <div className="absolute h-[110vh] z-[10] inset-0 bg-[url('/src/assets/hero/circles.png')] bg-cover bg-center bg-no-repeat pointer-events-none" />
      <img
        src={"/src/assets/hero/sphere.png"}
        className="hidden md:block absolute z-[10] h-40 lg:h-52 right-16 xl:right-48 lg:right-28 top-60 lg:top-80"
      />
      <img
        src={"/src/assets/hero/star-1.png"}
        className="absolute z-[10] w-6 md:w-auto top-40 md:top-64 left-10 md:left-48"
      />
      <img
        src={"/src/assets/hero/star-1.png"}
        className="absolute z-[10] w-6 md:w-auto bottom-40 md:bottom-80 right-8 md:right-60"
      />
      <img
        src={"/src/assets/hero/star-2.png"}
        className="absolute z-[10] w-6 md:w-auto right-10 md:right-60 top-20 md:top-40"
      />
      <div className="absolute z-10 top-0 left-0">
        <img src={ellipseBgTop} className="opacity-30" />
      </div>
      <Header />
      <div className="absolute z-30 inset-0 flex flex-col justify-center xl:max-w-6xl lg:max-w-2xl items-start px-8 lg:left-20 md:left-10 font-fira">
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
      <div className="absolute z-10 bottom-0 right-0">
        <img src={ellipseBgBottom} className="opacity-30" />
      </div>
    </div>
  );
};
export default Hero;
