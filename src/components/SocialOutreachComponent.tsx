import React, { useState } from 'react';
import { X, Heart, Share2 } from 'lucide-react';

const SocialOutreachComponent = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const socialOutreachs = [
    {
      id: 1,
      logo: "https://via.placeholder.com/40",
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800",
      date: "2025-10-01",
      icon: "🌱",
      msg: "CML's community farming initiative has empowered over 200 families to grow their own food sustainably.",
      tags: ["Community", "Farming", "Empowerment"],
      likes: 124,
      shares: 56,
      link: "https://example.com/post/1",
    },
    {
      id: 2,
      logo: "https://via.placeholder.com/40",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800",
      date: "2025-09-25",
      icon: "🎓",
      msg: "Education drives in remote villages have provided learning kits to over 1,000 children this year.",
      tags: ["Education", "Awareness", "Growth"],
      likes: 233,
      shares: 89,
      link: "https://example.com/post/2",
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/40",
      image: "https://images.unsplash.com/photo-1523978591478-c753949ff840?w=800",
      date: "2025-09-10",
      icon: "🌊",
      msg: "Our clean water campaign ensures safe drinking water for over 5,000 people in Northeast India.",
      tags: ["Water", "Health", "Hygiene"],
      likes: 176,
      shares: 48,
      link: "https://example.com/post/3",
    },
    {
      id: 4,
      logo: "https://via.placeholder.com/40",
      image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=800",
      date: "2025-08-30",
      icon: "🌳",
      msg: "We’ve planted 10,000 trees as part of our environmental restoration initiative!",
      tags: ["Environment", "Green", "Sustainability"],
      likes: 302,
      shares: 120,
      link: "https://example.com/post/4",
    },
  ];

  const openPopup = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <>
      <div className="py-6 px-4 bg-[hsl(var(--brand-white))]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-oswald font-bold text-stories-header text-primary mb-6">
              SOCIAL MEDIA COVARGE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {socialOutreachs.map((post) => (
              <div
                key={post.id}
                onClick={() => openPopup(post)}
                className="bg-white rounded-xl shadow-sm border  overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.icon}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                </div>
                <div className="p-4">
                  <div className=" text-primary  py-1.5 sm:py-2 font-oswald font-semibold text-xs sm:text-sm">
                    {formatDate(post.date)}
                  </div>

                  <p className="text-body font-oswald mb-3 leading-relaxed line-clamp-4">
                    {truncateText(post.msg)}
                  </p>
                  <div className="flex justify-between items-center text-xs text-[hsl(var(--brand-dark))]/60">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="w-3 h-3" />
                      {post.shares}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedPost && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[hsl(var(--brand-white))] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
         

            <div  className="overflow-y-auto max-h-[70vh] relative">
               <button
                onClick={closePopup}
                className="p-2 bg-primary text-white rounded-full transition-colors absolute top-4 left-4"
              >
                <X className="w-5 h-5" />
              </button>
              <img src={selectedPost.image} alt="Post" className="w-full h-60 object-cover" />
              <div className="p-6">
                  <div className=" text-primary  py-1.5 sm:py-2 font-oswald font-semibold text-xs sm:text-sm">
                  {formatDate(selectedPost.date)}
                </div>
                <p className="text-base font-oswald  mb-6 leading-relaxed">
                  {selectedPost.msg}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[hsl(var(--brand-light-gray))]">
                  <div className="flex items-center gap-6 text-sm text-[hsl(var(--brand-dark))]/70">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      {selectedPost.likes} likes
                    </div>
                  </div>

                  <button
                    onClick={async () => {
                      if (navigator.share) {
                        await navigator.share({ url: selectedPost.link, title: 'CML Social Outreach', text: selectedPost.msg });
                      } else {
                        await navigator.clipboard.writeText(selectedPost.link);
                        alert('Link copied!');
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-[hsl(var(--brand-blue))] text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialOutreachComponent;
