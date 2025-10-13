import Agriculture from "../assets/agriculture.svg";
import education from "../assets/Education.svg";
import environment from "../assets/Environment.svg";
import livelihood from "../assets/Livelihood.svg";
const Services = () => {
  const services = [
    {
      title: "AGRICULTURE",
      SVG: Agriculture,
      bgColor: "bg-background",
      textColor: "text-primary",
      description: "We work with indigenous people of Assam to promote Agriculture through medicinal herb farming and plantation farming, creating sustainable livelihoods, preserving traditional practices, and ensuring eco-friendly community development."
    },
    {
      title: "EDUCATION", 
      SVG: education,
      bgColor: "bg-primary",
      textColor: "text-primary-foreground",
      description: "We strengthen Education for indigenous people of Assam through Smart Learning, Training, Skill Development, Digitalization, and Health and Sanitation awareness, creating pathways to empowerment and sustainable community growth."
    },
    {
      title: "ENVIRONMENT",
      SVG: environment,
      bgColor: "bg-background",
      textColor: "text-primary",
      description: "Through Environmental Design, we support indigenous people of Assam with Model Village projects, Beautification and Tourism opportunities, and solutions to Human-Wildlife Conflict, fostering sustainability and community well-being."
    },
    {
      title: "LIVELIHOOD",
      SVG: livelihood,
      bgColor: "bg-background", 
      textColor: "text-primary",
      description: "Livelihood programs support indigenous people of Assam with entrepreneurship, livelihood development, employment generation, and social finance, fostering inclusive growth, financial stability, and improved quality of life."
    }
  ];

  return (
    <section id="works" className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${service.bgColor} p-8 text-center space-y-6 transition-transform hover:scale-105`}
            >
              {/* Icon */}
              <div className="flex justify-center">
                <img src={service.SVG} alt="" />
              </div>

              {/* Title */}
              <h3 className={`font-oswald font-bold text-card-header ${service.textColor}`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`font-work-sans text-body-small ${service.textColor} leading-relaxed`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;