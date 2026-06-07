import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import AutoPlayVideo from "@/app/_components/AutoPlayVideo";
import ServiceSectionGrid, {
  ServiceCard,
} from "@/app/_components/ServiceSectionGrid";
import ServiceSectionVisual from "@/app/_components/ServiceSectionVisual";
import { getNewsList, getColumnList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ColumnCards from "./_components/ColumnCards";
import ButtonLink from "@/app/_components/ButtonLink";
import ContactSection from "./_components/ContactSection";

export default async function Page() {
  const news = await getNewsList({ limit: TOP_NEWS_LIMIT });
  const columns = await getColumnList({ limit: TOP_NEWS_LIMIT });

  const analytics_cards: ServiceCard[] = [
    {
      href: "/analytics/consulting",
      title: "受託分析/データ利活用支援",
      iconSrc: "/service_data-analytics_icon1.png",
    },
    {
      href: "/analytics/tools",
      title: "データ分析ツールの提供",
      iconSrc: "/service_data-analytics_icon2.png",
    },
    {
      href: "/analytics/pricing",
      title: "プライシングサービス",
      iconSrc: "/service_data-analytics_icon4.png",
    },
    {
      href: "/analytics/share-prediction",
      title: "シェア推定サービス",
      iconSrc: "/service_data-analytics_icon5.png",
    },
    {
      href: "/analytics/people-analytics",
      title: "ピープルアナリティクス",
      iconSrc: "/service_data-analytics_icon6.png",
    },
    {
      href: "/analytics/image-recognition",
      title: "画像・動画認識サービス",
      iconSrc: "/service_data-analytics_icon7.png",
    },
  ];

  const blockchain_cards: ServiceCard[] = [
    {
      href: "/blockchain/membership-nft",
      title: "会員証NFT・デジタル会員権 開発",
      iconSrc: "/service_blockchain_icon1.png",
    },
    {
      href: "/blockchain/token-loyalty",
      title: "トークンでポイント制度・ロイヤルティ構築",
      iconSrc: "/service_blockchain_icon2.png",
    },
    {
      href: "/blockchain/smart-contract-development",
      title: "スマートコントラクト受託開発",
      iconSrc: "/service_blockchain_icon3.png",
    },
    {
      href: "/blockchain/dao-governance",
      title: "DAO/コミュニティ運営基盤 構築",
      iconSrc: "/service_blockchain_icon4.png",
    },
  ];

  return (
    <>
      <section className={styles.hero}>
        <AutoPlayVideo
          className={styles.bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/Hero.png"
          crossOrigin="anonymous"
          sources={[
            { src: "/Hero.webm", type: "video/webm" },
            { src: "/Hero.mp4", type: "video/mp4" },
          ]}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            <span className={styles.kicker}>
              先端技術と経済学で、意思決定をもっとスマートに
            </span>
            <span className={styles.headline}>
              データに基づいた
              <em> 意思決定を支援</em>
            </span>
            <span className={styles.subcopy}>
              データ分析や経済学のビジネス活用の相談ならMyStory
            </span>
          </h1>

          {/* 2CTA（フォーム＆DeepSports） */}
          <div className={styles.ctaRow}>
            <Link
              href="/contact"
              className={`${styles.cta} ${styles.ctaPrimary}`}
            >
              <Image src="/icon_mail.svg" alt="" width={28} height={28} />
              <span>
                詳しく話を聞きたい
                <strong>ご相談はこちら</strong>
              </span>
            </Link>
            <Link
              href="https://deepsports.b-mystory.com/"
              className={`${styles.cta} ${styles.ctaGhost}`}
            >
              <Image src="/icon_sports.svg" alt="" width={28} height={28} />
              <span>
                『Deep Sports』
                <strong>ニュースサイトへ</strong>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ServiceSectionGrid
        eyebrow="データ分析コンサルティング事業"
        title="データ分析でビジネス課題解決・収益成長を加速させる伴走支援"
        description="MyStoryのデータ分析コンサルティング事業は、統計学・機械学習といった技術面の専門性と、行動経済学・消費者行動理論といった行動科学の専門知見を掛け合わせた“意思決定に繋がる”データ分析を提供できることが特徴です。プライシング、ピープルアナリティクスなど各種分析ソリューションを展開しており、あわせてデータ分析ツールの開発・販売も行っています。"
        cards={analytics_cards}
      />

      <ServiceSectionVisual
        eyebrow="人事コンサルティング事業"
        title="組織・人事領域の制度策定に関するコンサルティング"
        description=""
        image={{
          src: "/services_analytics_hero.jpg",
          alt: "NoImage",
        }}
        visualLink={{ href: "/hr-consulting" }}
      />

      <ServiceSectionVisual
        eyebrow="デジタルメディア事業"
        title="スポーツアナリティクス特化型ニュースサイト『Deep Sports』の運営"
        description="スポーツアナリティクスに特化したデジタルメディア『Deep Sports』を企画・運営。各種スポーツ競技のプレーや試合結果をデータで“観る”深い考察記事や、経済学の観点からスポーツの制度や歴史を学ぶ記事のほか、AIによるJリーグや競馬の結果予測などを発信し、データ活用で新しいスポーツ観戦体験を提供します。"
        image={{
          src: "/deepsports.png",
          alt: "Deep Sports画面",
        }}
        visualLink={{ href: "/media" }}
      />

      <ServiceSectionVisual
        eyebrow="ヘルスケア事業"
        title="データ×行動科学で健康行動を後押しするヘルスケア関連アプリ『StoryFit』を開発中"
        description="栄養・運動・睡眠・ストレス状況をアプリで可視化し、一人ひとりの性格特性や生活データに合わせたナッジで行動変容を支援するアプリ『StoryFit』を開発中です。理学療法士・栄養士など“健康の専門家”とも連携し、対面での健康増進コンサルティングサービスや個別レポートも提供する予定で、個人の健康改善から法人・自治体の健康経営の支援も可能なアプリです。"
        image={{
          src: "/storyfit_top.png",
          alt: "StoryFir画面",
        }}
        visualLink={{ href: "/healthcare" }}
      />

      <ServiceSectionGrid
        eyebrow="ブロックチェーン事業"
        title="ブロックチェーンで新しい顧客体験・事業モデルを形にする伴走開発支援"
        description="MyStoryのブロックチェーン事業は、スマートコントラクト開発を中心に、会員証NFTやトークンを活用したポイント制度など、企業の“実運用”に耐えるWeb3施策・プロダクトを企画から実装まで一気通貫で支援できることが特徴です。NFT/DeFi/DAOといった技術要素を、要件定義・セキュリティ設計・運用ルールに落とし込み、PoCで終わらないプロダクト開発へつなげます。将来的にはブロックチェーン機能を搭載した自社プロダクトの開発・提供も見据え、受託開発とプロダクト開発の両輪で価値創出を進めています。"
        cards={blockchain_cards}
      />

      <section className={styles.categoryLinks}>
        <div className={styles.inner}>
          <div className={styles.categoryGrid}>
            <Link href="/whitepaper" className={styles.categoryLargeCard}>
              <Image
                src="/marketing-content.webp"
                alt="whitepaper"
                width={600}
                height={400}
                className={styles.categoryImage}
              />
              <div className={styles.categoryText}>
                <h3>マーケティング活動お役立ち資料</h3>
                <p>くわしく見る</p>
              </div>
            </Link>
            <div className={styles.categorySmallCards}>
              <Link href="/movie" className={styles.categorySmallCard}>
                <Image
                  src="/movie.png"
                  alt="分析データ"
                  width={600}
                  height={400}
                  className={styles.categoryImage}
                />
                <div className={styles.categoryText}>
                  <h3>動画素材</h3>
                  <p>※コンテンツ準備中</p>
                </div>
              </Link>
              <Link href="/company" className={styles.categorySmallCard}>
                <Image
                  src="/office.jpg"
                  alt="企業情報"
                  width={600}
                  height={400}
                  className={styles.categoryImage}
                />
                <div className={styles.categoryText}>
                  <h3>企業情報</h3>
                  <p>くわしく見る</p>
                </div>
              </Link>
              <Link href="/recruit" className={styles.categorySmallCard}>
                <Image
                  src="/dummy.png"
                  alt="採用情報"
                  width={600}
                  height={400}
                  className={styles.categoryImage}
                />
                <div className={styles.categoryText}>
                  <h3>採用情報</h3>
                  <p>くわしく見る</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.news}>
        <div className={styles.newsTitle}>
          <h2>News</h2>
          <p>お知らせ</p>
        </div>
        <NewsList news={news.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">お知らせ一覧</ButtonLink>
        </div>
      </section>

      <section className={`${styles.news} ${styles.showcase}`}>
        <div className={styles.showcaseHeader}>
          <h2>Column</h2>
          <p>
            データ分析や経済学に関するコラムや、統計の用語解説などをまとめています
          </p>
        </div>

        <div className={styles.showcaseTrack}>
          <ColumnCards columns={columns.contents} />
        </div>

        <div className={styles.newsLink}>
          <ButtonLink href="/column">コラム一覧へ</ButtonLink>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
