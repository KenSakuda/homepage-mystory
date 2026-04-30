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
  const title = "DAO/コミュニティ運営基盤 構築（投票・権限・ガバナンス）";
  const description =
    "DAO構築やコミュニティ運営のための投票・権限管理・提案フローを設計し実装。ツール導入だけでなく、意思決定が回るガバナンス設計まで支援します。";
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
          alt: "DAO/ガバナンス設計のイメージ",
        }}
        title="DAO/コミュニティの意思決定を“回る仕組み”として設計"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="投票・権限・提案フローを整備し、コミュニティ運営をスケールさせる"
              body={[
                "DAOは「投票機能を入れる」だけでは機能しません。誰が提案できるのか、どの条件で可決するのか、権限はどう移譲するのか、緊急時はどう止めるのか――ガバナンス設計が実態に合っていないと意思決定が止まります。",
                "　",
                "MyStoryは、コミュニティ運営の目的（参加促進、共同意思決定、提携、資金配分など）に合わせて、提案・投票・権限・運用ルールを設計し、スマートコントラクトや運営ツールに落とし込みます。制度と実装をセットで支援します。",
              ]}
            />

            <a id="sec-feature" />
            <FeatureHighlights
              title="DAO/ガバナンス設計の特徴"
              items={[
                {
                  subtitle: "ガバナンス設計（制度）から入る",
                  lead: "提案権限、投票権、クオーラム、可決条件、委任、緊急停止など、運用を前提に制度設計します。",
                  image: {
                    src: "/blockchain_dao_governance_feature1.png",
                    alt: "ガバナンス制度設計のイメージ",
                  },
                },
                {
                  subtitle: "権限と資産を安全に扱う運用設計",
                  lead: "マルチシグ、権限分離、監視指標など、コミュニティ運営で事故を起こさない設計にします。",
                  image: {
                    src: "/blockchain_dao_governance_feature2.png",
                    alt: "権限設計のイメージ",
                  },
                },
                {
                  subtitle: "KPIで運営を改善できる",
                  lead: "参加率、投票率、提案採択率、離脱などの指標を定義し、改善サイクルを回せるようにします。",
                  image: {
                    src: "/blockchain_dao_governance_feature3.png",
                    alt: "運営KPIのイメージ",
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
                "DAO/コミュニティ運営の目的と制約を整理し、制度→実装→運用改善までの流れを整えます。",
              ]}
              benefitsTitle="アウトプット"
              benefits={bullets([
                "ガバナンス設計（提案・投票・権限・緊急時対応）",
                "投票/権限管理の実装（必要に応じて）",
                "運用設計（マルチシグ、監視、権限分離）",
                "運営KPI設計と改善サイクル",
              ])}
              subEyebrow="実装イメージ"
              subImage={{
                src: "/blockchain_dao_governance_modules.png",
                alt: "DAO運営基盤のイメージ",
              }}
            />

            <a id="sec-outsource" />
            <AnalyticsOutsourceSection
              title="DAOの構築・コミュニティ運営基盤を検討中の方へ"
              leads={[
                "DAOは“ツール導入”より“設計”が成果を左右します。意思決定の停滞や事故を防ぐためには、提案フロー・権限設計・緊急時対応を含むガバナンスが必要です。",
                "　",
                "MyStoryは、制度設計と実装をセットで支援し、運営KPIを設計して改善サイクルまで伴走します。",
              ]}
              reasonsTitle="MyStoryが選ばれる理由"
              reasons={[
                {
                  term: "制度設計に強い",
                  desc: "提案・投票・権限の設計を、運用前提で整理します。",
                },
                {
                  term: "安全な運用",
                  desc: "権限分離や監視など、事故を防ぐ設計を重視します。",
                },
                {
                  term: "段階導入",
                  desc: "小さく始めて拡張するロードマップで進められます。",
                },
                {
                  term: "分析で改善",
                  desc: "運営を数字で捉え、改善できる設計にします。",
                },
              ]}
              costTitle="委託費用の目安と進め方"
              costBodies={[
                "費用は、制度の複雑性、対象人数、資産管理の要件、実装範囲で変動します。まずは制度設計と最小構成から開始し、運営しながら拡張します。",
              ]}
              faqTitle="よくあるご相談"
              faqs={[
                {
                  q: "企業のコミュニティでもDAOは必要ですか？",
                  a: "→ 必須ではありませんが、共同意思決定や参加インセンティブが必要な場面で有効です。",
                },
                {
                  q: "意思決定が止まりそうで不安",
                  a: "→ 提案権限や委任、クオーラムなどを設計し、止まりにくいルールにします。",
                },
                {
                  q: "トークン発行なしでもできますか？",
                  a: "→ 可能です。会員証NFTや権限設計と組み合わせる形もあります。",
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
        blockTitle="DAO/コミュニティ運営基盤 構築"
        links={[
          { href: "#sec-feature", label: "特徴" },
          { href: "#sec-modules", label: "提供モジュール" },
          { href: "#sec-outsource", label: "委託・外注を検討中の方へ" },
        ]}
      />
    </main>
  );
}
