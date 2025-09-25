import { Button } from "@/components/ui/button";
import educationImage from "@/assets/education-children.jpg";

const ImpactStories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <img 
              src={educationImage} 
              alt="Children in educational program" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-oswald font-bold text-stories-header text-primary mb-2">
                IMPACT STORIES
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="font-oswald font-bold text-card-header text-foreground">
                GITA CHOSE TO LIVE A LIFE OF DIGNITY
              </h3>
              
              <p className="font-work-sans text-body text-foreground leading-relaxed">
                We strengthen Education for indigenous people of Assam through Smart Learning, 
                Training, Skill Development, Digitalization, and Health and Sanitation awareness, 
                creating pathways to empowerment and sustainable community growth.
              </p>

              <div className="space-y-2">
                <p className="font-oswald font-bold text-lg text-foreground">Shilpa Das</p>
                <p className="font-work-sans text-primary">Guwahati, Assam</p>
              </div>
            </div>

            <Button variant="cta" size="cta">
              READ MORE
            </Button>
          </div>
        </div>

        {/* Story Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div className="w-3 h-3 rounded-full bg-muted"></div>
          <div className="w-3 h-3 rounded-full bg-muted"></div>
          <div className="w-3 h-3 rounded-full bg-muted"></div>
          <div className="w-3 h-3 rounded-full bg-muted"></div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;