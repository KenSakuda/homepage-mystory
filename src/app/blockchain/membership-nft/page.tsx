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
  const title = "会員証NFT・チケットNFT開発";
  const description =
    "会員証NFT／チケットNFTで、継続率とロイヤリティを伸ばす。配布・保有・特典付与・二次流通まで見据えたNFT導入を、要件定義〜スマートコントラクト実装〜運用まで一気通貫で支援します。";
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
          alt: "会員証NFT・チケットNFT開発のイメージ",
        }}
        title="会員証NFT・チケットNFT開発サービス"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="会員証NFTで“関係性”を資産化。配布から特典設計、運用まで一体でつくるロイヤリティ施策"
              body={[
                "「会員証を作りたい」「VIP向けの特典を継続的に届けたい」「イベントチケットの不正転売や偽造を抑えたい」——こうした課題に対し、会員証NFT／チケットNFTは“保有”そのものを参加証明にできる仕組みです。アプリIDやメール会員では難しい、保有者限定の権利付与（先行予約、限定コンテンツ、アップグレード特典）を設計しやすく、長期のロイヤリティ施策へ落とし込みやすいのが特長です。",
                "　",
                "MyStoryでは、NFTの発行・配布だけで終わらせず、会員ランク設計、特典の付与ルール、二次流通を許可するか（ロイヤリティ設定含む）、カストディ（鍵管理）の方式、既存CRMや会員DBとの接続までを含めて“運用可能な会員証NFT”を構築します。スマートコントラクトとフロント（管理画面含む）を一体で開発し、企画段階からローンチ後の改善まで伴走します。",
              ]}
            />

            <a id="sec-feature" />
            <FeatureHighlights
              title="会員証NFT・チケットNFT開発の特徴"
              items={[
                {
                  subtitle: "特典設計まで含めた“会員証NFT”の実装",
                  lead: "NFTは「作る」よりも「何を権利として持たせるか」が重要です。先行予約・限定公開・抽選参加・来店回数に応じたアップグレードなど、KPI（継続率・来店頻度・LTV）に直結する特典設計を、スマートコントラクトの権限設計と合わせて実装します。保有者検証（Gate）や配布（Airdrop/Claim）も含め、現場運用を前提に設計します。",
                  image: {
                    src: "/noimage.jpg",
                    alt: "会員証NFTの特典付与と保有者限定施策",
                  },
                },
                {
                  subtitle: "不正転売・偽造対策と、二次流通を見据えた設計",
                  lead: "チケット用途では、譲渡可否・本人確認・転売対策（SBT/譲渡制限/リセール上限/ロイヤリティ）などの設計が成果を左右します。NFTの仕様だけでなく、運用フロー（当日オペレーション、問い合わせ導線、例外対応）を含め、現実の運用に落とし込みます。",
                  image: {
                    src: "/noimage.jpg",
                    alt: "チケットNFTの転売対策と運用フロー",
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
                "会員証NFTの導入は、①企画（誰に何を付与するか）→②設計（権利・譲渡・特典ルール）→③実装（コントラクト/フロント/管理画面）→④運用（配布・問い合わせ・改善）の順で進めます。既存の会員DB・CRM・決済・メール配信と連携し、“既存施策の延長で回る”形にするのがポイントです。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "会員証NFT/チケットNFTの仕様書（権利・譲渡・特典ルール）",
                "スマートコントラクト実装・テストコード・デプロイ手順",
                "保有者限定ページ／配布ページ／管理画面（必要に応じて）",
              ])}
              subEyebrow="活用シーン"
              subImage={{
                src: "/noimage.jpg",
                alt: "会員証NFTの活用イメージ",
              }}
            />

            <a id="sec-outsource" />
            <AnalyticsOutsourceSection
              title="会員証NFT・チケットNFT開発の外部パートナーをお探しの方へ"
              leads={[
                "会員証NFTは「NFTを発行すること」自体よりも、継続率や来店頻度などのKPIにつながる“特典設計と運用設計”が重要です。MyStoryでは、スマートコントラクト実装に加え、配布・運用・例外対応まで含めた現場実装を支援します。",
                "　",
                "また、既存会員制度を置き換えるのではなく、既存CRMや会員DBと接続し、段階的に導入できる設計を重視します。小さく開始し、効果を見ながらアップグレードしていく進め方が可能です。",
              ]}
              reasonsTitle="MyStoryが選ばれる理由"
              reasons={[
                {
                  term: "“発行”より“運用”まで設計",
                  desc: "特典ルール、譲渡可否、問い合わせ導線、当日オペレーションなど、運用に必要な論点を先回りして設計。ローンチ後に破綻しない仕組みに落とし込みます。",
                },
                {
                  term: "既存システムとつなぐ設計",
                  desc: "会員DB・CRM・決済・メール配信と連携し、既存施策の延長で運用できる形に。現場の負担を増やさずに導入できます。",
                },
                {
                  term: "段階導入（スモールスタート）",
                  desc: "まずは限定会員・特定イベントから開始し、KPIが見えたら対象拡大。過剰投資を避けつつ効果検証ができます。",
                },
                {
                  term: "セキュリティと例外対応",
                  desc: "権限設計・譲渡制限・例外時の再発行など、現実の運用で必ず起きる“困りごと”を想定して設計します。",
                },
              ]}
              costTitle="委託費用の目安と進め方"
              costBodies={[
                "費用は、①会員証NFT/チケットNFTの種類と権利設計、②配布方式（Claim/Airdrop）と本人確認、③既存DB/CRM連携の有無、④管理画面の要否、⑤監査・セキュリティ要件によって変動します。まずは限定導入（小規模）で開始し、効果と運用負荷を確認したうえで拡張する進め方をご提案します。",
                "　",
                "標準フローは【ヒアリング→要件定義→仕様策定→開発（コントラクト/フロント）→テスト→ローンチ→運用改善】。既存の施策や体制に合わせて、最短で回る形を一緒に設計します。",
              ]}
              faqTitle="よくあるご相談"
              faqs={[
                {
                  q: "会員がウォレットを持っていないのですが導入できますか？",
                  a: "→ 可能です。メール/LINEログインと連動したカストディ方式や、最初は“会員証表示はアプリ内、裏側でNFT管理”の形で開始し、段階的にWeb3要素を強める設計ができます。",
                },
                {
                  q: "転売対策はどこまでできますか？",
                  a: "→ 譲渡制限、本人確認、リセール条件（上限/ロイヤリティ）、SBT化など複数の手段があります。チケットの運用フローと合わせて最適な設計をご提案します。",
                },
                {
                  q: "まずは小さく試せますか？",
                  a: "→ はい。限定会員向け・特定イベント向けなど小さく開始し、KPIを見ながら拡張する進め方が一般的です。",
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
        blockTitle="会員証NFT・チケットNFT開発"
        links={[
          { href: "#sec-feature", label: "特徴" },
          { href: "#sec-use-image", label: "開発イメージ" },
          { href: "#sec-outsource", label: "委託・外注を検討中の方へ" },
        ]}
      />
    </main>
  );
}
