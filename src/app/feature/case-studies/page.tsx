import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/app/_components/ButtonLink";

export default function Page() {
  return (
    <main className={styles.container}>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>データ分析事例集</h1>
          <p className={styles.description}>
            過去に実施したデータ分析の事例や、分析概要についてご紹介いたします。
          </p>
        </div>
      </section>
      <div className={styles.breadcrumb}>
        <span>
          <Link href="/">TOPページ</Link>
        </span>{" "}
        &gt; <span className={styles.current}>データ分析事例集</span>
      </div>
      {/* カードセクション */}
      <section className={styles.cardsSection}>
        <div className={styles.cards}>
          <a href="/feature/case-study/case1" className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/dummy-images.jpg"
                alt="動的個人モデルを用いた家庭内在庫量の推定"
                width={200}
                height={150}
                className={styles.image}
              />
              <h4>動的個人モデルを用いた家庭内在庫量の推定</h4>
            </div>
            <p className={styles.cardText}>
              {/* 家庭内在庫量をID別に推定するとともに、ID別の販促感度を推定した事例をご紹介 */}
              ※準備中
            </p>
          </a>
          <a href="/feature/case-study/case2" className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/dummy-images.jpg"
                alt="ミクロ経済学モデルを活用したプライシング分析"
                width={200}
                height={150}
                className={styles.image}
              />
              <h4>ミクロ経済学モデルを活用したプライシング分析</h4>
            </div>
            <p className={styles.cardText}>※準備中</p>
          </a>
          <a href="/feature/case-study/case3" className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/dummy-images.jpg"
                alt="回帰分析を活用した要素ごとの効果量の推定"
                width={200}
                height={150}
                className={styles.image}
              />
              <h4>回帰分析を活用した要素ごとの効果量の推定</h4>
            </div>
            <p className={styles.cardText}>※準備中</p>
          </a>
        </div>
      </section>
      {/* 活用事例テーブルセクション */}
      <section className={styles.caseSection}>
        <h2 className={styles.caseHeading}>
          CASE
          <br />
          <span>活用事例</span>
        </h2>
        <div className={styles.case}>
          <h3 className={styles.caseTitle}>定期顧客の解約者数予測</h3>
          <div className={styles.caseTableWrapper}>
            <table className={styles.caseTable}>
              <tbody>
                <tr>
                  <th>分析の背景・目的</th>
                  <td>
                    消費財メーカーから、経営計画の参考のための基礎情報として、定期顧客の解約数の将来予測をしたいとご相談をいただく
                  </td>
                </tr>
                <tr>
                  <th>分析手法</th>
                  <td>時系列予測モデル</td>
                </tr>
                <tr>
                  <th>分析結果</th>
                  <td>
                    実測値と予測値の誤差が5%前後と、非常に精緻に予測することに成功
                  </td>
                </tr>
                <tr>
                  <th>分析の活用方法</th>
                  <td>
                    ・1ケ月先の短期、及び1年先の長期の予測結果をもとに経営計画立案に反映
                    <br />
                    ・施策の効果検証に活用（実測値と予測値の差分を施策効果と見なし、日別に施策効果を測れるようになった）
                  </td>
                </tr>
                <tr>
                  <th>分析のポイント</th>
                  <td>
                    ・時系列データをテーブルデータとして扱ったうえで、ブースティング系アルゴリズムで予測
                    <br />
                    ・目的変数の予測値を逐次的に特徴量として使用することで、精度向上に大きく寄与する最新のラグ特徴量を使用
                    <br />
                    ・大型連休明けは解約数の水準が大きく下がるので、評価指標として絶対値の大きさを考慮した指標を使用
                  </td>
                </tr>
                <tr>
                  <th>こんなシーンでも使える！</th>
                  <td>
                    ・新商品・既存商品の売上数の需要予測
                    <br />
                    ・プロモーション予算やメディア配分を変更した際の売上シミュレーション
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.case}>
          <h3 className={styles.caseTitle}>真の商品レーティング値の推定</h3>
          <table className={styles.caseTable}>
            <tbody>
              <tr>
                <th>分析の背景・目的</th>
                <td>
                  レビューサイト運営会社から、数多く存在する商品それぞれに妥当性のある評価値を付けたいとご相談をいただく。
                  <br />
                  人気の商品は多くのレビューや評価値の投稿がされているが、人気のない商品は数件程度の評価値しかなく、付けられた評価値をそのまま用いると件数の少ない商品が上位にきてしまうという課題があった。
                  <br />
                  （例：人気商品は1000件の評価者がいて評価値の平均3.5点、人気のない商品は評価者がわずか20人で評価値の平均4.6点となっており、単純に評価値の平均で並べ替えると人気のない商品が上位にきてしまうことが頻発した）
                </td>
              </tr>
              <tr>
                <th>分析手法</th>
                <td>ベイズ推定</td>
              </tr>
              <tr>
                <th>分析結果</th>
                <td>
                  基礎集計や仮説をもとに、適切な事前分布を設定。評価者数の少ない商品は事前分布に近しい値になるように、評価者数の多い商品は評価値の単純平均に近づくように学習させることにより、納得感のあるレーティング値の推定を実現
                </td>
              </tr>
              <tr>
                <th>分析の活用方法</th>
                <td>
                  推定したレーティング値をもとに、サイトでの表示順を並べ替え
                </td>
              </tr>
              <tr>
                <th>分析のポイント</th>
                <td>
                  評価者数による分散の大きさをもとに、ベイズ推定で推定したレーティング値に罰則係数をかけて、より確からしい評価値に補正
                </td>
              </tr>
              <tr>
                <th>こんなシーンでも使える！</th>
                <td>
                  出現率の低い現象の効果推定（例：ある施策がKPIに与えた効果を検証したいが、現状のKPIの水準が0.5%台と非常に低く、単純な検定では必要なサンプルサイズが膨大になってしまうケース）
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.case}>
          <h3 className={styles.caseTitle}>データ分析人材の育成支援</h3>
          <table className={styles.caseTable}>
            <tbody>
              <tr>
                <th>背景・目的</th>
                <td>
                  消費財メーカーから自社内でデータ分析を推進できる人材を育てたいとご相談をいただく
                </td>
              </tr>
              <tr>
                <th>ご支援内容</th>
                <td>伴走型、且つ実践型のデータ分析プロジェクトの企画・実行</td>
              </tr>
              <tr>
                <th>ご支援の結果</th>
                <td>
                  データアナリストに求められる基本的な統計学の知識、プログラミングの実装力のある人材を1年間で8名育成
                </td>
              </tr>
              <tr>
                <th>ポイント</th>
                <td>
                  技術力だけでなく、ビジネス視点を強く意識づける育成プログラムを遂行したことで、ビジネス貢献できる人材を複数名輩出することに成功
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className={styles.buttonLink}>
        <ButtonLink href="/contact">ご相談はこちら</ButtonLink>
      </div>
    </main>
  );
}
