"use client";

import { useState } from "react";
import styles from "./page.module.css";

type IconName =
  | "forecast"
  | "aggregate"
  | "decide"
  | "learn"
  | "venture"
  | "rd"
  | "product"
  | "strategy"
  | "check"
  | "arrow";

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
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
    forecast: (
      <>
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M22 19V3" />
      </>
    ),
    aggregate: (
      <>
        <circle cx="6" cy="7" r="2" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="12" cy="17" r="2" />
        <path d="M7.7 8.1 10.5 15" />
        <path d="m16.3 8.1-2.8 6.9" />
      </>
    ),
    decide: (
      <>
        <path d="M4 18 9 13l4 3 7-10" />
        <path d="M16 6h4v4" />
      </>
    ),
    learn: (
      <>
        <path d="M12 3a6 6 0 0 0-3.7 10.7V17h7.4v-3.3A6 6 0 0 0 12 3Z" />
        <path d="M9 21h6" />
      </>
    ),
    venture: (
      <>
        <path d="M5 19V8l7-4 7 4v11" />
        <path d="M9 19v-5h6v5" />
      </>
    ),
    rd: (
      <>
        <path d="M9 3v5l-5 9a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3l-5-9V3" />
        <path d="M8 13h8" />
      </>
    ),
    product: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m4 7.5 8 4.5 8-4.5" />
        <path d="M12 12v9" />
      </>
    ),
    strategy: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="m15 9 5-5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m15 8 4 4-4 4" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

const useCases = [
  {
    icon: "venture" as IconName,
    title: "新規事業",
    text: "売上目標やPMFの達成確率を継続的に予測。Go / No-Goを感覚ではなく確率と経済価値で判断します。",
    metric: "事業成功確率",
  },
  {
    icon: "rd" as IconName,
    title: "R&D・研究開発",
    text: "研究テーマや開発案件のマイルストーン達成確率を可視化し、投資配分の見直しを早期に支援します。",
    metric: "マイルストーン達成",
  },
  {
    icon: "product" as IconName,
    title: "商品開発",
    text: "発売時期、販売目標、継続率などを予測。現場が持つ情報を商品ポートフォリオの判断に反映します。",
    metric: "市場投入・販売予測",
  },
  {
    icon: "strategy" as IconName,
    title: "経営・事業戦略",
    text: "競合参入、市場変化、プロジェクト遅延などの不確実性を、共通の確率尺度で定量化します。",
    metric: "戦略リスク",
  },
];

const steps = [
  {
    number: "01",
    title: "Forecast",
    jp: "予測する",
    icon: "forecast" as IconName,
    text: "意思決定に必要な問いを、結果を検証できる予測問題へ分解。社員・専門家・AIが確率で回答します。",
  },
  {
    number: "02",
    title: "Aggregate",
    jp: "統合する",
    icon: "aggregate" as IconName,
    text: "単純平均ではなく、過去の予測精度やCalibrationなどを考慮し、複数の予測を統計的に統合します。",
  },
  {
    number: "03",
    title: "Decide",
    jp: "意思決定する",
    icon: "decide" as IconName,
    text: "成功確率だけで終わらせず、Expected ValueやValue of Informationを使って選択肢を比較します。",
  },
  {
    number: "04",
    title: "Learn",
    jp: "学習する",
    icon: "learn" as IconName,
    text: "結果確定後に予測精度とバイアスを評価。組織が「どの領域で判断を誤りやすいか」を学習します。",
  },
];

