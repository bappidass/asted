import { Button } from "@/components/ui/button";
import newsFeaturedImage from "@/assets/news.png";
import newsThumb1 from "@/assets/news.png";
import newsThumb2 from "@/assets/news.png";

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
    <section className="py-6 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-oswald font-bold text-stories-header text-primary mb-16">
          NEWS AND EVENTS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
          <div className="relative ">
            <div className="">
              <img
                src={newsFeaturedImage}
                alt="Featured news story"
                className="w-full h-64 sm:h-42 md:h-80 lg:h-60 object-cover rounded-lg"
              />

            </div>
            <div className="absolute bottom-1/2 left-0 ">
              <span className="bg-primary text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 font-oswald font-semibold text-xs sm:text-sm">
                January 21, 2025
              </span>
            </div>
            <div className="bg-brand-light-gray p-4 sm:p-6 md:p-8 ">
              <h3 className="font-oswald font-bold  sm:text-xl lg:text-2xl text-foreground">
                SCALING UP GRAM PANCHAYAT ORGANIZATION DEVELOPMENT: THE WAY FORWARD
              </h3>

              <p className="font-work-sans text-sm sm:text-base text-foreground leading-relaxed">
                We strengthen Education for indigenous people of Assam through Smart Learning,
                Training, Skill Development, Digitalization, and Health and Sanitation awareness,
                creating pathways to empowerment and sustainable community growth.
              </p>

              <div className="text-right">
                <Button variant="link" className="text-primary font-work-sans p-0 text-sm sm:text-base">
                  Read More &gt;&gt;
                </Button>
              </div>
            </div>
          </div>

          <div className=" space-y-4 sm:space-y-6 md:space-y-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="relative flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4 md:p-5 gap-4 sm:gap-6 bg-[#F2F2F2] rounded-lg"
              >
                <div className="w-full sm:w-1/3 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-28 sm:h-24 md:h-28 object-cover rounded-md"
                  />

                  <div className="absolute md:hidden  bottom-0  left-0">
                  <span className="bg-primary text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 font-oswald font-semibold text-[10px] sm:text-xs">
                    {item.date}
                  </span>
                </div>
                </div>

                <div className="flex flex-col gap-1 sm:gap-2 w-full sm:w-2/3">
                  <h4 className="font-oswald font-bold text-base sm:text-lg text-foreground leading-tight">
                    {item.title}
                  </h4>
                  <p className="font-work-sans text-sm sm:text-body-small text-foreground line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>

                <div className="absolute hidden md:block md:bottom-0  left-0">
                  <span className="bg-primary text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 font-oswald font-semibold text-[10px] sm:text-xs">
                    {item.date}
                  </span>
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