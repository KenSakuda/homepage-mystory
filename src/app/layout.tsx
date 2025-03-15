import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https:/www.b-mystory.com"),
  title: {
    template: "%s | データ分析・経済学のビジネス活用の相談ならMyStory",
    default: "データ分析・経済学のビジネス活用の相談ならMyStory",
  },
  description: "先端技術を活用して、あらゆるビジネス課題を解決します",
  openGraph: {
    title: "MyStory",
    siteName: "MyStory",
    description:
      "AIやブロックチェーン、モダンアプリ開発など先端技術の力を駆使して、あらゆるビジネス課題を解決します",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta
          name="google-site-verification"
          content="nTKt9Ds83hQ8GyrbKfRYlKHNTrBWzWUbMmDlGUyN4ZU"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-65REWJ3LZB" />
    </html>
  );
}
