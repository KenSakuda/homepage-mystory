import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    dk?: string;
  }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const data = await getNewsDetail(resolvedParams.slug, {
    draftKey: resolvedSearchParams.dk ?? "",
  });

  return {
    title: data.title,
    openGraph: {
      title: data.title,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const data = await getNewsDetail(resolvedParams.slug, {
    draftKey: resolvedSearchParams.dk,
  }).catch(notFound);

  return (
    <>
      <Article data={data} />
      <div className={styles.button}>
        <ButtonLink href="/news">お知らせ一覧へ戻る</ButtonLink>
      </div>
    </>
  );
}
