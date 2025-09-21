import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300">
      {/* Smooth Curve Divider (Top) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="w-full h-[80px] md:h-[120px]"
        >
          <defs>
            <linearGradient id="footerGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,0,0,1)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.9)" />
            </linearGradient>
          </defs>
          <path
            d="M0,96L80,80C160,64,320,32,480,42.7C640,53,800,107,960,122.7C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            fill="url(#footerGradient)"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
            AgroAI
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs mx-auto md:mx-0">
            Revolutionizing agriculture with AI-powered insights and real-time
            analytics to help farmers make smarter decisions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Weather", link: "/weather" },
              { name: "Contact", link: "/contact" },
            ].map((item, i) => (
              <NavLink key={i} to={item.link}>
                <li className="hover:text-green-400 hover:translate-x-1 transition-all duration-300 cursor-pointer">
                  {item.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-400 text-sm">Khushidram Nagar, Haldia, West Bengal</p>
          <p className="text-gray-400 text-sm">📞 +91 6987674321</p>
          <p className="text-gray-400 text-sm">✉️ supportagroai@gmail.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 justify-center md:justify-start">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-green-400 hover:text-black transition transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 text-center py-4 text-xs sm:text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-green-400 font-medium">AgroAI</span>. All rights reserved.
      </div>
    </footer>
  );
}
