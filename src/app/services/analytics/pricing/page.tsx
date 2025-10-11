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
              title="価格戦略で売上/利益を最大化する。「データ分析」×「行動経済学」の実践的プライシングを実現"
              body={[
                "『Price Decisioning』は、需要曲線の推定やダイナミックプライシング、バンドル販売といった「データ分析 プライシング」の核となる手法に加え、行動経済学にもとづく価格設計・価格提示（参照価格／フレーミング／極端回避／おとり効果など）を統合した実践的な価格戦略ソリューションです。価格はマーケティング4Pの中で唯一、短期に自社で変更でき、かつ利益インパクトが最も大きい変数――だからこそ、分析で“最適価格”を導き出すだけでなく、「どう見せるか／どう選ばせるか」まで設計することが成果を左右します。",
                "　",
                "私たちは、実売データによる顕示選好法と、コンジョイント分析などの表明選好法を使い分けて「いくらのときにいくつ売れるか」を精緻に推定。そこに行動経済学の専門的知見を重ね、セグメントごとの価格差別やダイナミックプライシングのルール策定、バンドリングの構成、値引きとポイント付与の使い分け、価格プランの提示順序・表現までを含む“運用可能な価格戦略”へ落とし込みます。『Price Decisioning』は、データ分析×行動経済学で、意思決定と実装に直結する本当に使えるプライシングを提供します。",
              ]}
            />

            {/* 特徴（4本） */}
            <a id="feature" />
            <FeatureHighlights
              title="『Price Decisioning』の特徴"
              items={[
                {
                  subtitle: "支払意思額に基づく最適価格を算出",
                  lead: "顧客ごとの支払意思額（WTP）をデータから推定し、売上や利益を最大化する価格を分析で導出します。実売データがある場合は、価格・販促・在庫・競合・季節要因を織り込んだ回帰／時系列／状態空間／機械学習で需要曲線（価格×数量）を推定。新商品やデータが乏しい場合はコンジョイント分析でWTPと属性別の金銭換算効用を測定します。これらから利潤関数を構築し最適価格を特定。セグメント別や個別水準での価格最適化（価格差別・バンドル含む）にも展開できます。",
                  image: {
                    src: "/data_analytics_pricing_feature1.png",
                    alt: "Demand & Profit",
                  },
                  links: [
                    {
                      label:
                        "【コラム】需要曲線の推定とプライシングへの活用法～「いくらなら売れる？」を科学する～ はこちら",
                      href: "https://www.b-mystory.com/column/cgu1ok6vf9u",
                    },
                    {
                      label:
                        "【コラム】バリューベースドプライシング：支払意思額から考える新しい価格戦略 はこちら",
                      href: "https://www.b-mystory.com/column/90u1u8vuw5",
                    },
                  ],
                },
                {
                  subtitle: "応用的なプライシング手法にも対応",
                  lead: "ダイナミックプライシング、バンドル販売、価格差別などの応用的な価格分析まで対応可能。容量制約・需要変動・予約制といった条件下では、上限下限・変動幅・頻度・告知方法を含むダイナミック価格ルールを設計し、KPIシミュレーションで妥当性を検証。第3種価格差別（学割・地域・時間帯）や個別値引き（誰に・どの深さで配布すべきか）を最適化し、二部料金・数量割引・機能別プランなどのバンドル販売も設計します。運用ガイドと監視指標まで整え、“使える”価格戦略として現場実装まで支援します。",
                  image: {
                    src: "/data_analytics_pricing_feature2.png",
                    alt: "Dynamic & Discrimination",
                  },
                  links: [
                    {
                      label:
                        "【コラム】「ダイナミックプライシング」が再注目！利益最大化の鍵となる重要戦略をご紹介 はこちら",
                      href: "https://www.b-mystory.com/column/1pjrax_nzn",
                    },
                    {
                      label:
                        "【コラム】「バンドル販売」がもたらす新たな価値創造と価格戦略の可能性 はこちら",
                      href: "https://www.b-mystory.com/column/w1nbzq8ti",
                    },
                  ],
                },
                {
                  subtitle: "行動経済学×価格設計を統合",
                  lead: "データ分析だけではなく、行動経済学を組み込んだ価格プラン設計と“価格の提示方法”まで一体で提供します。参照価格・損失回避・フレーミング・極端回避・おとり効果・アンカリング等の理論を用い、プラン構成／価格帯／割引・ポイントの使い分け／表示順序・比較群を最適化。**「いくらにするか」×「どう提示するか」**を同時に設計することで、受容性と収益性を両立し、現場の意思決定にそのまま繋がる実装可能な価格戦略へ落とし込みます。",
                  image: {
                    src: "/data_analytics_pricing_feature3.png",
                    alt: "Behavioral Pricing",
                  },
                  links: [
                    {
                      label:
                        "【コラム】「参照点価格」の魔力～あなたがその価格に反応してしまう理由を行動経済学で読み解く～ はこちら",
                      href: "https://www.b-mystory.com/column/9fga26nvy6i",
                    },
                    {
                      label:
                        "【コラム】ポイントと値引きの違い 〜行動経済学で読み解くプロモーション施策の本質〜 はこちら",
                      href: "https://www.b-mystory.com/column/d1uun_2n9qib",
                    },
                  ],
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
                src: "/data_analytics_pricing_需要曲線の推定.png",
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
                src: "/data_analytics_pricing_ダイナミックプライシング.png",
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
                src: "/data_analytics_pricing_バンドル販売.png",
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
                src: "/data_analytics_pricing_行動経済学.png",
                alt: "Behavioral Design",
              }}
            />

            <AnalyticsOutsourceSection />

            <div className={styles.contact}>
              <ButtonLink href="/contact">分析について相談する</ButtonLink>
            </div>
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
