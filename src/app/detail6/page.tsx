import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.detailPage}>
      {/* 記事ヘッダー */}
      <div className={styles.header}>
        <span className={styles.category}>DApps開発</span>
        <h1 className={styles.title}>ブロックチェーンアプリの開発</h1>
      </div>
      {/* 記事本文 */}
      <div className={styles.content}>
        <p>
          Ethereumやその他のEVMチェーンで動作するスマートコントラクト開発において、トークン、NFT、および分散型取引所（DEX）の構築を支援します。
        </p>
      </div>
    </main>
  );
}
