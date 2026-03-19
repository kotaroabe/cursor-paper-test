import type { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  bg?: "white" | "fafafa";
}

export default function PhoneFrame({ children, bg = "white" }: PhoneFrameProps) {
  return (
    <div className={`phone-frame${bg === "fafafa" ? " bg-fafafa" : ""}`}>
      {children}
    </div>
  );
}
