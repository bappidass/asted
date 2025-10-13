import { Button } from "@/components/ui/button";
import astedLogo from "@/assets/asted-logo.png";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={astedLogo} alt="Asted - We Are Here" className="h-12" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#about" className="font-work-sans text-white hover:opacity-80 transition-opacity text-sm tracking-wide">
              ABOUT US
            </a>
            <a href="#works" className="font-work-sans text-white hover:opacity-80 transition-opacity text-sm tracking-wide">
              OUR WORKS
            </a>
            <a href="#tenders" className="font-work-sans text-white hover:opacity-80 transition-opacity text-sm tracking-wide">
              TENDERS
            </a>
            <a href="/careers" className="font-work-sans text-white hover:opacity-80 transition-opacity text-sm tracking-wide">
              CAREER
            </a>
            <Button className="bg-accent hover:bg-accent/90 text-white font-work-sans font-semibold text-sm px-8 py-2 tracking-wide">
              CONTACT
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;