import styles from "./index.module.css";
import Image from "next/image";
import ButtonLink from "../ButtonLink";

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.title}>
        <h2>Service</h2>
        <p>事業内容</p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image
            src="/photo_service_image1.png"
            alt="データ分析コンサルティング"
            width={350}
            height={220}
            className={styles.image}
          />
          <h3>
            データ分析
            <br />
            コンサルティング
          </h3>
          <p>
            マーケティングPDCAに
            <br />
            対応した各種分析に対応
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src="/photo_service_image2.png"
            alt="ブロックチェーン開発"
            width={350}
            height={220}
            className={styles.image}
          />
          <h3>ブロックチェーン開発</h3>
          <p>
            ブロックチェーン技術を活用し、ポイント制度やトークンエコノミー構築を支援
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src="/photo_service_image2.png"
            alt="デジタルメディアの運営"
            width={350}
            height={220}
            className={styles.image}
          />
          <h3>デジタルメディアの運営</h3>
          <p>
            スポーツアナリティクスに
            <br />
            特化した情報アプリを開発
            <br />
            ＜プロダクト開発中＞
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src="/photo_service_image4.jpg"
            alt="ウエルネス関連のサービス開発"
            width={350}
            height={220}
            className={styles.image}
          />
          <h3>
            ウエルネス関連の
            <br />
            サービス開発
          </h3>
          <p>
            理学療法士と業務提携し、
            <br />
            健康関連サービスを開発 ＜プロダクト開発中＞
          </p>
        </div>
      </div>
      <div className={styles.button}>
        <ButtonLink href="/services">詳細を見る</ButtonLink>
      </div>
    </section>
  );
}
