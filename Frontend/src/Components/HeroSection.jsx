import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Tooltip,
  Legend,
} from "recharts";
import Farm1 from "../assets/farm1.jpg";
import Farm2 from "../assets/farm2.webp";
import Farm3 from "../assets/farm3.jpeg";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Smarter Farming, Bigger Harvests",
    subtitle: "AI-Powered Insights for Your Fields",
    image: Farm1,
    type: "bar",
    data: [
      { name: "Jan", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10 },
      { name: "Feb", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10 },
      { name: "Mar", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10},
      { name: "Apr", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10},
      { name: "May", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10 },
      { name: "Jun", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10 },
    ],
    health: Math.floor(Math.random() * (98 - 80 + 1)) + 80,
  },
  {
    title: "AI-Powered Recommendations",
    subtitle: "Identify and Treat Crop Issues Early",
    image: Farm2,
    type: "pie",
    data: [
      { name: "Healthy", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10 },
      { name: "Infected", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10 },
      { name: "At Risk", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10 },
    ],
    colors: ["#4ade80", "#f87171", "#facc15"],
    health: Math.floor(Math.random() * (98 - 80 + 1)) + 80,
  },
  {
    title: "Boost Yield with Data",
    subtitle: "Turn Analytics into Actionable Decisions",
    image: Farm3,
    type: "line",
    data: [
      { name: "Week 1", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10 },
      { name: "Week 2", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10 },
      { name: "Week 3", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10 },
      { name: "Week 4", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10 },
      { name: "Week 5", value: Math.floor(Math.random() * (100 - 10 + 1)) + 10 },
    ],
    health: Math.floor(Math.random() * (98 - 80 + 1)) + 80,
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [healthValue, setHealthValue] = useState(slides[0].health);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let start = 0;
    const end = slides[index].health;
    const duration = 800;
    const increment = end / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setHealthValue(end);
      } else {
        setHealthValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(counter);
  }, [index]);

  const currentSlide = slides[index];
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] overflow-hidden bg-black mt-[64px] md:mt-[70px]">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* BACKGROUND IMAGE */}
          <img
            src={currentSlide.image}
            alt="Farm Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/50 via-black/45 to-black/40" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 px-6 sm:px-10 md:px-16 lg:px-24">
            {/* TEXT SECTION */}
            <div className="flex flex-col text-center md:text-left max-w-xl">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent leading-tight md:leading-snug lg:leading-[1.2] tracking-tight px-2 sm:px-4"
              >
                {currentSlide.title}
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-4 text-base sm:text-lg md:text-xl text-gray-300"
              >
                {currentSlide.subtitle}
              </motion.p>

              {/* CALL TO ACTION BUTTON */}
              <motion.button
                onClick={() => navigate("/analyze")}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-36 sm:w-44 md:w-48 py-2 sm:py-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 rounded-full text-white text-sm sm:text-base font-semibold shadow-md tracking-wide transition-all duration-300 text-center mb-8 self-center md:self-start"
              >
                Analyze Your Farm
              </motion.button>
            </div>

            {/* CHART BOX */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 shadow-2xl"
            >
              <h3 className="text-white font-bold text-lg sm:text-xl text-center mb-3">
                {currentSlide.type === "bar"
                  ? "Yield Forecast"
                  : currentSlide.type === "pie"
                  ? "Crop Health Distribution"
                  : "Soil Moisture Trend"}
              </h3>

              {/* CHARTS */}
              <motion.div
                key={currentSlide.type}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-40 sm:h-48"
              >
                {currentSlide.type === "bar" && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={currentSlide.data}>
                      <XAxis dataKey="name" stroke="#fff" fontSize={12} />
                      <YAxis stroke="#fff" fontSize={12} />
                      <Bar
                        dataKey="value"
                        fill="#4ade80"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                )}

                {currentSlide.type === "pie" && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={currentSlide.data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius="80%"
                        label
                      >
                        {currentSlide.data.map((entry, i) => (
                          <Cell key={`cell-${i}`} fill={currentSlide.colors[i]} />
                        ))}
                      </Pie>
                      <Legend wrapperStyle={{ fontSize: "12px" }} />
                    </PieChart>
                  </ResponsiveContainer>
                )}

                {currentSlide.type === "line" && (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={currentSlide.data}>
                      <XAxis dataKey="name" stroke="#fff" fontSize={12} />
                      <YAxis stroke="#fff" fontSize={12} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#60a5fa"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </motion.div>

              {/* HEALTH INDICATOR */}
              <div className="mt-4 bg-white/20 p-4 rounded-xl flex justify-between items-center">
                <p className="text-white text-sm sm:text-base">Crop Health</p>
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-green-400 flex items-center justify-center text-green-400 font-bold">
                  {healthValue}%
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* SLIDER DOTS */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === index
                ? "bg-green-600 scale-125 shadow-lg"
                : "bg-gray-400 hover:scale-110"
            }`}
          />
        ))}
      </div>

      {/* SMOOTH WAVE BACKGROUND */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
  <svg
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
    className="w-full h-[50px] md:h-[80px]"
  >
    <defs>
      <linearGradient id="heroGradient" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(0,0,0,0.8)" />
        <stop offset="100%" stopColor="rgba(0,0,0,1)" />
      </linearGradient>
    </defs>
    <path
      d="M0,60L80,55C160,50,320,25,480,30C640,35,800,70,960,80C1120,90,1280,75,1360,70L1440,60L1440,100L0,100Z"
      fill="#a4e7bc"
    />
  </svg>
</div>

    </section>
  );
}
