import styles from "./page.module.css";
import {
  Hero,
  MainWithSidebar,
  SidebarNavCard,
  LeadBlock,
  FeatureHighlights,
  SectionTitle,
  ServiceSection,
  FooterNav,
  AnalyticsOutsourceSection,
} from "@/app/services/analytics/components";
import ButtonLink from "@/app/_components/ButtonLink";

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
  ];

  const bullets = (a: string[]) => a.map((text) => ({ text }));

  return (
    <main className={styles.page}>
      <Hero
        image={{
          src: "/data_analytics_share-prediction_hero.png",
          alt: "Dynamic Share",
        }}
        title="マーケットシェア推定ソリューション『ダイナミックシェア』"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="マーケットシェアの推移を“動的”に予測。「時間×競争」の概念を組み込んだ生態学モデルをもとに、新商品上市時・価格変更時も精緻なシェア予測を可能に"
              body={[
                "『ダイナミックシェア』は、「時間 × 競争」のダイナミクスをモデルに埋め込むことで、現実の市場で起きるシェアの揺れ――消費者の選好変化、広告効果の減衰、競合の値下げや新規参入といった非定常な事象――まで捉えるシェア推定分析ソリューションです。生態学由来のロトカ・ヴォルテラ型モデルで“限られた市場での取り合い”を数理的に表現し、従来の定常モデルでは難しかった精緻な将来シェアの予測と、施策効果の見極めを可能にします。",
                "　",
                "さらに、コンジョイント分析やロジット需要モデルと結合することで、価格・プロモーション・商品属性の変更がシェアに与える影響を定量化。既存商品の将来推移だけでなく、新商品のシェア推定や発売時期・広告投下量などのシナリオ比較にも対応します。たとえば「競合が値上げしたら」「機能訴求を切り替えたら」といった仮説を、時間軸つきの市場構造の中で検証でき、投資判断・価格戦略・商品設計まで意思決定を一貫して支援します。",
              ]}
            />

            <a id="sec-feature" />
            <FeatureHighlights
              title="『ダイナミックシェア』の特徴"
              items={[
                {
                  subtitle:
                    "競争×時間を組み込んだ生態学モデルで“非定常”を精緻に予測",
                  lead: "ロトカ・ヴォルテラ型の生態学モデルを導入し、ブランド間の競争関係と時間変化を同時に表現します。連立微分方程式で成長率・飽和・相互作用（競合/補完）を記述し、係数を時変として扱うことで、新規参入・価格改定・広告効果の減衰・供給制約などのショックをモデルに反映。従来の定常モデルでは平均化され見落としがちだったシェアのうねりを追従し、現実に即した将来シェアの推定と施策シミュレーションを高速に実行可能です。",
                  image: {
                    src: "/data_analytics_share-prediction_feature1.png",
                    alt: "時間×競争の概念",
                  },
                },
                {
                  subtitle:
                    "コンジョイント分析で“効用”を推定し、新商品や価格変更後のシェアまで予測",
                  lead: "コンジョイント分析にもとづき、消費者の全体効用と属性別効用（価格・機能・ブランドなど）を推定。この効用をロジットモデルに接続し、生態学モデルへ投入することで、既存商品だけでなく新商品の投入や価格改定・仕様変更の影響も定量的にシェアへ変換できます。市場外選択も扱えるため、シェアの総和≤100%という現実的な制約を満たしつつ、「施策 → 効用変化 → シェア推移」を一気通貫で可視化・予測します。",
                  image: {
                    src: "/data_analytics_share-prediction_feature2.png",
                    alt: "コンジョイント分析による効用推定",
                  },
                },
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">分析ついて相談する</ButtonLink>
            </div>

            {/* ===== 各サービス ===== */}
            <a id="sec-model" />
            <SectionTitle title="モデル設計：需要モデル×ロトカ・ヴォルテラモデル（微分方程式）" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・『データ分析 マーケットシェア』をしたいが、競合施策や時間減衰をうまく表現できない",
                "・“全ブランドのシェアが上がる”など理論と合わない予測になる",
                "・分析の説明責任（モデルの解釈性・再現性）を高めたい",
              ])}
              overviewTitle="ご支援のイメージ"
              overview={[
                "効用ベースのロジット需要（価格・属性・販促）を起点に、ロトカ・ヴォルテラモデルでブランド間相互作用と時間ダイナミクスを定式化。時変係数・外部オプション・飽和を取り込み、解析解または安定数値解で推定・検証を行います。",
              ]}
            />

            <a id="sec-new" />
            <SectionTitle title="新製品シェア予測" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・発売前のシェア起点（初期効用）が定まらない",
                "・ベンチマーク／既存SKUのカニバリを考慮したい",
              ])}
              overviewTitle="ご支援のイメージ"
              overview={[
                "コンジョイント（属性×水準）で効用を推定し、ロジット選択確率に接続。初期シェアとダイナミクス（広告・価格・競合反応）をLVに注入して時系列のシェア推移を生成します。顧客セグメント別の反応差も推定可能です。",
              ]}
            />

            <a id="sec-scenario" />
            <SectionTitle title="シナリオシミュレーション（価格・広告・参入／撤退）" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・値上げ／値下げで中長期にどう推移するか知りたい",
                "・競合の大型キャンペーン時に自社の守り方／攻め方を決めたい",
              ])}
              overviewTitle="ご支援のイメージ"
              overview={[
                "価格・販促・広告・発売時期・参入／撤退などのシナリオを比較。マクロ（合計市場）とミクロ（ブランド別）の両面でKPI推移を提示し、感度分析で“効く要素”を特定します。",
              ]}
            />

            <AnalyticsOutsourceSection />

            <div className={styles.contact}>
              <ButtonLink href="/contact">分析について相談する</ButtonLink>
            </div>
          </>
        }
        sidebar={
          <SidebarNavCard
            title="マーケットシェア推定サービス"
            items={sidebarLinks}
          />
        }
      />

      <FooterNav
        blockTitle="マーケットシェア推定サービス"
        links={[
          { href: "#sec-feature", label: "特徴" },
          { href: "#sec-model", label: "モデル設計" },
          { href: "#sec-new", label: "新製品シェア予測" },
          { href: "#sec-scenario", label: "シナリオシミュレーション" },
        ]}
      />
    </main>
  );
}
