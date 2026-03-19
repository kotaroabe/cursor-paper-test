import Link from "next/link";
import styles from "./ClientCard.module.css";

type Status = "prospect" | "existing" | "followup";

interface ClientCardProps {
  href?: string;
  initial: string;
  name: string;
  status: Status;
  detail: string;
  date: string;
}

const STATUS_CONFIG: Record<Status, { label: string; bgColor: string; textColor: string; avatarBg: string; avatarShadow: string; borderColor: string; shadowColor: string; detailColor: string }> = {
  prospect: {
    label: "見込み客", bgColor: "#FFF0EF", textColor: "#E25D4E",
    avatarBg: "#9B8AAE", avatarShadow: "#7D6E90",
    borderColor: "#F0E8F5", shadowColor: "#F0E8F5", detailColor: "#9B8AAE",
  },
  existing: {
    label: "既存客", bgColor: "#E6FFFE", textColor: "#0D9488",
    avatarBg: "#0D9488", avatarShadow: "#0A7A70",
    borderColor: "#E6FFFE", shadowColor: "#E6FFFE", detailColor: "#0D9488",
  },
  followup: {
    label: "要フォロー", bgColor: "#FFF8EB", textColor: "#D97706",
    avatarBg: "#D97706", avatarShadow: "#B45F05",
    borderColor: "#FFF8EB", shadowColor: "#FFF8EB", detailColor: "#D97706",
  },
};

export default function ClientCard({ href, initial, name, status, detail, date }: ClientCardProps) {
  const cfg = STATUS_CONFIG[status];

  const card = (
    <div
      className={styles.card}
      style={{ borderColor: cfg.borderColor, boxShadow: `0 3px 0 ${cfg.shadowColor}` }}
    >
      <div
        className={styles.avatar}
        style={{ background: cfg.avatarBg, boxShadow: `0 3px 0 ${cfg.avatarShadow}` }}
      >
        {initial}
      </div>
      <div className={styles.body}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{name}</span>
          <span className="status-pill" style={{ background: cfg.bgColor, color: cfg.textColor }}>
            {cfg.label}
          </span>
        </div>
        <span className={styles.detail} style={{ color: cfg.detailColor }}>{detail}</span>
      </div>
      <div className={styles.meta}>
        <span className={styles.date}>{date}</span>
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path d="M6 4l4 4-4 4" fill="none" stroke="#AFAFAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} style={{ display: "block" }}>{card}</Link>;
  }
  return card;
}
