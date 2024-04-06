import HeroSection from "../components/HeroSection";
import HomeContent from "../components/HomeContent";

export default function HomePage() {
  window.scrollTo(0, 0);

  return (
    <div id="fullpage">
      <HeroSection />
      <HomeContent />
    </div>
  );
}
