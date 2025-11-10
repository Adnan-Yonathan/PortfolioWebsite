import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio Elemental | Web Design Agency",
  description:
    "Studio Elemental crafts brand-forward web experiences, from discovery through launch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
