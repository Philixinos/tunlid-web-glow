import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent("Förfrågan från webbplatsen");
    const body = encodeURIComponent(
      `Namn: ${formData.name}\nE-post: ${formData.email}\n\nMeddelande:\n${formData.message}`
    );
    
    window.location.href = `mailto:kontakt@tunlid.media?subject=${subject}&body=${body}`;
    
    toast.success("E-postprogrammet öppnas...");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Boka sändning</h2>
            <p className="text-lg text-muted-foreground">
              Berätta datum, arena och behov – så återkommer vi snabbt med upplägg och pris.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                För- och efternamn
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-post
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Beskrivning
              </label>
              <Textarea
                id="message"
                required
                rows={6}
                placeholder="Sport, datum, plats, ungefärligt schema, önskade leveranser…"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full"
              />
            </div>

            <Button type="submit" size="lg" className="w-full font-semibold">
              Skicka förfrågan
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              Meddelandet öppnas i ditt e-postprogram och skickas till kontakt@tunlid.media
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
