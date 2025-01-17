import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.detailPage}>
      {/* 記事ヘッダー */}
      <div className={styles.header}>
        <span className={styles.category}>施策実行支援</span>
        <h1 className={styles.title}>
          施策を実行する際のターゲット選定やOne-to-Oneコミュニケーションに活用
        </h1>
      </div>
      {/* 記事本文 */}
      <div className={styles.content}>
        <p>
          MyStoryではマーケティングPDCAに対応した各種分析ソリューションを用意しております。
        </p>
        <p>本ページでは「施策実行支援」の際に役立つ分析を紹介します。</p>
        <h2>こんなシーンで使えます！</h2>
        <ul>
          <li>サービスを利用してくれそうな顧客を見極めたい</li>
          <li>施策に接触することで行動変容しやすい人を知りたい</li>
          <li>顧客ごとの家庭内在庫量を知りたい</li>
        </ul>
      </div>
      {/* 分析事例 */}
      <div className={styles.highlight}>
        <h3>分析事例</h3>
        <ul>
          <li>
            <strong>二値分類（or 多クラス分類）:</strong>{" "}
            教師データをもとに予測モデルを作成
          </li>
          <li>
            <strong>アップリフトモデリング:</strong>{" "}
            施策対象者数が限られているときに有効
          </li>
          <li>
            <strong>動的個人モデル:</strong> 顧客ごとに動的に家庭内在庫量を推定
          </li>
        </ul>
      </div>
      {/* イメージ */}
      <div className={styles.mainImage}>
        <Image
          src="/photo_service_detail_dataanalytics_image2_1.png"
          alt="時系列予測"
          width={900}
          height={600}
          className={styles.image}
        />
        <Image
          src="/photo_service_detail_dataanalytics_image2_2.png"
          alt="二項分布"
          width={900}
          height={600}
          className={styles.image}
        />
        <Image
          src="/photo_service_detail_dataanalytics_image2_3.png"
          alt="需要推定"
          width={900}
          height={600}
          className={styles.image}
        />
      </div>
      {/* 外部リンク */}
      <div className={styles.linkSection}>
        <Link
          href="https://drive.google.com/file/d/1DFpvcOSyEjnOz26erbdIU3zRR2gTBE3n/view?usp=drive_link"
          target="_blank"
        >
          その他の分析事例を見る
        </Link>
      </div>
    </main>
  );
}
