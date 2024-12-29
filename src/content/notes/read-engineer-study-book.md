---
noteId: "read-engineer-study-book"
title: "「エンジニアの知的生産術」を読んだ"
description: ""
category: "other"
emoji: "🎃"
tags: ["engineer", "study", "book"]
pubDate: "2020-08-04"
---

エンジニアの知的生産術という本を読んだので、その書評・まとめです。著者の西尾泰和さんは、サイボウズで 10 年間知的生産性に関する研究を行ってきました。本書では「エンジニアが効率的に物事を学ぶにはどうすればよいのか？」「アイデアを生み出すにはどうすればよいのか？」について、わかりやすく、まとめられています

# 1.なぜ読んだのか(目的設定)

なぜ本書を読もうと思ったのか。書店の技術書コーナーに置かれており、ずっと気になっていたというのもありますが、現場で開発する機会が増えてきた・増えてくるであろうという今のタイミングで以下のことを言語化しておきたいと思ったためです。

- 新しいプログラミング言語や技術を効率よく学ぶ方法
- 何をもって理解したというのか？
- 何をもって読んだというのか？

趣味的な個人開発なら、「なんかいじったら動いた、ワァーイ」でよいかもしれません。しかし、プロの現場では、情報収集のスピード感＋実装に対する責任が求められる。そして、「理解する」には「理解する」を「理解する」必要がある。そう思い、本書を読むことにしました。

# 2.結論

内容について、説明していく前に、まず結論から述べたいと思います。私が本書を通して得ることができた知見は以下の通りです。

- 「理解した」と「理解していない」、「読んだ」と「読んでない」というのは 0 or 1 ではなく、その境界が曖昧なグラデーションである
- 読む・理解する・マスターするというのは目標設定として、曖昧であり、典型的なバッドパターンといえる。
- 認知的に高度なアウトプットとインプットを繰り返すことが、何かを学ぶ上で時間対効果が最も高い。

以上のことを踏まえて本書の内容について、説明していきます。

# 3.内容

## 3.1 新しいことを学ぶ

筆者は新しいことを学ぶ手順を

① 情報収集
② 抽象化
③ 実証

という 3 つの段階に分けています。

① 情報収集

何か新しいことを学ぶとき、その対象に関する情報がないというのは、手掛かりが全くない状態です。そのため、当然まずは情報収集を行う必要があります。新しいプログラミング言語を学ぶ上で代表的な情報収集の手法としては以下のようなものがあります。

・公式ドキュメント

・オンラインコンテンツ

・書籍

しかし、ここで重要なのはこれらの情報源からどのようにして情報を得るべきか？という点です。

最も効率が良いのはやはり、知りたいところから学ぶという手法です。知りたいところというのは、開発において必要になった点や自分の好奇心が高まる場所のことです。しかし、知りたいところから学ぶためには事前に知りたいところに関する情報がどこにあるかを把握している必要があります。そのため、学習材料の全体像を事前に大雑把でもよいので把握していることが重要です。

② 抽象化

① で得た情報を、ほかの場所でも応用ができるように抽象化します。抽象化の重要性は前田裕二さんの「メモの魔力」においても触れられていました。抽象化とは得られた情報をより汎用的なものに変換することです。

③ 検証

② で得られた抽象をもとに新たな仮説を立て、検証を行います。エンジニアでいうところの「プログラムの実行」です。プログラムの実行がうまくいかなかった・エラーが生じた場合は「このプログラムでは、エラーが生じる」という新たな情報が得られます。

このようにして、① 情報収集 ⇒ ② 抽象化 ⇒ ③ 検証 ⇒ ① 情報収集というサイクルを回すことにより、新たなことを学びます。

## 3.2 やる気を出すには

やる気が出ない人には取り組もうとしているタスクが大きすぎるという人が多いです。

やる気を出すためにはタスクが適切なサイズであることが重要です。タスクを適切なサイズに分割するには、・タスクの全体像を把握する・優先順位を決める・適切な作業時間で終了する大きさにタスクを分割する。

タスクを適切なサイズに分割するためには手元にあるタスクの全体像を把握しなければなりません。そのため、まずはタスクをすべて書き出しましょう。優先順位をつけるのは次のフェーズです。この段階では書き出すことに集中します。

