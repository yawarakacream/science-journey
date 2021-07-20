---
title: "MathematicaとWolfram言語"
draft: true
---

**Wolfram 言語** は Wolfram Research 社が開発した **関数型言語** です．

従来は Mathematica で使用する正式名称のない言語でしたが，  
今日では Mathematica から独立し，ひとつのプログラミング言語として数えられています．

現在の Mathematica は Wolfram 言語の実行環境と思えばよいでしょう．  
[Wolfram|Alpha](https://www.wolframalpha.com/) というウェブ上の実行環境も存在しますが，本サイトでは Mathematica 上での使用を想定しています．

Wolfram 言語は組み込みの関数（Wolfram 言語に元々実装されている関数）が豊富で，  
プログラミングの知識がなくとも簡単に数式処理が行えるよう設計されていると言われています．

実際，たとえば

~~~code:differential.nb
In[1]:= D[x^2, x]
Out[1]= 2 x
~~~

とするだけで非常に簡単に微分 $(x^{2})' = 2x$ を計算してくれます．

一方で複雑なロジックを手続き型でガリガリ書くこと，つまり C 言語で if 文や for 文を駆使するようなことは想定されていません．

関数型言語とは関数を主軸に処理を記述する言語です．  
一般的な言語としては Haskell や Scala が有名でしょうか．

Wolfram 言語はかなり厳しい関数型言語で，たとえば C 言語の if 文はあくまで言語仕様にある文ですが，  
Wolfram 言語ではそれですら If というひとつの関数になります．

ただ微分するだけなどなら確かに誰でも簡単にできますが，複雑な処理を記述するときには関数型言語だということを意識せざるを得ません．

もっとも言語機能が弱すぎるので複雑な処理を書くのは難しいですね．．．  
関数型言語というか，一般的な言語と同じ扱いをするのが間違いかもしれません．

# 公式ドキュメント

ふつうプログラミング言語を学ぶ際は公式ドキュメントを読むのが最もよいのですが，  
Wolfram 言語は Mathematica か Wolfram|Alpha 以外で使うことはまずないので正直オーバーワークです．

本サイトは基本構文とよく使う関数やショートカットを纏めたメモです．

[公式ドキュメント (www.wolfram.com)](https://www.wolfram.com/language/elementary-introduction/2nd-ed/index.html)
