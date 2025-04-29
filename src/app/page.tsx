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
  const columns = await getColumnList({ limit: TOP_NEWS_LIMIT });

  return (
    <>
      <section className={styles.mainVisual}>
        <div className={styles.mainTextWrapper}>
          <div className={styles.mainText}>
            <h2>
              <span className={styles.small}>
                先端技術の力で世の中を「ちょっと楽しく」＆「ちょっと便利に」
              </span>
              <br />
              <span className={styles.orenge}>
                データに基づいた意思決定を支援
              </span>
            </h2>
            <p>
              データ分析や経済学のビジネス活用のご相談ならMyStory
              <br className={styles.sp} />
              マーケティング、ピープルアナリティクス、スポーツアナリティクスなど幅広い領域に対応可能
            </p>
          </div>
          <div className={styles.buttonArea}>
            <Link href="/contact" className={styles.button}>
              <Image
                src="/icon_mail.svg"
                alt="estimate"
                width={35}
                height={35}
              />
              <div>
                詳しく話を聞きたい
                <br />
                <strong>ご相談はこちら</strong>
              </div>
            </Link>
            <Link
              href="/deepsports"
              className={`${styles.button} ${styles.consult}`}
            >
              <Image
                src="/icon_sports.svg"
                alt="consult"
                width={35}
                height={35}
              />
              <div>
                2025年5月10日ローンチ！
                <br />
                <strong>『Deep Sports』ニュースサイトへ</strong>
              </div>
            </Link>
          </div>
        </div>
        <Image
          className={styles.bgimg}
          src="/hero.png"
          alt="Hero Background"
          width={4000}
          height={1200}
          priority
        />
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
              <h3>データ分析ツール</h3>
              <p>特徴の異なる複数の分析ツールの開発・販売</p>
            </Link>
            <Link
              href="/services/analytics/solutions"
              className={styles.serviceCard}
            >
              <Image
                src="/services_analytics_solution.jpg"
                alt="データ分析ソリューション"
                width={300}
                height={300}
                className={styles.serviceImage}
              />
              <h3>データ分析ソリューション</h3>
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
              <h3>デジタルメディア</h3>
              <p>
                スポーツアナリティクス特化型ニュースサイト「Deep Sports」の運営
              </p>
            </Link>
            <Link href="/services/blockchain" className={styles.serviceCard}>
              <Image
                src="/services_analytics_hero.jpg"
                alt="ブロックチェーン"
                width={300}
                height={300}
                className={styles.serviceImage}
              />
              <h3>ブロックチェーン</h3>
              <p>ブロックチェーン技術を活用したポイントサービスを開発中</p>
            </Link>
            <Link href="/services/healthcare" className={styles.serviceCard}>
              <Image
                src="/services_analytics_hero.jpg"
                alt="ヘルスケア"
                width={300}
                height={300}
                className={styles.serviceImage}
              />
              <h3>ヘルスケア</h3>
              <p>ヘルスケア関連アプリ「Health Story」を開発中</p>
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
          <p>データ分析や経済学に関するコラムや用語解説をまとめています</p>
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
