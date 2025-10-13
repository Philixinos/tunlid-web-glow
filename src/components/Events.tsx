import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { AspectRatio } from "./ui/aspect-ratio";
import eventCycling from "@/assets/event-cycling.jpg";
import eventFootball from "@/assets/event-football.jpg";
import eventHockey from "@/assets/event-hockey.jpg";

const Events = () => {
  const eventImages = [
    { src: eventCycling, alt: "Cykelevenemang" },
    { src: eventFootball, alt: "Fotbollsevenemang" },
    { src: eventHockey, alt: "Hockeyevenemang" }
  ];

  return (
    <section id="event" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">Event</h2>
          
          <Carousel className="w-full max-w-2xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {eventImages.map((image, index) => (
                <CarouselItem key={index}>
                  <AspectRatio ratio={1 / 1}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Events;
