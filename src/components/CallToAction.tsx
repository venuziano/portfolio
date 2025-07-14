import React from "react";
import { Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="w-full bg-[#282a2f] py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          {"Let's Work Together"}
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          {"I'm always interested in new opportunities and exciting projects. Let’s discuss how we can bring your ideas to life."}
        </p>
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold rounded-md px-6 h-12 shadow-md hover:bg-primary/90 transition-colors text-base"
        >
          <Mail size={20} />
          Get In Touch
        </a>
      </div>
    </section>
  );
}
