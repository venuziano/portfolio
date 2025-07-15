import React from "react";

const articles = [
  {
    title: "MailHog: a Free, Containerized SMTP Server for Local Development",
    date: "July 9, 2025",
    readTime: "2 min read",
    description:
      "Learn advanced techniques for improving database performance in Node.js, including connection pooling, query optimization, and caching strategies.",
    tags: ["Docker", "Jest", "Mailhog", "Notification Tests", "SMTP"],
    url: "https://dev.to/venuziano/mailhog-a-free-containerized-smtp-server-for-local-development-mea",
  },
  {
    title: "How to Optimize Search Queries in Large Databases with PostgreSQL",
    date: "April 12, 2025",
    readTime: "5 min read",
    description:
      "A comprehensive guide on how to optimize and scale database queries in large database sets using PostgreSQL.",
    tags: ["Nestjs", "TypeScript", "PostgreSQL", "Performance", "TypeORM", "Swagger", "Docker", "SQL Migrations"],
    url: "https://dev.to/venuziano/how-to-optimize-search-queries-in-large-databases-with-postgresql-and-gin-indexes-11b5",
  }
];

export default function LatestArticles() {
  return (
    <section className="w-full py-16" style={{ backgroundColor: "var(--articles-bg)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2" style={{ color: "var(--text-heading)" }}>
          Latest Articles
        </h2>
        <p className="text-center mb-10 text-lg" style={{ color: "var(--text-subtitle)" }}>
          Insights and tutorials for modern software development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group rounded-2xl shadow-lg p-6 flex flex-col h-full"
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
                className="font-bold mb-2 leading-snug text-[1.125rem] text-[color:var(--text-heading)] transition-colors group-hover:text-[#0284C5]"
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

              <a
                href={article.url}
                target="_blank"
                className="read-btn mt-auto transition-colors group-hover:border-[#0284C5]"
              >
                Read Article
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}