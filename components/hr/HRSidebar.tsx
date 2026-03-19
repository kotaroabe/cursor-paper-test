"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const NAV_SECTIONS = [
  { label: "検索", hasArrow: true },
  { label: "管理", hasArrow: true },
  { label: "その他", hasArrow: true },
];

const PROFILE_TABS = [
  { label: "基本情報", href: "/hr" },
  { label: "身上書", href: "/hr/shinjosho" },
  { label: "キャリア", href: "#" },
  { label: "スキル", href: "/hr/skills" },
  { label: "採用時情報", href: "#" },
  { label: "勤怠情報", href: "#" },
  { label: "自己申告", href: "#" },
  { label: "人事記録", href: "#" },
  { label: "審査書類", href: "#" },
  { label: "転入時面談", href: "#" },
];

export default function HRSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[220px] flex-col border-r border-gray-200 bg-white flex-shrink-0">
      <div className="px-4 pt-4 pb-2">
        <div className="text-[10px] text-gray-400 tracking-wider">HUMAN RESOURCE</div>
        <div className="text-sm font-bold text-gray-900 mt-0.5">人材情報システム</div>
        <div className="text-[10px] text-gray-400 mt-0.5">検索・管理機能</div>
      </div>

      <Separator />

      <nav className="px-2 py-2">
        <Link href="/hr" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 6l6-4 6 4v7a1 1 0 01-1 1H3a1 1 0 01-1-1V6z" stroke="currentColor" strokeWidth="1.5" /></svg>
          ホーム
        </Link>
        {NAV_SECTIONS.map((s) => (
          <div key={s.label} className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md cursor-pointer">
            <span>● {s.label}</span>
            {s.hasArrow && <span className="text-gray-400 text-xs">›</span>}
          </div>
        ))}
      </nav>

      <Separator />

      <div className="flex flex-col items-center py-5 px-4 gap-2">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" alt="松本 恒一" />
          <AvatarFallback className="text-lg">松本</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <div className="font-bold text-gray-900">松本 恒一</div>
          <div className="text-xs text-gray-400">M0001</div>
          <div className="text-xs text-gray-500">経理財務部</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 pb-4">
        {PROFILE_TABS.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`block px-3 py-2 text-sm rounded-md mb-0.5 ${
                isActive
                  ? "bg-[#2563EB] text-white font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
