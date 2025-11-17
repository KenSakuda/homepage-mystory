"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  setOpen: (open: boolean) => void;
};

export default function MobileMenu({ setOpen }: Props) {
  return (
    <div className={styles.mobileMenu}>
      <Link
        href="/"
        onClick={() => setOpen(false)}
        className={styles.mobileLogo}
      >
        <Image src="/logo_mystory.jpg" alt="MyStory" width={180} height={40} />
      </Link>
      <ul className={styles.mobileNav}>
        <li>
          <details>
            <summary>サービス</summary>
            <ul>
              <li>
                <Link
                  href="/services/analytics/consulting"
                  onClick={() => setOpen(false)}
                >
                  受託分析・データ利活用支援
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics/tools"
                  onClick={() => setOpen(false)}
                >
                  データ分析ツールの提供
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics/research"
                  onClick={() => setOpen(false)}
                >
                  リサーチアドバイザー
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics/pricing"
                  onClick={() => setOpen(false)}
                >
                  プライシングサービス
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics/share-prediction"
                  onClick={() => setOpen(false)}
                >
                  マーケットシェア推定サービス
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics/people-analytics"
                  onClick={() => setOpen(false)}
                >
                  ピープルアナリティクスサービス
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics/image-recognition"
                  onClick={() => setOpen(false)}
                >
                  画像・動画認識サービス
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics/ai-agent"
                  onClick={() => setOpen(false)}
                >
                  AIエージェント
                </Link>
              </li>
              <li>
                <Link href="/services/media" onClick={() => setOpen(false)}>
                  スポーツニュースサイト『Deep Sports』の運営
                </Link>
              </li>
              <li>
                <Link
                  href="/services/healthcare"
                  onClick={() => setOpen(false)}
                >
                  ヘルスケア関連アプリ『Story Fit』
                </Link>
              </li>
              <li>
                <Link
                  href="/services/blockchain"
                  onClick={() => setOpen(false)}
                >
                  ブロックチェーンサービスの開発
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>MyStoryの特徴・実績</summary>
            <ul>
              <li>
                <Link href="/feature/strength" onClick={() => setOpen(false)}>
                  MyStoryの強み
                </Link>
              </li>
              <li>
                <Link
                  href="/feature/case-studies"
                  onClick={() => setOpen(false)}
                >
                  分析事例集
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link href="/movie" onClick={() => setOpen(false)}>
            動画コンテンツ
          </Link>
        </li>
        <li>
          <details>
            <summary>公開データ・資料</summary>
            <ul>
              <li>
                <Link href="/data/whitepaper" onClick={() => setOpen(false)}>
                  お役立ち資料
                </Link>
              </li>
              <li>
                <Link
                  href="/data/analytics-data"
                  onClick={() => setOpen(false)}
                >
                  分析データ
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link href="/column" onClick={() => setOpen(false)}>
            コラム
          </Link>
        </li>
        <li className={styles.mobileBottomLinks}>
          <Link href="/recruit" onClick={() => setOpen(false)}>
            採用情報
          </Link>
          <Link href="/news" onClick={() => setOpen(false)}>
            お知らせ
          </Link>
          <Link href="/company" onClick={() => setOpen(false)}>
            会社概要
          </Link>
        </li>
      </ul>
    </div>
  );
}
