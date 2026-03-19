import Link from "next/link";
import PhoneFrame from "@/components/PhoneFrame";
import Confetti from "@/components/Confetti";
import styles from "./page.module.css";

export default function ConfettiPage() {
  return (
    <PhoneFrame>
      <Confetti />

      <div className={styles.content}>
        <div className={styles.checkCircle}>
          <svg width="48" height="48" viewBox="0 0 48 48">
            <path d="M14 24l8 8 14-16" fill="none" stroke="#FFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className={styles.title}>提案書を作成しました！</div>
        <div className={styles.subtitle}>
          福国 花子さんの提案書が<br />準備できました
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryProfile}>
            <div className={styles.summaryAvatar}>花</div>
            <div>
              <div className={styles.summaryName}>福国 花子</div>
              <div className={styles.summaryMeta}>見込み客 ・ 35歳 ・ 港区</div>
            </div>
          </div>
          <div className={styles.tagRow}>
            <span className={`${styles.tag} ${styles.tagTeal}`}>医療保険</span>
            <span className={`${styles.tag} ${styles.tagBlue}`}>死亡保険</span>
            <span className={`${styles.tag} ${styles.tagAmber}`}>年金プラン</span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Link href="/profile">
          <button className={styles.btnPrimary}>提案書を確認する</button>
        </Link>
        <Link href="/">
          <button className={styles.btnOutline}>顧客リストに戻る</button>
        </Link>
      </div>
    </PhoneFrame>
  );
}
