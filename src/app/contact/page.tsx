import ContactForm from "@/app/_components/ContactForm";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お問い合わせ</h1>
      <div className={styles.titleSeparator}></div>
      <p className={styles.text}>
        各種お問い合わせは、下記のフォームに必要事項を入力し送信してください。
        <br />
        内容確認後、担当者より通常3営業日以内にご連絡いたします。
      </p>
      <ContactForm />
    </div>
  );
}
