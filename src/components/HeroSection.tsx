import React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-background text-foreground py-16 px-4 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl mx-auto">
        <span className="uppercase tracking-widest text-primary text-xs font-semibold mb-4 block">Hi, I'm John Doe</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Software Engineer <span className="text-primary">& Developer</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8">
          Crafting digital experiences with modern technologies and clean, efficient code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="bg-primary text-primary-foreground font-semibold rounded px-6 py-3 shadow hover:bg-primary/90 transition-colors min-w-[140px] text-center">Book a Call</a>
          <a href="/resume.pdf" download className="bg-secondary text-secondary-foreground font-semibold rounded px-6 py-3 shadow hover:bg-secondary/80 transition-colors border border-border flex items-center gap-2 min-w-[180px] justify-center">
            <Download size={18} />
            Download Resume
          </a>
          <div className="flex gap-2">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="border border-border rounded-md p-2 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="border border-border rounded-md p-2 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:your@email.com" className="border border-border rounded-md p-2 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 