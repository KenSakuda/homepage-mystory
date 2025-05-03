import styles from "./page.module.css";
import ServicesHero from "../_components/Hero";

export default function Page() {
  return (
    <main className={styles.main}>
      <ServicesHero
        title="ブロックチェーン事業"
        subtitle="MyStoryでは、これまで数多くのスマートコントラクトの受託開発を請け負ってきました。現在はブロックチェーン技術を活用したポイントサービス『＠Point』を開発中です。ポイント制度の導入には大きなコストがかかり、資金面に余裕のある大手企業以外では難しいことが多いです。初期コストをかけられない企業においても、ブロックチェーン技術を活用することでポイント制度の仕組みを構築可能です。プロダクトのローンチは2025年9月頃を予定しております。"
        imageUrl="/services_analytics_hero.jpg"
      />
    </main>
  );
}
