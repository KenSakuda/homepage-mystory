import styles from "./index.module.css";
import Link from "next/link";
import Category from "../Category";
import Date from "../Date";
import { Column } from "@/app/_libs/microcms";

type Props = {
  columns: Column[];
};

export default function ColumnList({ columns }: Props) {
  if (columns.length === 0) {
    return <p>コラムはありません</p>;
  }
  return (
    <ul>
      {columns.map((column) => (
        <li key={column.id} className={styles.list}>
          <Link href={`/column/${column.id}`} className={styles.link}>
            <dl className={styles.content}>
              <dt className={styles.title}>{column.title}</dt>
              <dd className={styles.meta}>
                <Category category={column.category} />
                <Date date={column.date} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
