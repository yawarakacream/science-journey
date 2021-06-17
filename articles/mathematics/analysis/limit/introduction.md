---
title: "極限の導入"
description: "微分積分をきちんと扱う準備として，大学らしい厳密な極限を導入します．"
---

微分積分を扱う準備として，極限というものを考えます．

極限とは，概ね以下のようなものです（高校の定義）．

~~~definition:数列の極限（高校の定義）
数列 $\{a_{n}\}$ がある．  
$n$ を限りなく大きくすると $a_{n}$ が限りなく $\alpha$ に近づくとき，
$a_{n}$ は $\alpha$ に **収束する** といい，
$$
\lim_{n \rightarrow \infty} a_{n} = \alpha \quad \quad a_{n} \rightarrow \alpha
$$
のように表す．
~~~

~~~definition:関数の極限（高校の定義）
関数 $f(x)$ がある．  
$x$ が限りなく $a$ に近づくと $f(x)$ が限りなく $\alpha$ に近づくとき，
$f(x)$ は $x \rightarrow a$ で **収束する** といい，
$$
\lim_{x \rightarrow a} f(x) = \alpha \quad \quad f(x) \rightarrow \alpha ~ (x \rightarrow a)
$$
のように表す．
~~~

しかし，これは非常に曖昧で，厳密な議論をするのに耐えられません．  
たとえば「[はさみうちの原理](/mathematics/analysis/limit/properties-and-squeeze)」は大学入試で頻出なのにも関わらず，ふわふわとした説明しか教えられてこなかったでしょう．

本セクションでは，極限を厳密に定義して，その意味を確認します．

# 表記揺れ

### 数列

$\{a_{n}\}$ だと集合にも見えてしまったり $n$ の範囲がわからなくなったりしてしまうので，それらを明確にするために，
$$
\{a_{n}\}_{n} \quad \{a_{n}\}_{n = 1, 2, ...} \quad \{a_{n}\}_{n = 1}^{\infty}
$$
のように書くことがあります．

### 極限

取る極限の変数などが明らかな場合，$n \rightarrow \infty$ の部分を書かず，
$$
\lim a_{n} = \alpha
$$
のように略記することがあります．
