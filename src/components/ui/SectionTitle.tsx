import { motion } from "framer-motion";

interface SectionTitleProps {
  number?: string;
  title: string;
}

export default function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4 mb-12"
    >
      {number && (
        <span className="font-mono text-gold-500/50 text-xl tracking-widest">
          {number}.
        </span>
      )}
      <h2 className="font-display tracking-wide text-3xl md:text-5xl text-text-primary">
        {title}
      </h2>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-gold-500/20 to-transparent ml-4"></div>
    </motion.div>
  );
}
