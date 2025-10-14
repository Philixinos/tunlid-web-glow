import logoHD from "@/assets/logo-hd.png";
import logoMiletos from "@/assets/logo-miletos.png";
import logoNEP from "@/assets/logo-nep.png";
import logoSVT from "@/assets/logo-svt.png";
import logoTSN from "@/assets/logo-tsn.png";

const Clients = () => {
  const logos = [
    { src: logoHD, alt: "HD Resources" },
    { src: logoMiletos, alt: "Miletos" },
    { src: logoNEP, alt: "NEP" },
    { src: logoSVT, alt: "SVT" },
    { src: logoTSN, alt: "TSN" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
          Betrodd av
        </h2>
        
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="flex animate-scroll-logos">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ height: "100px" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
