"use client";

import { useEffect, useState } from "react";
import { ListTree } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function BlogTOC() {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const article = document.querySelector("[data-blog-content]");
    if (!article) return;

    const headings = article.querySelectorAll("h2, h3");
    const tocItems: TOCItem[] = [];

    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id =
          heading.textContent
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") || "";
      }
      tocItems.push({
        id: heading.id,
        text: heading.textContent || "",
        level: heading.tagName === "H2" ? 2 : 3,
      });
    });

    setItems(tocItems);
  }, []);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav className="mb-10" aria-label="Table of contents">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-semibold text-primary mb-3 w-full text-left md:cursor-default"
      >
        <ListTree className="w-4 h-4 text-accent" />
        On this page
        <span className="md:hidden ml-auto text-primary/40 text-xs">
          {isOpen ? "Hide" : "Show"}
        </span>
      </button>
      <div className={`space-y-1 ${isOpen ? "block" : "hidden md:block"}`}>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(item.id);
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                history.pushState(null, "", `#${item.id}`);
              }
            }}
            className={`block text-sm py-1 transition-colors rounded ${
              item.level === 3 ? "pl-6 text-primary/50" : "pl-0 text-primary/70"
            } ${
              activeId === item.id
                ? "text-accent font-medium"
                : "hover:text-primary"
            }`}
          >
            {item.text}
          </a>
        ))}
      </div>
      <div className="mt-4 border-b border-border" />
    </nav>
  );
}
