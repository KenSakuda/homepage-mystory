import styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "@/app/_components/ButtonLink";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>データ利活用支援</h1>
        <p className={styles.subtitle}>
          統計学・機械学習の専門性やマーケティング・行動経済学・消費者行動理論に関する豊富な知見をもとに、お客様の保有しているデータを分析し、マーケティング課題の解決に貢献します。
        </p>
      </div>

      <div className={styles.section}>
        <h2>概要</h2>
        <p>
          お客様のご要望とデータ状況に応じて、最適な分析設計・手法をの選定を行い、見やすいアウトプットをご納品します。データの連携から、分析・ダッシュボード構築、レポーティングまで一気通貫で支援します。
        </p>
      </div>

      <div className={styles.section}>
        <h2>対応可能な分析手法</h2>
        <ul className={styles.serviceList}>
          <li>時系列予測</li>
          <li>確率分布を活用した各種推定</li>
          <li>一次遅れ系モデル</li>
          <li>クラスタリング</li>
          <li>指標開発</li>
          <li>需要曲線の推定</li>
          <li>プライシング（最適価格の算出）</li>
          <li>需要予測</li>
          <li>トピックモデル</li>
          <li>動的個人モデル</li>
          <li>統計的因果推論</li>
          <li>反実仮想機械学習</li>
          <li>レコメンドモデル</li>
          <li>レイティングモデル</li>
          <li>ベイズ推定</li>
          <li>生存時間分析</li>
          <li>マーケティングミックスモデル</li>
          <li>項目反応理論</li>
          <li>微分方程式モデル</li>
          <li>回帰モデル（ロジット/プロビット/トービット/ヘーキット）</li>
          <li>Surrogate Index</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>分析手法のイメージ</h2>
        <div className={styles.caseList}>
          <div className={styles.caseItem}>
            <h3>時系列予測</h3>
            <p>
              過去データをもとに需要KPIの将来の推移を予測。事業計画を策定する際や、施策実行時の効果検証などに活用可能。
            </p>
            <Image
              src="/analytics_solution_1.時系列予測.png"
              alt="時系列予測"
              width={400}
              height={200}
              className={styles.caseImage}
            />
          </div>
          <div className={styles.caseItem}>
            <h3>アップリフトモデリング（≒ MetaLearner）</h3>
            <p>
              「施策対象者を誰にすべきか？」に応える分析。介入を受けた際に、行動変容しやすい人を機械学習モデルで予測。
            </p>
            <Image
              src="/analytics_solution_2.アップリフトモデリング.png"
              alt="アップリフトモデリング"
              width={400}
              height={200}
              className={styles.caseImage}
            />
          </div>
          <div className={styles.caseItem}>
            <h3>傾向スコアマッチング</h3>
            <p>
              可能な限りバイアス要因を制御したうえで、明らかにしたい施策効果を検証。施策の「真の効果」を推定できる。
            </p>
            <Image
              src="/analytics_solution_3.傾向スコアマッチング.png"
              alt="傾向スコアマッチング"
              width={400}
              height={200}
              className={styles.caseImage}
            />
          </div>
          <div className={styles.caseItem}>
            <h3>マーケティングミックスモデル</h3>
            <p>
              各種広告・施策ごとの売上への貢献度を把握可能。構築したモデルをもとに、シミュレーションも可能。
            </p>
            <Image
              src="/analytics_solution_4.マーケティングミックスモデル.png"
              alt="マーケティングミックスモデル"
              width={400}
              height={200}
              className={styles.caseImage}
            />
          </div>
          <div className={styles.caseItem}>
            <h3>項目反応理論</h3>
            <p>
              回答者ごとの「回答のクセ」を補正することで、同一基準での比較が可能に。
            </p>
            <Image
              src="/analytics_solution_5.項目反応理論.png"
              alt="項目反応理論"
              width={400}
              height={200}
              className={styles.caseImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>こんなお悩みありませんか？</h2>
        <ul className={styles.problemList}>
          <li>社内にデータはたくさんあるが、活用しきれていない</li>
          <li>
            ChatGPTを活用して分析しているが、統計的に正しい分析ができているのか不安
          </li>
          <li>高度な分析をできる人材が社内にいない</li>
          <li>
            データ分析はやっているものの、マーケティング活動に上手く活用できていない
          </li>
        </ul>
      </div>

      <div className={styles.cta}>
        <p>
          課題整理やヒアリングを無料で実施しております。お気軽にご相談ください。
        </p>
        <div className={styles.buttonLink}>
          <ButtonLink href="/contact">分析について相談する</ButtonLink>
        </div>
      </div>
    </main>
  );
}
