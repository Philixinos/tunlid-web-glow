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
                <span className="font-bold">E-post:</span> info@tunlidmedia.se
              </p>
              <p className="text-xl">
                <span className="font-bold">Telefon:</span> 070-938 74 80
              </p>
              <p className="text-xl">
                <span className="font-bold">Adress:</span> Askims Furuväg 3<br />
                <span className="ml-24">436 40 Askim</span>
              </p>
              <p className="text-xl">
                556937-0975 | Godkänd för F-skatt
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
