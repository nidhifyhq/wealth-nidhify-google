"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, IndianRupee, Star, Clock } from "lucide-react";

function useCountUp(end, duration = 2000, start = 0) {
  const [value, setValue] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const rawEnd = typeof end === "number" ? end : 0;

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * rawEnd));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, end, duration]);

  return [value, ref];
}

const stats = [
  { icon: TrendingUp, value: 10000, prefix: "", suffix: "+", label: "Investments Tracked" },
  { icon: IndianRupee, value: 100, prefix: "₹", suffix: " Cr+", label: "Assets Managed" },
  { icon: Star, value: 95, prefix: "", suffix: "%", label: "User Satisfaction" },
  { icon: Clock, value: 247, prefix: "", suffix: "/7", label: "Access Anywhere", format: (v) => "24" },
];

function formatStatValue(value, stat) {
  if (stat.format) return stat.format(value);
  const num = typeof value === "number" ? value : 0;
  if (num >= 10000) return num.toLocaleString("en-IN");
  return num.toString();
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 md:py-28 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const [value, ref] = useCountUp(stat.value, 2200);
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                ref={ref}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col items-center text-center py-8 px-4"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                  {stat.prefix}
                  {formatStatValue(value, stat)}
                  {stat.suffix}
                </span>
                <span className="text-sm md:text-base text-primary/50 mt-2 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
