import styles from "./index.module.css";
import Image from "next/image";
import ButtonLinkWhite from "../ButtonLinkWhite";

export default function CompanySection() {
  return (
    <section id="company" className={styles.section}>
      <div className={styles.title}>
        <h2>About Us</h2>
        <p>私たちについて</p>
      </div>
      <div className={styles.content}>
        <Image
          src="/office.png"
          alt="会社イメージ"
          width={320}
          height={240}
          className={styles.image}
        />
        <div className={styles.text}>
          <p>
            MyStoryは最新のテクノロジーを活用して、企業の成長を加速させ未来を切り拓くパートナーとして活動しています。
            <br />
            データ分析やWeb3領域に関する専門性と実績に基づいて、あらゆるマーケティングシーンに対応したコンサルティングを行います。
          </p>
        </div>
        <div className={styles.button}>
          <ButtonLinkWhite href="/company">会社概要へ</ButtonLinkWhite>
        </div>
      </div>
    </section>
  );
}
