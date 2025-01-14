import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div>
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <h1 className={styles.title}>サービス</h1>
          <div className={styles.titleSeparator}></div>
          {/* データ分析コンサルティング */}
          <div className={styles.servicesCategory} id="analytics">
            <h2>データ分析コンサルティング</h2>
            <div className={styles.serviceDetailContainer}>
              <Link href="/detail1" className={styles.serviceDetailCard}>
                <Image
                  src="/services_detail_dataanalytics_image1.png"
                  alt="マーケティング戦略策定"
                  width={240}
                  height={160}
                />
                <h3>
                  マーケティング戦略策定
                  <span className={styles.arrowIcon}></span>
                </h3>
              </Link>
              <Link href="/detail2" className={styles.serviceDetailCard}>
                <Image
                  src="/services_detail_dataanalytics_image2.jpg"
                  alt="施策実行支援"
                  width={240}
                  height={160}
                />
                <h3>
                  施策実行支援
                  <span className={styles.arrowIcon}></span>
                </h3>
              </Link>
              <Link href="/detail3" className={styles.serviceDetailCard}>
                <Image
                  src="/services_detail_dataanalytics_image3.png"
                  alt="効果検証"
                  width={240}
                  height={160}
                />
                <h3>
                  効果検証
                  <span className={styles.arrowIcon}></span>
                </h3>
              </Link>
              <Link href="/detail4" className={styles.serviceDetailCard}>
                <Image
                  src="/services_detail_dataanalytics_image4.png"
                  alt="データ分析人材育成"
                  width={240}
                  height={160}
                />
                <h3>
                  データ分析人材育成
                  <span className={styles.arrowIcon}></span>
                </h3>
              </Link>
            </div>
          </div>
          {/* ブロックチェーン開発 */}
          <div className={styles.servicesCategory} id="blockchain">
            <h2>ブロックチェーン開発</h2>
            <div className={styles.serviceDetailContainer}>
              <Link href="/detail5" className={styles.serviceDetailCard}>
                <Image
                  src="/services_detail_blockchain_image1.png"
                  alt="NFT発行"
                  width={240}
                  height={160}
                />
                <h3>
                  NFT発行
                  <span className={styles.arrowIcon}></span>
                </h3>
              </Link>
              <Link href="/detail6" className={styles.serviceDetailCard}>
                <Image
                  src="/services_detail_blockchain_image2.png"
                  alt="DApps開発"
                  width={240}
                  height={160}
                />
                <h3>
                  DApps開発
                  <span className={styles.arrowIcon}></span>
                </h3>
              </Link>
              <Link href="/detail7" className={styles.serviceDetailCard}>
                <Image
                  src="/services_detail_blockchain_image3.png"
                  alt="ポイント制度導入"
                  width={240}
                  height={160}
                />
                <h3>
                  ポイント制度導入
                  <span className={styles.arrowIcon}></span>
                </h3>
              </Link>
              <Link href="/detail7" className={styles.serviceDetailCard}>
                <Image
                  src="/services_detail_blockchain_image4.png"
                  alt="トークンエコノミー構築"
                  width={240}
                  height={160}
                />
                <h3>
                  トークンエコノミー構築
                  <span className={styles.arrowIcon}></span>
                </h3>
              </Link>
            </div>
          </div>
          {/* デジタルメディアの運営 */}
          <div className={styles.servicesCategory} id="media">
            <h2>デジタルメディアの運営</h2>
            <div className={styles.productDevelopment}>
              <h3>
                現在、プロダクト開発中です。
                <br />
                ローンチは2025年4月頃を予定しております。
              </h3>
            </div>
          </div>
          {/* ウエルネス関連のサービス開発 */}
          <div className={styles.servicesCategory} id="wellness">
            <h2>ウエルネス関連のサービス開発</h2>
            <div className={styles.productDevelopment}>
              <h3>
                現在、プロダクト開発中です。
                <br />
                ローンチは2025年8月頃を予定しております。
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
