import styles from "./page.module.css";
import ServicesHero from "../_components/Hero";

export default function Page() {
  return (
    <main className={styles.main}>
      <ServicesHero
        title="ブロックチェーン事業"
        subtitle="ブロックチェーン技術を活用したポイントサービス『＠Point』を開発中です。プロダクトのローンチは2025年9月頃を予定しております。"
        imageUrl="/services_analytics_hero.jpg"
      />
    </main>
  );
}
