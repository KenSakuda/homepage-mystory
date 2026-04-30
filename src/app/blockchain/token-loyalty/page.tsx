import type { Metadata } from "next";
import styles from "@/app/blockchain/page.module.css";
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
} from "@/app/analytics/components";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const title = "トークンでポイント制度・ロイヤルティプログラム構築";
  const description =
    "トークンを活用したポイント制度/ロイヤルティプログラムを設計・実装。付与・利用・失効・不正対策・運用ルールまで、現場で回る形に落とし込みます。";
  const url = "https://www.b-mystory.com/blockchain/token-loyalty";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: "/blockchain_hero.png" }],
    },
    robots: { index: true, follow: true },
  };
}

export default function Page() {
  const sidebarLinks = [
    {
      href: "/blockchain/membership-nft",
      label: "会員証NFT・デジタル会員権 開発",
    },
    {
      href: "/blockchain/token-loyalty",
      label: "トークンでポイント制度・ロイヤルティ構築",
    },
    {
      href: "/blockchain/smart-contract-development",
      label: "スマートコントラクト受託開発",
    },
    {
      href: "/blockchain/dao-governance",
      label: "DAO/コミュニティ運営基盤 構築",
    },
  ];

  const bullets = (a: string[]) => a.map((text) => ({ text }));

  return (
    <main className={styles.page}>
      <Hero
        image={{
          src: "/blockchain_hero.png",
          alt: "トークンを活用したポイント制度の構築イメージ",
        }}
        title="トークンでポイント制度を“運用できる仕組み”へ"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="付与・利用・失効・不正対策まで。トークンでロイヤルティを設計・実装"
              body={[
                "ポイント制度をトークン化すると、会員体験や提携拡張の可能性が広がる一方、制度設計を誤ると「使われない」「不正が増える」「会計・運用が回らない」といった問題が起きます。",
                "　",
                "MyStoryは、トークン/ポイントのルール設計（付与・利用・失効・上限・ランク）から、スマートコントラクト開発、アプリ/CRM連携、運用監視まで一気通貫で支援します。Web3新規事業としての企画相談からも対応可能です。",
              ]}
            />

            <a id="sec-feature" />
            <FeatureHighlights
              title="トークン型ポイント制度の特徴"
              items={[
                {
                  subtitle: "制度設計から入る（作る前に“回る形”にする）",
                  lead: "付与原資、失効ルール、会計/運用、KPIを定義し、現場が運用できる制度にします。キャンペーン乱発で価値が毀損しない設計も含めます。",
                  image: {
                    src: "/blockchain_token_loyalty_feature1.png",
                    alt: "ポイント制度設計のイメージ",
                  },
                },
                {
                  subtitle: "不正・濫用の対策まで含めた実装",
                  lead: "多重アカウント、転売、ボットなどのリスクを想定し、権限/制限/監視指標を設計します。",
                  image: {
                    src: "/blockchain_token_loyalty_feature2.png",
                    alt: "不正対策と監視のイメージ",
                  },
                },
                {
                  subtitle: "CRM/アプリ連携と運用ダッシュボード",
                  lead: "会員ID、購買・行動データと連携し、付与・利用状況や施策効果を見える化。改善サイクルを回せるようにします。",
                  image: {
                    src: "/blockchain_token_loyalty_feature3.png",
                    alt: "CRM連携のイメージ",
                  },
                },
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">相談する</ButtonLink>
            </div>

            <a id="sec-modules" />
            <SectionTitle title="提供モジュール" />
            <ServiceSection
              overviewTitle="概要"
              overview={[
                "ポイント/トークンを“発行する”だけでなく、制度を運用し、施策を改善できる基盤として実装します。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "制度設計（付与・利用・失効・上限・ランク・原資）",
                "スマートコントラクト実装（発行/バーン/権限など）",
                "アプリ/CRM連携（付与・利用API、会員ID紐付け）",
                "運用監視（不正検知・アラート指標）",
              ])}
              subEyebrow="実装イメージ"
              subImage={{
                src: "/blockchain_token_loyalty_modules.png",
                alt: "トークンポイント制度の実装イメージ",
              }}
            />

            <a id="sec-outsource" />
            <AnalyticsOutsourceSection
              title="トークンでポイント制度を作りたい企業担当者の方へ"
              leads={[
                "トークン活用は手段であり、目的はロイヤルティ向上や継続利用の促進です。制度設計・運用・不正対策まで含めて設計しないと、導入後に手戻りが発生します。",
                "　",
                "MyStoryは、企画相談→制度設計→実装→運用改善まで一気通貫で支援します。既存ポイント制度の移行/拡張にも対応できます。",
              ]}
              reasonsTitle="MyStoryが選ばれる理由"
              reasons={[
                {
                  term: "制度設計ができる",
                  desc: "“技術導入”ではなく、制度として回る形に落とし込みます。",
                },
                {
                  term: "不正対策まで含める",
                  desc: "導入後のトラブルを想定し、制限と監視を設計します。",
                },
                {
                  term: "CRM/アプリ連携",
                  desc: "既存データ基盤と統合し、施策改善につなげます。",
                },
                {
                  term: "分析・効果検証",
                  desc: "利用率・継続率・LTVなどKPI設計と改善まで伴走できます。",
                },
              ]}
              costTitle="委託費用の目安と進め方"
              costBodies={[
                "費用は、制度の複雑性、連携範囲、セキュリティ要件、運用監視の要否で変動します。",
                "　",
                "標準フローは【企画整理→制度設計→実装→テスト→リリース→改善】。段階的に拡張可能です。",
              ]}
              faqTitle="よくあるご相談"
              faqs={[
                {
                  q: "既存ポイント制度を置き換えられますか？",
                  a: "→ 可能です。段階移行や一部機能からの拡張も含めて設計します。",
                },
                {
                  q: "提携先にポイントを広げたい",
                  a: "→ 可能です。権限設計、精算、運用ルールを前提に設計します。",
                },
                {
                  q: "Web3新規事業として相談したい",
                  a: "→ 企画段階から対応可能です。MVP設計から進められます。",
                },
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">相談する</ButtonLink>
            </div>
          </>
        }
        sidebar={
          <SidebarNavCard title="ブロックチェーン事業" items={sidebarLinks} />
        }
      />

      <FooterNav
        blockTitle="トークンでポイント制度・ロイヤルティ構築"
        links={[
          { href: "#sec-feature", label: "特徴" },
          { href: "#sec-modules", label: "提供モジュール" },
          { href: "#sec-outsource", label: "委託・外注を検討中の方へ" },
        ]}
      />
    </main>
  );
}
