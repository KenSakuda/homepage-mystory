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
          <p>
            データ分析コンサルティング、ブロックチェーン開発、コンテンツ制作・デジタルメディアの運営など
          </p>
        </div>
        <div className={styles.infoCard}>
          <h2>資本金</h2>
          <p>3,000,000円</p>
        </div>
        <div className={styles.infoCard}>
          <h2>所在地</h2>
          <p>東京都港区南青山二丁目2番15号 ウィン青山942</p>
        </div>
        <div className={styles.infoCard}>
          <h2>プライバシーポリシー</h2>
          <Link href="/privacypolicy">Privacy policy</Link>
        </div>
      </div>
    </section>
  );
}
