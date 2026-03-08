"use client";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { EXPERIENCES } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";

export default function Experience() {
  const t = useTranslations("experience");
  const locale = useLocale() as "pt" | "en";
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle number="02" title={t("title")} />

        <div className="relative mt-20" ref={containerRef}>
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border-subtle shrink-0 translate-x-[-1px]">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-gold-500 via-gold-400 to-transparent"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="flex flex-col md:flex-row relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 rounded-full bg-bg-primary border-2 border-gold-500 transform -translate-x-1/2 shadow-[0_0_15px_rgba(212,160,23,0.5)] z-20">
                    <div className="absolute inset-0 rounded-full animate-ping bg-gold-500 opacity-40"></div>
                  </div>

                  {/* Horizontal Connector Line (Desktop only) */}
                  <div
                    className="hidden md:block absolute top-[2.2rem] left-1/2 w-16 h-[2px] bg-gold-500/20"
                    style={{
                      transform: isEven ? "translateX(-100%)" : "translateX(0)",
                      transformOrigin: isEven ? "right" : "left",
                    }}
                  ></div>

                  {/* Empty Spacer for alternating layout on desktop */}
                  <div
                    className={`hidden md:block w-1/2 ${isEven ? "order-2" : "order-1"}`}
                  ></div>

                  {/* Card Content */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-16 order-1 text-left md:text-right" : "md:pl-16 order-2 text-left"}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="group"
                    >
                      <GlassCard className="text-left group-hover:translate-x-1">
                        <p className="font-mono text-gold-500 text-sm mb-2 opacity-80">
                          {exp.period[locale]}
                        </p>
                        <h3 className="text-xl text-text-primary font-medium mb-1">
                          {typeof exp.role === "string"
                            ? exp.role
                            : exp.role[locale]}
                        </h3>
                        <p className="text-lg text-text-secondary font-display mb-4">
                          {exp.company}
                        </p>

                        <div
                          className={`flex flex-col gap-2 mb-6 text-sm text-text-muted ${isEven ? "md:items-end" : "md:items-start"}`}
                        >
                          {exp.description[locale].map((item, i) => (
                            <p
                              key={i}
                              className="flex gap-2 items-start text-left"
                            >
                              <span className="text-gold-500/50 block mt-1">
                                •
                              </span>
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>

                        <div
                          className={`flex flex-wrap gap-2 text-xs font-mono text-gold-600/70 ${isEven ? "md:justify-end" : "md:justify-start"}`}
                        >
                          {exp.stack}
                        </div>

                        {exp.links && (
                          <div
                            className={`mt-6 flex gap-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}
                          >
                            {exp.links.map((link, i) => (
                              <a
                                href={link.url}
                                key={i}
                                target="_blank"
                                className="inline-flex items-center gap-0.5 text-xs uppercase tracking-wider text-gold-500 hover:text-gold-400 hover:underline group"
                              >
                                {link.label}
                                <ArrowUpRight
                                  size={14}
                                  className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                              </a>
                            ))}
                          </div>
                        )}
                      </GlassCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
