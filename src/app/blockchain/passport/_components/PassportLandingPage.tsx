import styles from "../page.module.css";

type IconName =
  | "grid"
  | "database"
  | "link"
  | "check"
  | "shield"
  | "factory"
  | "truck"
  | "battery"
  | "leaf"
  | "scan"
  | "arrow"
  | "file"
  | "users"
  | "api";

const challenges = [
  {
    title: "必要データが社内に散在",
    body: "製品情報、BOM、Carbon Footprint、Recycled ContentなどがERP・PLM・Excelに分散。",
    icon: "database" as IconName,
  },
  {
    title: "Supplierデータが集まらない",
    body: "原材料やRecycle Contentなど、社外から取得すべき情報が多く、メールとExcelの往復が発生。",
    icon: "users" as IconName,
  },
  {
    title: "EU要求項目との対応付けが難しい",
    body: "規制文書と自社データの対応関係が分かりづらく、担当者の属人的な判断に依存しやすい。",
    icon: "grid" as IconName,
  },
  {
    title: "個体単位の管理が重い",
    body: "大量の製品を個体単位で更新・確認する運用は、手作業では継続しにくい。",
    icon: "scan" as IconName,
  },
];

const industryCards = [
  {
    title: "バッテリー・Battery Pack",
    description:
      "Battery Passport対応の中心となる製品群。モデル情報と個体情報の両方を継続管理。",
    risks: [
      "製品・個体データの分散",
      "Carbon Footprint",
      "Recycled Content",
      "Supplier証明",
    ],
    icon: "battery" as IconName,
  },
  {
    title: "EV・モビリティ",
    description:
      "車両・部品・電池のデータが複数企業を跨ぐため、サプライチェーン連携が重要。",
    risks: ["Tier間のデータ連携", "個体識別", "履歴管理", "アクセス権"],
    icon: "truck" as IconName,
  },
  {
    title: "ESS・産業用蓄電",
    description:
      "2kWh超の産業用バッテリーでは、設置後の運用や保守も含めた情報管理が必要。",
    risks: ["長期運用", "更新データ", "保守・再利用情報", "複数拠点"],
    icon: "leaf" as IconName,
  },
  {
    title: "素材・部材メーカー",
    description:
      "完成品メーカーへ提供する原材料・再生材・CFP関連データの整備が求められる。",
    risks: ["証明情報の提出", "取引先ごとの様式差", "更新依頼", "根拠資料管理"],
    icon: "factory" as IconName,
  },
];

const services = [
  {
    no: "01",
    title: "Readiness診断",
    body: "現状のデータ保有状況と不足項目を整理し、対応優先度を可視化します。",
    icon: "check" as IconName,
  },
  {
    no: "02",
    title: "Data Mapping",
    body: "Excel / CSV / ERP / PLMの項目をDPPデータモデルへ対応付けします。",
    icon: "grid" as IconName,
  },
  {
    no: "03",
    title: "Supplier Data Collection",
    body: "Supplierへ必要情報を依頼し、回答状況・不足・証憑を一元管理します。",
    icon: "users" as IconName,
  },
  {
    no: "04",
    title: "Passport生成",
    body: "必要情報を検証し、QR / Data Carrierから確認できるPassportを生成します。",
    icon: "scan" as IconName,
  },
  {
    no: "05",
    title: "Registry連携",
    body: "EU DPP Registry向けの情報を整理し、API連携を前提とした構成で管理します。",
    icon: "api" as IconName,
  },
  {
    no: "06",
    title: "PoC・導入支援",
    body: "限定された製品・データから小さく始め、運用課題を確認しながら拡張します。",
    icon: "shield" as IconName,
  },
];

