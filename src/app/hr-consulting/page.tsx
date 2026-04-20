import Link from "next/link";
import styles from "./page.module.css";

const solutionCategories = [
  {
    id: "system",
    en: "HR System Design",
    title: "人事制度構築",
    description:
      "経営方針や事業特性に合わせて、人事制度を“運用できる形”まで落とし込みます。制度の設計だけでなく、評価・報酬・等級のつながりまで一貫して整理します。",
    items: [
      {
        title: "ジョブ型 / スキルベース人事制度構築",
        text: "職務・役割・保有スキルをもとに、人材要件と処遇の接続を整理。制度設計だけでなく、運用時の定義の曖昧さや現場負荷にも配慮して構築します。",
      },
      {
        title: "報酬（インセンティブ）設計",
        text: "固定給・賞与・インセンティブのバランスを見直し、納得感と行動変容の両立を目指します。人件費の持続可能性や評価制度との整合も踏まえて設計します。",
      },
      {
        title: "役割等級制度構築",
        text: "年功的な運用から脱却し、期待役割と責任の大きさに応じた等級制度を設計。等級定義・昇降格基準・職種横断の整理まで支援します。",
      },
      {
        title: "人事評価制度構築",
        text: "成果・行動・能力評価の考え方を整理し、会社の成長フェーズに合った評価制度へ。評価項目の設計だけでなく、評価のブレを抑える運用面も重視します。",
      },
    ],
  },
  {
    id: "talent",
    en: "Recruiting & Development",
    title: "人材採用・育成",
    description:
      "採用から育成までを分断せず、必要人材の定義・獲得・戦力化を一体で設計します。感覚論ではなく、事業計画や人材要件を起点に支援します。",
    items: [
      {
        title: "人材ポートフォリオ検討支援",
        text: "事業戦略や組織課題に対して、どのような人材を・どの程度・どこに配置すべきかを整理。将来の必要人材像まで見据えた検討を支援します。",
      },
      {
        title: "人材採用コンサルティング",
        text: "採用ターゲットの再定義、訴求軸の整理、選考設計の見直しなどを通じて、採用競争力の向上を支援。採用後の定着や活躍まで含めて検討します。",
      },
      {
        title: "教育研修（& 効果検証）",
        text: "研修を実施して終わりにせず、事前課題・受講後の変化・現場実装まで設計。必要に応じてアンケートや評価データを用いた効果検証も行います。",
      },
    ],
  },
  {
    id: "analytics",
    en: "HR Analytics",
    title: "人事データ分析",
    description:
      "人事制度や採用・育成施策を、勘と経験だけでなくデータでも検証できる状態へ。MyStoryの強みであるデータ分析・統計モデリングの知見を人事領域に活用します。",
    items: [
      {
        title: "人件費シミュレーション",
        text: "昇給・賞与・採用計画・等級変更などが人件費にどう影響するかを可視化。複数シナリオを比較し、意思決定に使いやすい形で整理します。",
      },
      {
        title: "ピープルアナリティクス",
        text: "退職予測、ハイパフォーマー分析、配置最適化、評価傾向分析など、人事課題に応じた分析テーマを設計。現場で使える示唆につなげます。",
      },
      {
        title: "エンゲージメントサーベイ / スキルチェックシート",
        text: "サーベイやチェックシートの設計、実施、集計、示唆抽出まで支援。目的に応じて設問設計を見直し、施策立案につながるアウトプットを整えます。",
      },
      {
        title: "データ補正方法（アンカリングヴィネットなど）",
        text: "自己評価や上司評価のバイアスを考慮し、より妥当な比較や評価解釈を目指す補正アプローチを導入。評価データをそのまま使うことの限界にも向き合います。",
      },
    ],
  },
];

const strengths = [
  {
    title: "制度設計とデータ分析の両輪",
    text: "制度を作るだけ、分析するだけで終わらず、制度運用と検証までつなげる支援が可能です。",
  },
  {
    title: "現場運用まで見据えた設計",
    text: "理想論ではなく、評価者・管理職・人事部門が実際に回せる制度やフローを重視します。",
  },
  {
    title: "定量・定性の両面から整理",
    text: "人事制度、採用、育成、エンゲージメントなど複数テーマを横断して課題を整理します。",
  },
];

