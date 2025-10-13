"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

type VisualLink = {
  href: string;
  ariaLabel?: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  image: { src: string; alt?: string; width?: number; height?: number };
  visualLink: VisualLink; // 画像全体のリンク
  className?: string;
};

export default function ServiceSectionVisual({
  eyebrow,
  title,
  description,
  image,
  visualLink,
  className,
}: Props) {
  const w = image.width ?? 960;
  const h = image.height ?? 540;

  return (
    <section className={`${styles.wrap} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
        </div>

        <div className={styles.right}>
          <Link
            href={visualLink.href}
            className={styles.visual}
            aria-label={visualLink.ariaLabel ?? title}
          >
            {/* 画像は白いカードの中に */}
            <div className={styles.visualCard}>
              <Image
                src={image.src}
                alt={image.alt ?? ""}
                width={w}
                height={h}
                className={styles.image}
              />
              <span className={styles.visualChevron} aria-hidden>
                ›
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
