import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Hero-section";
import StorySection from "../Components/Story-section";
import FeaturedSection from "../Components/Featured-section";
import FeaturesSection from "../Components/Features-section";
import ReviewSection from "../Components/Review-section";
import CTASection from "../Components/CTA-section";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <StorySection />
      <FeaturedSection />
      <FeaturesSection />
      <ReviewSection />
      <CTASection />
      <Footer />
    </div>
  );
}


