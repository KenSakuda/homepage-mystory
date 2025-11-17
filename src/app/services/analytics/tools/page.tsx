import type { Metadata } from "next";
import styles from "./page.module.css";
import {
  Hero,
  MainWithSidebar,
  SidebarNavCard,
  LeadBlock,
  SectionTitle,
  ServiceSection,
  AnalysisTable,
  FooterNav,
} from "@/app/services/analytics/components";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const title = "データ分析ツールの提供";
  const description =
    "ノーコード×AutoML×意思決定支援。現場で“使われ続ける”分析ツールを。";
  const url = "https://www.b-mystory.com/services/analytics/tools";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: "/data_analytics_tools_hero.png" }],
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
    { href: "/services/analytics/tools", label: "データ分析ツールの提供" },
    { href: "/services/analytics/research", label: "リサーチアドバイザー" },
    { href: "/services/analytics/pricing", label: "プライシングサービス" },
    {
      href: "/services/analytics/share-prediction",
      label: "マーケットシェア推定サービス",
    },
    {
      href: "/services/analytics/people-analytics",
      label: "ピープルアナリティクスサービス",
    },
    {
      href: "/services/analytics/image-recognition",
      label: "画像・動画認識サービス",
    },
    {
      href: "/services/analytics/ai-agent",
      label: "AIエージェントサービス",
    },
  ];

  const bullets = (a: string[]) => a.map((text) => ({ text }));

  return (
    <main className={styles.page}>
      <Hero
        image={{ src: "/data_analytics_tools_hero.png", alt: "hero" }}
        title="データ分析ツールの提供"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="ノーコード×AutoML×意思決定支援。現場で“使われ続ける”分析ツールを。"
              body={[
                "MyStoryは、機械学習のノーコードAutoMLから、モデル監査・意思決定シミュレーション、時系列予測特化ツール、因果推論によるA/Bテスト・効果検証まで、ビジネスの現場で使えるデータ分析ツール群をご提供します。",
                "　",
                "『DAVinCI LABS』（回帰・分類・時系列などのAutoML）／『DEIN STATION』（モデル精査・KPIシミュレーション）／『Lead』（時系列予測特化AutoML）に加え、因果推論ツール『Causal Story』（仮称・2026年4月頃提供予定）をラインアップ。要件定義・実装・運用・教育まで一気通貫で伴走し、ツール導入のROIを最大化します。",
              ]}
            />

            <AnalysisTable
              header={["ツール名", "概要"]}
              rows={[
                [
                  "DAVinCI LABS",
                  "データ前処理〜アルゴリズム選定〜ハイパーパラメータ最適化〜評価・説明性の自動化。ノーコードでモデル作成と比較が可能。",
                ],
                [
                  "DEIN STATION",
                  "誤差の集中条件を特定し、スコア閾値・配布ルール変更時のKPIを事前に試算。監査ログ・指標を自動出力。",
                ],
                [
                  "Lead",
                  "需要予測・在庫最適化・販促需要見込みに。ARIMA/ETS/Prophet/ツリー系を自動比較し、SMAPE等で精度管理。",
                ],
                [
                  "Causal Story",
                  "A/Bテストのサンプルサイズ設計、観測データでの因果効果推定（DID・PS・DRなど）を支援。",
                ],
              ]}
            />

            <a id="sec-davinci" />
            <SectionTitle title="DAVinCI LABS（ノーコードAutoML）" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・機械学習モデルを素早く量産し比較したい",
                "・統計やプログラミングの専門知識がなくても使いたい",
                "・時系列予測を含む複数アルゴリズムを横並びで精度比較したい",
              ])}
              overviewTitle="提供内容"
              overview={[
                "回帰・分類・時系列に対応したAutoML。データ前処理、最適アルゴリズム選定、ハイパーパラメータチューニング、モデル作成と精度評価を自動化します。ビジネスユーザーでも扱えるノーコードUIで、データドリブンな意思決定を後押しします。",
              ]}
              subEyebrow="画面イメージ"
              subImage={{
                src: "/DAVInci LABS.avif",
                alt: "DAVinCI LABS UI",
              }}
              benefitsTitle="主な特長"
              benefits={bullets([
                "・複数アルゴリズム（ARIMA/LSTM/XGBoost等）を一括比較、ベストモデル選定",
                "・評価指標・変数重要度・説明性（SHAP）を自動出力",
                "・ノーコード操作で現場導入が容易、PoC→本番展開まで短期化",
              ])}
            />

            <a id="sec-dein" />
            <SectionTitle title="DEIN STATION（モデル精査／意思決定シミュレーション）" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・現行モデルが“どの条件で”外しているかを可視化したい",
                "・意思決定ルール（スコア閾値など）を変えた時のKPI影響を前もって知りたい",
                "・モデルの監査性/再現性を高めたい",
              ])}
              overviewTitle="提供内容"
              overview={[
                "構築済み機械学習モデルのKPIパフォーマンスを分解表示。誤差の出やすい条件を特定し、閾値や配布ルールを変更した場合のビジネスKPIをシミュレーションできます。モデル運用の“見える化”に最適です。",
              ]}
              subEyebrow="分析画面イメージ"
              subImage={{
                src: "/deinstation.png",
                alt: "DEIN STATION UI",
              }}
              benefitsTitle="主な特長"
              benefits={bullets([
                "・誤差の集中領域を特定、モデルトラブルの早期発見",
                "・意思決定ルール変更時のKPI改善幅を事前検証（シナリオ比較）",
                "・監査ログ／評価指標の自動出力で再現性を担保",
              ])}
            />

            <a id="sec-lead" />
            <SectionTitle title="Lead（時系列予測に特化したAutoML）" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・需要予測や在庫最適化を素早く回したい",
                "・時系列モデルだけを安価に、簡単に試したい",
                "・実務で通用する精度・再現性を担保したい",
              ])}
              overviewTitle="提供内容"
              overview={[
                "時系列予測に機能を限定した軽量AutoML。UIを極力シンプルにし、短時間で予測・比較・配信まで到達できます。実務で数百件規模の時系列案件を監修した知見を反映し、高い精度と運用のしやすさを両立します。",
              ]}
              subEyebrow="予測画面イメージ"
              subImage={{
                src: "/Lead.png",
                alt: "Lead UI",
              }}
              benefitsTitle="主な特長"
              benefits={bullets([
                "・ARIMA/ETS/Prophet/ツリー系 などの自動比較・モデル選定",
                "・需要予測／発注・在庫平準化／販促需要の見込みに活用",
                "・軽量UIで導入容易、学習コストを最小化",
              ])}
            />

            <a id="sec-causal" />
            <SectionTitle title="Causal Story（因果推論ツール）※2026年4月頃ローンチ予定" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・A/Bテストの必要サンプルサイズをすぐ知りたい",
                "・倫理・業務上の制約でランダム化が難しいが、効果検証を行いたい",
                "・バイアス要因を統制し、正しく因果効果を推定したい",
              ])}
              overviewTitle="提供内容"
              overview={[
                "A/Bテストの必要サンプル数を条件入力だけで算出。差分の差分や傾向スコア、ダブルロバスト等の因果推論アプローチで、ランダム化が難しい環境でも“明らかにしたい効果”を推定します。",
              ]}
              subEyebrow="画面イメージ（開発中）"
              subImage={{
                src: "/comingsoon.jpg",
                alt: "Causal Story UI",
              }}
              benefitsTitle="主な特長"
              benefits={bullets([
                "・サンプルサイズ設計を自動化：過小/過大設計のリスクを低減",
                "・観測データでも因果効果を推定（バイアス要因の特定・統制）",
                "・A/Bテスト結果の信頼性向上、施策判断の精度を担保",
              ])}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">ツール導入について相談</ButtonLink>
            </div>
          </>
        }
        sidebar={
          <SidebarNavCard
            title="データ分析コンサルティング"
            items={sidebarLinks}
          />
        }
      />

      <FooterNav
        blockTitle="データ分析ツールの提供"
        links={[
          { href: "#sec-davinci", label: "DAVinCI LABS（AutoML）" },
          { href: "#sec-dein", label: "DEIN STATION" },
          { href: "#sec-lead", label: "Lead（時系列AutoML）" },
          { href: "#sec-causal", label: "Causal Story（因果推論）" },
        ]}
      />
    </main>
  );
}
