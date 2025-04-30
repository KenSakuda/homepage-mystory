import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/app/_components/ButtonLink";
export const metadata = {
  title: "会社概要",
};
export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>会社概要</h1>
      </div>
      <div className={styles.breadcrumb}>
        <span>
          <Link href="/">TOPページ</Link>
        </span>{" "}
        &gt; <span className={styles.current}>会社概要</span>
      </div>
      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>MyStoryの特徴</h2>
        {/* スマホ表示時のロゴ */}
        <div className={styles.logoTop}>
          <Image
            src="/mystory_logo_fix-03.jpg"
            alt="MyStoryロゴ"
            width={140}
            height={95}
            priority
          />
        </div>
        <section className={styles.features}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>実績</h3>
              <p>
                2021年の創業以来、データ分析やブロックチェーンなど先端技術に関する専門性をもとに、多くのお客様企業のマーケティング支援をしてきました。一般消費財メーカー、金融機関、電力会社など幅広い業界の支援実績があります。
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>規模</h3>
              <p>
                専門性の高いデータサイエンティストが9名在籍しております。また多くの企業とパートナー契約を交わしており、チームを組成してリサーチやコンサルティング、開発など様々な案件に対応可能です。
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>得意分野</h3>
              <p>
                データ分析、機械学習全般対応可能ですが、特に『プライシング』、『スポーツアナリティクス』、『計量経済学分析』、『ピープルアナリティクス』に強みを持っております。
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>加盟団体</h3>
              <p>
                日本消費者行動研究学会、日本行動計量学会、日本統計学会
                スポーツデータサイエンス分科会に加盟しております。
              </p>
            </div>
            {/* PCのみ表示 */}
            <div className={styles.logoCenter}>
              <Image
                src="/mystory_logo_fix-03.jpg"
                alt="MyStoryロゴ"
                width={140}
                height={95}
                priority
              />
            </div>
          </div>
        </section>
        <div className={styles.buttonWrapper}>
          <ButtonLink href="/feature/strength">MyStoryの強みを知る</ButtonLink>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>企業情報</h2>
        <dl className={styles.infoTable}>
          <div>
            <dt>会社名</dt>
            <dd>株式会社MyStory（マイストーリー）</dd>
          </div>
          <div>
            <dt>所在地</dt>
            <dd>東京都港区南青山二丁目2番15号 ウィン青山942</dd>
          </div>
          <div>
            <dt>代表者</dt>
            <dd>代表取締役　作田 健</dd>
          </div>
          <div>
            <dt>事業内容</dt>
            <dd>
              ・データ分析コンサルティング
              <br />
              <br />
              ・データ分析ツールの開発、並びに販売
              <br />
              <br />
              ・スポーツニュースサイト「Deep Sports」の運営
              <br />
              <br />
              ・自社開発ブロックチェーン型ポイントサービスの運営、並びにNFTマーケットプレイスの開発
              <br />
              <br />
              ・ヘルスケア関連アプリの企画・開発
            </dd>
          </div>
          <div>
            <dt>創業</dt>
            <dd>2021年10月</dd>
          </div>
          <div>
            <dt>従事者数</dt>
            <dd>9名 ※正社員以外も含む</dd>
          </div>
          <div>
            <dt>資本金</dt>
            <dd>300万円</dd>
          </div>
          <div>
            <dt>加盟学会</dt>
            <dd>
              日本行動計量学会、日本消費者行動研究学会、日本統計学会
              スポーツデータサイエンス分科会
            </dd>
          </div>
          <div>
            <dt>
              プライバシー
              <br />
              ポリシー
            </dt>
            <dd>
              <Link href="/privacypolicy">プライバシーポリシーを見る</Link>
            </dd>
          </div>
        </dl>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>ミッション</h2>
        <p className={styles.text}>
          私たちは先端技術やテクノロジーの力を活用して、社会を「ちょっと便利に」、「ちょっと楽しく」することを使命に活動しています。
          <br />
          そのために、リテラシーの高い人・組織のみを対象顧客とするのではなく、社会のあらゆる人にあまねくご活用いただけるようなサービスを開発・提供できるよう日々取り組んでおります。
          難しいことをなるべくわかりやすく伝え、高機能なものをなるべく使いやすく提供できる会社を目指します。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>MyStory行動規範</h2>
        <p className={styles.text}>
          本行動規範は、MyStoryMyStoryのすべての役職員（役員、正社員、契約社員、パート・アルバイト・インターン、嘱託社員、派遣社員および出向社員を含み、以下同様とする。）が、企業活動を通じて果たすべき社会的責務をよく自覚し、日常の業務遂行において守るべき理念を定めています。
        </p>
        <div className={styles.guidelineButton}>
          <ButtonLink href="/company/code-of-conduct">
            MyStory行動規範詳細
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
