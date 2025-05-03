import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>データ分析結果　※資料準備中</h1>
          <p className={styles.description}>
            MyStoryで過去に実施したデータ分析結果に関する資料を無料でダウンロードいただけます。
          </p>
        </div>
      </div>
    </div>
  );
}
