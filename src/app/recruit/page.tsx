import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div>
      {/* 採用情報セクション */}
      <section className={styles.recruitSection}>
        <div className={styles.recruitContainer}>
          <h1 className={styles.title}>採用情報</h1>
          <div className={styles.titleSeparator}></div>
          <div className={styles.recruitCards}>
            <div className={styles.recruitCard}>
              <h2>正社員・契約社員募集</h2>
              <p>以下の領域において正社員・契約社員を募集しています</p>
              <ul>
                <li>・データ分析や機械学習モデル実装に関するプロジェクト</li>
                <li>・データ分析ツール開発</li>
                <li>
                  ・スポーツアナリティクスに特化したニュースサイト『Deep
                  Sports』に関するデータ分析業務
                </li>
              </ul>
              <p>
                <strong>求めるスキル:</strong>
              </p>
              <ul>
                <li>・自ら考え実装できる自走能力</li>
                <li>
                  ・統計学・データサイエンス・コンピュータサイエンスを学習している方
                  （最低でも統計検定2級以上、もしくはE資格に合格できる程度のリテラシーを有していることが望ましい）
                </li>
                <li>・ホスピタリティ精神を持って努力する能力</li>
                <li>
                  ・核となるプログラミング言語1つ以上に習熟しており、経験のない言語においても2週間程度で自力でキャッチアップ可能な理解力
                </li>
              </ul>
              <Link
                href="https://jp.indeed.com/cmp/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%EF%BD%8D%EF%BD%99%EF%BD%93%EF%BD%94%EF%BD%8F%EF%BD%92%EF%BD%99/jobs?jk=2c8acb0541c96e33&start=0"
                className={styles.button}
              >
                採用ページへ
              </Link>
            </div>
            <div className={styles.recruitCard}>
              <h2>副業人材募集</h2>
              <p>以下のスキルを持つ副業人材を募集しています</p>
              <ul>
                <li>
                  ・データサイエンス・機械学習を用いたデータ分析の実務経験がある方（実務経験3年以上ある方が望ましい）
                </li>
                <li>
                  ・Web3やブロックチェーン領域の知識がある方（SolidityやVyperなどのスマートコントラクト開発言語が実装でき、各種ERC仕様を理解している人材が望ましい）
                </li>
                <li>・プロダクト開発やUI/UXデザインに関するスキルがある方</li>
                <li>
                  ・Python、R、SQL、React、Next.js、TypeScript、HTML、CSSなどのプログラミング経験がある方
                </li>
              </ul>
              <Link href="/contact" className={styles.button}>
                問い合わせる
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
