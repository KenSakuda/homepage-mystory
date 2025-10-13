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
  const columns = await getColumnList({ limit: 100 });

  const cards: ServiceCard[] = [
    {
      href: "/services/analytics/consulting",
      title: "受託分析/データ利活用支援",
      iconSrc: "/service_data-analytics_icon1.png",
    },
    {
      href: "/services/analytics/tools",
      title: "データ分析ツールの提供",
      iconSrc: "/service_data-analytics_icon2.png",
    },
    {
      href: "/services/analytics/research",
      title: "リサーチアドバイザー",
      iconSrc: "/service_data-analytics_icon3.png",
    },
    {
      href: "/services/analytics/pricing",
      title: "プライシングサービス",
      iconSrc: "/service_data-analytics_icon4.png",
    },
    {
      href: "/services/analytics/share-prediction",
      title: "シェア推定サービス",
      iconSrc: "/service_data-analytics_icon5.png",
    },
    {
      href: "/services/analytics/people-analytics",
      title: "ピープルアナリティクス",
      iconSrc: "/service_data-analytics_icon6.png",
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
          preload="auto"
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
        title="データ分析で課題解決・収益成長を加速する伴走支援"
        description="CRMや購買・Web行動などの顧客データを統合し、課題特定から分析設計、機械学習構築、ダッシュボード整備、運用定着まで一気通貫。価格最適化や市場シェア推定ツールも活用し、データ活用による意思決定とKPI改善を実現するデータ分析コンサルティングです。"
        cards={cards}
      />

      <ServiceSectionVisual
        eyebrow="デジタルメディア事業"
        title="スポーツアナリティクス特化型ニュースサイト『Deep Sports』の運営"
        description="スポーツアナリティクス特化のデジタルメディア『Deep Sports』を企画・運営。データで“観る”深い考察記事、経済学を学べる解説、Jリーグや競馬の予測モデルを発信し、データ活用で新しい観戦体験を提供します。"
        image={{
          src: "/deepsports.png",
          alt: "CRMの概念図",
        }}
        visualLink={{ href: "/services/media" }}
      />

      <ServiceSectionVisual
        eyebrow="ヘルスケア事業"
        title="データ×行動科学で健康行動を後押しするヘルスケア関連アプリを開発中"
        description="栄養・運動・睡眠・ストレスをアプリで可視化し、性格特性や生活データに合わせたナッジで行動変容を支援。理学療法士・栄養士と連携した健康コンサルや個別レポートを提供し、個人の改善から法人・自治体の健康経営まで伴走します。"
        image={{
          src: "/storyfit_top.png",
          alt: "CRMの概念図",
        }}
        visualLink={{ href: "/services/healthcare" }}
      />

      <ServiceSectionVisual
        eyebrow="ブロックチェーン事業"
        title="Web3・NFT活用で価値創出するブロックチェーン事業"
        description="ブロックチェーンの専門知見で、Web3/NFT戦略設計からスマートコントラクト開発、ウォレット・オンチェーン分析、トークングラフ／トークノミクス設計、CRM連携まで一気通貫支援。ファンコミュニティ活性化と新規収益創出を実現します。"
        image={{
          src: "/services_analytics_hero.jpg",
          alt: "CRMの概念図",
        }}
        visualLink={{ href: "/services/blockchain" }}
      />

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
      <section className={styles.categoryLinks}>
        <div className={styles.inner}>
          <div className={styles.categoryGrid}>
            <Link href="/data/whitepaper" className={styles.categoryLargeCard}>
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
