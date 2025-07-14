"use client";
import React from "react";
import { Github, ExternalLink } from "lucide-react";

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
    <section className="w-full py-16" style={{ backgroundColor: "var(--section-bg)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 text-white">
          Featured Projects
        </h2>
        <p className="text-center mb-10 text-lg text-gray-400">
          A showcase of my recent work and technical expertise across various
          domains.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#27272A] rounded-xl shadow-lg flex flex-col overflow-hidden"
            >
              <div className="aspect-video bg-[#27272A] flex items-center justify-center text-sm text-[#999999]">
                Loading video...
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block rounded-full bg-[#27272A] text-gray-300 text-xs font-semibold px-3 py-1">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2 text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="mb-6">
                  <span className="block mb-2 text-xs text-gray-400">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#27272A] text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-[#35373B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-12 inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#10151a] text-white border border-[#35373B] rounded-md hover:bg-[#27272A] transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-12 inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#3bb0ff] text-white border border-transparent rounded-md hover:bg-[#3aa0e0] transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
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