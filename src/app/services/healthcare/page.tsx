import styles from "./page.module.css";
import ServicesHero from "../_components/Hero";

export default function Page() {
  return (
    <main className={styles.main}>
      <ServicesHero
        title="ヘルスケア事業"
        subtitle="ヘルスケア関連アプリ『Health Story』を開発中です。プロダクトのローンチは2025年11月頃を予定しております。"
        imageUrl="/services_analytics_hero.jpg"
      />
    </main>
  );
}
