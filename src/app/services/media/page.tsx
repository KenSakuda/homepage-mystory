import type { Metadata } from "next";
import styles from "./page.module.css";
// import Image from "next/image";
import {
  Hero,
  MainWithSidebar,
  SidebarNavCard,
  LeadBlock,
  FeatureHighlights,
} from "@/app/services/analytics/components";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const title = "デジタルメディア事業";
  const description =
    "データで“観る”スポーツの新体験　スポーツアナリティクス特化型ニュースサイト『Deep Sports』をローンチ";
  const url = "https://www.b-mystory.com/services/media";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: "/data_analytics_consulting_hero.png" }],
    },
    robots: { index: true, follow: true },
  };
}

export default function Page() {
  const sidebarLinks = [
    {
      href: "/services/media",
      label: "デジタルメディア事業",
    },
  ];

  return (
    <main className={styles.page}>
      <Hero
        image={{ src: "/data_analytics_consulting_hero.png", alt: "hero" }}
        title="デジタルメディア事業"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="データで“観る”スポーツの新体験　スポーツアナリティクス特化型ニュースサイト『Deep Sports』をローンチ"
              body={[
                "スポーツアナリティクスに特化したニュースサイト『Deep Sports』の企画・運営を行っております。",
              ]}
            />

            <a id="sec-feature" />
            <FeatureHighlights
              title="Deep Sportsの3つの特徴"
              items={[
                {
                  subtitle: "深い考察記事",
                  lead: "スポーツとデータサイエンスの双方に精通したアナリスト兼編集記者が書く記事は、どれも専門的なスポーツアナリティクス手法を駆使した深い考察記事ばかりです。選手の活躍の秘訣やスポーツに関する制度などをデータをもとに解き明かします。",
                  image: {
                    src: "/media_feature1.png",
                    alt: "深い考察記事",
                  },
                },
                {
                  subtitle: "経済学について学べる",
                  lead: "スポーツを題材に経済学を学ぶことができる記事を多数用意。サッカーのバロンドールを題材にした「投票理論」、野球のポスティング制度を題材にした「収益同値定理」など、身近なスポーツの話題をもとに楽しく、わかりやすく経済学を学べます。",
                  image: {
                    src: "/media_feature2.png",
                    alt: "経済学について学べる",
                  },
                },
                {
                  subtitle: "試合結果の予測モデル",
                  lead: "練のデータサイエンティストが作成した予測モデルをもとにした複数の予測結果をご確認いただけます。G1はじめ国内主要レースを網羅した「競馬予測モデル」、Jリーグ全試合のスコア予測を行う「toto予測モデル」のほか、順次コンテンツを拡張していく予定です。",
                  image: {
                    src: "/media_feature3.png",
                    alt: "試合結果の予測モデル",
                  },
                },
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">お問い合わせフォーム</ButtonLink>
            </div>
          </>
        }
        sidebar={
          <SidebarNavCard title="デジタルメディア事業" items={sidebarLinks} />
        }
      />
    </main>
  );
}
