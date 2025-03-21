import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      {/* プライバシーポリシーセクション */}
      <section className={styles.privacyPolicy}>
        <h1>プライバシーポリシー</h1>
        <div className={styles.titleSeparator}></div>
        <p>
          株式会社MyStory（以下「当社」といいます。）は、個人情報の保護と適切な管理の実現のため、このプライバシーポリシー（以下「本ポリシー」といいます。）を制定し、個人情報等を以下のとおり取り扱います。
        </p>
        <h2>第１条 （総則）</h2>
        <p>
          １
          当社は、個人情報の保護実現のため、個人情報の保護に関する法律（平成15年5月30日法律第57号（以下「個人情報保護法」といいます。）及びその他関連する法令等を遵守し、個人情報、及び本ポリシーにおいて定める他の個人に関連する情報（以下、個人情報とあわせて「個人情報等」といいます。）の適切な取扱い及び保護に努めます。
        </p>
        <p>
          ２
          当社は、当社の個別のサービスや事業ごとに、当該サービスや事業について適用されるプライバシーポリシー等を定めることがあります。その場合、当該プライバシーポリシー等と本ポリシーが矛盾又は抵触する場合には、当該サービス又は事業について適用されるプライバシーポリシーが優先されるものとします。
        </p>
        <p>
          ３
          当社サービスと連携するサービスを提供する事業者により提供される提携サービスその他当社以外の者が提供するサービス（以下「提携サービス等」といいます。）については、本ポリシーは適用されません。提携サービス等における個人情報等の取扱いについては、当該提携サービス等を提供する事業者が別途定めるプライバシーポリシー等をご参照ください。
        </p>

        <h2>第２条（当社が取得する情報及びその取得方法）</h2>
        <p>当社は、以下に定めるとおり、個人情報等を取得します。</p>
        <p>(1) 当社のサービス提供に関して取得する情報</p>
        <p>
          ア【お客様の情報】
          <br />
          当社は、お客様（当社にお問い合わせや資料請求をされた方、当社サービスに関するイベント等に参加された方を含みます。以下同様です。）による当社サービスの利用、当社サイトの閲覧、当社へのお問い合わせ等に際し、お客様に関する以下の情報をデータ入力、記入、口頭での伝達等の方法で提供いただき、取得することがあります。氏名、生年月日、住所、年齢、電話番号、勤務先、所属部署、役職、メールアドレス、電話番号、所属組織に関する情報、その他当社が指定する情報
        </p>
        <p>
          イ 【端末情報等】
          <br />
          当社は、お客様が端末又は携帯端末上で当社サービス又は当社サイト（以下「当社サービス等」といいます。）を利用する場合、当社サービス等の維持及び改善、又は不正行為防止のため、お客様が使用する端末情報（端末を識別可能なID情報等）を収集することがあります。また、当社は、当社サービス等の利用時に自動で生成、保存されるIPアドレス及び登録ユーザーからのリクエスト日時、当社サービス等内での操作履歴の情報や、お客様のサービス利用状況に関する情報を収集することがあります。
        </p>
        <p>
          ウ 【連携データ及び送信データ】
          <br />
          当社は、当社サービス等を通じて取得又は送信された連携データ（パソコンのログイン履歴、メールの通信履歴、その他の社内システムの利用履歴、文章、画像、動画その他のデータを含みますがこれらに限られません）及び送信データ（個人名、所属部署、電話番号、その他のデータ）を収集することがあります。
        </p>
        <p>
          エ 【Cookie及び匿名ID】
          <br />
          当社サービス等において、「Cookie（クッキー）」と呼ばれる技術及びこれに類する技術を使用する場合があります。Cookieとは、ウェブサーバがお客様のブラウザを識別する業界標準の技術です。Cookieは、登録ユーザーのブラウザを識別することはできますが、お客様個人を識別することはできません。なお、電子端末上の設定の変更によりCookieの機能を無効にすることはできますが、当社サービス等の全部又は一部が利用できなくなる場合があります。
        </p>
        <p>
          オ 【外部サービスとの連携により取得する情報】
          <br />
          当社は、Facebook、Google、Yahoo！その他の外部サービスで利用者が利用するID及びその他外部サービスのプライバシー設定によりお客様が連携先に開示を認めた情報を取得することがあります。
        </p>

        <p>(2) 取引先に関する個人情報（(1)を除きます。）</p>
        <p>
          当社は、当社が提携する事業者その他の取引先ご担当者様からのご提供その他の方法により、以下の情報を取得することがあります。取引先（個人である取引先の他、取引先の役職員を含みます。）の氏名、勤務先、所属部署役職、メールアドレス、電話番号、所属組織に関する情報等
        </p>
        <p>(3) 当社役職員、役職員の家族、及び当社採用選考応募者の個人情報</p>
        <p>
          当社は、当社役職員、役職員の家族、及び当社の求人に応募頂いた求職者の以下の情報を、データ入力、記入、口頭での伝達等の方法で提供いただき、取得することがあります。入社書類、履歴書、職務経歴書その他応募書類記載事項：氏名、性別、生年月日、電話番号、メールアドレス、学歴・職歴等、健康状態、既往歴、その他当社が指定する情報
        </p>
        <p>(4) 株主に関する個人情報</p>
        <p>
          当社は、株主から書面又はデータの提供等の方法により、以下の情報を提供いただきます。氏名、住所、その他当社が指定する情報
        </p>
        <p>
          ２
          当社は、個人情報等の取得にあたっては、偽りその他不正の手段によらず、適正に取得します。
        </p>

        <h2>第３条 （利用目的）</h2>
        <p>
          １
          当社は、取得した個人情報等を下記の目的の範囲内で適正に取り扱います。
        </p>
        <p>（1）お客様の情報</p>
        <p>【当社サービスの提供・維持・改善】</p>
        <ul>
          <li>当社サービスの申込み、利用の審査のため</li>
          <li>当社サービス提供のため</li>
          <li>当社サービスにおける本人確認及び不正利用の防止のため</li>
          <li>利用料金の支払決済手続のため・必要書類等の送付のため</li>
          <li>
            当社サービスの利便性向上及び品質改善、新規サービスの研究及び開発、並びにこれらを目的とした各種マーケティング調査及び分析のため
          </li>
          <li>経営分析のためのデータ作成及び分析結果の利用のため</li>
          <li>個人を識別できない形式に加工した統計データを作成するため</li>
          <li>第三者への提供のため</li>
          <li>その他、上記目的に付随又は関連する目的のため</li>
        </ul>
        <p>【通知連絡・対応等】</p>
        <ul>
          <li>当社サービスに関するご案内、お問い合わせ等への対応のため</li>
          <li>
            当社サービスに関する利用規約、本ポリシーの変更、当社サービスの停止・中止・契約解除その他当社サービスに関する重要なお知らせ等の通知のため
          </li>
        </ul>
        <p>【情報提供】</p>
        <ul>
          <li>
            お客様に対する情報（書籍、セミナー、スライドシェア、ブログ、メールマガジン等）の発信のため
          </li>
          <li>
            当社に関するご案内、お問い合わせ等への対応のため・お客様の属性に応じたサービスのご提案のため
          </li>
          <li>当社に関するマーケティングの実施のため</li>
          <li>その他当社に関する重要なお知らせ等の通知のため</li>
          <li>その他上記目的に付随又は関連する目的のため</li>
        </ul>
        <p>(2)取引先に関する個人情報</p>
        <ul>
          <li>当該取引先との取引の目的を達成するため</li>
          <li>当該取引先に対する業務情報等の提供のため</li>
        </ul>
        <p>(3)当社役職員、役職員の家族、及び当社採用選考応募者の個人情報</p>
        <ul>
          <li>採用選考のため</li>
          <li>雇用管理のため</li>
          <li>社内手続きのため</li>
        </ul>
        <p>(4)株主に関する個人情報</p>
        <ul>
          <li>
            株主の管理及び会社法等に基づく手続きの実施、権利の行使・義務の履行のため
          </li>
        </ul>
        <p>
          ２
          当社は、前項の利用目的を、変更前の利用目的と関連性を有すると合理的に認められる範囲内において変更することがあり、変更した場合には、当社サービス上若しくは当社サイトでの掲示その他分かりやすい方法により公表します。
        </p>

        <h2>第４条（匿名加工情報）</h2>
        <p>
          １
          当社は、取得した個人情報を、本人を特定できないようにした匿名加工情報（個人情報保護法第２条第９項に定義された「匿名加工情報」といい、以下同様とします。）又は統計的な情報に加工し、これを利用することがあります。
        </p>
        <p>
          ２
          当社は、匿名加工情報の作成にあたっては、氏名、住所、生年月日、メールアドレスを削除し、ユーザーIDを一般化することにより匿名加工情報を作成します。
        </p>
        <p>
          ３ 当社は、以下のとおり匿名加工情報を第三者に提供する場合があります。
        </p>
        <ul>
          <li>
            (1)
            第三者に提供する匿名加工情報に含まれる個人に関する情報の項目ハッシュ化済みユーザーID、ユーザーの利用ログデータ
          </li>
          <li>
            (2)
            提供の方法匿名加工情報を含むファイルを電子メールに添付して当該第三者に送信する、又は、当該ファイルをサーバーにアップロードして当該第三者にアクセスさせる
          </li>
        </ul>

        <h2>第５条（第三者提供）</h2>
        <p>
          １
          当社は、本人の同意を得ずに個人データ（個人情報保護法第２条第６項により定義された「個人データ」をいい、以下同様とします。）を第三者（次条に定める委託者及び第6条に定める特定の者を除きます。以下、本条において同様とします。）に提供しません。ただし、以下の場合は、関係法令に反しない範囲で、対象者（日本国外にある者を含みます。）の同意なく個人情報を提供することがあります。
        </p>
        <ul>
          <li>(1) 法令に基づく場合</li>
          <li>
            (2)
            人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
          </li>
          <li>
            (3)
            公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
          </li>
          <li>
            (4)
            国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
          </li>
          <li>
            (5)
            合併、会社分割、事業譲渡その他の事由により個人情報を含む事業の承継がなされる場合
          </li>
        </ul>
        <p>
          ２
          当社は、対象者の同意に基づき個人データを第三者に提供した場合、以下の事項に関する記録を作成し、保管します。
        </p>
        <ul>
          <li>(1) 本人から事前の同意を得ていること</li>
          <li>
            (2) 当該第三者の氏名又は名称その他の当該第三者を特定するに足りる事項
          </li>
          <li>
            (3)
            当該個人データによって識別される者の氏名その他のその者を特定するに足りる情報
          </li>
          <li>(4) 当該個人データの項目</li>
        </ul>

        <h2>第６条 （個人情報の取扱いの委託）</h2>
        <p>
          当社は、利用目的の達成に必要な範囲内において、取得した個人情報の全部又は一部の取扱いを第三者に委託することがあります。この場合、当社は、当該委託先との間で本ポリシーに準じる内容の秘密保持契約等をあらかじめ締結するとともに、当該委託先において情報の適切な安全管理が図られるよう、必要かつ適切な監督を行います。
        </p>

        <h2>第７条 （共同利用）</h2>
        <p>
          当社は、提携事業者その他特定の者との間で、提携サービス等の提供等に必要な範囲において、取得した個人データを共同利用することがあります。この場合、当社は、あらかじめ、共同して利用する情報の項目、共同して利用する者の範囲、利用する者の利用目的、当該情報の管理について責任を有する者の氏名又は名称を通知します。
        </p>

        <h2>第８条 （情報収集モジュール）</h2>
        <p>
          当社サービス等には、当社サービス等の利用状況及び当社サービスを含むサービスに関する広告効果等の情報を解析するため、以下の情報収集モジュールを組み込む場合があります。これに伴い、当社は、以下の情報収集モジュールの提供者に対し個人情報等の提供を行う場合があります。これらの情報収集モジュールは、個人を特定する情報を含むことなくお客様個人情報等を収集し、収集された情報は、各情報収集モジュール提供者の定めるプライバシーポリシーその他の規定に基づき管理されます。
        </p>
        <ul>
          <li>名称　：Google Analytics</li>
          <li>提供者：Google Inc.</li>
          <li>
            プライバシーポリシー：
            <Link
              href="http://www.google.com/intl/ja/policies/privacy/"
              className={styles.link}
            >
              プライバシーポリシー
            </Link>
          </li>
        </ul>

        <h2>‍第９条 （行動ターゲティング広告）</h2>
        <p>
          １
          当社は、当社又は広告配信事業者等の第三者によるターゲティング広告（対象者のニーズないし興味、関心に合わせて広告を配信する広告手法をいいます。）の実施のため、当社サービス等又は提携サービス等の提供に際し、前条に定める情報収集モジュールを利用して、以下の情報を収集し、これを蓄積又は利用することがあります。
        </p>
        <ul>
          <li>
            (1)
            行動履歴及びサービス利用状況に関する情報（当社サービス等の利用履歴等、それを蓄積することにより対象者のニーズや興味、関心の分析に供することができる情報で、特定の個人を識別するに至らないものをいいます。）
          </li>
          <li>(2) 端末情報</li>
        </ul>
        <p>
          ２
          当社は、前項に基づき収集した情報を、対象者のニーズないし興味、関心に合わせてカスタマイズした最適な広告を配信することにより、対象者に有益な情報を届けることを目的として、行動ターゲティング広告を配信する事業者（以下「広告配信事業者」といいます。）に提供します。
        </p>
        <p>
          ３
          広告配信事業者による各情報の取扱いについては、広告配信事業者の定めるプライバシーポリシーその他の条件に従うものとします。
        </p>

        <h2>第１０条 （安全管理体制）</h2>
        <p>
          １
          当社は、個人情報等の漏洩、滅失又は毀損の防止その他の個人情報等の保護のため、個人情報ファイル及び匿名加工情報へのアクセス制限の実施、アクセス権限保有者の必要最小限度の限定、また外部からの不正アクセス防止のためのセキュリティソフトの導入等、個人情報等の安全管理のために必要かつ適切な措置を講じています。
        </p>
        <p>
          ２
          当社は、代表取締役を個人情報等に関する管理責任者と定め、個人情報等の適正な管理及び継続的な改善を実施します。
        </p>

        <h2>第１１条 （本ポリシーの変更）</h2>
        <p>
          １
          当社は、個人情報等の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、随時本ポリシーを変更することがあります。
        </p>
        <p>
          ２
          変更後の本ポリシーについては、当社サービス上又は当社の運営するウェブサイトでの掲示その他分かりやすい方法により告知します。ただし、法令上本人の同意が必要となるような内容の変更を行うときは、別途当社が定める方法により、本人の同意を取得します。
        </p>

        <h2>第１２条 （お問い合わせ）</h2>
        <p>
          （お問い合わせ）当社の個人情報等の取扱いに関するご意見、ご質問、苦情のお申出その他個人情報等の取扱いに関する事項は、下記にご連絡ください。
        </p>
        <p>
          株式会社MyStory
          <br />
          E-mail：contact@b-mystory.com
          <br />
          2021年11月1日 制定
        </p>
      </section>
    </>
  );
}
