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
