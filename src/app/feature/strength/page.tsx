import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>MyStoryの強み</h1>
          <p className={styles.description}>
            日本国内には数多くのデータ分析会社がありますが、それぞれ強みとする領域は異なります。
            <br />
            簡単ではありますが、当社の強みや特徴についてまとめています。
          </p>
        </div>
      </div>
    </div>
  );
}
