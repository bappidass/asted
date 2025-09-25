const Footer = () => {
  const aboutLinks = [
    { name: "Our Story", href: "#story" },
    { name: "Vision & Mission", href: "#mission" },
    { name: "Tenders", href: "#tenders" },
    { name: "Careers", href: "#careers" },
    { name: "Team", href: "#team" },
    { name: "Annual Reports", href: "#reports" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "facebook", href: "#" },
    { name: "Instagram", icon: "instagram", href: "#" },
    { name: "LinkedIn", icon: "linkedin", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-accent w-12 h-12 rounded flex items-center justify-center">
                <span className="text-primary font-oswald font-bold text-2xl">A</span>
              </div>
              <div>
                <h3 className="font-oswald font-bold text-3xl">asted</h3>
                <p className="text-sm opacity-90 tracking-wider">WE ARE HERE</p>
              </div>
            </div>

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
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348z"/>
                      </svg>
                    )}
                    {social.icon === 'linkedin' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* About Us Links */}
          <div className="space-y-6">
            <h4 className="font-oswald font-bold text-xl">ABOUT US</h4>
            <nav className="space-y-3">
              {aboutLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block font-work-sans hover:opacity-80 transition-opacity"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="font-oswald font-bold text-xl">GET IN TOUCH</h4>
            <div className="space-y-4 font-work-sans">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@asted.org</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91-1800-123-4567</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>123 Development Lane</p>
                  <p>Social Sector Hub</p>
                  <p>New Delhi - 110001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-work-sans text-sm opacity-90">
              © 2025 Asted. All Rights Reserved.
            </p>
            <div className="flex space-x-6 font-work-sans text-sm">
              <a href="#privacy" className="hover:opacity-80 transition-opacity">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:opacity-80 transition-opacity">
                Terms & Conditions
              </a>
              <a href="#refund" className="hover:opacity-80 transition-opacity">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;