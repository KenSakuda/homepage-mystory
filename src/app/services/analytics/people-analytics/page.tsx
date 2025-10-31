import type { Metadata } from "next";
import styles from "./page.module.css";
// import Image from "next/image";
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

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const title = "ピープルアナリティクスサービス";
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
      images: [{ url: "/data_analytics_peopleanalytics_hero.png" }],
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

  const bullets = (a: string[]) => a.map((text) => ({ text }));

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
                  lead: "データ分析だけではなく、行動経済学を組み込んだ価格プラン設計と“価格の提示方法”まで一体で提供します。参照価格・損失回避・フレーミング・極端回避・おとり効果・アンカリング等の理論を用い、プラン構成／価格帯／割引・ポイントの使い分け／表示順序・比較群を最適化。「いくらにするか」×「どう提示するか」を同時に設計することで、受容性と収益性を両立し、現場の意思決定にそのまま繋がる実装可能な価格戦略へ落とし込みます。",
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

            <AnalysisTable
              header={["テーマ", "概要"]}
              rows={[
                [
                  "需要曲線の推定",
                  "顕示選好（実売データ）／表明選好（コンジョイント）で価格×数量の関係を特定し、売上と利益を最大化する価格を算出",
                ],
                [
                  "ダイナミックプライシング",
                  "容量制約・需要変動に応じて価格を動的に最適化。上限下限・変動幅・告知方法までルール化することで自動化可能",
                ],
                [
                  "バンドル販売・価格差別",
                  "第二種／第三種価格差別、固定＋従量、数量割引、個別値引きの配布最適化で収益性を高める",
                ],
                [
                  "値引き／ポイント付与",
                  "即時効果と参照価格の長期影響を踏まえて使い分け。損失回避・フレーミングに配慮した表現設計",
                ],
              ]}
            />

            {/* ===== 各モジュール ===== */}
            <a id="demand" />
            <SectionTitle title="需要曲線の推定" />
            <ServiceSection
              overviewTitle="分析概要"
              overview={[
                "顕示選好法：実売データ（価格・数量・販促・競合・季節）から価格弾力性を推定し、SKU〜カテゴリ単位で需要曲線を推定。データ内容に応じて状態空間モデルや機械学習を適用し、非線形・非定常性にも対応可能です。",
                "表明選好法：コンジョイント分析で顧客ごとの支払意思額と属性別効用を金額換算し、新製品やデータ不足時でも最適価格帯を推定。推定された需要曲線とコストから利潤が最大となる価格を導出します。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "最適価格／価格帯、属性ごとの価格弾力性など",
                "価格改定シナリオ（上げ／下げ）別の数量・利益シミュレーション",
              ])}
              subEyebrow="分析イメージ"
              subImage={{
                src: "/data_analytics_pricing_需要曲線の推定.png",
                alt: "Demand Curve",
              }}
            />

            <a id="dp" />
            <SectionTitle title="ダイナミックプライシング" />
            <ServiceSection
              overviewTitle="分析概要"
              overview={[
                "容量に制約がある場合や予約制の座席など、需要の時系列変動が大きい条件下における価格変動ルールを設計。需要の平準化や在庫の売り切りを目的に、上限下限・変動間隔・告知方法を含む運用ガイドを整備します。",
                "注意点（過度の変動による反発、受容域からの乖離、不公平感の回避）も併せて対策を実装します。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "価格変動ルール・制御パラメータ・アラート指標",
                "価格変動ルールのシステム実装サポート",
                "オプションでA/Bテスト設計と因果推論による効果検証テンプレート",
              ])}
              subEyebrow="ダイナミックプライシングの例"
              subImage={{
                src: "/data_analytics_pricing_ダイナミックプライシング.png",
                alt: "Dynamic Pricing",
              }}
            />

            <a id="bundling" />
            <SectionTitle title="バンドル販売／価格差別（学割・地域・時間帯・個別値引き）" />
            <ServiceSection
              overviewTitle="分析概要"
              overview={[
                "バンドル販売は、関連する商品や機能を「まとめてお得」にする売り方です。例として、「基本プラン＋よく使うオプションをセットで◯％OFF」「同じ商品を2個買うと割引」など。バンドル販売の導入により、顧客は選びやすく、企業は客単価や利用率が上がりやすい設計にできます。",
                "価格差別は、お客様や状況に合わせて価格を変える考え方です。例として、学生割・地域別料金・時間帯割・会員向けクーポンなどがあります。導入のメリットとしては、価値の感じ方や予算が異なるお客様にもフィットし、販売機会と利益の最大化につながります。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "セグメント別価格・クーポン深さの配布ポリシー",
                "プラン／バンドルの最適構成（固定＋従量・機能差プラン）",
              ])}
              subEyebrow="分析イメージ"
              subImage={{
                src: "/data_analytics_pricing_バンドル販売.png",
                alt: "Bundling & Discrimination",
              }}
            />

            <a id="behavior" />
            <SectionTitle title="行動経済学に基づく価格コミュニケーション" />
            <ServiceSection
              overviewTitle="分析概要"
              overview={[
                "参照点価格・損失回避・フレーミング・おとり効果・極端回避・アンカリングなどの理論を価格設計に反映。表示順序や比較群、値引き／ポイント付与の使い分け、B2Bの見積・交渉現場における参照価格対策など、受容される価格提示方法をデザインします。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "価格表現ガイドライン（表示順序・比較群・文言例）",
                "値引きとポイント付与の適用基準（即時／継続の効果差を考慮）",
              ])}
              subEyebrow="フレーミング効果の例"
              subImage={{
                src: "/data_analytics_pricing_行動経済学.png",
                alt: "Behavioral Design",
              }}
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
