import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Weather from "./Pages/WeatherDetection";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import ContactSection from "./Pages/ContactSection";
import ScrollToTop from "./Pages/ScrollToTop";
import RecommendationPage from "./Pages/RecommendationPage";
import AnalyzePage from "./Pages/Analyze";
import GetStarted from "./Pages/GetStarted";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
 
      {/* Navbar always on top */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/login" element={<Login />} />
        <Route path='/reccomend' element={<RecommendationPage />} />
        <Route path="/analyze" element={<AnalyzePage/>} />
        <Route path="/get" element={<GetStarted/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
