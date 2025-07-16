"use client";
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const PROJECT_TYPE = {
  backend: "Backend",
  frontend: "Frontend",
  observability: "Observability",
  ia: "IA",
  blockchain: "Blockchain",
  fullStack: "Full Stack",
}

const projects = [
  {
    id: 1,
    title: "GraphQL API with DDD (Domain Driven Design) & Clean Architecture",
    description:
      "A monolithic GraphQL API for a library app. Authors, books, book categories, and users entities are exposed via the GraphQL server using a mix of synchronous orchestration and event‑driven architecture. Data is persisted in PostgreSQL, notifications are handled through a queue with retry logic, and caching is implemented in two layers (L1 in‑memory and L2 via Redis). The codebase includes unit, integration, and end‑to‑end tests written with Jest.",
    technologies: ["GraphQL", "Nest.js", "Typescript", "PostgreSQL", "DDD", "Clean Architecture", "Bull", "Redis", "Event Bus", "Jest", "Docker"],
    video: null,
    image: `${process.env.NEXT_PUBLIC_CND_URL}graphql-api.png`,
    codeUrl: "https://github.com/venuziano/library-app",
    demoUrl: null,
    type: PROJECT_TYPE.backend,
  },
  {
    id: 2,
    title: "Job Keyword Extraction Agent",
    description:
      "A Python workflow that scrapes job‑posting URLs for their descriptions using Playwright, invokes an LLM via LangChain to extract a configurable number of keywords from each description, and orchestrates the steps with LangGraph’s StateGraph on Pydantic schemas to update your resume based on the new words.",
    technologies: ["Python", "LLM", "LangChain", "LangGraph", "LangSmith", "Playwright"],
    video: null,
    image: `${process.env.NEXT_PUBLIC_CND_URL}jb-extract.png`,
    codeUrl: "https://github.com/venuziano/AIgent-extract-jb-words",
    demoUrl: null,
    type: PROJECT_TYPE.ia,
  },
  {
    id: 3,
    title: "PostgreSQL Database Optmization",
    description:
      "Efficient relational search across large datasets. This repository provides a scalable solution for querying millions of records with complex many-to-many relations. Library admins can instantly find books by title or category in a 2 million‑record books table joined to 20 million category mappings. It adapts easily to any domain such as customers, licenses, inventory items and others.",
    technologies: ["Nest.js", "PostgreSQL", "MVC", "Migrations", "Swagger", "TypeORM", "Docker", "REST API"],
    video: null,
    image: `${process.env.NEXT_PUBLIC_CND_URL}pg-optmization.png`,
    codeUrl: "https://github.com/venuziano/high-performance-search-large-set-database/tree/main",
    demoUrl: null,
    type: PROJECT_TYPE.backend,
  },
  {
    id: 4,
    title: "Comic Book Converter",
    description:
      "Transform CBZ files into PDFs or EPUBs for your Kindle device or any other e-reader. No installation required, everything happens in your browser. Large files are processed in parallel using a Web Worker. Observability is built in with Sentry for error monitoring and Google Analytics for usage insights.",
    technologies: ["Next.js", "Typescript", "Sentry", "Vercel", "Google Analytics", "Animation", "Tailwind CSS", "i18n", "Web Worker", "PDF Creation", "Docker"],
    video: null,
    image: `${process.env.NEXT_PUBLIC_CND_URL}cbz.png`,
    codeUrl: "https://github.com/venuziano/cbz-to-kindle",
    demoUrl: "https://www.cbz-to-pdf.com.br/",
    type: PROJECT_TYPE.frontend,
  },
  {
    id: 5,
    title: "Observability with Google Analytics & Sentry",
    description:
      "Google Analytics is integrated into the comic book converter app to show where users come from, which devices and languages they use, and exactly how they interact. I’ve set up custom events for page views, file‑upload clicks (capturing file names), Convert button clicks, downloads, and other key actions. Sentry is used for real‑time error monitoring and performance tracing, capturing exceptions, stack traces and user context.",
    technologies: ["Next.js", "Typescript", "Google Analytics", "Sentry",],
    video: null,
    image: `${process.env.NEXT_PUBLIC_CND_URL}ga.png`,
    codeUrl: "https://github.com/venuziano/cbz-to-kindle/blob/main/hooks/useGA.tsx",
    demoUrl: null,
    type: PROJECT_TYPE.observability,
  },
  {
    id: 6,
    title: "Expenses APP - Proof of Concept",
    description:
      "Proof of concept demonstrating a workflow in which customers send expense details via WhatsApp and an API records each entry in the appropriate category automatically. Twilio and the WhatsApp Business Platform services were evaluated for cost comparison. The API and database run on AWS and the frontend is hosted on Vercel.",
    technologies: ["Nest.js", "Typescript", "MVC", "REST API", "PostgreSQL", "Migrations", "Swagger", "TypeORM", "Twilio", "WhatsApp Business API", "TypeORM", "Github Actions", "AWS", "Docker", "React", "Tailwind CSS", "Vite", "Vercel"],
    video: `${process.env.NEXT_PUBLIC_CND_URL}expenses-app-poc.mp4`,
    image: null,
    codeUrl: "https://github.com/venuziano/expenses-app",
    demoUrl: null,
    type: PROJECT_TYPE.fullStack,
  },
  {
    id: 7,
    title: "Sonar Panel - MVP",
    description:
      "The backend provides a Node.js/Express API for managing solar panel installations with JWT authentication, role‑based access control, cost savings calculations and weather integration. It supports two roles: admins can create and view installations; technicians can only view them. The API includes endpoints to create new installations and list existing ones with optional status filtering and pagination. Annual cost savings are calculated from panel capacity, sun hours (fetched via OpenWeatherMap API), system efficiency and local electricity rate.",
    technologies: ["Nodejs", "Express", "RBAC", "REST API", "Jest", "React", "Tanstack/React Query", "OpenWeatherMap API"],
    video: null,
    image: `${process.env.NEXT_PUBLIC_CND_URL}solar-poc.png`,
    codeUrl: "https://github.com/venuziano/solar-panel-poc/tree/main",
    demoUrl: null,
    type: PROJECT_TYPE.fullStack,
  },
  {
    id: 8,
    title: "Firebase & Google Maps Integration",
    description:
      "React app integrating directly with Google Maps and Firebase services, including Firestore for real‑time data storage, Firebase Authentication for email and Google sign‑in, and full PWA (Progressive Web Application) support for offline access and installability.",
    technologies: ["React", "PWA", "Firebase", "Firestore", "Firebase Auth", "Google Maps", "Surge.sh Cloud"],
    video: null,
    image: `${process.env.NEXT_PUBLIC_CND_URL}firebase.png`,
    codeUrl: "https://github.com/venuziano/hands-on-firebase",
    demoUrl: "https://dirty-plants.surge.sh/",
    type: PROJECT_TYPE.frontend,
  },
  {
    id: 9,
    title: "Smart Auth",
    description:
      "App developed as part of my final thesis for my Information Systems degree. SmartAuth enables authentication of any digital file on Ethereum’s Rinkeby testnet. The solution extracts each document’s hash, submits it to the blockchain via a smart contract, and allows verification that the document has not been altered or counterfeited. This makes it possible to prove that a given contract, for example, exists and remains immutable.",
    technologies: ["React", "Node", "Geth", "Truffle.js", "Solidity", "Web.js", "REST API"],
    video: null,
    image: `${process.env.NEXT_PUBLIC_CND_URL}smart-auth.png`,
    codeUrl: "https://github.com/venuziano/SmartAuth",
    demoUrl: null,
    type: PROJECT_TYPE.blockchain,
  },
];

