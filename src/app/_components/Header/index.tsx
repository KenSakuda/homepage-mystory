// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import styles from "./index.module.css";

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <div className={styles.topBar}>
//         <div className={styles.topLinks}>
//           <Link href="/recruit">採用情報</Link>
//           <Link href="/news">お知らせ</Link>
//           <Link href="/company">会社概要</Link>
//         </div>
//         <div className={styles.topContact}>
//           <span>問い合わせ: contact@b-mystory.com</span>
//         </div>
//       </div>
//       <div className={styles.logoNav}>
//         <div className={styles.logo}>
//           <Link href="/">
//             <Image
//               src="/logo_mystory.jpg"
//               alt="MyStory"
//               width={200}
//               height={40}
//               priority
//             />
//           </Link>
//         </div>
//         <nav className={styles.mainNav}>
//           <ul className={styles.navList}>
//             <li className={`${styles.navItem} ${styles.dropdown}`}>
//               <span>サービス</span>
//               <div className={`${styles.dropdownMenu} ${styles.wideDropdown}`}>
//                 <div className={styles.dropdownRow}>
//                   <div>
//                     <p>データ分析事業</p>
//                     <ul>
//                       <li>
//                         <Link href="/services/analytics">
//                           データ分析コンサルティング
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/services/analytics/tools">
//                           データ分析ツール
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/services/analytics/solutions">
//                           データ分析ソリューション
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                   <div>
//                     <p>デジタルメディア事業</p>
//                     <ul>
//                       <li>
//                         <Link href="/services/media">
//                           スポーツニュースサイト『Deep Sports』
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                   <div>
//                     <p>ブロックチェーン事業</p>
//                     <ul>
//                       <li>
//                         <Link href="/services/blockchain">
//                           ポイントサービス
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                   <div>
//                     <p>ヘルスケア事業</p>
//                     <ul>
//                       <li>
//                         <Link href="/services/healthcare">
//                           ヘルスケア関連アプリ『Health Story』
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </li>
//             <li className={`${styles.navItem} ${styles.dropdown}`}>
//               <span>MyStoryの特徴・実績</span>
//               <div className={styles.dropdownMenu}>
//                 <ul>
//                   <li>
//                     <Link href="/feature/strength">MyStoryの強み</Link>
//                   </li>
//                   <li>
//                     <Link href="/feature/case-studies">分析事例集</Link>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//             <li className={styles.navItem}>
//               <Link href="/movie">動画コンテンツ</Link>
//             </li>
//             <li className={`${styles.navItem} ${styles.dropdown}`}>
//               <span>公開データ・資料</span>
//               <div className={styles.dropdownMenu}>
//                 <ul>
//                   <li>
//                     <Link href="/data/whitepaper">お役立ち資料</Link>
//                   </li>
//                   <li>
//                     <Link href="/data/analytics-data">分析データ</Link>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//             <li className={styles.navItem}>
//               <Link href="/column">コラム</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

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
      {/* 上部ナビゲーション（PCのみ表示） */}
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
                    <p>データコンサルティング事業</p>
                    <ul>
                      <li>
                        <Link href="/services/analytics/tools">
                          データ分析ツール
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/analytics/solutions">
                          データ分析ソリューション
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>デジタルメディア事業</p>
                    <ul>
                      <li>
                        <Link href="/services/media">
                          スポーツニュースサイト『Deep Sports』
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>ブロックチェーン事業</p>
                    <ul>
                      <li>
                        <Link href="/services/blockchain">
                          ポイントサービス
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>ヘルスケア事業</p>
                    <ul>
                      <li>
                        <Link href="/services/healthcare">
                          ヘルスケア関連アプリ『Health Story』
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
                    <Link href="/feature/strength">MyStoryの強み</Link>
                  </li>
                  <li>
                    <Link href="/feature/case-studies">分析事例集</Link>
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
                    <Link href="/data/whitepaper">お役立ち資料</Link>
                  </li>
                  <li>
                    <Link href="/data/analytics-data">分析データ</Link>
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
