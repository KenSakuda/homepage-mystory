import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

type Props = {
  params: {
    id: string;
  };
};

type ServiceDetail = {
  title: string;
  description: string;
  content: string[];
  images: string[];
};

// IDごとの表示内容を定義
const serviceDetails: Record<string, ServiceDetail> = {
  "1": {
    title: "マーケティング戦略策定",
    description: "4P戦略検討やシミュレーションを通じてマーケティング活動高度化",
    content: [
      "各種KPIの将来の値の予測をしたい",
      "目標リーチに必要なメール送付回数を知りたい",
      "価格値上げ時の影響をシミュレーションしたい",
    ],
    images: [
      "/photo_service_detail_dataanalytics_image1_1.png",
      "/photo_service_detail_dataanalytics_image1_2.png",
      "/photo_service_detail_dataanalytics_image1_3.png",
    ],
  },
  "2": {
    title: "施策実行支援",
    description:
      "施策実行をスムーズに支援し、プロジェクトの成功をサポートします。",
    content: [
      "キャンペーンの実行計画立案",
      "効果的な広告配信戦略の策定",
      "実行後のパフォーマンスモニタリング",
    ],
    images: [
      "/photo_service_detail_dataanalytics_image2_1.png",
      "/photo_service_detail_dataanalytics_image2_2.png",
      "/photo_service_detail_dataanalytics_image2_3.png",
    ],
  },
  "3": {
    title: "効果検証",
    description: "データ分析を活用し、実施した施策の効果を客観的に評価します。",
    content: [
      "広告施策の効果測定",
      "顧客満足度向上のための定量評価",
      "データに基づく施策改善提案",
    ],
    images: [
      "/photo_service_detail_dataanalytics_image3_1.png",
      "/photo_service_detail_dataanalytics_image3_2.png",
      "/photo_service_detail_dataanalytics_image3_3.png",
    ],
  },
  "4": {
    title: "データ分析人材育成",
    description:
      "次世代のデータ分析人材を育成し、チーム全体のスキル向上を目指します。",
    content: [
      "データサイエンティスト研修",
      "SQL や Python のプログラム講習",
      "実践的なデータ分析プロジェクトの実施",
    ],
    images: [],
  },
};

export default function Page({ params }: Props) {
  const { id } = params;
  const detail = serviceDetails[id];

  if (!detail) {
    notFound();
  }

  return (
    <main className={styles.detailPage}>
      <div className={styles.header}>
        <span className={styles.category}>{detail.title}</span>
        <h1 className={styles.title}>{detail.description}</h1>
      </div>
      <div className={styles.content}>
        <h2>こんなシーンで使えます！</h2>
        <ul>
          {detail.content.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.mainImage}>
        {detail.images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Service Image ${index + 1}`}
            width={900}
            height={600}
            className={styles.image}
          />
        ))}
      </div>
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
