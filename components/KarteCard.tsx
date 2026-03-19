import type { ReactNode } from "react";
import styles from "./KarteCard.module.css";

interface KarteCardProps {
  icon: ReactNode;
  iconColor: string;
  iconShadow: string;
  title: string;
  description?: string;
  tags?: { label: string; color: string; bg: string }[];
  badge: ReactNode;
}

export default function KarteCard({ icon, iconColor, iconShadow, title, description, tags, badge }: KarteCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon} style={{ background: iconColor, boxShadow: `0 3px 0 ${iconShadow}` }}>
        {icon}
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        {description && <div className={styles.desc}>{description}</div>}
        {tags && (
          <div className={styles.tags}>
            {tags.map((t) => (
              <span key={t.label} className={styles.tag} style={{ background: t.bg, color: t.color }}>
                {t.label}
              </span>
            ))}
          </div>
        )}
      </div>
      {badge}
    </div>
  );
}
