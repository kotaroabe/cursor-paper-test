import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "NRI KAONA — HR prototype",
  description: "Single prototype: 基本情報 · 身上書 · スキル (NRI KAONA design system)",
};

export default function NriKaonaPrototypeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${noto.variable} min-h-screen`} style={{ fontFamily: "var(--font-noto), system-ui, sans-serif" }}>
      {children}
    </div>
  );
}
