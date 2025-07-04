import styles from "./page.module.css";
// import Link from "next/link";
import ServicesHero from "../_components/Hero";
import ServicesExample from "../_components/Example";

export default function Page() {
  return (
    <main className={styles.main}>
      <ServicesHero
        title="デジタルメディア事業"
        subtitle="スポーツアナリティクスに特化したニュースサイト『Deep Sports』の企画・運営を行っております。"
        imageUrl="/deepsports.png"
      />
      {/* <div className={styles.breadcrumb}>
        <span>
          <Link href="/">TOPページ</Link>
        </span>{" "}
        &gt; <span className={styles.current}>デジタルメディア事業</span>
      </div> */}
      <ServicesExample
        sectionTitle="『Deep Sportsの3つの特徴』"
        features={[
          {
            icon: "/feature1.svg",
            title: "深い考察記事",
            description:
              "スポーツとデータサイエンスの双方に精通したアナリスト兼編集記者が書く記事は、どれも専門的なスポーツアナリティクス手法を駆使した深い考察記事ばかりです。選手の活躍の秘訣やスポーツに関する制度などをデータをもとに解き明かします。",
          },
          {
            icon: "/feature2.svg",
            title: "経済学について学べる",
            description:
              "スポーツを題材に経済学を学ぶことができる記事を多数用意。サッカーのバロンドールを題材にした「投票理論」、野球のポスティング制度を題材にした「収益同値定理」など、身近なスポーツの話題をもとに楽しく、わかりやすく経済学を学べます。",
          },
          {
            icon: "/feature3.svg",
            title: "試合結果の予測モデル",
            description:
              "熟練のデータサイエンティストが作成した予測モデルをもとにした複数の予測結果をご確認いただけます。G1はじめ国内主要レースを網羅した「競馬予測モデル」、Jリーグ全試合のスコア予測を行う「toto予測モデル」のほか、順次コンテンツを拡張していく予定です。",
          },
        ]}
      />
    </main>
  );
}
