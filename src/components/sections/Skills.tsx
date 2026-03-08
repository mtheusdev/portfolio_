"use client";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import TechBadge from "@/components/ui/TechBadge";
import { SKILLS } from "@/lib/constants";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("skills");
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle number="04" title={t("title")} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-16">
          {/* Group 1: Frontend (60% space -> 7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h3 className="font-display text-2xl text-text-primary mb-2 flex items-center gap-4">
              <span className="text-gold-500 font-mono text-xl">{"<"}</span>
              {t("frontend")}
              <span className="text-gold-500 font-mono text-xl">{">"}</span>
            </h3>

            <GlassCard hoverEffect={false} className="p-8 flex flex-col gap-6">
              {SKILLS.frontend.map((skill, index) => (
                <div key={skill.name} className="flex flex-col gap-2">
                  <div className="flex justify-between items-end font-mono text-sm">
                    <span className="text-text-primary">{skill.name}</span>
                    <span className="text-gold-500/70 text-xs">
                      {skill.level}
                    </span>
                  </div>

                  <div className="h-[2px] w-full bg-[rgba(212,160,23,0.1)] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 1,
                        delay: 0.1 * index,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              ))}
            </GlassCard>
          </div>

          {/* Group 2 & 3: Backend, Infra & Tools (40% space -> 5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            {/* Backend & Infra */}
            <div>
              <h3 className="font-display text-2xl text-text-primary mb-6 flex items-center gap-4">
                <span className="text-gold-500 font-mono text-xl">{"{"}</span>
                {t("backend")}
                <span className="text-gold-500 font-mono text-xl">{"}"}</span>
              </h3>

              <div className="flex flex-wrap gap-3">
                {SKILLS.backend.map((tech) => (
                  <TechBadge
                    key={tech}
                    name={tech}
                    className="text-sm px-4 py-2"
                  />
                ))}
              </div>
            </div>

            {/* Metodologias & Ferramentas */}
            <div>
              <h3 className="font-display text-2xl text-text-primary mb-6 flex items-center gap-4">
                <span className="text-gold-500 font-mono text-xl">{"["}</span>
                {t("tools")}
                <span className="text-gold-500 font-mono text-xl">{"]"}</span>
              </h3>

              <div className="flex flex-wrap gap-3">
                {SKILLS.tools.map((tool) => (
                  <TechBadge
                    key={tool}
                    name={tool}
                    className="text-sm px-4 py-2 opacity-80"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
