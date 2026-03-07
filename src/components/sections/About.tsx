"use client";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  GraduationCap,
  Languages,
} from "lucide-react";

export default function About() {
  // Since we don't have all translations defined in the json files in the prompt,
  // I will use some hardcoded text here or mixed concepts for this implementation.

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Large Decorative Number */}
        <div className="absolute top-0 right-0 font-display text-[20rem] leading-none text-gold-500/5 select-none pointer-events-none -z-10 -translate-y-1/4 translate-x-1/4">
          01
        </div>

        <SectionTitle number="01" title="Sobre mim" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          {/* Left Line Deco */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-500/20 to-transparent -translate-x-12"></div>

          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 text-text-secondary leading-relaxed font-light"
          >
            <p>
              Sou um{" "}
              <strong className="text-text-primary font-normal">
                Senior Full Stack & Mobile Engineer
              </strong>{" "}
              especializado na construção de soluções digitais de alto impacto.
              Com mais de 5 anos de experiência, minha jornada é guiada pela
              constante busca em unir{" "}
              <span className="text-gold-400">arquitetura escalável</span> com{" "}
              <span className="text-gold-400">
                experiências de usuário excepcionais
              </span>
              . Além de sistemas web e cloud, tenho paixão por criar e publicar{" "}
              <strong>aplicativos mobile na Google Play Store</strong>.
            </p>
            <p>
              Atualmente lidero o desenvolvimento de ecossistemas complexos,
              indo desde a concepção arquitetural em cloud até a implementação
              de interfaces imersivas no frontend e em mobile. Minha principal
              stack envolve{" "}
              <strong>React, React Native, Next.js, Node.js e AWS</strong>.
            </p>
            <p>
              Sou movido por desafios técnicos e fascinado pelas interseções
              entre engenharia de software e inteligência artificial aplicadas
              ao mundo real.
            </p>

            <a
              href="/cv.pdf"
              target="_blank"
              className="inline-flex mt-6 text-gold-500 hover:text-gold-400 font-medium group transition-colors"
            >
              Ver currículo completo
              <ArrowUpRight
                size={16}
                className="ml-1 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <GlassCard hoverEffect={false}>
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-xl text-gold-500">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-text-primary font-medium mb-1">
                    Formação Acadêmica
                  </h3>
                  <p className="text-text-secondary font-light">
                    UDESC — Bacharelado em Ciência da Computação
                  </p>
                  <p className="text-text-muted text-sm mt-1">2016 – 2023</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard hoverEffect={false}>
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-xl text-gold-500">
                  <Languages size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-text-primary font-medium mb-2">
                    Idiomas
                  </h3>
                  <div className="flex justify-between items-center text-text-secondary font-light">
                    <span>
                      Português{" "}
                      <span className="text-text-muted text-sm ml-2">
                        Nativo
                      </span>
                    </span>
                    <span>🇧🇷</span>
                  </div>
                  <div className="h-[1px] w-full bg-border-subtle my-2"></div>
                  <div className="flex justify-between items-center text-text-secondary font-light">
                    <span>
                      Inglês{" "}
                      <span className="text-text-muted text-sm ml-2">
                        Intermediário
                      </span>
                    </span>
                    <span>🇺🇸</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard hoverEffect={false}>
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-xl text-gold-500">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <h3 className="text-text-primary font-medium mb-2">
                    Interesses
                  </h3>
                  <div className="flex flex-wrap gap-2 text-text-secondary font-light text-sm">
                    <span className="bg-bg-secondary px-3 py-1 rounded-full border border-border-subtle">
                      Desenvolvimento Mobile
                    </span>
                    <span className="bg-bg-secondary px-3 py-1 rounded-full border border-border-subtle">
                      Arquitetura de Sistemas
                    </span>
                    <span className="bg-bg-secondary px-3 py-1 rounded-full border border-border-subtle">
                      IA Aplicada
                    </span>
                    <span className="bg-bg-secondary px-3 py-1 rounded-full border border-border-subtle">
                      Experiências Digitais
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
