import styles from "./page.module.css";
import {
  Hero,
  MainWithSidebar,
  SidebarNavCard,
  LeadBlock,
  ServiceImage,
  FeatureHighlights,
  SectionTitle,
  ServiceSection,
  AnalysisTable,
  FooterNav,
  AnalyticsOutsourceSection,
} from "@/app/services/analytics/components";
import ButtonLink from "@/app/_components/ButtonLink";

export default function Page() {
  const sidebarLinks = [
    {
      href: "/services/analytics/consulting",
      label: "受託分析 / データ分析コンサルティング",
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

  const bullets = (a: string[]) => a.map((text) => ({ text }));

  return (
    <main className={styles.page}>
      <Hero
        image={{
          src: "/data_analytics_pricing_hero.png",
          alt: "『Price Decisioning』Hero",
        }}
        title="価格分析ソリューション『Price Decisioning』"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="価格で売上/利益を最大化する。「データ分析」×「行動経済学」の実践的プライシングを実現"
              body={[
                "Price Decisioning は、データ分析による需要曲線の推定と、行動経済学・消費者行動理論に基づく意思決定デザインを統合した価格戦略ソリューションです。価格はマーケティング4Pの中でも唯一“短期に自社で変えられ”、利益に最も大きく効く変数であり（例：10%値上げで数量が10%減でも利益は大きく増え得る）、戦略の中核です。", // 4Pでの重要性の趣旨（参照価格や価格の特殊性）→ file 141/142
                "　",
                "私たちは、顕示選好法（実売データ）／表明選好法（調査・コンジョイント）を使い分けて“いくらの時にいくつ売れるか”を精緻化し、価格差別・ダイナミックプライシング・バンドリング・値引き／ポイント付与の最適配分まで設計します。意思決定は、統計学・機械学習による推定と、参照価格・損失回避・フレーミング等の行動バイアス理解を組み合わせ、現場で運用できる形に落とし込みます。", // 需要曲線・顕示/表明・行動経済学→ file 140/141/142
              ]}
            />

            {/* 特徴（4本） */}
            <a id="feature" />
            <FeatureHighlights
              title="Price Decisioning の特徴"
              items={[
                {
                  subtitle: "需要曲線の推定と“利益最大化”に直結する価格設計",
                  lead: "価格×数量の関係（需要曲線）を、顕示選好法ではPOS/在庫/販促・競合・季節要因を織り込んだ回帰・時系列・状態空間・機械学習で推定。表明選好法ではコンジョイントで支払意思額（WTP）を金額ベースで測定し、属性ごとの金銭換算効用も算出します。推定した需要曲線とコスト制約から利潤関数を構築し、最適価格・価格帯を特定します。", // 需要曲線・WTP・最適価格→ file 140/141
                  image: {
                    src: "/data_analytics_pricing_feature1.png",
                    alt: "Demand & Profit",
                  },
                },
                {
                  subtitle:
                    "ダイナミックプライシング／価格差別・バンドリングまで拡張",
                  lead: "容量制約・予約制・日次変動が大きい等の条件ではダイナミックプライシングが有効です。学割・地域・時間帯などの第3種価格差別、クーポンの“誰にどの深さで配布すべきか”の個別値引き設計、バンドル販売（固定＋従量、数量割引、プラン設計）まで、事業特性に合わせて運用可能なルールへ落とします。", // DPの適用条件/注意、第3種価格差別、個別値引き→ file 140/141/142
                  image: {
                    src: "/data_analytics_pricing_feature2.png",
                    alt: "Dynamic & Discrimination",
                  },
                },
                {
                  subtitle: "行動経済学で“受容される価格”をデザイン",
                  lead: "参照価格・損失回避・極端回避・おとり効果・フレーミング・アンカリング等の知見を踏まえ、価格と提示の仕方を最適化。値引きとポイント付与の選択、表示順序や比較群の設計など、“合理性×受容性”を両立させる価格コミュニケーションを設計します。", // 参照価格/ポイントの効果、提示設計→ file 142
                  image: {
                    src: "/data_analytics_pricing_feature3.png",
                    alt: "Behavioral Pricing",
                  },
                },
                {
                  subtitle: "運用・ダッシュボード・内製化まで一気通貫",
                  lead: "需要予測や弾力性の更新、価格テーブル配信、A/Bテスト／因果推論による効果検証までの仕組み化を支援。KPI・監視指標・例外処理を整備し、ダッシュボード・運用ガイド・コードを提供。現場で再現できる形で内製化まで伴走します。", // 運用と効果検証
                  image: {
                    src: "/analytics_solution_2.アップリフトモデリング.png",
                    alt: "Ops & Enablement",
                  },
                },
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">分析について相談する</ButtonLink>
            </div>

            <SectionTitle title="プライシング（価格戦略）の代表的な分析テーマ" />
            <ServiceImage
              src="/data_analytics_pricing_application_method.png"
              alt="プライシング応用手法"
            />
            <AnalysisTable
              header={["テーマ", "概要"]}
              rows={[
                [
                  "需要曲線の推定",
                  "顕示選好（実売データ）／表明選好（コンジョイント）で価格×数量の関係を特定し、最適価格と利益を最大化。",
                ],
                [
                  "ダイナミックプライシング",
                  "容量制約・需要変動に応じて価格を動的に最適化。上限下限・変動幅・告知方法までルール化。",
                ],
                [
                  "バンドル販売・価格差別",
                  "第二種／第三種価格差別、固定＋従量、数量割引、個別値引きの配布最適化で収益性を高める。",
                ],
                [
                  "値引き／ポイント付与",
                  "即時効果と参照価格の長期影響を踏まえて使い分け。損失回避・フレーミングに配慮した表現設計。",
                ],
              ]}
            />

            {/* ===== 各モジュール ===== */}
            <a id="demand" />
            <SectionTitle title="需要曲線の推定（顕示選好法／表明選好法）" />
            <ServiceSection
              overviewTitle="ご支援のイメージ"
              overview={[
                "顕示選好法：実売データ（価格・数量・販促・競合・季節）から価格弾力性を推定し、SKU〜カテゴリ単位で需要曲線を構築。状態空間モデルや機械学習も適用し、非線形・非定常性に対応します。",
                "表明選好法：コンジョイントでWTPと属性別効用を金額換算し、新製品やデータ不足時でも価格帯を設計。推定された需要曲線とコストから利潤最大となる最適価格を導出します。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "最適価格／価格帯、弾力性、利益曲線・感度分析",
                "価格改定シナリオ（上げ／下げ）別の数量・利益シミュレーション",
              ])}
              subEyebrow="イメージ"
              subImage={{
                src: "/data_analytics_consulting_outsourcing.png",
                alt: "Demand Curve",
              }}
            />

            <a id="dp" />
            <SectionTitle title="ダイナミックプライシング" />
            <ServiceSection
              overviewTitle="ご支援のイメージ"
              overview={[
                "容量制約・予約制・需要の時系列変動が大きい等の条件で、価格変動ルールを設計。需要の平準化・売り切り最適化を目的に、上限下限・変動間隔・告知方法を含む運用ガイドを整備します。",
                "注意点（過度変動による反発、受容域からの乖離、不公平感の回避）も併せて対策を実装します。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "価格変動ルール・制御パラメータ・アラート指標",
                "A/Bテスト設計と因果推論による効果検証テンプレート",
              ])}
              subEyebrow="イメージ"
              subImage={{
                src: "/data_analytics_consulting_feature2.png",
                alt: "Dynamic Pricing",
              }}
            />

            <a id="bundling" />
            <SectionTitle title="バンドル販売／価格差別（学割・地域・時間帯・個別値引き）" />
            <ServiceSection
              overviewTitle="ご支援のイメージ"
              overview={[
                "第二種（数量・二部料金）、第三種（セグメント別）を中心に、収益最大化と公平感の両立を目指したルール設計を実施。クーポンは“誰にどの深さ”で配布するかを学習し、ROIを最大化します。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "セグメント別価格・クーポン深さの配布ポリシー",
                "プラン／バンドルの最適構成（固定＋従量・機能差プラン）",
              ])}
              subEyebrow="イメージ"
              subImage={{
                src: "/data_analytics_consulting_feature1.png",
                alt: "Bundling & Discrimination",
              }}
            />

            <a id="behavior" />
            <SectionTitle title="行動経済学に基づく価格コミュニケーション" />
            <ServiceSection
              overviewTitle="ご支援のイメージ"
              overview={[
                "参照点価格・損失回避・フレーミング・おとり効果・極端回避・アンカリング等の理論を設計に反映。表示順序や比較群、値引き／ポイント付与の使い分け、B2Bの見積・交渉現場における参照価格対策など、受容される提示をデザインします。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "価格表現ガイドライン（表示順序・比較群・文言例）",
                "値引きとポイント付与の適用基準（即時／継続の効果差を考慮）",
              ])}
              subEyebrow="イメージ"
              subImage={{
                src: "/data_analytics_consulting_feature3.png",
                alt: "Behavioral Design",
              }}
            />

            <AnalyticsOutsourceSection />
          </>
        }
        sidebar={
          <SidebarNavCard title="Price Decisioning" items={sidebarLinks} />
        }
      />

      <a id="contact" />
      <FooterNav
        blockTitle="Price Decisioning｜価格戦略"
        links={[
          { href: "#feature", label: "特徴" },
          { href: "#demand", label: "需要曲線推定" },
          { href: "#dp", label: "ダイナミックプライシング" },
          { href: "#bundling", label: "バンドリング・価格差別" },
          { href: "#behavior", label: "行動経済学×価格" },
        ]}
      />
    </main>
  );
}
