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
              <h2>インターン生募集</h2>
              <p>以下の領域において学生インターンを募集しています</p>
              <ul>
                <li>・データ分析や機械学習モデル実装に関するプロジェクト</li>
                <li>・AIやブロックチェーンに関するプロダクト開発</li>
                <li>
                  ・スポーツアナリティクスに関する情報アプリの開発・コンテンツ企画
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
                href="https://jp.indeed.com/job/%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%83%86%E3%82%A3%E3%82%B9%E3%83%88-%E3%83%87%E3%83%BC%E3%82%BF%E3%82%A2%E3%83%8A%E3%83%AA%E3%82%B9%E3%83%88%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%83%E3%83%97-93b620a0f45812d0"
                className={styles.button}
              >
                indeed採用ページへ
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
