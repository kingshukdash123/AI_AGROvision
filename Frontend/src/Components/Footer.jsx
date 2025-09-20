import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

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
      <div className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-32 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
            AgroAI
          </h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Revolutionizing agriculture with AI-powered insights and real-time
            analytics to help farmers make smarter decisions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-green-400 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-green-400 cursor-pointer transition">
              Services
            </li>
            <li className="hover:text-green-400 cursor-pointer transition">
              Insights
            </li>
            <li className="hover:text-green-400 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Resources
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-green-400 cursor-pointer transition">
              Blog
            </li>
            <li className="hover:text-green-400 cursor-pointer transition">
              Case Studies
            </li>
            <li className="hover:text-green-400 cursor-pointer transition">
              FAQs
            </li>
            <li className="hover:text-green-400 cursor-pointer transition">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Get in Touch
          </h3>
          <p className="text-gray-400 text-sm">
            📍 123 Greenfield Road, AgroCity
          </p>
          <p className="text-gray-400 text-sm">📞 +91 98765 43210</p>
          <p className="text-gray-400 text-sm">✉️ support@agroai.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-green-500 hover:text-black transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} AgroAI. All rights reserved.
      </div>
    </footer>
  );
}
