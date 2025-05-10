import styles from "./page.module.css";
// import Link from "next/link";
import ServicesHero from "../../_components/Hero";
import ServicesExample from "../../_components/Example";
import ServicesProduct from "../../_components/Product";

export default function Page() {
  return (
    <main className={styles.main}>
      <ServicesHero
        title="データ分析ツール"
        subtitle="MyStoryは複数のデータ分析ツールの開発・販売を行っております。回帰・分類・時系列など複数の予測モデルを実行可能な『DAVinCI LABS』、意思決定支援ツール『DAIN STATION』、時系列予測に特化した分析ツール『Lead』のご提供が可能です。また、A/Bテストや効果検証に活用できる因果推論ツール『Causal Story』を開発しており、こちらについては2025年10月頃からご提供できる予定です。"
        imageUrl="/services_analytics_tool_hero.jpg"
      />
      {/* <div className={styles.breadcrumb}>
        <span>
          <Link href="/">TOPページ</Link>
        </span>{" "}
        &gt; <span className={styles.current}>データ分析ツール</span>
      </div> */}
      <ServicesExample
        sectionTitle="分析ツールを導入すべき理由"
        features={[
          {
            icon: "/feature1.svg",
            title: "分析の信頼性",
            description:
              "ChatGPTをはじめとする生成AIの普及により、データサイエンスの知見がない方でも簡単に機械学習モデルを作れるようになりました。しかし、分析設計や特徴量設計、アルゴリズム選択を正しく行えていないケースも散見し、誤ったモデルをもとにビジネス上の意思決定を下すと、会社に大きな損失をもたらしてしまう危険性があります。",
          },
          {
            icon: "/feature2.svg",
            title: "ビジネス貢献",
            description:
              "多くの分析ツールは、データサイエンティストやエンジニアなどの技術職と、ビジネス経験豊富なメンバーがチーム体制で開発・機能改修を行っております。そうして開発されたツールは、技術的な信頼性・堅牢性とビジネスへの活用性が両立されており、上手く活用することでビジネスを前進させることができます。",
          },
          {
            icon: "/feature3.svg",
            title: "効率性と再現性",
            description:
              "分析ツールを活用することで、容易に複数のモデルの作成・比較ができます。もちろんChatGPTを活用すれば複数のモデルを簡単に作成できますが、プロンプトの内容やバージョンによっては上手く分析結果を再現できないことも多いです。また、チームメンバーへの分析結果の共有という側面でもやや難があると言えるでしょう。",
          },
        ]}
      />

      <ServicesProduct
        heading="取り扱い分析ツール一覧"
        description="当社は様々なビジネスシーンにおいて利用できる複数の分析ツールを提供しております"
        items={[
          {
            subtitle: "DAVinCI LABS",
            image: "/DAVInci LABS.avif",
            contents: [
              {
                icon: "/check-mark.svg",
                title: "ノーコードで代表的な機械学習モデルの作成が可能",
                description:
                  "データ前処理から、最適なアルゴリズムの選定、ハイパーパラメーターチューニング、モデルの作成と精度評価まで機械学習モデル作成に関する全てのプロセスを自動化。プログラミングや統計の専門知識がないビジネスパーソンでも、機械学習を活用しデータドリブンにビジネスを推進することができます。",
              },
              {
                icon: "/check-mark.svg",
                title: "複数アルゴリズムの比較が可能",
                description:
                  "例えば時系列予測をする際に、ARIMAをはじめとする古典的な時系列モデル、LSTMのようなDeepLearningモデル、XGBoostのようなツリー系の機械学習モデルなど、アルゴリズムの候補は膨大にあります。DAVinCI LABSを使えば複数のアルゴリズムの精度を簡単に比較できるので、ご自身で機械学習モデルを作成できるデータサイエンティストにもお薦めです。",
              },
            ],
          },
          {
            subtitle: "DEIN STATION",
            image: "/deinstation.png",
            contents: [
              {
                icon: "/check-mark.svg",
                title: "構築した機械学習モデルの精査",
                description:
                  "構築した機械学習モデルのKPIパフォーマンスの確認ができるだけでなく、「どういった条件において予測を外しているのか」把握できるため、モデルのチューニングが容易に行えます。",
              },
              {
                icon: "/check-mark.svg",
                title: "ビジネスKPIのシミュレーション",
                description:
                  "意思決定ルールの最適化を行った際の、ビジネスKPIのシミュレーションが可能です。現行モデルと比較することによって、意思決定ルールを採用した際にKPIがどれほど改善されるか確認できます。",
              },
            ],
          },
          {
            subtitle: "Lead",
            image: "/Lead.png",
            contents: [
              {
                icon: "/check-mark.svg",
                title: "時系列予測モデルに特化したAutoMLツール",
                description:
                  "時系列予測モデルに機能を限定したうえで、UI（ツールの見た目）を可能な限りシンプルにしたことにより、AutoMLを安く、簡単に試せます。実務で時系列予測モデルを200件以上行っているデータサイエンティストが監修しているので精度は非常に高く、時系列予測のみ行いたい組織にお薦めです。",
              },
            ],
          },
          {
            subtitle: "Causal Story（仮称）※2025年10月頃ローンチ予定",
            image: "/comingsoon.jpg",
            contents: [
              {
                icon: "/check-mark.svg",
                title: "効果検証に必要なサンプル数を簡単に計算",
                description:
                  "施策を実施する際にA/Bテストを行っている組織は多いと思いますが、サンプル数は少なすぎても多すぎても、正しく効果を検証することはできません。本ツールに条件を入力するだけで統計的に必要なサンプル数を簡単に算出できます。",
              },
              {
                icon: "/check-mark.svg",
                title: "バイアス要因を制御して効果を正しく検証",
                description:
                  "ビジネスにおいては、A/Bテストを実施していないときや、倫理的にA/Bテストを実施することが許されないシーンも多いです。そんなとき、単純に比較したいKPIの差を集計しても、複数のバイアス要因が絡み合い正しい効果検証はできません。Causal Storyは変数間の関係性からバイアス要因を特定し、バイアスを可能な限り制御したうえで「明らかにしたい効果」を検証します。",
              },
            ],
          },
        ]}
      />
    </main>
  );
}
