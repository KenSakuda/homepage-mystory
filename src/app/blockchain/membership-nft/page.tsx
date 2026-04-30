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
  const title = "会員証NFT・デジタル会員権 開発";
  const description =
    "会員証NFT / デジタル会員権 / チケットNFTを、CRM・会員DBと連携して“運用できる形”で構築。発行、特典付与、認証、二次流通設計まで一気通貫で支援します。";
  const url = "https://www.b-mystory.com/blockchain/membership-nft";

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
          alt: "会員証NFT・デジタル会員権の開発イメージ",
        }}
        title="会員証NFT・デジタル会員権を“使える仕組み”として実装"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="会員証NFTを、CRM/会員DBと連携して“日常運用できる”会員体験へ"
              body={[
                "会員証NFT（デジタル会員権）は、単にNFTを発行するだけでは価値になりません。重要なのは「誰に付与し、どの特典を、どのタイミングで、どう認証し、どう継続利用させるか」を既存の会員基盤・CRM施策の中に組み込むことです。",
                "　",
                "MyStoryは、スマートコントラクトの設計・実装に加え、会員IDとの紐付け、特典付与・ランク設計、認証フロー、二次流通（転売）方針、運用ダッシュボードまで含めて“運用可能な会員証NFT”を構築します。マーケティング施策の設計や効果検証まで併走できることが強みです。",
              ]}
            />

            <a id="sec-feature" />
            <FeatureHighlights
              title="会員証NFT開発の特徴"
              items={[
                {
                  subtitle: "会員DB/CRMと連携して運用できる",
                  lead: "NFT発行で終わらせず、既存の会員ID・購買/行動データと連携。会員ランク、特典付与、参加条件、失効・更新など、日常運用のルールを設計します。",
                  image: {
                    src: "/blockchain_membership_nft_feature1.png",
                    alt: "会員基盤とNFTの連携イメージ",
                  },
                },
                {
                  subtitle: "特典・認証・権限をスマートコントラクトで担保",
                  lead: "イベント参加、限定コンテンツ閲覧、優先購入などの権限をオンチェーン/オフチェーンの最適構成で実装。認証UX（ウォレットなし導線含む）も設計します。",
                  image: {
                    src: "/blockchain_membership_nft_feature2.png",
                    alt: "特典付与と認証フローのイメージ",
                  },
                },
                {
                  subtitle: "二次流通ポリシーまで含めた設計",
                  lead: "転売を許可する/しない、ロイヤリティ設定、譲渡条件、KYCの有無など、ブランド毀損と収益性の両面から設計します。",
                  image: {
                    src: "/blockchain_membership_nft_feature3.png",
                    alt: "二次流通設計のイメージ",
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
              overviewTitle="モジュール例"
              overview={[
                "会員証NFTの導入目的（LTV向上、ファン化、転売対策、認証強化など）と運用制約を整理し、要件を“実装できる仕様”に落とし込みます。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "要件定義（特典/権限/認証/運用フロー）",
                "スマートコントラクト実装（発行・更新・譲渡条件など）",
                "会員DB/CRM連携（ID紐付け、特典付与APIなど）",
              ])}
              subEyebrow="実装イメージ"
              subImage={{
                src: "/blockchain_membership_nft_modules.png",
                alt: "会員証NFTの実装モジュールイメージ",
              }}
            />

            <a id="sec-outsource" />
            <AnalyticsOutsourceSection
              title="会員証NFTの外部パートナーをお探しの方へ"
              leads={[
                "会員証NFTは“作る”よりも“回す”ことが難しい領域です。既存会員基盤との統合、特典設計、認証導線、運用監視まで含めて設計しないと、PoCで止まりがちです。",
                "　",
                "MyStoryは、スマートコントラクト開発に加え、会員ID連携や施策設計、分析・効果検証まで一気通貫で支援します。ポイント制度やキャンペーンと組み合わせた継続利用の仕組みづくりもご相談いただけます。",
              ]}
              reasonsTitle="MyStoryが選ばれる理由"
              reasons={[
                {
                  term: "“運用できる仕様”に落とし込む",
                  desc: "特典、権限、更新、失効、譲渡条件、問い合わせ対応まで含め、現場運用が回るところまで設計します。",
                },
                {
                  term: "会員DB/CRMとつなぐ実装力",
                  desc: "既存データ基盤・MA/CRMと統合し、施策の実行と検証につながる設計にします。",
                },
                {
                  term: "PoC→本番の道筋を作る",
                  desc: "最小構成で検証し、段階的に拡張できるロードマップで進めます。",
                },
                {
                  term: "データ分析とセットで改善できる",
                  desc: "利用率・継続率・LTVなどのKPIを定義し、改善サイクルまで支援できます。",
                },
              ]}
              costTitle="委託費用の目安と進め方"
              costBodies={[
                "費用は、①発行規模・会員数、②連携範囲（会員DB/CRM/アプリ）、③特典・権限設計の複雑性、④ウォレットレス対応の有無、⑤運用監視やダッシュボードの要否で変動します。",
                "　",
                "標準フローは【ヒアリング→要件定義→実装→テスト→リリース→運用改善】。まずは小さく検証し、成果が出る形に拡張します。",
              ]}
              faqTitle="よくあるご相談"
              faqs={[
                {
                  q: "ウォレットを持っていないユーザーでも使えますか？",
                  a: "→ 可能です。ウォレットレス導線や、会員IDと紐付けた認証フローを含めて設計します。",
                },
                {
                  q: "転売や譲渡はコントロールできますか？",
                  a: "→ はい。譲渡可否・条件・ロイヤリティなどを仕様として定義し、コントラクトに反映できます。",
                },
                {
                  q: "まずはPoCから始めたい",
                  a: "→ 最小構成（特典1〜2種、限定発行など）で検証し、指標を見ながら拡張する進め方が可能です。",
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
        blockTitle="会員証NFT・デジタル会員権 開発"
        links={[
          { href: "#sec-feature", label: "特徴" },
          { href: "#sec-modules", label: "提供モジュール" },
          { href: "#sec-outsource", label: "委託・外注を検討中の方へ" },
        ]}
      />
    </main>
  );
}
