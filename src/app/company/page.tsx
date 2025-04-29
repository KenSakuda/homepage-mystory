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
      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>MyStoryの特徴</h2>
        <div className={styles.heroImage}>
          <Image
            src="/about_mystory.png"
            alt="株式会社MyStoryの4つの特徴"
            width={1000}
            height={500}
          />
        </div>
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
