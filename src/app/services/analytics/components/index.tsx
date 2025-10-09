"use client";

import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

export function Hero({
  image,
  title,
}: {
  image: { src: string; alt: string };
  title: string;
}) {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.heroImg}
        src={image.src}
        alt={image.alt}
        width={400}
        height={350}
      />
      <h1 className={styles.heroTitle}>{title}</h1>
    </section>
  );
}

export function MainWithSidebar({
  main,
  sidebar,
}: {
  main: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.mainCol}>{main}</div>
      <aside className={styles.sideCol}>{sidebar}</aside>
    </div>
  );
}

export function SidebarNavCard({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div className={styles.sideCard}>
      <div className={styles.sideTitle}>{title}</div>
      <ul className={styles.sideList}>
        {items.map((it) => (
          <li key={it.label}>
            <a href={it.href}>{it.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LeadBlock({ title, body }: { title: string; body: string[] }) {
  return (
    <section className={styles.leadBlock}>
      <h2 className={styles.leadTitle}>{title}</h2>
      {body.map((p, i) => (
        <p key={i} className={styles.body}>
          {p}
        </p>
      ))}
    </section>
  );
}

export function ServiceImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.serviceImage}>
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={300}
        className={styles.serviceImageImg}
      />
    </div>
  );
}

export function FeatureHighlights({
  title,
  items,
}: {
  title: string;
  items: {
    subtitle: string;
    lead: string;
    image: { src: string; alt: string };
  }[];
}) {
  return (
    <section className={styles.feat}>
      <h2 className={styles.featTitle}>
        {title}
        <span className={styles.featUnderline} />
      </h2>

      <div className={styles.featList}>
        {items.map((it, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <article
              key={it.subtitle + idx}
              className={`${styles.featItem} ${
                isEven ? styles.featItemRev : ""
              }`}
            >
              <div className={styles.featTextCol}>
                <div className={styles.featEyebrow}>
                  <span className={styles.featBadge}>
                    特徴{String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.featSubtitle}>{it.subtitle}</span>
                </div>
                <p className={styles.featLead}>{it.lead}</p>
              </div>

              <div className={styles.featImgCol}>
                <div className={styles.featImgFrame}>
                  <Image
                    src={it.image.src}
                    alt={it.image.alt}
                    width={800}
                    height={480}
                    className={styles.featImg}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function BubbleNavSection({
  title,
  lead,
  items,
}: {
  title: string;
  lead: string;
  items: { label: string; href: string }[];
}) {
  return (
    <section className={styles.bubbleNav}>
      <h2 className={styles.bubbleTitle}>
        {title}
        <span className={styles.bubbleUnderline} />
      </h2>
      <p className={styles.bubbleLead}>{lead}</p>

      <div className={styles.bubbleRow} role="navigation" aria-label={title}>
        {items.map((it, i) => (
          <a
            key={it.label + i}
            href={it.href}
            className={styles.bubble}
            aria-label={it.label}
          >
            <span className={styles.bubbleText}>{it.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function RibbonTabs({
  centerLabel,
  tabs,
}: {
  centerLabel: string;
  tabs: string[];
}) {
  return (
    <div className={styles.ribbonWrap}>
      <div className={styles.ribbon}>{centerLabel}</div>
      <div className={styles.ribbonTabs}>
        {tabs.map((t, i) => (
          <div key={i} className={styles.ribbonTab}>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ThreeFeatureCards({
  cards,
}: {
  cards: { title: string; bullets: string[] }[];
}) {
  return (
    <div className={styles.card3Wrap}>
      {cards.map((c) => (
        <div key={c.title} className={styles.card3}>
          <div className={styles.card3Title}>{c.title}</div>
          <ul className={styles.card3List}>
            {c.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function SectionTitle({
  title,
  small,
}: {
  title: string;
  small?: boolean;
}) {
  return (
    <h3 className={small ? styles.h3Small : styles.h3}>
      {title}
      <span className={styles.h3Underline} />
    </h3>
  );
}

export function ServiceMenuProcess({
  eyebrow,
  steps,
}: {
  eyebrow: string;
  steps: string[];
}) {
  return (
    <div className={styles.process}>
      <div className={styles.processEyebrow}>{eyebrow}</div>
      <div className={styles.processBar}>
        {steps.map((t, i) => (
          <div key={t} className={styles.processStep} data-index={i + 1}>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServiceSection({
  problemsTitle,
  problems,
  overviewTitle,
  overview,
  subBlocks,
  subEyebrow,
  subImage,
  benefitsTitle,
  benefits,
}: {
  problemsTitle?: string;
  problems?: { text: string }[];
  overviewTitle?: string;
  overview?: string[];
  subBlocks?: { label: string; meta?: string }[];
  subEyebrow?: string;
  subImage?: { src: string; alt: string };
  benefitsTitle?: string;
  benefits?: { text: string }[];
}) {
  return (
    <section className={styles.section}>
      {problems && problems.length > 0 && (
        <>
          {problemsTitle && <div className={styles.h4}>{problemsTitle}</div>}
          <ul className={styles.bullets}>
            {problems.map((b, i) => (
              <li key={i}>{b.text}</li>
            ))}
          </ul>
          <div className={styles.hr} />
        </>
      )}

      {overview && overview.length > 0 && (
        <>
          {overviewTitle && <div className={styles.h4}>{overviewTitle}</div>}
          {overview.map((p, i) => (
            <p key={i} className={styles.body}>
              {p}
            </p>
          ))}
        </>
      )}

      {subBlocks && subBlocks.length > 0 && (
        <div className={styles.subBlocks}>
          {subBlocks.map((b) => (
            <div key={b.label} className={styles.subBox}>
              <div className={styles.subLabel}>{b.label}</div>
              {b.meta && <div className={styles.subMeta}>{b.meta}</div>}
            </div>
          ))}
        </div>
      )}

      {subEyebrow && <div className={styles.smallEyebrow}>{subEyebrow}</div>}
      {subImage && (
        <div className={styles.imgFrame}>
          <Image
            src={subImage.src}
            alt={subImage.alt}
            width={500}
            height={300}
          />
        </div>
      )}

      {benefits && benefits.length > 0 && (
        <>
          {benefitsTitle && <div className={styles.h4}>{benefitsTitle}</div>}
          <ul className={styles.bullets}>
            {benefits.map((b, i) => (
              <li key={i}>{b.text}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export function AnalysisTable({
  header,
  rows,
}: {
  header: [string, string];
  rows: [string, string][];
}) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{header[0]}</th>
            <th>{header[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([k, v], i) => (
            <tr key={i}>
              <td>{k}</td>
              <td>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FlowBlock({
  title,
  image,
  steps,
  note,
}: {
  title: string;
  image: { src: string; alt: string };
  steps: string[];
  note?: string;
}) {
  return (
    <div className={styles.flow}>
      <div className={styles.h4}>{title}</div>
      <div className={styles.flowImg}>
        <Image src={image.src} alt={image.alt} width={400} height={200} />
      </div>
      <ol className={styles.steps}>
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
}

export function FooterNav({
  blockTitle,
  links,
}: {
  blockTitle: string;
  links: { href: string; label: string }[];
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerCols}>
          <div>
            <div className={styles.footerTitle}>{blockTitle}</div>
            <ul className={styles.footerList}>
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
