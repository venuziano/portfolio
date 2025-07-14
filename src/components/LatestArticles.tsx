import React from "react";

const articles = [
  {
    title: "Building Scalable React Applications with TypeScript",
    date: "March 14, 2024",
    readTime: "8 min read",
    description:
      "A comprehensive guide on architecting large-scale React applications using TypeScript, including best practices for component design, state management, and type safety.",
    tags: ["React", "TypeScript", "Architecture"],
    url: "#",
  },
  {
    title: "Optimizing Database Performance in Node.js Applications",
    date: "February 27, 2024",
    readTime: "12 min read",
    description:
      "Learn advanced techniques for improving database performance in Node.js, including connection pooling, query optimization, and caching strategies.",
    tags: ["Node.js", "Database", "Performance"],
    url: "#",
  },
  {
    title: "Modern CSS Techniques for Responsive Design",
    date: "January 19, 2024",
    readTime: "6 min read",
    description:
      "Explore cutting-edge CSS features and techniques for creating responsive, accessible, and performant web interfaces in 2024.",
    tags: ["CSS", "Responsive Design", "Web Development"],
    url: "#",
  },
];

export default function LatestArticles() {
  return (
    <section className="w-full py-16" style={{ backgroundColor: "var(--articles-bg)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2" style={{ color: "var(--text-heading)" }}>
          Latest Articles
        </h2>
        <p className="text-center mb-10 text-lg" style={{ color: "var(--text-subtitle)" }}>
          Insights, tutorials, and thoughts on software development and technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-lg p-6 flex flex-col h-full"
              style={{ backgroundColor: "var(--card-bg)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm" style={{ color: "var(--text-meta)" }}>
                  {article.date}
                </span>
                <span className="text-sm" style={{ color: "var(--text-meta)" }}>
                  {article.readTime}
                </span>
              </div>

              <h3
                className="font-bold mb-2 leading-snug"
                style={{ color: "var(--text-heading)", fontSize: "1.125rem" /* text-lg */ }}
              >
                {article.title}
              </h3>

              <p
                className="flex-1 mb-4 leading-relaxed"
                style={{ color: "var(--text-body)", fontSize: "0.875rem" /* text-sm */ }}
              >
                {article.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, i) => (
                  <span key={i} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <a href={article.url} className="read-btn mt-auto">
                Read Article
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}