次にタスクの優先順位付けです。しかし、ソートの計算量が最低でも O(nlog(n))であるように優先順位順に並び変えるというのはそれ自体が難しい作業だと思います。また、優先順位の軸が人によって曖昧であるという点が問題です。何を基準に優先順位をつけるかについてはチームで話し合っておくべきでしょう。

最後に適切な作業時間で終了する程度の大きさにタスクを分割します。筆者はその単位として 1 ポモドーロ単位（約 30 分程度。人により異なる）を提案しています。30 分おきに作業から離れることで、視点を変えることができる、と本の中では説明されています。しかし、個人的には 30 分は短いように感じるので 2h 程度を 1 ポモドーロ単位とし、タスクのサイズをそれにより計算するのがよいと考えています。

## 3.3 記憶する

効率よく記憶するには、すでに様々な本で紹介されていますが、インプットとアウトプットを繰り返すことが重要です。 本書の中で紹介されていた面白い実験があります。80 人の大学生にある化学の文章を読ませ、1 週間後に理解度測定のテストを行います。学習方法に応じて彼らを以下の 3 つのグループに分けました。・A.1 回学習群:教科書を一回読むだけ・B.繰り返し学習群：教科書を 4 回繰り返し読むだけ・C.思い出し学習群:教科書を読み、思い出せるだけ思い出し、また教科書を読み…という学び方をしたグループそして、3 グループのテスト結果とテストに対する自信を調査したところ以下のような結果が得られました。・テスト結果: C > B > A・自身:B > A > C 学習の過程で自分が読んだ内容を全く覚えていないという事実を突きつけられるグループ C の学生たちの自信は 3 グループの中で最も低いです。しかし、テスト結果は最も良いことがわかります。この実験結果より、以下のことがわかります。・何かを学習するにはインプットとアウトプットの繰り返しが最も効率が良い・記憶の主観と現実には大きな乖離があるまた、アウトプットの中でも認知的に高度な出力を行うのがよいでしょう。

## 3.4 効率的に読むには

本を読む目的には以下の三つがあります。

- 娯楽
- 情報を見つける
- 理解を組み立てる。

このうち娯楽のための読書は本書のスコープ外です。情報を見つける読書と理解を組み立てる読書は完全に区別できるものではありません。グラデーションです。そして、本を読む目的設定をどこにするかは読者が主体的に決めることです。 では、まず情報を見つける読書法です。先にも述べた通りプログラミング言語を学ぶには必要な情報を必要な時に得るという方が、効率が良いです。そのため、プログラミング言語が解説された技術書を読むのは情報を見つける読書法が適していると思います。情報を見つける読み方の手順がいくつか紹介されていましたが、ここでは、それらを抽象化し、私なりにアレンジした読書の手順を書きたいと思います。① 目的設定 ② 目次・フォトリーディングによる全体像の把握 ③ 問の設定 ④ 通読 ⑤ 問いへの解答 ⑥ 書評・まとめによるアウトプット 次に理解を組み立てる読書法です。哲学書や数学書、CS の理論などについて書かれた本を読む際はこちらが適しています。1 ページ・1 行を読むのに数時間単位の時間がかかることもあるといいます。しかし、私はこの方法による読書を経験したことがありません。実務家にはこのような読書体験をする機会がありません。学生のうちに経験したいと思います。（量子力学などの本はこの方法で読むのが適していると思っています） 効率的に読む手法として多くの本で速読が紹介されています。しかし、読む速度には理解する速度が読む速度に追いつかないというボトルネックがあります。やみくもに速読するのではなく得たい理解度・目的に応じた読書速度を設定すべきです。

## 3.5 考えをまとめるには

大学生や研究者ならレポート・論文、エンジニアや社会人ならプレゼンなど自分の考えをまとめてアウトプットしなければいけない機会は頻繁にあります。考えをまとめる方法として KJ 法という方法があります。KJ 法の手順は以下の通りです。① 情報を書き出す ② 書き出した情報を分類する ③ 文章やスライドなど 1 次元的な情報にまとめる KJ 法の手順自体は単純だと思います。まず、まとめるべき対象に関する情報をとにかく書き出します。書き出し先は本の中ではカードを推奨しています(② の手順がやりやすいから)。この手順は、書き出す情報の量が目標に達するまで続けます。例えば、カード 100 枚分、などです。目標に達しないうちはまだまだ情報不足なので、インプットするなど別途努力が必要です。次に、書き出しにより得られた情報の山を分類し、それぞれの分類に題名をつけます。いわゆる抽象化です。ここでつけられた分類の題名は後々、副題として使用することができます。そして、分類された情報をもとにスライドや文章といったまとめられた情報を作成していきます。以上が KJ 法の手順です。KJ 法は情報・思考をまとめるうえで優れた、定石的な手法であると思いました。しかし、カードの枚数が目標に達するまで着手しないというのは締め切りが迫っている状況では難しいと思います。ここで重要なのは KJ 法自体ではなく、考えをまとめる手順は・大量の具体 ⇒ 抽象という流れであるということだと思います。

