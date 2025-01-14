import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.detailPage}>
      {/* 記事ヘッダー */}
      <div className={styles.header}>
        <span className={styles.category}>マーケティング戦略策定</span>
        <h1 className={styles.title}>
          4P戦略検討やシミュレーションを通じて
          <br />
          マーケティング活動高度化
        </h1>
      </div>
      {/* 記事本文 */}
      <div className={styles.content}>
        <p>
          MyStoryではマーケティングPDCAに対応した各種分析ソリューションを用意しております。
        </p>
        <p>
          本ページでは「マーケティングPlan策定」の際に役立つ分析を紹介します。
        </p>
        <h2>こんなシーンで使えます！</h2>
        <ul>
          <li>各種KPIの将来の値の予測をしたい</li>
          <li>目標リーチに必要なメール送付回数を知りたい</li>
          <li>価格値上げ時の影響をシミュレーションしたい</li>
        </ul>
      </div>
      {/* 分析事例 */}
      <div className={styles.highlight}>
        <h3>分析事例</h3>
        <ul>
          <li>
            <strong>時系列予測:</strong>{" "}
            今後の顧客数や解約数をXGBoostを用いて予測
          </li>
          <li>
            <strong>確率分布:</strong>{" "}
            メール送付回数を1回増やしたときのリーチの増分を確率分布で推定
          </li>
          <li>
            <strong>需要推定:</strong>{" "}
            ミクロ計量経済学モデルを用いて需要と供給を同時推定
          </li>
        </ul>
      </div>
      {/* イメージ */}
      <div className={styles.mainImage}>
        <Image
          src="/photo_service_detail_dataanalytics_image1_1.png"
          alt="時系列予測"
          width={900}
          height={600}
          className={styles.image}
        />
        <Image
          src="/photo_service_detail_dataanalytics_image1_2.png"
          alt="二項分布"
          width={900}
          height={600}
          className={styles.image}
        />
        <Image
          src="/photo_service_detail_dataanalytics_image1_3.png"
          alt="需要推定"
          width={900}
          height={600}
          className={styles.image}
        />
      </div>
      {/* 外部リンク */}
      <div className={styles.linkSection}>
        <Link
          href="https://drive.google.com/file/d/1gW5skFEqTr2RtEwlXsdDt2LBFRLPgHCb/view?usp=drive_link"
          target="_blank"
        >
          その他の分析事例を見る
        </Link>
      </div>
    </main>
  );
}
