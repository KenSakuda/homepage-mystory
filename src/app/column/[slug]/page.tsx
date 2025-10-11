import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getColumnDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import Date from "@/app/_components/Date";
import Category from "@/app/_components/Category";
import ButtonLink from "@/app/_components/ButtonLink";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ draftKey?: string }>;
};

export const revalidate = 60;

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const column = await getColumnDetail(resolvedParams.slug, {
    draftKey: resolvedSearchParams.draftKey ?? "",
  });
  return {
    title: column.title,
    description: column.description,
    openGraph: {
      title: column.title,
      description: column.description,
      images: column.thumbnail.url,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const column = await getColumnDetail(resolvedParams.slug, {
    draftKey: resolvedSearchParams.draftKey,
  }).catch(notFound);

  return (
    <article className={styles.container}>
      {/* パンくず */}
      <nav className={styles.breadcrumb} aria-label="breadcrumb">
        <span>
          <Link href="/">TOPページ</Link>
        </span>
        <span className={styles.sep}>›</span>
        <span>
          <Link href="/column">コラム</Link>
        </span>
        <span className={styles.sep}>›</span>
        <span className={styles.current} aria-current="page">
          {column.title}
        </span>
      </nav>

      {/* メタ（カテゴリ／日付／キーワード） */}
      <div className={styles.meta}>
        <div className={styles.metaTop}>
          <div className={styles.metaLeft}>
            {column.category && <Category category={column.category} />}
          </div>
          <div className={styles.metaRight}>
            <Date date={column.date} />
          </div>
        </div>
        <div className={styles.keywords} aria-label="キーワード">
          <span className={styles.kwLabel}>キーワード：</span>
          <span className={styles.kwText}>{column.keyword}</span>
        </div>
      </div>

      {/* タイトル */}
      <h1 className={styles.title}>{column.title}</h1>

      {/* メインイメージ */}
      <figure className={styles.hero}>
        <Image
          src={column.thumbnail.url}
          alt={column.title}
          width={800}
          height={400}
          className={styles.mainImage}
          priority
        />
      </figure>

      {/* 本文 */}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: column.content }}
      />

      {/* CTA */}
      <div className={styles.buttonLink}>
        <ButtonLink href="/contact">お問い合わせフォーム</ButtonLink>
      </div>

      {/* 著者情報 */}
      <aside className={styles.writer}>
        <div className={styles.writerHeader}>
          <div className={styles.writerBadge}>Author</div>
          <div className={styles.writerName}>{column.writerName}</div>
        </div>
        <p className={styles.writerDesc}>
          株式会社MyStory マーケティングチーム コミュニケーションG
          <br />
          MyStoryのコーポレートサイトや広報・PR関連のコンテンツの企画を担当
        </p>
      </aside>
    </article>
  );
}
