import { Button } from "@/components/ui/button";
import charityManImage from "@/assets/charity-man.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={charityManImage} 
              alt="Indigenous community member" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="font-oswald font-bold text-section-header text-primary mb-6">
                ASPIRATION CHARITY
              </h2>
              <div className="space-y-6">
                <p className="font-work-sans text-body text-foreground leading-relaxed">
                  We are committed to create a lasting impact by enhancing Smart Agriculture 
                  practices, improving Education access, fostering eco-friendly Environmental 
                  Design, and boosting Livelihood support, ensuring holistic development and 
                  community well-being for a better tomorrow.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="cta">
                JOIN NOW
              </Button>
            </div>
          </div>

          {/* Donation Section */}
          <div className="order-3 lg:col-span-1 bg-primary text-primary-foreground p-8 rounded-lg">
            <h3 className="font-oswald font-bold text-card-header mb-6">
              DONATION
            </h3>
            <p className="font-work-sans text-body mb-6 opacity-90">
              Through your donation, indigenous people of Assam with improved Agriculture, 
              better Education, Environmental Design, and stronger Livelihood cultural 
              preservation and pathways to inclusive development.
            </p>
            <Button variant="white-outline" size="cta">
              DONATE NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;