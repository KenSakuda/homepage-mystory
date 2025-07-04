"use client";

import styles from "./index.module.css";
import Image from "next/image";
import thumbsUp from "/public/icons/thumbs-up.svg";
import thumbsDown from "/public/icons/thumbs-down.svg";

type Props = {
  title: string;
  advantages: string[];
  disadvantages: string[];
};

export default function ComparisonSection({
  title,
  advantages,
  disadvantages,
}: Props) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.iconWrapperGreen}>
            <Image src={thumbsUp} alt="メリット" width={40} height={40} />
          </div>
          <div className={styles.titleGreen}>メリット</div>
          <ul className={styles.list}>
            {advantages.map((item, idx) => (
              <li key={idx} className={styles.listItemGreen}>
                <span className={styles.icon}>👍</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <div className={styles.iconWrapperRed}>
            <Image src={thumbsDown} alt="デメリット" width={40} height={40} />
          </div>
          <div className={styles.titleRed}>デメリット</div>
          <ul className={styles.list}>
            {disadvantages.map((item, idx) => (
              <li key={idx} className={styles.listItemRed}>
                <span className={styles.icon}>👎</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
