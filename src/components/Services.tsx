import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      title: "Matchsändning",
      description: "Multicam, grafik (klocka/scorebug), repriser och kommentatorsmix. Leverans till RTMP/SRT.",
      price: "Från 9 900 kr"
    },
    {
      title: "Highlights & SoMe",
      description: "Snabbklipp under/efter match med vertikala format för Instagram, TikTok och YouTube Shorts.",
      price: "Från 4 900 kr"
    },
    {
      title: "Turnering/Evenemang",
      description: "Flerdagarsproduktion med grafikpaket, sponsor-släpp, intervjuer och studiodel.",
      price: "Offert"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Tjänster</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Liveproduktion från A till Ö – välj ett paket eller be om offert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                <CardDescription className="text-base mt-3">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold font-heading mb-4">{service.price}</p>
                <Button 
                  onClick={scrollToContact} 
                  variant="outline" 
                  className="w-full font-semibold"
                >
                  Boka
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
