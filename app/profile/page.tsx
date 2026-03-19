import Link from "next/link";
import PhoneFrame from "@/components/PhoneFrame";
import TopBar from "@/components/TopBar";
import KarteCard from "@/components/KarteCard";
import RiskCircle from "@/components/RiskCircle";
import styles from "./page.module.css";

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.2l-4.2-4.2L3.4 13.4 9 19 21 7l-1.4-1.4z" fill="#FFF" /></svg>
);

export default function ProfilePage() {
  return (
    <PhoneFrame>
      <TopBar backHref="/" title="顧客リスト" subtitle="Customer list" />

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroAvatar}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://workers.paper.design/file-assets/01KKZQET66FNYA7WNFYE6FPAVG/01KKZRFGZHBGTB8X3WHA4WKJT9.png"
            alt="福国 花子"
            width={72}
            height={72}
          />
        </div>
        <div className={styles.heroName}>福国 花子</div>
        <div className={styles.heroMeta}>見込み客&ensp;・&ensp;前回訪問 3/12&ensp;・&ensp;港区</div>
      </div>

      {/* Progress */}
      <div className={styles.progressSection}>
        <div className={styles.progressHeader}>
          <span className={styles.progressLabel}>情報取得の進捗</span>
          <span className={styles.progressPct}>42%</span>
        </div>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} />
        </div>
      </div>

      {/* 顧客カルテ */}
      <div className={styles.karteSection}>
        <div className="section-title">顧客カルテ</div>

        <KarteCard
          icon={<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="#FFF" /><path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" fill="#FFF" /></svg>}
          iconColor="#0D9488" iconShadow="#0A7A70"
          title="基本情報" description="35歳 ・ 女性 ・ 会社員 ・ LINE連携済"
          badge={<span className="badge badge-teal">取得済</span>}
        />

        <KarteCard
          icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2" fill="#FFF" /><line x1="8" y1="8" x2="16" y2="8" stroke="#1CB0F6" strokeWidth="2" strokeLinecap="round" /><line x1="8" y1="12" x2="14" y2="12" stroke="#1CB0F6" strokeWidth="2" strokeLinecap="round" /><line x1="8" y1="16" x2="12" y2="16" stroke="#1CB0F6" strokeWidth="2" strokeLinecap="round" /></svg>}
          iconColor="#C41E2E" iconShadow="#9E1824"
          title="既契約情報" description="自社: 医療保険α ・ 他社: 未確認"
          badge={<span className="badge badge-red">3件未取得</span>}
        />

        <KarteCard
          icon={<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2l2.5 7H22l-6 4.5 2 7.5-6-4.5-6 4.5 2-7.5L2 9h7.5z" fill="#FFF" /></svg>}
          iconColor="#D97706" iconShadow="#B45F05"
          title="ニーズ情報"
          tags={[{ label: "スノボ", color: "#D97706", bg: "#FFF8EB" }, { label: "ドライブ", color: "#D97706", bg: "#FFF8EB" }]}
          badge={<span className="badge badge-amber">取得済</span>}
        />
      </div>

      {/* 5大リスク */}
      <div className={styles.riskSection}>
        <div className="section-title">5大リスク ヒアリング状況</div>
        <div className={styles.riskHint}>未完了のリスクをタップして記録しましょう</div>
        <div className={styles.riskRow}>
          <RiskCircle state="done" label="ケガ・病気" icon={<CheckIcon />} />
          <RiskCircle state="partial" label="障害" icon={<span style={{ color: "#FFF", fontWeight: 900, fontSize: 18 }}>△</span>} />
          <RiskCircle state="empty" label="介護" icon={
            <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="7" fill="none" stroke="#AFAFAF" strokeWidth="2" /><path d="M10 6v4" stroke="#AFAFAF" strokeWidth="2" strokeLinecap="round" /><circle cx="10" cy="13" r="1" fill="#AFAFAF" /></svg>
          } />
          <RiskCircle state="done" label="死亡・遺族" icon={<CheckIcon />} />
          <RiskCircle state="alert" label="老後資金" icon={<span style={{ color: "#FFF", fontWeight: 900, fontSize: 18 }}>×</span>} />
        </div>
      </div>

      <div style={{ flex: 1 }} />

      {/* CTA */}
      <div className={styles.ctaSection}>
        <Link href="/confetti">
          <button className={styles.ctaPrimary}>提案書を作成する</button>
        </Link>
        <div className={styles.ctaRow}>
          <div className={styles.ctaSecondary}>ライフコンパス</div>
          <div className={styles.ctaSecondary}>提案書作成</div>
          <div className={styles.ctaSecondary}>申込書</div>
        </div>
      </div>
    </PhoneFrame>
  );
}
