import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.detailPage}>
      {/* 記事ヘッダー */}
      <div className={styles.header}>
        <span className={styles.category}>NFT発行</span>
        <h1 className={styles.title}>
          NFT技術により様々なデジタルデータに価値を付与
        </h1>
      </div>
      {/* 記事本文 */}
      <div className={styles.content}>
        <p>
          現在デジタルコンテンツは気軽に作成、配信できるようになり、インターネット上には、膨大な量のデジタルデータが存在しています。
        </p>
        <p>
          NFT技術の活用により、これらのデジタルデータに価値を持たせることが可能になり、デジタルコンテンツに大きな変革をもたらしました。
        </p>
        <p>
          NFTは「デジタル資産」とも呼ばれ、データ作成時に発行されるIDにより唯一のものと識別され、誰もがその発行元を確認できるという透明性を持っています。
        </p>
        <p>
          またデータの発行数を限定し、ブロックチェーン上に永久に保存することで、オリジナルであることを証明し、デジタルデータに価値を与えてくれます。
        </p>
        <p>
          データの改ざんや複製を不可能にし、コンテンツ制作者への収益性を高めると同時に、所有者の権利を守ることができる技術です。
        </p>
        <p>この技術を使い様々なシステムの構築を支援します。</p>
      </div>
    </main>
  );
}
