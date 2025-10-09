import styles from "./page.module.css";
// import Link from "next/link";
import ServicesHero from "../_components/Hero";
import ServicesExample from "../_components/Example";

export default function Page() {
  return (
    <main className={styles.main}>
      <ServicesHero
        title="ヘルスケア事業"
        subtitle="ヘルスケア関連アプリ『Story Fit』を開発中です。プロダクトのローンチは2026年3月頃を予定しております。"
        imageUrl="/storyfit_meal.png"
      />
      {/* <div className={styles.breadcrumb}>
        <span>
          <Link href="/">TOPページ</Link>
        </span>{" "}
        &gt; <span className={styles.current}>ヘルスケア事業</span>
      </div> */}
      <ServicesExample
        sectionTitle="『開発中のヘルスケアアプリの特徴』"
        features={[
          {
            icon: "/feature1.svg",
            title: "最適な介入タイミング",
            description:
              "ユーザーの行動履歴や生活リズム、健康状態の推移に基づいて、最適なタイミングで介入を行う「ジャストインタイムアダプティブ介入（JITAI）」を採用。例えば、運動の中断が続いたり、睡眠の質が低下したりといった兆候を検知した際には、即時にモチベーションを高めるようなメッセージや、簡単な行動提案（例：深呼吸や軽いストレッチ）を提供します。",
          },
          {
            icon: "/feature2.svg",
            title: "健康増進プログラムの開催",
            description:
              "管理栄養士や理学療法士などの健康のスペシャリストと連携し、リアルまたはオンラインでの健康増進イベントを定期的に開催。イベント内で実施されるチェックリストや問診、計測結果をもとに、一人ひとりに最適化された『健康評価レポート』を提供します。生活習慣の課題や改善の方向性が具体的に可視化されるため、高い納得感と行動へのつながりが得られます。",
          },
          {
            icon: "/feature3.svg",
            title: "タイプ別パーソナライズ支援",
            description:
              "ビッグファイブ性格診断や制御焦点理論などの心理モデルを活用し、ユーザーの行動タイプを分類。そのタイプに合わせて、行動経済学や消費者行動理論の専門知識に基づいたヘルスメッセージを配信します。例えば、目標志向型には“成果の可視化”を、義務感型には“健康リスクの回避”を訴求するなど、一人ひとりに響くメッセージで行動変容を促します。",
          },
        ]}
      />
    </main>
  );
}
