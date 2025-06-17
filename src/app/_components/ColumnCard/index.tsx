import Link from "next/link";
import Image from "next/image";
import { Column } from "@/app/_libs/microcms";
import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";
import styles from "./index.module.css";

type Props = {
  column: Column;
};

const MAX_TITLE_LENGTH = 42;
const MAX_DESCRIPTION_LENGTH = 63;

export default function ColumnCard({ column }: Props) {
  const truncatedTitle =
    column.title.length > MAX_TITLE_LENGTH
      ? column.title.slice(0, MAX_TITLE_LENGTH) + "..."
      : column.title;
  const truncatedDescription =
    column.description && column.description.length > MAX_DESCRIPTION_LENGTH
      ? column.description.slice(0, MAX_DESCRIPTION_LENGTH) + "..."
      : column.description;
  return (
    <Link href={`/column/${column.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={column.thumbnail.url}
          alt=""
          width={1200}
          height={630}
          className={styles.image}
        />
        <div className={styles.category}>
          <Category category={column.category} />
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{truncatedTitle}</h3>
        <p className={styles.description}>{truncatedDescription}</p>
        <div className={styles.meta}>
          <Date date={column.date} />
        </div>
      </div>
    </Link>
  );
}
