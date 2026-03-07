"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHoveringLink(true);
        setIsHoveringText(false);
      } else if (
        ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "strong"].includes(
          target.tagName.toLowerCase(),
        )
      ) {
        setIsHoveringText(true);
        setIsHoveringLink(false);
      } else {
        setIsHoveringLink(false);
        setIsHoveringText(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          borderStyle: "solid",
        }}
        animate={{
          width: isHoveringLink ? 60 : isHoveringText ? 4 : 40,
          height: isHoveringLink ? 60 : isHoveringText ? 30 : 40,
          borderRadius: isHoveringText ? "2px" : "50%",
          borderColor: isHoveringLink
            ? "rgba(212, 160, 23, 0.8)"
            : "rgba(212, 160, 23, 1)",
          borderWidth: isHoveringText ? "0px" : "1px",
          backgroundColor: isHoveringText
            ? "rgba(212, 160, 23, 1)"
            : "transparent",
          opacity: 1,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.15 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gold-400 rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHoveringLink || isHoveringText ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.15 }}
      />
    </>
  );
}
