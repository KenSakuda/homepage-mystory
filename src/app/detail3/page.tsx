import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.detailPage}>
      {/* 記事ヘッダー */}
      <div className={styles.header}>
        <span className={styles.category}>効果検証</span>
        <h1 className={styles.title}>
          様々なシーンに対応可能な効果検証
          <br />
          ・推定手法でビジネス成果を正しく評価
        </h1>
      </div>
      {/* 記事本文 */}
      <div className={styles.content}>
        <p>
          MyStoryではマーケティングPDCAに対応した各種分析ソリューションを用意しております。
        </p>
        <p>本ページでは「効果検証」の際に役立つ分析を紹介します。</p>
        <h2>こんなシーンで使えます！</h2>
        <ul>
          <li>施策効果を確からしく検証したい</li>
          <li>要素ごとに「何が」「どれだけ」効果があったのか知りたい</li>
          <li>施策効果を早期に推定したい</li>
        </ul>
      </div>
      {/* 分析事例 */}
      <div className={styles.highlight}>
        <h3>分析事例</h3>
        <ul>
          <li>
            <strong>回帰分析:</strong>{" "}
            回帰分析とベイズ推定を組み合わせることで、要素ごとの効果量を推定
          </li>
          <li>
            <strong>傾向スコアマッチング:</strong>{" "}
            バイアスを可能な限り制御し、施策効果を確からしく検証
          </li>
          <li>
            <strong>Surrogate IndexSurrogate Index:</strong>{" "}
            中長期的な施策効果を早期に推定
          </li>
        </ul>
      </div>
      {/* イメージ */}
      <div className={styles.mainImage}>
        <Image
          src="/photo_service_detail_dataanalytics_image3_1.png"
          alt="時系列予測"
          width={900}
          height={600}
          className={styles.image}
        />
        <Image
          src="/photo_service_detail_dataanalytics_image3_2.png"
          alt="二項分布"
          width={900}
          height={600}
          className={styles.image}
        />
        <Image
          src="/photo_service_detail_dataanalytics_image3_3.png"
          alt="需要推定"
          width={900}
          height={600}
          className={styles.image}
        />
      </div>
      {/* 外部リンク */}
      <div className={styles.linkSection}>
        <Link
          href="https://drive.google.com/file/d/17T-TOIBodW6jnSfDBzl9ckqrphrj9Ja3/view?usp=drive_link"
          target="_blank"
        >
          その他の分析事例を見る
        </Link>
      </div>
    </main>
  );
}
