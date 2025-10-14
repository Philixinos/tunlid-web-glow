import { Button } from "./ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6">
            LIVEPRODUKTION · SPORT
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Proffsig livesändning av idrottsevenemang – från plan till publik
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto">
            Vi producerar och redigerar innehåll under livesändningar: multicam, grafik & repriser, 
            intervjuer, highlights och sociala medier. Optimerat för YouTube, Facebook, Solidsport m.fl.
          </p>
          
          <div className="flex justify-center mb-16">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="text-base font-semibold"
            >
              Boka ett samtal
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Sända matcher</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">4K/60</div>
              <div className="text-sm text-muted-foreground">Kamerakedja</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Akutproduktion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">5.0</div>
              <div className="text-sm text-muted-foreground">Kundbetyg</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
