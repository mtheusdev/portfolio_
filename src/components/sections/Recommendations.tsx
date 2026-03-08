"use client";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { RECOMMENDATIONS } from "@/lib/constants";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";

export default function Recommendations() {
  const t = useTranslations("recommendations");
  const locale = useLocale() as "pt" | "en";
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section
      id="recommendations"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <SectionTitle number="05" title={t("title")} />

          <div className="hidden md:flex gap-4 mb-12">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full border border-border-subtle text-gold-500 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full border border-border-subtle text-gold-500 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pt-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {RECOMMENDATIONS.map((rec, index) => (
            <GlassCard
              key={index}
              className="w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[500px] snap-center shrink-0 flex flex-col h-full"
            >
              <Quote size={40} className="text-gold-500/20 mb-6" />
              <p className="text-text-secondary font-light leading-relaxed mb-8 flex-1 text-lg">
                &quot;{rec.text[locale]}&quot;
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border-subtle">
                <div className="w-12 h-12 rounded-full bg-bg-primary border border-gold-500/30 flex items-center justify-center font-display text-xl text-gold-500">
                  {rec.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-text-primary font-medium">{rec.name}</h4>
                  <p className="text-text-muted text-sm">{rec.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CSS to hide scrollbar */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `,
          }}
        />
      </div>
    </section>
  );
}
