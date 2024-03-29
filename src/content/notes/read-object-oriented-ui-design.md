---
noteId: "read-object-oriented-ui-design"
title: "オブジェクト指向UIデザインを読んだ"
description: ""
category: "other"
emoji: "🖍️"
tags: ["ui", "frontend", "design", "book"]
pubDate: "2021-03-17"
---

オブジェクト指向 UI デザインという本を読みました。本記事はそのまとめ・書評です。本書では、「使いやすいソフトウェアをデザインするための実践的な手順」「使いやすいソフトウェアデザインはなぜ使いやすいのか」といった内容についてわかりやすく説明されています。

# 1.読んだ理由

まず、この本を読もうと思った理由についてです。理由としては次のものが挙げられます。

- 個人で開発するアプリケーションのデザインがダサいという自覚があった。
- 本の帯に書かれていた「UI デザインの銀の弾丸」という言葉に惹かれた。
- 使いやすいソフトウェアが、「なぜ」使いやすいのかがわかると思った。

読もうと思った目的は主にソフトウェアの「見た目の改善」です。しかし、本書で解説されている内容は「機能」「操作対象」と言った低いレイヤーのソフトウェアデザインが中心でした。そのため、読む前に設定していた目的を達成できたとは言えません。ですが、本書を読む前の私は「機能」「操作対象」といった部分をソフトウェアデザインの一部として捉えていませんでした。なので、優れたレイアウトや配色だけがソフトウェアデザインではないという新しい知見が得られたのだと思います。

# 2.本書を通して得られた知見

内容について解説していく前に、本書で得られた知見について述べたいと思います。私が本書を通して得られた知見は以下の通りです。

- ソフトウェアはユーザーが操作できる対象を「ソフトウェアの機能」ではなく「ユーザーの興味となる対象物」としてデザインした方が使いやすくなる。
- ソフトウェアデザインは「モデル・インタラクション・プレゼンテーション」の 3 層からなり、優れたレイアウト・配色のデザイン = 優れたソフトウェアデザインではない。
- タスク指向 UI よりオブジェクト指向 UI が使いやすい理由は、オブジェクト指向 UI の方がより現実世界における「道具を使う」という行為の再現性が高いからである。

このことを踏まえて次章で内容について解説していきたいと思います。

# 3.内容

本書は全 6 章構成です。各章で以下の内容が解説されています。

- 1:オブジェクト指向 UI の概要
- 2:ソフトウェアデザインの 3 層構造
- 3:オブジェクト指向 UI の作成手順
- 4,5 : オブジェクト指向 UI デザインの実践課題
- 6 : コンピュータの UI が現在使われる GUI に至るまでの変遷・歴史

前半で理論・手順の解説を行い、後半で実践的な課題を通して、オブジェクト指向デザインのフローを習得できるような構成になっています。実践課題はレベルの異なる問題が 18 題用意されています。各課題について機能要件から実際の UI に落とし込むまでの手順が詳細に解説されているので非常に興味深いです。

しかし、

- 本記事はオブジェクト指向 UI デザインの考え方についてまとめることを目的としている
- 全ての問題を丁寧に解いたわけではない

という 2 つの理由から 4,5 章の実践課題の内容については解説を省きたいと思います。

## 3.1 オブジェクト指向 UI の概要

まず、オブジェクト指向 UI とはそもそも何であるか？という点についてです。オブジェクト指向 UI は一言で言うと

ユーザーにとっての興味の対象であるオブジェクトを直接操作できる UI デザイン

のことです。しかし、これだけではイメージが湧きづらいと思うので、以下に詳しく解説していきます。

筆者は、使いやすい UI であるオブジェクト指向 UI に対して、使いにくい UI の典型例としてタスク指向 UI というものを上げています。

タスク指向 UI は

- ユーザがアプリケーションを通して実行したい処理すなわちアプリケーションが提供する機能を偏重した UI デザイン

のことです。

イメージの容易化のためにタスク指向でメモ帳アプリをデザインしてみます。一般的なメモ帳アプリが提供すべき機能としては

- メモの追加
- メモの参照
- メモの更新
- メモの削除

などがあります。基本的には CRUD 操作です。ここで記した「アプリケーションの機能」を素直にデザインに落とし込んだ場合、以下のようなデザインになります。

このようなタスク指向デザインの特徴としては、処理を実行するまでの操作手順が、

「機能の選択」→「オブジェクトの選択」

という順番であるという点です。

