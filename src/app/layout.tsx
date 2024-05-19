import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/lg-screen/navigation/header.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyVillage",
  description: "A Village Management Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 z-10">
          <TopBar />
        </div>
        {children}
      </body>
    </html>
  );
}
