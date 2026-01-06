import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/MM.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setOpen(false);
  };

  const links = ["home", "services", "contact"];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "top-2 sm:top-4" : "top-0"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-300 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl rounded-full shadow-lg py-2 sm:py-3"
              : "py-4 sm:py-6"
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Gym Growth Logo"
                className={`transition-all duration-300 object-contain w-auto flex-shrink-0 ${
                  scrolled
                    ? "h-14 sm:h-16 md:h-20 -my-4 sm:-my-6"
                    : "h-24 sm:h-32 md:h-40 -my-8 sm:-my-12 md:-my-14"
                }`}
              />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-6 lg:gap-10 items-center">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l}`}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  {l}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-primary text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs font-bold hover:opacity-90 transition"
              >
                CALL NOW
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`md:hidden transition-colors p-2 relative z-50 ${
                scrolled && !open ? "text-black" : "text-white"
              }`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Only visible on mobile when open */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 animate-fadeIn">
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                onClick={handleLinkClick}
                className="text-white text-2xl font-bold uppercase tracking-widest transition-colors hover:text-primary"
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="bg-primary text-white px-10 py-4 rounded-full text-sm font-bold hover:opacity-90 transition mt-4"
            >
              CALL NOW
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
