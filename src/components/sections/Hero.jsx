"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Play,
  TrendingUp,
  Wallet,
  Target,
  Shield,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gradient-to-b from-blue-50/80 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-accent/[0.04] to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-50/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="gap-1.5 px-3 py-1.5 text-xs font-medium border-accent/20 bg-accent/[0.04] text-accent"
              >
                <Sparkles className="w-3 h-3" />
                Smart Wealth Management
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              Track Your Entire Wealth in{" "}
              <span className="gradient-text">One Place</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-primary/60 max-w-lg leading-relaxed"
            >
              Manage investments, monitor your net worth, and stay in control of
              your financial future with one powerful dashboard.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-primary/40 max-w-md leading-relaxed"
            >
              Nidhify brings together your mutual funds, stocks, deposits,
              insurance policies, and financial goals into a single, secure
              platform designed to simplify wealth management.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="https://app.nidhify.com"
                className="inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25 border-0 px-7 py-5 text-base h-auto font-medium transition-colors"
              >
                Login / Sign Up
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/#features"
                className="inline-flex items-center justify-center rounded-lg border border-primary/20 text-primary/70 hover:text-primary hover:border-primary/40 px-7 py-5 text-base h-auto font-medium transition-colors"
              >
                <Play className="w-4 h-4 mr-2" />
                Explore Features
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-x-7 gap-y-2 pt-4"
            >
              {[
                "Secure & Private",
                "Smart Investment Insights",
                "Built for Indian Investors",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-xs text-primary/50"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.5)] shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Glow behind mockup */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 via-transparent to-emerald-500/10 rounded-3xl blur-2xl" />

            <div className="relative rounded-2xl shadow-2xl border border-white/[0.08] bg-gradient-to-br from-[#0B1120] to-[#162044] p-4 md:p-5 overflow-hidden">
              {/* Subtle grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Status Bar */}
              <div className="relative flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_rgba(37,99,235,0.6)]" />
                  <span className="text-xs font-semibold text-white/70 tracking-wide">
                    Nidhify
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="relative grid grid-cols-3 gap-3">
                {/* Net Worth Card */}
                <div className="col-span-3 md:col-span-2 bg-white/[0.05] backdrop-blur rounded-xl p-4 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-white/40 tracking-wide uppercase">
                      Total Net Worth
                    </span>
                    <Wallet className="w-4 h-4 text-white/30" />
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Progress Ring */}
                    <div className="relative w-[68px] h-[68px] shrink-0">
                      <svg
                        className="w-full h-full -rotate-90"
                        viewBox="0 0 36 36"
                      >
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="rgba(255,255,255,0.06)"
                          strokeWidth="3"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="#2563EB"
                          strokeWidth="3"
                          strokeDasharray="97.39"
                          strokeDashoffset="31.16"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[11px] font-bold text-white/90">
                          68%
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        ₹42,85,000
                      </p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                        <span className="text-xs font-medium text-emerald-400">
                          +12.5% this quarter
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Asset Allocation Card */}
                <div className="col-span-3 md:col-span-1 bg-white/[0.05] backdrop-blur rounded-xl p-4 border border-white/[0.06]">
                  <span className="text-xs font-medium text-white/40 tracking-wide uppercase block mb-3">
                    Allocation
                  </span>
                  <div className="relative w-full aspect-square max-w-[110px] mx-auto">
                    {/* Donut segments */}
                    <div
                      className="w-full h-full rounded-full"
                      style={{
                        background:
                          "conic-gradient(#2563EB 0deg 180deg, #0c3e38 180deg 270deg, #F59E0B 270deg 324deg, #8B5CF6 324deg 360deg)",
                      }}
                    />
                    <div className="absolute inset-[5px] bg-[#0B1120] rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-semibold text-white/60">
                        Total
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 mt-3">
                    {[
                      { color: "#2563EB", label: "Equity", pct: "50%" },
                      { color: "#0c3e38", label: "Debt", pct: "25%" },
                      { color: "#F59E0B", label: "Gold", pct: "15%" },
                      { color: "#8B5CF6", label: "Cash", pct: "10%" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-1.5"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-[10px] text-white/40">
                          {item.label} {item.pct}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Portfolio Growth Card */}
                <div className="col-span-3 bg-white/[0.05] backdrop-blur rounded-xl p-4 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-white/40 tracking-wide uppercase">
                      Portfolio Growth
                    </span>
                    <span className="text-[10px] text-emerald-400 font-medium">
                      +18.3%
                    </span>
                  </div>
                  <div className="flex items-end gap-[3px] h-20 md:h-24">
                    {[
                      22, 28, 18, 35, 42, 30, 48, 55, 40, 52, 65, 58, 70, 62,
                      50, 68, 78, 72, 82, 90, 75, 85, 95, 88, 92, 100, 85,
                    ].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-[3px] transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          background:
                            i === 26
                              ? "linear-gradient(to top, #2563EB, #60A5FA)"
                              : i > 22
                                ? "linear-gradient(to top, rgba(37,99,235,0.8), rgba(96,165,250,0.4))"
                                : "linear-gradient(to top, rgba(37,99,235,0.3), rgba(96,165,250,0.15))",
                          opacity: i > 22 ? 1 : 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* SIP Tracker Card */}
                <div className="col-span-1 bg-white/[0.05] backdrop-blur rounded-xl p-3 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium text-white/40 tracking-wide uppercase">
                      SIP
                    </span>
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                  </div>
                  <p className="text-sm font-bold text-white">₹45K/mo</p>
                  <div className="mt-2 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-emerald-400"
                      style={{ width: "72%" }}
                    />
                  </div>
                  <p className="text-[9px] text-white/30 mt-1.5">
                    72% of goal
                  </p>
                </div>

                {/* Goal Progress Card */}
                <div className="col-span-1 bg-white/[0.05] backdrop-blur rounded-xl p-3 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium text-white/40 tracking-wide uppercase">
                      Goal
                    </span>
                    <Target className="w-3 h-3 text-amber-400" />
                  </div>
                  <div className="relative w-10 h-10 mx-auto">
                    <svg
                      className="w-full h-full -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="15.5"
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="3"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.5"
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="3"
                        strokeDasharray="97.39"
                        strokeDashoffset="29.22"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[9px] font-bold text-white/80">
                        70%
                      </span>
                    </div>
                  </div>
                  <p className="text-[9px] text-white/30 text-center mt-1.5">
                    Retirement
                  </p>
                </div>

                {/* Insurance Summary Card */}
                <div className="col-span-1 bg-white/[0.05] backdrop-blur rounded-xl p-3 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium text-white/40 tracking-wide uppercase">
                      Cover
                    </span>
                    <Shield className="w-3 h-3 text-cyan-400" />
                  </div>
                  <p className="text-sm font-bold text-white">3 Active</p>
                  <div className="flex -space-x-1 mt-1.5">
                    {["L", "H", "T"].map((letter, i) => (
                      <div
                        key={letter}
                        className="w-[18px] h-[18px] rounded-full border border-white/20 flex items-center justify-center text-[8px] font-bold text-white"
                        style={{
                          backgroundColor: [
                            "rgba(37,99,235,0.5)",
                            "rgba(16,185,129,0.5)",
                            "rgba(245,158,11,0.5)",
                          ][i],
                        }}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                  <p className="text-[9px] text-white/30 mt-1.5">₹12Cr</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
