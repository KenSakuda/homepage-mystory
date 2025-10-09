// import styles from "./page.module.css";
// import ServicesHero from "../../_components/Hero";
// import ServicesExample from "../../_components/Example";
// import ServicesProduct from "../../_components/Product";
// import CommunitySection from "../../_components/Appendix";
// import { CommunityCard } from "../../_components/Appendix";
// import PDCAVisual, { PdcaItem } from "../../_components/PDCAVisual";
// import ButtonLink from "@/app/_components/ButtonLink";
// import AndMoreSection from "../../_components/AndMore";

// const pdcaItems: PdcaItem[] = [
//   {
//     title: "Plan",
//     description: "市場データを基にした戦略立案やターゲティング。仮説生成支援。",
//     icon: "/icons/plan.svg",
//     colorClass: "plan",
//   },
//   {
//     title: "Do",
//     description:
//       "機械学習による配布対象選定や施策実行支援。キャンペーン最適化。",
//     icon: "/icons/do.svg",
//     colorClass: "do",
//   },
//   {
//     title: "Check",
//     description:
//       "因果推論による効果検証（傾向スコア・RDD等）。KPI達成度の精密測定。",
//     icon: "/icons/check.svg",
//     colorClass: "check",
//   },
//   {
//     title: "Act",
//     description: "データに基づいた改善案提示。次回施策への即時フィードバック。",
//     icon: "/icons/act.svg",
//     colorClass: "act",
//   },
// ];

// const communityCards: CommunityCard[] = [
//   {
//     title: "データ解析×マーケティング活用｜因果推論で施策の真の効果を可視化",
//     description:
//       "「データ解析 マーケティング 活用」の領域では、MyStoryは売上予測、クーポン配布対象の最適化、効果検証といったニーズに対し、傾向スコアマッチングや回帰不連続デザインなどの因果推論手法を適用。これにより、単なる数値集計では見えない「施策がどれだけ成果に寄与したか」という本質的な問いに答えることができます。",
//   },
//   {
//     title:
//       "『Price Decisioning』で実現する戦略的価格設計｜データ分析・機械学習モデルの高度活用",
//     description:
//       "「データ分析 委託 統計」や「データ分析 機械学習 モデル」といったキーワードに関心を持つデータサイエンティストにとっても、MyStoryの「Price Decisioning」は注目に値します。このソリューションでは、経済学・消費者心理学の理論に基づき、単なる価格の最適化にとどまらず、消費者行動に即した戦略的価格設計が可能です。特に、ダイナミックプライシングやバンドリング、参照価格効果の活用といった応用分析は、専門家から見ても学びが深い分野です。",
//   },
//   {
//     title:
//       "データ分析委託費用を“投資”に変える｜短納期・高品質アウトプットのMyStoryの強み",
//     description:
//       "「データ分析 委託 費用」の観点から見ると、MyStoryは短納期対応や成果物のビジネス適用性（＝わかりやすいアウトプット）も評価されています。委託費用が単なる“コスト”ではなく、明確なリターンを生み出す“投資”として認識されるための設計が随所に施されています。",
//   },
// ];

