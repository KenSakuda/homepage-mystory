"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

type VisualLink = { href: string; ariaLabel?: string };

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  image: { src: string; alt?: string; width?: number; height?: number };
  visualLink: VisualLink;
  /** 追加: 右側の白枠サイズ（PC時） */
  frameSize?: { width?: number; height?: number };
  className?: string;
};

export default function ServiceSectionVisual({
  eyebrow,
  title,
  description,
  image,
  visualLink,
  frameSize,
  className,
}: Props) {
  const w = image.width ?? 400;
  const h = image.height ?? 250;

  // ← ここが枠サイズ（デフォルト 400×250）
  const frameW = frameSize?.width ?? 400;
  const frameH = frameSize?.height ?? 250;

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
            <div
              className={styles.visualCard}
              style={{ width: `${frameW}px`, height: `${frameH}px` }}
            >
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
