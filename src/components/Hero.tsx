import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Community hands joining together" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary from-50% to-transparent to-50%"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <h1 className="font-oswald font-bold text-hero leading-tight mb-8 tracking-wide">
          WE ARE HERE TO MAKE
          <br />
          THE WORLD BETTER
        </h1>
        <p className="font-work-sans text-body max-w-3xl mx-auto mb-12 opacity-90 leading-relaxed">
          Committed to creating lasting impact by enhancing Smart Agriculture practices, 
          improving Education access, fostering eco-friendly Environmental Design, and 
          boosting Livelihood support for holistic development and community well-being.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;