import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import SeachField from "@/app/_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>お知らせ</h1>
      </div>
      <SeachField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </section>
  );
}