const processSteps = [
  {
    no: "01",
    title: "課題整理",
    text: "事業・組織の状況や現行制度を確認し、論点を明確化します。",
  },
  {
    no: "02",
    title: "設計・分析",
    text: "制度設計、人材要件整理、各種分析やシミュレーションを実施します。",
  },
  {
    no: "03",
    title: "導入・運用支援",
    text: "運用ルール、説明資料、定着支援まで含めて実装を後押しします。",
  },
];

export default function HrConsultingSolutionPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>HR Consulting Solutions</p>
          <h1 className={styles.heroTitle}>
            人事コンサルティング事業のソリューション
          </h1>
          <p className={styles.heroLead}>
            制度設計、人材採用・育成、人事データ分析まで。
            <br />
            MyStoryは、組織・人事の課題を構想だけで終わらせず、
            実行しやすい仕組みへ落とし込む支援を行います。
          </p>

          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              ご相談・お問い合わせ
            </Link>
            <a href="#solution-list" className={styles.secondaryButton}>
              ソリューション一覧を見る
            </a>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Overview</p>
          <h2 className={styles.sectionTitle}>
            人事課題を、制度・運用・データの3方向から支援
          </h2>
        </div>

        <div className={styles.introGrid}>
          <div className={styles.introMain}>
            <p>
              人事制度の見直し、採用や育成の再設計、エンゲージメントや評価データの活用など、
              人事領域のテーマは相互に関係しています。
            </p>
            <p>
              MyStoryでは、制度づくりだけでなく、必要に応じてデータ分析やシミュレーションも組み合わせながら、
              クライアントの状況に合わせた支援を行います。
            </p>
          </div>

          <div className={styles.introAside}>
            <div className={styles.summaryCard}>
              <span className={styles.summaryNumber}>3</span>
              <span className={styles.summaryLabel}>Solution Categories</span>
            </div>
            <div className={styles.summaryCard}>
              <span className={styles.summaryNumber}>11</span>
              <span className={styles.summaryLabel}>Service Menus</span>
            </div>
          </div>
        </div>

        <div className={styles.strengthGrid}>
          {strengths.map((strength) => (
            <div key={strength.title} className={styles.strengthCard}>
              <h3>{strength.title}</h3>
              <p>{strength.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.anchorSection}>
        <div className={styles.anchorInner}>
          <a href="#system" className={styles.anchorLink}>
            人事制度構築
          </a>
          <a href="#talent" className={styles.anchorLink}>
            人材採用・育成
          </a>
          <a href="#analytics" className={styles.anchorLink}>
            人事データ分析
          </a>
        </div>
      </section>

      <section id="solution-list" className={styles.solutionSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Solutions</p>
          <h2 className={styles.sectionTitle}>ソリューション一覧</h2>
        </div>

        <div className={styles.categoryList}>
          {solutionCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className={styles.categoryBlock}
            >
              <div className={styles.categoryHeading}>
                <div>
                  <p className={styles.categoryEn}>{category.en}</p>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                <p className={styles.categoryDescription}>
                  {category.description}
                </p>
              </div>

              <div className={styles.cardGrid}>
                {category.items.map((item) => (
                  <article key={item.title} className={styles.solutionCard}>
                    <div className={styles.cardTop}>
                      <span className={styles.cardBadge}>{category.title}</span>
                    </div>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    <p className={styles.cardText}>{item.text}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Process</p>
          <h2 className={styles.sectionTitle}>ご支援の進め方</h2>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map((step) => (
            <div key={step.no} className={styles.processCard}>
              <span className={styles.processNo}>{step.no}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <div className={styles.ctaContent}>
            <p className={styles.sectionLabel}>Contact</p>
            <h2 className={styles.ctaTitle}>
              制度設計から人事データ活用まで、
              <br />
              課題に合わせてご相談いただけます
            </h2>
            <p className={styles.ctaText}>
              「制度の見直しをしたい」「評価や報酬の設計に悩んでいる」
              「人事データをもっと意思決定に活かしたい」など、
              まずはお気軽にご相談ください。
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.primaryButton}>
              お問い合わせはこちら
            </Link>
            <Link href="/company" className={styles.textLink}>
              会社情報を見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
