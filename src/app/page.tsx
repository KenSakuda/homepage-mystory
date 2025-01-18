import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import ServicesSection from "./_components/ServicesSection";
import CompanySection from "./_components/CompanySection";
import ContactSection from "./_components/ContactSection";

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            "〇〇 × データサイエンス"で作るちょっと便利な未来
          </h1>
          <p className={styles.description}>
            データサイエンスと何かをかけ合わせることで、企業活動や人々の生活を豊かなものにするお手伝いをします
          </p>
          <ul>
            <li>マーケティング × データサイエンス</li>
            <li>スポーツ × データサイエンス</li>
            <li>ヘルスケア × データサイエンス</li>
            <li>ブロックチェーン × データサイエンス</li>
          </ul>
        </div>
        <Image
          className={styles.bgimg}
          src="/hero.jpg"
          alt="Hero Background"
          width={4000}
          height={1200}
          priority
        />
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <CompanySection />

      {/* News Section */}
      <section className={styles.news}>
        <div className={styles.newsTitle}>
          <h2>News</h2>
          <p>お知らせ</p>
        </div>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">お知らせ一覧</ButtonLink>
        </div>
      </section>
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
