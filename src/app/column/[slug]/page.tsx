import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getColumnDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import Date from "@/app/_components/Date";
import Category from "@/app/_components/Category";

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
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <span>
          <Link href="/">TOPページ</Link>
        </span>{" "}
        &gt;{" "}
        <span>
          <Link href="/column">コラム</Link>
        </span>{" "}
        &gt;{" "}
        {/* <span> <Link href={`/column/category/${column.category.id}`}>{column.category?.name}</Link></span> &gt;{" "} */}
        <span className={styles.current}>{column.title}</span>
      </div>
      <div className={styles.meta}>
        {column.category && <Category category={column.category} />}
        <Date date={column.date} />
        キーワード： {column.keyword}
      </div>
      <h1 className={styles.title}>{column.title}</h1>
      <Image
        src={column.thumbnail.url}
        alt={column.title}
        width={800}
        height={300}
        className={styles.mainImage}
      />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: column.content }}
      />
      <div className={styles.writer}>
        <div className={styles.writerLabel}>執筆者</div>
        <div className={styles.writerName}>{column.writerName}</div>
        <div className={styles.writerDesc}>
          株式会社MyStory マーケティングチーム コミュニケーションG
          <br />
          MyStoryのコーポレートサイトや広報・PR関連のコンテンツの企画を担当
        </div>
      </div>
    </div>
  );
}
