import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import image from '../assets/farm-bg.jpg'

export default function AnalyzePage() {
  const [formData, setFormData] = useState({
    crop: "",
    season: "",
    state: "",
    rainfall: "",
    area: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const predictionRef = useRef(null);


  const allRecommendations = [
    "Use organic fertilizers to improve soil health.",
    "Rotate crops yearly to prevent soil depletion.",
    "Ensure proper irrigation scheduling.",
    "Adopt drip irrigation for water efficiency.",
    "Use disease-resistant crop varieties.",
    "Maintain buffer zones to prevent pest spread.",
    "Use mulching to conserve soil moisture.",
    "Adopt integrated pest management (IPM).",
    "Test soil regularly for nutrient balance.",
    "Ensure timely sowing for better yield.",
    "Adopt mechanized tools for efficiency.",
    "Maintain proper crop spacing.",
    "Store produce in cool, dry places.",
    "Adopt crop insurance for risk management.",
    "Use green manures for soil fertility.",
    "Promote beneficial insects in fields.",
    "Avoid overuse of chemical pesticides.",
    "Harvest crops at the right maturity stage.",
    "Ensure proper weed management.",
    "Adopt sustainable farming practices.",
  ];

  useEffect(() => {
    if (prediction) {
      const shuffled = [...allRecommendations].sort(() => 0.5 - Math.random());
      setRecommendations(shuffled.slice(0, 3));
    }
  }, [prediction]);

  const cropOptions = [
    "Arecanut","Arhar/Tur","Castor seed","Coconut","Cotton(lint)","Dry chillies","Gram","Jute","Linseed","Maize",
    "Mesta","Niger seed","Onion","Other  Rabi pulses","Potato","Rapeseed &Mustard","Rice","Sesamum","Small millets",
    "Sugarcane","Sweet potato","Tapioca","Tobacco","Turmeric","Wheat","Bajra","Black pepper","Cardamom","Coriander",
    "Garlic","Ginger","Groundnut","Horse-gram","Jowar","Ragi","Cashewnut","Banana","Soyabean","Barley","Khesari",
    "Masoor","Moong(Green Gram)","Safflower","Sannhamp","Sunflower","Urad","Peas & beans (Pulses)","Cowpea(Lobia)",
    "Guar seed","Moth"
  ].map((c) => ({ value: c, label: c }));

  const seasonOptions = ["Whole Year", "Kharif", "Rabi", "Autumn", "Summer", "Winter"]
    .map((s) => ({ value: s, label: s }));

  const stateOptions = [
    "Assam","Karnataka","Kerala","Meghalaya","West Bengal","Puducherry","Goa","Andhra Pradesh","Tamil Nadu","Odisha",
    "Bihar","Gujarat","Madhya Pradesh","Maharashtra","Mizoram","Punjab","Uttar Pradesh","Haryana","Himachal Pradesh",
    "Tripura","Nagaland","Chhattisgarh","Uttarakhand","Jharkhand","Delhi","Manipur","Jammu and Kashmir","Telangana",
    "Arunachal Pradesh","Sikkim"
  ].map((st) => ({ value: st, label: st }));

  const rainfallOptions = ["High", "Mid", "Low"].map((r) => ({ value: r, label: r }));

  const handleSelectChange = (selectedOption, action) => {
    setFormData({ ...formData, [action.name]: selectedOption?.value || "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setPrediction(null);
  setError(null);
  setLoading(true);

  try {
    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        crop: formData.crop,
        season: formData.season,
        state: formData.state,
        area: parseFloat(formData.area),
        annual_rainfall: formData.rainfall,
      }),
    });

    if (!response.ok) throw new Error(`Server error: ${response.status}`);
    const data = await response.json();
    setPrediction(data);

    // Smooth scroll to prediction
    setTimeout(() => {
      predictionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); // small delay to ensure DOM updates
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


return (
  <div
    className="min-h-screen flex flex-col items-center p-6 py-20 relative overflow-hidden"
    style={{
      backgroundImage: `url(${image})`, // Your background image path
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay for softening the background */}
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

    {/* Farm Input Form */}
    <div className="relative z-10 w-full max-w-3xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-green-100 animate-fadeIn">
      <h1 className="text-4xl font-extrabold text-center text-green-700 mb-8">🌾 Farm Input</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Crop */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">🌱 Crop</label>
          <Select
            name="crop"
            options={cropOptions}
            onChange={handleSelectChange}
            placeholder="Select Crop"
            isSearchable
            required
          />
        </div>

        {/* Season */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">📅 Season</label>
          <Select
            name="season"
            options={seasonOptions}
            onChange={handleSelectChange}
            placeholder="Select Season"
            isSearchable
            required
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">📍 State</label>
          <Select
            name="state"
            options={stateOptions}
            onChange={handleSelectChange}
            placeholder="Select State"
            isSearchable
            required
          />
        </div>

        {/* Rainfall */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">🌧️ Annual Rainfall</label>
          <Select
            name="rainfall"
            options={rainfallOptions}
            onChange={handleSelectChange}
            placeholder="Select Rainfall"
            isSearchable
            required
          />
        </div>

        {/* Area */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">📐 Area (ha)</label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Enter area in hectares"
            className="w-full border border-gray-300 rounded-2xl p-3 focus:ring-2 focus:ring-green-400 shadow-md"
            required
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className={`mt-4 w-full md:w-auto bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition`}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Submit for Analysis"}
          </button>
        </div>
      </form>
    </div>

    {/* Loader */}
    {loading && (
      <div className="flex flex-col items-center mt-8 z-10 relative animate-fadeIn">
        <div className="w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-3 text-green-700 font-medium">Processing your data...</p>
      </div>
    )}

    {/* Prediction Output */}
    {prediction && !loading && (
      <div
      ref={predictionRef}
      className="relative z-10 w-full max-w-3xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 mt-12 border border-green-100 animate-fadeIn">
        <h2 className="text-3xl font-extrabold text-green-700 text-center mb-10 tracking-wide">🌱 Prediction Result</h2>

        {/* Your Given Data */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
            Your Given Data
          </h3>
          <div className="bg-green-50/70 p-6 rounded-2xl border border-green-100 shadow-sm">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-base">
              <li className="flex flex-col gap-1">
                <span className="font-semibold">🌾 Crop</span>
                <span className="text-green-700">{prediction.Crop}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-semibold">📅 Season</span>
                <span className="text-green-700">{prediction.Season}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-semibold">📍 State</span>
                <span className="text-green-700">{prediction.State}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-semibold">📐 Area (ha)</span>
                <span className="text-green-700">{prediction["Area (ha)"]}</span>
              </li>
              <li className="flex flex-col sm:col-span-2 gap-1">
                <span className="font-semibold">🌧️ Annual Rainfall</span>
                <span className="text-green-700">{prediction["Annual Rainfall"]}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Predictions */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
            Predictions
          </h3>
          <div className="bg-yellow-50/70 p-6 rounded-2xl border border-yellow-100 shadow-sm">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-base">
              <li className="flex flex-col gap-1">
                <span className="font-semibold">📊 Predicted Production</span>
                <span className="text-green-700 font-bold">{prediction["Predicted Production (tons)"]} tons</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-semibold">📈 Predicted Yield</span>
                <span className="text-green-700 font-bold">{prediction["Predicted Yield (tons/ha)"]} tons/ha</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            General Recommendations
          </h3>
          <div className="bg-blue-50/70 p-6 rounded-2xl border border-blue-100 shadow-sm">
            <ul className="space-y-3 text-gray-800 text-base">
              {recommendations.map((rec, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-600 text-lg">✅</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )}

    {/* Error */}
    {error && !loading && (
      <div className="w-full max-w-3xl bg-red-100 text-red-700 p-4 rounded-lg mt-6 z-10 relative">
        <strong>Error:</strong> {error}
      </div>
    )}
  </div>
);

}
