import styles from "./page.module.css";
import type { Metadata } from "next";
// import Image from "next/image";
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
  // FlowBlock,
  FooterNav,
  AnalyticsOutsourceSection,
} from "@/app/services/analytics/components";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const title = "受託分析 / データ利活用支援";
  const description =
    "統計学・機械学習と行動経済学・消費者行動理論・社会科学を掛け合わせたデータ分析を提供";
  const url = "https://www.b-mystory.com/services/analytics/consulting";

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

  // ========== ユーティリティ ==========
  const bullets = (a: string[]) => a.map((text) => ({ text }));

  return (
    <main className={styles.page}>
      <Hero
        image={{ src: "/data_analytics_consulting_hero.png", alt: "hero" }}
        title="受託分析 / データ利活用支援"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="『統計学・機械学習』 × 『行動経済学・消費者行動理論・社会科学』の専門性の掛け合わせで「ビジネス成果」まで導く"
              body={[
                "データ分析をもとにビジネスを発展させるためには、正しい“洞察”から具体的な“アクション”へ繋ぐことが非常に重要です。MyStoryの「受託データ分析・データ利活用支援」サービスは、統計解析・機械学習の高度な技術力に、行動経済学・消費者行動理論・社会科学の専門的知見を組み合わせることで、単なる分析結果の報告にとどまらず意思決定と施策実行まで伴走します。",
                "　",
                "コンサルティングやマーケティング業務の経験が豊富なメンバーも在籍しておりますので、クライアントの課題に応じて最適なチーム体制を組成し、プロダクト戦略や経営戦略から、価格戦略、需要予測、顧客維持・育成、コミュニケーション最適化まで、データをビジネス成果に直結させる分析をご提供します。",
              ]}
            />

            <ServiceImage
              src="/data_analytics_consulting_mystory_capability.png"
              alt="MyStoryのケイパビリティ"
            />

            <a id="sec-feature" />
            <FeatureHighlights
              title="MyStoryのデータ分析サービスの特徴"
              items={[
                {
                  subtitle: "統計学・機械学習の確かな技術基盤",
                  lead: "欠損補完・外れ値対応などデータ前処理から、特徴量エンジニアリング、モデル作成、交差検証・汎化性能評価、SHAP等によるモデル解釈まで、機械学習や統計解析の全フローを深い専門性をもとに正確に対応可能。ABテスト/効果検証の設計も精緻に行えるので、データ分析に必須の“正確さ”と結果の“再現性”を担保し、意思決定に耐えるアウトプットを提供します。",
                  image: {
                    src: "/data_analytics_consulting_feature1.png",
                    alt: "統計・機械学習の技術基盤",
                  },
                  links: [
                    // {
                    //   label: "MyStoryの“特徴量エンジニアリング”の特色はこちら",
                    //   href: "/cases/anomaly",
                    // },
                    {
                      label: "MyStoryの“データ前処理”の特色はこちら",
                      href: "https://www.b-mystory.com/column/wjqldgfs4o",
                    },
                    // {
                    //   label: "MyStoryの“モデル作成”の特色はこちら",
                    //   href: "/tech-stack",
                    // },
                    // {
                    //   label: "MyStoryの“モデル精度評価”の特色はこちら",
                    //   href: "/tech-stack",
                    // },
                    // {
                    //   label: "MyStoryの“効果検証”の特色はこちら",
                    //   href: "/tech-stack",
                    // },
                  ],
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
                  lead: "データサイエンティストは技術偏重でビジネス視点が薄い。—そんな“よくある課題”を、コンサルティング/マーケティング経験豊富なメンバーとのチーム体制でご支援することで解決。課題定義→仮説→検証→実装の設計力により、「そもそも分析が必要か」「どこに着目すべきか」「分析結果から何をやるべきか」を明確化。KPIに紐づくアクションへ直結させ、意思決定会議での合意形成まで伴走します。",
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

            <a id="sec-service" />
            <BubbleNavSection
              title="分析サービス一覧"
              lead="主に、以下4つの領域のご支援が可能です。 ※クリックすると該当サービスの説明箇所に遷移します"
              items={[
                { label: "データ整備・\n分析環境構築", href: "#sec-env" },
                {
                  label: "受託分析",
                  href: "#sec-outsourcing",
                },
                { label: "プロジェクト\n型支援", href: "#sec-project" },
                {
                  label: "分析人材育成・\n内製化支援",
                  href: "#sec-hr-dev",
                },
              ]}
            />

            {/* ===== 各サービス ===== */}
            <a id="sec-env" />
            <SectionTitle title="データ整備・分析環境構築" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・データ分析をビジネスに導入したいが、そもそもデータがない",
                "・データはたくさんあるものの、分析に使えるデータになっていない",
                "・手元にあるデータが欠損だらけで、どうすれば良いのかわからない",
                "・誰でも分析できる環境を構築したい",
              ])}
              overviewTitle="ご支援のイメージ"
              overview={[
                "・分析によって解決したいビジネス課題をヒアリングさせていただいた上で、今後“どんなデータ”を“どのように”蓄積していけば良いかをコンサルティング",
                "・データ間の関係性や特徴を把握し、欠損補完に関する専門知見をもとに分析に使えるデータに整備",
                "・分析用環境（CDP/DWHなど）の構築と、分析ツールとの接続設定を実施",
              ]}
            />

            <a id="sec-outsourcing" />
            <SectionTitle title="受託分析" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・顧客データ活用をしていきたいが、分析手法がわからない",
                "・データから有効な分析結果を導き出したい",
                "・データ分析業務を効率化したい",
                "・社内に分析に詳しい人がいない",
              ])}
              overviewTitle="ご支援のイメージ"
              overview={[
                "保有するデータをお預かりして、弊社にてデータ分析を行い、レポートもしくは集計表を納品します",
              ]}
              subEyebrow="アウトプットイメージ"
              subImage={{
                src: "/data_analytics_consulting_outsourcing.png",
                alt: "アウトプットイメージ",
              }}
              benefitsTitle="分析項目例"
              benefits={bullets([
                "貴社の課題をヒアリングさせていただき、課題解決のために最適な分析手法・アプローチを提案させていただきます。分析内容詳細や費用については気軽にお問い合わせください。",
              ])}
            />

            <AnalysisTable
              header={["分析項目", "分析内容"]}
              rows={[
                [
                  "時系列予測",
                  "過去の系列・季節性・イベント（休暇/販促）を特徴量化し、将来値を予測。予測値と実測値の差分で介入効果や異常を検知。",
                ],
                [
                  "確率分布を活用した各種推定",
                  "観測データの分布（正規・ガンマ・ポアソン等）を仮定し、最尤/ベイズで母数を推定。外れ値の扱いを含め、分布選択で不確実性を明示化。",
                ],
                [
                  "一次遅れ系モデル",
                  "直近の遅れ（1期遅れ）で現時点の応答を説明。説明変数（気温・価格・キャンペーン）を加え短期ダイナミクスを捉える。",
                ],
                [
                  "クラスタリング",
                  "顧客や商品を特徴量空間で自然分割（K-means/階層/混合モデル）。セグメント別に施策・価格・メッセージ最適化を実施。",
                ],
                [
                  "指標開発",
                  "事業KPIに直結する複合指標（例：健全度スコア、エンゲージメント指数）を設計。寄与度検証や相関/因果の観点で妥当性を確認。",
                ],
                [
                  "需要曲線の推定",
                  "価格と数量の関係をモデル化し弾力性を算出。品目/チャネル別に異質性を考慮し、売上・利益を最大化する価格帯を把握。",
                ],
                [
                  "プライシング（最適価格の算出）",
                  "推定した需要曲線＋コスト/在庫/競合制約を用い、利益最大化・シェア最大化等の目的で価格を最適化。プラン/束ね方の最適化にも展開。",
                ],
                [
                  "需要予測",
                  "時系列×因果特徴（販促/在庫/外部市場）でSKU〜カテゴリの将来需要を予測。欠品/過剰の抑制と発注・生産の平準化に活用。",
                ],
                [
                  "トピックモデル",
                  "テキスト（レビュー/問い合わせ）から潜在テーマを抽出（LDA/BERT系）。顧客の不満・要望を可視化し、改善領域の優先度付け。",
                ],
                [
                  "動的個人モデル",
                  "個客の状態遷移（購買/解約/休眠）を時系列で推定。接触・価格・UI変更が将来行動に与える影響を個別に推定。",
                ],
                [
                  "統計的因果推論",
                  "介入の平均/条件付き処置効果を推定（傾向スコア、差分の差分、マッチング、IV等）。A/Bテストが難しい場面でも施策効果を識別。",
                ],
                [
                  "反実仮想機械学習",
                  "「誰に効くか」を学習し、個別最適配布を実現。施策と相性の良いセグメントを特定し、配布効率とROIを改善。",
                ],
                [
                  "レコメンドモデル",
                  "協調フィルタリング/内容ベースフィルタリング/ハイブリッドモデルで「次に買う/見る」商品を推薦。コールドスタート対策に属性・テキスト埋め込みを活用。",
                ],
                [
                  "レイティングモデル",
                  "評価値の生成過程を分解（潜在要因/バイアス補正）し、スコアのばらつきや信頼度を推定。改善余地の大きい要素を特定。",
                ],
                [
                  "ベイズ推定",
                  "事前分布で知見を取り込み、階層化でセグメント差・小標本の不安定さを緩和。事後分布で不確実性を可視化して意思決定。",
                ],
                [
                  "生存時間分析",
                  "解約・休眠までの時間をモデル化（カプラン–マイヤー、Coxハザードモデル、AFTなど）。施策や属性が離反ハザードに与える影響を推定。",
                ],
                [
                  "マーケティングミックスモデル（MMM）",
                  "各チャネル投下が売上に与える貢献を分解。飽和・減衰・遅延を考慮し、最適配分と予算弾力性を算出。",
                ],
                [
                  "項目反応理論（IRT）",
                  "調査・テストの設問難易度/識別力を推定し、真の潜在特性（満足・リテラシー等）をバイアス少なく測定。",
                ],
                [
                  "微分方程式モデル",
                  "需要/感染/拡散等の連続ダイナミクスを記述。パラメータ推定で制御変数（価格/広告）の最適操作を検討。",
                ],
                [
                  "回帰モデル（ロジット/プロビット/トービット/ヘーキット）",
                  "二値選択/打切り/切断データなどを扱う一般化回帰で意思決定や支出を推定。限界効果で解釈性を確保し、施策の方向性に直結。",
                ],
                [
                  "Surrogate Index",
                  "高次元の特徴を代理指標に圧縮し、政策/施策の長期効果の推定を短期で実行。観測できない真の指標の近似として運用。",
                ],
              ]}
            />

            <a id="sec-project" />
            <SectionTitle title="プロジェクト型支援" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・社内の分析人材が不足している",
                "・分析人材がすぐに必要だが、良い人が採用できない",
                "・社外には出せないデータがあり、分析の外部委託は難しい",
              ])}
              overviewTitle="ご支援のイメージ"
              overview={[
                "弊社所属のデータサイエンティスト・データアナリスト・エンジニアが貴社に出向いて、分析作業の支援をします。業務範囲や役割、期間は目的や内容に応じて相談可能なので、貴社の分析人員リソース不足を解消することができます。",
              ]}
              subBlocks={[
                { label: "分析設計支援", meta: "【期間】1〜3ヶ月（例）" },
                {
                  label: "分析作業支援",
                  meta: "【期間】要望に応じて決定",
                },
              ]}
              benefitsTitle="プロジェクト型支援サービス利用のメリット"
              benefits={bullets([
                "・今すぐ分析人材のリソース不足を解消できる",
                "・必要な時にだけ依頼でき、恒常的な採用/人件費を削減できる",
                "・即戦力の分析人材を活用できる",
              ])}
            />

            <a id="sec-hr-dev" />
            <SectionTitle title="分析人材育成・内製化支援" />
            <ServiceSection
              problemsTitle="こんな課題はありませんか？"
              problems={bullets([
                "・自社内に分析のプロフェッショナルを育成したい",
                "・社内に分析ノウハウがない",
                "・現在外部に委託している分析業務を将来的に内製化したい",
              ])}
              overviewTitle="ご支援のイメージ"
              overview={[
                "ご要望とご予算をヒアリングさせていただき、短期集中の研修形式、中長期のプロジェクト型の育成プログラムなど、状況に合った最適な人材育成プランを提案させていただきます。",
              ]}
              subEyebrow="内製化のイメージ"
              subImage={{
                src: "/data_analytics_consulting_hr-dev.png",
                alt: "内製化のイメージ",
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
        blockTitle="受託分析/データ利活用支援"
        links={[
          { href: "#sec-feature", label: "MyStoryのデータ分析サービスの特徴" },
          { href: "#sec-service", label: "分析サービス一覧" },
          { href: "#sec-env", label: "データ整備・分析環境構築" },
          { href: "#sec-outsourcing", label: "受託分析" },
          { href: "#sec-project", label: "プロジェクト型支援" },
          { href: "#sec-hr-dev", label: "分析人材育成・内製化支援" },
          { href: "#sec-outsource", label: "委託・外注を検討中の方へ" },
        ]}
      />
    </main>
  );
}
