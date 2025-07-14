"use client";
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className="cursor-pointer fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center hover:bg-primary/90 transition-colors"
    >
      <ChevronUp size={28} />
    </button>
  ) : null;
} 