"use client";
import React from "react";
import { Calendar, Download, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="w-full bg-[#0b1117] text-white py-16 px-4 flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-2xl mx-auto">
        <span className="uppercase tracking-widest text-primary font-semibold mb-4 block">
          HI, I&apos;M RAFAEL RODRIGUES
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Software Engineer
          <br />
          <span className="text-primary">
            & Develope
            <span className="inline-block relative">
              r
              <span className="blinking-cursor absolute right-[-.3em] top-0 text-primary">|</span>
            </span>
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Crafting digital experiences with modern technologies and clean,
          efficient code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://calendly.com/raf4-rrs/30min?back=1"
            className="group bg-primary text-primary-foreground font-semibold rounded-md px-6 h-12 flex items-center justify-center min-w-[140px] transition-colors hover:bg-primary/90"
            target="_blank"
          >
            <Calendar size={18} className="bounce-icon transition-transform mr-2" />
            Book a Call
          </a>

          <a
            href={process.env.NEXT_PUBLIC_RESUME_URL}
            download
            className="group bg-[#10151a] text-white font-semibold rounded-md px-6 h-12 flex items-center gap-2 min-w-[180px] justify-center border border-[#35373b] transition-colors hover:bg-[#27272a] hover:border-[#0284C5]"
            target="_blank"
          >
            <Download size={18} className="bounce-icon transition-transform" />
            Resume
          </a>

          <div className="flex gap-2">
            <a
              href="https://github.com/venuziano"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#35373b] rounded-md w-12 h-12 flex items-center justify-center hover:bg-[#27272a] hover:border-[#0284C5] transition-colors group"
              aria-label="GitHub"
            >
              <Github size={18} className="transition-colors group-hover:text-[#0284C5]" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafaelrodr1gues/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#35373b] rounded-md w-12 h-12 flex items-center justify-center hover:bg-[#27272a] hover:border-[#0284C5] transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="transition-colors group-hover:text-[#0284C5]" />
            </a>
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="border border-[#35373b] rounded-md w-12 h-12 flex items-center justify-center hover:bg-[#27272a] hover:border-[#0284C5] transition-colors group"
              aria-label="Email"
            >
              <Mail size={18} className="transition-colors group-hover:text-[#0284C5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
