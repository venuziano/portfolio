import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import LatestArticles from "@/components/LatestArticles";
import CallToAction from "@/components/CallToAction";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <LatestArticles />
      <CallToAction />
      <ScrollToTop />
    </main>
  );
}
