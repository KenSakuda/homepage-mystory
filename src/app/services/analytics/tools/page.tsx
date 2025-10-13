// import styles from "./page.module.css";
// // import Link from "next/link";
// import ServicesHero from "../../_components/Hero";
// import ServicesExample from "../../_components/Example";
// import ServicesProduct from "../../_components/Product";
// import ComparisonSection from "../../_components/Comparison";
// import ButtonLink from "@/app/_components/ButtonLink";
// import AndMoreSection from "../../_components/AndMore";

// export default function Page() {
//   return (
//     <main className={styles.main}>
//       <ServicesHero
//         title="データ分析ツール"
//         subtitle="MyStoryは複数のデータ分析ツールの開発・販売を行っております。回帰・分類・時系列など複数の予測モデルを実行可能な『DAVinCI LABS』、意思決定支援ツール『DAIN STATION』、時系列予測に特化した分析ツール『Lead』のご提供が可能です。また、A/Bテストや効果検証に活用できる因果推論ツール『Causal Story』を開発しており、こちらについては2026年4月頃からご提供できる予定です。"
//         imageUrl="/services_analytics_tool_hero.jpg"
//       />
//       {/* <div className={styles.breadcrumb}>
//         <span>
//           <Link href="/">TOPページ</Link>
//         </span>{" "}
//         &gt; <span className={styles.current}>データ分析ツール</span>
//       </div> */}
//       <ServicesExample
//         sectionTitle="分析ツールを導入すべき理由"
//         features={[
//           {
//             icon: "/feature1.svg",
//             title: "分析の信頼性",
//             description:
//               "ChatGPTをはじめとする生成AIの普及により、データサイエンスの知見がない方でも簡単に機械学習モデルを作れるようになりました。しかし、分析設計や特徴量設計、アルゴリズム選択を正しく行えていないケースも散見し、誤ったモデルをもとにビジネス上の意思決定を下すと、会社に大きな損失をもたらしてしまう危険性があります。",
//           },
//           {
//             icon: "/feature2.svg",
//             title: "ビジネス貢献",
//             description:
//               "多くの分析ツールは、データサイエンティストやエンジニアなどの技術職と、ビジネス経験豊富なメンバーがチーム体制で開発・機能改修を行っております。そうして開発されたツールは、技術的な信頼性・堅牢性とビジネスへの活用性が両立されており、上手く活用することでビジネスを前進させることができます。",
//           },
//           {
//             icon: "/feature3.svg",
//             title: "効率性と再現性",
//             description:
//               "分析ツールを活用することで、容易に複数のモデルの作成・比較ができます。もちろんChatGPTを活用すれば複数のモデルを簡単に作成できますが、プロンプトの内容やバージョンによっては上手く分析結果を再現できないことも多いです。また、チームメンバーへの分析結果の共有という側面でもやや難があると言えるでしょう。",
//           },
//         ]}
//       />
//       <ComparisonSection
//         title="データ分析委託のメリット・デメリット"
//         advantages={[
//           "①専門人材や先端ツールを短期間で活用可能",
//           "②ノーコードツールで社内活用がしやすい",
//           "③時系列予測など実務に直結した課題へ応用",
//         ]}
//         disadvantages={[
//           "①業務知識が共有されないと精度が低下",
//           "②手法がブラックボックス化しやすい",
//           "③費用が想定以上になる可能性がある",
//         ]}
//       />
//       <ServicesProduct
//         heading="取り扱い分析ツール一覧"
//         description="当社は様々なビジネスシーンにおいて利用できる複数の分析ツールを提供しております"
//         items={[
//           {
//             subtitle: "DAVinCI LABS",
//             image: "/DAVInci LABS.avif",
//             contents: [
//               {
//                 icon: "/check-mark.svg",
//                 title: "ノーコードで代表的な機械学習モデルの作成が可能",
//                 description:
//                   "データ前処理から、最適なアルゴリズムの選定、ハイパーパラメーターチューニング、モデルの作成と精度評価まで機械学習モデル作成に関する全てのプロセスを自動化。プログラミングや統計の専門知識がないビジネスパーソンでも、機械学習を活用しデータドリブンにビジネスを推進することができます。",
//               },
//               {
//                 icon: "/check-mark.svg",
//                 title: "複数アルゴリズムの比較が可能",
//                 description:
//                   "例えば時系列予測をする際に、ARIMAをはじめとする古典的な時系列モデル、LSTMのようなDeepLearningモデル、XGBoostのようなツリー系の機械学習モデルなど、アルゴリズムの候補は膨大にあります。DAVinCI LABSを使えば複数のアルゴリズムの精度を簡単に比較できるので、ご自身で機械学習モデルを作成できるデータサイエンティストにもお薦めです。",
//               },
//             ],
//           },
//           {
//             subtitle: "DEIN STATION",
//             image: "/deinstation.png",
//             contents: [
//               {
//                 icon: "/check-mark.svg",
//                 title: "構築した機械学習モデルの精査",
//                 description:
//                   "構築した機械学習モデルのKPIパフォーマンスの確認ができるだけでなく、「どういった条件において予測を外しているのか」把握できるため、モデルのチューニングが容易に行えます。",
//               },
//               {
//                 icon: "/check-mark.svg",
//                 title: "ビジネスKPIのシミュレーション",
//                 description:
//                   "意思決定ルールの最適化を行った際の、ビジネスKPIのシミュレーションが可能です。現行モデルと比較することによって、意思決定ルールを採用した際にKPIがどれほど改善されるか確認できます。",
//               },
//             ],
//           },
//           {
//             subtitle: "Lead",
//             image: "/Lead.png",
//             contents: [
//               {
//                 icon: "/check-mark.svg",
//                 title: "時系列予測モデルに特化したAutoMLツール",
//                 description:
//                   "時系列予測モデルに機能を限定したうえで、UI（ツールの見た目）を可能な限りシンプルにしたことにより、AutoMLを安く、簡単に試せます。実務で時系列予測モデルを200件以上行っているデータサイエンティストが監修しているので精度は非常に高く、時系列予測のみ行いたい組織にお薦めです。",
//               },
//             ],
//           },
//           {
//             subtitle: "Causal Story（仮称）※2026年4月頃ローンチ予定",
//             image: "/comingsoon.jpg",
//             contents: [
//               {
//                 icon: "/check-mark.svg",
//                 title: "効果検証に必要なサンプル数を簡単に計算",
//                 description:
//                   "施策を実施する際にA/Bテストを行っている組織は多いと思いますが、サンプル数は少なすぎても多すぎても、正しく効果を検証することはできません。本ツールに条件を入力するだけで統計的に必要なサンプル数を簡単に算出できます。",
//               },
//               {
//                 icon: "/check-mark.svg",
//                 title: "バイアス要因を制御して効果を正しく検証",
//                 description:
//                   "ビジネスにおいては、A/Bテストを実施していないときや、倫理的にA/Bテストを実施することが許されないシーンも多いです。そんなとき、単純に比較したいKPIの差を集計しても、複数のバイアス要因が絡み合い正しい効果検証はできません。Causal Storyは変数間の関係性からバイアス要因を特定し、バイアスを可能な限り制御したうえで「明らかにしたい効果」を検証します。",
//               },
//             ],
//           },
//         ]}
//       />
//       <AndMoreSection
//         title="企業がデータ分析を委託する際の選定ポイント"
//         paragraphs={[
//           {
//             text: "「データ分析 委託 会社」を選定する際には、単に実績があるというだけでなく、使用している分析ツールの信頼性と再現性、さらには統計的根拠をもとにした効果検証ができるかどうかが重要な判断軸となります。",
//           },
//           {
//             text: "例えば、MyStoryが提供する『Causal Story』は、A/Bテストが困難な条件下でも因果関係を特定し、バイアスを制御しながら効果を検証できるため、マーケティング施策やプロダクト改善の場面で非常に有効です。また、『DAIN STATION』では、既存モデルのKPIパフォーマンス分析や意思決定ルールのシミュレーションが可能で、「データ分析 委託 統計」や「データ解析 マーケティング 活用」といったニーズにも対応できます。",
//           },
//           {
//             text: "このような機能を備えた分析企業は、分析結果の再現性や透明性を重視するデータサイエンティストにとっても信頼できるパートナーとなるでしょう。選定時には、使用するツールやアルゴリズム、レポートの共有形式、価格体系などを必ず確認することが成功のカギとなります。",
//           },
//         ]}
//       />
//       <div className={styles.buttonLink}>
//         <ButtonLink href="/data/analytics-data">
//           データ分析結果を見る
//         </ButtonLink>
//       </div>
//       <AndMoreSection
//         title="データ分析の委託ならMyStoryへ"
//         paragraphs={[
//           {
//             text: "データ分析を委託する際、どの企業に依頼すべきか悩まれる方も多いでしょう。",
//           },
//           {
//             text: "MyStoryは「データ分析 委託 企業」として、マーケティング、スポーツ、人事といった多様な領域での実績を持ち、統計や機械学習に精通した分析チームが在籍する数少ない企業のひとつです。「データ分析 委託 統計」や「データ分析 委託 費用」といったニーズに応えるだけでなく、経済学や消費者行動理論などを活用した戦略的コンサルティングも可能です。",
//           },
//           {
//             text: "特に、マーケティングPDCAの各フェーズに対応できる「データ解析 マーケティング 手法」や、業務に直結する「データ解析 マーケティング 活用」に強みを持ち、「データ分析 機械学習 モデル」の構築や「ツール」導入支援にも豊富な経験があります。",
//           },
//           {
//             text: "MyStoryは、単なる外注先ではなく、成果にこだわるパートナーとして選ばれ続けています。精度・再現性・応用性に優れた「使えるデータ分析」をお求めなら、ぜひご相談ください。",
//           },
//         ]}
//       />
//       <div className={styles.buttonLink}>
//         <ButtonLink href="/contact">分析について相談する</ButtonLink>
//       </div>
//     </main>
//   );
// }

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
        image={{ src: "/data_analytics_tools_hero.png", alt: "hero" }}
        title="データ分析ツールの提供"
      />

      <MainWithSidebar
        main={
          <>
            {/* リード：ツール群の総覧 */}
            <LeadBlock
              title="ノーコード×AutoML×意思決定支援。現場で“使われ続ける”分析ツールを。"
              body={[
                "MyStoryは、機械学習のノーコードAutoMLから、モデル監査・意思決定シミュレーション、時系列予測特化ツール、因果推論によるA/Bテスト・効果検証まで、ビジネスの現場で使えるデータ分析ツール群をご提供します。",
                "　",
                "『DAVinCI LABS』（回帰・分類・時系列などのAutoML）／『DEIN STATION』（モデル精査・KPIシミュレーション）／『Lead』（時系列予測特化AutoML）に加え、因果推論ツール『Causal Story』（仮称・2026年4月頃提供予定）をラインアップ。要件定義・実装・運用・教育まで一気通貫で伴走し、ツール導入のROIを最大化します。",
              ]}
            />

            {/* 能力図（差し替え可） */}
            <ServiceImage
              src="/data_analytics_consulting_mystory_capability.png"
              alt="MyStoryのツール提供ケイパビリティ"
            />

            {/* 特徴（SEOワードを自然に内包） */}
            <a id="sec-feature" />
            <FeatureHighlights
              title="MyStoryの分析ツール提供の特徴"
              items={[
                {
                  subtitle: "“精度×再現性×解釈性”を両立した機械学習運用",
                  lead: "データ前処理・特徴量エンジニアリング・ハイパーパラメータ最適化・評価指標（AUC/MAE/SMAPE等）・SHAPによる説明性を標準装備。AutoMLでもブラックボックス化を回避し、再現性あるML Opsを実現します。",
                  image: {
                    src: "/data_analytics_consulting_feature1.png",
                    alt: "ML運用のベストプラクティス",
                  },
                },
                {
                  subtitle: "意思決定のための“使い勝手”を最優先",
                  lead: "役割別KPIと権限、ダッシュボード、シナリオ比較、通知・アラートまで設計。分析ツールが日次の意思決定フローに自然に溶け込み、現場のアクションへ直結します。",
                  image: {
                    src: "/data_analytics_consulting_feature2.png",
                    alt: "意思決定に直結するUI/UX",
                  },
                },
                {
                  subtitle: "時系列予測・因果推論など実務直結の領域に強い",
                  lead: "需要予測・在庫最適化・解約抑止・価格最適化・ABテスト設計など、現場での利用頻度が高いユースケースに特化したテンプレートとガイドを同梱。導入初月から成果創出を狙えます。",
                  image: {
                    src: "/data_analytics_consulting_feature3.png",
                    alt: "実務ユースケースに最適化",
                  },
                },
                {
                  subtitle:
                    "内製化と標準化：テンプレ/コード/運用ドキュメントを提供",
                  lead: "ワークフロー、実験テンプレ、モデル比較治具、権限・監査ログ設計を提供。担当者が変わっても運用が継続できる“標準プロセス”を作ります。",
                  image: {
                    src: "/data_analytics_consulting_feature4.png",
                    alt: "内製化・標準化の支援",
                  },
                },
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">ツール導入について相談</ButtonLink>
            </div>

            {/* ナビ（製品一覧） */}
            <a id="sec-service" />
            <BubbleNavSection
              title="提供ツール／ソリューション一覧"
              lead="代表的な4プロダクト。クリックで詳細へ。"
              items={[
                { label: "DAVinCI\nLABS", href: "#sec-davinci" },
                { label: "DEIN\nSTATION", href: "#sec-dein" },
                { label: "Lead\n（時系列AutoML）", href: "#sec-lead" },
                { label: "Causal Story\n（因果推論）", href: "#sec-causal" },
              ]}
            />

            {/* ===== 各ツール ===== */}
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

            {/* ツール比較（表） */}
            <AnalysisTable
              header={["カテゴリ", "提供内容（例）"]}
              rows={[
                [
                  "AutoML（回帰・分類・時系列）",
                  "データ前処理〜アルゴリズム選定〜ハイパーパラメータ最適化〜評価・説明性の自動化。ノーコードでモデル作成と比較が可能。",
                ],
                [
                  "モデル精査／シミュレーション",
                  "誤差の集中条件を特定し、スコア閾値・配布ルール変更時のKPIを事前に試算。監査ログ・指標を自動出力。",
                ],
                [
                  "時系列予測",
                  "需要予測・在庫最適化・販促需要見込みに。ARIMA/ETS/Prophet/ツリー系を自動比較し、SMAPE等で精度管理。",
                ],
                [
                  "因果推論／効果検証",
                  "A/Bテストのサンプルサイズ設計、観測データでの因果効果推定（DID・PS・DRなど）を支援。",
                ],
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">ツール導入について相談</ButtonLink>
            </div>
          </>
        }
        sidebar={
          <SidebarNavCard title="データ分析サービス" items={sidebarLinks} />
        }
      />

      <FooterNav
        blockTitle="データ分析ツールの提供"
        links={[
          { href: "#sec-feature", label: "MyStoryの分析ツール提供の特徴" },
          { href: "#sec-service", label: "提供ツール／ソリューション一覧" },
          { href: "#sec-davinci", label: "DAVinCI LABS（AutoML）" },
          { href: "#sec-dein", label: "DEIN STATION" },
          { href: "#sec-lead", label: "Lead（時系列AutoML）" },
          { href: "#sec-causal", label: "Causal Story（因果推論）" },
        ]}
      />
    </main>
  );
}
