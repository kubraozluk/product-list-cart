import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google"; // 1. Fontu Google'dan çektik
import "./globals.css";

// 2. Fontun ayarlarını yaptık
const redHatText = Red_Hat_Text({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"] // Tasarımda kullanılan kalınlıklar
});

export const metadata: Metadata = {
  title: "Product List",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Fontu tüm siteye (body) uyguladık */}
      <body className={redHatText.className}>
        {children}
      </body>
    </html>
  );
}