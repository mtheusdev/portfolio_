"use client";
import GoldButton from "@/components/ui/GoldButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJyZ2JhKDIxMiwgMTYwLCAyMywgMC4xKSIvPgo8L3N2Zz4=')] opacity-30"></div>
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gold-500/5 rounded-full blur-[120px] mix-blend-screen translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Panel */}
        <motion.div
          className="lg:w-3/5"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-gold-500 tracking-[0.2em] text-xs md:text-sm uppercase mb-6"
          >
            {t("label")}
          </motion.p>

          <motion.h1 className="font-display text-6xl md:text-8xl lg:text-[6rem] leading-[1.1] text-text-primary mb-8">
            <motion.span variants={nameVariants} className="block">
              Matheus
            </motion.span>
            <motion.span
              variants={nameVariants}
              className="block text-gold-gradient"
            >
              Henrique
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-text-secondary font-light max-w-xl mb-12"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6"
          >
            <GoldButton as="a" href="#projects" className="text-center">
              {t("cta1")} <span className="ml-2 font-mono">▶</span>
            </GoldButton>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 px-6 py-3 text-text-secondary hover:text-gold-400 transition-colors font-medium"
            >
              {t("cta2")}
              <ArrowRight
                size={16}
                className="transform transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="lg:w-2/5 relative"
        >
          <motion.div
            style={{ y: yImage }}
            className="relative w-full aspect-square max-w-[500px] mx-auto"
          >
            {/* Abstract animated border / grid since no photo is provided yet */}
            <div className="absolute inset-0 rounded-full border border-gold-500/20 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-gold-500/30 border-dashed animate-[spin_30s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 rounded-full border border-gold-400/10 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>

            <div className="absolute shadow-[0_0_80px_rgba(212,160,23,0.15)] bg-[#111] backdrop-blur-sm inset-12 rounded-full flex flex-col items-center justify-center border border-gold-500/10 overflow-hidden group">
              {/* @note: add your profile picture at public/images/profile.jpg */}
              <Image
                src="/images/profile.jpeg"
                alt="Matheus Henrique"
                fill
                className="object-cover transition-all duration-500 "
              />
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-1/4 glass-card border border-gold-500/20 px-4 py-3 rounded-xl flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></div>
              <div>
                <p className="text-text-primary font-bold text-lg leading-none">
                  7+
                </p>
                <p className="text-text-muted text-xs">Anos de XP</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -right-4 top-1/2 glass-card border border-gold-500/20 px-4 py-3 rounded-xl flex items-center gap-3"
            >
              <div className="text-gold-500">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <p className="text-text-primary font-bold text-lg leading-none">
                  20+
                </p>
                <p className="text-text-muted text-xs">Projetos Entregues</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex flex-col items-center gap-4"
      >
        <span className="font-mono text-xs text-text-muted rotate-90 origin-left translate-x-[4px] tracking-widest uppercase">
          Scroll
        </span>
        <motion.div className="w-[1px] h-16 bg-gold-500/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