export default function DecisionIntelligencePage() {
  const [probability, setProbability] = useState(62);

  return (
    <main className={styles.page}>
      {/* Header */}

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>
                DECISION INTELLIGENCE PLATFORM
              </div>

              <h1>
                会議で決める前に、
                <br />
                <span>確率で考える。</span>
              </h1>

              <p className={styles.heroLead}>
                社員・専門家・AIが持つ知識を確率として引き出し、
                統計的に統合。新規事業やR&Dの不確実な意思決定を、
                「誰がそう思うか」から「どれくらい起こりそうか」へ変えます。
              </p>

              <div className={styles.heroActions}>
                <a href="#contact" className={styles.primaryButton}>
                  PoCについて相談する
                  <Icon name="arrow" size={18} />
                </a>
                <a href="#how" className={styles.secondaryButton}>
                  仕組みを見る
                </a>
              </div>

              <div className={styles.heroNotes}>
                <span>
                  <Icon name="check" size={16} />
                  新規事業
                </span>
                <span>
                  <Icon name="check" size={16} />
                  R&D
                </span>
                <span>
                  <Icon name="check" size={16} />
                  商品開発
                </span>
                <span>
                  <Icon name="check" size={16} />
                  経営判断
                </span>
              </div>
            </div>

            {/* Product mockup */}
            <div className={styles.productShell}>
              <div className={styles.mockTop}>
                <div>
                  <span className={styles.mockLabel}>LIVE FORECAST</span>
                  <h3>生成AI新規事業</h3>
                </div>
                <span className={styles.liveBadge}>OPEN</span>
              </div>

              <p className={styles.question}>
                新サービスは2027年3月までに
                <strong>月商3,000万円</strong>を達成するか？
              </p>

              <div className={styles.forecastRow}>
                <div>
                  <span className={styles.smallLabel}>YOUR FORECAST</span>
                  <strong className={styles.bigProbability}>
                    {probability}%
                  </strong>
                </div>

                <div className={styles.consensus}>
                  <span>CONSENSUS</span>
                  <strong>44%</strong>
                </div>
              </div>

              <input
                className={styles.range}
                type="range"
                min="1"
                max="99"
                value={probability}
                onChange={(e) => setProbability(Number(e.target.value))}
                aria-label="予測確率"
              />

              <div className={styles.rangeLabels}>
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>

              <div className={styles.sourceGrid}>
                <div>
                  <span>Human</span>
                  <strong>51%</strong>
                </div>
                <div>
                  <span>AI</span>
                  <strong>42%</strong>
                </div>
                <div>
                  <span>Base Rate</span>
                  <strong>31%</strong>
                </div>
              </div>

              <div className={styles.mockDecision}>
                <div>
                  <span>DECISION SIGNAL</span>
                  <strong>PoCで追加情報を取得</strong>
                </div>
                <div className={styles.valueChip}>VoI +¥18M</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="concept" className={styles.problem}>
        <div className={styles.narrow}>
          <span className={styles.sectionLabel}>THE PROBLEM</span>
          <h2>
            重要な意思決定ほど、
            <br />
            <span>「声の大きさ」</span>に左右されていないでしょうか。
          </h2>

          <p className={styles.centerLead}>
            経験豊富な役員。現場に近い担当者。市場を分析する専門家。
            それぞれが重要な情報を持っています。しかし会議では、それらが
            「意見」として語られ、精度を後から検証することもほとんどありません。
          </p>
        </div>

        <div className={styles.container}>
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <span>01</span>
              <h3>Expert Bias</h3>
              <p>
                経験豊富な人でも、楽観バイアス、過信、アンカリングから完全には逃れられません。
              </p>
            </div>

            <div className={styles.problemCard}>
              <span>02</span>
              <h3>Hidden Information</h3>
              <p>
                顧客や開発現場に近い人が持つ重要な情報が、組織階層の中で埋もれてしまいます。
              </p>
            </div>

            <div className={styles.problemCard}>
              <span>03</span>
              <h3>No Feedback Loop</h3>
              <p>
                「誰の判断が正しかったか」を測定しないため、組織の予測能力が蓄積されません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how" className={styles.how}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.sectionLabel}>HOW IT WORKS</span>
              <h2>
                予測して終わらない。
                <br />
                <span>意思決定までつなげる。</span>
              </h2>
            </div>
            <p>
              Decision Intelligence Platformは、未来を当てるためだけの
              予測ツールではありません。不確実性を定量化し、
              その不確実性のもとで何をすべきかまで分析します。
            </p>
          </div>

          <div className={styles.steps}>
            {steps.map((step) => (
              <article className={styles.step} key={step.number}>
                <div className={styles.stepTop}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <div className={styles.stepIcon}>
                    <Icon name={step.icon} />
                  </div>
                </div>

                <h3>{step.title}</h3>
                <span className={styles.stepJp}>{step.jp}</span>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className={styles.difference}>
        <div className={styles.container}>
          <div className={styles.differenceGrid}>
            <div>
              <span className={styles.sectionLabel}>BEYOND FORECASTING</span>
              <h2>
                「成功確率44%」
                <br />
                だけでは、
                <br />
                <span>経営判断にならない。</span>
              </h2>

              <p>
                同じ成功確率44%でも、成功時の価値、失敗時の損失、
                追加情報を得るコストによって最適な行動は変わります。
              </p>

              <ul className={styles.featureList}>
                <li>
                  <Icon name="check" size={18} />
                  Expected Value / Expected Utility
                </li>
                <li>
                  <Icon name="check" size={18} />
                  Value of Information
                </li>
                <li>
                  <Icon name="check" size={18} />
                  Scenario & Sensitivity Analysis
                </li>
                <li>
                  <Icon name="check" size={18} />
                  Portfolio Optimization
                </li>
              </ul>
            </div>

            <div className={styles.decisionPanel}>
              <div className={styles.panelHeader}>
                <span>DECISION ANALYSIS</span>
                <strong>生成AI新規事業</strong>
              </div>

              <div className={styles.optionHeader}>
                <span>選択肢</span>
                <span>Expected Value</span>
              </div>

              <div className={styles.optionRow}>
                <div>
                  <strong>本格投資</strong>
                  <span>成功確率 44%</span>
                </div>
                <strong>+ ¥180M</strong>
              </div>

              <div className={`${styles.optionRow} ${styles.recommended}`}>
                <div>
                  <div className={styles.recLabel}>RECOMMENDED</div>
                  <strong>PoCを実施</strong>
                  <span>追加情報を取得して再判断</span>
                </div>
                <strong>+ ¥240M</strong>
              </div>

              <div className={styles.optionRow}>
                <div>
                  <strong>延期</strong>
                  <span>3か月後に再評価</span>
                </div>
                <strong>+ ¥90M</strong>
              </div>

              <div className={styles.optionRow}>
                <div>
                  <strong>中止</strong>
                  <span>追加投資なし</span>
                </div>
                <strong>¥0</strong>
              </div>

              <div className={styles.voi}>
                <span>VALUE OF INFORMATION</span>
                <strong>PoCによる追加情報価値：+ ¥18M</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human + AI */}
      <section className={styles.ensemble}>
        <div className={styles.container}>
          <div className={styles.ensembleBox}>
            <div className={styles.ensembleText}>
              <span className={styles.sectionLabel}>
                HUMAN × AI × STATISTICS
              </span>
              <h2>人間かAIか、ではない。</h2>
              <p>
                現場の暗黙知を持つ人間、外部情報を継続的に処理するAI、
                過去データから得られるBase Rate。
                独立した複数の予測シグナルを統合することで、
                一つの意見への依存を減らします。
              </p>
            </div>

            <div className={styles.ensembleDiagram}>
              <div className={styles.signal}>
                <span>HUMAN</span>
                <strong>51%</strong>
                <small>現場・専門家</small>
              </div>

              <span className={styles.plus}>+</span>

              <div className={styles.signal}>
                <span>AI</span>
                <strong>42%</strong>
                <small>継続的情報収集</small>
              </div>

              <span className={styles.plus}>+</span>

              <div className={styles.signal}>
                <span>DATA</span>
                <strong>31%</strong>
                <small>Base Rate</small>
              </div>

              <span className={styles.equals}>=</span>

              <div className={styles.finalSignal}>
                <span>CONSENSUS</span>
                <strong>44%</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="usecases" className={styles.useCases}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.sectionLabel}>USE CASES</span>
            <h2>不確実性の大きい意思決定に。</h2>
            <p>
              特に「結果が出るまで時間がかかる」「複数の専門家が異なる情報を持つ」
              「失敗コストが大きい」意思決定で力を発揮します。
            </p>
          </div>

          <div className={styles.useCaseGrid}>
            {useCases.map((item) => (
              <article key={item.title} className={styles.useCaseCard}>
                <div className={styles.useIcon}>
                  <Icon name={item.icon} />
                </div>
                <span className={styles.metric}>{item.metric}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className={styles.cardArrow}>→</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning / bias */}
      <section id="science" className={styles.learning}>
        <div className={styles.container}>
          <div className={styles.learningGrid}>
            <div className={styles.biasPanel}>
              <div className={styles.biasTop}>
                <div>
                  <span>ORGANIZATIONAL LEARNING</span>
                  <strong>予測特性分析</strong>
                </div>
                <span className={styles.period}>Last 12 months</span>
              </div>

              <div className={styles.biasStat}>
                <span>営業部</span>
                <div className={styles.biasBar}>
                  <i style={{ width: "72%" }} />
                </div>
                <strong>+11pt</strong>
              </div>
              <small className={styles.biasDescription}>
                売上・顧客獲得について楽観方向
              </small>

              <div className={styles.biasStat}>
                <span>開発部</span>
                <div className={styles.biasBar}>
                  <i style={{ width: "84%" }} />
                </div>
                <strong>+18pt</strong>
              </div>
              <small className={styles.biasDescription}>
                納期達成について楽観方向
              </small>

              <div className={styles.biasStat}>
                <span>マーケ</span>
                <div className={styles.biasBar}>
                  <i style={{ width: "34%" }} />
                </div>
                <strong>+3pt</strong>
              </div>
              <small className={styles.biasDescription}>
                市場予測のCalibrationは良好
              </small>

              <div className={styles.scoreCards}>
                <div>
                  <span>BRIER SCORE</span>
                  <strong>0.18</strong>
                </div>
                <div>
                  <span>FORECASTS</span>
                  <strong>248</strong>
                </div>
                <div>
                  <span>CALIBRATION</span>
                  <strong>Good</strong>
                </div>
              </div>
            </div>

            <div className={styles.learningCopy}>
              <span className={styles.sectionLabel}>
                ORGANIZATIONAL LEARNING
              </span>
              <h2>
                意思決定の結果を、
                <br />
                <span>組織の知識に変える。</span>
              </h2>

              <p>
                予測と実績を蓄積すると、「誰が、どの領域について、
                どのような判断傾向を持つか」が見えてきます。
              </p>

              <p>
                Decision Intelligence Platformは、個人や部署の
                Calibration、Brier Score、予測バイアスを継続的に分析。
                組織固有の意思決定特性をデータ資産として蓄積します。
              </p>

              <div className={styles.scienceTags}>
                <span>Bayesian Statistics</span>
                <span>Calibration</span>
                <span>Brier Score</span>
                <span>Decision Theory</span>
                <span>Causal Inference</span>
                <span>Behavioral Economics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className={styles.comparison}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.sectionLabel}>
              FROM OPINION TO EVIDENCE
            </span>
            <h2>従来の会議から、学習する意思決定へ。</h2>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th></th>
                  <th>従来の意思決定</th>
                  <th>Decision Intelligence Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>入力</td>
                  <td>意見・印象</td>
                  <td>検証可能な確率予測</td>
                </tr>
                <tr>
                  <td>情報集約</td>
                  <td>会議・多数決</td>
                  <td>統計的Aggregation</td>
                </tr>
                <tr>
                  <td>AI</td>
                  <td>参考情報として利用</td>
                  <td>独立したForecasterとして評価・統合</td>
                </tr>
                <tr>
                  <td>判断</td>
                  <td>経験・合議</td>
                  <td>Expected Value / Utility</td>
                </tr>
                <tr>
                  <td>結果</td>
                  <td>振り返りで終了</td>
                  <td>精度・Bias・Calibrationを蓄積</td>
                </tr>
                <tr>
                  <td>組織学習</td>
                  <td>属人的</td>
                  <td>意思決定データとして資産化</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PoC */}
      <section id="contact" className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <span className={styles.ctaEyebrow}>PROOF OF CONCEPT</span>

            <h2>
              御社の実際の新規事業で、
              <br />
              意思決定を科学してみませんか。
            </h2>

            <p>
              まずは5〜10件程度の実案件を対象に、
              予測問題の設計から社員・専門家によるForecast、
              集約・意思決定分析まで一緒に検証します。
            </p>

            <div className={styles.pocItems}>
              <span>
                <Icon name="check" size={17} />
                予測問題の設計
              </span>
              <span>
                <Icon name="check" size={17} />
                Forecast実施
              </span>
              <span>
                <Icon name="check" size={17} />
                統計的集約
              </span>
              <span>
                <Icon name="check" size={17} />
                意思決定分析
              </span>
            </div>

            <a
              href="https://www.b-mystory.com/contact"
              className={styles.ctaButton}
            >
              PoCについて問い合わせる
              <Icon name="arrow" size={19} />
            </a>

            <small>株式会社MyStory / データ分析・Decision Science</small>
          </div>
        </div>
      </section>
    </main>
  );
}
