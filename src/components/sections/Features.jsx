"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Wallet,
  Target,
  TrendingUp,
  Shield,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "All Investments in One Dashboard",
    desc: "Track every asset without switching between multiple apps.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Wallet,
    title: "Net Worth Tracking",
    desc: "Understand your complete financial picture instantly.",
    color: "bg-emerald-50 text-secondary",
  },
  {
    icon: Target,
    title: "Smart Goal Planning",
    desc: "Plan for retirement, home purchase, education, and more.",
    color: "bg-blue-50 text-accent",
  },
  {
    icon: TrendingUp,
    title: "SIP Management",
    desc: "Monitor SIP investments and future wealth creation.",
    color: "bg-emerald-50 text-secondary",
  },
  {
    icon: Shield,
    title: "Insurance Management",
    desc: "Never miss policy details and renewals.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Lock,
    title: "Secure Data Protection",
    desc: "Your financial information is protected using modern security practices.",
    color: "bg-slate-50 text-primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-18"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Everything You Need to Manage Your Wealth
          </h2>
          <p className="mt-4 text-base md:text-lg text-primary/50 leading-relaxed">
            Nidhify brings all your financial tools together in one secure and
            intelligent platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors ${feature.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-primary/50 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
