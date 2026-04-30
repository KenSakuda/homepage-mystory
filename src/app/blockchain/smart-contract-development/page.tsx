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
  const title = "スマートコントラクト受託開発（外注・委託）";
  const description =
    "スマートコントラクト（Solidity等）の受託開発。要件定義、テスト、監査対応、運用設計まで一気通貫で支援。NFT/トークン/決済/権限管理などに対応します。";
  const url = "https://www.b-mystory.com/blockchain/smart-contract-development";

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
          alt: "スマートコントラクト受託開発のイメージ",
        }}
        title="スマートコントラクトを“事故らない仕様”で受託開発"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="仕様化・テスト・監査対応まで。スマートコントラクト開発を外注したい方へ"
              body={[
                "スマートコントラクトは、一度デプロイすると改修が難しく、バグが直接的な損失や信用毀損につながります。そのため「実装」よりも前に、仕様の曖昧さを潰し、テスト戦略と運用を含めて設計することが重要です。",
                "　",
                "MyStoryは、要件定義→仕様化→実装→テスト→監査対応→運用設計まで一気通貫で支援します。NFT/トークン/権限管理/決済・ポイントなど、ビジネス要件に合わせて最適な構成を提案します。",
              ]}
            />

            <a id="sec-feature" />
            <FeatureHighlights
              title="スマートコントラクト受託開発の特徴"
              items={[
                {
                  subtitle: "要件を“仕様”に落とし込む",
                  lead: "権限、例外処理、アップグレード方針、イベントログ、運用フローを含めて仕様化します。",
                  image: {
                    src: "/blockchain_smart_contract_feature1.png",
                    alt: "要件定義と仕様化のイメージ",
                  },
                },
                {
                  subtitle: "テストと監査対応を前提に実装",
                  lead: "テスト設計、脆弱性観点、監査で見られる論点を前提に実装・ドキュメント化します。",
                  image: {
                    src: "/blockchain_smart_contract_feature2.png",
                    alt: "テストと監査対応のイメージ",
                  },
                },
                {
                  subtitle: "運用設計（鍵管理・権限・監視）まで含める",
                  lead: "マルチシグ、権限分離、アラート指標など、運用事故を防ぐ設計まで整備します。",
                  image: {
                    src: "/blockchain_smart_contract_feature3.png",
                    alt: "運用設計のイメージ",
                  },
                },
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">相談する</ButtonLink>
            </div>

            <a id="sec-modules" />
            <SectionTitle title="対応範囲" />
            <ServiceSection
              overviewTitle="概要"
              overview={[
                "NFT発行、トークン設計、ポイント/権限、DAO投票、決済など、ビジネス要件に応じて実装します。必要に応じてバックエンド/APIやフロントの連携も支援可能です。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "要件定義・仕様書（権限/例外/運用含む）",
                "スマートコントラクト実装（テストコード含む）",
                "デプロイ手順・運用手順（鍵管理/監視）",
                "監査対応用ドキュメント（必要に応じて）",
              ])}
              subEyebrow="実装イメージ"
              subImage={{
                src: "/blockchain_smart_contract_modules.png",
                alt: "スマートコントラクト開発の範囲",
              }}
            />

            <a id="sec-outsource" />
            <AnalyticsOutsourceSection
              title="スマートコントラクト開発を委託（外注）したい方へ"
              leads={[
                "スマートコントラクトは“動けばOK”ではありません。仕様の曖昧さ、例外処理、権限設計、運用設計が抜けると、後から取り返しがつかない問題になります。",
                "　",
                "MyStoryは、仕様化とテストを重視し、監査対応や運用まで含めて安全にリリースできる形へ落とし込みます。",
              ]}
              reasonsTitle="MyStoryが選ばれる理由"
              reasons={[
                {
                  term: "仕様化が強い",
                  desc: "ビジネス要件を安全な仕様に落とします。",
                },
                {
                  term: "テスト重視",
                  desc: "テスト戦略を前提に実装し品質を担保します。",
                },
                {
                  term: "運用設計まで",
                  desc: "鍵管理・権限・監視まで含めて事故を防ぎます。",
                },
                {
                  term: "周辺連携も対応",
                  desc: "API/アプリ/CRM連携まで含めて相談可能です。",
                },
              ]}
              costTitle="委託費用の目安と進め方"
              costBodies={[
                "費用は、仕様の複雑性、機能数、監査対応の有無、連携範囲で変動します。まずは要件を整理し、最小構成での検証→本番の段階計画を提案します。",
              ]}
              faqTitle="よくあるご相談"
              faqs={[
                {
                  q: "監査（Audit）は必須ですか？",
                  a: "→ リスクと規模によります。監査前提の実装・ドキュメント整備は可能です。",
                },
                {
                  q: "既存コントラクトの改修や保守は？",
                  a: "→ 状況を確認し、アップグレード方針を含めて提案します。",
                },
                {
                  q: "NFTやポイント制度のコントラクトも依頼できますか？",
                  a: "→ 可能です。ビジネス要件と合わせて設計します。",
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
        blockTitle="スマートコントラクト受託開発"
        links={[
          { href: "#sec-feature", label: "特徴" },
          { href: "#sec-modules", label: "対応範囲" },
          { href: "#sec-outsource", label: "委託・外注を検討中の方へ" },
        ]}
      />
    </main>
  );
}
