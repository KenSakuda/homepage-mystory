import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <section className={styles.companysection}>
      <h1 className={styles.title}>会社情報</h1>
      <div className={styles.titleSeparator}></div>
      <div className={styles.companyInfo}>
        <div className={styles.infoCard}>
          <h2>社名</h2>
          <p>株式会社MyStory</p>
        </div>
        <div className={styles.infoCard}>
          <h2>代表者</h2>
          <p>代表取締役 作田健</p>
        </div>
        <div className={styles.infoCard}>
          <h2>事業内容</h2>
          <ul>
            <li>データ分析コンサルティング</li>
            <li>データ分析ツールの開発、並びに販売</li>
            <li>スポーツニュースサイト「Deep Sports」の運営</li>
            <li>
              自社開発マーケットプレイスの運営、並びにブロックチェーン受託開発
            </li>
            <li>ヘルスケア関連アプリの企画・開発</li>
          </ul>
        </div>
        <div className={styles.infoCard}>
          <h2>所在地</h2>
          <p>東京都港区南青山二丁目2番15号 ウィン青山942</p>
        </div>
        <div className={styles.infoCard}>
          <h2>従事者数</h2>
          <p>9名 ※正社員以外も含む</p>
        </div>
        <div className={styles.infoCard}>
          <h2>資本金</h2>
          <p>3,000,000円</p>
        </div>
        <div className={styles.infoCard}>
          <h2>加盟学会</h2>
          <p>
            日本行動計量学会、日本消費者行動研究学会、日本統計学会
            スポーツデータサイエンス分科会
          </p>
        </div>
        <div className={styles.infoCard}>
          <h2>プライバシーポリシー</h2>
          <Link href="/privacypolicy" className={styles.link}>
            Privacy policy
          </Link>
        </div>
      </div>
    </section>
  );
}
