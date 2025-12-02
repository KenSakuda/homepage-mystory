import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SidebarButton from "@/app/_components/SidebarButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.b-mystory.com"),
  title: {
    template: "%s | データ分析・経済学のビジネス活用の相談なら株式会社MyStory",
    default: "データ分析・経済学のビジネス活用の相談なら株式会社MyStory",
  },
  description:
    "AIやデータ分析、ブロックチェーン、モダンアプリ開発など先端技術の力を駆使して、あらゆるビジネス課題を解決します",
  openGraph: {
    title: "データ分析・経済学のビジネス活用の相談なら株式会社MyStory",
    siteName: "株式会社MyStory",
    description:
      "AIやデータ分析、ブロックチェーン、モダンアプリ開発など先端技術の力を駆使して、あらゆるビジネス課題を解決します",
    type: "website",
    url: "https://www.b-mystory.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const ldOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "株式会社MyStory",
    url: "https://www.b-mystory.com/",
    logo: "https://www.b-mystory.com/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: "https://www.b-mystory.com/contact",
      },
    ],
  };

  const ldSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "株式会社MyStory",
    alternateName: "MyStory",
    url: "https://www.b-mystory.com/",
    // 検索結果にサイト内検索ボックスを出したい場合は、/search 実装後に解禁
    // potentialAction: {
    //   "@type": "SearchAction",
    //   target: "https://www.b-mystory.com/search?q={search_term_string}",
    //   "query-input": "required name=search_term_string",
    // },
  };

  const ldNav = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "会社情報",
        url: "https://www.b-mystory.com/company",
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "事業内容（データ利活用支援）",
        url: "https://www.b-mystory.com/analytics/consulting",
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "お知らせ",
        url: "https://www.b-mystory.com/news",
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "コラム",
        url: "https://www.b-mystory.com/column",
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "採用情報",
        url: "https://www.b-mystory.com/recruit",
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "お問い合わせ",
        url: "https://www.b-mystory.com/contact",
      },
    ],
  };

  return (
    <html lang="ja">
      <head>
        <meta
          name="google-site-verification"
          content="nTKt9Ds83hQ8GyrbKfRYlKHNTrBWzWUbMmDlGUyN4ZU"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldNav) }}
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
              href: "https://deepsports.b-mystory.com/",
              text: "Deep Sportsへ",
              iconSrc: "/icon_sports.svg",
            },
          ]}
        />
        <GoogleAnalytics gaId="G-65REWJ3LZB" />
      </body>
    </html>
  );
}