export default function FeaturedProjects() {
  return (
    <section
      className="w-full py-16"
      style={{ backgroundColor: "var(--section-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 text-white">
          Projects & Services
        </h2>
        <p className="text-center mb-10 text-lg text-gray-400">
          Hands‑on implementations and case studies that highlight my skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="
                group
                bg-[#27272A]              /* your base bg */
                rounded-xl
                shadow-lg
                flex flex-col
                overflow-hidden
                border border-[#27272A]
                transition-colors transition-opacity duration-200
                hover:border-[#0284C5]     /* highlight border on hover */
                hover:opacity-80           /* fade only the hovered card */
                hover:shadow-xl hover:shadow-[#3bb0ff]/30
              "
            >
              {project.video === null ?
                <a
                  href={project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-800 cursor-pointer">
                    <Image
                      src={project.image as string}
                      alt={project.title}
                      fill
                      priority={false}
                      // className="object-contain"
                    />
                  </div>
                </a>
                :
                <div className="bg-[#2A2A2E] flex items-center justify-center text-sm text-[#999999]">
                  {/* Loading video... */}
                  <video
                    className="w-full aspect-video"
                    controls
                    src={project.video}
                    controlsList="nodownload"
                  >
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              }

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block rounded-full bg-[#29292D] text-gray-300 text-xs font-semibold px-3 py-1">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2 text-white transition-colors group-hover:text-[#0284C5]">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4 flex-1 text-justify">
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
                    className="flex-1 h-12 inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#10151a] text-white border border-[#35373B] rounded-md hover:bg-[#27272A] hover:border-[#0284C5] transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  {project.demoUrl === null ? <></> : <a
                    href={project.demoUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-12 inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#3bb0ff] text-white border border-transparent rounded-md hover:bg-[#3aa0e0] transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
