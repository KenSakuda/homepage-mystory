import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.detailPage}>
      {/* 記事ヘッダー */}
      <div className={styles.header}>
        <span className={styles.category}>データ分析人材育成</span>
        <h1 className={styles.title}>
          データ分析人材を内製化するための育成支援
        </h1>
      </div>
      {/* 記事本文 */}
      <div className={styles.content}>
        <p>
          MyStoryではこれまで学生（大学生、大学院生、専門学校生）、社会人問わず、数多くのデータ分析人材の育成を支援してきました。
        </p>
        <p>
          これまでのナレッジをもとに、統計的に正しくデータを分析し、分析結果をビジネスに活用できる人材の内製化支援をすることが可能です。
        </p>
        <h2>こんなシーンで使えます！</h2>
        <ul>
          <li>社内でデータ分析人材を育てたいが、育成ノウハウがない</li>
          <li>
            貯まっているデータを有効活用したいが、社内にデータ分析の専門家がいない
          </li>
          <li>全社のデータ分析をリードできるPM、リーダーを育てたい</li>
        </ul>
      </div>
      {/* 分析事例 */}
      <div className={styles.highlight}>
        <h3>支援事例</h3>
        <ul>
          <li>
            <strong>プロジェクト型育成支援:</strong>{" "}
            チームを組成しプロジェクト型で内製化を支援
          </li>
          <li>
            <strong>セミナー開催:</strong>{" "}
            データ分析人材をゼロから育成するために必要なセミナーを開催
          </li>
          <li>
            <strong>技術アドバイザリー:</strong>{" "}
            分析設計や手法について都度アドバイス
          </li>
        </ul>
      </div>
    </main>
  );
}
