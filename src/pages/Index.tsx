
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ImpactStories from "@/components/ImpactStories";
import Statistics from "@/components/Statistics";
import Donation from "@/components/Donation";
import NewsEvents from "@/components/NewsEvents";
import ContactForm from "@/components/ContactForm";
import DonarStories from "@/components/ourDonars";
import SocialMediaOutreach from "@/components/SocialOutreachComponent";
const Index = () => {
  return (
    <div className="min-h-screen">
 
      <main>
        <Hero />
        <About />
        <Services />
        <ImpactStories />
 
        <Donation />
          <DonarStories />
                 <Statistics />
        <NewsEvents />
        <SocialMediaOutreach />
        <ContactForm />
      </main>
    </div>
  );
};

export default Index;