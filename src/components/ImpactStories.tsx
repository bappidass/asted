import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import educationImage from "@/assets/education-children.jpg";

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      title: "GITA CHOSE TO LIVE A LIFE OF DIGNITY",
      description:
        "We strengthen Education for indigenous people of Assam through Smart Learning, Training, Skill Development, Digitalization, and Health and Sanitation awareness, creating pathways to empowerment and sustainable community growth.",
      author: "Shilpa Das",
      location: "Guwahati, Assam",
      image: educationImage,
    },
    {
      id: 2,
      title: "EMPOWERING WOMEN THROUGH EDUCATION",
      description:
        "Our initiatives provide digital learning access and skill-based programs for rural women, enhancing their independence and participation in community growth.",
      author: "Anita Boro",
      location: "Tezpur, Assam",
      image: educationImage,
    },
    {
      id: 3,
      title: "BUILDING FUTURES WITH KNOWLEDGE",
      description:
        "Through education and skill training, we help children and youth shape a brighter, self-reliant future, promoting long-term sustainability.",
      author: "Rupali Das",
      location: "Jorhat, Assam",
      image: educationImage,
    },
  ];

  return (
    <section className="py-6 bg-background relative">
      <div className="container mx-auto px-6 relative">
        <button className="donors-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10  ">
          <ChevronLeft className="w-12 h-12 text-primary hover:text-primary bg-white rounded-full shadow-lg transition-colors" />
        </button>
        <button className="donors-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10  ">
          <ChevronRight className="w-12 h-12 text-primary hover:text-primary bg-white rounded-full shadow-lg transition-colors" />
        </button>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          navigation={{
            nextEl: '.donors-button-next',
            prevEl: '.donors-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.donors-pagination',
          }}
          className="donors-swiper"
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id}>
              <div className="grid lg:grid-cols-2 gap-4 md:gap-16 items-center">
                <div>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                <div className="space-y-2 md:space-y-8">
                  <div>
                    <h2 className="font-oswald font-bold text-stories-header text-primary mb-2">
                      IMPACT STORIES
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-oswald font-bold text-[18px] lg:text-card-header text-foreground">
                      {story.title}
                    </h3>

                    <p className="font-work-sans text-body text-foreground leading-relaxed">
                      {story.description}
                    </p>

                    <div className='flex  items-end justify-between   '>
                      <div className="space-y-2">
                        <p className="font-oswald font-bold text-lg text-foreground">
                          {story.author}
                        </p>
                        <p className="font-work-sans text-primary">
                          {story.location}
                        </p>
                      </div>
                      <Button variant="cta" size="cta">
                        READ MORE
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="donors-pagination flex justify-center mt-12 space-x-3"></div>
      </div>
    </section>
  );
};

export default ImpactStories;
