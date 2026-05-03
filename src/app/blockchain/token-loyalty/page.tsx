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
  const title = "トークン・ポイント制度（ポイント経済圏）構築";
  const description =
    "トークンでポイント制度をつくる。付与・利用・失効・交換までをルール化し、スマートコントラクトで自動化。将来のDeFi連携やステーブルコイン決済も見据えた“拡張できるポイント基盤”を構築します。";
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
          alt: "トークン・ポイント制度（ポイント経済圏）構築のイメージ",
        }}
        title="トークン・ポイント制度（ポイント経済圏）構築サービス"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="“ポイント”をプログラム化して価値循環をつくる。付与・利用・交換まで回るトークン設計と実装"
              body={[
                "ポイント制度は、顧客接点を増やし、購買頻度や継続率を高める強力な仕組みです。一方で、ポイントの発行・消化・失効・交換・不正対策を人手や分散したシステムで管理すると、運用コストが膨らみ、拡張も難しくなります。",
                "　",
                "MyStoryでは、ポイントのルール（何をしたら何ポイント、どこで使えるか、失効条件、上限、交換条件）をスマートコントラクトとして実装し、ポイント運用を“自動化できる状態”に整えます。将来的に複数事業・複数ブランド・提携先へ広げることや、ステーブルコイン決済・DeFi的な運用（資金の効率化や利回り活用など）に拡張することも見据え、最初から破綻しない設計で構築します。",
              ]}
            />

            <a id="sec-feature" />
            <FeatureHighlights
              title="トークン・ポイント制度構築の特徴"
              items={[
                {
                  subtitle: "付与・利用・失効・交換を“ルール化”して自動運用へ",
                  lead: "ポイント制度が失敗しやすい原因は、例外が多く運用が複雑になることです。付与条件・利用条件・失効・上限・不正対策を設計し、スマートコントラクトで一貫した運用ルールとして実装。管理画面での運用を前提に、現場が回せる形へ落とし込みます。",
                  image: {
                    src: "/noimage.jpg",
                    alt: "ポイントルールの設計と自動運用",
                  },
                },
                {
                  subtitle: "提携先・複数ブランドへ広げられる“拡張性”",
                  lead: "最初は単一サービス内のポイントでも、次に提携先や別事業へ拡張したくなるケースが多いです。権限設計、発行上限、交換レート、精算ロジックなどを整理し、後から広げられる設計で実装します。将来のステーブルコイン決済やDeFi連携も含め、拡張余地を残した設計が可能です。",
                  image: {
                    src: "/noimage.jpg",
                    alt: "ポイント経済圏の拡張イメージ",
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
                "ポイント制度の導入は、①ポイントの設計（付与・利用・失効・交換）→②運用設計（管理画面、例外、精算）→③実装（コントラクト/フロント/連携）→④運用（モニタリングと改善）の順で進めます。既存の決済・会員DB・購買ログと接続し、現場で回る形にすることが成功の鍵です。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "ポイント制度の仕様書（付与・利用・失効・交換・精算）",
                "スマートコントラクト実装・テストコード・デプロイ手順",
                "運用管理画面（発行・上限・レポート）※必要に応じて",
              ])}
              subEyebrow="活用シーン"
              subImage={{
                src: "/noimage.jpg",
                alt: "トークン・ポイント制度の活用イメージ",
              }}
            />

            <a id="sec-outsource" />
            <AnalyticsOutsourceSection
              title="トークン・ポイント制度構築の外部パートナーをお探しの方へ"
              leads={[
                "ポイント制度は、マーケ施策としては強い一方で、運用が複雑になるとコストが膨らみ、改善も止まりがちです。MyStoryでは、ポイントの“ルール”を先に固め、スマートコントラクトで自動運用できる状態へ整えます。",
                "　",
                "また、将来的な提携先拡張や、決済・資金効率化（ステーブルコイン/DeFi的な連携）に広げるケースも見据え、最初から破綻しない設計で構築します。",
              ]}
              reasonsTitle="MyStoryが選ばれる理由"
              reasons={[
                {
                  term: "運用が回るルール設計",
                  desc: "例外を潰し、発行・消化・失効・交換を一貫したルールとして実装。属人的な運用を減らします。",
                },
                {
                  term: "拡張前提のアーキテクチャ",
                  desc: "提携先・複数ブランド・交換レート・精算など、後から広げる論点を先に設計して実装します。",
                },
                {
                  term: "既存システム連携",
                  desc: "決済・会員DB・購買ログとつなぎ、既存施策の延長で運用できる形に。導入ハードルを下げます。",
                },
                {
                  term: "不正対策・監査観点",
                  desc: "発行上限、権限設計、モニタリング、監査観点を踏まえ、リスクを抑えた設計を行います。",
                },
              ]}
              costTitle="委託費用の目安と進め方"
              costBodies={[
                "費用は、①ポイントルールの複雑性、②提携先/交換/精算の有無、③既存DB・決済との連携範囲、④管理画面の要否、⑤監査要件によって変動します。まずは小さく開始し、運用データを見ながら制度・UI・ルールを改善する進め方をご提案します。",
                "　",
                "標準フローは【ヒアリング→要件定義→仕様策定→開発→テスト→ローンチ→運用改善】。早期にKPIが見えるよう、段階導入を前提に設計します。",
              ]}
              faqTitle="よくあるご相談"
              faqs={[
                {
                  q: "既存のポイント制度を置き換える必要がありますか？",
                  a: "→ いいえ。まずは限定施策や特定チャネルから併用開始し、効果と運用を確認しながら段階的に移行する形が一般的です。",
                },
                {
                  q: "提携先に広げたいのですが、最初から設計できますか？",
                  a: "→ 可能です。交換レート、精算、権限、発行上限など、後から必ず出る論点を先に整理して設計します。",
                },
                {
                  q: "DeFiやステーブルコイン連携まで相談できますか？",
                  a: "→ 可能です。法務・会計・リスク観点の整理も含め、段階的に検討できるロードマップをご提案します。",
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
        blockTitle="トークン・ポイント制度構築"
        links={[
          { href: "#sec-feature", label: "特徴" },
          { href: "#sec-use-image", label: "開発イメージ" },
          { href: "#sec-outsource", label: "委託・外注を検討中の方へ" },
        ]}
      />
    </main>
  );
}
