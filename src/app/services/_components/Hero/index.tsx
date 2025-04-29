import styles from "./index.module.css";
import Image from "next/image";

export type Props = {
  title: string;
  subtitle: string;
  imageUrl: string;
};
export default function ServicesHero({ title, subtitle, imageUrl }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.points}>
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className={`${styles.point} ${styles[`point${index + 1}`]}`}
          />
        ))}
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textBlock}>
            <h1 className={styles.title}>{title}</h1>
            <h4 className={styles.subtitle}>{subtitle}</h4>
          </div>
          <div className={styles.imageBlock}>
            <Image
              src={imageUrl}
              alt=""
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
