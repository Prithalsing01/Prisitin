"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 800,
  direction = "up",
}: RevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); observer.disconnect(); };
  }, []);

  const initial: React.CSSProperties = {
    opacity: 0,
    transform:
      direction === "up"    ? "translateY(28px)"  :
      direction === "down"  ? "translateY(-28px)" :
      direction === "left"  ? "translateX(28px)"  :
      direction === "right" ? "translateX(-28px)" :
      "none",
  };

  const style: React.CSSProperties = {
    transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1), transform ${duration}ms cubic-bezier(0.16,1,0.3,1)`,
    transitionDelay: `${delay}ms`,
    ...(visible ? { opacity: 1, transform: "none" } : initial),
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
