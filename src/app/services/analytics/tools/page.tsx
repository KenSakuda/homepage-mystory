import styles from "./page.module.css";
// import Link from "next/link";
import ServicesHero from "../../_components/Hero";
import ServicesExample from "../../_components/Example";
import ServicesProduct from "../../_components/Product";
import ComparisonSection from "../../_components/Comparison";
import ButtonLink from "@/app/_components/ButtonLink";
import AndMoreSection from "../../_components/AndMore";

export default function Page() {
  return (
    <main className={styles.main}>
      <ServicesHero
        title="データ分析ツール"
        subtitle="MyStoryは複数のデータ分析ツールの開発・販売を行っております。回帰・分類・時系列など複数の予測モデルを実行可能な『DAVinCI LABS』、意思決定支援ツール『DAIN STATION』、時系列予測に特化した分析ツール『Lead』のご提供が可能です。また、A/Bテストや効果検証に活用できる因果推論ツール『Causal Story』を開発しており、こちらについては2026年4月頃からご提供できる予定です。"
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
      <ComparisonSection
        title="データ分析委託のメリット・デメリット"
        advantages={[
          "①専門人材や先端ツールを短期間で活用可能",
          "②ノーコードツールで社内活用がしやすい",
          "③時系列予測など実務に直結した課題へ応用",
        ]}
        disadvantages={[
          "①業務知識が共有されないと精度が低下",
          "②手法がブラックボックス化しやすい",
          "③費用が想定以上になる可能性がある",
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
            subtitle: "Causal Story（仮称）※2026年4月頃ローンチ予定",
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
      <AndMoreSection
        title="企業がデータ分析を委託する際の選定ポイント"
        paragraphs={[
          {
            text: "「データ分析 委託 会社」を選定する際には、単に実績があるというだけでなく、使用している分析ツールの信頼性と再現性、さらには統計的根拠をもとにした効果検証ができるかどうかが重要な判断軸となります。",
          },
          {
            text: "例えば、MyStoryが提供する『Causal Story』は、A/Bテストが困難な条件下でも因果関係を特定し、バイアスを制御しながら効果を検証できるため、マーケティング施策やプロダクト改善の場面で非常に有効です。また、『DAIN STATION』では、既存モデルのKPIパフォーマンス分析や意思決定ルールのシミュレーションが可能で、「データ分析 委託 統計」や「データ解析 マーケティング 活用」といったニーズにも対応できます。",
          },
          {
            text: "このような機能を備えた分析企業は、分析結果の再現性や透明性を重視するデータサイエンティストにとっても信頼できるパートナーとなるでしょう。選定時には、使用するツールやアルゴリズム、レポートの共有形式、価格体系などを必ず確認することが成功のカギとなります。",
          },
        ]}
      />
      <div className={styles.buttonLink}>
        <ButtonLink href="/data/analytics-data">
          データ分析結果を見る
        </ButtonLink>
      </div>
      <AndMoreSection
        title="データ分析の委託ならMyStoryへ"
        paragraphs={[
          {
            text: "データ分析を委託する際、どの企業に依頼すべきか悩まれる方も多いでしょう。",
          },
          {
            text: "MyStoryは「データ分析 委託 企業」として、マーケティング、スポーツ、人事といった多様な領域での実績を持ち、統計や機械学習に精通した分析チームが在籍する数少ない企業のひとつです。「データ分析 委託 統計」や「データ分析 委託 費用」といったニーズに応えるだけでなく、経済学や消費者行動理論などを活用した戦略的コンサルティングも可能です。",
          },
          {
            text: "特に、マーケティングPDCAの各フェーズに対応できる「データ解析 マーケティング 手法」や、業務に直結する「データ解析 マーケティング 活用」に強みを持ち、「データ分析 機械学習 モデル」の構築や「ツール」導入支援にも豊富な経験があります。",
          },
          {
            text: "MyStoryは、単なる外注先ではなく、成果にこだわるパートナーとして選ばれ続けています。精度・再現性・応用性に優れた「使えるデータ分析」をお求めなら、ぜひご相談ください。",
          },
        ]}
      />
      <div className={styles.buttonLink}>
        <ButtonLink href="/contact">分析について相談する</ButtonLink>
      </div>
    </main>
  );
}
