import React, { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../utils/constants";
import { useScrollSpy, scrollToSection } from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"
      }`}

      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Code className="w-6 h-6 text-primary" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent"
            >
              {PERSONAL_INFO.name}
            </button>
          </div>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center gap-3 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-1.5 rounded-full text-md font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-black/60 text-white shadow-md"
                      : "text-white/70 hover:text-white hover:bg-black/30"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => handleNavClick("contact")}
              className="cursor-pointer px-6 py-2.5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden absolute left-0 right-0 mt-6 px-5 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
          <div className="flex flex-col gap-2 text-center">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-lg text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/80 hover:bg-black/30"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            {/* Mobile CTA */}
            <button
              onClick={() => handleNavClick("contact")}
              className="mt-4 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;