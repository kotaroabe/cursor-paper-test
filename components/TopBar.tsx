import Link from "next/link";
import styles from "./TopBar.module.css";

interface TopBarProps {
  backHref?: string;
  title: string;
  subtitle?: string;
}

export default function TopBar({ backHref, title, subtitle }: TopBarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        {backHref && (
          <Link href={backHref} className={styles.backBtn}>
            ←
          </Link>
        )}
        <span className={styles.title}>{title}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>
      <div className="avatar-circle">N</div>
    </div>
  );
}
