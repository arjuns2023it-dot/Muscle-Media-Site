import React from "react";
import { Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/MM.png";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* CTA STRIP */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase mb-4 sm:mb-6 leading-tight">
            Stop Guessing.{" "}
            <span className="text-primary italic">Start Scaling.</span>
          </h3>
        </div>
      </div>

      {/* FOOTER MAIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 items-center">
          
          {/* BRAND */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="GymGrowth Logo"
              className="h-32 sm:h-36 md:h-40 object-contain mx-auto md:mx-0"
            />
            <p className="text-gray-500 text-sm mt-4 max-w-xs mx-auto md:mx-0">
              Performance marketing systems built specifically for serious gym
              owners.
            </p>
          </div>

          {/* SOCIALS */}
          <div className="flex justify-center gap-6 sm:gap-10">
            <a
              href="https://www.instagram.com/musclemedia.agent/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <Instagram className="text-gray-400 hover:text-primary transition w-6 h-6 sm:w-7 sm:h-7" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61586028537520"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:scale-110 transition-transform"
            >
              <Facebook className="text-gray-400 hover:text-primary transition w-6 h-6 sm:w-7 sm:h-7" />
            </a>

            <a
              href="https://wa.me/916374473499"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:scale-110 transition-transform"
            >
              <FaWhatsapp className="text-gray-400 hover:text-green-500 transition w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Muscle Media
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Results vary. No guarantees.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
