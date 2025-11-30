import type { Metadata } from "next";
import styles from "./page.module.css";
// import Image from "next/image";
import {
  Hero,
  MainWithSidebar,
  SidebarNavCard,
  LeadBlock,
} from "@/app/analytics/components";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const title = "ブロックチェーン事業";
  const description = "長年のブロックチェーン開発経験をもとにプロダクト開発中";
  const url = "https://www.b-mystory.com/blockchain";

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
      href: "/blockchain",
      label: "ブロックチェーン事業",
    },
  ];
  return (
    <main className={styles.page}>
      <Hero
        image={{ src: "/blockchain_hero.png", alt: "hero" }}
        title="ブロックチェーン事業"
      />

      <MainWithSidebar
        main={
          <>
            <LeadBlock
              title="長年のブロックチェーン開発経験をもとにプロダクト開発中"
              body={[
                "MyStoryでは、これまで数多くのスマートコントラクトの受託開発を請け負ってきました。現在はブロックチェーン技術を活用したポイントサービス『＠Point』を開発中です。",
                "　",
                "ポイント制度の導入には大きなコストがかかり、資金面に余裕のある大手企業以外では難しいことが多いです。初期コストをかけられない企業においても、ブロックチェーン技術を活用することでポイント制度の仕組みを構築可能です。プロダクトのローンチは2026年3月頃を予定しております。",
              ]}
            />

            <div className={styles.contact}>
              <ButtonLink href="/contact">お問い合わせフォーム</ButtonLink>
            </div>
          </>
        }
        sidebar={
          <SidebarNavCard title="ブロックチェーン事業" items={sidebarLinks} />
        }
      />
    </main>
  );
}
