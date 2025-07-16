"use client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import LatestArticles from "@/components/LatestArticles";
import CallToAction from "@/components/CallToAction";
import ScrollToTop from "@/components/ScrollToTop";
import TopbarMenu from "@/components/TopbarMenu";
import BinaryRain from "@/components/BinaryRain";
import { useEffect } from "react";
import { useGA } from "@/hooks/useGA";

export default function Home() {
  const { logPageView } = useGA();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentUrl = window.location.href;
    console.log('currentUrl', currentUrl)
    logPageView(currentUrl);
  }, [logPageView]);

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
