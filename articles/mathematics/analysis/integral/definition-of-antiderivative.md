---
title: "原始関数・不定積分の定義"
---

~~~definition:原始関数

関数 $f(x)$ に対し，

$\displaystyle \frac{d}{dx} F(x) = f(x)$ をみたす関数 $F(x)$ を $f(x)$ の **原始関数** という．

~~~

つまるところ微分の逆操作です．

定数は微分すると $0$ になるので，$F(x)$ が原始関数のとき任意の定数 $C$ に対し $F(x) + C$ も原始関数です．

また，よって一般の原始関数を考えることができます．

~~~definition:不定積分

一般の原始関数 $F(x) + C$ を **不定積分** といい，$\displaystyle \int f(x) ~ dx$ で表す．

$$
\int f(x) ~ dx := F(x) + C
$$

$x$ を **積分変数**，$C$ を **積分定数** という．

$f(x)$ を **積分する** $\overset{def}{\iff}$ $f(x)$ の不定積分を求める

原始関数全体のことを不定積分ということもある．

~~~

高校の定義と同様です．

# 有名な手法

~~~theorem:部分積分法
$$
\int f(x) ~ g'(x) ~ dx = f(x) ~ g(x) - \int f'(x) ~ g(x) ~ dx
$$
~~~

関数が積の形になっているとき，積分する方，微分する方を選べる定理です．

~~~theorem:置換積分法
$$
\int f(x) ~ dx = \int f(g(t)) ~ g'(x) ~ dt
$$
~~~

高校の定理と同様です．