import { motion } from "framer-motion";
import hero from '../assets/about-hero.jpg'
import { NavLink } from "react-router-dom";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[90vh]  flex items-center justify-center mt-30">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={hero} // <- replace with your own farm image
          alt="Farm Field"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Empowering Farmers with <span className="text-green-300">AI Insights</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-green-100">
          Agro AI is your trusted companion for smarter farming decisions —
          from weather forecasts to crop health analysis, all powered by
          artificial intelligence.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg"
        > <NavLink to='/analyze'>
          Analyze your Farm</NavLink>
        </motion.button>
      </motion.div>
    </section>
  );
}
