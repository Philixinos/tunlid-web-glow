import logo from "@/assets/tunlid-media-logo.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container">
        <nav className="flex items-center justify-center h-16 md:h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Tunlid Media" className="h-10 md:h-12" />
            <span className="text-xl md:text-2xl font-bold font-heading tracking-tight">
              TUNLID MEDIA
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
