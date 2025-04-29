import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>
            【無料】データ分析結果　※資料準備中
          </h1>
          <p className={styles.description}>
            MyStoryで過去に実施したデータ分析結果のうち、『公開可能な』資料を無料でダウンロードいただけます。
            <br />
            ダウンロード後に、資料詳細内容についてWEB会議でのご説明も可能です。
          </p>
        </div>
      </div>
    </div>
  );
}
