"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

const NK = {
  blue: "#1A52A6",
  blueLight: "#EBF1FB",
  pageBg: "#F3F4F6",
  border: "#E5E7EB",
  label: "#6B7280",
  text: "#171717",
  black: "#111111",
};

type MainTab = "basic" | "shinjosho" | "skills";

const BASIC_LEFT: { label: string; value: string; bold?: boolean }[] = [
  { label: "社員番号", value: "M0001", bold: true },
  { label: "従業員番号", value: "10133548" },
  { label: "氏名", value: "松本 恒一", bold: true },
  { label: "氏名（かな）", value: "まつもと　こういち" },
  { label: "氏名（ローマ字）", value: "Matumoto Kouiti" },
  { label: "役職", value: "課長" },
  { label: "入社日", value: "19760401" },
  { label: "年次（舎い年次）", value: "76B" },
  { label: "性別", value: "男" },
  { label: "年齢", value: "63" },
  { label: "生年月日", value: "1940/11/11" },
];

const BASIC_RIGHT: { label: string; value: string; link?: boolean }[] = [
  { label: "会社名", value: "株式会社サンプル" },
  { label: "所属本部", value: "管理本部" },
  { label: "所属部", value: "経理財務部" },
  { label: "所属グループ（課）", value: "財務課" },
  { label: "部長", value: "部長　名前" },
  { label: "課（案）長/GM", value: "GM　名前" },
  { label: "キャリアフィールド", value: "キャリアフィールド名" },
  { label: "本部役割区分", value: "役割区分" },
  { label: "メールアドレス", value: "koichi.matsumoto@example.co.jp", link: true },
  { label: "等級", value: "等級B" },
  { label: "人事メモ記号", value: "☆" },
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

const chartConfig: ChartConfig = {
  score: { label: "スコア", color: NK.blue },
};

function KvRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex border-b border-[#F3F4F6] py-2">
      <span className="w-[150px] shrink-0 text-[13px] font-medium" style={{ color: NK.label }}>
        {label}
      </span>
      <div className="text-[13px]" style={{ color: NK.text }}>
        {children}
      </div>
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-lg border bg-white p-5 shadow-sm"
      style={{ borderColor: NK.border, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
    >
      <div
        className="mb-3 border-b pb-2 text-[13px] font-bold"
        style={{ color: NK.blue, borderColor: NK.border }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

export default function NriKaonaPrototype() {
  const [mainTab, setMainTab] = useState<MainTab>("basic");

  const tabLabel: Record<MainTab, string> = {
    basic: "基本情報",
    shinjosho: "身上書",
    skills: "スキル",
  };

  const railItems: { id: MainTab; label: string }[] = [
    { id: "basic", label: "基本情報" },
    { id: "shinjosho", label: "身上書" },
    { id: "skills", label: "スキル" },
  ];

  return (
    <div
      className="flex h-screen w-full flex-col overflow-hidden text-[13px]"
      style={{ background: NK.pageBg, fontFamily: "var(--font-noto), system-ui, sans-serif" }}
    >
      {/* Top app bar */}
      <header
        className="flex h-14 shrink-0 items-center gap-4 border-b bg-white px-5"
        style={{ borderColor: NK.border }}
      >
        <div className="flex items-center gap-2 border-r pr-5" style={{ borderColor: NK.border }}>
          <div className="grid grid-cols-2 gap-0.5" style={{ width: 16, height: 16 }}>
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="rounded-[1px]"
                style={{ background: NK.blue, width: 7, height: 7 }}
              />
            ))}
          </div>
          <div>
            <div className="text-[13px] font-bold" style={{ color: NK.black }}>
              人材情報システム
            </div>
            <div className="text-[9px] tracking-wide text-gray-400">HUMAN RESOURCE</div>
          </div>
        </div>
        <nav className="flex gap-0.5">
          {["ホーム", "検索", "管理", "その他"].map((n, i) => (
            <button
              key={n}
              type="button"
              className="rounded-md px-3 py-1.5 text-[13px] font-medium"
              style={{
                background: i === 0 ? NK.pageBg : "transparent",
                color: i === 0 ? "#374151" : NK.label,
              }}
            >
              {n}
            </button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <span
            className="rounded-full border px-3 py-1 text-[11px] text-gray-500"
            style={{ borderColor: NK.border, background: NK.pageBg }}
          >
            検索結果
          </span>
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white"
            style={{ background: NK.blue }}
          >
            HK
          </div>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        {/* Profile rail */}
        <aside
          className="flex w-[220px] shrink-0 flex-col border-r bg-white"
          style={{ borderColor: NK.border }}
        >
          <div className="flex flex-col items-center border-b px-4 py-5" style={{ borderColor: NK.border }}>
            <div
              className="mb-2.5 flex h-16 w-16 items-center justify-center rounded-full text-[22px] font-bold text-gray-600"
              style={{ background: "#CBD5E1" }}
            >
              松
            </div>
            <div className="text-[15px] font-bold" style={{ color: NK.black }}>
              松本 恒一
            </div>
            <div className="mt-0.5 text-[11px]" style={{ color: NK.label }}>
              M0001
            </div>
            <div className="text-[11px]" style={{ color: NK.label }}>
              経理財務部
            </div>
          </div>
          <nav className="flex flex-col gap-0.5 p-2">
            {railItems.map((item) => {
              const active = mainTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMainTab(item.id)}
                  className="rounded-md py-2 pl-3 text-left text-[13px] transition-colors"
                  style={{
                    background: active ? NK.blueLight : "transparent",
                    borderLeft: active ? `3px solid ${NK.blue}` : "3px solid transparent",
                    color: active ? NK.blue : NK.label,
                    fontWeight: active ? 600 : 400,
                    paddingLeft: active ? 9 : 12,
                  }}
                >
                  {item.label}
                </button>
              );
            })}
            {["キャリア", "採用時情報", "勤怠情報", "自己申告", "人事記録", "審査書類", "転入時面談"].map(
              (label) => (
                <div
                  key={label}
                  className="cursor-default rounded-md px-3 py-2 text-[13px]"
                  style={{ color: NK.label }}
                >
                  {label}
                </div>
              ),
            )}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div
            className="flex h-10 shrink-0 items-center gap-1.5 border-b bg-white px-5 text-[11px]"
            style={{ borderColor: NK.border }}
          >
            <span className="text-gray-400">ホーム</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400">検索</span>
            <span className="text-gray-300">/</span>
            <span className="font-semibold text-gray-700">松本 恒一</span>
            <span className="text-gray-300">/</span>
            <span className="font-semibold" style={{ color: NK.blue }}>
              {tabLabel[mainTab]}
            </span>
            {mainTab === "shinjosho" && (
              <div className="ml-auto flex gap-2">
                <button
                  type="button"
                  className="rounded-md border px-2.5 py-1 text-[11px]"
                  style={{ borderColor: NK.border }}
                >
                  過去変更日
                </button>
                <button
                  type="button"
                  className="rounded-md px-2.5 py-1 text-[11px] font-semibold text-white"
                  style={{ background: NK.blue }}
                >
                  編集
                </button>
              </div>
            )}
          </div>

          {mainTab === "skills" && (
            <div
              className="flex h-11 shrink-0 items-end border-b bg-white px-5"
              style={{ borderColor: NK.border }}
            >
              {["能力チャート", "資格情報・語学情報", "講座受講情報", "対外発表"].map((t, i) => (
                <button
                  key={t}
                  type="button"
                  className="px-4 py-2 text-[13px]"
                  style={{
                    color: i === 0 ? NK.blue : NK.label,
                    fontWeight: i === 0 ? 600 : 400,
                    borderBottom: i === 0 ? `2px solid ${NK.blue}` : "2px solid transparent",
                    marginBottom: -1,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          )}

          <div className="min-h-0 flex-1 overflow-y-auto p-5">
            {mainTab === "basic" && (
              <div className="mx-auto max-w-[1100px] space-y-4">
                <div
                  className="rounded-lg border bg-white p-5 shadow-sm"
                  style={{ borderColor: NK.border }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h1 className="text-base font-bold" style={{ color: NK.black }}>
                      基本情報
                    </h1>
                    <button
                      type="button"
                      className="rounded-md border px-3.5 py-1.5 text-xs font-medium"
                      style={{ borderColor: NK.border }}
                    >
                      編集
                    </button>
                  </div>
                  <div className="flex gap-8">
                    <div className="min-w-0 flex-1">
                      {BASIC_LEFT.map((row) => (
                        <KvRow key={row.label} label={row.label}>
                          <span className={row.bold ? "font-semibold" : ""}>{row.value}</span>
                        </KvRow>
                      ))}
                    </div>
                    <div className="min-w-0 flex-1">
                      {BASIC_RIGHT.map((row) => (
                        <KvRow key={row.label} label={row.label}>
                          <span style={row.link ? { color: NK.blue } : undefined}>{row.value}</span>
                        </KvRow>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="flex-1 rounded-lg border bg-white p-4 shadow-sm"
                    style={{ borderColor: NK.border }}
                  >
                    <div
                      className="mb-2 border-b pb-2 text-xs font-bold"
                      style={{ color: NK.black, borderColor: NK.border }}
                    >
                      勤続年数
                    </div>
                    <div className="text-[10px] font-semibold" style={{ color: NK.blue }}>
                      在籍期間
                    </div>
                    <div className="mt-1 text-[32px] font-extrabold" style={{ color: NK.black }}>
                      8年9ヶ月
                    </div>
                  </div>
                  <div
                    className="flex-1 rounded-lg border bg-white p-4 shadow-sm"
                    style={{ borderColor: NK.border }}
                  >
                    <div
                      className="mb-2 border-b pb-2 text-xs font-bold"
                      style={{ color: NK.black, borderColor: NK.border }}
                    >
                      総合評価
                    </div>
                    <div className="text-[10px] font-semibold" style={{ color: NK.blue }}>
                      直近評価
                    </div>
                    <div className="mt-1 text-5xl font-black" style={{ color: NK.black }}>
                      S
                    </div>
                  </div>
                </div>
              </div>
            )}

            {mainTab === "shinjosho" && (
              <div className="mx-auto max-w-[1100px] space-y-3">
                <SectionCard title="社員・所属情報">
                  <div className="flex gap-6">
                    <div className="min-w-0 flex-1 space-y-0">
                      <KvRow label="社員番号">M0001</KvRow>
                      <KvRow label="従業員番号">10133548</KvRow>
                      <KvRow label="氏名">
                        <span className="font-semibold">松本 恒一</span>
                      </KvRow>
                      <KvRow label="氏名（かな）">まつもとこういち</KvRow>
                      <KvRow label="氏名（ローマ字）">Matumoto Kouiti</KvRow>
                      <KvRow label="メールアドレス">
                        <span style={{ color: NK.blue }}>koichi.matsumoto@example.co.jp</span>
                      </KvRow>
                      <KvRow label="課（案）長/GM">
                        <span className="italic text-gray-400">未入力</span>
                      </KvRow>
                    </div>
                    <div className="w-px shrink-0 bg-[#F3F4F6]" />
                    <div className="min-w-0 flex-1">
                      <KvRow label="性別">男</KvRow>
                      <KvRow label="年齢">85</KvRow>
                      <KvRow label="所属名">経理財務部</KvRow>
                      <KvRow label="所属本部">管理本部</KvRow>
                      <KvRow label="入社日">19760401</KvRow>
                      <KvRow label="年次">76B</KvRow>
                      <KvRow label="役職名">課長</KvRow>
                      <KvRow label="等級">等級B</KvRow>
                    </div>
                  </div>
                </SectionCard>

                <SectionCard title="本人情報・現住所">
                  <div className="flex gap-6">
                    <div className="min-w-0 flex-1">
                      <KvRow label="生年月日">1984-05-12</KvRow>
                      <KvRow label="戸籍氏名（漢字）">東京都</KvRow>
                      <KvRow label="戸籍氏名（かな）">とうきょうと</KvRow>
                      <KvRow label="現住所 〒">100-0001</KvRow>
                      <KvRow label="住所">東京都千代田区千代田 1-1-1</KvRow>
                      <KvRow label="住所（かな）">とうきょうとちよだくちよだ 1-1-1</KvRow>
                      <KvRow label="住居区分">持家</KvRow>
                    </div>
                    <div className="w-px shrink-0 bg-[#F3F4F6]" />
                    <div className="min-w-0 flex-1">
                      <KvRow label="婚姻日">2012-06-15</KvRow>
                      <KvRow label="電話番号">03-1111-0001</KvRow>
                      <KvRow label="住所変更日">2024-04-01</KvRow>
                      <KvRow label="緊急連絡先">090-1111-0001</KvRow>
                      <KvRow label="緊急連絡先氏名">山田 由美</KvRow>
                      <KvRow label="続柄">配偶者</KvRow>
                      <KvRow label="最寄駅">東京駅</KvRow>
                    </div>
                  </div>
                </SectionCard>

                <SectionCard title="単身赴任先・通勤情報">
                  <div className="flex gap-6">
                    <div className="min-w-0 flex-1">
                      <KvRow label="(単身赴任先) 〒">530-0001</KvRow>
                      <KvRow label="住所">大阪府大阪市北区梅田 2-2-2</KvRow>
                      <KvRow label="住所（かな）">おおさかふおおさかしきたくうめだ 2-2-2</KvRow>
                      <KvRow label="住所変更日">2023-10-01</KvRow>
                    </div>
                    <div className="w-px shrink-0 bg-[#F3F4F6]" />
                    <div className="min-w-0 flex-1">
                      <KvRow label="通勤時間">35分</KvRow>
                      <KvRow label="住居区分">社宅</KvRow>
                    </div>
                  </div>
                </SectionCard>

                <SectionCard title="本人実家・配偶者実家">
                  <div className="flex gap-6">
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 rounded bg-[#F9FAFB] px-2 py-1 text-[11px] font-semibold text-gray-700">
                        本人実家
                      </div>
                      <KvRow label="〒">150-0001</KvRow>
                      <KvRow label="電話番号">090-1111-9001</KvRow>
                      <KvRow label="住所">東京都渋谷区神宮前 2-2-2</KvRow>
                      <KvRow label="住所（かな）">とうきょうとしぶやくじんぐうまえ 2-2-2</KvRow>
                    </div>
                    <div className="w-px shrink-0 bg-[#E5E7EB]" />
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 rounded bg-[#F9FAFB] px-2 py-1 text-[11px] font-semibold text-gray-700">
                        配偶者実家
                      </div>
                      <KvRow label="〒">150-0001</KvRow>
                      <KvRow label="電話番号">0422-11-0001</KvRow>
                      <KvRow label="住所">東京都武蔵野市吉祥寺 3-3-3</KvRow>
                      <KvRow label="住所（かな）">とうきょうとむさしのしきちじょうじ 3-3-3</KvRow>
                      <KvRow label="続柄">長姉</KvRow>
                    </div>
                  </div>
                </SectionCard>

                <SectionCard title="学歴">
                  <div className="overflow-x-auto">
                    <div className="flex border-b bg-[#F9FAFB] py-2 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                      <span className="w-20 shrink-0 px-2">出身地</span>
                      <span className="w-28 shrink-0 px-2">学部名</span>
                      <span className="w-28 shrink-0 px-2">学科名</span>
                      <span className="w-24 shrink-0 px-2">学歴区分</span>
                      <span className="w-24 shrink-0 px-2">入学日</span>
                      <span className="w-24 shrink-0 px-2">卒業日</span>
                      <span className="min-w-0 flex-1 px-2">備考</span>
                      <span className="w-16 shrink-0 px-2">卒業</span>
                    </div>
                    {[
                      ["AAA", "AAA学部", "AAA学科", "AAA学歴", "1997/04", "2000/03", "note"],
                      ["BBB", "BBB学部", "BBB学科", "AAA学歴", "1997/04", "2000/03", "note"],
                    ].map((row) => (
                      <div
                        key={row[0]}
                        className="flex items-center border-b border-[#F3F4F6] py-2 text-[13px]"
                        style={{ color: NK.text }}
                      >
                        <span className="w-20 shrink-0 px-2">{row[0]}</span>
                        <span className="w-28 shrink-0 px-2">{row[1]}</span>
                        <span className="w-28 shrink-0 px-2">{row[2]}</span>
                        <span className="w-24 shrink-0 px-2">{row[3]}</span>
                        <span className="w-24 shrink-0 px-2">{row[4]}</span>
                        <span className="w-24 shrink-0 px-2">{row[5]}</span>
                        <span className="min-w-0 flex-1 px-2">{row[6]}</span>
                        <span className="w-16 shrink-0 px-2">
                          <Badge className="border-0 bg-[#DCFCE7] text-[11px] font-semibold text-[#16A34A] hover:bg-[#DCFCE7]">
                            卒業
                          </Badge>
                        </span>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              </div>
            )}

            {mainTab === "skills" && (
              <div className="mx-auto max-w-[1100px]">
                <div
                  className="rounded-lg border bg-white p-5 shadow-sm"
                  style={{ borderColor: NK.border }}
                >
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-base font-bold" style={{ color: NK.black }}>
                        スキルチャート
                      </h2>
                      <p className="mt-1 max-w-xl text-xs" style={{ color: NK.label }}>
                        技術力と業務遂行力を7軸で可視化。現在値と期待値を重ねて、伸ばすべき領域を直感的に把握できます。
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs font-medium">
                        Tech Profile
                      </Badge>
                      <Badge variant="outline" className="text-xs font-medium">
                        7 Axis Radar
                      </Badge>
                    </div>
                  </div>
                  <div className="mb-4 flex gap-2">
                    <span
                      className="rounded-full px-3.5 py-1 text-xs font-semibold text-white"
                      style={{ background: NK.blue }}
                    >
                      現在スキル
                    </span>
                    <span
                      className="rounded-full border px-3.5 py-1 text-xs text-gray-500"
                      style={{ borderColor: NK.border, background: NK.pageBg }}
                    >
                      期待値
                    </span>
                  </div>
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    <div className="flex flex-1 justify-center">
                      <ChartContainer config={chartConfig} className="h-[300px] w-full max-w-[400px]">
                        <RadarChart data={SKILLS}>
                          <PolarGrid stroke="#e5e7eb" />
                          <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12, fill: "#6b7280" }} />
                          <PolarRadiusAxis
                            angle={90}
                            domain={[0, 5]}
                            tick={{ fontSize: 10, fill: "#9ca3af" }}
                            tickCount={6}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Radar
                            name="score"
                            dataKey="score"
                            stroke={NK.blue}
                            fill={NK.blue}
                            fillOpacity={0.25}
                            strokeWidth={2}
                          />
                        </RadarChart>
                      </ChartContainer>
                    </div>
                    <div className="min-w-0 flex-1 space-y-2">
                      {SKILLS.map((s) => {
                        const pct = (s.score / 5) * 100;
                        const low = s.score < 4;
                        return (
                          <div
                            key={s.skill}
                            className="flex items-center gap-3 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5"
                          >
                            <span className="w-24 shrink-0 text-[13px] font-medium text-gray-700">
                              {s.skill}
                            </span>
                            <div className="h-1.5 min-w-0 flex-1 rounded-full bg-gray-200">
                              <div
                                className="h-1.5 rounded-full"
                                style={{
                                  width: `${pct}%`,
                                  background: low ? "#6B7280" : NK.blue,
                                }}
                              />
                            </div>
                            <span
                              className="w-14 shrink-0 text-right text-[13px] font-bold"
                              style={{ color: low ? "#6B7280" : NK.blue }}
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
