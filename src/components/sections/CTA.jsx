"use client";

import { motion } from "framer-motion";
import { ArrowRight, UserPlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#092042] to-[#1E293B]" />

      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.08] rounded-full blur-3xl" />
        <div className="absolute -top-32 right-1/4 w-[400px] h-[400px] bg-accent/[0.08] rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-blue-500/[0.06] rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Take Control of Your Financial Future Today.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Join thousands of investors who trust Nidhify to manage and monitor their wealth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button className="bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25 border-0 px-8 py-6 text-base h-auto">
              Download App
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base h-auto"
            >
              <UserPlus className="w-5 h-5" />
              Create Free Account
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
