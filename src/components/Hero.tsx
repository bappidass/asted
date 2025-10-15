import React from "react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary group">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Community hands joining together"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="absolute top-0 left-0 h-full bg-[#000080] opacity-[69%] w-0 group-hover:w-1/2 transition-all duration-700 ease-in-out"></div>
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <h1 className="font-oswald font-bold text-hero leading-tight mb-8 tracking-wide transform transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:tracking-wider">
          WE ARE HERE TO MAKE
          <br />
          THE WORLD BETTER
        </h1>
      </div>
    </section>
  );
};

export default Hero;
