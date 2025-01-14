import Link from "next/link";
import type { News } from "@/app/_libs/microcms";
import Date from "../Date";
import NewsCategory from "../NewsCategory";
import styles from "./index.module.css";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.meta}>
        <Link
          href={`/news/category/${data.category.id}`}
          className={styles.categoryLink}
        >
          <NewsCategory category={data.category} />
        </Link>
        <Date date={data.date} />
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </main>
  );
}
