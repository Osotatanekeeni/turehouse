import BestsellerSection from "./components/BestsellerSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import HighlightSection from "./components/HighlightSection";
import PartnersSection from "./components/PartnersSection";
import ReviewSection from "./components/ReviewSection";
import ShopSection from "./components/ShopSection";
import StorySection from "./components/StorySection";
import SubscribeSection from "./components/SubscribeSection";

function App() {
  return (
    <div className="m-0 min-h-screen w-screen overflow-x-hidden bg-offWhite">
      <HeroSection />
      <BestsellerSection />
      <ShopSection />
      <HighlightSection />
      <StorySection />
      <ReviewSection />
      <PartnersSection />
      <SubscribeSection />
      <FooterSection />
    </div>
  );
}

export default App;
