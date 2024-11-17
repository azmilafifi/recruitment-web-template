import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css'
import localFont from "next/font/local";
import "./globals.scss";
import BootstrapClient from "@/components/BootstrapClient";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Recruitment Website Template",
  description: "NextJs Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <BootstrapClient/>
      </body>
    </html>
  );
}
