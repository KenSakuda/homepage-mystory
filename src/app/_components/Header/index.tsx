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

        <nav className={styles.mainNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <span className={styles.navTrigger}>サービス</span>

              <div
                className={`${styles.dropdownMenu} ${styles.serviceDropdown}`}
              >
                <div className={styles.serviceGrid}>
                  <div className={styles.serviceGroup}>
                    <div className={styles.serviceGroupIcon}>D</div>
                    <div className={styles.serviceGroupBody}>
                      <p className={styles.serviceGroupTitle}>
                        データ分析コンサルティング事業
                      </p>
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
                  </div>

                  <div className={styles.serviceGroup}>
                    <div className={styles.serviceGroupIcon}>H</div>
                    <div className={styles.serviceGroupBody}>
                      <p className={styles.serviceGroupTitle}>
                        人事コンサルティング事業
                      </p>
                      <ul>
                        <li>
                          <Link href="/hr-consulting">
                            人事・組織領域に関するコンサルティング
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.serviceGroup}>
                    <div className={styles.serviceGroupIcon}>M</div>
                    <div className={styles.serviceGroupBody}>
                      <p className={styles.serviceGroupTitle}>
                        デジタルメディア事業
                      </p>
                      <ul>
                        <li>
                          <Link href="/media">
                            スポーツニュースサイト『Deep Sports』
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.serviceGroup}>
                    <div className={styles.serviceGroupIcon}>F</div>
                    <div className={styles.serviceGroupBody}>
                      <p className={styles.serviceGroupTitle}>ヘルスケア事業</p>
                      <ul>
                        <li>
                          <Link href="/healthcare">
                            ヘルスケア関連アプリ『Story Fit』
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.serviceGroup}>
                    <div className={styles.serviceGroupIcon}>B</div>
                    <div className={styles.serviceGroupBody}>
                      <p className={styles.serviceGroupTitle}>
                        ブロックチェーン事業
                      </p>
                      <ul>
                        <li>
                          <Link href="/blockchain/membership-nft">
                            会員証NFT・デジタル会員権 開発
                          </Link>
                        </li>
                        <li>
                          <Link href="/blockchain/token-loyalty">
                            トークンでポイント制度・ロイヤルティ構築
                          </Link>
                        </li>
                        <li>
                          <Link href="/blockchain/smart-contract-development">
                            スマートコントラクト受託開発
                          </Link>
                        </li>
                        <li>
                          <Link href="/blockchain/dao-governance">
                            DAO/コミュニティ運営基盤 構築
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className={styles.navItem}>
              <span className={styles.navTrigger}>MyStoryの特徴・実績</span>

              <div className={styles.dropdownMenu}>
                <ul className={styles.simpleDropdownList}>
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
              <Link href="/movie" className={styles.navTrigger}>
                動画コンテンツ
              </Link>
            </li>

            <li className={styles.navItem}>
              <span className={styles.navTrigger}>公開データ・資料</span>

              <div className={styles.dropdownMenu}>
                <ul className={styles.simpleDropdownList}>
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
              <Link href="/column" className={styles.navTrigger}>
                コラム
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.hamburger}>
          <HamburgerButton open={menuOpen} setOpen={setMenuOpen} />
        </div>
      </div>

      {menuOpen && <MobileMenu setOpen={setMenuOpen} />}
    </header>
  );
}
