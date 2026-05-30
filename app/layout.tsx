import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medalverse — Mission Room",
  description: "Track your academic missions and milestones.",
};

export default function Layout(props: LayoutProps<"/">) {
  return (
    <html lang="th" className={inter.variable}>
      <body>{props.children}</body>
    </html>
  );
}
