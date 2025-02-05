import BestsellerSection from "./components/BestsellerSection";
import HeroSection from "./components/HeroSection";
import HighlightSection from "./components/HighlightSection";
import PartnersSection from "./components/PartnersSection";
import ReviewSection from "./components/ReviewSection";
import ShopSection from "./components/ShopSection";
import StorySection from "./components/StorySection";
import SubscribeSection from "./components/SubscribeSection";

function App() {
  return (
    <main className="min-h-screen bg-offWhite">
      <HeroSection />
      <BestsellerSection />
      <ShopSection />
      <HighlightSection />
      <StorySection />
      <ReviewSection />
      <PartnersSection />
      <SubscribeSection />
    </main>
  );
}

export default App;
