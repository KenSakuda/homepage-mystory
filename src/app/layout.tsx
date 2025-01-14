import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https:/www./b-mystory.com"),
  title: {
    template: "%s | MyStory",
    default: "MyStory",
  },
  description: "先端技術を活用して、あらゆるビジネス課題を解決します",
  openGraph: {
    title: "MyStory",
    description:
      "AIやブロックチェーン、モダンアプリ開発など先端技術の力を駆使して、あらゆるビジネス課題を解決します",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-65REWJ3LZB" />
    </html>
  );
}