const faq = [
  [
    "どの企業がBattery Passportの対象になりますか？",
    "2027年2月18日から、EU市場に投入・使用開始されるLMTバッテリー、2kWh超の産業用バッテリー、EVバッテリーにBattery Passportが必要です。自社製品が該当するかは、製品区分や商流を確認したうえで判断する必要があります。",
  ],
  [
    "ブロックチェーンは必須ですか？",
    "必須ではありません。MyStory Passportでは、まず規制対応に必要なデータ整備・相互運用・アクセス制御を中心に設計し、真正性や監査性に追加価値がある場合に暗号学的証明や分散台帳技術の活用を検討します。",
  ],
  [
    "既存のExcelから始められますか？",
    "はい。初期導入ではExcel / CSVから開始できる設計を想定しています。将来的にERP・PLM・基幹DBとのAPI連携へ段階的に拡張できます。",
  ],
  [
    "Supplier側にもアカウントが必要ですか？",
    "Supplier Portal方式を基本としつつ、導入初期はセキュアリンクやCSV回収など、取引先の負担を抑える方法も選択できる構成を想定しています。",
  ],
  [
    "EU DPP Registryには何を登録しますか？",
    "Registryには識別子や登録情報・メタデータ等を連携し、詳細なPassportデータは役割に応じて別レイヤーで保持する構成を前提とします。",
  ],
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

function Icon({ name, size = 26 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  const paths: Record<IconName, React.ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1" />
      </>
    ),
    check: <path d="M5 12.5l4 4L19 6.5" />,
    shield: (
      <>
        <path d="M12 3l7 3v5c0 4.7-2.7 8.1-7 10-4.3-1.9-7-5.3-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    factory: (
      <>
        <path d="M3 21V9l6 3V8l6 3V5l6 3v13z" />
        <path d="M7 17h2M12 17h2M17 17h2" />
      </>
    ),
    truck: (
      <>
        <path d="M3 7h11v10H3zM14 11h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </>
    ),
    battery: (
      <>
        <rect x="4" y="6" width="15" height="12" rx="2" />
        <path d="M19 10h2v4h-2M8 10v4M11 12H5" />
      </>
    ),
    leaf: (
      <>
        <path d="M20 4c-8 .5-13 4.4-13 10 0 3 2 5 5 5 5.6 0 9.5-5 8-15z" />
        <path d="M5 21c2-5 6-9 12-12" />
      </>
    ),
    scan: (
      <>
        <path d="M8 3H4a1 1 0 0 0-1 1v4M16 3h4a1 1 0 0 1 1 1v4M8 21H4a1 1 0 0 1-1-1v-4M16 21h4a1 1 0 0 0 1-1v-4" />
        <path d="M7 12h10" />
      </>
    ),
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    file: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 12h6M9 16h6" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c.5-4 2.7-6 6-6s5.5 2 6 6" />
        <path d="M16 6.5a3 3 0 0 1 0 5.5M17 14c2.3.7 3.7 2.5 4 5" />
      </>
    ),
    api: (
      <>
        <path d="M8 7l-4 5 4 5M16 7l4 5-4 5M14 4l-4 16" />
      </>
    ),
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function SectionIntro({
  eyebrow,
  title,
  body,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  center?: boolean;
}) {
  return (
    <div className={`${styles.sectionIntro} ${center ? styles.center : ""}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p className={styles.sectionLead}>{body}</p>}
    </div>
  );
}

function PrimaryButton({
  children,
  href = "/contact",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a href={href} className={styles.primaryButton}>
      {children}
      <Icon name="arrow" size={18} />
    </a>
  );
}

function Header() {
  return (
    <>
      <div className={styles.deadlineBar}>
        <Container>
          <div className={styles.deadlineInner}>
            <span>2027.02.18</span>
            <strong>
              EU Battery Passport 義務化まで、準備期間は限られています。
            </strong>
          </div>
        </Container>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>EU BATTERY PASSPORT / DPP</p>
            <h1>
              規制対応を、
              <br />
              <span>データからシンプルに。</span>
            </h1>
            <p className={styles.heroLead}>
              Excel・ERP・PLM・Supplierに散らばる情報を整理し、Battery
              Passport対応状況の可視化からPassport生成・Registry連携まで。
            </p>
            <div className={styles.heroActions}>
              <PrimaryButton>無料で対応状況を相談する</PrimaryButton>
              <a href="#solution" className={styles.secondaryButton}>
                サービスを見る
              </a>
            </div>
            <div className={styles.heroMeta}>
              <span>対象：LMT</span>
              <span>産業用 &gt; 2kWh</span>
              <span>EV Battery</span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <DashboardMock />
          </div>
        </div>
      </Container>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashTop}>
        <div className={styles.dashLogo}>MP</div>
        <span>Passport Readiness</span>
        <span className={styles.livePill}>LIVE</span>
      </div>
      <div className={styles.dashBody}>
        <aside className={styles.dashSide}>
          {["Overview", "Batteries", "Suppliers", "Imports", "Registry"].map(
            (x, i) => (
              <div key={x} className={i === 0 ? styles.dashActive : ""}>
                <span />
                <b>{x}</b>
              </div>
            ),
          )}
        </aside>
        <div className={styles.dashMain}>
          <div className={styles.dashHeading}>
            <div>
              <small>Organization</small>
              <strong>ABC Battery Co.</strong>
            </div>
            <button type="button">Export</button>
          </div>
          <div className={styles.kpiGrid}>
            <div>
              <small>Total Batteries</small>
              <strong>12,482</strong>
              <span>+1,248 this month</span>
            </div>
            <div>
              <small>Passport Ready</small>
              <strong>79.2%</strong>
              <span>9,881 passports</span>
            </div>
            <div>
              <small>Issues</small>
              <strong>2,601</strong>
              <span>183 supplier pending</span>
            </div>
          </div>
          <div className={styles.readinessPanel}>
            <div className={styles.panelHead}>
              <strong>Readiness by category</strong>
              <b>82%</b>
            </div>
            {[
              ["Identity", 99],
              ["Carbon Footprint", 82],
              ["Recycled Content", 61],
              ["Supply Chain", 53],
            ].map(([label, val]) => (
              <div className={styles.metricRow} key={String(label)}>
                <span>{label}</span>
                <div>
                  <i style={{ width: `${val}%` }} />
                </div>
                <b>{val}%</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RegulationStrip() {
  return (
    <section className={styles.regulationStrip}>
      <Container>
        <div className={styles.regulationGrid}>
          <div>
            <strong>2027.02.18</strong>
            <span>Battery Passport義務化</span>
          </div>
          <div>
            <strong>3 categories</strong>
            <span>LMT / 産業用&gt;2kWh / EV</span>
          </div>
          <div>
            <strong>QR linked</strong>
            <span>Battery Passportへアクセス</span>
          </div>
          <div>
            <strong>Access controlled</strong>
            <span>役割に応じた情報公開</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WhyNow() {
  return (
    <section className={`${styles.section} ${styles.whiteSection}`} id="why">
      <Container>
        <SectionIntro
          eyebrow="WHY NOW"
          title="Battery Passportは、QRコードを作るだけの話ではありません。"
          body="本当に重いのは、社内外に散在するデータを集め、規制要求に対応する形へ整え、継続的に更新できる運用をつくることです。"
          center
        />
        <div className={styles.challengeGrid}>
          {challenges.map((c) => (
            <article className={styles.challengeCard} key={c.title}>
              <div className={styles.iconBadge}>
                <Icon name={c.icon} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
        <div className={styles.problemStatement}>
          <div className={styles.problemIcon}>!</div>
          <div>
            <strong>対応のボトルネックは「データ」です。</strong>
            <p>
              Registryの存在や技術仕様が整っても、企業内の製品情報・環境情報・Supplier情報がつながっていなければ、Passport運用は回りません。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Solution() {
  return (
    <section
      className={`${styles.section} ${styles.softSection}`}
      id="solution"
    >
      <Container>
        <SectionIntro
          eyebrow="SOLUTION"
          title="MyStory Passportは、DPP対応の“前工程”から支援します。"
          body="既存システムを一気に置き換えるのではなく、Excelからでも始められる現実的な導入を前提にしています。"
          center
        />
        <div className={styles.flowBoard}>
          <div className={styles.flowSources}>
            {["ERP", "PLM", "Excel / CSV", "Supplier"].map((x) => (
              <div key={x}>{x}</div>
            ))}
          </div>
          <div className={styles.flowArrowDown}>↓</div>
          <div className={styles.flowCore}>
            <span>MyStory Passport</span>
            <strong>Collect → Map → Validate → Publish</strong>
          </div>
          <div className={styles.flowModules}>
            <div>
              <Icon name="grid" />
              <span>Data Mapping</span>
            </div>
            <div>
              <Icon name="check" />
              <span>Validation</span>
            </div>
            <div>
              <Icon name="users" />
              <span>Supplier Portal</span>
            </div>
            <div>
              <Icon name="scan" />
              <span>Passport Viewer</span>
            </div>
          </div>
          <div className={styles.flowArrowDown}>↓</div>
          <div className={styles.flowDestinations}>
            <div>EU DPP Registry</div>
            <div>Public / Restricted Viewer</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Reasons() {
  return (
    <section className={`${styles.section} ${styles.whiteSection}`}>
      <Container>
        <SectionIntro
          eyebrow="WHY MYSTORY PASSPORT"
          title="選ばれる理由"
          body="規制対応を、巨大なシステム刷新ではなく、現場データから始められる形に。"
          center
        />
        <div className={styles.reasonStack}>
          {[
            [
              "01",
              "Excel First",
              "既存運用を活かしながら、まずはExcel / CSVから開始。大規模な入れ替えを前提にしません。",
            ],
            [
              "02",
              "Data Mapping",
              "自社項目とDPP属性を対応付け、不足・重複・形式違いを見える化します。",
            ],
            [
              "03",
              "Supplier Ready",
              "自社だけでは完結しない情報収集を、依頼・回収・証憑管理まで一つの流れにします。",
            ],
          ].map(([n, t, b]) => (
            <div className={styles.reasonCircle} key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductPreview() {
  return (
    <section className={`${styles.section} ${styles.darkSection}`}>
      <Container>
        <div className={styles.productGrid}>
          <div>
            <p className={styles.eyebrowLight}>PRODUCT EXPERIENCE</p>
            <h2>何が足りないかが、ひと目で分かる。</h2>
            <p className={styles.darkLead}>
              日常業務で見るべきなのは「綺麗なPassport画面」だけではありません。誰のデータが不足し、どの項目が未対応で、何を直せばReadyになるかです。
            </p>
            <ul className={styles.darkList}>
              <li>Readiness Score</li>
              <li>不足データ・形式エラー</li>
              <li>Supplier回答状況</li>
              <li>更新履歴・Registry状態</li>
            </ul>
          </div>
          <div className={styles.productMock}>
            <div className={styles.productMockTop}>
              <div>
                <small>BX-000345</small>
                <strong>Battery Passport Readiness</strong>
              </div>
              <span>87%</span>
            </div>
            <div className={styles.progressBar}>
              <i style={{ width: "87%" }} />
            </div>
            {[
              ["Identification", "Ready", "ok"],
              ["Carbon Footprint", "Ready", "ok"],
              ["Recycled Content", "1 missing", "warn"],
              ["Supplier Data", "2 pending", "warn"],
              ["Performance", "Ready", "ok"],
            ].map(([a, b, c]) => (
              <div className={styles.productStatusRow} key={a}>
                <span>{a}</span>
                <b className={c === "ok" ? styles.okPill : styles.warnPill}>
                  {b}
                </b>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Industries() {
  return (
    <section
      className={`${styles.section} ${styles.softSection}`}
      id="industries"
    >
      <Container>
        <SectionIntro
          eyebrow="INDUSTRIES"
          title="こんな企業・業界に"
          body="Battery Passportの対象企業だけでなく、そのデータを支えるサプライヤー側にも対応業務が発生します。"
          center
        />
        <div className={styles.industryGrid}>
          {industryCards.map((card) => (
            <article className={styles.industryCard} key={card.title}>
              <div className={styles.industryVisual}>
                <Icon name={card.icon} size={52} />
              </div>
              <div className={styles.industryBody}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className={styles.riskBox}>
                  <strong>特に整理したい項目</strong>
                  <ul>
                    {card.risks.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Recommend() {
  const items = [
    ["EU向け製品がある", "対象バッテリーの市場投入・使用開始を予定している"],
    [
      "データが分散している",
      "ERP・PLM・Excel・部門別ファイルに情報が分かれている",
    ],
    ["Supplier依存が大きい", "原材料・再生材・証憑の回収に社外調整が必要"],
  ];
  return (
    <section className={`${styles.section} ${styles.whiteSection}`}>
      <Container>
        <SectionIntro eyebrow="FIT" title="こんな企業におすすめ" center />
        <div className={styles.recommendGrid}>
          {items.map(([title, body], i) => (
            <div className={styles.recommendCard} key={title}>
              <span>0{i + 1}</span>
              <div className={styles.recommendIcon}>
                <Icon
                  name={i === 0 ? "battery" : i === 1 ? "database" : "link"}
                  size={42}
                />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
              <div className={styles.reasonLabel}>選定理由</div>
              <b>
                {i === 0
                  ? "2027年対応に向け、早期のデータ整備が必要"
                  : i === 1
                    ? "規制項目との突合・更新運用が属人化しやすい"
                    : "自社だけではPassportを完成できない"}
              </b>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className={`${styles.section} ${styles.softSection}`}>
      <Container>
        <SectionIntro
          eyebrow="SERVICES"
          title="提供サービス"
          body="診断だけでも、PoCからでも。現在地に合わせて必要な範囲から開始できます。"
          center
        />
        <div className={styles.serviceGrid}>
          {services.map((s) => (
            <article className={styles.serviceCard} key={s.no}>
              <span className={styles.serviceNo}>{s.no}</span>
              <div className={styles.serviceIcon}>
                <Icon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Comparison() {
  const rows = [
    [
      "開始しやすさ",
      "個別整理が必要",
      "要件定義・開発が先行",
      "Excelから段階導入",
    ],
    ["規制項目とのMapping", "手作業", "個別実装", "標準機能として管理"],
    ["Supplier情報回収", "メール・Excel", "別途開発", "Portalで一元管理"],
    ["更新運用", "属人化しやすい", "保守契約に依存", "継続運用を前提"],
    ["スケール", "製品増で負荷増", "追加開発が発生", "データ・設定で拡張"],
  ];
  return (
    <section className={`${styles.section} ${styles.whiteSection}`}>
      <Container>
        <SectionIntro
          eyebrow="COMPARE"
          title="従来対応との違い"
          body="“一度作る”ではなく、“更新し続ける”ことを前提にした運用設計です。"
          center
        />
        <div className={styles.compareWrap}>
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th></th>
                <th>手作業</th>
                <th>個別SI開発</th>
                <th className={styles.highlightCol}>MyStory Passport</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]}>
                  {r.map((c, i) => (
                    <td key={i} className={i === 3 ? styles.highlightCol : ""}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

function Deliverables() {
  const list = [
    "現状対応度・診断概要",
    "不足データ一覧",
    "DPP属性Mapping表",
    "Supplier依存項目一覧",
    "導入優先度・対応ロードマップ",
    "PoC対象・次フェーズ提案",
  ];
  return (
    <section className={`${styles.section} ${styles.softSection}`}>
      <Container>
        <div className={styles.deliverableGrid}>
          <div>
            <SectionIntro
              eyebrow="OUTPUT"
              title="無料診断・PoCで確認できること"
              body="規制解説だけで終わらず、御社の現状データに照らして“次に何をすべきか”まで整理します。"
            />
            <div className={styles.checkRows}>
              {list.map((x) => (
                <div key={x}>
                  <Icon name="check" size={20} />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
          <ReportMock />
        </div>
      </Container>
    </section>
  );
}

function ReportMock() {
  return (
    <div className={styles.reportMock}>
      <div className={styles.reportCover}>
        <span>MyStory Passport</span>
        <strong>
          Battery Passport
          <br />
          Readiness Report
        </strong>
        <small>Sample / ABC Battery Co.</small>
      </div>
      <div className={styles.reportSheet}>
        <div className={styles.reportSheetHead}>
          <span>Overall readiness</span>
          <strong>68%</strong>
        </div>
        <div className={styles.reportMiniBars}>
          {[
            ["Identity", 95],
            ["Carbon", 72],
            ["Supplier", 46],
            ["Circularity", 58],
          ].map(([x, v]) => (
            <div key={String(x)}>
              <span>{x}</span>
              <i>
                <b style={{ width: `${v}%` }} />
              </i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Process() {
  const steps = [
    ["01", "無料相談", "対象製品・現在の対応状況を30分程度で確認します。"],
    ["02", "簡易診断", "データ保有状況・不足・Supplier依存を整理します。"],
    ["03", "PoC", "限定製品でMapping・Passport生成・運用を検証します。"],
    ["04", "本番導入", "必要な連携を追加し、継続運用へ移行します。"],
  ];
  return (
    <section className={`${styles.section} ${styles.whiteSection}`}>
      <Container>
        <SectionIntro
          eyebrow="PROCESS"
          title="導入までの流れ"
          body="最初から全社システムを作り替えず、小さく検証してから広げます。"
          center
        />
        <div className={styles.processGrid}>
          {steps.map(([no, title, body], i) => (
            <div className={styles.processStep} key={no}>
              <div className={styles.processIcon}>
                <Icon
                  name={
                    i === 0
                      ? "users"
                      : i === 1
                        ? "file"
                        : i === 2
                          ? "grid"
                          : "shield"
                  }
                />
              </div>
              <span>{no}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              {i < steps.length - 1 && (
                <div className={styles.processArrow}>→</div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Pricing() {
  return (
    <section className={`${styles.section} ${styles.darkSection}`}>
      <Container>
        <div className={styles.priceLayout}>
          <div>
            <p className={styles.eyebrowLight}>POC PLAN</p>
            <h2>
              本格導入前に、
              <br />
              小さく検証できます。
            </h2>
            <p className={styles.darkLead}>
              まずは最大100
              Batteries程度のPoCから。データMapping、Passport生成、readiness評価を通じて、御社固有の難所を確認します。
            </p>
          </div>
          <div className={styles.priceCard}>
            <span>PoC</span>
            <div className={styles.priceValue}>
              <strong>50</strong>
              <b>万円〜</b>
            </div>
            <ul>
              <li>最大100 Batteries</li>
              <li>Excel / CSV Data Mapping</li>
              <li>Readiness評価</li>
              <li>Passport Preview</li>
              <li>課題レポート</li>
            </ul>
            <PrimaryButton>PoCについて相談する</PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  return (
    <section className={`${styles.section} ${styles.whiteSection}`} id="faq">
      <Container>
        <SectionIntro eyebrow="FAQ" title="よくあるご質問" center />
        <div className={styles.faqList}>
          {faq.map(([q, a]) => (
            <details key={q} className={styles.faqItem}>
              <summary>
                <span>{q}</span>
                <b>＋</b>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className={styles.finalCta}>
      <Container>
        <div className={styles.finalInner}>
          <p className={styles.kickerLight}>GET READY FOR 2027</p>
          <h2>2027年2月18日の対応を、今から。</h2>
          <p>
            まずは、貴社のBattery Passport対応状況とデータ課題を整理しませんか。
          </p>
          <div className={styles.ctaBubble}>30分程度・オンライン</div>
          <PrimaryButton>無料で対応状況を相談する</PrimaryButton>
          <small>システム導入を前提としない相談も可能です。</small>
        </div>
      </Container>
    </section>
  );
}

export default function BatteryPassportLandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <RegulationStrip />
      <WhyNow />
      <Solution />
      <Reasons />
      <ProductPreview />
      <Industries />
      <Recommend />
      <Services />
      <Comparison />
      <Deliverables />
      <Process />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
