import styles from "./page.module.css";
// import Link from "next/link";
import ServicesHero from "../../_components/Hero";
import ServicesExample from "../../_components/Example";
import ServicesProduct from "../../_components/Product";

export default function Page() {
  return (
    <main className={styles.main}>
      <ServicesHero
        title="分析ソリューション"
        subtitle="マーケティングPDCAの各シーンに対応した数多くのソリューションや、プライシングに特化した分析ソリューション『Price Decisioning』などを提供しています。"
        imageUrl="/services_analytics_solution.jpg"
      />
      {/* <div className={styles.breadcrumb}>
        <span>
          <Link href="/">TOPページ</Link>
        </span>{" "}
        &gt; <span className={styles.current}>分析ソリューション</span>
      </div> */}
      <ServicesExample
        sectionTitle="MyStoryの分析ソリューションの特徴"
        features={[
          {
            icon: "/feature1.svg",
            title: "マーケティングPDCAに対応",
            description:
              "マーケティング上のあらゆる課題に対応できる豊富なソリューションを取り揃えております。「売上の予測をしたい」、「精緻に効果検証をしたい」、「クーポンを配布するべき顧客を見極めたい」など、よくある課題に対するベストプラクティスを提供します。",
          },
          {
            icon: "/feature2.svg",
            title: "プライシングの専門性",
            description:
              "プライシングに関する数多くの案件実績を誇ります。単に最適な価格を分析から導出するだけでなく、経済学や消費者行動心理論の知見をもとにした実践的な価格戦略方法をお伝えします。",
          },
          {
            icon: "/feature3.svg",
            title: "技術力 × ビジネス力の両立",
            description:
              "統計や機械学習に関する技術的なベースをしっかりと備えつつ、豊富なビジネス経験をもとにした「ビジネスに寄与する」分析を提供できます。個々の企業が抱える課題をしっかりとヒアリングさせていただき、ベストなソリューションを提案させていただきます。",
          },
        ]}
      />

      <ServicesProduct
        heading="分析ソリューション"
        description=""
        items={[
          {
            subtitle: "Price Decisioning",
            image: "/pricedecisioning.png",
            contents: [
              {
                icon: "/check-mark.svg",
                title: "利益を最大化する価格を明らかにできる",
                description:
                  "価格戦略の理想は「いくらのときにどれだけ売れるか」を把握したうえで、売上や利益を最大化できる価格に設定することです。最適な価格は店舗や地域、消費者特性など各種条件によって異なりますし、ダイナミックプライシングやバンドリングなど応用的な価格分析を行う必要がある場面もあります。MyStoryはこれまで100件を超える価格分析を支援してきた実績がありますので、お客様企業の置かれた状況ごとに最適な価格分析方法をご提案します。",
              },
              {
                icon: "/check-mark.svg",
                title: "経済学や行動心理学の知見をもとにしたコンサルティング",
                description:
                  "価格は絶対的なものではなく、参照点、つまり「この商品カテゴリーの価格はこれくらい」という値ごろ感に大きく左右されるということが研究からわかっています。絶対的なものではないからこそ、消費者の買いたい意欲を刺激する価格の提示方法や価格プランの設定方法、メッセージの送り方が重要となります。経済学や行動心理学に精通したアナリストが、消費者の心を動かす価格戦略方法をコンサルティングします。",
              },
            ],
          },
          {
            subtitle: "MyStory分析ソリューション集",
            image: "/analytics_solution.png",
            contents: [
              {
                icon: "/check-mark.svg",
                title: "幅広い分析手法に対応可能",
                description:
                  "基本的なな機械学習モデルや、傾向スコアマッチング・回帰不連続デザインなどの因果推論手法、ベイズ推定、レイテイングアルゴリズム、レコメンデーション、計量経済学モデルなど、幅広い分析に対応可能です。",
              },
              {
                icon: "/check-mark.svg",
                title: "迅速な対応 & わかりやすいアウトプット",
                description:
                  "お急ぎの場合、分析内容によっては短納期でのご納品も可能です。また、社内会議資料にもそのまま使えるような見やすい、且つわかりやすいアウトプット形式でご納品しますので、関係各所への分析結果の共有がしやすいです。",
              },
            ],
          },
        ]}
      />
    </main>
  );
}
