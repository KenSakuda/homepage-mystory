import type { Metadata } from "next";
import styles from "./page.module.css";
// import Image from "next/image";
import {
  Hero,
  MainWithSidebar,
  SidebarNavCard,
  LeadBlock,
  ServiceImage,
  // FlowBlock,
  FooterNav,
  AnalyticsOutsourceSection,
} from "@/app/services/analytics/components";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const title = "ピープルアナリティクスサービス | MyStory";
  const description =
    "「人事」×「データサイエンス」で、“人”にまつわる意思決定を科学する。採用・配置・育成・定着を最適化するピープルアナリティクス支援";
  const url = "https://www.b-mystory.com/services/analytics/people-analytics";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: "/data_analytics_consulting_hero.png" }],
    },
    robots: { index: true, follow: true },
  };
}

export default function Page() {
  const sidebarLinks = [
    {
      href: "/services/analytics/consulting",
      label: "受託分析 / データ利活用支援",
    },
    { href: "/services/analytics/case", label: "課題・ケースから探す" },
    {
      href: "/services/analytics/tools",
      label: "データ分析ツールの提供",
    },
    {
      href: "/services/analytics/research",
      label: "リサーチアドバイザー",
    },
    {
      href: "/services/analytics/pricing",
      label: "プライシングサービス",
    },
    {
      href: "/services/analytics/share-prediction",
      label: "マーケットシェア推定サービス",
    },
    {
      href: "/services/analytics/people-analytics",
      label: "ピープルアナリティクスサービス",
    },
  ];

  return (
    <main className={styles.page}>
      <Hero
        image={{ src: "/data_analytics_consulting_hero.png", alt: "hero" }}
        title="ピープルアナリティクス"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="「人事」×「データサイエンス」で、“人”にまつわる意思決定を科学する。採用・配置・育成・定着を最適化するピープルアナリティクス支援"
              body={[
                "人材の採用・評価・配置・育成・定着といった人事領域では、属人的な判断や経験則に頼らざるを得ないケースが少なくありません。MyStoryの「ピープルアナリティクス」サービスは、統計学・機械学習を駆使して、人材データや行動データを科学的に分析。離職予測、ハイパフォーマー分析、スキルギャップ特定、エンゲージメント向上施策の設計など、“人”に関する意思決定をデータで支援します。",
                "　",
                "さらに、行動科学や組織心理学の知見を取り入れることで、単なる数値の分析にとどまらず、「なぜそうなるのか」「どう改善できるのか」を解明。人事戦略と組織開発をつなぐ実践的な分析ソリューションを提供します。社員一人ひとりのパフォーマンスを最大化し、組織全体の生産性向上へと導く――MyStoryのピープルアナリティクスが、データから“人”の可能性を解き明かします。",
              ]}
            />

            <ServiceImage
              src="/data_analytics_people-analytics-capability.png"
              alt="ピープルアナリティクス領域のケイパビリティ"
            />

            <a id="sec-outsource" />
            <AnalyticsOutsourceSection
              title="データ分析の委託・外注を検討中の方へ"
              leads={[
                "ビジネス課題に合ったデータ分析委託先を選ぶポイントは、「何を解決したいか」に対して最短距離で成果を出せるかどうかです。MyStoryは、データ解析・統計分析・機械学習の専門性に、行動経済学／消費者行動理論／社会科学の知見を掛け合わせ、マーケティングをはじめとする幅広い領域で成果に直結する分析設計→実装→意思決定支援までを一気通貫で提供してきました。",
                "　",
                "データ分析の外注・委託をご検討の企業様に対し、課題定義から仮説設計、モデル構築、ダッシュボード化、運用内製化まで、目的やリソースに応じた最適なスコープでご支援します。マーケティング領域ではデータ解析による顧客セグメンテーションや施策効果検証を通じて、売上・LTV向上に直結する提案を行っています。",
              ]}
              reasonsTitle="MyStoryが選ばれる理由"
              reasons={[
                {
                  term: "専門性の掛け合わせ",
                  desc: "統計学・機械学習・計量経済学といった定量分析の手法を活用し、消費者心理や行動科学の知見と統合。単に分析結果を提供するだけではなく、意思決定に結びつく示唆を導き出します",
                },
                {
                  term: "業種横断の実績",
                  desc: "マーケティングデータ解析をはじめ、スポーツアナリティクス、ピープルアナリティクスなど、幅広い領域でのデータ分析委託支援実績を有しています",
                },
                {
                  term: "現場実装まで伴走",
                  desc: "PoCに留まらず、業務フローへの実装、指標設計、可視化、運用ガイド整備まで内製化を見据えた伴走型支援を行います",
                },
                {
                  term: "透明性の高い進め方",
                  desc: "課題定義→データ可用性→分析アプローチ→成果物→評価指標を明確化し、委託費用の根拠を可視化。プロセス全体を透明に進行します",
                },
              ]}
              costTitle="委託費用について"
              costBodies={[
                "データ分析の委託費用は、①課題の複雑性、②データ量と前処理難度、③モデルの高度性、④成果物（レポート／ダッシュボード／API連携など）、⑤期間と体制によって変動します。 一般的には、小規模なスポットでの統計解析では数十万円〜百万円台、中規模の統計モデル構築やレポート作成では数百万円規模、大規模プロジェクトでは数千万単位となる場合もあります。",
                "　",
                "MyStoryでは、初回ヒアリングで目的・評価指標（KPI/KGI）と制約条件（データ・期間・体制）を整理し、段階的見積り（スモールスタート可能）をご提示します。まずは要件の可視化からお気軽にご相談ください。",
              ]}
              faqTitle="よくあるご相談"
              faqs={[
                {
                  q: "社内にあるデータを利活用したいが、何から始めるべきか分からない",
                  a: " → 課題仮説の整理と既存データ診断を通じ、最短スコープで実行可能なデータ分析委託プランをご提案します",
                },
                {
                  q: "マーケティング向けのデータ解析を委託し、売上・効率を上げたい",
                  a: "→ 施策効果検証（A/Bテスト設計・因果推論）、メディア最適化、LTV最大化モデルなど、データ解析マーケティング手法を用いて成果向上を支援します",
                },
                {
                  q: "自社の分析人材が不足している・データ分析業務を外注したい",
                  a: "→ 伴走型の内製化支援／教育（コードレビュー、分析設計、運用体制整備）を通じて、自走可能な分析体制を構築します",
                },
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">分析について相談する</ButtonLink>
            </div>

            {/* <a id="sec-design" />
            <SectionTitle title="分析設計支援サービス" />
            <ServiceSection
              problemsTitle="このような課題を解決します"
              problems={bullets([
                "顧客データ活用をしていきたいが、分析手法がわからない",
                "有効な分析結果を導き出したい",
                "データ分析業務を効率化したい",
              ])}
              overviewTitle="サービス概要"
              overview={[
                "※差し替え：課題から最適なKPIの設定、データの取得方法や最適な分析手法の定義までを支援。",
                "分析設計（要件定義）を整えることで後工程の不測や目的ブレを防止。",
              ]}
              subEyebrow="【分析設計支援サービス・基本プロセス】"
              subImage={{
                src: "/data_analytics_consulting_feature3.png",
                alt: "process",
              }}
              benefitsTitle="分析設計支援サービスのメリット"
              benefits={bullets([
                "ビジネス課題解決期間の短縮化",
                "必要最小限のデータ収集と適切なDB設計による分析業務の効率化",
                "ビジネス課題に最適なKPIの設定と、効果の最大化",
              ])}
            /> */}

            {/* <SectionTitle title="分析レポートイメージ" small />
            <div className={styles.imgFrame}>
              <Image
                src="/data_analytics_consulting_feature3.png"
                alt="report"
                width={800}
                height={400}
              />
            </div> */}

            {/* <FlowBlock
              title="サービスフロー"
              image={{
                src: "/data_analytics_consulting_feature3.png",
                alt: "flow",
              }}
              steps={[
                "目的・内容・アウトプットの合意",
                "データ授受・処理・DB整備",
                "顧客分析の実施とレポート作成",
                "報告会・納品",
              ]}
              note="※直近2年以上の顧客/購買データが必要（例）。"
            /> */}

            {/* <SectionTitle title="分析トレーニングサービス" />
            <ServiceSection
              problemsTitle="このような課題を解決します"
              problems={bullets([
                "ノウハウがない",
                "人材を教育したい",
                "将来は内製化したい",
              ])}
              overviewTitle="サービス概要"
              overview={["※差し替え：Tableau / R / 多変量解析 などWS形式。"]}
            /> */}
          </>
        }
        sidebar={
          <SidebarNavCard
            title="データ分析コンサルティング事業"
            items={sidebarLinks}
          />
        }
      />

      <a id="contact" />
      <FooterNav
        blockTitle="ピープルアナリティクス"
        links={[
          //   { href: "#sec-feature", label: "MyStoryのデータ分析サービスの特徴" },
          //   { href: "#sec-service", label: "分析サービス一覧" },
          //   { href: "#sec-env", label: "データ整備・分析環境構築" },
          //   { href: "#sec-outsourcing", label: "受託分析" },
          //   { href: "#sec-project", label: "プロジェクト型支援" },
          //   { href: "#sec-hr-dev", label: "分析人材育成・内製化支援" },
          { href: "#sec-outsource", label: "委託・外注を検討中の方へ" },
        ]}
      />
    </main>
  );
}
