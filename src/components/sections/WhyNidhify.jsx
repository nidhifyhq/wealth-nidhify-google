"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const othersItems = [
  "Multiple apps",
  "Manual tracking",
  "Scattered information",
  "Missed opportunities",
];

const nidhifyItems = [
  "One dashboard",
  "Automated tracking",
  "Complete financial overview",
  "Better decisions",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function WhyNidhify() {
  return (
    <section id="why-nidhify" className="py-20 md:py-28 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-18"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Your Personal Finance Command Center
          </h2>
          <p className="mt-4 text-base md:text-lg text-primary/50 leading-relaxed">
            Managing wealth should not be complicated. Nidhify gives you a
            single source of truth for all your investments and financial goals,
            helping you make smarter financial decisions with confidence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-start"
        >
          {/* Others Card */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-2xl border-2 border-red-200 bg-gradient-to-br from-red-50/50 to-white p-8 shadow-lg shadow-red-500/5"
            style={{ transform: "rotate(-1deg)" }}
          >
            <div className="absolute -top-3 left-6 px-4 py-1 bg-red-500 text-white text-sm font-semibold rounded-full shadow-md">
              Others
            </div>
            <div className="mt-6 space-y-5">
              {othersItems.map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-base md:text-lg text-primary/60 font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Nidhify Card */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-white p-8 shadow-lg shadow-emerald-500/5"
            style={{ transform: "rotate(1deg)" }}
          >
            <div className="absolute -top-3 left-6 px-4 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full shadow-md">
              Nidhify
            </div>
            <div className="mt-6 space-y-5">
              {nidhifyItems.map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-base md:text-lg text-primary font-semibold">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
