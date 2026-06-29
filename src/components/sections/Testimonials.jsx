"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nidhify finally helped me organize my investments in one place. My entire financial life is now easy to manage.",
    name: "Rahul M.",
    role: "Software Engineer",
    initials: "RM",
    color: "bg-blue-500",
  },
  {
    quote:
      "The goal planning feature is a game-changer. I can finally see my path to financial independence clearly.",
    name: "Priya S.",
    role: "Marketing Professional",
    initials: "PS",
    color: "bg-emerald-500",
  },
  {
    quote:
      "I love how Nidhify tracks all my SIPs and mutual funds automatically. It saves me hours every month.",
    name: "Amit K.",
    role: "Business Owner",
    initials: "AK",
    color: "bg-violet-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-18"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Trusted by Investors
          </h2>
          <p className="mt-4 text-base md:text-lg text-primary/50 leading-relaxed">
            See how Nidhify is helping people take control of their financial
            journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-[0.08]">
                <Quote className="w-10 h-10 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-base text-primary/70 leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold shadow-sm`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {t.name}
                  </p>
                  <p className="text-xs text-primary/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
