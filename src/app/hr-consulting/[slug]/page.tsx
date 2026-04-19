import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHrConsultingDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";
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

  const column = await getHrConsultingDetail(resolvedParams.slug, {
    draftKey: resolvedSearchParams.draftKey ?? "",
  });
  return {
    title: column.title,
    openGraph: {
      title: column.title,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const column = await getHrConsultingDetail(resolvedParams.slug, {
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
          <Link href="/hr-consulting">ソリューション一覧</Link>
        </span>
        <span className={styles.sep}>›</span>
        <span className={styles.current} aria-current="page">
          {column.title}
        </span>
      </nav>

      {/* タイトル */}
      <h1 className={styles.title}>{column.title}</h1>

      {/* 本文 */}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: column.content }}
      />

      {/* CTA */}
      <div className={styles.buttonLink}>
        <ButtonLink href="/contact">お問い合わせフォーム</ButtonLink>
      </div>
    </article>
  );
}
