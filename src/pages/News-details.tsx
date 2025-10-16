import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useNavigate, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import careersHero from "@/assets/careers-hero.jpg";

const NewsDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showDonation, setShowDonation] = useState(false);
  const [newsDetail, setNewsDetail] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    const dummyNewsData = [
      {
        id: "1",
        type: "Community Program",
        title: "Empowering Rural Women",
        subtitle: "A step towards independence",
        bannerImages: [
          careersHero,
          careersHero,
          careersHero,
        ],
        desc: [
          {
            title: "Skill Development Workshops",
            desc: "We conducted a series of skill development workshops to help women in rural areas gain financial independence through vocational training.We conducted a series of skill development workshops to help women in rural areas gain financial independence through vocational training.",
            image: careersHero,
          },
          {
            title: "Micro-Entrepreneurship Support",
            desc: "The program provided micro-loans and business mentorship to women-led self-help groups to boost local economic activities.",
            image: careersHero,
          },
        ],
      },
      {
        id: "2",
        type: "Education",
        title: "Smart Learning for All",
        subtitle: "Digital classrooms in remote villages",
        image: careersHero,
      },
      {
        id: "3",
        type: "Healthcare",
        title: "Mobile Health Camps",
        subtitle: "Reaching the unreached",
        image: careersHero,
      },
    ];

    const foundNews =
      dummyNewsData.find((n) => n.id === id) || dummyNewsData[0];
    setNewsDetail(foundNews);
    setRelatedNews(dummyNewsData.filter((n) => n.id !== foundNews.id));
  }, [id]);

  if (!newsDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Loading news...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[400px] bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${careersHero})` }}
        >
          <div className="absolute top-0 left-0 h-full w-1/2 bg-[#000080] opacity-[69%]"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="font-oswald font-bold text-hero text-brand-white mb-6">
            NEWS AND EVENTS
          </h1>
          <p className="font-work-sans text-xl text-brand-white max-w-2xl">
            JOIN THE TEAM AND BUILD THE FUTURE TOGETHER
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="font-oswald font-bold text-section-header text-primary mb-6 uppercase">
          {newsDetail.subtitle}
        </h2>
        {newsDetail.desc && newsDetail.desc.length > 0 ? (
          <div className="space-y-16 mt-10">
            {newsDetail.desc.map((section, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                  index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`space-y-6 ${
                    index % 2 !== 0 ? "lg:col-start-2" : ""
                  }`}
                >
                  <h2 className="font-oswald font-bold text-section-header mb-4">{section.title}</h2>
                  <p className="font-work-sans text-body text-foreground leading-relaxed">{section.desc}</p>
                </div>

                <div
                  className={`${
                    index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No detailed content available.
            </p>
          </div>
        )}

       
        {relatedNews.length > 0 && (
          <div className="mt-20">
            <h2 className="font-oswald font-bold text-section-header text-primary mb-6 uppercase">
              OTHER NEWS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedNews.map((news) => (
                <div key={news.id} className="group cursor-pointer">
                  <div
                    onClick={() => navigate(`/news-details`)}
                    className="relative rounded-xl overflow-hidden mb-4 shadow-md"
                  >
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <span className="inline-block px-2 py-1 bg-accent text-xs font-bold rounded-full">
                        {news.type.toUpperCase()}
                      </span>
                      <h3 className="font-bold text-sm mt-2">{news.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetailPage;
