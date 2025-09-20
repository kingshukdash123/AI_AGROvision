import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";

export default function RecommendationPage() {
  // Sample 50 recommendations (you can dynamically fetch from API later)
  const allRecommendations = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    crop: ["Wheat", "Rice", "Corn", "Soybean", "Sugarcane"][i % 5],
    weather: ["Sunny", "Cloudy", "Rainy", "Dry", "Humid"][i % 5],
    soil: ["Loamy", "Clay", "Sandy", "Black", "Red"][i % 5],
    yieldBoost: Math.floor(Math.random() * 40) + 10, // %
    text: `Recommendation ${i + 1}: Follow optimized irrigation and fertilizer schedule for better results.`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("yield");
  const [filterWeather, setFilterWeather] = useState("All");

  const perPage = 10;
  const startIdx = (currentPage - 1) * perPage;
  const endIdx = startIdx + perPage;

  // SORT + FILTER
  const sortedRecommendations = useMemo(() => {
    let sorted = [...allRecommendations];
    if (filterWeather !== "All") {
      sorted = sorted.filter((rec) => rec.weather === filterWeather);
    }
    if (sortBy === "yield") {
      sorted.sort((a, b) => b.yieldBoost - a.yieldBoost);
    } else if (sortBy === "crop") {
      sorted.sort((a, b) => a.crop.localeCompare(b.crop));
    }
    return sorted;
  }, [sortBy, filterWeather]);

  const paginated = sortedRecommendations.slice(startIdx, endIdx);
  const totalPages = Math.ceil(sortedRecommendations.length / perPage);

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-100 via-green-200 to-white px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900">
          🌱 AI Recommendations
        </h1>
        <p className="text-green-700 mt-3 max-w-2xl mx-auto text-lg">
          Based on your soil type, weather conditions, and past yield data —
          here are personalized steps to boost productivity.
        </p>
      </motion.div>

      {/* FILTER + SORT */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Filter className="text-green-700" />
          <select
            value={filterWeather}
            onChange={(e) => {
              setCurrentPage(1);
              setFilterWeather(e.target.value);
            }}
            className="px-4 py-2 rounded-lg border border-green-400 bg-white/70 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-green-500"
          >
            <option value="All">All Weather</option>
            <option value="Sunny">Sunny</option>
            <option value="Cloudy">Cloudy</option>
            <option value="Rainy">Rainy</option>
            <option value="Dry">Dry</option>
            <option value="Humid">Humid</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border border-green-400 bg-white/70 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-green-500"
          >
            <option value="yield">Sort by Yield</option>
            <option value="crop">Sort by Crop</option>
          </select>
        </div>
      </div>

      {/* RECOMMENDATION GRID */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {paginated.map((rec) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-green-300 p-6 hover:shadow-green-500/30 hover:-translate-y-1 transition-all"
          >
            <h3 className="text-lg font-bold text-green-900 mb-2">
              🌾 {rec.crop} | {rec.weather} | {rec.soil}
            </h3>
            <p className="text-green-700 mb-4">{rec.text}</p>
            <div className="flex items-center justify-between">
              <span className="text-green-800 font-semibold">
                ⬆ {rec.yieldBoost}% Yield Boost
              </span>
              <button className="px-4 py-2 text-sm bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg hover:scale-105 transition">
                View Details →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className={`p-2 rounded-full ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-400 hover:bg-green-500"
          } text-white`}
        >
          <ChevronLeft />
        </button>

        <span className="font-bold text-green-900">
          {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className={`p-2 rounded-full ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-400 hover:bg-green-500"
          } text-white`}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
