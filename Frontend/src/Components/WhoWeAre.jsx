import { motion } from "framer-motion";
import { Sprout, CloudSun, LineChart } from "lucide-react";
import AnalysisImg from "../assets/analysis.jpg";
import CropImg from "../assets/crop.webp";
import WeatherImg from "../assets/weather.jpg";

export default function WhoWeAre() {
  const features = [
    {
      title: "Smart Crop Planning",
      description:
        "We analyze your land size and desired crop, then recommend how much seed and fertilizer you need for an optimized yield.",
      icon: <Sprout className="w-8 h-8 text-green-800" />,
      image: AnalysisImg,
    },
    {
      title: "AI Crop Recommendations",
      description:
        "Based on your farm’s history and past yield data, we help you decide the best crop to plant for maximum profit.",
      icon: <LineChart className="w-8 h-8 text-green-800" />,
      image: CropImg,
    },
    {
      title: "Weather Prediction",
      description:
        "Get hyper-local weather forecasts and alerts to plan irrigation and protect your crops from unexpected conditions.",
      icon: <CloudSun className="w-8 h-8 text-green-800" />,
      image: WeatherImg,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#a4e7bc] via-green-200 to-[#0000] py-16 sm:py-20 md:py-4 px-2 sm:px-12 md:px-20 lg:px-20">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 text-green-900"
      >
        Who Are We?
      </motion.h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white/60 backdrop-blur-md border border-green-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 transition-transform"
          >
            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 flex flex-col items-start">
              <div className="mb-3">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-green-700 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
