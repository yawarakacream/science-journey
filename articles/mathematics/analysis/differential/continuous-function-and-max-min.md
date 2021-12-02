---
title: "連続関数と最大値最小値定理"
draft: true
---

~~~definition:関数の連続性

$f(x)$ が $x = a$ で **右連続** $\overset{def}{\iff}$ $\displaystyle \lim_{x \rightarrow a + 0} f(x) = f(a)$

$f(x)$ が $x = a$ で **左連続** $\overset{def}{\iff}$ $\displaystyle \lim_{x \rightarrow a - 0} f(x) = f(a)$

$f(x)$ が $x = a$ で **連続** $\overset{def}{\iff}$ $f(x)$ は $x = a$ で右連続かつ左連続

$f(x)$ が区間 $I$ で **連続** $\overset{def}{\iff}$ $f(x)$ は ${}^{\forall}x \in I$ で連続

$f(x)$ が **連続関数** $\overset{def}{\iff}$ $f(x)$ はその定義域で連続

~~~

~~~theorem:連続関数の性質

$f(x),\ g(x)$ が $x = a$ で連続

$\quad\implies$ $\displaystyle f(x) \pm g(x),\ f(x) ~ g(x),\ \frac{f(x)}{g(x)}$ は連続

$f(x)$ が $x = a$ で連続かつ $g(y)$ が $y = f(a)$ で連続

$\quad\implies$ 合成関数 $(g \circ f) (x) ~ (= g(f(x)))$ は連続

~~~

高校のときと同様の定義です．

~~~theorem:最大値最小値定理

$f(x)$ が有界閉区間 $I = [a,\ b]$ で連続

$\quad\implies$ $f(x)$ は $I$ で最大値・最小値をもつ

~~~

開区間だと成り立たないことに注意します．  
（反例：$f(x) = 1/x,\ I = [0,\ 1]$）
