"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "/#features", section: "features" },
  { label: "Why Nidhify", href: "/#why-nidhify", section: "why-nidhify" },
  { label: "Blog", href: "/blog", section: null },
  { label: "About", href: "/about", section: "about" },
  { label: "Contact", href: "/#contact", section: "contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e, link) => {
    if (pathname === "/" && link.section && link.href.startsWith("/#")) {
      e.preventDefault();
      const el = document.getElementById(link.section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/transBlackLogo.png"
            alt="Nidhify"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="text-sm font-medium text-primary/60 hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wealth.nidhify.com"
            className="inline-flex items-center justify-center rounded-lg border border-primary/20 text-primary/70 hover:text-primary hover:border-primary/40 px-4 py-2 text-sm font-medium transition-colors"
          >
            Login / Sign Up
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden relative z-50 p-2 -mr-2 text-primary"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg"
          >
            <div className="container py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="block py-3 text-base font-medium text-primary/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-6 mt-2 border-t border-gray-100">
                <a
                  href="https://wealth.nidhify.com"
                  className="inline-flex items-center justify-center rounded-lg border border-primary/20 text-primary/70 hover:text-primary hover:border-primary/40 px-4 py-2.5 text-sm font-medium w-full transition-colors"
                >
                  Login / Sign Up
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
