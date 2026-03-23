"use client";

import { useState } from "react";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

// ─── Tokens (NRI KAONA design system) ─────────────────────────────────────────
const C = {
  blue: "#1A52A6",
  blueLight: "#EBF1FB",
  black: "#111111",
  text: "#171717",
  label: "#6B7280",
  caption: "#9CA3AF",
  disabled: "#D1D5DB",
  pageBg: "#F3F4F6",
  cardBg: "#F9FAFB",
  white: "#FFFFFF",
  border: "#E5E7EB",
  rowDivider: "#F3F4F6",
  successBg: "#DCFCE7",
  successText: "#16A34A",
} as const;

type Tab = "basic" | "shinjosho" | "skills";

// ─── Data ──────────────────────────────────────────────────────────────────────
const BASIC_L = [
  { l: "社員番号", v: "M0001", bold: true },
  { l: "従業員番号", v: "10133548" },
  { l: "氏名", v: "松本 恒一", bold: true },
  { l: "氏名（かな）", v: "まつもと　こういち" },
  { l: "氏名（ローマ字）", v: "Matumoto Kouiti" },
  { l: "役職", v: "課長" },
  { l: "入社日", v: "19760401" },
  { l: "年次（舎い年次）", v: "76B" },
  { l: "性別", v: "男" },
  { l: "年齢", v: "63" },
  { l: "生年月日", v: "1940/11/11" },
];
const BASIC_R = [
  { l: "会社名", v: "株式会社サンプル" },
  { l: "所属本部", v: "管理本部" },
  { l: "所属部", v: "経理財務部" },
  { l: "所属グループ（課）", v: "財務課" },
  { l: "部長", v: "部長　名前" },
  { l: "課（案）長/GM", v: "GM　名前" },
  { l: "キャリアフィールド", v: "キャリアフィールド名" },
  { l: "本部役割区分", v: "役割区分" },
  { l: "メールアドレス", v: "koichi.matsumoto@example.co.jp", link: true },
  { l: "等級", v: "等級B" },
  { l: "人事メモ記号", v: "☆" },
];

const SKILLS = [
  { skill: "AWS", score: 4.4 },
  { skill: "Java", score: 4.6 },
  { skill: "React", score: 4.1 },
  { skill: "SQL", score: 4.3 },
  { skill: "Docker", score: 3.8 },
  { skill: "設計力", score: 4.2 },
  { skill: "リーダーシップ", score: 3.9 },
];

const chartConfig: ChartConfig = { score: { label: "スコア", color: C.blue } };

const RAIL_TABS: { id: Tab | null; label: string }[] = [
  { id: "basic", label: "基本情報" },
  { id: "shinjosho", label: "身上書" },
  { id: "skills", label: "スキル" },
  { id: null, label: "キャリア" },
  { id: null, label: "採用時情報" },
  { id: null, label: "勤怠情報" },
  { id: null, label: "自己申告" },
  { id: null, label: "人事記録" },
  { id: null, label: "審査書類" },
  { id: null, label: "転入時面談" },
];

