import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo_mystory.jpg"
          alt="MyStory_logo"
          width={150}
          height={30}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}
