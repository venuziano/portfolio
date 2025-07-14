/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";

const menu = [
  { label: "Home", target: "#hero" },
  { label: "About", target: "#about" },
  { label: "Projects", target: "#projects" },
  { label: "Blog", target: "#blog" },
];

export default function TopbarMenu() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    let lastScroll = window.scrollY;
    const onScroll = () => {
      setVisible(window.scrollY > 100);
      // Highlight active section
      const sections = ["hero", "about", "projects", "blog"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY + 80 >= el.offsetTop) {
          setActive(menu[i].label);
          break;
        }
      }
      lastScroll = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return visible ? (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#181e25] rounded-full shadow-lg px-6 py-2 flex gap-2 border border-[#23242a] backdrop-blur-md">
      {menu.map((item) => (
        <a
          key={item.label}
          href={item.target}
          onClick={(e) => handleClick(e, item.target)}
          className={`px-4 py-2 rounded-full font-medium text-sm transition-colors duration-150 ${
            active === item.label
              ? "bg-primary text-primary-foreground shadow"
              : "text-gray-300 hover:bg-[#23242a]"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  ) : null;
} 