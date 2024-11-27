import Header from "./Header";
import Button from "./shared/Button";
import ellipseBgTop from "../assets/ellipsetop.webp";
import ellipseBgBottom from "../assets/ellipsebottom.webp";
import sphere from "../assets/hero/sphere.webp";
import star1 from "../assets/hero/star-1.svg";
import star2 from "../assets/hero/star-2.svg";

const Hero = () => {
  return (
    <div className="relative h-[110vh]">
      <div className="absolute h-[110vh] z-[10] inset-0 bg-[url('/src/assets/hero/circles.webp')] bg-cover bg-center bg-no-repeat pointer-events-none animate-pulse" />

      <img
        src={sphere}
        className="hidden md:block absolute z-[10] h-40 lg:h-52 right-16 xl:right-48 lg:right-28 top-60 lg:top-80 
        animate-float"
        alt="Sphere"
      />

      <img
        src={star1}
        className="absolute z-[10] w-6 md:w-auto top-40 lg:h-14 h-6 md:top-64 left-10 md:left-48 
        animate-bounce"
        alt="Star"
      />
      <img
        src={star1}
        className="absolute z-[10] w-6 md:w-auto bottom-40 lg:h-14 h-6 md:bottom-80 right-8 md:right-60 
        animate-bounce delay-300"
        alt="Star"
      />
      <img
        src={star2}
        className="absolute z-[10] w-6 md:w-auto right-10 lg:h-14 h-6 md:right-60 top-20 md:top-40 
        animate-bounce delay-500"
        alt="Star"
      />

      <div className="absolute z-10 top-0 left-0">
        <img src={ellipseBgTop} className="opacity-30" alt="Ellipse" />
      </div>

      <Header />

      <div className="absolute z-30 inset-0 flex flex-col justify-center xl:max-w-6xl lg:max-w-2xl items-start px-8 lg:left-20 md:left-10 font-fira">
        <h1 className="md:text-7xl text-4xl font-extrabold text-white mb-4 text-left animate-fadeIn">
          Trusted Multi-Chain <br />{" "}
          <span className="text-custom-base">DEX</span> Platform
        </h1>

        <p className="md:text-xl text-base text-gray-400 text-left animate-fadeIn animation-delay-300">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>

        <div className="flex gap-4 mt-8 animate-fadeIn animation-delay-500">
          <Button>Connect Wallet</Button>
          <Button variant="outlined">Trade Crypto</Button>
        </div>
      </div>

      <div className="absolute z-10 bottom-0 right-0">
        <img src={ellipseBgBottom} className="opacity-30" alt="Ellipse" />
      </div>
    </div>
  );
};

export default Hero;
