import FAQSection from "@/component/Home/FaqSection";
import FeaturesSection from "@/component/Home/Feature";
import Footer from "@/component/Home/Footer";
import Hero from "@/component/Home/Hero";
import Pricing from "@/component/Home/Pricing";
import Report from "@/component/Home/Report";
import StatsSection from "@/component/Home/Stats";

export default function Home() {
  return (
   <div>
    <Hero/>
    <FeaturesSection/>
    <Pricing/>
    <StatsSection/>
    <Report/>
    <FAQSection/>
    <Footer/>
   </div>
  );
}
