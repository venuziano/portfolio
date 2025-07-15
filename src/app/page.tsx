import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import LatestArticles from "@/components/LatestArticles";
import CallToAction from "@/components/CallToAction";
import ScrollToTop from "@/components/ScrollToTop";
import TopbarMenu from "@/components/TopbarMenu";
import BinaryRain from "@/components/BinaryRain";

export default function Home() {
  return (
    <>
      <TopbarMenu />
      <main className="flex flex-col w-full">
        <div id="hero" className="relative overflow-hidden">
          <BinaryRain />
          <HeroSection />
        </div>
        <div id="about"><AboutSection /></div>
        <div id="projects"><FeaturedProjects /></div>
        <div id="blog"><LatestArticles /></div>
        <CallToAction />
        <ScrollToTop />
      </main>
    </>
  );
}
