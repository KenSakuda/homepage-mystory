import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

type WhitePaper = {
  id: string;
  title: string;
  categories: string[];
  date: string;
  imageUrl: string;
  url: string;
  targets: string[];
};

const data: WhitePaper[] = [
  {
    id: "1",
    title: "MyStory データ分析総合ソリューション集",
    categories: ["データ分析"],
    date: "2025/4/28",
    imageUrl: "/whitepaper_dataanalytics_solutions.png",
    url: "/contact",
    targets: [
      "分析によって何ができるかわからない方",
      "マーケティングシーン別の分析手法を知りたい方",
      "データドリブンにビジネスを推進したい方",
    ],
  },
  {
    id: "2",
    title: "価格分析ソリューション『Price Decisioning』",
    categories: ["データ分析", "プライシング（価格戦略）"],
    date: "2025/4/28",
    imageUrl: "/analytics_pricedecisioning.png",
    url: "/contact",
    targets: [
      "価格戦略に携わっている方",
      "売上を最大化する価格を把握したい方",
      "ダイナミックプライシングのような発展的な価格戦略を導入したい方",
    ],
  },
  {
    id: "3",
    title: "マーケットシェア推定ソリューション『ダイナミックシェア』",
    categories: ["データ分析", "マーケットシェア"],
    date: "2025/7/1",
    imageUrl: "/表紙_ダイナミックシェア.png",
    url: "/contact",
    targets: [
      "自社ブランドの将来のシェアを推定したい方",
      "マーケティング担当者や経営企画部の方",
      "競合や社会動向を考慮した精緻なシミュレーションをしたい方",
    ],
  },
];
export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>ソリューション資料</h1>
          <p className={styles.description}>
            当社のデータ分析ソリューションや、コンサルティングサービスに関する「お役立ち資料」を無料でダウンロードできます。
            <br />
            ダウンロード後に、資料詳細内容についてWEB会議でのご説明も可能です。
          </p>
        </div>
      </div>
      <div className={styles.breadcrumb}>
        <span>
          <Link href="/">TOPページ</Link>
        </span>{" "}
        &gt; <span className={styles.current}>ソリューション資料</span>
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
