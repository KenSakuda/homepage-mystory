import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import ButtonLink from "@/app/_components/ButtonLink";

/* =========
   Types
   ========= */

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type HeroTag = {
  label: string;
};

type CaseMetaItem = {
  label: string;
  value: string;
};

type KPIItem = {
  label: string;
  value: string;
  description: string;
};

type ProcessStep = {
  label: string;
  title: string;
  description: string;
};

type InsightItem = {
  title: string;
  text: string;
};

type SidebarCardProps = {
  title: string;
  children: ReactNode;
};

/* =========
   Reusable Components (text-free)
   ========= */

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className={styles.breadcrumb} aria-label="breadcrumb">
      <ol className={styles.breadcrumbList}>
        {items.map((item, index) => (
          <li key={item.label} className={styles.breadcrumbItem}>
            {item.href && index !== items.length - 1 ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span
                aria-current={index === items.length - 1 ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function HeroSection({
  eyebrow,
  title,
  lead,
  tags,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  tags: HeroTag[];
}) {
  return (
    <header className={styles.hero}>
      <p className={styles.heroEyebrow}>{eyebrow}</p>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroLead}>{lead}</p>
      {tags.length > 0 && (
        <ul className={styles.heroTags}>
          {tags.map((tag) => (
            <li key={tag.label} className={styles.heroTag}>
              {tag.label}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function ContentSection({
  id,
  kicker,
  title,
  children,
}: {
  id?: string;
  kicker?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={styles.section}>
      {kicker && <p className={styles.sectionKicker}>{kicker}</p>}
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

function TwoColumnSection({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className={styles.twoColumn}>
      <div className={styles.twoColumnMain}>{left}</div>
      <aside className={styles.twoColumnSub}>{right}</aside>
    </div>
  );
}

function CaseMeta({ items }: { items: CaseMetaItem[] }) {
  return (
    <dl className={styles.caseMeta}>
      {items.map((item) => (
        <div key={item.label} className={styles.caseMetaRow}>
          <dt className={styles.caseMetaLabel}>{item.label}</dt>
          <dd className={styles.caseMetaValue}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function KPIGrid({ items }: { items: KPIItem[] }) {
  return (
    <div className={styles.kpiGrid}>
      {items.map((item) => (
        <div key={item.label} className={styles.kpiItem}>
          <div className={styles.kpiLabel}>{item.label}</div>
          <div className={styles.kpiValue}>{item.value}</div>
          <p className={styles.kpiDescription}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className={styles.processList}>
      {steps.map((step) => (
        <li key={step.label} className={styles.processItem}>
          <div className={styles.processLabel}>{step.label}</div>
          <div className={styles.processContent}>
            <h3 className={styles.processTitle}>{step.title}</h3>
            <p className={styles.processText}>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function InsightCards({ items }: { items: InsightItem[] }) {
  return (
    <div className={styles.insightGrid}>
      {items.map((item) => (
        <article key={item.title} className={styles.insightCard}>
          <h3 className={styles.insightTitle}>{item.title}</h3>
          <p className={styles.insightText}>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function SidebarCard({ title, children }: SidebarCardProps) {
  return (
    <section className={styles.sidebarCard}>
      <h3 className={styles.sidebarCardTitle}>{title}</h3>
      <div className={styles.sidebarCardBody}>{children}</div>
    </section>
  );
}

function CTASection({
  title,
  body,
}: {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
}) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>{title}</h2>
        <p className={styles.ctaText}>{body}</p>
        <div className={styles.ctaActions}>
          <ButtonLink href="/contact">分析について相談する</ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* =========
   Page
   ========= */

export default function Page() {
  // ------- テキスト・データはすべてページ側で定義 -------

  const heroTags: HeroTag[] = [
    { label: "ID-POSデータ 分析" },
    { label: "OnetoOneマーケティング" },
    { label: "CRM" },
    { label: "家庭内在庫量の推定" },
  ];

  const metaItems: CaseMetaItem[] = [
    { label: "クライアント", value: "全国チェーン ドラッグストア" },
    { label: "対象カテゴリ", value: "炭酸飲料（500mlペットボトル）" },
    { label: "データ期間", value: "2022年4月〜2024年3月（24ヶ月）" },
    {
      label: "利用データ",
      value: "ID-POSデータ（購買履歴）・チラシ情報・販促情報",
    },
    {
      label: "主な活用シーン",
      value: "CRM施策設計、One to Oneクーポン配信、在庫・販促計画",
    },
  ];

  const kpis: KPIItem[] = [
    {
      label: "ターゲット会員の来店頻度",
      value: "+9.8%",
      description: "動的個人モデルに基づく配信群で、来店頻度が向上。",
    },
    {
      label: "カテゴリ売上",
      value: "+6.2%",
      description: "炭酸飲料カテゴリ全体で前年同期比の売上を改善。",
    },
    {
      label: "クーポン利用率",
      value: "1.7倍",
      description:
        "「家庭内在庫量が減ったタイミング」を狙った配信で利用率が向上。",
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      label: "STEP 1",
      title: "ID-POSデータの整備と分析設計",
      description:
        "会員ID別に購買履歴を整形し、「いつ・誰が・どの炭酸飲料を・いくらで・いくつ買ったか」を軸に分析テーブルを構築。ID-POSデータ分析の目的を、来店行動と購買タイミング（購買生起）の両方を説明することに置きました。",
    },
    {
      label: "STEP 2",
      title: "動的個人モデルによる購買生起行動の推定",
      description:
        "一般状態空間モデルをベースに、家庭内在庫量や消費量を潜在変数として扱う動的個人モデルを構築。粒子フィルタを用いて「来店のしやすさ」や「炭酸飲料カテゴリの購入しやすさ」が日次でどのように変化しているかを、顧客ごとに推定しました。",
    },
    {
      label: "STEP 3",
      title: "CRM・OnetoOneマーケティング施策への実装",
      description:
        "推定された家庭内在庫量や購買生起確率を、会員ごとのスコアとしてCRM基盤に連携。「そろそろ在庫が減っていそうな顧客」や「販促反応が高まりやすい顧客」を抽出し、One to Oneクーポンやアプリ内バナーの配信ロジックに組み込みました。",
    },
  ];

  const insights: InsightItem[] = [
    {
      title: "家庭内在庫量に応じた「買い足しタイミング」の違いを可視化",
      text: "同じ炭酸飲料カテゴリでも、家庭内在庫量が少なくなるとすぐに買い足す世帯と、ある程度まとめ買いしてからゆっくり消費する世帯が存在することが分かりました。動的個人モデルを用いることで、こうした消費者異質性をID単位で捉えられるようになります。",
    },
    {
      title: "チラシ・クーポンへの反応度の“動的な変化”を評価",
      text: "従来の静的なセグメントでは見えづらかった「一時的にプロモーション感度が高くなっている期間」や「価格反応が鈍っている期間」を、日次レベルのパラメータ推定により把握。短期的なキャンペーン設計に役立つ指標として活用しました。",
    },
    {
      title: "来店行動と購買行動の両方を統合的にモデリング",
      text: "来店するかどうか（店舗選択）と、来店した日に対象カテゴリを購買するかどうか（購買生起）を同時にモデリングすることで、「来店はしているのに買っていない」ケースと「そもそも来店していない」ケースを分けて評価できます。これにより、施策の打ち手を来店施策とカテゴリ施策で整理しやすくなりました。",
    },
  ];

  const challengeBullets = [
    "・ID-POSデータを蓄積しているものの、「いつ誰に何を打てば良いか」が分からない。",
    "・従来のRFMセグメントだけでは、来店タイミングや家庭内在庫量を考慮した施策設計が難しい。",
    "・カテゴリ別のCRMは行っているが、One to Oneマーケティングとしてはまだ画一的な配信が多い。",
  ];

  const solutionBullets = [
    "・ID-POSデータを起点に、顧客一人ひとりの来店行動・購買生起行動を同時に説明する動的個人モデルを構築。",
    "・家庭内在庫量や消費ペースを潜在的に推定し、「そろそろ在庫が切れそう」「まだ家に在庫が多い」といった状態をスコア化。",
    "・CRM基盤と連携し、One to Oneクーポン・アプリ内レコメンド・プッシュ通知などに活用可能な指標として運用。",
  ];

  const usecaseBullets = [
    "・ID-POSデータを活用したカテゴリ別・ブランド別のCRM・LTV向上施策を検討している小売・メーカー様",
    "・家庭内在庫量や購買タイミングを考慮したOne to Oneマーケティングを実現したいご担当者様",
    "・RFMや単純な頻度分析だけでは捉えきれない「購買行動のクセ」を精緻に把握したいデータマーケティング部門",
  ];

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Breadcrumbs
          items={[
            { label: "TOP", href: "/" },
            { label: "分析事例", href: "/case-studies" },
            { label: "ID-POSデータ×動的個人モデル事例" },
          ]}
        />

        <HeroSection
          eyebrow="分析事例｜ID-POSデータ分析 × 動的個人モデル"
          title="動的個人モデルによる購買生起行動の解析とOne to Oneマーケティングへの実装"
          lead="ID-POSデータ分析と動的個人モデルを組み合わせることで、家庭内在庫量や消費ペースを推定しながら、CRM・OnetoOneマーケティングで活用できる「購買タイミングスコア」を構築した事例です。"
          tags={heroTags}
        />

        <TwoColumnSection
          left={
            <>
              <ContentSection
                id="challenge"
                kicker="CLIENT & CHALLENGE"
                title="クライアントと課題"
              >
                <p>
                  全国で店舗展開を行うドラッグストアチェーン様では、会員向けアプリやポイントカードを通じて豊富な
                  ID-POSデータを蓄積していました。しかし、カテゴリ別の販促やクーポン配信は週次のチラシ起点が中心で、
                  「誰に・どのタイミングで打つべきか」という観点でのOne to
                  Oneマーケティングには十分に踏み込めていませんでした。
                </p>
                <p>
                  特に炭酸飲料カテゴリは、まとめ買いと単品買いが混在し、家庭内在庫量の違いによって購買タイミングが大きく変わるカテゴリです。
                  従来のRFM分析や単純な購入間隔の平均値では、こうした消費者異質性をうまく捉えきれないという課題がありました。
                </p>
                <ul className={styles.list}>
                  {challengeBullets.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </ContentSection>

              <ContentSection
                id="approach"
                kicker="SOLUTION"
                title="動的個人モデルを用いた購買生起行動の可視化"
              >
                <p>
                  MyStoryでは、マーケティング・サイエンス分野の研究で用いられている「動的個人モデル」の考え方をもとに、
                  来店行動と炭酸飲料カテゴリの購買生起行動を同時に説明する統計モデルを構築しました。
                  一般状態空間モデルの枠組みを用い、粒子フィルタによって顧客ごとの状態を日次で推定しています。
                </p>
                <p>
                  モデルでは、チラシ・価格・天候といった外部要因だけでなく、家庭内在庫量や消費量を潜在的な変数として扱い、
                  「今この世帯の冷蔵庫にはどれくらい在庫がありそうか」「在庫が多いとき／少ないときで消費ペースが変わるか」
                  といった情報を推定可能にしました。
                </p>
                <ul className={styles.list}>
                  {solutionBullets.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </ContentSection>

              <ContentSection
                id="kpi"
                kicker="RESULT"
                title="施策実行後の成果（テスト店舗群）"
              >
                <KPIGrid items={kpis} />
                <p className={styles.centerNote}>
                  ※いずれもコントロール店舗群との比較による相対改善
                </p>
              </ContentSection>

              <ContentSection
                id="process"
                kicker="APPROACH"
                title="分析プロセスとモデルの位置づけ"
              >
                <ProcessTimeline steps={processSteps} />
              </ContentSection>

              <ContentSection
                id="insight"
                kicker="INSIGHT"
                title="動的個人モデルから得られた主な示唆"
              >
                <InsightCards items={insights} />
              </ContentSection>

              <ContentSection
                id="usecase"
                kicker="FOR WHOM"
                title="このような企業・ご担当者様におすすめです"
              >
                <ul className={styles.list}>
                  {usecaseBullets.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </ContentSection>
            </>
          }
          right={
            <aside className={styles.sidebar}>
              <SidebarCard title="プロジェクト概要">
                <CaseMeta items={metaItems} />
              </SidebarCard>

              <SidebarCard title="分析テーマのポイント">
                <ul className={styles.sidebarList}>
                  <li>ID-POSデータから家庭内在庫量を推定</li>
                  <li>来店と購買生起を同時にモデリング</li>
                  <li>One to Oneマーケティングに直接つながる指標設計</li>
                </ul>
              </SidebarCard>

              <SidebarCard title="関連するサービス">
                <ul className={styles.sidebarListLinks}>
                  <li>
                    <Link href="/analytics/consulting">
                      受託分析 / データ利活用支援
                    </Link>
                  </li>
                  <li>
                    <Link href="/analytics/pricing">『Price Decisioning』</Link>
                  </li>
                </ul>
              </SidebarCard>
            </aside>
          }
        />

        <CTASection
          title="ID-POSデータを起点にしたOne to Oneマーケティングをご検討中の方へ"
          body="MyStoryでは、学術研究レベルの動的個人モデルを、実務で使いやすいCRM指標として実装するところまで一気通貫でご支援します。まずは貴社のID-POSデータの状況や、実現したい施策イメージをお聞かせください。"
          primaryHref="/contact"
          primaryLabel="この事例について相談する"
        />
      </div>
    </main>
  );
}
