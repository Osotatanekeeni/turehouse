import BestsellerSection from "./components/BestsellerSection";
import HeroSection from "./components/HeroSection";
import HighlightSection from "./components/HighlightSection";
import ReviewSection from "./components/ReviewSection";
import ShopSection from "./components/ShopSection";
import StorySection from "./components/StorySection";

function App() {
  return (
    <main className="min-h-screen bg-offWhite">
      <HeroSection />
      <BestsellerSection />
      <ShopSection />
      <HighlightSection />
      <StorySection />
      <ReviewSection />
    </main>
  );
}

export default App;
