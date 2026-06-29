"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  TrendingUp,
  Wallet,
  Target,
  Shield,
} from "lucide-react";

const screens = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Dashboard",
    desc: "Your complete financial overview",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    accent: "text-blue-600",
    chart: { color: "#3B82F6", value: 68 },
  },
  {
    id: "investments",
    icon: TrendingUp,
    title: "Investments",
    desc: "Track all your portfolios",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    accent: "text-emerald-600",
    chart: { color: "#0c3e38", value: 82 },
  },
  {
    id: "networth",
    icon: Wallet,
    title: "Net Worth",
    desc: "See your total wealth at a glance",
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
    accent: "text-violet-600",
    chart: { color: "#8B5CF6", value: 55 },
  },
  {
    id: "goals",
    icon: Target,
    title: "Goals",
    desc: "Plan your financial milestones",
    color: "from-amber-500 to-amber-600",
    bg: "bg-amber-50",
    accent: "text-amber-600",
    chart: { color: "#F59E0B", value: 73 },
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance",
    desc: "Manage your coverage policies",
    color: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
    accent: "text-cyan-600",
    chart: { color: "#06B6D4", value: 90 },
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function Screenshots() {
  const [[current, direction], setState] = useState([0, 0]);

  const goTo = useCallback(
    (index) => {
      setState(([prev]) => [index, index - prev]);
    },
    []
  );

  const next = useCallback(() => {
    setState(([prev]) => [(prev + 1) % screens.length, 1]);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  const screen = screens[current];

  return (
    <section id="screenshots" className="py-20 md:py-28 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-18"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            See Nidhify in Action
          </h2>
          <p className="mt-4 text-base md:text-lg text-primary/50 leading-relaxed">
            A clean, powerful interface designed to give you complete control
            over your financial life.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          {/* Phone Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-[300px] h-[610px] md:w-[340px] md:h-[680px] rounded-[3rem] border-[3px] border-gray-800 bg-white shadow-2xl shadow-black/10 overflow-hidden"
          >
            {/* Glass overlay */}
            <div className="absolute inset-0 rounded-[calc(3rem-3px)] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none z-10" />

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
              <div className="w-[120px] h-[30px] md:h-[34px] bg-gray-800 rounded-b-[20px] flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-600" />
                <div className="w-[50px] h-[6px] rounded-full bg-gray-700" />
              </div>
            </div>

            {/* Screen area */}
            <div className="relative h-full pt-[34px] md:pt-[38px]">
              {/* Status bar */}
              <div className="flex items-center justify-between px-6 py-2">
                <span className="text-[10px] font-semibold text-gray-400">
                  9:41
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <div className="w-3 h-2 rounded-sm bg-gray-300" />
                  <div className="w-3 h-2 rounded-sm bg-gray-300" />
                </div>
              </div>

              {/* Screen content */}
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={screen.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="px-5"
                >
                  <div
                    className={`rounded-2xl p-6 ${screen.bg} min-h-[440px] md:min-h-[500px]`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${screen.color} flex items-center justify-center shadow-lg`}
                      >
                        <screen.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary">
                          {screen.title}
                        </h3>
                        <p className="text-xs text-primary/40">{screen.desc}</p>
                      </div>
                    </div>

                    {/* Simulated chart/ring */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative w-24 h-24">
                        <svg
                          className="w-full h-full -rotate-90"
                          viewBox="0 0 36 36"
                        >
                          <circle
                            cx="18"
                            cy="18"
                            r="15.5"
                            fill="none"
                            stroke="rgba(0,0,0,0.06)"
                            strokeWidth="3"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="15.5"
                            fill="none"
                            stroke={screen.chart.color}
                            strokeWidth="3"
                            strokeDasharray="97.39"
                            strokeDashoffset={
                              97.39 - (97.39 * screen.chart.value) / 100
                            }
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className={`text-lg font-bold ${screen.accent}`}
                          >
                            {screen.chart.value}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Simulated data cards */}
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-white/60"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full opacity-60" style={{ backgroundColor: screen.chart.color }} />
                              <span className="text-sm font-medium text-primary">
                                {["Equity Fund", "Debt Fund", "Liquid Fund"][i - 1]}
                              </span>
                            </div>
                            <span className="text-sm font-bold text-primary">
                              ₹{["2,45,000", "1,80,000", "95,000"][i - 1]}
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${[65, 42, 28][i - 1]}%`,
                                backgroundColor: screen.chart.color,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex items-center gap-3 mt-8">
            {screens.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-2.5 bg-accent"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to ${s.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
