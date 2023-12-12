import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyTonton",
  description: "Cagnotte pour cadeaux immatériels! 🎉",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Header />
        <div className="flex flex-col items-center justify-between p-20">
          {children}
        </div>
      </body>
    </html>
  );
}
