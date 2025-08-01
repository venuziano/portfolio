import { useGA } from "@/hooks/useGA";
import React from "react";

export default function AboutSection() {
  const { recordGa } = useGA();


  return (
    <section className="w-full py-16 bg-[#282a2f]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
        {/* Row 1: Video + About */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Video */}
          <div className="w-full md:w-1/2">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
              <video
                className="w-full h-full object-cover"
                onPlay={() => recordGa({ category: 'Interaction', action: 'about_me_video' })}
                controls
                src={`${process.env.NEXT_PUBLIC_CND_URL}intro-video.mp4`}
                controlsList="nodownload"
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
 
          {/* About text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              {"I'm a passionate software engineer with over five years of experience building scalable applications and digital solutions. I specialize in full stack development and ship production level applications with regular release cycles, focusing on delivering intuitive, high‑performance solutions underpinned by a modular, well‑tested codebase."}
              <br />
              <br />
              My expertise extends across frontend frameworks, backend architecture,
              observability, and cloud technologies. I also have experience working
              as a QA engineer and systems analyst.
            </p>
          </div>
        </div>

        {/* Row 2: Technologies & Services */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">
            Technologies & Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-300">
            <div>
              <h4 className="text-sm uppercase tracking-wider font-bold mb-2 text-[#3bb0ff]">
                Frontend
              </h4>
              <ul className="space-y-1">
                <li>React, Next.js, Redux</li>
                <li>TypeScript &amp; JavaScript</li>
                <li>Figma to code &amp; Animations</li>
                <li>Tanstack/React Query &amp; SWR</li>
                <li>Tailwind CSS, Bootstrap, MaterialUI, Ant Design, PrimeReact</li>
                <li>PostCSS, Webpack, Vite</li>
                <li>Jest &amp; Playwright</li>
                <li>Progressive Web App (PWA)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider font-bold mb-2 text-[#3bb0ff]">
                Backend
              </h4>
              <ul className="space-y-1">
                <li>Node.js, Express, Nest.js</li>
                <li>TypeScript</li>
                <li>Redis</li>
                <li>REST &amp; GraphQL APIs</li>
                <li>PostgreSQL, MySQL, Oracle</li>
                <li>MongoDB, Amazon DocumentDB</li>
                <li>MVC, DDD, Clean &amp; Event-Driven Arch.</li>
                <li>Jest &amp; Playwright</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider font-bold mb-2 text-[#3bb0ff]">
                DevOps
              </h4>
              <ul className="space-y-1">
                <li>AWS, Vercel, Heroku</li>
                <li>Kubernetes</li>
                <li>Terraform</li>
                <li>Docker</li>
                <li>SonarQube</li>
                <li>GitHub Actions &amp; Bitbucket Pipeline</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider font-bold mb-2 text-[#3bb0ff]">
                Observability
              </h4>
              <ul className="space-y-1">
                <li>Sentry</li>
                <li>CloudWatch</li>
                <li>Google Analytics</li>
                <li>Error Handling &amp; Log Monitoring</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider font-bold mb-2 text-[#3bb0ff]">
                IA
              </h4>
              <ul className="space-y-1">
                <li>Cursor, OpenAI</li>
                <li>LangChain &amp; LangGraph &amp; LangSmith</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
