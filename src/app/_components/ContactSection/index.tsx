import styles from "./index.module.css";
import ButtonLinkWhite from "../ButtonLinkWhite";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.title}>
        <h2>Contact</h2>
        <p>以下のフォームよりお問い合わせください</p>
      </div>
      <div className={styles.button}>
        <ButtonLinkWhite href="/contact">お問い合わせフォーム</ButtonLinkWhite>
      </div>
    </section>
  );
}
