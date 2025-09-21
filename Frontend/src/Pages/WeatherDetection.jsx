import { useState } from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { NavLink } from "react-router-dom";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState("Wheat");

  const crops = ["Wheat", "Rice", "Corn", "Soybean", "Sugarcane"];

  const fetchWeather = async () => {
    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();
      if (!geoData.results?.length) {
        alert("City not found!");
        return;
      }
      const { latitude, longitude } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,precipitation,relative_humidity_2m,windspeed_10m&timezone=auto`
      );
      const weatherData = await weatherRes.json();

      setWeather(weatherData.current_weather);
      const hourly = weatherData.hourly.time.map((time, i) => ({
        time: new Date(time).getHours() + ":00",
        temp: weatherData.hourly.temperature_2m[i],
        rain: weatherData.hourly.precipitation[i],
        humidity: weatherData.hourly.relative_humidity_2m[i],
        wind: weatherData.hourly.windspeed_10m[i],
      }));
      setForecast(hourly.slice(0, 8));
    } catch (error) {
      console.error("Weather API error:", error);
      alert("Could not fetch weather data.");
    }
  };

  const getCropAdvice = () => {
    if (!weather) return null;
    let advice = "";
    switch (selectedCrop) {
      case "Wheat":
        advice =
          weather.temperature > 30
            ? "☀ Avoid sowing now; wait for cooler weather."
            : "🌱 Perfect time to sow wheat!";
        break;
      case "Rice":
        advice =
          weather.rain > 2
            ? "🌧 Good rainfall, great for paddy transplanting!"
            : "💧 Consider irrigation to maintain standing water.";
        break;
      case "Corn":
        advice =
          weather.temperature > 34
            ? "🔥 High heat — irrigation required to prevent stress."
            : "✅ Good weather for corn growth!";
        break;
      default:
        advice = "📊 Use weather to plan irrigation and fertilization schedule.";
    }
    return advice;
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-100 via-green-200 to-white px-6 sm:px-12 md:px-20 lg:px-32 py-24">
      {/* HERO INTRO */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 flex items-center justify-center gap-2">
          🌾 Smart Weather Dashboard
        </h1>
        <p className="text-green-700 mt-4 max-w-2xl mx-auto text-lg">
          Get real-time weather updates, crop-specific advice, and take action
          to maximize your yield.
        </p>
      </motion.div>

      {/* SEARCH */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter your city..."
          className="px-4 py-3 rounded-xl border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-80 shadow-sm"
        />
        <button
          onClick={fetchWeather}
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 hover:scale-105 text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
        >
          🔍 Check Weather
        </button>
      </div>

      {/* EMPTY STATE */}
      {!weather && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center mt-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-7xl mb-4"
          >
            🌱
          </motion.div>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">
            Plan Your Crops Smarter
          </h2>
          <p className="text-green-700 max-w-md mb-6">
            Get the latest weather forecast and AI-powered advice for your
            fields. Enter your city above to get started!
          </p>

          {/* Sample City Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {["Delhi", "Mumbai", "Bengaluru", "Chennai", "Kolkata"].map(
              (sample) => (
                <button
                  key={sample}
                  onClick={() => setCity(sample)}
                  className="px-4 py-2 bg-white rounded-lg border border-green-300 shadow-sm hover:bg-green-100 transition"
                >
                  {sample}
                </button>
              )
            )}
          </div>
        </motion.div>
      )}

      {weather && (
        <>
          {/* WEATHER GRID */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md text-center border border-green-200">
              🌡 <h3 className="text-xl font-bold">{weather.temperature}°C</h3>
              <p className="text-green-700">Temperature</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md text-center border border-green-200">
              🌧 <h3 className="text-xl font-bold">{forecast[0]?.rain ?? 0}mm</h3>
              <p className="text-green-700">Rain</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md text-center border border-green-200">
              💧 <h3 className="text-xl font-bold">{forecast[0]?.humidity}%</h3>
              <p className="text-green-700">Humidity</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md text-center border border-green-200">
              💨 <h3 className="text-xl font-bold">{forecast[0]?.wind}km/h</h3>
              <p className="text-green-700">Wind</p>
            </div>
          </motion.div>

          {/* COMBINED CHART */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-green-300 mb-10"
          >
            <h3 className="text-xl font-bold text-green-900 text-center mb-4">
              ⏳ Next 8 Hours Forecast
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={forecast}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar
                  yAxisId="right"
                  dataKey="rain"
                  fill="#3b82f6"
                  radius={[5, 5, 0, 0]}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="temp"
                  stroke="#22c55e"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </motion.div>

          {/* CROP SELECTION */}
          <div className="text-center mb-8">
            <label className="block mb-2 font-semibold text-green-900">
              Select Your Crop:
            </label>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="px-4 py-2 border border-green-400 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {crops.map((crop) => (
                <option key={crop}>{crop}</option>
              ))}
            </select>
          </div>

          {/* CROP ADVICE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 p-6 rounded-xl shadow-md border border-green-200 max-w-xl mx-auto text-center"
          >
            <h4 className="text-xl font-bold text-green-900 mb-2">
              🌱 Advice for {selectedCrop}
            </h4>
            <p className="text-green-700">{getCropAdvice()}</p>
          </motion.div>

          {/* EXTRA TIPS GRID */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md border border-green-200"
            >
              🌱 <h4 className="font-bold text-green-900 mb-2">Soil Health</h4>
              <p className="text-green-700">
                Loosen topsoil after rainfall to improve aeration and root
                growth.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md border border-green-200"
            >
              🐛 <h4 className="font-bold text-green-900 mb-2">Pest Alert</h4>
              <p className="text-green-700">
                High humidity may increase pest attacks — use preventive
                measures.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md border border-green-200"
            >
              📈 <h4 className="font-bold text-green-900 mb-2">Market Tip</h4>
              <p className="text-green-700">
                Good weather = good yield! Monitor market trends for better
                prices.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              🚀 Ready to Boost Your Yield?
            </h3>
            <p className="text-green-700 max-w-xl mx-auto mb-6">
              Get full AI-based recommendations for seed planning, fertilizer
              use, and irrigation scheduling based on live weather data.
            </p>
            <NavLink
              to="/reccomend"
              className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 transition"
            >
              Get Recommendations →
            </NavLink>
          </motion.div>
        </>
      )}
    </section>
  );
}
