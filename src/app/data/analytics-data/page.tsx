import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

type AnalyticsReport = {
  id: string;
  title: string;
  categories: string[];
  date: string;
  imageUrl: string;
  url: string;
  targets: string[];
};

const data: AnalyticsReport[] = [
  {
    id: "1",
    title: "施策導入がKPIに与えた影響の効果検証",
    categories: ["データ分析", "時系列予測", "グレンジャー因果性検定"],
    date: "2025/7/5",
    imageUrl: "/data_analytics_consulting_outsourcing.png",
    url: "/contact",
    targets: [
      "時系列予測モデルによる将来予測をしてみたい方",
      "施策効果を精緻に把握したい方",
    ],
  },
];

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>データ分析結果</h1>
          <p className={styles.description}>
            MyStoryで過去に実施したデータ分析結果に関する資料を無料でダウンロードいただけます。
          </p>
        </div>
      </div>
      <div className={styles.breadcrumb}>
        <span>
          <Link href="/">TOPページ</Link>
        </span>{" "}
        &gt; <span className={styles.current}>データ分析結果</span>
      </div>
      <div className={styles.grid}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <div className={styles.categories}>
                {item.categories.map((cat) => (
                  <span key={cat} className={styles.category}>
                    {cat}
                  </span>
                ))}
              </div>
              <div className={styles.targetArea}>
                <p className={styles.targetTitle}>こんな方にお薦め</p>
                <ul className={styles.targetList}>
                  {item.targets.map((target) => (
                    <li key={target}>{target}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.footer}>
                <span className={styles.date}>{item.date}</span>
                <Link
                  href={item.url}
                  className={styles.button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  資料をダウンロード
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