// ─── Shared primitives ─────────────────────────────────────────────────────────
function KvRow({
  label,
  children,
  link,
}: {
  label: string;
  children: React.ReactNode;
  link?: boolean;
}) {
  return (
    <div
      className="flex py-2"
      style={{ borderBottom: `1px solid ${C.rowDivider}` }}
    >
      <span
        className="shrink-0 text-[13px] font-medium"
        style={{ width: 150, color: C.label }}
      >
        {label}
      </span>
      <span
        className="text-[13px]"
        style={{ color: link ? C.blue : C.text }}
      >
        {children}
      </span>
    </div>
  );
}

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-lg bg-white"
      style={{ border: `1px solid ${C.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
    >
      <div
        className="px-5 pt-4 pb-3 text-[13px] font-bold"
        style={{ color: C.blue, borderBottom: `1px solid ${C.border}` }}
      >
        {title}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function TwoCol({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-6">
      {children}
    </div>
  );
}

function Col({ children }: { children: React.ReactNode }) {
  return <div className="min-w-0 flex-1">{children}</div>;
}

function Divider() {
  return <div className="w-px shrink-0" style={{ background: C.rowDivider }} />;
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function NriKaonaPrototype() {
  const [tab, setTab] = useState<Tab>("basic");

  const tabLabel: Record<Tab, string> = {
    basic: "基本情報",
    shinjosho: "身上書",
    skills: "スキル",
  };

  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden"
      style={{ background: C.pageBg, fontSize: 13 }}
    >
      {/* ── Top app bar ──────────────────────────────────────────────────────── */}
      <header
        className="flex h-14 shrink-0 items-center gap-4 bg-white px-5"
        style={{ borderBottom: `1px solid ${C.border}` }}
      >
        {/* Brand */}
        <div
          className="flex items-center gap-2 pr-5"
          style={{ borderRight: `1px solid ${C.border}` }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              width: 16,
              height: 16,
              flexShrink: 0,
            }}
          >
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                style={{ background: C.blue, borderRadius: 1, width: 7, height: 7 }}
              />
            ))}
          </div>
          <div>
            <div className="text-[13px] font-bold" style={{ color: C.black }}>
              人材情報システム
            </div>
            <div className="text-[9px] tracking-widest" style={{ color: C.caption }}>
              HUMAN RESOURCE
            </div>
          </div>
        </div>

        {/* Global nav */}
        <nav className="flex gap-0.5">
          {["ホーム", "検索", "管理", "その他"].map((n, i) => (
            <button
              key={n}
              type="button"
              className="rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors"
              style={{
                background: i === 0 ? C.pageBg : "transparent",
                color: i === 0 ? "#374151" : C.label,
              }}
            >
              {n}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-3">
          <span
            className="rounded-full px-3 py-1 text-[11px]"
            style={{
              border: `1px solid ${C.border}`,
              background: C.pageBg,
              color: C.label,
            }}
          >
            検索結果
          </span>
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white"
            style={{ background: C.blue }}
          >
            HK
          </div>
        </div>
      </header>

      {/* ── Body ─────────────────────────────────────────────────────────────── */}
      <div className="flex min-h-0 flex-1 overflow-hidden">

        {/* ── Profile rail ─────────────────────────────────────────────────── */}
        <aside
          className="flex w-[200px] shrink-0 flex-col overflow-hidden bg-white"
          style={{ borderRight: `1px solid ${C.border}` }}
        >
          {/* Avatar + name */}
          <div
            className="flex flex-col items-center px-4 py-5"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <div
              className="mb-2.5 flex h-[60px] w-[60px] items-center justify-center rounded-full text-[22px] font-bold"
              style={{ background: "#CBD5E1", color: "#4B5563" }}
            >
              松
            </div>
            <div className="text-[15px] font-bold" style={{ color: C.black }}>
              松本 恒一
            </div>
            <div className="mt-0.5 text-[11px]" style={{ color: C.label }}>
              M0001
            </div>
            <div className="text-[11px]" style={{ color: C.label }}>
              経理財務部
            </div>
          </div>

          {/* Tab list */}
          <nav className="flex flex-col gap-0.5 overflow-y-auto p-2">
            {RAIL_TABS.map((item) => {
              const active = item.id !== null && tab === item.id;
              const clickable = item.id !== null;
              return (
                <button
                  key={item.label}
                  type="button"
                  disabled={!clickable}
                  onClick={() => item.id && setTab(item.id)}
                  className="w-full rounded-md py-[7px] text-left text-[13px] transition-colors"
                  style={{
                    paddingLeft: active ? 9 : 12,
                    paddingRight: 12,
                    background: active ? C.blueLight : "transparent",
                    borderLeft: active
                      ? `3px solid ${C.blue}`
                      : "3px solid transparent",
                    color: active ? C.blue : C.label,
                    fontWeight: active ? 600 : 400,
                    cursor: clickable ? "pointer" : "default",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ── Main content ─────────────────────────────────────────────────── */}
        <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
          {/* Breadcrumb */}
          <div
            className="flex h-10 shrink-0 items-center gap-1.5 bg-white px-5"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <span className="text-[11px]" style={{ color: C.caption }}>ホーム</span>
            <span className="text-[11px]" style={{ color: C.disabled }}>/</span>
            <span className="text-[11px]" style={{ color: C.caption }}>検索</span>
            <span className="text-[11px]" style={{ color: C.disabled }}>/</span>
            <span className="text-[11px] font-semibold" style={{ color: "#374151" }}>松本 恒一</span>
            <span className="text-[11px]" style={{ color: C.disabled }}>/</span>
            <span className="text-[11px] font-semibold" style={{ color: C.blue }}>
              {tabLabel[tab]}
            </span>
            {tab === "shinjosho" && (
              <div className="ml-auto flex gap-2">
                <button
                  type="button"
                  className="rounded-md px-2.5 py-1 text-[11px]"
                  style={{ border: `1px solid ${C.border}`, color: "#374151" }}
                >
                  過去変更日
                </button>
                <button
                  type="button"
                  className="rounded-md px-2.5 py-1 text-[11px] font-semibold text-white"
                  style={{ background: C.blue }}
                >
                  編集
                </button>
              </div>
            )}
          </div>

          {/* Skills sub-tabs */}
          {tab === "skills" && (
            <div
              className="flex h-11 shrink-0 items-end bg-white px-5"
              style={{ borderBottom: `1px solid ${C.border}` }}
            >
              {["能力チャート", "資格情報・速学情報", "講座受講情報", "対外発表"].map((t, i) => (
                <button
                  key={t}
                  type="button"
                  className="px-4 py-2 text-[13px] transition-colors"
                  style={{
                    color: i === 0 ? C.blue : C.label,
                    fontWeight: i === 0 ? 600 : 400,
                    borderBottom: i === 0 ? `2px solid ${C.blue}` : "2px solid transparent",
                    marginBottom: -1,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          )}

          {/* Scrollable content */}
          <div className="min-h-0 flex-1 overflow-y-auto p-5">

            {/* ── 基本情報 ─────────────────────────────────────────────────── */}
            {tab === "basic" && (
              <div className="space-y-4" style={{ maxWidth: 1100 }}>
                {/* Main card */}
                <div
                  className="rounded-lg bg-white p-5"
                  style={{ border: `1px solid ${C.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h1 className="text-base font-bold" style={{ color: C.black }}>
                      基本情報
                    </h1>
                    <button
                      type="button"
                      className="rounded-md px-3.5 py-1.5 text-xs font-medium"
                      style={{ border: `1px solid ${C.border}`, color: "#374151" }}
                    >
                      編集
                    </button>
                  </div>
                  <div className="flex gap-8">
                    {/* Left col */}
                    <div className="min-w-0 flex-1">
                      {BASIC_L.map((row) => (
                        <KvRow key={row.l} label={row.l}>
                          <span className={row.bold ? "font-semibold" : ""}>{row.v}</span>
                        </KvRow>
                      ))}
                    </div>
                    {/* Right col */}
                    <div className="min-w-0 flex-1">
                      {BASIC_R.map((row) => (
                        <KvRow key={row.l} label={row.l} link={row.link}>
                          {row.v}
                        </KvRow>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stat cards */}
                <div className="flex gap-4">
                  {[
                    { title: "勤続年数", sub: "在籍期間", value: "8年9ヶ月", big: true },
                    { title: "総合評価", sub: "直近評価", value: "S", big: false },
                  ].map((s) => (
                    <div
                      key={s.title}
                      className="flex-1 rounded-lg bg-white p-4"
                      style={{ border: `1px solid ${C.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                    >
                      <div
                        className="mb-2 pb-2 text-xs font-bold"
                        style={{ borderBottom: `1px solid ${C.border}`, color: C.black }}
                      >
                        {s.title}
                      </div>
                      <div className="text-[10px] font-semibold" style={{ color: C.blue }}>
                        {s.sub}
                      </div>
                      <div
                        className="mt-1 font-extrabold leading-none"
                        style={{
                          fontSize: s.big ? 36 : 48,
                          color: C.black,
                        }}
                      >
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── 身上書 ───────────────────────────────────────────────────── */}
            {tab === "shinjosho" && (
              <div className="space-y-3" style={{ maxWidth: 1100 }}>
                <SectionCard title="社員・所属情報">
                  <TwoCol>
                    <Col>
                      <KvRow label="社員番号">M0001</KvRow>
                      <KvRow label="従業員番号">10133548</KvRow>
                      <KvRow label="氏名">
                        <span className="font-semibold">松本 恒一</span>
                      </KvRow>
                      <KvRow label="氏名（かな）">まつもとこういち</KvRow>
                      <KvRow label="氏名（ローマ字）">Matumoto Kouiti</KvRow>
                      <KvRow label="メールアドレス" link>
                        koichi.matsumoto@example.co.jp
                      </KvRow>
                      <KvRow label="課（案）長/GM">
                        <span className="italic" style={{ color: C.caption }}>未入力</span>
                      </KvRow>
                    </Col>
                    <Divider />
                    <Col>
                      <KvRow label="性別">男</KvRow>
                      <KvRow label="年齢">85</KvRow>
                      <KvRow label="所属名">経理財務部</KvRow>
                      <KvRow label="所属本部">管理本部</KvRow>
                      <KvRow label="入社日">19760401</KvRow>
                      <KvRow label="年次">76B</KvRow>
                      <KvRow label="役職名">課長</KvRow>
                      <KvRow label="等級">等級B</KvRow>
                    </Col>
                  </TwoCol>
                </SectionCard>

                <SectionCard title="本人情報・現住所">
                  <TwoCol>
                    <Col>
                      <KvRow label="生年月日">1984-05-12</KvRow>
                      <KvRow label="戸籍氏名（漢字）">東京都</KvRow>
                      <KvRow label="戸籍氏名（かな）">とうきょうと</KvRow>
                      <KvRow label="現住所 〒">100-0001</KvRow>
                      <KvRow label="住所">東京都千代田区千代田 1-1-1</KvRow>
                      <KvRow label="住所（かな）">とうきょうとちよだくちよだ 1-1-1</KvRow>
                      <KvRow label="住居区分">持家</KvRow>
                    </Col>
                    <Divider />
                    <Col>
                      <KvRow label="婚姻日">2012-06-15</KvRow>
                      <KvRow label="電話番号">03-1111-0001</KvRow>
                      <KvRow label="住所変更日">2024-04-01</KvRow>
                      <KvRow label="緊急連絡先">090-1111-0001</KvRow>
                      <KvRow label="緊急連絡先氏名">山田 由美</KvRow>
                      <KvRow label="続柄">配偶者</KvRow>
                      <KvRow label="最寄駅">東京駅</KvRow>
                    </Col>
                  </TwoCol>
                </SectionCard>

                <SectionCard title="単身赴任先・通勤情報">
                  <TwoCol>
                    <Col>
                      <KvRow label="(単身赴任先) 〒">530-0001</KvRow>
                      <KvRow label="住所">大阪府大阪市北区梅田 2-2-2</KvRow>
                      <KvRow label="住所（かな）">おおさかふおおさかしきたくうめだ 2-2-2</KvRow>
                      <KvRow label="住所変更日">2023-10-01</KvRow>
                    </Col>
                    <Divider />
                    <Col>
                      <KvRow label="通勤時間">35分</KvRow>
                      <KvRow label="住居区分">社宅</KvRow>
                    </Col>
                  </TwoCol>
                </SectionCard>

                <SectionCard title="本人実家・配偶者実家">
                  <TwoCol>
                    <Col>
                      <div
                        className="mb-2 rounded px-2 py-1 text-[11px] font-semibold"
                        style={{ background: C.cardBg, color: "#374151" }}
                      >
                        本人実家
                      </div>
                      <KvRow label="〒">150-0001</KvRow>
                      <KvRow label="電話番号">090-1111-9001</KvRow>
                      <KvRow label="住所">東京都渋谷区神宮前 2-2-2</KvRow>
                      <KvRow label="住所（かな）">とうきょうとしぶやくじんぐうまえ 2-2-2</KvRow>
                    </Col>
                    <div className="w-px shrink-0" style={{ background: C.border }} />
                    <Col>
                      <div
                        className="mb-2 rounded px-2 py-1 text-[11px] font-semibold"
                        style={{ background: C.cardBg, color: "#374151" }}
                      >
                        配偶者実家
                      </div>
                      <KvRow label="〒">150-0001</KvRow>
                      <KvRow label="電話番号">0422-11-0001</KvRow>
                      <KvRow label="住所">東京都武蔵野市吉祥寺 3-3-3</KvRow>
                      <KvRow label="住所（かな）">とうきょうとむさしのしきちじょうじ 3-3-3</KvRow>
                      <KvRow label="続柄">長姉</KvRow>
                    </Col>
                  </TwoCol>
                </SectionCard>

                <SectionCard title="学歴">
                  {/* Header row */}
                  <div
                    className="flex py-2 text-[11px] font-semibold uppercase tracking-wide"
                    style={{ background: C.cardBg, borderBottom: `1px solid ${C.border}`, color: C.label }}
                  >
                    {[
                      ["出身地", 80], ["学部名", 112], ["学科名", 112], ["学歴区分", 96],
                      ["入学日", 88], ["卒業日", 88], ["備考", 0], ["卒業", 60],
                    ].map(([label, w]) => (
                      <span
                        key={label as string}
                        className="shrink-0 px-2"
                        style={{ width: w === 0 ? undefined : w, flex: w === 0 ? 1 : undefined }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  {[
                    ["AAA", "AAA学部", "AAA学科", "AAA学歴", "1997/04", "2000/03", "note"],
                    ["BBB", "BBB学部", "BBB学科", "AAA学歴", "1997/04", "2000/03", "note"],
                  ].map((row) => (
                    <div
                      key={row[0]}
                      className="flex items-center py-2 text-[13px]"
                      style={{ borderBottom: `1px solid ${C.rowDivider}`, color: C.text }}
                    >
                      {([80, 112, 112, 96, 88, 88] as number[]).map((w, i) => (
                        <span key={i} className="shrink-0 px-2" style={{ width: w }}>
                          {row[i]}
                        </span>
                      ))}
                      <span className="min-w-0 flex-1 px-2">{row[6]}</span>
                      <span className="w-16 shrink-0 px-2">
                        <span
                          className="rounded px-2 py-0.5 text-[11px] font-semibold"
                          style={{ background: C.successBg, color: C.successText }}
                        >
                          卒業
                        </span>
                      </span>
                    </div>
                  ))}
                </SectionCard>
              </div>
            )}

            {/* ── スキル ───────────────────────────────────────────────────── */}
            {tab === "skills" && (
              <div style={{ maxWidth: 1100 }}>
                <div
                  className="rounded-lg bg-white p-5"
                  style={{ border: `1px solid ${C.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  {/* Card header */}
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-base font-bold" style={{ color: C.black }}>
                        スキルチャート
                      </h2>
                      <p className="mt-1 text-xs" style={{ color: C.label, maxWidth: 520 }}>
                        技術力と業務遂行力を7軸で可視化。現在値と期待値を重ねて、伸ばすべき領域を直感的に把握できます。
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {["Tech Profile", "7 Axis Radar"].map((b) => (
                        <button
                          key={b}
                          type="button"
                          className="rounded-md px-3 py-1 text-[11px] font-medium"
                          style={{ border: `1px solid ${C.border}`, color: "#374151" }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Toggle pills */}
                  <div className="mb-4 flex gap-2">
                    <span
                      className="rounded-full px-3.5 py-1 text-xs font-semibold text-white"
                      style={{ background: C.blue }}
                    >
                      現在スキル
                    </span>
                    <span
                      className="rounded-full px-3.5 py-1 text-xs"
                      style={{ border: `1px solid ${C.border}`, color: C.label, background: C.pageBg }}
                    >
                      期待値
                    </span>
                  </div>

                  {/* Chart + bars */}
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    <div className="flex flex-1 justify-center">
                      <ChartContainer config={chartConfig} className="h-[300px] w-full max-w-[400px]">
                        <RadarChart data={SKILLS}>
                          <PolarGrid stroke={C.border} />
                          <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12, fill: C.label }} />
                          <PolarRadiusAxis
                            angle={90}
                            domain={[0, 5]}
                            tick={{ fontSize: 10, fill: C.caption }}
                            tickCount={6}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Radar
                            name="score"
                            dataKey="score"
                            stroke={C.blue}
                            fill={C.blue}
                            fillOpacity={0.2}
                            strokeWidth={2}
                          />
                        </RadarChart>
                      </ChartContainer>
                    </div>

                    {/* Score bars */}
                    <div className="min-w-0 flex-1 space-y-2">
                      {SKILLS.map((s) => {
                        const pct = (s.score / 5) * 100;
                        const dim = s.score < 4.0;
                        return (
                          <div
                            key={s.skill}
                            className="flex items-center gap-3 rounded-md px-3 py-2.5"
                            style={{
                              border: `1px solid ${C.border}`,
                              background: C.cardBg,
                            }}
                          >
                            <span
                              className="w-24 shrink-0 text-[13px] font-medium"
                              style={{ color: "#374151" }}
                            >
                              {s.skill}
                            </span>
                            <div
                              className="h-1.5 min-w-0 flex-1 rounded-full"
                              style={{ background: "#E5E7EB" }}
                            >
                              <div
                                className="h-1.5 rounded-full"
                                style={{
                                  width: `${pct}%`,
                                  background: dim ? "#9CA3AF" : C.blue,
                                }}
                              />
                            </div>
                            <span
                              className="w-12 shrink-0 text-right text-[13px] font-bold"
                              style={{ color: dim ? C.label : C.blue }}
                            >
                              {s.score}/5
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
