import styles from "./page.module.css";
import Image from "next/image";
import ServicesExample from "@/app/services/_components/Example";

export default function Page() {
  const data = [
    { name: "Python", src: "/tech/python.svg" },
    { name: "SQL", src: "/tech/sql.svg" },
    { name: "HTML", src: "/tech/html5.svg" },
    { name: "CSS", src: "/tech/css3.svg" },
    { name: "JavaScript", src: "/tech/javascript.svg" },
    { name: "TypeScript", src: "/tech/typescript.svg" },
    { name: "Next.js", src: "/tech/nextjs.svg" },
    { name: "React", src: "/tech/react.svg" },
    { name: "Django", src: "/tech/django.svg" },
    { name: "SAS", src: "/tech/sas.svg" },
    { name: "R", src: "/tech/r.svg" },
    { name: "microCMS", src: "/tech/microcms.png" },
    { name: "Solidity", src: "/tech/solidity.svg" },
    { name: "Hardhat", src: "/tech/hardhat.png" },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heading}>MyStoryの強み</h1>
            <p className={styles.description}>
              日本国内には数多くのデータ分析会社がありますが、それぞれ強みとする領域は異なります。簡単ではありますが、当社の強みや特徴についてまとめています。
            </p>
          </div>
        </div>
      </div>
      <section className={styles.devOptionsSection}>
        <h2 className={styles.devOptionsTitle}>
          MyStoryがご支援可能な<span>3つの</span>データ分析領域
        </h2>
        <p className={styles.techDescription}>
          マーケティング領域の分析に対応可能な企業は数多くありますが、複数の領域において高品質の分析を提供できる企業は限られています。
          これまでの各領域のご支援経験をもとにした豊富なノウハウを有しており、ご満足いただける分析を提供することをお約束します。
        </p>
        <div className={styles.devCardGrid}>
          <div className={styles.devCard}>
            <h3 className={styles.devCardHeading}>マーケティング分析</h3>
            <p className={styles.devCardSubheading}>マーケティングPDCAに対応</p>
            <p className={styles.devCardBody}>
              データサイエンティストの多くは技術偏重で、ビジネスへの理解が乏しいことを理由として、データ分析をビジネスに上手く活用できていない企業が目立ちます。当社には技術力のある人材だけでなく、ビジネス経験が非常に豊富で、コンサルティングスキルを有する人材も在籍しておりますので、「使えるデータ分析」の実施・支援が可能です。
            </p>
          </div>
          <div className={styles.devCard}>
            <h3 className={styles.devCardHeading}>スポーツアナリティクス</h3>
            <p className={styles.devCardSubheading}>
              SportsTechニュースサイトを運営
            </p>
            <p className={styles.devCardBody}>
              スポーツアナリティクスにおいては、データサイエンスの専門性は当然のこととして、スポーツのプレー技術や各種制度に関する深い造詣も必要になってきます。スポーツ雑誌を発行している出版社に在籍していたデータサイエンティストが編集長を務める『DeepSports』の運営のほか、プロスポーツクラブからの受託分析も請け負っています。
            </p>
          </div>
          <div className={styles.devCard}>
            <h3 className={styles.devCardHeading}>ピープルアナリティクス</h3>
            <p className={styles.devCardSubheading}>人事データの分析</p>
            <p className={styles.devCardBody}>
              人事データは様々なバイアスを含んでいることが多く、手元にあるデータを適切な処理を施さずにそのまま分析してしまうと、実態と大いに乖離する結果となってしまいます。目に見えている結果の裏に潜む様々なバイアスを適切に処理しするためには、計量経済学モデルをはじめとした各種統計モデルと、定量・定性調査をもとにした要因の深堀りが必要です。
            </p>
          </div>
        </div>
      </section>
      <ServicesExample
        sectionTitle="ケイパビリティ"
        features={[
          {
            icon: "/feature1.svg",
            title: "経済学・消費者行動理論",
            description:
              "「社会的選択理論」、「契約理論」、「オークション理論」、「計量経済学」、「マッチング理論」など、経済学や消費者行動理論の専門的知見をもとにした実践的なコンサルティング",
          },
          {
            icon: "/feature2.svg",
            title: "リサーチ",
            description:
              "定量・定性調査ともに、数多くの調査の設計や分析の支援経験あり。リサーチセミナーや法人研修の講師登壇実績も複数回あり、ノウハウの伝達や育成も可能",
          },
          {
            icon: "/feature3.svg",
            title: "コンサルティング",
            description:
              "コアコンサルティングスキルを有する人材が在籍。人気インフルエンサーと資料作成領域での業務提携契約を締結しており、わかりやすい資料作成も得意",
          },
        ]}
      />
      <section className={styles.techSection}>
        <h2 className={styles.techTitle}>技術スタック</h2>
        <p className={styles.techDescription}>
          『データ分析』、『App開発』、『ブロックチェーン開発』など、目的や用途に応じた幅広い技術スタックに対応しています。サービス・プロダクトの内容や、お客様の環境に合わせて最適な技術を選定いたします。
        </p>
        <div className={styles.techGrid}>
          {data.map((tech) => (
            <div key={tech.name} className={styles.techCard}>
              <Image src={tech.src} alt={tech.name} width={60} height={60} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
