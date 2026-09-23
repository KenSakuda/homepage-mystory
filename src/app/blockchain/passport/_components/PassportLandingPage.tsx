"use client";

import styles from "../page.module.css";

const issues = [
  {
    title: "必要なデータがどこにあるか分からない",
    body: "製品情報、BOM、Carbon Footprint、Recycled Content等がERP・PLM・Excelなどに分散。",
    icon: "data",
  },
  {
    title: "Supplierからデータが集まらない",
    body: "原材料情報やRecycle ContentをメールとExcelで収集。回答状況の把握にも手間がかかります。",
    icon: "supplier",
  },
  {
    title: "EU規制のどの項目に何を入れればいいか分からない",
    body: "制度資料と社内データの対応付けに時間がかかり、担当者の属人的な知識に依存しがちです。",
    icon: "regulation",
  },
  {
    title: "大量の製品情報を手作業で登録できない",
    body: "個体単位のBattery Passport管理では、手入力中心の運用は現実的ではありません。",
    icon: "scale",
  },
];

const readinessItems = [
  ["Identity", "ready"],
  ["Carbon Footprint", "ready"],
  ["Recycled Content", "warning"],
  ["Supplier Data", "error"],
  ["Performance", "ready"],
  ["End-of-Life", "ready"],
] as const;

const supplierRows = [
  ["Material Origin", "Pending"],
  ["Carbon Footprint", "Received"],
  ["Recycled Content", "Pending"],
  ["Due Diligence", "Received"],
] as const;

function Icon({ name }: { name: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "data") {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }
  if (name === "supplier") {
    return (
      <svg {...common}>
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M8 20v-6h8v6" />
        <path d="M9 9h.01M12 9h.01M15 9h.01" />
      </svg>
    );
  }
  if (name === "regulation") {
    return (
      <svg {...common}>
        <path d="M7 3h8l3 3v15H7z" />
        <path d="M15 3v4h4M10 11h5M10 15h5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 18h16M6 15V9M10 15V5M14 15v-3M18 15V7" />
    </svg>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`${styles.sectionHeading} ${
        align === "center" ? styles.centered : ""
      }`}
    >
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className={styles.lead}>{description}</p> : null}
    </div>
  );
}

