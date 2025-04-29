"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

type Button = {
  href: string;
  text: string;
  iconSrc?: string;
};

type Props = {
  buttons: Button[];
};

export default function SidebarButton({ buttons }: Props) {
  return (
    <div className={styles.sidebarButtonArea}>
      {buttons.map((btn, index) => (
        <Link key={index} href={btn.href} className={styles.sidebarButton}>
          {btn.iconSrc && (
            <Image
              src={btn.iconSrc}
              alt=""
              width={20}
              height={20}
              className={styles.icon}
            />
          )}
          <span>{btn.text}</span>
        </Link>
      ))}
    </div>
  );
}
