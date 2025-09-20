import { motion } from "framer-motion";
import AboutImg from "../assets/about-farm.jpg"; // Replace with your image
import MissionImg from "../assets/mission.jpg";
import VisionImg from "../assets/vision.webp";
import TeamImg from "../assets/team.jpg";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-[#a4e7bc] via-green-200 to-transparent min-h-screen">
      {/* HERO SECTION */}
      <div className="relative w-full py-20 flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col space-y-4 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 leading-snug">
            About <span className="text-green-700">AgriAI</span>
          </h1>
          <p className="text-green-800 text-base sm:text-lg leading-relaxed">
            At AgriAI, we help farmers make smarter decisions using AI-driven
            insights. Our goal is to boost productivity, reduce costs, and
            create a sustainable farming future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <img
            src={AboutImg}
            alt="About AgriAI"
            className="rounded-2xl shadow-xl w-full max-w-md hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* MISSION + VISION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-12 md:px-20 lg:px-32 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-transform"
        >
          <img
            src={MissionImg}
            alt="Mission"
            className="rounded-xl w-full h-48 object-cover mb-5"
          />
          <h2 className="text-2xl font-bold text-green-900 mb-3">Our Mission</h2>
          <p className="text-green-800 leading-relaxed">
            To empower farmers with real-time, personalized, and predictive
            recommendations — enabling them to grow better crops, minimize
            losses, and maximize profits.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-transform"
        >
          <img
            src={VisionImg}
            alt="Vision"
            className="rounded-xl w-full h-48 object-cover mb-5"
          />
          <h2 className="text-2xl font-bold text-green-900 mb-3">Our Vision</h2>
          <p className="text-green-800 leading-relaxed">
            A world where farming is data-driven, eco-friendly, and highly
            productive — ensuring food security for everyone while protecting
            the environment.
          </p>
        </motion.div>
      </div>

      {/* TEAM SECTION */}
      <div className="px-6 sm:px-12 md:px-20 lg:px-32 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 mb-12"
        >
          Meet Our Team
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {/* TEAM MEMBER CARD */}
          {[1, 2, 3].map((member) => (
            <div
              key={member}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md w-60 hover:shadow-green-400/30 hover:-translate-y-1 transition-transform"
            >
              <img
                src={TeamImg}
                alt={`Team Member ${member}`}
                className="rounded-full w-32 h-32 mx-auto object-cover border-4 border-green-300 shadow-md"
              />
              <h3 className="mt-4 text-lg font-bold text-green-900">
                Team Member {member}
              </h3>
              <p className="text-green-700 text-sm">
                Agri Expert & AI Specialist
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
