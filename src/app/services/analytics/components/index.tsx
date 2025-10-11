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
    links?: { label: string; href: string; external?: boolean }[];
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
                    width={400}
                    height={250}
                    className={styles.featImg}
                  />
                </div>
              </div>

              {it.links && it.links.length > 0 && (
                <div
                  className={styles.featLinksRow}
                  role="group"
                  aria-label={`${it.subtitle} の関連リンク`}
                >
                  {it.links.map((l, j) => (
                    <a
                      key={`${l.label}-${j}`}
                      href={l.href}
                      className={styles.featLink}
                      {...(l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
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
            width={400}
            height={250}
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

export function AnalyticsOutsourceSection() {
  return (
    <section
      className={styles.appendSection}
      aria-labelledby="outsource-append-title"
    >
      {/* タイトル＆リード */}
      <h2 id="outsource-append-title" className={styles.h3}>
        データ分析の委託・外注をご検討中の方へ
        <span className={styles.h3Underline} />
      </h2>
      <p className={styles.body}>
        ビジネス課題に合ったデータ分析の委託先を選ぶポイントは、「何を解決したいか」に対して最短距離で価値を出せるかどうかです。
        MyStoryは、データ分析と行動経済学／消費者行動理論／社会科学の専門性を掛け合わせ、マーケティングをはじめとする幅広い領域で成果に直結する分析設計→実装→意思決定支援までを一気通貫で提供してきました。データ解析の委託をご検討の企業様に対し、課題定義から仮説設計、モデル構築、ダッシュボード化、運用内製化まで、目的に応じた最適なスコープでご支援します。
      </p>

      {/* 選ばれる理由（定義リスト＋柔らかいカード） */}
      <div className={styles.h4}>MyStoryが選ばれる理由</div>
      <div className={styles.appendCard}>
        <dl className={styles.dlList}>
          <div className={styles.dlRow}>
            <dt>専門性の掛け合わせ</dt>
            <dd>
              「統計学・機械学習」と「消費者の行動科学」に関する知見を統合し、「単に分析する」だけでなく意思決定可能な示唆へ落とし込み
            </dd>
          </div>
          <div className={styles.dlRow}>
            <dt>業種横断の実績</dt>
            <dd>
              マーケティング領域におけるデータ解析はもちろん、スポーツアナリティクス、ピープルアナリティクスなど多領域での支援実績
            </dd>
          </div>
          <div className={styles.dlRow}>
            <dt>現場実装まで伴走</dt>
            <dd>
              PoCに留まらず、業務フローへの実装、指標設計、可視化、運用ガイドまで内製化を見据えて支援
            </dd>
          </div>
          <div className={styles.dlRow}>
            <dt>透明性の高い進め方</dt>
            <dd>
              課題定義→データ可用性→分析アプローチ→成果物→評価指標を明確化し、委託費用の根拠を可視化
            </dd>
          </div>
        </dl>
      </div>

      {/* 費用カード */}
      <div className={styles.h4}>委託費用について</div>
      <p className={styles.body}>
        データ分析 委託
        費用は、①課題の複雑性、②データ量と前処理難度、③モデルの高度性、④成果物（集計表のみ/レポートあり／ダッシュボード化／API接続等）、⑤期間と体制によって変動します。
        弊社は、初回ヒアリングで
        <strong>
          目的・評価指標（KPI/KGI）と制約条件（データ・期間・体制）
        </strong>
        を整理し、<strong>段階的見積り（スモールスタート可能）</strong>
        をご提示します。まずは要件の可視化からお気軽にご相談ください。
      </p>

      {/* FAQ（details/summaryで軽量アコーディオン） */}
      <div className={styles.h4}>よくあるご相談</div>
      <div className={styles.faqWrap}>
        <details className={styles.acItem}>
          <summary className={styles.acSummary}>
            社内にあるデータを利活用したいが、何から始めるべきか分からない
          </summary>
          <div className={styles.acPanel}>
            <p className={styles.body}>
              →
              課題仮説の棚卸しと、取得済みデータの診断から最短スコープをご提案します
            </p>
          </div>
        </details>
        <details className={styles.acItem}>
          <summary className={styles.acSummary}>
            マーケティング向けのデータ解析を委託し、売上・効率を上げたい
          </summary>
          <div className={styles.acPanel}>
            <p className={styles.body}>
              →
              施策効果検証（A/Bテスト設計・因果推論）、メディア最適化、LTV最大化モデルを設計・実装など課題に応じた分析手法をご提案します
            </p>
          </div>
        </details>
        <details className={styles.acItem}>
          <summary className={styles.acSummary}>
            自社に分析人材が不足している
          </summary>
          <div className={styles.acPanel}>
            <p className={styles.body}>
              →
              伴走型の内製化支援／教育（コード・分析設計レビュー、運用プロセス整備）にも対応しています
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
