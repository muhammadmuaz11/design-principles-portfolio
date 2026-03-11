import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Muhammad Muaz",
  description: "Muhammad Muaz's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='light'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
