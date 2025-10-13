"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export type ServiceCard = {
  href: string;
  title: string;
  iconSrc: string; // モノアイコン推奨（64〜96px）
  iconAlt?: string;
};

type Props = {
  eyebrow?: string; // 上の小見出し（例：コンサルティングサービス）
  title: string; // サービス名（複数行OK）
  description: string; // 概要文
  cards: ServiceCard[]; // 6枚を推奨（4でもOK）
  className?: string;
};

export default function ServiceSectionGrid({
  eyebrow,
  title,
  description,
  cards,
  className,
}: Props) {
  return (
    <section className={`${styles.wrap} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
        </div>

        <div className={styles.right}>
          <ul className={styles.grid}>
            {cards.map((c, i) => (
              <li key={`${c.href}-${i}`} className={styles.item}>
                <Link
                  href={c.href}
                  className={styles.card}
                  aria-label={c.title}
                >
                  <span className={styles.icon}>
                    <Image
                      src={c.iconSrc}
                      alt={c.iconAlt ?? ""}
                      width={44}
                      height={44}
                    />
                  </span>
                  <span className={styles.cardTitle}>{c.title}</span>
                  <span className={styles.chev} aria-hidden>
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