このデザインの問題点としては以下のものが挙げられます。

#### ユーザーが実行できる機能が限られた状態（モード）が生じてしまう

例えば、上のデザインでは「Delete Memo」というボタンを押すと、「メモを削除する」ことしかできない「Delete Memo」ページに遷移します。他の Create,Update,Read についても同様です。メモアプリのようなシンプルなアプリケーションであれば、それほど問題にはならないかもしれません。しかし、アプリケーションを通してユーザが実行したい処理が複雑になるほど、「モードがある」アプリケーションの問題は顕在化します。ある処理を実行するまでにユーザがしなくてはならない操作が複雑でわかりにくくなっていくのです。

#### ページ数が多い

タスク指向で作成されたアプリケーションはページ数が多くなりがちです。各オブジェクトに対して、CRUD 操作を行うことを想定したら、最低でもオブジェクトの数 x 4 程度のページが必要になります。

タスク指向の問題点を踏まえた上で、オブジェクト指向でデザインされたメモアプリの具体例を見ていきましょう。

オブジェクト指向でデザインされたメモアプリの代表例としては、Google Keep が存在します。Google Keep のデザインは以下の通りです。

タスク指向デザインではファーストビューに機能の一覧を表示していました。一方で、オブジェクト指向デザインのファーストビューはオブジェクトの一覧であることがわかります。すなわち、オブジェクト指向デザインの特徴は、処理を実行するまでの操作手順が

「オブジェクトの選択」→「機能の選択」

であることです。これにより

- オブジェクトに対して、削除・更新するので、モードが生じない
- ページ数の減少

と、タスク指向デザインで問題視されていた点を改良することが可能です。

使いやすいソフトウェアのデザインは総じてオブジェクト指向 UI デザインによりデザインされている。

というのが、筆者の主張です。

では、なぜオブジェクト指向デザインは使いやすいのでしょうか？

これは、私が個人的に考えたことも含まれるのですが、オブジェクト指向デザインの「モノ → 処理」という流れはタスク指向デザインよりも現実世界の行動に近いからであると考えられます。

例えば現実世界でコップを使おうとして、それを手に取る前に、

1「コップの中に水を入れますか？」
2「コップの中の水を飲みますか？」
3「コップを洗いますか」

などとは聞かれません。コップという「モノ」を手にとった後でもその利用者である私たちに、「コップをどのように使用するか」の選択権は残されています。

しかし、企業のアプリケーションなどをエンジニアがデザインするとどうしてもタスク指向デザインになりがちです。なぜなら、企業のアプリケーションはそもそもタスクをオンライン上で実行できるようにすることを目的としたものです。そのため、普段行っているタスクをそのままデザインに落とし込んでしまい、タスクの流れに基づいた線形なデザインになってしまいがちです。

そこで次章以降では、オブジェクト指向デザインを作成するための具体的なプロセスが紹介されています。

## 3.2 ソフトウェアデザインの 3 層構造

先にも述べたとおり、

・優れたソフトウェアデザイン＝優れたレイアウト・配色

ではありません。ソフトウェアデザインとは、もっと重層的で複雑なものです。本章では、ソフトウェアデザインは

- モデル
- インタラクション
- プレゼンテーション

という 3 層で捉えることができると解説しています。各層で、別々のデザインプロセスを踏む必要があり、優れたデザインのソフトウェアは各層のデザインが正しく行われています。

各層の役割は以下の通りです。

- モデル:ソフトウェア内で使用されるオブジェクトの定義
- インタラクション:モデル層で定義された、オブジェクトに対して、ユーザーが実行する機能の定義
- プレゼンテーション:モデル層
- インタラクション層で定義された機能を具体的な見た目で表現する。

本書で紹介されているデザイン手法には、各層に対するデザインプロセスが存在します。各層に対するデザインプロセスは以下の通りです。

1. モデル:オブジェクトの抽出
2. インタラクション:ビューとナビゲーションの検討
3. プレゼンテーション:レイアウトの適用

ここで重要なのは、必ずしも 1→2→3 と抽象度の高い層から低い層へという手順で進める必要はないということです。むしろ優れたデザイナーはプレゼンテーションにあたる具体的なデザインのイメージを先に掴むと筆者は述べています。すなわち、3 のプレゼンテーションに対応する部分のイメージを先に掴み、その後で必要となるオブジェクトを明確化するということです。

## 3.3 オブジェクト指向 UI デザインの実践