// export default function Page() {
//   return (
//     <main className={styles.main}>
//       <ServicesHero
//         title="データ分析ソリューション"
//         subtitle="マーケティングPDCAの各シーンに対応した数多くのソリューションや、プライシングに特化した分析ソリューション『Price Decisioning』、生態学モデルを活用したマーケットシェア推定ソリューション『ダイナミックシェア』などを提供しています。"
//         imageUrl="/services_analytics_solution.jpg"
//       />
//       {/* <div className={styles.breadcrumb}>
//         <span>
//           <Link href="/">TOPページ</Link>
//         </span>{" "}
//         &gt; <span className={styles.current}>分析ソリューション</span>
//       </div> */}
//       <ServicesExample
//         sectionTitle="MyStoryの分析ソリューションの特徴"
//         features={[
//           {
//             icon: "/feature1.svg",
//             title: "マーケティングPDCAに対応",
//             description:
//               "マーケティング上のあらゆる課題に対応できる豊富なソリューションを取り揃えております。「売上の予測をしたい」、「精緻に効果検証をしたい」、「クーポンを配布するべき顧客を見極めたい」など、よくある課題に対するベストプラクティスを提供します。",
//           },
//           {
//             icon: "/feature2.svg",
//             title: "プライシングの専門性",
//             description:
//               "プライシングに関する数多くの案件実績を誇ります。単に最適な価格を分析から導出するだけでなく、経済学や消費者行動心理論の知見をもとにした実践的な価格戦略方法をお伝えします。",
//           },
//           {
//             icon: "/feature3.svg",
//             title: "技術力 × ビジネス力の両立",
//             description:
//               "統計や機械学習に関する技術的なベースをしっかりと備えつつ、豊富なビジネス経験をもとにした「ビジネスに寄与する」分析を提供できます。個々の企業が抱える課題をしっかりとヒアリングさせていただき、ベストなソリューションを提案させていただきます。",
//           },
//         ]}
//       />
//       <PDCAVisual
//         sectionTitle="データ分析委託を「マーケティングPDCA」の実行支援へ"
//         sectionDescription="MyStoryでは、Plan・Do・Check・Actの各フェーズに連動したデータ分析支援で、継続的に成果につながるマーケティング実行を後押しします。"
//         items={pdcaItems}
//       />
//       <div className={styles.buttonLink}>
//         <ButtonLink href="/data/analytics-data">
//           データ分析結果を見る
//         </ButtonLink>
//       </div>
//       <ServicesProduct
//         heading="ソリューション一覧"
//         description=""
//         items={[
//           {
//             subtitle: "ダイナミックシェア",
//             image: "/ダイナミックシェア.png",
//             contents: [
//               {
//                 icon: "/check-mark.svg",
//                 title: "競争のダイナミクスを捉えて、将来のシェアを予測する",
//                 description:
//                   "マーケットシェアを的確に予測するには、「時間の経過」と「競合の動き」を同時に捉える必要があります。しかし従来の時系列分析や定常モデルでは、こうした動的な変化を十分に扱うことができず、新商品や価格変更の影響を正しく評価するのが困難でした。ダイナミックシェアは、生態学モデルである「ロトカ・ヴォルテラ方程式」を応用することで、限られた市場の中でブランド同士がシェアを奪い合う構造（競争のダイナミクス）を数理的に再現。時間とともに変化する消費者の選好や競合施策の影響までを織り込んで、中長期的なシェアの推移を高精度に予測することができます。",
//               },
//               {
//                 icon: "/check-mark.svg",
//                 title: "新商品や価格変更の影響を定量的に評価できる",
//                 description:
//                   "本ソリューションでは、コンジョイント分析によりブランドや商品に対する消費者の効用構造（好み）を可視化したうえで、その選好データを数理モデルに反映します。これにより、「価格を10円上げた場合に、競合とのシェア差はどうなるか」「プロモーションの量を変えたら、どれだけの影響が出るか」などの問いに、シナリオ別で定量的なシミュレーションが可能になります。",
//               },
//             ],
//           },
//           {
//             subtitle: "Price Decisioning",
//             image: "/pricedecisioning.png",
//             contents: [
//               {
//                 icon: "/check-mark.svg",
//                 title: "利益を最大化する価格を明らかにできる",
//                 description:
//                   "価格戦略の理想は「いくらのときにどれだけ売れるか」を把握したうえで、売上や利益を最大化できる価格に設定することです。最適な価格は店舗や地域、消費者特性など各種条件によって異なりますし、ダイナミックプライシングやバンドリングなど応用的な価格分析を行う必要がある場面もあります。MyStoryはこれまで100件を超える価格分析を支援してきた実績がありますので、お客様企業の置かれた状況ごとに最適な価格分析方法をご提案します。",
//               },
//               {
//                 icon: "/check-mark.svg",
//                 title: "経済学や行動心理学の知見をもとにしたコンサルティング",
//                 description:
//                   "価格は絶対的なものではなく、参照点、つまり「この商品カテゴリーの価格はこれくらい」という値ごろ感に大きく左右されるということが研究からわかっています。絶対的なものではないからこそ、消費者の買いたい意欲を刺激する価格の提示方法や価格プランの設定方法、メッセージの送り方が重要となります。経済学や行動心理学に精通したアナリストが、消費者の心を動かす価格戦略方法をコンサルティングします。",
//               },
//             ],
//           },
//           {
//             subtitle: "MyStoryデータ分析ソリューション集",
//             image: "/analytics_solution.png",
//             contents: [
//               {
//                 icon: "/check-mark.svg",
//                 title: "幅広い分析手法に対応可能",
//                 description:
//                   "基本的なな機械学習モデルや、傾向スコアマッチング・回帰不連続デザインなどの因果推論手法、ベイズ推定、レイテイングアルゴリズム、レコメンデーション、計量経済学モデルなど、幅広い分析に対応可能です。",
//               },
//               {
//                 icon: "/check-mark.svg",
//                 title: "迅速な対応 & わかりやすいアウトプット",
//                 description:
//                   "お急ぎの場合、分析内容によっては短納期でのご納品も可能です。また、社内会議資料にもそのまま使えるような見やすい、且つわかりやすいアウトプット形式でご納品しますので、関係各所への分析結果の共有がしやすいです。",
//               },
//             ],
//           },
//         ]}
//       />
//       <CommunitySection
//         sectionTitle="データ分析の委託先選びにおける「分析ソリューション」の重要性"
//         sectionDescription="データ分析の委託を検討する企業にとって、「委託先がどのような分析ソリューションを持っているか」は、成功の鍵を握る要素の一つです。MyStoryが提供する分析ソリューションは、機械学習や因果推論といった高度な分析技術に基づきつつ、マーケティングPDCAの各フェーズに対応する実践的な提案力を強みとしています。「データ分析 委託 企業」として信頼できる要素はまさに、分析技術とビジネス知見の両立にあります。"
//         cards={communityCards}
//       />
//       <AndMoreSection
//         title="データ分析の委託をご検討中の方へ"
//         paragraphs={[
//           {
//             text: "データ分析を委託する際には、目的や課題に合った企業を選ぶことが重要です。MyStoryでは、マーケティング、スポーツ、ピープルアナリティクスなど幅広い分野での支援実績をもとに、各企業様のご要望に応じた分析サービスをご提供しています。「データ分析 委託 企業」や「データ分析 委託 費用」といった観点でお悩みの方にも、業界特性を踏まえた柔軟な対応が可能です。",
//           },
//           {
//             text: "統計分析から機械学習モデルの構築まで対応可能で、「データ分析 機械学習 手法」や「データ解析 マーケティング 活用」に関するご相談も多数お受けしています。また、経済学・消費者行動理論の専門知見を活かしたプライシング戦略や、定量・定性調査を組み合わせた分析設計など、多面的なサポートも行っております。MyStoryは、「使いやすく、ビジネスに役立つ分析」を目指し、分かりやすい成果物のご提供にも努めています。データ分析の外注をご検討の際は、お気軽にご相談ください。",
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
import Image from "next/image";
import {
  Hero,
  MainWithSidebar,
  SidebarNavCard,
  LeadBlock,
  ServiceImage,
  FeatureHighlights,
  RibbonTabs,
  ThreeFeatureCards,
  SectionTitle,
  ServiceMenuProcess,
  ServiceSection,
  AnalysisTable,
  FlowBlock,
  FooterNav,
} from "./components";
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

  // ========== リボン/カード ==========
  const ribbonCenter = "ビジネス課題の解決";
  const ribbonTabs = ["ノウハウの蓄積", "分析業務の最適化"];

  const featureCards = [
    {
      title: "分析からビジネスヒントを得る",
      bullets: [
        "顧客の特性や購買パターンなどを明確化",
        "売上低下やリピート率低下の要因を探る",
        "最も効果のある施策が何かを導き出す",
      ],
    },
    {
      title: "分析ノウハウの習得",
      bullets: [
        "分析ツールの使い方を習得",
        "分析結果データから読み解く力を得る",
        "最適な分析手法がわかる",
      ],
    },
    {
      title: "分析環境／リソース不足の解消",
      bullets: [
        "分散しているデータを統合し最適な分析環境を構築",
        "分析要員不足や作業負荷を軽減",
        "分析パートナーが見つかる",
      ],
    },
  ];

  // ========== ユーティリティ ==========
  const bullets = (a: string[]) => a.map((text) => ({ text }));

  return (
    <main className={styles.page}>
      <Hero
        image={{ src: "/data_analytics_consulting_hero.png", alt: "hero" }}
        title="受託分析 / データ分析コンサルティング"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="『統計学・機械学習』 × 『行動経済学・消費者行動理論・社会科学』の専門性の掛け合わせで「ビジネス成果」まで導く"
              body={[
                "データ分析をもとにビジネスを発展させるためには、正しい“洞察”から具体的な“アクション”へ繋ぐことが非常に重要です。MyStoryの「受託データ分析・データ分析コンサルティング」サービスは、統計解析・機械学習の高度な技術力に、行動経済学・消費者行動理論・社会科学の専門的知見を組み合わせることで、単なる分析結果の報告にとどまらず意思決定と施策実行まで伴走します。",
                "　",
                "コンサルティングやマーケティング業務の経験が豊富なメンバーも在籍しておりますので、クライアントの課題に応じて最適なチーム体制を組成し、プロダクト戦略や経営戦略から、価格戦略、需要予測、顧客維持・育成、コミュニケーション最適化まで、データをビジネス成果に直結させる分析をご提供します。",
              ]}
            />

            <ServiceImage
              src="/data_analytics_consulting_mystory_capability.png"
              alt="MyStoryのケイパビリティ"
            />

            <FeatureHighlights
              title="MyStoryのデータ分析サービスの特徴"
              items={[
                {
                  subtitle: "統計学・機械学習の確かな技術基盤",
                  lead: "欠損補完・外れ値対応などデータ前処理から、特徴量エンジニアリング、モデル作成、交差検証・汎化性能評価、SHAP等によるモデル解釈までを一気通貫で実施。ABテスト/効果検証まで設計することで、データ分析コンサルティングとして“正確さ”と“再現性”を担保し、意思決定に耐えるアウトプットを提供します。",
                  image: {
                    src: "/data_analytics_consulting_feature1.png",
                    alt: "統計・機械学習の技術基盤",
                  },
                },
                {
                  subtitle:
                    "行動経済学・消費者行動理論を統合した分析アプローチ/施策提言",
                  lead: "行動経済学や消費者行動理論の各種理論をもとに、仮説立案・実験デザイン・モデル作成を実施。分析結果から言えることに加え、消費者のクセや感情・認知特性を踏まえた制度設計・価格/プラン提示・コミュニケーション設計を提言できます。",
                  image: {
                    src: "/data_analytics_consulting_feature2.png",
                    alt: "行動経済学・消費者行動理論の統合",
                  },
                },
                {
                  subtitle: "本質を捉えるコンサル力で“分析をビジネスに繋ぐ”",
                  lead: "データサイエンティストは技術偏重でビジネス視点が薄い。—その課題を、コンサルティング/マーケティング経験豊富なメンバーが解決。課題定義→仮説→検証→実装の設計力により、「そもそも分析が必要か」「どこに着目すべきか」「分析結果から何をやるべきか」を明確化。KPIに紐づくアクションへ直結させ、意思決定会議での合意形成まで伴走します。",
                  image: {
                    src: "/data_analytics_consulting_feature3.png",
                    alt: "コンサルティングで成果に繋げる",
                  },
                },
                {
                  subtitle: "技術力×ビジネス力の掛け合わせ＋育成・内製化支援",
                  lead: "統計学・機械学習の専門性とビジネス設計力を掛け合わせ、“運用で勝てる”形へ落とし込み。ダッシュボードやテンプレート、運用ガイド、コードなどを整備し、レビュー/伴走トレーニングで自社で再現できるよう内製化。人材育成経験豊富なメンバーが、チームのスキル定着まで責任を持って支援します。",
                  image: {
                    src: "/data_analytics_consulting_feature4.png",
                    alt: "育成・内製化の支援",
                  },
                },
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">分析について相談する</ButtonLink>
            </div>

            <a id="menu" />
            <SectionTitle title="顧客分析／データ分析サービスメニュー一覧" />
            <ServiceMenuProcess
              eyebrow="【顧客データ分析プロセスとサービス一覧】"
              steps={["分析要件調査", "分析設計", "分析環境整備", "分析実施"]}
            />

            <RibbonTabs centerLabel={ribbonCenter} tabs={ribbonTabs} />

            <ThreeFeatureCards cards={featureCards} />

            <p className={styles.centerNote}>
              ビジネスを成長させるための “顧客データ活用” を支援します
            </p>

            {/* ===== 各サービス ===== */}
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
              ctaInline={{
                label: "分析サービス案内はこちら",
                href: "#contact",
              }}
            />

            <SectionTitle title="分析環境構築サービス" />
            <ServiceSection
              problemsTitle="このような課題を解決します"
              problems={bullets([
                "分析環境が整っていない",
                "分析ツールのDB接続設定がわからない",
              ])}
              overviewTitle="サービス概要"
              overview={[
                "※差し替え：CDP/DWHの構築と、分析ツールの接続設定を実施。",
                "技術に詳しくなくても、最適な分析環境を整備可能。",
                "【期間】3〜6ヶ月（例）／【システム構成】Google環境上に構築（例）",
              ]}
            />

            <SectionTitle title="オンサイト分析サービス（分析要員の提供）" />
            <ServiceSection
              problemsTitle="このような課題を解決します"
              problems={bullets([
                "全てを自社内で行いたいが要員が不足",
                "すぐに分析要員がほしい",
                "アウトソースが難しい領域がある",
              ])}
              overviewTitle="サービス概要"
              overview={[
                "※差し替え：データサイエンティスト/アナリストが出向し、設計〜作業を支援。",
              ]}
              subBlocks={[
                { label: "分析設計支援", meta: "【期間】2〜3ヶ月（例）" },
                {
                  label: "分析作業支援",
                  meta: "【期間】要望に応じ（2ヶ月〜 例）",
                },
              ]}
              benefitsTitle="オンサイト分析サービスのメリット"
              benefits={bullets([
                "リソース不足の解消",
                "必要時だけ依頼でき、採用/人件費を削減",
              ])}
              ctaInline={{
                label: "分析サービス案内はこちら",
                href: "#contact",
              }}
            />

            <SectionTitle title="顧客分析アウトソーシングサービス" />
            <ServiceSection
              problemsTitle="このような課題を解決します"
              problems={bullets([
                "環境や要員を自社で持てない",
                "顧客分析業務を外部委託したい",
              ])}
              overviewTitle="サービス概要"
              overview={[
                "※差し替え：顧客データを預かり分析を実施。定型顧客分析の月次提供も可能。",
                "【納期（顧客分析）】約1〜2ヶ月（例）／【納期（定型分析）】ご要望に応じて",
              ]}
            />

            <AnalysisTable
              header={["分析項目", "分析内容"]}
              rows={[
                ["顧客属性分析", "※差し替え：基本属性×セグメント集計。"],
                ["RFM分析", "※差し替え：R/F/M指標のランク化と各種集計。"],
                ["離反分析", "※差し替え：ランク変動・離反特性の可視化。"],
                ["購入間隔分析", "※差し替え：1→2→3回目の平均日数。"],
                ["購入経路分析", "※差し替え：チャネル/転換の傾向。"],
                ["バスケット分析", "※差し替え：同時購入のパターン抽出。"],
              ]}
            />

            <SectionTitle title="分析レポートイメージ" small />
            <div className={styles.imgFrame}>
              <Image
                src="/data_analytics_consulting_feature3.png"
                alt="report"
                width={800}
                height={400}
              />
            </div>

            <FlowBlock
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
            />

            <SectionTitle title="分析トレーニングサービス" />
            <ServiceSection
              problemsTitle="このような課題を解決します"
              problems={bullets([
                "ノウハウがない",
                "人材を教育したい",
                "将来は内製化したい",
              ])}
              overviewTitle="サービス概要"
              overview={["※差し替え：Tableau / R / 多変量解析 などWS形式。"]}
              ctaInline={{
                label: "分析サービス案内はこちら",
                href: "#contact",
              }}
            />
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
        blockTitle="CRMサービス"
        links={[
          { href: "#", label: "サービス一覧・特長・実績" },
          { href: "#", label: "課題・ケースから探す" },
          { href: "#", label: "CRM戦略検討・プランニング" },
          { href: "#", label: "RFP作成支援" },
          { href: "#", label: "名寄せ・データクレンジング" },
          { href: "#", label: "顧客データ分析サービス" },
          { href: "#", label: "システム上流設計・構築" },
        ]}
      />
    </main>
  );
}
