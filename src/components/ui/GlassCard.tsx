import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={twMerge(
        clsx(
          "glass-card rounded-2xl p-6 md:p-8",
          hoverEffect && "hover:-translate-y-1",
          className,
        ),
      )}
    >
      {children}
    </motion.div>
  );
}
