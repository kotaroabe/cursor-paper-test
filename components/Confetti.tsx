"use client";

import { useEffect, useRef } from "react";
import styles from "./Confetti.module.css";

const COLORS = ["#E25D4E", "#0D9488", "#D97706", "#3B82F6", "#9B8AAE", "#C41E2E"];

export default function Confetti() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    for (let i = 0; i < 60; i++) {
      const piece = document.createElement("div");
      piece.className = styles.piece;
      const w = 6 + Math.random() * 8;
      const h = 4 + Math.random() * 10;
      piece.style.width = `${w}px`;
      piece.style.height = `${h}px`;
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.top = "-20px";
      piece.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
      piece.style.animationDuration = `${2.5 + Math.random() * 2}s`;
      piece.style.animationDelay = `${Math.random() * 1.5}s`;
      if (Math.random() > 0.5) piece.style.borderRadius = "50%";
      el.appendChild(piece);
    }

    return () => {
      el.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className={styles.layer} />;
}
