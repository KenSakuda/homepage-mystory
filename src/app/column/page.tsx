import styles from "./page.module.css";
import Link from "next/link";
import ColumnCards from "@/app/_components/ColumnCards";
import { TOP_COLUMN_LIST_LIMIT } from "@/app/_constants";
import { getColumnList } from "@/app/_libs/microcms";

export const revalidate = 60;

const data = await getColumnList({
  limit: TOP_COLUMN_LIST_LIMIT,
});

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>マーケティングコラム</h1>
          <p className={styles.description}>
            データ分析やマーケティング、経済学などに関するコラム、用語解説を整理しています。
            <br />
            メルマガ会員に登録いただきますと、新着コラムやお役立ち情報を定期的に発信させていただきます。
            <br />
            ご希望の方は「contact@b-mystory.com」まで、「メルマガ会員登録希望」の旨ご連絡ください。
          </p>
        </div>
      </div>
      <div className={styles.breadcrumb}>
        <span>
          <Link href="/">TOPページ</Link>
        </span>{" "}
        &gt; <span className={styles.current}>マーケティングコラム</span>
      </div>
      <div className={styles.cards}>
        <ColumnCards columns={data.contents} />
      </div>
    </div>
  );
}
