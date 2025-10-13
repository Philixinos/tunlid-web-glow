import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/tunlid-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Tunlid Media" className="h-8 md:h-10" />
            <span className="text-xl md:text-2xl font-bold font-heading tracking-tight">
              TUNLID MEDIA
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium hover:text-primary/70 transition-colors"
              >
                Tjänster
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover:text-primary/70 transition-colors"
              >
                Om oss
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-sm font-semibold"
              >
                Kontakt
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <ul className="flex flex-col gap-4">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left py-2 font-medium hover:text-primary/70 transition-colors"
                >
                  Tjänster
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left py-2 font-medium hover:text-primary/70 transition-colors"
                >
                  Om oss
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full px-6 py-2.5 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-semibold"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
