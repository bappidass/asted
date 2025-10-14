import Agriculture from "../assets/agriculture.svg";
import education from "../assets/Education.svg";
import environment from "../assets/Environment.svg";
import livelihood from "../assets/Livelihood.svg";

import EducationSDG from "../assets/EducationSDGs.png";
import AgricultureSDG from "../assets/AgricultureSDGs.png";
import LivelihoodSDG from "../assets/LivelihoodSDGs.png";
import EnvironmentSDG from "../assets/EnvironmentSDGs.png";

const Services = () => {
  const services = [
    {
      title: "AGRICULTURE",
      SVG: Agriculture,
      SDG: AgricultureSDG,
      bgColor: "bg-background",
      textColor: "text-primary",
      description:
        "We work with indigenous people of Assam to promote Agriculture through medicinal herb farming and plantation farming, creating sustainable livelihoods, preserving traditional practices, and ensuring eco-friendly community development.",
    },
    {
      title: "EDUCATION",
      SVG: education,
      SDG: EducationSDG,
      bgColor: "bg-primary",
      textColor: "text-primary-foreground",
      description:
        "We strengthen Education for indigenous people of Assam through Smart Learning, Training, Skill Development, Digitalization, and Health and Sanitation awareness, creating pathways to empowerment and sustainable community growth.",
    },
    {
      title: "ENVIRONMENT",
      SVG: environment,
      SDG: EnvironmentSDG,
      bgColor: "bg-background",
      textColor: "text-primary",
      description:
        "Through Environmental Design, we support indigenous people of Assam with Model Village projects, Beautification and Tourism opportunities, and solutions to Human-Wildlife Conflict, fostering sustainability and community well-being.",
    },
    {
      title: "LIVELIHOOD",
      SVG: livelihood,
      SDG: LivelihoodSDG,
      bgColor: "bg-background",
      textColor: "text-primary",
      description:
        "Livelihood programs support indigenous people of Assam with entrepreneurship, livelihood development, employment generation, and social finance, fostering inclusive growth, financial stability, and improved quality of life.",
    },
  ];

  return (
    <section id="works">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const isEducation = service.title === "EDUCATION";
            return (
              <div
                key={index}
                className={`group ${service.bgColor} p-8 text-center space-y-6 transition-all duration-500 ease-in-out ${
                  !isEducation
                    ? "hover:bg-primary hover:text-primary-foreground hover:scale-95"
                    : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex justify-center transition-all duration-500 ${
                    !isEducation
                      ? "group-hover:bg-white group-hover:border group-hover:border-white group-hover:rounded-full group-hover:p-3"
                      : ""
                  }`}
                >
                  <img
                    src={service.SVG}
                    alt={service.title}
                    className="w-16 h-16 object-contain transition-all duration-500"
                  />
                </div>

                {/* SDG Image */}
                <div
                  className={`flex justify-center transition-opacity duration-500 ${
                    !isEducation ? "group-hover:opacity-0" : ""
                  }`}
                >
                  <img
                    src={service.SDG}
                    alt={`${service.title} SDG`}
                    className="transition-all duration-500"
                  />
                </div>

                {/* Title */}
                <h3
                  className={`font-oswald font-bold text-card-header transition-colors duration-500 ${
                    isEducation
                      ? "text-primary-foreground"
                      : "text-primary group-hover:text-primary-foreground"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`font-work-sans text-body-small leading-relaxed transition-colors duration-500 ${
                    isEducation
                      ? "text-primary-foreground"
                      : "text-primary group-hover:text-primary-foreground"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
