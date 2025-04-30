import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SidebarButton from "@/app/_components/SidebarButton";

export const metadata: Metadata = {
  metadataBase: new URL("https:/www.b-mystory.com"),
  title: {
    template: "%s | データ分析・経済学のビジネス活用の相談ならMyStory",
    default: "データ分析・経済学のビジネス活用の相談ならMyStory",
  },
  description:
    "AIやデータ分析、ブロックチェーン、モダンアプリ開発など先端技術の力を駆使して、あらゆるビジネス課題を解決します",
  openGraph: {
    title: "MyStory",
    siteName: "MyStory",
    description:
      "AIやデータ分析、ブロックチェーン、モダンアプリ開発など先端技術の力を駆使して、あらゆるビジネス課題を解決します",
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
        <SidebarButton
          buttons={[
            {
              href: "/contact",
              text: "ご相談はこちら",
              iconSrc: "/icon_mail.svg",
            },
            {
              href: "/deepsports",
              text: "Deep Sportsへ",
              iconSrc: "/icon_sports.svg",
            },
          ]}
        />
      </body>
      <GoogleAnalytics gaId="G-65REWJ3LZB" />
    </html>
  );
}
