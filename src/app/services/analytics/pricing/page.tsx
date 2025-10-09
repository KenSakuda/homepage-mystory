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
          src: "/data_analytics_consulting_hero.png",
          alt: "Price Decisioning",
        }}
        title="Price Decisioning（価格分析ソリューション）"
      />

      <MainWithSidebar
        main={
          <>
            {/* リード */}
            <LeadBlock
              title="データ分析×プライシングで利潤最大化を実現。需要曲線に基づく価格戦略を“意思決定”まで伴走"
              body={[
                "Price Decisioning は、需要曲線と費用構造を統合した利潤最大化の原理に沿って、最適価格・割引・クーポン・バンドル販売・ダイナミックプライシングまでを科学する価格分析ソリューションです。統計モデリングと機械学習、行動経済学の知見を組み合わせ、BtoC/BtoB双方で「いくらで売ると利益が最大化するか」をデータで導きます。", // 需要曲線×利潤の考え方
                "観測データ（顕示選好）と調査データ（表明選好）を使い分けて価格弾力性を推定し、セグメント別のWTP（支払意思額）や参照価格効果も考慮。時系列に応じたダイナミックプライシング、地域・顧客属性による価格差別、プランのバンドル最適化など、実務運用に耐える“価格の意思決定”へ落とし込みます。", // 顕示/表明・価格差別・ダイナミック
              ]}
            />

            {/* 能力マップ（画像は差替え前提） */}
            <ServiceImage
              src="/data_analytics_consulting_mystory_capability.png"
              alt="Price Decisioning Capability Map"
            />

            {/* 特徴 */}
            <a id="sec-feature" />
            <FeatureHighlights
              title="Price Decisioning の特徴"
              items={[
                {
                  subtitle: "需要曲線×費用曲線で“利益”を最大化",
                  lead: "価格変更が需要・売上・利益に与える影響を、需要曲線と費用曲線から一貫モデリング。最適価格の探索だけでなく、価格改定による利益の変化、在庫・生産制約下での現実的な打ち手まで提示します（ダイナミックプライシング/セグメント別価格にも対応）。",
                  image: {
                    src: "/data_analytics_consulting_feature1.png",
                    alt: "需要曲線・費用曲線",
                  },
                },
                {
                  subtitle: "機械学習×統計を組み合わせた価格弾力性推定",
                  lead: "回帰・一般化線形モデル、状態空間・時系列モデル、ツリー系/ブースティングなどの機械学習を適材適所で適用。顕示選好データと表明選好データを使い分け、既存品から新製品までの価格感応度を高精度に推定します（クロス価格弾力/カニバリも考慮）。",
                  image: {
                    src: "/data_analytics_consulting_feature2.png",
                    alt: "機械学習・統計",
                  },
                },
                {
                  subtitle: "行動経済学に基づく“受け入れられる値付け”",
                  lead: "参照価格・損失回避・フレーミング等の行動経済学的効果を考慮し、顧客が受け入れやすい価格提示や販促（値引/ポイント/クーポン）設計をガイド。単発の最適価格に留まらず、長期的に価格資産を毀損しない運用を支援します。",
                  image: {
                    src: "/data_analytics_consulting_feature3.png",
                    alt: "行動経済学",
                  },
                },
                {
                  subtitle: "価格戦略の実装まで伴走（PoC→業務運用）",
                  lead: "データ整備、モデル実装、意思決定ルールとダッシュボード化、ABテスト/効果検証、ガバナンス整備まで一気通貫で支援。運用テンプレートと内製化トレーニングもセットで、価格戦略の“継続運用”を可能にします。",
                  image: {
                    src: "/data_analytics_consulting_feature4.png",
                    alt: "実装伴走",
                  },
                },
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">分析について相談する</ButtonLink>
            </div>

            {/* ナビ（ページ内ジャンプ） */}
            <a id="sec-service" />
            <BubbleNavSection
              title="提供メニュー"
              lead="クリックで該当セクションへ移動"
              items={[
                { label: "需要曲線\n推定", href: "#sec-demand" },
                { label: "ダイナミック\nプライシング", href: "#sec-dp" },
                { label: "バンドル／\nプラン最適化", href: "#sec-bundle" },
                { label: "販促・割引・\nクーポン最適化", href: "#sec-promo" },
              ]}
            />

            {/* ===== 各サービス ===== */}
            <a id="sec-demand" />
            <SectionTitle title="需要曲線推定（価格弾力性の推定）" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・価格を上げたいが、売上・利益への影響が読めない",
                "・カテゴリ/商品/セグメント別に価格感応度を把握したい",
                "・新製品で実績データが乏しく、価格の起点が決められない",
              ])}
              overviewTitle="ご支援のイメージ"
              overview={[
                "POS・受注などの顕示選好データと、調査ベースの表明選好データを使い分けて、価格弾力性とWTPを推定。クロス価格弾力やカニバリ、在庫・生産制約も組み込んだうえで、利益最大化の最適価格帯を提示します。", // 需要×費用×最適化
                "既存品は顕示選好（回帰・GLM・状態空間モデル・機械学習）、新製品は表明選好（PSM/コンジョイント/離散選択実験）を活用し、現実的な精度と解釈性のバランスを確保します。",
              ]}
            />

            <a id="sec-dp" />
            <SectionTitle title="ダイナミックプライシング設計" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・需要の波に合わせて価格を動かしたい（在庫/座席/期間）",
                "・価格変動に対する顧客の納得感や公平感が懸念",
              ])}
              overviewTitle="ご支援のイメージ"
              overview={[
                "需要の時間変動とキャパ制約を踏まえ、販売時期別に価格を最適化。変動幅や表示の設計、コミュニケーションの工夫により、“受け入れられるダイナミックプライシング”を実装します。",
              ]}
            />

            <a id="sec-bundle" />
            <SectionTitle title="バンドル販売／プラン・価格表の最適化" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・単品販売とバンドル販売のどちらが利益最大か分からない",
                "・“おとり効果”やラインナップの並べ方を理論的に最適化したい",
              ])}
              overviewTitle="ご支援のイメージ"
              overview={[
                "相補・代替関係やWTP分布を踏まえ、プラン数・価格差・機能束ねを最適化。行動経済学のフレーミングや極端回避への配慮も取り込み、選ばれやすく利益を最大化する“価格表”を共創します。",
              ]}
            />

            <a id="sec-promo" />
            <SectionTitle title="販促・割引・クーポン最適化（価格とポイントの使い分け）" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・一律値引きの採算が合わない／ROIが読めない",
                "・ポイントと値引き、どちらが効くのか判断できない",
              ])}
              overviewTitle="ご支援のイメージ"
              overview={[
                "価格弾力性とプロモ弾力性を併せて推定し、誰に・いつ・どの深さでクーポン/ポイント/ディスカウントを出すとROIが最大かを設計。参照価格を毀損しない運用ルールまで定義します。",
              ]}
            />

            {/* 方法論テーブル（SEOも意識） */}
            <SectionTitle title="主な分析メニュー（例）" />
            <AnalysisTable
              header={["分析メニュー", "分析内容概要"]}
              rows={[
                [
                  "需要曲線の推定／価格弾力性",
                  "価格×数量（顕示/表明）から弾力性・WTPを推定し、費用曲線と統合して利潤最大化価格を算出。ダイナミックプライシングやセグメント別価格の基盤に。",
                ],
                [
                  "ダイナミックプライシング",
                  "キャパ制約・時期要因・外部需要ドライバを加味し、販売期間別の最適価格を最適化。受容可能な変動幅・表示やルールまで設計。",
                ],
                [
                  "バンドル最適化／ラインナップ設計",
                  "プラン数・機能束ね・価格階段を同時最適化。おとり効果・極端回避に配慮した“選ばれる価格表”を設計。",
                ],
                [
                  "プロモーション最適化",
                  "値引・ポイント・クーポンの弾力性と参照価格影響を比較し、個客×タイミングのきめ細かな配布でROI最大化。",
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
            title="価格分析ソリューション（Price Decisioning）"
            items={sidebarLinks}
          />
        }
      />

      {/* フッターの目次 */}
      <FooterNav
        blockTitle="価格分析ソリューション（Price Decisioning）"
        links={[
          { href: "#sec-feature", label: "特徴" },
          { href: "#sec-service", label: "提供メニュー" },
          { href: "#sec-demand", label: "需要曲線推定" },
          { href: "#sec-dp", label: "ダイナミックプライシング" },
          { href: "#sec-bundle", label: "バンドル／プラン最適化" },
          { href: "#sec-promo", label: "販促・割引最適化" },
        ]}
      />
    </main>
  );
}
