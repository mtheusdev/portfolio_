"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { PERSONAL_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

const WHATSAPP_NUMBER = "5547991936552";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá Matheus! Vi o seu portfólio e gostaria de conversar.",
);

export default function Contact() {
  const t = useTranslations("contact");
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionTitle number="06" title={t("title")} />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Panel */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-3xl md:text-5xl text-text-primary leading-tight">
              {t("subtitle")}
            </h3>
            <p className="text-text-secondary font-light text-lg">
              {t("description")}
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-2 mt-4">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-500 mb-2">
                {t("socials")}
              </span>
              {[
                { label: "LinkedIn", href: PERSONAL_INFO.linkedin },
                { label: "GitHub", href: PERSONAL_INFO.github },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-secondary hover:text-gold-400 flex items-center justify-between group border-b border-border-subtle pb-2 max-w-xs transition-colors"
                >
                  {item.label}
                  <ArrowUpRight
                    size={16}
                    className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Panel – Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group flex items-center gap-5 p-6 rounded-2xl border border-border-subtle bg-bg-card hover:border-gold-500/40 hover:bg-bg-card-hover transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,160,23,0.08)]"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 group-hover:bg-gold-500/15 transition-colors">
                {/* Mail icon – inline SVG to avoid Lucide issues */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold-400"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold-500">
                  Email
                </span>
                <span className="text-text-primary font-medium truncate">
                  {PERSONAL_INFO.email}
                </span>
                <span className="text-text-muted text-xs">
                  {t("emailResponse")}
                </span>
              </div>
              <ArrowUpRight
                size={18}
                className="ml-auto text-text-muted group-hover:text-gold-400 transition-colors shrink-0"
              />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-border-subtle bg-bg-card hover:border-green-500/40 hover:bg-bg-card-hover transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.06)]"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/15 transition-colors">
                {/* WhatsApp icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-green-400"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-green-500">
                  WhatsApp
                </span>
                <span className="text-text-primary font-medium">
                  +55 (47) 99193-6552
                </span>
                <span className="text-text-muted text-xs">
                  {t("whatsappResponse")}
                </span>
              </div>
              <ArrowUpRight
                size={18}
                className="ml-auto text-text-muted group-hover:text-green-400 transition-colors shrink-0"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
