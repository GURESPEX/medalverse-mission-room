import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medalverse",
};

export default function Layout(props: LayoutProps<"/">) {
  return (
    <html lang="th">
      <body>{props.children}</body>
    </html>
  );
}
