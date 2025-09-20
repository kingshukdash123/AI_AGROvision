import { HowItWorks, WhyChooseUs } from "../Components/ExtraSection";
import HeroSection from "../Components/HeroSection";
import WhoWeAre from "../Components/WhoWeAre";

export default function Home() {
  return (
    <div className="relative ">
      <HeroSection/>
      <div className="bg-gradient-to-b from-[#a4e7bc] via-green-200 to-[#0000]">
        <WhoWeAre/>
        <HowItWorks/>
        <WhyChooseUs/>
      </div>
    
    </div>
  );
}
