import type { Metadata } from "next";
import "./globals.css";
import { Inter, Rubik } from "next/font/google";
import { cn } from "@/src/lib/utils";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medalverse",
};

export default function Layout(props: LayoutProps<"/">) {
  return (
    <html lang="th">
      <body
        className={cn(
          "w-dvw h-dvh antialiased bg-slate-700",
          rubik.variable,
          inter.variable,
        )}
      >
        {props.children}
      </body>
    </html>
  );
}
