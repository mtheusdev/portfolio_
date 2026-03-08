"use client";
import { usePathname } from "@/i18n/routing";
import { PERSONAL_INFO } from "@/lib/constants";
import { Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations("footer");

  if (pathname.includes("/resume")) return null;
  return (
    <footer className="relative border-t border-[rgba(212,160,23,0.1)] py-8 mt-24">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-light text-text-secondary order-2 md:order-1">
          {t("madeWith")}
        </p>

        <p className="text-sm font-light text-text-muted order-1 md:order-2 text-center">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. {t("craftedWith")}
        </p>

        <div className="flex gap-4 order-3 md:order-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-gold-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-gold-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
