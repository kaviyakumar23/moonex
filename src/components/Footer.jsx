import moonexLogo from "../assets/moonex-footer.svg";
import twitterLogo from "../assets/social/twitter.svg";
import telegramLogo from "../assets/social/telegram.svg";
import redditLogo from "../assets/social/reddit.svg";

const Footer = () => {
  const navigationLinks = [
    { id: "about", label: "About Us" },
    { id: "roadmap", label: "Roadmap" },
    { id: "faqs", label: "FAQs" },
    { id: "contact", label: "Contact Us" },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="contact" className="bg-[#051422] ">
      <div className="px-16 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 md:space-y-0 h-96 md:h-72">
          <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src={moonexLogo}
              alt="MoonEx"
              className="h-28 cursor-pointer"
            />
          </div>

          <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-20 font-extrabold font-raleway">
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-white/80 transition-colors"
              >
                {link.label}
              </button>
            ))}
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
