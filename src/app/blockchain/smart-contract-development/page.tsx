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
  const title = "スマートコントラクト受託開発・監査";
  const description =
    "スマートコントラクトを外注したい企業向け。NFT/DeFi/DAOの設計・開発・テスト・監査観点まで一気通貫で支援。要件定義から運用まで“破綻しない実装”を提供します。";
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
    { href: "/blockchain/membership-nft", label: "会員証NFT・チケットNFT開発" },
    { href: "/blockchain/token-points", label: "トークン・ポイント制度構築" },
    { href: "/blockchain/dao", label: "DAO・コミュニティ基盤構築" },
    {
      href: "/blockchain/smart-contract",
      label: "スマートコントラクト受託開発",
    },
  ];

  const bullets = (a: string[]) => a.map((text) => ({ text }));

  return (
    <main className={styles.page}>
      <Hero
        image={{
          src: "/blockchain_hero.png",
          alt: "スマートコントラクト受託開発・監査のイメージ",
        }}
        title="スマートコントラクト受託開発・監査サービス"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="NFT/DeFi/DAOの中核を“安全に”つくる。要件定義からテスト・監査観点まで一体のスマートコントラクト開発"
              body={[
                "スマートコントラクトは、仕様の曖昧さやテスト不足が、そのまま資金・信用のリスクにつながる領域です。「とりあえず作る」ではなく、権限設計、例外時の挙動、アップグレード方針、監視・運用まで含めた設計が必要になります。",
                "　",
                "MyStoryでは、NFT（発行/譲渡/特典）、DeFi（入出金/金利/担保/手数料）、DAO（投票/委任/予算配分）などのユースケースに合わせて、仕様策定→実装→テスト→デプロイ→運用設計までを一気通貫で支援します。企業担当者が発注しやすい形で、要件の言語化から伴走し、破綻しないスマートコントラクトを提供します。",
              ]}
            />

            <a id="sec-feature" />
            <FeatureHighlights
              title="スマートコントラクト受託開発の特徴"
              items={[
                {
                  subtitle: "仕様の言語化（要件定義）から一緒に",
                  lead: "発注側が困るのは「何を決めればよいかが分からない」ことです。権限、譲渡、上限、手数料、例外、管理者操作、アップグレードなど論点を整理し、仕様書に落とし込んだうえで実装します。後工程での手戻りを減らし、品質を担保します。",
                  image: {
                    src: "/noimage.jpg",
                    alt: "要件定義と仕様策定",
                  },
                },
                {
                  subtitle: "テストと監査観点（安全性）を最初から組み込む",
                  lead: "単体テスト・統合テスト・シナリオテストを前提に、攻撃パターンや権限逸脱などのリスクを想定して実装します。監査対応が必要な場合は、監査観点のドキュメント整備や修正対応まで含めて支援します。",
                  image: {
                    src: "/noimage.jpg",
                    alt: "テストと監査観点の実装",
                  },
                },
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">開発について相談する</ButtonLink>
            </div>

            <a id="sec-use-image" />
            <SectionTitle title="開発・導入のイメージ" />
            <ServiceSection
              overviewTitle="概要"
              overview={[
                "スマートコントラクト開発は、①要件定義（仕様の言語化）→②設計（権限/例外/アップグレード）→③実装→④テスト→⑤デプロイ→⑥運用設計（監視/アラート/権限運用）の順で進めます。NFT/DeFi/DAOいずれも、運用の論点を先に固めることが品質の鍵です。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "仕様書（権限/状態遷移/例外/手数料/上限など）",
                "スマートコントラクト実装・テストコード・デプロイ手順",
                "運用ガイド（権限運用、監視、緊急時対応）",
              ])}
              subEyebrow="活用シーン"
              subImage={{
                src: "/noimage.jpg",
                alt: "スマートコントラクト開発の活用イメージ",
              }}
            />

            <a id="sec-outsource" />
            <AnalyticsOutsourceSection
              title="スマートコントラクト開発の外部パートナーをお探しの方へ"
              leads={[
                "スマートコントラクトは、品質の失敗が致命傷になりやすい領域です。MyStoryでは、要件定義・テスト・運用まで含めた“現実に耐える実装”を提供します。",
                "　",
                "NFT/DeFi/DAOなど個別テーマが決まっていない段階でも、「Web3新規事業として何ができるか」から整理し、最短で価値が出る形へ落とし込みます。",
              ]}
              reasonsTitle="MyStoryが選ばれる理由"
              reasons={[
                {
                  term: "要件定義から伴走",
                  desc: "発注者が決めづらい論点を整理し、仕様書に落とし込んでから実装します。手戻りを減らします。",
                },
                {
                  term: "テスト前提の開発",
                  desc: "単体・統合・シナリオテストを前提に、壊れにくい実装へ。監査対応も見据えます。",
                },
                {
                  term: "運用設計まで含める",
                  desc: "権限運用、監視、緊急時対応など、ローンチ後に必要な運用を先に設計します。",
                },
                {
                  term: "テーマ未確定でもOK",
                  desc: "NFT/DeFi/DAOのどれを選ぶべきかから相談可能。事業要件から最短ルートを提案します。",
                },
              ]}
              costTitle="委託費用の目安と進め方"
              costBodies={[
                "費用は、①仕様の複雑性、②監査要件、③フロント/管理画面の要否、④既存システム連携、⑤運用設計の範囲によって変動します。まずは要件定義フェーズで論点を整理し、段階的に開発範囲を確定する進め方が安全です。",
                "　",
                "標準フローは【ヒアリング→要件定義→設計→開発→テスト→ローンチ→運用】。必要に応じて監査対応も含めて進行します。",
              ]}
              faqTitle="よくあるご相談"
              faqs={[
                {
                  q: "NFT/DeFi/DAOのどれをやるべきか決まっていません",
                  a: "→ 目的（収益化/継続率/提携/資金効率化）と制約（法務/運用/UX）を整理し、最短で価値が出るテーマへ落とし込みます。",
                },
                {
                  q: "監査は必須ですか？",
                  a: "→ 取り扱う資金や影響範囲により判断します。まずはリスク評価を行い、必要な対策（テスト強化・設計変更・監査）を整理します。",
                },
                {
                  q: "既存アプリや会員DBと連携できますか？",
                  a: "→ 可能です。段階導入を前提に、既存システムと共存できる形で設計します。",
                },
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">開発について相談する</ButtonLink>
            </div>
          </>
        }
        sidebar={
          <SidebarNavCard title="ブロックチェーン事業" items={sidebarLinks} />
        }
      />

      <FooterNav
        blockTitle="スマートコントラクト受託開発・監査"
        links={[
          { href: "#sec-feature", label: "特徴" },
          { href: "#sec-use-image", label: "開発イメージ" },
          { href: "#sec-outsource", label: "委託・外注を検討中の方へ" },
        ]}
      />
    </main>
  );
}
