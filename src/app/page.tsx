import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { getNewsList, getColumnList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ColumnCards from "./_components/ColumnCards";
import ButtonLink from "@/app/_components/ButtonLink";
import ContactSection from "./_components/ContactSection";

export default async function Page() {
  const news = await getNewsList({ limit: TOP_NEWS_LIMIT });
  const columns = await getColumnList({ limit: 100 });

  return (
    <>
      <section className={styles.hero}>
        <video
          className={styles.bgVideo}
          src="/hero.gif"
          poster="/hero.gif"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            <span className={styles.kicker}>
              先端技術と経済学で、意思決定をもっと強く・スマートに
            </span>
            <span className={styles.headline}>
              データに基づいた
              <em> 意思決定を支援</em>
            </span>
            <span className={styles.subcopy}>
              データ分析や経済学のビジネス活用のご相談ならMyStory
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

      <section className={styles.service}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>
            SERVICE
            <span>当社の取り扱いサービスについてご紹介します</span>
          </h2>
          <div className={styles.serviceCards}>
            <Link
              href="/services/analytics/tools"
              className={styles.serviceCard}
            >
              <Image
                src="/services_analytics_tool_hero.jpg"
                alt="データ分析ツール"
                width={300}
                height={300}
                className={styles.serviceImage}
              />
              <h3>データ分析ツールの提供</h3>
              <p>特徴の異なる複数の分析ツールの開発・販売</p>
            </Link>
            <Link
              href="/services/analytics/consulting"
              className={styles.serviceCard}
            >
              <Image
                src="/services_analytics_solution.jpg"
                alt="データ分析コンサルティング"
                width={300}
                height={300}
                className={styles.serviceImage}
              />
              <h3>データ分析コンサルティング</h3>
              <p>マーケティングPDCAの各シーンに対応したソリューションを用意</p>
            </Link>
            <Link href="/services/media" className={styles.serviceCard}>
              <Image
                src="/deepsports.png"
                alt="デジタルメディア"
                width={300}
                height={300}
                className={styles.serviceImage}
              />
              <h3>デジタルメディアの運営</h3>
              <p>
                スポーツアナリティクス特化型ニュースサイト『Deep Sports』の運営
              </p>
            </Link>
            <Link href="/services/healthcare" className={styles.serviceCard}>
              <Image
                src="/storyfit_top.png"
                alt="ヘルスケア"
                width={300}
                height={300}
                className={styles.serviceImage}
              />
              <h3>ヘルスケアApp開発</h3>
              <p>ヘルスケア関連アプリ『Story Fit』を開発中</p>
            </Link>
            <Link href="/services/blockchain" className={styles.serviceCard}>
              <Image
                src="/services_analytics_hero.jpg"
                alt="ブロックチェーン"
                width={300}
                height={300}
                className={styles.serviceImage}
              />
              <h3>ブロックチェーンサービス開発</h3>
              <p>ブロックチェーン技術を活用したポイントサービスを開発中</p>
            </Link>
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
      <section className={styles.news}>
        <div className={styles.newsTitle}>
          <h2>Column</h2>
          <p>
            データ分析や経済学に関するコラムや、統計の用語解説などをまとめています
          </p>
        </div>
        <div className={styles.columnGrid}>
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
