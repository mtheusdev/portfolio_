"use client";

import { EXPERIENCES, PERSONAL_INFO } from "@/lib/constants";
import { Globe, Mail, MapPin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function ResumePage() {
  const tAbout = useTranslations("about");
  const tExp = useTranslations("experience");
  const tProj = useTranslations("projects");
  const tSkills = useTranslations("skills");
  const locale = useLocale() as "pt" | "en";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 print:py-0 print:bg-white flex flex-col items-center">
      {/* Print Button (Hidden in Print Mode) */}
      <button
        onClick={handlePrint}
        className="mb-8 px-6 py-3 bg-gold-500 text-bg-primary font-medium rounded-full shadow-lg hover:bg-gold-400 transition-colors print:hidden flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect width="12" height="8" x="6" y="14"></rect>
        </svg>
        {locale === "pt" ? "Imprimir / Salvar PDF" : "Print / Save PDF"}
      </button>

      {/* A4 Document Container */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          @page { margin: 0; size: A4; }
          body { -webkit-print-color-adjust: exact; margin: 0; }
        }
      `,
        }}
      />
      <div className="w-full max-w-[210mm] min-h-[297mm] bg-white text-gray-900 mx-auto shadow-2xl print:shadow-none print:max-w-none print:w-full overflow-hidden flex flex-col font-dm-sans">
        {/* Header */}
        <header className="px-8 py-6 border-b border-gray-200 bg-gray-50 flex flex-col items-center text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight text-gray-900 mb-1">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-base text-gold-600 font-medium tracking-wide uppercase mb-3">
            Senior Full Stack Engineer & Tech Lead
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
            {PERSONAL_INFO.email && (
              <span className="flex items-center gap-1.5">
                <Mail size={12} /> {PERSONAL_INFO.email}
              </span>
            )}
            {PERSONAL_INFO.location && (
              <span className="flex items-center gap-1.5">
                <MapPin size={12} /> {PERSONAL_INFO.location}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Globe size={12} /> portfolio-gilt-delta-35.vercel.app
            </span>
          </div>
        </header>

        {/* Invisible ATS Keywords */}
        <div
          className="absolute opacity-0 select-none text-[0px] pointer-events-none w-0 h-0 overflow-hidden -z-50"
          aria-hidden="true"
        >
          {locale === "pt"
            ? "Motorista PX React React Native NextJS Front-end Frontend Mobile JavaScript HTML5 CSS3 Redux Context API Git APIs RESTful Ágil CI/CD Expo Apple Store Google Play performance acessibilidade lazy loading caching UI UX"
            : "Motorista PX React React Native NextJS Front-end Frontend Mobile JavaScript HTML5 CSS3 Redux Context API Git APIs RESTful Agile CI/CD Expo Apple Store Google Play performance accessibility lazy loading caching UI UX"}
        </div>

        {/* Content */}
        <div className="flex-1 px-8 py-4 flex flex-col gap-3">
          {/* Summary / About */}
          <section>
            <div className="mb-2">
              <h3 className="text-base font-display font-bold text-gray-900 border-b border-gold-500 inline-block mb-2 uppercase tracking-wider">
                {locale === "pt" ? "Sobre Mim" : "About Me"}
              </h3>
              <p className="text-[11px] text-gray-700 leading-snug">
                {locale === "pt"
                  ? "Senior Full Stack & Mobile Engineer com +7 anos de experiência e +20 projetos entregues, especializado na construção de soluções digitais end-to-end. Lidero e desenvolvo arquiteturas escaláveis em nuvem, APIs robustas (Node.js/NestJS) e interfaces de alta performance no frontend (Next.js/React). Experiência sólida em transformar requisitos de negócios em produtos completos."
                  : "Senior Full Stack & Mobile Engineer with +7 years of experience and +20 delivered projects, specialized in building end-to-end digital solutions. I lead and develop scalable cloud architectures, robust APIs (Node.js/NestJS), and high-performance interfaces on frontend (Next.js/React). Solid experience in transforming business requirements into complete products."}
              </p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-base font-display font-bold text-gray-900 border-b border-gold-500 inline-block mb-3 uppercase tracking-wider">
              {tExp("title")}
            </h3>
            <div className="space-y-4">
              {EXPERIENCES.slice(0, 5).map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {typeof exp.role === "string"
                        ? exp.role
                        : exp.role[locale]}
                    </h4>
                    <span className="text-[10px] sm:text-xs font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {exp.period[locale]}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-gold-600 mb-1">
                    {exp.company}
                  </div>
                  <p className="text-[11px] text-gray-700 leading-snug mb-0.5">
                    {Array.isArray(exp.description[locale])
                      ? exp.description[locale].join(" • ")
                      : exp.description[locale]}
                  </p>
                  <p className="text-xs text-gray-500 font-mono">
                    <span className="font-semibold text-gray-600">Stack:</span>{" "}
                    {Array.isArray(exp.stack)
                      ? exp.stack.join(" · ")
                      : exp.stack}
                  </p>
                </div>
              ))}

              <div className="flex items-center gap-4 mt-2">
                <div className="flex-1 border-t border-gray-200 border-dashed"></div>
                <span className="text-xs text-gray-500 italic font-medium">
                  {locale === "pt"
                    ? "+ Experiências Adicionais Anteriores"
                    : "+ Previous Additional Experiences"}
                </span>
                <div className="flex-1 border-t border-gray-200 border-dashed"></div>
              </div>
            </div>
          </section>

          {/* Education & Skills Grid */}
          <div className="grid grid-cols-2 gap-4 mt-1">
            <section>
              <h3 className="text-sm font-display font-bold text-gray-900 border-b border-gold-500 inline-block mb-2 uppercase tracking-wider">
                {tAbout("educationTitle")}
              </h3>
              <div>
                <h4 className="font-semibold text-gray-900 text-xs">
                  {tAbout("educationDegree")}
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Universidade do Estado de Santa Catarina (UDESC)
                </p>
              </div>

              <h3 className="text-sm font-display font-bold text-gray-900 border-b border-gold-500 inline-block mb-2 mt-4 uppercase tracking-wider">
                {tAbout("languagesTitle")}
              </h3>
              <ul className="text-xs text-gray-700 space-y-0.5">
                <li>
                  <strong className="font-medium mr-1">
                    {tAbout("portuguese")}:
                  </strong>{" "}
                  {tAbout("native")}
                </li>
                <li>
                  <strong className="font-medium mr-1">
                    {tAbout("english")}:
                  </strong>{" "}
                  {tAbout("intermediate")}
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-display font-bold text-gray-900 border-b border-gold-500 inline-block mb-2 uppercase tracking-wider">
                {tSkills("title")}
              </h3>
              <div className="space-y-2">
                <div>
                  <h4 className="text-[10px] font-semibold text-gray-900 uppercase tracking-widest mb-0.5">
                    {tSkills("frontend")}
                  </h4>
                  <p className="text-[11px] text-gray-700 font-light leading-snug">
                    React, Next.js, React Native, Expo, Redux, Context API,
                    TypeScript, HTML5, SASS/CSS3, Tailwind, Acessibilidade,
                    Performance UI/UX
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-gray-900 uppercase tracking-widest mb-0.5">
                    {tSkills("backend")}
                  </h4>
                  <p className="text-[11px] text-gray-700 font-light leading-snug">
                    Node.js, NestJS, Go, PHP/Laravel, PostgreSQL, MongoDB, APIs
                    RESTful, Integrações de Sistemas, Clean Architecture, SOLID
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-gray-900 uppercase tracking-widest mb-0.5">
                    {tSkills("tools")}
                  </h4>
                  <p className="text-[11px] text-gray-700 font-light leading-snug">
                    {locale === "pt"
                      ? "AWS, GCP, Firebase, Docker, CI/CD, Metodologias Ágeis (Scrum/Kanban), Git, Figma, Publicação de Apps (App Store/Google Play)"
                      : "AWS, GCP, Firebase, Docker, CI/CD, Agile (Scrum/Kanban), Git, Figma, App Store & Google Play Publishing"}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
