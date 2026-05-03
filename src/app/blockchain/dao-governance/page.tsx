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
  const title = "DAO・コミュニティ基盤構築";
  const description =
    "DAOで“共創”を仕組み化。参加証明（NFT）・投票・提案・予算配分までをスマートコントラクトと運用ルールで設計し、企業コミュニティ/ファンコミュニティの立ち上げを支援します。";
  const url = "https://www.b-mystory.com/blockchain/dao-governance";

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
          alt: "DAO・コミュニティ基盤構築のイメージ",
        }}
        title="DAO・コミュニティ基盤構築サービス"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="コミュニティ運営を“仕組み”にする。DAOで提案・投票・予算配分まで透明化し、共創を加速"
              body={[
                "企業がコミュニティを運営する目的は、ファン化・継続率向上・共同企画・UGC創出など多岐にわたります。しかし、運営が属人的だと「参加の熱量が続かない」「意思決定が不透明」「貢献が可視化されない」といった課題が起きやすくなります。",
                "　",
                "DAOは、提案・投票・権利付与・予算の使い道を“ルール”として定義し、透明性を担保しながら共創を進める仕組みです。MyStoryでは、参加証明（会員証NFT）、役割設計（コアメンバー/一般/運営）、提案フロー、投票方式、予算配分（助成・報酬）までを一体で設計し、スマートコントラクトと運用設計の両面からDAOの立ち上げを支援します。",
              ]}
            />

            <a id="sec-feature" />
            <FeatureHighlights
              title="DAO・コミュニティ基盤構築の特徴"
              items={[
                {
                  subtitle: "参加証明（NFT）×ガバナンス設計",
                  lead: "誰が参加できるか、どの権利があるかを会員証NFTで定義し、提案・投票へ接続します。参加条件、役割、投票権、委任、投票期間などを設計し、運営が破綻しないルールに落とし込みます。",
                  image: {
                    src: "/noimage.jpg",
                    alt: "参加証明NFTと投票の連携",
                  },
                },
                {
                  subtitle: "貢献の可視化と報酬設計",
                  lead: "コミュニティが続くかどうかは“貢献が報われるか”で決まります。貢献指標（投稿、レビュー、イベント運営など）を整理し、インセンティブ（ポイント/トークン/特典）へ接続。運営の負担を増やさずに回る設計を行います。",
                  image: {
                    src: "/noimage.jpg",
                    alt: "貢献可視化とインセンティブ設計",
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
                "DAO導入は、①目的とKPI（継続率/UGC/共同企画数など）→②参加条件と権利設計（NFT/役割）→③提案・投票フロー→④報酬/予算配分→⑤実装と運用設計、の順で進めます。最初は小さく開始し、運用データを見ながらルールを調整することが重要です。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "DAO設計書（役割・権利・提案/投票フロー・運用ルール）",
                "スマートコントラクト実装・テストコード・デプロイ手順",
                "コミュニティ運用テンプレ（モデレーション/例外対応）",
              ])}
              subEyebrow="活用シーン"
              subImage={{
                src: "/noimage.jpg",
                alt: "DAO導入の活用イメージ",
              }}
            />

            <a id="sec-outsource" />
            <AnalyticsOutsourceSection
              title="DAO・コミュニティ基盤構築の外部パートナーをお探しの方へ"
              leads={[
                "DAOは“ツール導入”ではなく、“運用設計”が本体です。投票機能だけを入れても続かず、権利・役割・報酬・例外対応を含めた運用ルールが必要になります。MyStoryでは、設計から実装、運用定着まで一体で支援します。",
                "　",
                "また、最初から大規模に始めず、限定メンバーで小さく回し、KPIを見ながら拡張する進め方を重視しています。共創が継続する形を一緒に作ります。",
              ]}
              reasonsTitle="MyStoryが選ばれる理由"
              reasons={[
                {
                  term: "運用設計から入る",
                  desc: "提案・投票・予算配分のルール、例外対応、荒れた時の対処など、運営の現実に合わせて設計します。",
                },
                {
                  term: "参加証明（NFT）と一体設計",
                  desc: "会員証NFTとガバナンスを分断せず、参加条件と権利を一体で実装します。",
                },
                {
                  term: "貢献の可視化・報酬設計",
                  desc: "継続の鍵となる貢献指標とインセンティブを設計し、運営の負担を増やさず回る形へ。",
                },
                {
                  term: "段階導入でリスクを抑える",
                  desc: "限定コミュニティから開始し、運用データを見ながら拡張。過剰投資を避けます。",
                },
              ]}
              costTitle="委託費用の目安と進め方"
              costBodies={[
                "費用は、①役割・権利設計の複雑性、②投票方式/委任/予算配分の要件、③会員証NFTやポイントとの連携、④コミュニティ運用支援の範囲によって変動します。まずは限定コミュニティで小さく開始し、運用の型ができてから拡張する形が一般的です。",
                "　",
                "標準フローは【ヒアリング→設計→試験導入→改善→本番ローンチ→定着支援】。企業側の体制に合わせて、現実的に回る形を優先します。",
              ]}
              faqTitle="よくあるご相談"
              faqs={[
                {
                  q: "DAOを入れればコミュニティが勝手に盛り上がりますか？",
                  a: "→ いいえ。盛り上がりは“設計”で決まります。参加条件、貢献の可視化、報酬、運営の介入ラインを設計して初めて回り始めます。",
                },
                {
                  q: "最初からトークン発行が必要ですか？",
                  a: "→ 必須ではありません。会員証NFT＋特典設計から開始し、必要になった段階でポイント/トークンへ拡張する進め方も可能です。",
                },
                {
                  q: "企業コミュニティでもDAOは使えますか？",
                  a: "→ 使えます。外部向け（ファン）だけでなく、共創プロジェクトや提携先との協業の意思決定にも応用できます。",
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
        blockTitle="DAO・コミュニティ基盤構築"
        links={[
          { href: "#sec-feature", label: "特徴" },
          { href: "#sec-use-image", label: "開発イメージ" },
          { href: "#sec-outsource", label: "委託・外注を検討中の方へ" },
        ]}
      />
    </main>
  );
}
