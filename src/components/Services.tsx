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
      </div>
    </section>
  );
};

export default Services;
