import PhoneFrame from "@/components/PhoneFrame";
import ClientCard from "@/components/ClientCard";
import styles from "./page.module.css";

type ClientData = {
  initial: string;
  name: string;
  status: "prospect" | "existing" | "followup";
  detail: string;
  date: string;
  href?: string;
};

const CLIENTS: ClientData[] = [
  { initial: "福", name: "福国 花子", status: "prospect", detail: "35歳 ・ 港区 ・ 情報取得 42%", date: "3/12", href: "/profile" },
  { initial: "田", name: "田中 太郎", status: "existing", detail: "42歳 ・ 渋谷区 ・ 更新予定 4/15", date: "3/10" },
  { initial: "鈴", name: "鈴木 美月", status: "followup", detail: "29歳 ・ 目黒区 ・ 情報取得 18%", date: "3/8" },
  { initial: "佐", name: "佐藤 健一", status: "existing", detail: "55歳 ・ 新宿区 ・ 更新予定 5/20", date: "3/5" },
  { initial: "山", name: "山本 結衣", status: "prospect", detail: "27歳 ・ 世田谷区 ・ 情報取得 8%", date: "3/1" },
];

const FILTERS = ["全て", "見込み客", "既存客", "要フォロー"];

export default function ClientListPage() {
  return (
    <PhoneFrame bg="fafafa">
      {/* Header */}
      <div className={styles.topBar}>
        <div>
          <h1 className={styles.heading}>顧客リスト</h1>
          <div className={styles.subtitle}>Customer List</div>
        </div>
        <div className="avatar-circle">N</div>
      </div>

      {/* Stats */}
      <div className={styles.statsRow}>
        <div className={styles.statCard} style={{ borderColor: "#F0E8F5", boxShadow: "0 3px 0 #F0E8F5" }}>
          <div className={styles.statNum} style={{ color: "#E25D4E" }}>12</div>
          <div className={styles.statLabel} style={{ color: "#9B8AAE" }}>見込み客</div>
        </div>
        <div className={styles.statCard} style={{ borderColor: "#E6FFFE", boxShadow: "0 3px 0 #E6FFFE" }}>
          <div className={styles.statNum} style={{ color: "#0D9488" }}>28</div>
          <div className={styles.statLabel} style={{ color: "#0D9488" }}>既存客</div>
        </div>
        <div className={styles.statCard} style={{ borderColor: "#FFF8EB", boxShadow: "0 3px 0 #FFF8EB" }}>
          <div className={styles.statNum} style={{ color: "#D97706" }}>5</div>
          <div className={styles.statLabel} style={{ color: "#D97706" }}>要フォロー</div>
        </div>
      </div>

      {/* Search */}
      <div className={styles.searchSection}>
        <div className={styles.searchBox}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="#AFAFAF" strokeWidth="1.5" />
            <path d="M11 11l3.5 3.5" stroke="#AFAFAF" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>名前、住所、ステータスで検索...</span>
        </div>
        <div className={styles.filterRow}>
          {FILTERS.map((f, i) => (
            <div key={f} className={`${styles.filterChip} ${i === 0 ? styles.active : ""}`}>{f}</div>
          ))}
        </div>
      </div>

      {/* Client list */}
      <div className={styles.clientList}>
        {CLIENTS.map((c) => (
          <ClientCard key={c.name} href={c.href} initial={c.initial} name={c.name} status={c.status} detail={c.detail} date={c.date} />
        ))}
      </div>

      <div className={styles.fab}>+</div>
    </PhoneFrame>
  );
}
