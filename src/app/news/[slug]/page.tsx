// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { getNewsDetail } from "@/app/_libs/microcms";
// import Article from "@/app/_components/Article";
// import ButtonLink from "@/app/_components/ButtonLink";
// import styles from "./page.module.css";

// type Props = {
//   params: {
//     slug: string;
//   };
//   searchParams: {
//     dk?: string;
//   };
// };

// export async function generateMetadata({
//   params,
//   searchParams,
// }: Props): Promise<Metadata> {
//   const data = await getNewsDetail(params.slug, { draftKey: searchParams.dk });

//   return {
//     title: data.title,
//     openGraph: {
//       title: data.title,
//     },
//   };
// }

// export default async function Page({ params, searchParams }: Props) {
//   const data = await getNewsDetail(params.slug, {
//     draftKey: searchParams.dk,
//   }).catch(notFound);

//   return (
//     <>
//       <Article data={data} />
//       <div className={styles.button}>
//         <ButtonLink href="/news">お知らせ一覧へ戻る</ButtonLink>
//       </div>
//     </>
//   );
// }

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";
// PageProps 型を使用する
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { dk?: string };
}): Promise<Metadata> {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk ?? "",
  });
  return {
    title: data.title,
    openGraph: {
      title: data.title,
    },
  };
}
export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { dk?: string };
}) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk ?? "",
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
