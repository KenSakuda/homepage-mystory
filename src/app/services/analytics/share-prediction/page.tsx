import type { Metadata } from "next";
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

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const title = "マーケットシェア推定サービス | MyStory";
  const description =
    "マーケットシェアの推移を“動的”に予測。「時間×競争」の概念を組み込んだ生態学モデルをもとに、新商品上市時・価格変更時も精緻なシェア予測を可能に";
  const url = "https://www.b-mystory.com/services/analytics/share-prediction";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: "/data_analytics_share-prediction_hero.png" }],
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
                  links: [
                    {
                      label:
                        "【コラム】マーケットシェア推定の新潮流～市場の競争を「動き」で捉える数理モデル～ はこちら",
                      href: "https://www.b-mystory.com/column/8w1qkf_b-ml",
                    },
                  ],
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

            <a id="sec-use-image" />
            <SectionTitle title="分析結果の活用イメージ" />
            <ServiceSection
              overviewTitle="概要"
              overview={[
                "『ダイナミックシェア』は、価格改定・広告強化などの施策を入力すると、その中長期のシェア推移をシミュレーションできます。分析結果は商品戦略や投資判断に直結し、さらに値上げ／広告／競合施策それぞれが将来シェアに与える寄与度を分解して可視化。どのレバーをどの順で打つべきかを、定量的に判断できます。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "中長期シェアのシミュレーション結果",
                "消費者の全体効用と属性別効用",
              ])}
              subEyebrow="活用シーン"
              subImage={{
                src: "/data_analytics_share-prediction_活用イメージ.png",
                alt: "ダイナミックシェアの活用イメージ",
              }}
            />

            <a id="sec-outsource" />
            <AnalyticsOutsourceSection
              title="データ分析の委託・外注を検討中の方へ"
              leads={[
                "マーケットシェアの予測は、単なる時系列モデルの外挿では精度に限界があります。MyStoryの『ダイナミックシェア』は、生態学モデルで“競争×時間”の相互作用を捉え、現実市場で起きる選好変化・広告減衰・競合の介入などを織り込んでシェア推定を行います。",
                "　",
                "さらにコンジョイント分析と結合することで、既存商品のみならず新商品の投入や価格改定時のシェアを予測可能。「データ分析 シェア推定／シェア予測／マーケットシェア予測」の実務に直結する精緻なシミュレーション結果を、意思決定へそのまま活用できます。",
              ]}
              reasonsTitle="『ダイナミックシェア』が選ばれる理由"
              reasons={[
                {
                  term: "競争×時間軸のモデル",
                  desc: "ロトカ・ヴォルテラをベースに、競合関係・広告減衰・季節性などの時間変化をモデル化。従来の定常モデルでは難しかった“介入後のシェア推移”を高精度に推定します",
                },
                {
                  term: "新商品にも対応",
                  desc: "コンジョイント分析で消費者の効用を推定し、価格・機能・デザイン変更がシェアに与える影響を定量化。「データ分析 需要予測」の観点で新商品のシェア予測も可能です",
                },
                {
                  term: "小規模データでも可",
                  desc: "数千件規模のアンケートや数カ月の販売データから開始し、段階的に精度を高める運用が可能。まずは小さく試し、精度検証後に拡張展開できます",
                },
                {
                  term: "意思決定に直結",
                  desc: "投資判断や差別化要因の特定、プライシングの中長期影響評価を可視化。上申・合意形成まで一気通貫で支援します",
                },
              ]}
              costTitle="委託費用の目安と進め方"
              costBodies={[
                "委託費用は、①課題の複雑性、②データ量と前処理難度、③コンジョイント分析の実施有無（POSデータから効用を推定可能な場合は実施不要）、④成果物（レポート有無／ダッシュボード化／API連携など）、⑤期間と体制によって変動します。 コンジョイント分析を実施し報告書まで作成して納品する通常の分析においては約200~300万円程度の想定ですが、仕様やデータ内容によって大幅に異なるので、気になる方はお問い合わせください。",
                "　",
                "標準フローは【ヒアリング・データ提供（1–2日）→分析設計（約5日）→モデル構築（約7日）→シミュレーション（約2日）→レポート作成・ご報告（約10日）】。要望に応じてBIツール連携でシェア推定結果の自動更新にも対応します。",
              ]}
              faqTitle="よくあるご相談"
              faqs={[
                {
                  q: "シェア推定の精度はどの程度ですか？",
                  a: "→ 業界差はありますが、「コンジョイント分析による効用推定」＋「ロトカ・ヴォルテラモデルでの競争×時間の反映」により、既存手法比でモデル精度が20〜40%改善した事例があります。実売データでのバックテストも実施可能です",
                },
                {
                  q: "どの業界・カテゴリに向いていますか？",
                  a: "→ 奪い合い”の構造が明確なカテゴリ（清涼飲料、日用品、既存SaaSなど）で特に効果的です。新市場・成長市場（置換・代替が進む領域）では精度が下がる可能性がありますが、前提の置き方により精度を担保します",
                },
                {
                  q: "必要なデータは何ですか？",
                  a: "→ ①顧客選好データ（コンジョイント分析の回答結果 or 購買ログからの効用推定）、②シェア推移データ（週次／月次の販売・価格・販促・流通等）。部分的に欠損しているデータでも分析を行えるようにデータの前処理・補完を支援します",
                },
                {
                  q: "小規模データでも始められますか？",
                  a: "→ はい、コンジョイント分析による効用の推定は、階層ベイズ法や混合ロジットモデルを用いれば、数十件のアンケートや、12〜24期間分の販売データがあれば、モデル構築と予測は十分可能です。当然、サンプル数や期間が増えることでより精度の高い予測とシナリオ分析が可能ですが、小規模からでも始められ必要に応じて分析精度を段階的に高められます",
                },
              ]}
            />

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
          { href: "#sec-use-image", label: "活用イメージ" },
          { href: "#sec-outsource", label: "委託・外注を検討中の方へ" },
        ]}
      />
    </main>
  );
}
