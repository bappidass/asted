import AstedLogoBlack from "@/assets/asted-logo.png";
import InstagramIcon from "@/assets/insta.png";
import FacebookIcon from "@/assets/facebook.png";
import LinkedinIcon from "@/assets/linkdin.png";
import twitterIcon from "@/assets/twitter.png";

import { Link } from "react-router-dom";
const Footer = () => {
  const aboutLinks = [
    { name: "Our Story", href: "#story" },
    { name: "Vision & Mission", href: "#mission" },
    { name: "Tenders", href: "/tenders" },
    { name: "Careers", href: "/careers" },
    { name: "Team", href: "#team" },
    { name: "Annual Reports", href: "#reports" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/profile.php?viewas=100000686899395&id=61578120432065" },
    { name: "Instagram", icon: "instagram", href: "#" },
    { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/association-for-social-technical-and-educational-development/about/?viewAsMember=true" },
    { name: "Twitter", icon: "Twitter", href: "https://x.com/ASTED2025" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center ">
          <div className=" w-auto h-44 rounded flex items-center justify-center">
            <img src={AstedLogoBlack} alt="" className=" w-auto h-24" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-12">

          <div className="lg:col-span-2 space-y-2">

            <p className="font-work-sans text-body leading-relaxed max-w-lg opacity-90">
              We are committed to create a lasting impact by enhancing Smart Agriculture
              practices, improving Education access, fostering eco-friendly Environmental
              Design, and boosting Livelihood support, ensuring holistic development and
              community well-being for a better tomorrow.
            </p>

            <div>
              <h4 className="font-oswald font-bold text-xl mb-4">FOLLOW US</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center hover:bg-brand-dark/80 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon === 'facebook' && (
                      <img src={FacebookIcon} alt="" className="bg-white rounded-full "/>
                    )}
                    {social.icon === 'instagram' && (
                      <img src={InstagramIcon} alt="" className="bg-white rounded-full "/>
                    )}
                    {social.icon === 'linkedin' && (
                      <img src={LinkedinIcon} alt="" className="bg-white rounded-full "/>
                    )}
                    {social.icon === 'Twitter' && (
                      <img src={twitterIcon} alt="" className="bg-white rounded-full " />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-oswald font-bold text-xl">ABOUT US</h4>
            <nav className="space-y-3">
              {aboutLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block font-work-sans hover:opacity-80 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-oswald font-bold text-xl">GET IN TOUCH</h4>
            <div className="space-y-4 font-work-sans">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>asted2025@gmail.com</span>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 9854113164</span>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p> GL 48, Kanaklata Path,</p>
                  <p>Adinggiri, Maligaon,</p>
                  <p>Guwahati - 781011</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-work-sans text-sm opacity-90">
              © 2025 Asted. All Rights Reserved.
            </p>
            <div className="flex space-x-6 font-work-sans text-sm">
              <Link to="/privacy-policy" className="hover:opacity-80 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="hover:opacity-80 transition-opacity">
                Terms & Conditions
              </Link>
              <Link to="/refund-policy" className="hover:opacity-80 transition-opacity">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;