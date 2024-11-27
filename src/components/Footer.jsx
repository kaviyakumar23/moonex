import moonexLogo from "../assets/moonex-footer.svg";
import twitterLogo from "../assets/social/twitter.svg";
import telegramLogo from "../assets/social/telegram.svg";
import redditLogo from "../assets/social/reddit.svg";

const Footer = () => {
  return (
    <footer className="bg-[#051422] ">
      <div className="  px-16 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 md:space-y-0 h-96 md:h-72">
          <div>
            <img src={moonexLogo} alt="MoonEx" className="h-28" />
          </div>

          <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-20 font-extrabold font-raleway">
            <a
              href="#about"
              className="text-white hover:text-white/80 transition-colors"
            >
              About Us
            </a>
            <a
              href="#roadmap"
              className="text-white hover:text-white/80 transition-colors"
            >
              Roadmap
            </a>
            <a
              href="#faqs"
              className="text-white hover:text-white/80 transition-colors"
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="text-white hover:text-white/80 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-3xl font-extrabold font-raleway">
              <span className="text-white">Contact</span>{" "}
              <span className="text-custom-header">Us</span>
            </h2>
            <div className="flex pt-3  w-full justify-between">
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                <img src={telegramLogo} className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                <img src={redditLogo} className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                <img src={twitterLogo} className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
