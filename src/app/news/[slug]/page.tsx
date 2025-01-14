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
// 型を定義する
type PageProps = {
  params: {
    slug: string; // 必須
  };
  searchParams?: {
    dk?: string; // オプション型
  };
};
// generateMetadata 関数
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getNewsDetail(params.slug, {
    draftKey: "",
  });
  return {
    title: data.title,
    openGraph: {
      title: data.title,
    },
  };
}
// ページコンポーネント
export default async function Page({ params, searchParams }: PageProps) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams?.dk ?? "", // オプションで存在しない場合は空文字を使用
  }).catch(() => {
    return notFound();
  });
  return (
    <>
      <Article data={data} />
      <div className={styles.button}>
        <ButtonLink href="/news">お知らせ一覧へ戻る</ButtonLink>
      </div>
    </>
  );
}
