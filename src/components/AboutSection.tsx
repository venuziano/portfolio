import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full py-16 px-0" style={{ background: "#23242a" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-4">
        {/* Video Embed/Placeholder */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="aspect-video w-full max-w-md bg-secondary rounded-lg flex items-center justify-center shadow-lg">
            {/* Replace with actual video embed if available */}
            <span className="text-muted-foreground text-sm">Video Placeholder</span>
          </div>
        </div>
        {/* Bio and Tech List */}
        <div className="w-full md:w-1/2 max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            I'm a passionate software engineer with over 5 years of experience building scalable web applications and digital solutions. I specialize in full-stack development, focusing on creating user-centric experiences with clean, maintainable code.<br /><br />
            My expertise spans from frontend frameworks to backend architecture, with a strong foundation in modern development practices and cloud technologies.
          </p>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Technologies & Services</h3>
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <h4 className="text-primary font-bold text-sm mb-2 uppercase tracking-wider">Frontend</h4>
                <ul className="space-y-1 text-muted-foreground text-base">
                  <li>React &amp; Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Vue.js</li>
                </ul>
              </div>
              <div>
                <h4 className="text-primary font-bold text-sm mb-2 uppercase tracking-wider">Backend</h4>
                <ul className="space-y-1 text-muted-foreground text-base">
                  <li>Node.js &amp; Express</li>
                  <li>Python &amp; Django</li>
                  <li>PostgreSQL &amp; MongoDB</li>
                  <li>AWS &amp; Docker</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 