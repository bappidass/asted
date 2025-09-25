import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-accent w-10 h-10 rounded flex items-center justify-center">
              <span className="text-primary font-oswald font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="font-oswald font-bold text-2xl">asted</h1>
              <p className="text-xs opacity-90 tracking-wider">WE ARE HERE</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="font-work-sans hover:opacity-80 transition-opacity">
              ABOUT US
            </a>
            <a href="#works" className="font-work-sans hover:opacity-80 transition-opacity">
              OUR WORKS
            </a>
            <a href="#tenders" className="font-work-sans hover:opacity-80 transition-opacity">
              TENDERS
            </a>
            <a href="#career" className="font-work-sans hover:opacity-80 transition-opacity">
              CAREER
            </a>
            <Button variant="white-outline" size="sm">
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