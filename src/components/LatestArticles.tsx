import React from "react";
import Pagination from "./Pagination";

const articles = [
  {
    id: crypto.randomUUID(),
    title: "Building Robust Task Queues and Event‑Driven Workflows in NestJS with Event Bus, Redis, and Bull",
    date: "July 18, 2025",
    readTime: "6 min read",
    description:
      "This article demonstrates how to build a message-driven workflow in NestJS using the Event Bus and Bull queues. It covers a real-world use case involving the sending of verification emails when a user registers. By using events, the system becomes more modular and easier to test. Bull handles background job execution, retries, and failure recovery, providing a reliable and fault-tolerant processing layer.",
    tags: ["Nest.js", "Bull", "Redis", "Event Bus", "Queue"],
    url: "https://shifters.dev/blogs/building-robust-task-queues-and-eventdriven-workflows-in-nestjs-with-event-bus-redis-and-bull",
  },
  {
    id: crypto.randomUUID(),
    title: "MailHog: a Free, Containerized SMTP Server for Local Development",
    date: "July 9, 2025",
    readTime: "2 min read",
    description:
      "This article shows how to implement a message‑driven workflow in NestJS using its built‑in Event Bus together with Redis‑backed Bull queues. As a concrete use case, we'll send a verification email whenever a new user registers.",
    tags: ["Docker", "Jest", "Mailhog", "Notification Tests", "SMTP"],
    url: "https://dev.to/venuziano/mailhog-a-free-containerized-smtp-server-for-local-development-mea",
  },
  {
    id: crypto.randomUUID(),
    title: "How to Optimize Search Queries in Large Databases with PostgreSQL",
    date: "April 12, 2025",
    readTime: "5 min read",
    description:
      "A comprehensive guide on how to optimize and scale database queries in large database sets using PostgreSQL.",
    tags: ["Nest.js", "TypeScript", "PostgreSQL", "Performance", "TypeORM", "Swagger", "Docker", "SQL Migrations"],
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

        <Pagination items={articles} itemsPerPage={6}>
          {(displayedArticles) => (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedArticles.map((article) => (
                <div
                  key={article.id}
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
                    {article.tags.map((tag: string, i: number) => (
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
          )}
        </Pagination>
      </div>
    </section>
  );
}