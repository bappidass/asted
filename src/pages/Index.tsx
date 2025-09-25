import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ImpactStories from "@/components/ImpactStories";
import Statistics from "@/components/Statistics";
import Donation from "@/components/Donation";
import NewsEvents from "@/components/NewsEvents";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ImpactStories />
        <Statistics />
        <Donation />
        <NewsEvents />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;