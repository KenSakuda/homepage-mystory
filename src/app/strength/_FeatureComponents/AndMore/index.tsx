"use client";

import styles from "./index.module.css";

type Props = {
  title: string;
  paragraphs: { text: string; link?: { href: string; label: string } }[];
};

export default function AndMoreSection({ title, paragraphs }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {paragraphs.map((para, idx) => (
          <p key={idx} className={styles.paragraph}>
            {para.link ? (
              <>
                {para.text}{" "}
                <a
                  href={para.link.href}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {para.link.label}
                </a>
              </>
            ) : (
              para.text
            )}
          </p>
        ))}
      </div>
    </section>
  );
}
