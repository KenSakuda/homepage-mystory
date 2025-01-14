import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.detailPage}>
      {/* 記事ヘッダー */}
      <div className={styles.header}>
        <span className={styles.category}>category</span>
        <h1 className={styles.title}>詳細ページ準備中</h1>
      </div>
    </main>
  );
}
