import { Button } from "@/components/ui/button";
import newsFeaturedImage from "@/assets/news-featured.jpg";
import newsThumb1 from "@/assets/news-thumb1.jpg";
import newsThumb2 from "@/assets/news-thumb2.jpg";

const NewsEvents = () => {
  const newsItems = [
    {
      id: 1,
      title: "SCALING UP GRAM PANCHAYAT ORGANIZATION DEVELOPMENT: THE WAY FORWARD",
      excerpt: "We strengthen Education for indigenous people of Assam through Smart Learning, Training...",
      date: "January 21, 2025",
      image: newsThumb1,
      isSmall: true
    },
    {
      id: 2,
      title: "SCALING UP GRAM PANCHAYAT ORGANIZATION DEVELOPMENT: THE WAY FORWARD", 
      excerpt: "We strengthen Education for indigenous people of Assam through Smart Learning, Training...",
      date: "January 21, 2025",
      image: newsThumb2,
      isSmall: true
    },
    {
      id: 3,
      title: "SCALING UP GRAM PANCHAYAT ORGANIZATION DEVELOPMENT: THE WAY FORWARD",
      excerpt: "We strengthen Education for indigenous people of Assam through Smart Learning, Training...",
      date: "January 21, 2025", 
      image: newsThumb1,
      isSmall: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-oswald font-bold text-stories-header text-primary mb-16">
          NEWS AND EVENTS
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Featured Article */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative">
              <img 
                src={newsFeaturedImage} 
                alt="Featured news story" 
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-primary-foreground px-4 py-2 font-oswald font-semibold text-sm">
                  January 21, 2025
                </span>
              </div>
            </div>

            <div className="bg-brand-light-gray p-8 space-y-6">
              <h3 className="font-oswald font-bold text-card-header text-foreground">
                SCALING UP GRAM PANCHAYAT ORGANIZATION DEVELOPMENT: THE WAY FORWARD
              </h3>
              
              <p className="font-work-sans text-body text-foreground leading-relaxed">
                We strengthen Education for indigenous people of Assam through Smart Learning, 
                Training, Skill Development, Digitalization, and Health and Sanitation awareness, 
                creating pathways to empowerment and sustainable community growth.
              </p>

              <div className="text-right">
                <Button variant="link" className="text-primary font-work-sans p-0">
                  Read More &gt;&gt;
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar Articles */}
          <div className="space-y-8">
            {newsItems.map((item) => (
              <article key={item.id} className="space-y-4">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-32 object-cover rounded"
                  />
                  <div className="absolute bottom-2 left-2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 font-oswald font-semibold text-xs">
                      {item.date}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-oswald font-bold text-lg text-foreground leading-tight">
                    {item.title}
                  </h4>
                  <p className="font-work-sans text-body-small text-foreground leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;