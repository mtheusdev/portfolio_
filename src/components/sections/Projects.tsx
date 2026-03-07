"use client";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import TechBadge from "@/components/ui/TechBadge";
import { PROJECTS } from "@/lib/constants";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const MOBILE_IDS = [
  "quem-sou-eu-biblico",
  "sorteador-de-letras",
  "contador-treinos",
];

function PhoneMockup({
  projectId,
  hasPlayStoreLink,
}: {
  projectId: string;
  hasPlayStoreLink: boolean;
}) {
  return (
    <div className="flex items-center justify-center py-6 bg-gradient-to-b from-[#0d0d0d] to-[#111]">
      {/* Phone shell */}
      <div className="relative w-[110px] h-[200px] rounded-[22px] border-2 border-gold-500/30 bg-[#0a0a0a] shadow-[0_0_30px_rgba(212,160,23,0.12)] flex flex-col overflow-hidden">
        {/* Top notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[10px] bg-[#0a0a0a] z-10 rounded-b-md border-b border-x border-gold-500/20" />
        {/* Screen area */}
        <div className="flex-1 bg-gradient-to-br from-[#141414] to-[#1a1a1a] flex items-center justify-center">
          <span className="font-mono text-[9px] text-gold-500/40 text-center leading-relaxed px-2">
            [{projectId}]
          </span>
        </div>
        {/* Home bar */}
        <div className="h-5 bg-[#0a0a0a] flex items-center justify-center border-t border-gold-500/10">
          <div className="w-8 h-1 rounded-full bg-gold-500/20" />
        </div>
      </div>

      {/* Play Store badge — only for apps published on the store */}
      {hasPlayStoreLink && (
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-[#111] border border-gold-500/20 rounded-full px-2 py-0.5">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-gold-500"
          >
            <path d="M3.18 23.76 A1.5 1.5 0 0 1 1.5 22.5V1.5A1.5 1.5 0 0 1 3.18.24l18.46 10.5a1.5 1.5 0 0 1 0 2.52z" />
          </svg>
          <span className="text-[8px] font-mono text-gold-500/80">
            Play Store
          </span>
        </div>
      )}
    </div>
  );
}

function WebPreview({ projectId }: { projectId: string }) {
  return (
    <div className="relative w-full aspect-video overflow-hidden border-b border-border-subtle bg-bg-secondary flex items-center justify-center text-text-muted font-mono text-sm">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#111] to-[#1a1a1a] z-0" />
      <span className="z-10 opacity-50 text-gold-500/50 text-xs">
        [{projectId}_preview]
      </span>
      <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-500 z-20" />
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(PROJECTS.map((p) => p.category.pt))),
  ];

  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.pt === filter);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-[rgba(10,10,10,0.5)]"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle number="03" title="Projetos" />

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={clsx(
                "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border backdrop-blur-md",
                filter === cat
                  ? "bg-gold-500/10 text-gold-400 border-gold-500/50 shadow-[0_0_15px_rgba(212,160,23,0.15)]"
                  : "bg-transparent text-text-muted border-border-subtle hover:border-gold-500/30 hover:text-text-secondary",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isMobile = MOBILE_IDS.includes(project.id);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full"
                >
                  <GlassCard className="h-full flex flex-col p-0 overflow-hidden relative">
                    {/* Preview Area */}
                    {isMobile ? (
                      <div className="relative border-b border-border-subtle">
                        <PhoneMockup
                          projectId={project.id}
                          hasPlayStoreLink={!!project.link}
                        />
                      </div>
                    ) : (
                      <WebPreview projectId={project.id} />
                    )}

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-gold-500 mb-2">
                        {project.category.pt} · {project.year}
                      </span>

                      <h3 className="font-display text-lg md:text-xl text-text-primary mb-2">
                        {project.title}
                      </h3>

                      <p className="text-text-secondary font-light text-xs md:text-sm leading-relaxed mb-4 flex-1">
                        {project.description.pt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.stack.map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4 mt-auto">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            className="flex items-center gap-1.5 text-xs text-gold-500 hover:text-gold-400 font-medium transition-colors"
                          >
                            {isMobile && project.link
                              ? "Ver na Play Store"
                              : "Ver projeto"}
                            <ArrowUpRight size={13} />
                          </a>
                        )}
                        {!project.link && (
                          <span className="text-xs text-text-muted">
                            Repositório privado
                          </span>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
