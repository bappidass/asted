import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

import astedLogo from "@/assets/asted-logo.png";


const navigation = [
  { label: "ABOUT US", to: "/about-us" },
  {
    label: "OUR WORK",
    subMenu: [
      {
        label: "AGRICULTURE",
        subMenu: [{ label: "Medicinal Plant Cultivation", to: "/work-Details" }],
      },
      { label: "LIVELIHOOD", to: "/livelihood" },
      { label: "EDUCATION", to: "/education" },
      { label: "ENVIRONMENT", to: "/environment" },
    ],
  },
  { label: "TENDERS", to: "/tenders" },
  { label: "CAREERS", to: "/careers" },
  { label: "NEWS", to: "/news-details" },
];



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Sidebar submenu open state: { [index: number]: boolean }
  const [openSidebarMenus, setOpenSidebarMenus] = useState<{ [key: number]: boolean }>({});
  const [openSidebarSubMenus, setOpenSidebarSubMenus] = useState<{ [key: string]: boolean }>({});

  const handleSidebarMenuClick = (idx: number) => {
    setOpenSidebarMenus((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };
  const handleSidebarSubMenuClick = (parentIdx: number, subIdx: number) => {
    const key = `${parentIdx}-${subIdx}`;
    setOpenSidebarSubMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#000080] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/">
            <img src={astedLogo} alt="Asted Logo" className="h-10 sm:h-12" />
          </Link>
            <nav className="hidden lg:flex items-center justify-center flex-1 space-x-6 xl:space-x-8 text-white font-light mx-8">
              {navigation.map((item, index) => (
                <div key={index} className="relative group">
                  {item.subMenu ? (
                    <>
                      <span className="cursor-pointer font-work-sans text-body mb-6 opacity-90 hover:text-orange-300 transition-colors duration-300 text-sm whitespace-nowrap">
                        {item.label}
                      </span>
                      <ul className="absolute left-0  hidden group-hover:block bg-white text-black shadow-lg rounded w-56 z-50">
                        {item.subMenu.map((sub, i) =>
                          sub.subMenu ? (
                            <li key={i} className="relative group/sub">
                              <div className="flex font-work-sans text-body  opacity-90 justify-between items-center px-4 py-2 hover:bg-gray-200 cursor-pointer font-semibold text-blue-700">
                                {sub.label}
                                <svg
                                  className="w-4 h-4 ml-2"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                              <ul className="absolute top-0 left-full mt-0 hidden group-hover/sub:block bg-white text-black shadow-lg  w-64 z-50">
                                {sub.subMenu.map((subItem, j) => (
                                  <li
                                    key={j}
                                    className="p-2 hover:bg-gray-200 font-work-sans text-body  opacity-90 cursor-pointer"
                                  >
                                    <Link to={subItem.to}>{subItem.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li key={i} className="px-4 py-2 font-work-sans text-body  opacity-90 hover:bg-gray-200 cursor-pointer">
                              <Link to={sub.to}>{sub.label}</Link>
                            </li>
                          )
                        )}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.to}
                      className="hover:text-orange-300 font-work-sans text-body mb-6 opacity-90 transition-colors duration-300 text-sm whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="hidden lg:block flex-shrink-0">
              <Button variant="cta" size="cta">
                DONATE NOW
              </Button>
            </div>
            <button
              className="lg:hidden text-white p-2"
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isSidebarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-light text-gray-900">Menu</h2>
          <button onClick={closeSidebar}>
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-3">
          <div className="mb-4">
            <Button variant="cta" size="cta" className="w-full">
              DONATE NOW
            </Button>
          </div>

          {navigation.map((item, index) => (
            <div key={index}>
              {item.subMenu ? (
                <>
                  <button
                    type="button"
                    className="block font-semibold text-gray-800 mb-2 w-full text-left focus:outline-none flex items-center justify-between"
                    onClick={() => handleSidebarMenuClick(index)}
                  >
                    <span>{item.label}</span>
                    <span className="ml-2">
                      {/* Down arrow if submenu exists */}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 inline ${openSidebarMenus[index] ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {openSidebarMenus[index] && (
                    <ul className="pl-4 space-y-1">
                      {item.subMenu.map((sub, i) => (
                        <li key={i}>
                          {sub.subMenu ? (
                            <>
                              <button
                                type="button"
                                className="font-semibold text-blue-700 w-full text-left focus:outline-none flex items-center justify-between"
                                onClick={() => handleSidebarSubMenuClick(index, i)}
                              >
                                <span>{sub.label}</span>
                                <span className="ml-2">
                                  {/* Down arrow for nested submenu */}
                                  <svg
                                    className={`w-4 h-4 transition-transform duration-200 inline ${openSidebarSubMenus[`${index}-${i}`] ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                  </svg>
                                </span>
                              </button>
                              {openSidebarSubMenus[`${index}-${i}`] && (
                                <ul className="pl-4">
                                  {sub.subMenu.map((s, j) => (
                                    <li key={j}>
                                      <Link
                                        to={s.to}
                                        className="block text-gray-600 py-1 hover:text-orange-500"
                                        onClick={closeSidebar}
                                      >
                                        {s.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : (
                            <Link
                              to={sub.to}
                              className="block text-gray-600 py-1 hover:text-orange-500"
                              onClick={closeSidebar}
                            >
                              {sub.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.to}
                  className="block text-gray-800 hover:text-orange-500"
                  onClick={closeSidebar}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </aside>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default Header;