"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const screens = [
  { id: "1", src: "/screenshot/1s.webp", title: "Screenshot 1" },
  { id: "2", src: "/screenshot/2s.webp", title: "Screenshot 2" },
  { id: "3", src: "/screenshot/3s.webp", title: "Screenshot 3" },
  { id: "4", src: "/screenshot/4s.webp", title: "Screenshot 4" },
  { id: "5", src: "/screenshot/5s.webp", title: "Screenshot 5" },
  { id: "6", src: "/screenshot/6s.webp", title: "Screenshot 6" },
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-[300px] h-[540px] md:w-[340px] md:h-[610px] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 bg-white"
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={screen.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={screen.src}
                  alt={screen.title}
                  fill
                  sizes="(max-width: 768px) 300px, 340px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
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