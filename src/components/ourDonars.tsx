import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import educationImage from "@/assets/donarstoreimage.png";

const testimonials = [
    {
        id: 1,
        quote: "\"ASTED HAS DONE INCREDIBLE WORK FOR THE CHILDREN IN ASSAM\"",
        description: "We strengthen Education for indigenous people of Assam through Smart Learning, Training, Skill Development, Digitalization, and Health and Sanitation awareness, creating pathways to empowerment and sustainable community growth.",
        name: "Shilpa Das",
        location: "Guwahati, Assam",
        image: educationImage,
    },
    {
        id: 2,
        quote: "\"ASTED HAS DONE INCREDIBLE WORK FOR THE CHILDREN IN ASSAM\"",
        description: "We strengthen Education for indigenous people of Assam through Smart Learning, Training, Skill Development, Digitalization, and Health and Sanitation awareness, creating pathways to empowerment and sustainable community growth.",
        name: "Shilpa Das",
        location: "Guwahati, Assam",
        image: educationImage,
    },
    {
        id: 3,
        quote: "\"ASTED HAS DONE INCREDIBLE WORK FOR THE CHILDREN IN ASSAM\"",
        description: "We strengthen Education for indigenous people of Assam through Smart Learning, Training, Skill Development, Digitalization, and Health and Sanitation awareness, creating pathways to empowerment and sustainable community growth.",
        name: "Shilpa Das",
        location: "Guwahati, Assam",
        image: educationImage,
    },
];

const DonarStories = () => {
    return (
        <section className="py-6 bg-background relative">
            <div className="container mx-auto px-6">
                <h2 className="font-oswald font-bold text-stories-header text-primary mb-6">
                    HEAR FROM OUR DONORS
                </h2>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <button className="donors-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 lg:-ml-12">
                        <ChevronLeft className="w-12 h-12 text-primary hover:text-primary bg-white rounded-full shadow-lg transition-colors" />
                    </button>
                    <button className="donors-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 lg:-mr-12">
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
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="flex flex-col-reverse md:flex-row  gap-2 lg:gap-16 items-center">
                                    {/* Content */}
                                    <div className="space-y-6">
                                        <h3 className="font-oswald font-bold text-[18px] lg:text-card-header text-foreground">
                                            {testimonial.quote}
                                        </h3>

                                        <p className="font-work-sans text-body text-foreground leading-relaxed">
                                            {testimonial.description}
                                        </p>

                                        <div className="space-y-1">
                                            <p className="font-oswald font-bold text-lg text-foreground">{testimonial.name}</p>
                                            <p className="font-work-sans text-body text-primary">{testimonial.location}</p>
                                        </div>
                                    </div>

                                    <div className="relative w-full max-w-[1000px] mx-auto h-[300px] sm:h-[400px] md:h-[564px] overflow-hidden rounded-lg shadow-lg">

                                        <img
                                            src={testimonial.image}
                                            alt={`${testimonial.name} testimonial`}
                                            className="w-full h-full object-cover"
                                        />


                                        <div className="absolute top-0 right-0 h-full w-1/3 bg-[#000080B2] opacity-75"></div>


                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Pagination Dots */}
                    <div className="donors-pagination flex justify-center mt-12 space-x-3"></div>
                </div>
            </div>

            <style>{`
        .donors-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: hsl(var(--muted));
          opacity: 1;
        }
        .donors-pagination .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
        }
      `}</style>
        </section>
    );
};

export default DonarStories;