function PrimaryCta({
  children,
  href = "/contact",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a className={styles.primaryButton} href={href}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function SecondaryCta({
  children,
  href = "#service",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a className={styles.secondaryButton} href={href}>
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              EU Battery Passport対応
            </div>
            <h1>
              EU Battery Passport対応を
              <br />
              <span>データからシンプルに。</span>
            </h1>
            <p className={styles.heroLead}>
              2027年2月18日、EU Battery Passport義務化。
              <br />
              MyStory
              Passportは、Excel・ERP・PLM・Supplierに分散した製品情報を整理し、
              Battery Passport対応を支援する日本企業向けプラットフォームです。
            </p>
            <div className={styles.heroActions}>
              <PrimaryCta>無料で対応状況を診断する</PrimaryCta>
              <SecondaryCta>サービスを見る</SecondaryCta>
            </div>
            <p className={styles.heroNote}>
              対象：LMT Battery、2kWh超のIndustrial Battery、EV Battery
            </p>
          </div>

          <div
            className={styles.heroVisual}
            aria-label="MyStory Passport dashboard preview"
          >
            <div className={styles.mockWindow}>
              <div className={styles.mockTopbar}>
                <div className={styles.mockDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <span className={styles.mockProduct}>MyStory Passport</span>
                <span className={styles.mockStatus}>Live data</span>
              </div>
              <div className={styles.mockBody}>
                <div className={styles.mockSidebar}>
                  <div className={styles.mockLogoMark}>M</div>
                  {[
                    "Dashboard",
                    "Batteries",
                    "Suppliers",
                    "Imports",
                    "Registry",
                  ].map((item, index) => (
                    <div
                      className={`${styles.mockNavItem} ${
                        index === 0 ? styles.mockNavActive : ""
                      }`}
                      key={item}
                    >
                      <span className={styles.mockNavIcon} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.mockContent}>
                  <div className={styles.mockHeading}>
                    <div>
                      <span>Dashboard</span>
                      <strong>Battery readiness</strong>
                    </div>
                    <span className={styles.mockDate}>Updated today</span>
                  </div>
                  <div className={styles.mockCards}>
                    <div>
                      <span>Total Batteries</span>
                      <strong>12,482</strong>
                    </div>
                    <div>
                      <span>Passport Ready</span>
                      <strong>79.2%</strong>
                    </div>
                    <div>
                      <span>Issues</span>
                      <strong>2,601</strong>
                    </div>
                  </div>
                  <div className={styles.mockPanel}>
                    <div className={styles.mockPanelTitle}>
                      <span>Passport readiness</span>
                      <strong>82%</strong>
                    </div>
                    <div className={styles.progressTrack}>
                      <span style={{ width: "82%" }} />
                    </div>
                    <div className={styles.mockRows}>
                      {[
                        ["Identity", "99%"],
                        ["Carbon", "82%"],
                        ["Recycled", "61%"],
                        ["Supply Chain", "53%"],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <span>{label}</span>
                          <strong>{value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="CHALLENGES"
          title="Battery Passport対応で、このような課題はありませんか？"
          description="DPP対応の難しさはQRコードを発行することではなく、必要なデータを社内外から正しい形で集めることにあります。"
          align="center"
        />
        <div className={styles.problemGrid}>
          {issues.map((issue) => (
            <article className={styles.problemCard} key={issue.title}>
              <div className={styles.iconBox}>
                <Icon name={issue.icon} />
              </div>
              <h3>{issue.title}</h3>
              <p>{issue.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function OverviewSection() {
  return (
    <section className={`${styles.section} ${styles.softSection}`} id="service">
      <Container>
        <div className={styles.twoColumn}>
          <div>
            <SectionHeading
              eyebrow="SECTION 1"
              title="MyStory Passportなら一つの画面で管理できます。"
              description="社内システム、Excel、Supplierから集めたデータを一元化。DPP用データへ変換し、検証・公開・Registry連携までを一つの流れにします。"
            />
            <div className={styles.checkList}>
              {[
                "ERP・PLM・Excel・CSVからデータを取り込み",
                "EU要求項目へのData Mapping",
                "不足項目・形式エラーを自動チェック",
                "QR / Data CarrierからPassportを表示",
                "Registry連携に必要なデータを管理",
              ].map((item) => (
                <div key={item}>
                  <span>✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <DataFlow />
        </div>
      </Container>
    </section>
  );
}

function DataFlow() {
  const sources = ["ERP", "PLM", "Excel", "Supplier"];
  return (
    <div className={styles.flowCard}>
      <div className={styles.flowSources}>
        {sources.map((source) => (
          <div key={source}>{source}</div>
        ))}
      </div>
      <div className={styles.flowArrow}>↓</div>
      <div className={styles.flowMain}>MyStory Passport</div>
      <div className={styles.flowSteps}>
        <span>Mapping</span>
        <span>Validation</span>
        <span>Passport</span>
      </div>
      <div className={styles.flowArrow}>↓</div>
      <div className={styles.flowRegistry}>EU DPP Registry</div>
    </div>
  );
}

export function ExcelSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.featureGrid}>
          <div>
            <SectionHeading
              eyebrow="SECTION 2"
              title="Excelからすぐに開始"
              description="大規模なシステム更改は不要。現在お使いのExcel / CSVから始められます。一度列を設定すれば、以降は同じフォーマットから自動変換できます。"
            />
            <div className={styles.featureFootnote}>
              ERP・PLM連携は必要に応じて段階的に追加できます。
            </div>
          </div>
          <div className={styles.mappingCard}>
            <div className={styles.cardToolbar}>
              <strong>Column Mapping</strong>
              <span>AI Suggestions</span>
            </div>
            <div className={styles.mappingHeader}>
              <span>御社Excel列</span>
              <span>DPP Attribute</span>
              <span>Confidence</span>
            </div>
            {[
              ["製造番号", "serialNumber", "99%"],
              ["製造工場", "manufacturingPlace", "96%"],
              ["CF_total", "carbonFootprint", "91%"],
              ["Li再生率", "recycledLithiumPercentage", "87%"],
            ].map((row) => (
              <div className={styles.mappingRow} key={row[0]}>
                <span>{row[0]}</span>
                <span>{row[1]}</span>
                <strong>{row[2]}</strong>
              </div>
            ))}
            <button className={styles.mockButton} type="button">
              Accept suggestions
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ReadinessSection() {
  return (
    <section className={`${styles.section} ${styles.darkSection}`}>
      <Container>
        <div className={styles.featureGrid}>
          <div>
            <SectionHeading
              eyebrow="SECTION 3"
              title="Battery Passport対応状況を自動チェック"
              description="現在登録されている情報と必要項目を照合。何が揃っていて何が不足しているかを一目で確認できます。"
            />
          </div>
          <div className={styles.readinessCard}>
            <div className={styles.readinessTop}>
              <div>
                <span>Battery Passport Readiness</span>
                <strong>78%</strong>
              </div>
              <span className={styles.warningBadge}>Needs review</span>
            </div>
            <div className={styles.readinessBar}>
              <span style={{ width: "78%" }} />
            </div>
            <div className={styles.readinessList}>
              {readinessItems.map(([label, status]) => (
                <div key={label}>
                  <span>{label}</span>
                  <span
                    className={`${styles.statusDot} ${
                      status === "ready"
                        ? styles.ready
                        : status === "warning"
                          ? styles.warning
                          : styles.error
                    }`}
                  >
                    {status === "ready"
                      ? "✓"
                      : status === "warning"
                        ? "△"
                        : "×"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SupplierSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.featureGridReverse}>
          <div className={styles.supplierCard}>
            <div className={styles.supplierHeader}>
              <div>
                <span>Supplier</span>
                <strong>XYZ Metals</strong>
              </div>
              <span>74% complete</span>
            </div>
            <div className={styles.supplierTable}>
              {supplierRows.map(([label, status]) => (
                <div key={label}>
                  <span>{label}</span>
                  <span
                    className={
                      status === "Received"
                        ? styles.receivedPill
                        : styles.pendingPill
                    }
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
            <button className={styles.outlineButton} type="button">
              Send reminder
            </button>
          </div>
          <div>
            <SectionHeading
              eyebrow="SECTION 4"
              title="Supplierへの情報依頼も一元管理"
              description="メールやExcelのやり取りを削減。Supplierごとに必要項目を指定して依頼し、誰から何が届いていないかを可視化します。"
            />
            <div className={styles.miniFeature}>
              <strong>Supplier Portal</strong>
              <p>
                取引先には必要項目だけを見せるシンプルな入力画面を提供できます。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PassportSection() {
  return (
    <section className={`${styles.section} ${styles.softSection}`}>
      <Container>
        <div className={styles.featureGrid}>
          <div>
            <SectionHeading
              eyebrow="SECTION 5"
              title="QRコードからBattery Passportを表示"
              description="製品ごとにData Carrierを生成。利用者、事業者、当局など、アクセス権に応じて必要な情報を提供します。"
            />
            <p className={styles.noteText}>
              公開情報とアクセス制限情報を分けて管理できる設計を前提とします。
            </p>
          </div>

          <div className={styles.phoneWrap}>
            <div className={styles.phone}>
              <div className={styles.phoneTop} />
              <div className={styles.phoneContent}>
                <span className={styles.phoneLabel}>BATTERY PASSPORT</span>
                <h3>ABC Corporation</h3>
                <p>BX500 · EV Battery</p>
                <div className={styles.validPill}>✓ Passport Valid</div>
                <div className={styles.phoneInfo}>
                  <div>
                    <span>Capacity</span>
                    <strong>82 kWh</strong>
                  </div>
                  <div>
                    <span>Chemistry</span>
                    <strong>NMC811</strong>
                  </div>
                  <div>
                    <span>Carbon Footprint</span>
                    <strong>3,820 kg CO₂e</strong>
                  </div>
                  <div>
                    <span>Recycled Lithium</span>
                    <strong>8.3%</strong>
                  </div>
                </div>
                <div className={styles.phoneFooter}>
                  <span>Last updated</span>
                  <strong>13 Aug 2027</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function RegistrySection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.featureGridReverse}>
          <div className={styles.registryVisual}>
            <div className={styles.registryNode}>MyStory Passport</div>
            <div className={styles.registryConnector}>
              <span />
              <b>API</b>
              <span />
            </div>
            <div className={`${styles.registryNode} ${styles.registryEu}`}>
              EU DPP Registry
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="SECTION 6"
              title="EU DPP Registryと連携"
              description="Registry登録に必要な情報を管理しAPI連携を前提とした設計に。詳細なDPPデータとRegistry向けデータを分けて扱います。"
            />
            <p className={styles.noteText}>
              既存の業務システムとの接続を見据え、データモデル・API・履歴管理を分離します。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DiagnosisSection() {
  return (
    <section className={`${styles.section} ${styles.diagnosisSection}`}>
      <Container>
        <div className={styles.diagnosisCard}>
          <div>
            <p className={styles.eyebrow}>SECTION 7</p>
            <h2>まずは現在の対応状況を確認しませんか？</h2>
            <p className={styles.lead}>
              Battery Passport対応 無料診断。30分程度のヒアリングをもとに
              現在の対応状況と優先課題を整理します。
            </p>
            <PrimaryCta>無料診断を申し込む</PrimaryCta>
          </div>
          <div className={styles.diagnosisList}>
            {[
              "現在の対応度",
              "不足データ",
              "Supplier依存項目",
              "システム上の課題",
              "対応優先順位",
            ].map((item) => (
              <div key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PocSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.pricingGrid}>
          <div>
            <SectionHeading
              eyebrow="SECTION 8"
              title="本格導入前に小さく検証できます。"
              description="まずは限られた製品・データでPoCを実施し、データ整備の難所や運用負荷を確認します。"
            />
          </div>
          <div className={styles.priceCard}>
            <span className={styles.priceLabel}>PoC PLAN</span>
            <div className={styles.price}>
              <strong>50</strong>
              <span>万円〜</span>
            </div>
            <ul>
              <li>最大100 Batteries</li>
              <li>Excel Data Mapping</li>
              <li>Battery Passport生成</li>
              <li>Data completeness評価</li>
              <li>課題レポート</li>
            </ul>
            <PrimaryCta>PoCについて相談する</PrimaryCta>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <>
      <section className={`${styles.section} ${styles.valueSection}`}>
        <Container>
          <SectionHeading
            eyebrow="SECTION 9"
            title="DPP対応の難しさはQRコードの発行ではありません。"
            description="必要な製品・サプライチェーンデータを正しい形で揃えること。MyStory Passportはそのデータ整備から支援します。"
            align="center"
          />
          <div className={styles.valueGrid}>
            {[
              ["Data first", "社内外に分散するデータを起点に設計。"],
              ["Japan ready", "日本企業の既存運用を前提に導入。"],
              ["Step by step", "Excelから始め、必要に応じてAPI連携へ。"],
            ].map(([title, body]) => (
              <div key={title}>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.trustSection}`}>
        <Container>
          <SectionHeading
            eyebrow="SECTION 10"
            title="まずは、現状把握から。"
            description="システム導入を前提にせず、御社のBattery Passport対応状況とデータ課題を整理します。"
            align="center"
          />
          <div className={styles.trustMeta}>
            <span>30分程度</span>
            <span>オンライン対応</span>
            <span>簡易診断レポート</span>
          </div>
        </Container>
      </section>

      <section className={styles.finalCta}>
        <Container>
          <div className={styles.finalCtaInner}>
            <p className={styles.eyebrow}>GET READY FOR 2027</p>
            <h2>2027年2月18日の対応を今から。</h2>
            <p>
              MyStory Passportで、Battery Passport対応に必要なデータ整備を
              シンプルに始めましょう。
            </p>
            <div className={styles.heroActions}>
              <PrimaryCta>無料診断を申し込む</PrimaryCta>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
