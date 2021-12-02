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
\lim_{n \rightarrow \infty} a_{n} = \alpha \qquad a_{n} \rightarrow \alpha \qquad \lim a_{n} = \alpha
$$
のように表す．
~~~

~~~definition:関数の極限（高校の定義）
関数 $f(x)$ がある．  
$x$ が限りなく $a$ に近づくと $f(x)$ が限りなく $\alpha$ に近づくとき，
$f(x)$ は $x \rightarrow a$ で **収束する** といい，
$$
\lim_{x \rightarrow a} f(x) = \alpha \qquad f(x) \rightarrow \alpha ~ (x \rightarrow a)
$$
のように表す．
~~~

しかし，これは非常に曖昧で，厳密な議論をするのに耐えられません．  
たとえば「[はさみうちの原理](/mathematics/analysis/limit/properties-and-squeeze)」は大学入試で頻出なのにも関わらず，ふわふわとした説明しか教えられてこなかったでしょう．

本セクションでは，極限を厳密に定義して，その意味を確認します．
