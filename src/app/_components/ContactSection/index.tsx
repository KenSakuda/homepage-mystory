// import styles from "./index.module.css";
// import ButtonLinkWhite from "../ButtonLinkWhite";

// export default function ContactSection() {
//   return (
//     <section id="contact" className={styles.section}>
//       <div className={styles.title}>
//         <h2>Contact</h2>
//         <p>以下のフォームよりお問い合わせください</p>
//       </div>
//       <div className={styles.button}>
//         <ButtonLinkWhite href="/contact">お問い合わせフォーム</ButtonLinkWhite>
//       </div>
//     </section>
//   );
// }

import styles from "./index.module.css";
import Image from "next/image";
import ButtonLinkWhite from "../ButtonLinkWhite";

const mockupImages = [
  "/pricedecisioning.png",
  "/data_analytics_pricing_feature2.png",
  "/data_analytics_pricing_feature3.png",
  "/analytics_solution.png",
  "/analytics_solution2.png",
  "/analytics_solution3.png",
];

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>まずはお気軽にご相談ください</h2>
          </div>

          <div className={styles.listBox}>
            <ul>
              <li>・ 分析の外部委託を検討している</li>
              <li>・ 軽く相談してみたい</li>
              <li>・ 見積もりだけ欲しい</li>
            </ul>
          </div>

          <p className={styles.lead}>
            詳細が決まっていない段階でも問題ありません。
            <br />
            無料でご相談・お見積もり対応しています。
          </p>

          <div className={styles.button}>
            <ButtonLinkWhite href="/contact">無料相談する</ButtonLinkWhite>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={`${styles.mockupColumn} ${styles.columnOne}`}>
            {[...mockupImages, ...mockupImages].map((src, index) => (
              <div className={styles.mockupCard} key={`col1-${src}-${index}`}>
                <Image src={src} alt="" width={280} height={280} />
              </div>
            ))}
          </div>

          <div className={`${styles.mockupColumn} ${styles.columnTwo}`}>
            {[...mockupImages, ...mockupImages].map((src, index) => (
              <div className={styles.mockupCard} key={`col2-${src}-${index}`}>
                <Image src={src} alt="" width={280} height={280} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
