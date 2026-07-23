"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const productLinks = [
  { label: "Login", href: "https://app.nidhify.com/" },
  { label: "Sign Up", href: "https://app.nidhify.com/" },
];

const footerLinks = [
  { title: "Company", links: companyLinks },
  { title: "Resources", links: resourceLinks },
  { title: "Legal", links: legalLinks },
  { title: "Product", links: productLinks },
];

export default function Footer() {
  return (
    <footer className="bg-[#092042] text-white">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="block">
              <Image
                src="/nidhifylogofull.png"
                alt="Nidhify"
                width={140}
                height={38}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-3 text-sm text-white/40 leading-relaxed max-w-xs">
              Simplifying Wealth Management for Every Investor.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {/* <Link
                href="#"
                className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-white/50 hover:bg-white/[0.12] hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-white/50 hover:bg-white/[0.12] hover:text-white transition-all"
              >
                <Twitter className="w-4 h-4" />
              </Link> */}
              <Link
                href="https://www.linkedin.com/company/nidhify/"
                className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-white/50 hover:bg-white/[0.12] hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container py-6">
          <p className="text-sm text-white/30 text-center">
            &copy; 2026 Nidhify. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
