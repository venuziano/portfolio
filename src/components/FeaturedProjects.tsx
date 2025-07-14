"use client";
import React from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time order tracking.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux", "Express"],
    video: null,
    codeUrl: "#",
    demoUrl: "#",
    year: 2024,
    type: "Full Stack",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
    video: null,
    codeUrl: "#",
    demoUrl: "#",
    year: 2024,
    type: "Frontend",
  },
  {
    title: "AI Chat Application",
    description: "An AI-powered chat application that leverages GPT-4 for natural language conversations, supporting multiple chat rooms and user authentication.",
    technologies: ["React", "OpenAI API", "Next.js", "MongoDB"],
    video: null,
    codeUrl: "#",
    demoUrl: "#",
    year: 2024,
    type: "Full Stack",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard providing real-time weather updates, forecasts, and interactive charts using public APIs.",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    video: null,
    codeUrl: "#",
    demoUrl: "#",
    year: 2024,
    type: "Frontend",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="w-full bg-background py-16 px-0">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-foreground">Featured Projects</h2>
        <p className="text-muted-foreground text-center mb-10">A showcase of my recent work and technical expertise across various domains.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#23242a] rounded-xl shadow-lg flex flex-col overflow-hidden">
              <div className="aspect-video bg-secondary flex items-center justify-center text-muted-foreground text-sm">Loading video...</div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-muted-foreground uppercase">{project.type}</span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="text-lg font-bold mb-1 text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="mb-4">
                  <span className="text-xs text-muted-foreground">Technologies</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-auto">
                  <a href={project.codeUrl} className="bg-background border border-border text-foreground rounded px-4 py-2 text-sm font-semibold flex items-center gap-2 hover:bg-secondary transition-colors" target="_blank" rel="noopener noreferrer">
                    <span className="hidden sm:inline">Code</span>
                  </a>
                  <a href={project.demoUrl} className="bg-primary text-primary-foreground rounded px-4 py-2 text-sm font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors" target="_blank" rel="noopener noreferrer">
                    <span className="hidden sm:inline">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 