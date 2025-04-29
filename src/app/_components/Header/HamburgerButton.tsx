"use client";

import styles from "./index.module.css";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function HamburgerButton({ open, setOpen }: Props) {
  return (
    <button
      className={styles.hamburgerButton}
      onClick={() => setOpen(!open)}
      aria-label="メニュー"
    >
      {open ? ":x_黒太字:" : "☰"}
    </button>
  );
}