## 3.6 アイデアを思いつく

本書で紹介されていたアイデアを思いつく方法は KJ 法と非常に似ています。アイデアを思いつくまでの流れを 3 つのフェーズに分けています。

① 耕す ⇒ ② 芽生える ⇒ ③ 育てる

という流れです。それぞれについて簡単に説明すると

① 耕す:情報収集・インプットをするフェーズ。例:市場の調査,知識を増やす,多様な経験…
② 芽生える情報がアイデアへと昇華されるフェーズ。例:待つ,寝る,① の過程で思いつくこともある
③ 育てる得られたアイデアをより洗練させるフェーズ。例:提案書の作成,プロトタイプの作成,最小機能実装

締め切りまでにアイデアを提出しなければならない際、それぞれのフェーズを計画に入れておく必要があります。

## 3.7 学ぶことを決める

何を学ぶか迷う、ということは多々あります。しかし、大前提として何を学ぶか、という意思決定の正しさは事後的にしかわかりません。あるプログラミング言語を学び始めることが自分の将来に役立つか否かは将来になってからしかわかりません。エンジニアとして経験が短いので、何とも言えませんが、何を学ぶかにそれほどこだわる必要はないと思っています。特に、学生のうちは。 しかし、戦略的に学ぶ対象を決めるというのも選択肢の一つです。何かを学ぶことにより、希少価値を上げたいのなら、卓越する必要があります。卓越には以下の 2 通りが存在します。・1 つの分野で抜きん出る。・できる分野を複数持ち、掛け合わせにより卓越する。どちらが適しているかは、人それぞれでしょう。それぞれのメリット・デメリットについて考えたものをまとめると、・1 つの分野で抜きん出る。メリット:その分野に関する高度な仕事をすべて任せてもらえる。デメリット:目指すにはリスクが大きい・複数の分野の掛け合わせにより卓越する。メリット:リスク分散が可能。・知識の貿易商になれるデメリット:すべてが中途半端になる。2 通りと述べましたが、これに関してもグラデーションであると私は思います。極端になりすぎず、この 2 通りの中間の中でもどちら寄りであるかを適切に見極めていく必要があります。個人的には、あらゆる分野をそれなりに（抽象的な表現ですみません）触れて、一つ,二つの分野で卓越するいわゆる T 型・π 型の人材が適切な落としどころと考えていま

# 4.まとめ・この本を受けて変えていきたいこと

この本を通して得た知見を受けて、修正した方がよいと思える自分の行動が何点が見つかったので、それについても触れていきたいと思います。

1. 認知的に高度な出力を行う

結論の章でも述べた通り、理解というのは 0,1 ではなく、その境界が曖昧なグラデーションです。そのため、新しい知識と対峙するときは、完全な理解を目指して力むのではなく、自分の理解度を少しでも高めていく努力をする方が賢明だと思います。そのためには、入力した知識に対して、認知的に高度な出力をしていくことが有効です。エンジニアの場合は以下のような例が挙げられます、

- コードを読むだけ 開発・実装・改良
- エラー・問題を修正するだけ \<\<\< 解決方法を記事化する・同僚に説明・報告する
- 本の文字を追うだけ \<\<\< 書評を書く

2. 本や論文を読む際の事前準備・事後行動

本や論文に書かれた知識を自分の知識にしていくためには、本を通読するだけでは不十分です。事前準備・事後行動も含めて、以下のような手順で読書をしていきます。

1.「なぜ読むのか」という目的設定(1 つ以上)

2. 目次を読む + フォトリーディングで全体像を把握する

3. 本の内容を踏まえた疑問設定(3 つ以上)

4, 通読 or 手順 3 で作成した疑問の解答を探すための読書

5.情報を書き出すことによるアウトプット

6.書評を書くことによる情報整理

以上のことを心がけていきたいと思います。