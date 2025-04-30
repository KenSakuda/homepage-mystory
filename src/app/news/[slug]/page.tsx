// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { getNewsDetail } from "@/app/_libs/microcms";
// import Article from "@/app/_components/Article";
// import ButtonLink from "@/app/_components/ButtonLink";
// import styles from "./page.module.css";
// import Link from "next/link";

// type Props = {
//   params: Promise<{
//     slug: string;
//   }>;
//   searchParams: Promise<{
//     dk?: string;
//   }>;
// };

// export async function generateMetadata({
//   params,
//   searchParams,
// }: Props): Promise<Metadata> {
//   const resolvedParams = await params;
//   const resolvedSearchParams = await searchParams;

//   const data = await getNewsDetail(resolvedParams.slug, {
//     draftKey: resolvedSearchParams.dk ?? "",
//   });

//   return {
//     title: data.title,
//     openGraph: {
//       title: data.title,
//     },
//   };
// }

// export default async function Page({ params, searchParams }: Props) {
//   const resolvedParams = await params;
//   const resolvedSearchParams = await searchParams;

//   const data = await getNewsDetail(resolvedParams.slug, {
//     draftKey: resolvedSearchParams.dk,
//   }).catch(notFound);

//   return (
//     <>
//       <div className={styles.breadcrumb}>
//         <span>
//           <Link href="/">TOPページ</Link>
//         </span>{" "}
//         &gt;{" "}
//         <span>
//           <Link href="/news">お知らせ</Link>
//         </span>{" "}
//         &gt; <span className={styles.current}>{data.title}</span>
//       </div>
//       <Article data={data} />
//       <div className={styles.button}>
//         <ButtonLink href="/news">お知らせ一覧へ戻る</ButtonLink>
//       </div>
//     </>
//   );
// }

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
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

  const data = await getNewsDetail(resolvedParams.slug, {
    draftKey: resolvedSearchParams.draftKey ?? "",
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
          <Link href="/news">News</Link>
        </span>{" "}
        &gt;{" "}
        <span>
          {" "}
          <Link href={`/news/category/${data.category.id}`}>
            {data.category?.name}
          </Link>
        </span>{" "}
        &gt; <span className={styles.current}>{data.title}</span>
      </div>
      <div className={styles.meta}>
        {data.category && <Category category={data.category} />}
        <Date date={data.date} />
      </div>
      <h1 className={styles.title}>{data.title}</h1>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
      <div className={styles.button}>
        <ButtonLink href="/news">お知らせ一覧へ戻る</ButtonLink>
      </div>
    </div>
  );
}
