"use client";

import styles from "./index.module.css";
import Image from "next/image";

export type PdcaItem = {
  title: string;
  description: string;
  icon: string;
  colorClass: string;
};

type Props = {
  sectionTitle?: string;
  sectionDescription?: string;
  items: PdcaItem[];
};

export default function PDCAVisual({
  sectionTitle,
  sectionDescription,
  items,
}: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {sectionTitle && <h2 className={styles.title}>{sectionTitle}</h2>}
        {sectionDescription && (
          <p className={styles.description}>{sectionDescription}</p>
        )}
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.cardBlock}>
              <div
                className={`${styles.cardWrapper} ${styles[item.colorClass]}`}
              >
                <div className={styles.circle}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
              {index < items.length - 1 && (
                <div className={styles.arrow}>
                  {/* SVG矢印 */}
                  <svg
                    className={styles.arrowSvg}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
