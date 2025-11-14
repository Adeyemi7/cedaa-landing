import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["400", "600", "800"], 
  display: "swap",
});

export const metadata: Metadata = {
  title: "CeeDar Landing",
  description: "Deliciously Nutritious Yogurt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
