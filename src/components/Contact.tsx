import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Kontakt section */}
          <div className="border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">Kontakt</h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-xl">
                <span className="font-bold">E-post:</span> kontakt@tunlidmedia.se
              </p>
              <p className="text-xl">
                <span className="font-bold">Telefon:</span> 070-938 74 80
              </p>
              <p className="text-xl">
                <span className="font-bold">Bas:</span> Sverige – rörlig produktion
              </p>
            </div>

            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium"
            >
              Tillgängliga kvällar & helger
            </Button>
          </div>

          {/* Teknik & plattformar section */}
          <div className="border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">Teknik & plattformar</h2>
            
            <p className="text-xl leading-relaxed">
              vMix • OBS • Blackmagic • NDI/SDI • SRT/RTMP • YouTube Live • Facebook Live • Solidsport
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
