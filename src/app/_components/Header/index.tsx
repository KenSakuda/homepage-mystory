"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topLinks}>
          <Link href="/recruit">採用情報</Link>
          <Link href="/news">お知らせ</Link>
          <Link href="/company">会社概要</Link>
        </div>
        <div className={styles.topContact}>
          問い合わせ: contact@b-mystory.com
        </div>
      </div>
      {/* ロゴ＋ナビ */}
      <div className={styles.logoNav}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo_mystory.jpg"
            alt="MyStory"
            width={200}
            height={40}
            priority
          />
        </Link>
        {/* PCメインナビゲーション */}
        <nav className={styles.mainNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <span>サービス</span>
              <div className={`${styles.dropdownMenu} ${styles.wideDropdown}`}>
                <div className={styles.dropdownRow}>
                  <div>
                    <p>データ分析コンサルティング事業</p>
                    <ul>
                      <li>
                        <Link href="/analytics/consulting">
                          受託分析・データ利活用支援
                        </Link>
                      </li>
                      <li>
                        <Link href="/analytics/tools">
                          データ分析ツールの提供
                        </Link>
                      </li>
                      <li>
                        <Link href="/analytics/research">
                          リサーチアドバイザー
                        </Link>
                      </li>
                      <li>
                        <Link href="/analytics/pricing">
                          プライシングサービス
                        </Link>
                      </li>
                      <li>
                        <Link href="/analytics/share-prediction">
                          マーケットシェア推定サービス
                        </Link>
                      </li>
                      <li>
                        <Link href="/analytics/people-analytics">
                          ピープルアナリティクスサービス
                        </Link>
                      </li>
                      <li>
                        <Link href="/analytics/image-recognition">
                          画像・動画認識サービス
                        </Link>
                      </li>
                      <li>
                        <Link href="/analytics/ai-agent">
                          AIエージェントの開発
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>デジタルメディア事業</p>
                    <ul>
                      <li>
                        <Link href="/media">
                          スポーツニュースサイト『Deep Sports』
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>ヘルスケア事業</p>
                    <ul>
                      <li>
                        <Link href="/healthcare">
                          ヘルスケア関連アプリ『Story Fit』
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>ブロックチェーン事業</p>
                    <ul>
                      <li>
                        <Link href="/blockchain">
                          ポイントサービス『@Point』
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.navItem}>
              <span>MyStoryの特徴・実績</span>
              <div className={styles.dropdownMenu}>
                <ul>
                  <li>
                    <Link href="/strength">MyStoryの強み</Link>
                  </li>
                  <li>
                    <Link href="/case-studies">分析事例集</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={styles.navItem}>
              <Link href="/movie">動画コンテンツ</Link>
            </li>
            <li className={styles.navItem}>
              <span>公開データ・資料</span>
              <div className={styles.dropdownMenu}>
                <ul>
                  <li>
                    <Link href="/whitepaper">お役立ち資料</Link>
                  </li>
                  <li>
                    <Link href="/analytics-data">分析データ</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={styles.navItem}>
              <Link href="/column">コラム</Link>
            </li>
          </ul>
        </nav>
        {/* ハンバーガーボタン（スマホ表示用） */}
        <div className={styles.hamburger}>
          <HamburgerButton open={menuOpen} setOpen={setMenuOpen} />
        </div>
      </div>
      {/* モバイル用メニュー */}
      {menuOpen && <MobileMenu setOpen={setMenuOpen} />}
    </header>
  );
}
