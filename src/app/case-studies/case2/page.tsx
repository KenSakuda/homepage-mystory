import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import styles from "@/app/case-studies/case1/page.module.css";
import ButtonLink from "@/app/_components/ButtonLink";

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

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "分析事例 - サプリメントメーカーにおけるポイントと値引きプロモーション最適化";
  const description =
    "ポイント付与と値引きの効果を、行動経済学（メンタル・アカウンティング）やマグニチュード効果の知見に基づいて定量評価。サプリメントメーカーのD2C・ECチャネルにおいて、ポイント制度と値引きの最適な使い分けを設計した分析事例です。";
  const url = "https://www.b-mystory.com/case-studies/case-supplement";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

/* =========
   UI Components
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
  const heroTags: HeroTag[] = [
    { label: "ポイント施策" },
    { label: "値引き施策" },
    { label: "行動経済学・メンタルアカウンティング" },
    { label: "D2C / ECマーケティング" },
  ];

  const metaItems: CaseMetaItem[] = [
    { label: "クライアント", value: "国内サプリメントメーカー（D2C・EC中心）" },
    { label: "対象商品", value: "定期コース中心の健康サプリメント数ブランド" },
    {
      label: "データ期間",
      value: "2023年4月〜2024年3月（12ヶ月）",
    },
    {
      label: "利用データ",
      value:
        "EC購買履歴データ・会員属性・ポイント利用履歴・クーポン実績・メール/LINE配信ログ",
    },
    {
      label: "主な活用シーン",
      value:
        "ポイント付与率/値引き率の最適化、定期コース維持率向上、LTV最大化を目的としたキャンペーン設計",
    },
  ];

  const kpis: KPIItem[] = [
    {
      label: "対象ブランドLTV",
      value: "+8.4%",
      description:
        "ポイントと値引きの組み合わせルールを見直したテスト群で、12ヶ月後LTVが向上。",
    },
    {
      label: "定期コース継続率",
      value: "+5.6pt",
      description:
        "「少額の購入ごとにポイント、節目で値引き」という設計に変更した会員で継続率が改善。",
    },
    {
      label: "プロモーション粗利",
      value: "+11.2%",
      description:
        "同等の売上インパクトを維持しつつ、値引きを抑えてポイント付与中心に切り替えた結果、粗利率が向上。",
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      label: "STEP 1",
      title: "購買履歴とポイント/値引き履歴の統合・可視化",
      description:
        "EC・コールセンター・定期コース管理システムなど複数システムに分散していたデータを会員ID単位で統合し、「いつ・どの商品を・どの価格で・どのプロモーション条件で購入したか」「ポイント残高と利用タイミング」が追える分析基盤を構築しました。ポイント制度のルール（付与率・有効期限・利用条件）と実際の利用行動のギャップを把握するところからスタートしています。",
    },
    {
      label: "STEP 2",
      title: "行動経済学に基づくポイント/値引き効果の定量評価",
      description:
        "参考文献で示されているメンタル・アカウンティング理論やマグニチュード効果の知見を踏まえ、購買金額帯・商品カテゴリー・会員ステージ別に「ポイント付与」と「値引き」のプロモーション弾性値を推定しました。少額ベネフィットではポイントの方が心理的な価値が高く、大きなベネフィットでは即時値引きの方が反応が高いというパターンが、自社データでも再現されるかを検証しました。さらに、ポイント残高の蓄積・償還タイミングが継続購入に与える影響もモデル化しました。",
    },
    {
      label: "STEP 3",
      title: "ブランド別プロモーション設計とA/Bテストによる検証",
      description:
        "推定結果をもとに、「日常的な定期購入にはポイント付与を軸に、ブランド切り替えや高額アップセルには値引きを重点的に使う」といったガイドラインを作成。具体的には、初回購入・3回目継続・6回目継続などの節目ごとに、ポイント/値引きの組み合わせパターンを複数設計し、A/Bテストで効果を比較しました。その結果、ポイント中心の設計でも節目で適切に値引きを組み合わせることで、売上と粗利、継続率のバランスが最も良くなるパターンを特定し、全会員への展開につなげました。",
    },
  ];

  const insights: InsightItem[] = [
    {
      title: "少額購入では「ポイント」、大きな節目では「値引き」が効きやすい",
      text: "1回あたりの購入金額が比較的少ない定期コースの商品では、同額の値引きよりもポイント付与の方が「お得感」を強く感じる顧客が多いことがデータから確認されました。一方、まとめ買いや高単価セットなどベネフィット水準が高いキャンペーンでは、即時の値引きの方が反応率・アップセル率ともに高くなる傾向が見られました。",
    },
    {
      title: "ポイント残高の“貯まり具合”が継続購入の後押しになる",
      text: "ポイント残高が一定水準を超えたタイミングで、次回購入率や同時購入点数が有意に高まるパターンが確認されました。ポイントが「将来の自分へのご褒美」としてメンタル・アカウンティング上の貯蓄勘定に計上され、定期購入の継続を後押ししている可能性が示唆されます。",
    },
    {
      title: "プロモーション方針を“単一ルール”から“条件別ルール”へ",
      text: "従来は「すべてのキャンペーンで一律◯％ポイント還元」あるいは「新規は値引き、既存はポイント」といった単純なルールでしたが、分析を通じて「購入金額帯×会員ステージ×商品カテゴリー」ごとに効果的なプロモーション手段が異なることが可視化されました。その結果、ブランド横断で共通の考え方を持ちつつも、現場では柔軟に施策を組み合わせられる運用フレームが整備されました。",
    },
  ];

  const challengeBullets = [
    "・ポイントと値引きのどちらをどの場面で使うべきか、定量的な根拠がないまま運用されていた。",
    "・短期的な売上を重視して値引き施策が増えた結果、粗利率と定期コースの継続率が徐々に悪化していた。",
    "・研究知見として「ポイントが有利な場面」「値引きが有利な場面」が示されているものの、自社の顧客・商品で同じことが言えるか分からなかった。",
  ];

  const solutionBullets = [
    "・自社のEC購買履歴とポイント/値引き履歴を統合し、行動経済学で指摘されているパターンが再現されるかを検証。",
    "・購入金額帯・会員ステージ・商品カテゴリー別に、ポイント付与と値引きのプロモーション弾性値を推定し、効果の違いを可視化。",
    "・その結果をもとに「少額ベネフィット＝ポイント中心」「高額ベネフィット＝値引き中心」という基本方針と、ブランド固有の例外ルールを設計。",
  ];

  const usecaseBullets = [
    "・ポイント制度と値引き施策のバランスを見直し、LTVや粗利率を改善したいサプリメント・健康食品メーカー様",
    "・EC/D2Cチャネルで、ポイント・クーポン・キャンペーンが乱立しており、どれが効いているのか整理したいマーケティングご担当者様",
    "・行動経済学の知見を、自社データに当てはめた実証分析と具体的な施策設計まで落とし込みたい企業様",
  ];

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Breadcrumbs
          items={[
            { label: "TOP", href: "/" },
            { label: "分析事例", href: "/case-studies" },
            {
              label: "サプリメントメーカー｜ポイントと値引きプロモーション事例",
            },
          ]}
        />

        <HeroSection
          eyebrow="分析事例｜サプリメントメーカー × ポイント/値引きプロモーション最適化"
          title="行動経済学にもとづくポイントと値引きの最適設計で、LTVと粗利を両立させたサプリメントメーカーの事例"
          lead="ポイント付与と値引き、どちらをどのタイミングで使うべきか──。行動経済学のメンタル・アカウンティング理論やマグニチュード効果に関する研究知見をもとに、自社ECの購買履歴データを分析し、ポイント制度と値引き施策の“使い分けルール”を設計したプロジェクトです。"
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
                  クライアントは、自社ECと通販チャネルで複数ブランドのサプリメントを展開する国内メーカー様でした。長年ポイント制度とクーポン値引きを併用してきたものの、
                  「どの施策が継続率やLTVに効いているのか」
                  が整理されておらず、現場では経験則に基づく運用が中心となっていました。
                </p>
                <p>
                  特に近年は新規獲得競争の激化に伴い、初回値引きキャンペーンが増加。その反面、定期コース継続率や粗利率の低下が目立ち始め、「短期的な値引きに頼らず、ポイント制度を活かした中長期的な関係構築にシフトしたい」という課題感が高まっていました。
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
                title="研究知見を踏まえたポイントと値引きの“使い分け”設計"
              >
                <p>
                  MyStoryでは、ポイントと値引きの知覚価値や売上効果を比較した既存研究の知見を踏まえつつ、自社データ上で同様のパターンが確認できるかを検証しました。そのうえで、「どの条件ではポイントが有利で、どの条件では値引きが有利か」を可視化し、プロモーション方針として落とし込むことをゴールに設定しました。
                </p>
                <p>
                  分析では、購買金額帯・商品カテゴリー・新規/既存・定期回数などの軸でセグメントを作成し、ポイント付与と値引きそれぞれのプロモーション弾性値を推定。加えて、ポイント残高の水準や有効期限までの期間が再購入率や解約率に与える影響も評価しました。
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
                title="施策実行後の成果（テスト期間）"
              >
                <KPIGrid items={kpis} />
                <p className={styles.centerNote}>
                  ※いずれも同期間のコントロール群との比較による相対改善です。
                </p>
              </ContentSection>

              <ContentSection
                id="process"
                kicker="APPROACH"
                title="分析プロセスと設計の流れ"
              >
                <ProcessTimeline steps={processSteps} />
              </ContentSection>

              <ContentSection
                id="insight"
                kicker="INSIGHT"
                title="分析から得られた主な示唆"
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
                  <li>ポイントと値引きの効果を自社データで定量比較</li>
                  <li>行動経済学の知見を実務に落とし込んだ設計</li>
                  <li>LTV・継続率・粗利を同時に見る評価指標づくり</li>
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
          title="ポイントと値引きの設計を、データと行動経済学にもとづいて見直しませんか？"
          body="MyStoryでは、既存研究の知見と自社データを組み合わせることで、ポイント制度と値引き施策の“ちょうど良いバランス”を一緒に設計します。サプリメント・健康食品に限らず、小売・サブスクサービスなど幅広い業種でご支援が可能です。まずは現在の施策状況やお悩みをお聞かせください。"
          primaryHref="/contact"
          primaryLabel="この事例について相談する"
        />
      </div>
    </main>
  );
}
