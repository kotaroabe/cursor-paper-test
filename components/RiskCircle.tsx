import type { ReactNode } from "react";
import styles from "./RiskCircle.module.css";

type RiskState = "done" | "partial" | "empty" | "alert";

interface RiskCircleProps {
  state: RiskState;
  icon: ReactNode;
  label: string;
}

const STATE_STYLES: Record<RiskState, { bg: string; border: string; shadow: string; labelColor: string }> = {
  done:    { bg: "#9B8AAE", border: "#7D6E90", shadow: "#7D6E90", labelColor: "#9B8AAE" },
  partial: { bg: "#D4C4E0", border: "#B5AAC8", shadow: "#B5AAC8", labelColor: "#9B8AAE" },
  empty:   { bg: "#E8E2EE", border: "#D4C4E0", shadow: "#D4C4E0", labelColor: "#B5AAC8" },
  alert:   { bg: "#C41E2E", border: "#9E1824", shadow: "#9E1824", labelColor: "#C41E2E" },
};

export default function RiskCircle({ state, icon, label }: RiskCircleProps) {
  const s = STATE_STYLES[state];
  return (
    <div className={styles.item}>
      <div
        className={styles.circle}
        style={{ background: s.bg, borderColor: s.border, boxShadow: `0 4px 0 ${s.shadow}` }}
      >
        {icon}
      </div>
      <div className={styles.label} style={{ color: s.labelColor }}>{label}</div>
    </div>
  );
}
