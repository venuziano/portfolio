import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-start gap-16">
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      {/* Future sections go here */}
    </main>
  );
}
