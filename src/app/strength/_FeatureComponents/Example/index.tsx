"use client";

import styles from "./index.module.css";
import Image from "next/image";

export type ExampleType = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  sectionTitle: string;
  features: ExampleType[];
};
export default function ServicesExample({ sectionTitle, features }: Props) {
  return (
    <section className={styles.whatWeDo} id="whatwedo">
      <div className={styles.points}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`${styles.point} ${styles[`point${index + 1}`]}`}
          />
        ))}
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>{sectionTitle}</h2>
        <div className={styles.cards}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
