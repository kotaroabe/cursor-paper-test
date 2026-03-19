import { Noto_Sans_JP } from "next/font/google";
import HRSidebar from "@/components/hr/HRSidebar";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto",
});

export default function HRLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${noto.variable} font-[family-name:var(--font-noto)] flex bg-gray-50`}
      style={{ minHeight: "100vh", width: "100vw", position: "fixed", inset: 0, background: "#f9fafb" }}
    >
      <HRSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="px-4 py-3 border-b border-gray-200 bg-white">
          <span className="text-sm text-gray-500 font-medium">検索結果</span>
        </div>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
