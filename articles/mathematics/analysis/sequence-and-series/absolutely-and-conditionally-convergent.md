---
title: "絶対収束・条件収束"
description: "絶対収束・条件収束を定義します．絶対収束する級数は収束することを確認し，Riemannの級数定理（再配置定理）にも触れてみます．"
draft: true
---

~~~definition:絶対収束・条件収束

実級数 $\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が **絶対収束する** $\overset{def}{\iff}$ $\displaystyle \sum_{n = 1}^{\infty} |a_{n}|$ が収束する

実級数 $\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が **条件収束する** $\overset{def}{\iff}$ $\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が収束するが絶対収束しない

~~~

絶対値をつけて正項級数にしてしまって判定された収束性を絶対収束といいます．

~~~theorem:絶対収束
$\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が絶対収束する $\implies$ $$\displaystyle \sum_{n = 1}^{\infty} a_{n}$$ が収束する
~~~

直感的です．

正項級数は符号がバラバラな級数より扱いやすく，正項級数にだけ使える判定法が複数知られています．
絶対収束性から収束性を導くことがよくあります．

~~~theorem:再配置した級数

$(1)$ 絶対収束する実級数は足す順番を並べ替えても **同じ値に収束する**．

$(2)$ 条件収束する実級数は足す順番を並べ替えると **任意の値に収束及び $\pm\infty$ に発散させることができる**．

~~~

$(2)$ は **Riemann の級数定理**（リーマンの級数定理，再配置定理）などと呼ばれます．
