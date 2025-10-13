import styles from "./page.module.css";
import {
  Hero,
  MainWithSidebar,
  SidebarNavCard,
  LeadBlock,
  ServiceImage,
  FeatureHighlights,
  BubbleNavSection,
  SectionTitle,
  ServiceSection,
  AnalysisTable,
  FooterNav,
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
          src: "/data_analytics_consulting_hero.png",
          alt: "Dynamic Share",
        }}
        title="ダイナミックシェア（マーケットシェア推定ソリューション）"
      />

      <MainWithSidebar
        main={
          <>
            {/* リード：SEO語を自然に埋め込む */}
            <LeadBlock
              title="時間×競争のダイナミクスまで捉える『データ分析 シェア推定』。マーケットシェアを“動的”に予測"
              body={[
                "ダイナミックシェアは、『データ分析 シェア推定／シェア予測』に特化したソリューションです。微分方程式（ロトカ・ヴォルテラモデル）を用いてブランド間の競争関係と時間変化をモデル化し、従来の時系列回帰では扱いづらい“新規参入”“競合の値下げ”“広告減衰”といった要因まで織り込んでマーケットシェアの将来推移を推定します。",
                "コンジョイント分析やロジット需要の効用構造と結びつけることで、価格・プロモーション・製品属性の変更がシェアに与える影響を定量化。『データ分析 マーケットシェア』の意思決定を、理論と現実運用の両面から支援します。",
              ]}
            />

            {/* 能力イメージ（差し替え前提） */}
            <ServiceImage
              src="/data_analytics_consulting_mystory_capability.png"
              alt="Dynamic Share Capability Map"
            />

            {/* 特徴 */}
            <a id="sec-feature" />
            <FeatureHighlights
              title="ダイナミックシェアの特徴"
              items={[
                {
                  subtitle:
                    "競争と時間変化を同時にモデル化（ロトカ・ヴォルテラモデル）",
                  lead: "ブランド間の相互作用（競合・補完・捕食関係など）と飽和・外部要因を連立常微分方程式で表現。係数を時変化として扱えるため、戦略・規制・技術ショックによる競争構造の変化を反映できます。解析解が得られるクラスを用い、推定とシミュレーションを高速に反復可能。",
                  image: {
                    src: "/data_analytics_consulting_feature1.png",
                    alt: "LV dynamics",
                  },
                },
                {
                  subtitle:
                    "ロジット需要・効用と接続し“施策→効用→シェア”を一気通貫",
                  lead: "価格・属性・プロモーションを含む効用関数とロトカ・ヴォルテラモデルを接続することで、施策の効用変化がどの程度シェアに波及するかを直接可視化。Outside option（市場外）も扱え、現実的な総和制約（シェア合計≤100%）を満たす推定が可能です。",
                  image: {
                    src: "/data_analytics_consulting_feature2.png",
                    alt: "Logit linkage",
                  },
                },
                {
                  subtitle: "新製品のシェア予測にも対応（表明選好×顕示選好）",
                  lead: "新規参入は過去データが乏しく予測が難題。ダイナミックシェアはコンジョイント等の表明選好とPOS等の顕示選好を状況に応じて使い分け、初期効用の推定からダイナミクス接続まで設計します。実務的な設問設計や限界支払意志額（WTP）の算出にも対応。",
                  image: {
                    src: "/data_analytics_consulting_feature3.png",
                    alt: "New product",
                  },
                },
                {
                  subtitle: "意思決定に直結する“シナリオ×感度分析”",
                  lead: "価格改定・広告投下・販促・SKU追加／統合などのシナリオで中長期のシェア推移を比較。パラメータ感度分析と合わせ、最適な投資配分・参入／撤退判断・ブランドポジショニング検討を支援します。",
                  image: {
                    src: "/data_analytics_consulting_feature4.png",
                    alt: "Scenario & sensitivity",
                  },
                },
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">分析ついて相談する</ButtonLink>
            </div>

            {/* ナビ（ページ内ジャンプ） */}
            <a id="sec-service" />
            <BubbleNavSection
              title="提供メニュー"
              lead="クリックで該当セクションへ移動"
              items={[
                { label: "モデル設計\n（需要×LV）", href: "#sec-model" },
                { label: "新製品シェア\n予測", href: "#sec-new" },
                { label: "シナリオ\nシミュレーション", href: "#sec-scenario" },
                { label: "ダッシュボード\n・運用化", href: "#sec-bi" },
              ]}
            />

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

            <a id="sec-bi" />
            <SectionTitle title="ダッシュボード化・運用／内製化支援" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・意思決定の現場で“すぐ回せる”ダッシュボードが欲しい",
                "・社内定着（再現性・ナレッジ化・教育）まで進めたい",
              ])}
              overviewTitle="ご支援のイメージ"
              overview={[
                "更新自動化（ETL）と可視化（BI）を整備し、パラメータ更新で即座に予測刷新。分析手順・検証手順をドキュメント化して内製運用へ移行できるよう伴走します。",
              ]}
            />

            {/* 方法論テーブル（SEO強化） */}
            <SectionTitle title="主な分析メニュー（例）" />
            <AnalysisTable
              header={["分析メニュー", "分析内容概要"]}
              rows={[
                [
                  "データ分析 シェア推定（ロトカ・ヴォルテラモデル×ロジットモデル）",
                  "ロジット需要（価格・属性・販促）とロトカ・ヴォルテラモデルの競争式を接続。相互作用と時間減衰を含む『データ分析 マーケットシェア／シェア予測』を実現。解析解クラスで高速シミュレーション。",
                ],
                [
                  "新製品のシェア予測（SP/RP統合）",
                  "コンジョイントから効用を推定し初期シェアを設定。外部オプション・競争係数・広告減衰を組み込み、発売後の動的推移を予測。",
                ],
                [
                  "シナリオ・感度分析",
                  "価格改定・広告量・販促深さ・発売時期・競合反応などのシナリオ比較とパラメータ感度を提示。意思決定の根拠を可視化。",
                ],
                [
                  "ダッシュボード化／内製化",
                  "ETL自動化とBIで“誰でも回せる”運用を提供。更新のたびに最新のシェア予測が反映され、再現性を担保。",
                ],
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">分析について相談する</ButtonLink>
            </div>
          </>
        }
        sidebar={
          <SidebarNavCard
            title="ダイナミックシェア（シェア推定）"
            items={sidebarLinks}
          />
        }
      />

      {/* フッターの目次 */}
      <FooterNav
        blockTitle="ダイナミックシェア（シェア推定）"
        links={[
          { href: "#sec-feature", label: "特徴" },
          { href: "#sec-service", label: "提供メニュー" },
          { href: "#sec-model", label: "モデル設計" },
          { href: "#sec-new", label: "新製品シェア予測" },
          { href: "#sec-scenario", label: "シナリオシミュレーション" },
          { href: "#sec-bi", label: "ダッシュボード・運用化" },
        ]}
      />
    </main>
  );
}
