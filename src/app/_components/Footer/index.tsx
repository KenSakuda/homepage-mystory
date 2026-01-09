import styles from "./index.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/company">会社概要</Link>
          </li>
          <li className={styles.item}>
            <Link href="/news">お知らせ</Link>
          </li>
          <li className={styles.item}>
            <Link href="/recruit">採用情報</Link>
          </li>
          <li className={styles.item}>
            <Link href="/privacypolicy">プライバシーポリシー</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© 2026 MyStory Inc. All Rights Reserved.</p>
    </footer>
  );
}
