import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "Multicam med rörlig/fast kamera",
    "vMix/OBS, NDI/SDI, SRT/RTMP",
    "Kommentatorsljud och intercom",
    "Sponsor-grafik och reklamspottar"
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Om Tunlid Media</h2>
            <p className="text-lg md:text-xl mb-6">
              Vi hjälper föreningar, förbund och arrangörer att skapa engagerande livesändningar av sport. 
              Teknik, tempo och berättande – så att publiken får upplevelsen den förtjänar.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 md:p-10 border-2">
            <h3 className="text-2xl font-bold font-heading mb-6">Varför oss?</h3>
            <p className="text-lg mb-8">
              Snabb setup, stabil sändning och vassa klipp för sociala medier. 
              Vi tar ansvar för helheten eller hoppar in som förstärkning.
            </p>

            <div className="mb-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
