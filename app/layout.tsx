import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SummAIrize - AI Document Summarizer",
  description: "Dapatkan ringkasan dokumen panjang dalam hitungan detik dengan AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body suppressHydrationWarning className={`${inter.className} antialiased gradient-bg min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
