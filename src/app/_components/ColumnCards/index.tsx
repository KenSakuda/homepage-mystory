import { Column } from "@/app/_libs/microcms";
import ColumnCard from "@/app/_components/ColumnCard";
import styles from "./index.module.css";

type Props = {
  columns: Column[];
};

export default function ColumnCards({ columns }: Props) {
  if (columns.length === 0) {
    return <p>コラムがありません。</p>;
  }
  return (
    <ul className={styles.cards}>
      {columns.map((column) => (
        <li key={column.id}>
          <ColumnCard column={column} />
        </li>
      ))}
    </ul>
  );
}
