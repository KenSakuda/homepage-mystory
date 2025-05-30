"use client";

import styles from "./index.module.css";
import Image from "next/image";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function HamburgerButton({ open, setOpen }: Props) {
  return (
    <button
      className={styles.hamburgerFixedButton}
      onClick={() => setOpen(!open)}
      aria-label="メニュー"
    >
      <Image
        src={open ? "/close.svg" : "/menu.svg"}
        alt={open ? "閉じる" : "メニュー"}
        width={24}
        height={24}
      />
    </button>
  );
}