オブジェクト指向 UI デザインの具体的な手法について説明していきます。

オブジェクト指向 UI デザインは

① オブジェクトの抽出 ②  ビュー・ナビゲーションの検討 ③ レイアウトパターンの適用

という手順で行われます。

① オブジェクトの抽出まずオブジェクトの抽出です。アプリケーションに搭載すべき機能要件については、既に列挙されていることを前提とします。この手順ではまず、列挙されている機能から、名詞を抽出します。例えば、先ほどのメモアプリの場合、削除・更新・追加・参照と 4 つの機能が用意されていましたが、重要な名詞となるのはメモです。

メモアプリのようなシンプルなアプリケーションなら、抽出した名詞は一つですみます。しかし、一般的な中規模以上のアプリケーションであった場合、名詞は 2 つ以上登場するでしょう。その場合は、抽出した複数の名詞間の関係性を書き出し、また具体的な名詞を汎化することが重要です。

次に、全てのオブジェクト間の関連性を図化し（多重度等も含む）、メインオブジェクトとなるオブジェクトを抽出します。メインオブジェクトに付随するオブジェクトはサブオブジェクトとしてメインオブジェクトの子のような位置づけにします。

ここまでで、メインオブジェクト、またそのサブオブジェクトと関連性を図化できたので、次にオブジェクトに対する操作を書いていきます。

以上のことを行うと ER 図のような図が完成します。

②  ビュー・ナビゲーションの検討

手順 ① で抽出した各メインオブジェクトに対して、

・コレクションビュー（一覧画面）・シングルビュー（詳細画面）

の検討を行います。これにより、アプリケーションにおいて、必要となる画面を知ることができるのです。次に検討した結果としての、コレクションビューとシングルビューの遷移図を書きます。どのシングルビューからどのコレクションビューにアクセスするか、どのコレクションビューからシングルビューにアクセスするかといった検討です。

抽出したオブジェクト間の多重度や画面に入りきる情報量によっては

- シングルビューのなかに別オブジェクトのコレクションビューがある
- コレクションビューとシングルビューが一つの画面である

と言ったことが生じ得ます。

③ レイアウトパターンの適用

② までで検討したそれぞれの画面について、レイアウトを決定していきます。決定すべきレイアウトとしては以下のものが挙げられます。

- ルートナビゲーション
- シングルビュー
- コレクションビュー

本書の中ではそれぞれについて、複数のレイアウトパターンが紹介されています。

以上がオブジェクト指向 UI デザインの手順です。しかし、先にも述べたとおり、必ずしも ①→②→③ という手順で作成する必要はありません。優れたデザイナーはこのフローを繰り返すことで、デザインを洗練させていきます。

## 3.4 コンピュータの UI が現在使われる GUI に至るまでの変遷・歴史

本章では、コンピュータの UI が現在使われる GUI になるまでの変遷について解説されています。

コンピュータの GUI が一番初めに導入されたのは、軍事用のシミュレータです。当然ですが、軍事の分野はミスが起きることにより、重大な事態を招く可能性の高いです。そこで、ミスが生じにくいように、コンピュータを使いやすくするために導入されました。

最初は軍事用に導入された GUI でしたが、操作性の高さが評価され、徐々に軍事以外の分野のコンピュータでも使用されるようになります。やがて、一般向けのコンピュータにも GUI が導入されます。

具体的な例としては、

- NLS
- Sketchpad
- Lisa

などが挙げられます。GUI の登場により、PC の操作性は格段に向上し、一般の人でも使いこなせるものとなりました。

そして、PC が一般に普及した頃、さらなる UI の飛躍として、イノベーティブなプロダクトが開発されました。そう、iPhone(スマートフォン)です。

スマートフォンは「対象物を直接、手で触れて操作できる」という点で究極のオブジェクト指向 UI であると言えるでしょう。

# 4.まとめ

本書を通して、ソフトウェアの UI/UX デザインにおけるレイアウト,色のデザイン,パーツのマテリアル度合いというのはあくまで一部分的な物であり、それ以前の使いやすさという部分もまた重要である、ということを学ぶことができました。

そしてそれを実現するための銀の弾丸が、オブジェクト指向 UI デザインです。アプリケーションの機能からユーザの興味の対象となる物体を抽出して、それを UI で擬似的に再現します。

本書を読む目的として設定していた「ソフトウェアデザインにおける見た目の向上」を達成することはできませんでした。しかし、非常に多くの知見が得られたと思います。
