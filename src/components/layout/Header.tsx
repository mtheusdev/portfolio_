"use client";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#experience", label: t("experience") },
    { href: "#projects", label: t("projects") },
    { href: "#skills", label: t("skills") },
    { href: "#contact", label: t("contact") },
  ];

  const handleLocaleChange = () => {
    const nextLocale = locale === "en" ? "pt" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-[rgba(8,8,8,0.85)] backdrop-blur-[20px] border-b border-[rgba(212,160,23,0.1)] py-4"
            : "bg-transparent py-6",
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-7xl">
          {/* Logo */}
          <Link href="/" className="group relative">
            <span className="font-display text-2xl font-semibold tracking-wider text-text-primary">
              MH
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase font-light text-text-secondary hover:text-gold-400 relative group transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full block"></span>
              </a>
            ))}

            <button
              onClick={handleLocaleChange}
              className="text-xs uppercase tracking-widest text-text-secondary hover:text-gold-400"
            >
              {locale === "en" ? "PT" : "EN"}
            </button>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs uppercase tracking-widest"
            >
              {t("downloadCV")}
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gold-500"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[rgba(10,10,10,0.95)] backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 text-gold-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-3xl text-text-primary hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="w-12 h-[1px] bg-[rgba(212,160,23,0.3)] my-4" />
              <button
                onClick={() => {
                  handleLocaleChange();
                  setMobileMenuOpen(false);
                }}
                className="text-sm uppercase tracking-widest text-gold-400"
              >
                Switch to {locale === "en" ? "PT" : "EN"}
              </button>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm mt-4"
              >
                {t("downloadCV")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
