import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>
            動画コンテンツ一覧　※コンテンツ準備中
          </h1>
          <p className={styles.description}>
            データ分析や経済学などについて、わかりやすく解説した動画コンテンツを順次展開していきますので、提供開始まで今しばらくお待ちください。
          </p>
        </div>
      </div>
    </div>
  );
}
