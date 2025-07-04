"use client";

import styles from "./index.module.css";

export type CommunityCard = {
  title: string;
  description: string;
};

type Props = {
  sectionTitle: string;
  sectionDescription?: string;
  cards: CommunityCard[];
};

export default function CommunitySection({
  sectionTitle,
  sectionDescription,
  cards,
}: Props) {
  return (
    <section className={styles.section}>
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
        {sectionDescription && (
          <p className={styles.description}>{sectionDescription}</p>
        )}
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
