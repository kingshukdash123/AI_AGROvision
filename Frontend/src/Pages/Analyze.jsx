import { useState } from "react";
import Select from "react-select";

export default function AnalyzePage() {
  const [formData, setFormData] = useState({
    crop: "",
    season: "",
    state: "",
    rainfall: "",
    area: "", // added area
  });

  const [prediction, setPrediction] = useState(null); // store backend response
  const [error, setError] = useState(null); // store errors

  // Options
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

    try {
      const response = await fetch("https://agrovision-rayp.onrender.com/predict", {
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

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Farm Input
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Crop */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Crop</label>
            <Select
              name="crop"
              options={cropOptions}
              onChange={handleSelectChange}
              placeholder="Select Crop"
              isSearchable
            />
          </div>

          {/* Season */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Season</label>
            <Select
              name="season"
              options={seasonOptions}
              onChange={handleSelectChange}
              placeholder="Select Season"
              isSearchable
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">State</label>
            <Select
              name="state"
              options={stateOptions}
              onChange={handleSelectChange}
              placeholder="Select State"
              isSearchable
            />
          </div>

          {/* Rainfall */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Annual Rainfall</label>
            <Select
              name="rainfall"
              options={rainfallOptions}
              onChange={handleSelectChange}
              placeholder="Select Rainfall"
              isSearchable
            />
          </div>

          {/* Area */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Area (ha)</label>
            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Enter area in hectares"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all"
            >
              Submit for Analysis
            </button>
          </div>
        </form>
      </div>

      {/* Prediction Output */}
      {prediction && (
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
            Prediction Result
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Crop:</strong> {prediction.Crop}</li>
            <li><strong>Season:</strong> {prediction.Season}</li>
            <li><strong>State:</strong> {prediction.State}</li>
            <li><strong>Area (ha):</strong> {prediction["Area (ha)"]}</li>
            <li><strong>Annual Rainfall:</strong> {prediction["Annual Rainfall"]}</li>
            <li><strong>Predicted Production (tons):</strong> {prediction["Predicted Production (tons)"]}</li>
            <li><strong>Predicted Yield (tons/ha):</strong> {prediction["Predicted Yield (tons/ha)"]}</li>
          </ul>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="w-full max-w-2xl bg-red-100 text-red-700 p-4 rounded-lg mt-4">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
}
