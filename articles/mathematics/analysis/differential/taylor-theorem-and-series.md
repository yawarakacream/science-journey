---
title: "Taylorの定理・展開"
description: "解析学で最も重要な定理のひとつであるTaylorテイラーの定理とTaylorテイラー展開の概要と証明です．"
draft: true
---

~~~theorem:Taylorの定理

実関数 $f(x)$：区間 $[a,\ b]$ で $n$ 階微分可能 とする．

このとき，

$$
{}^{\exists} c \in (a,\ b) \quad s.t. \quad f(b) = \sum_{k = 0}^{n - 1} \frac{f^{(k)}(a)}{k!} (b - a)^{k} + \frac{f^{(n)}(\textcolor{red}{c})}{n!} (b - a)^{n}
$$

が成り立つ．

これを **Taylor の定理**（テイラーの定理）という．

$R_{n} = \displaystyle \frac{f^{(n)}(c)}{n!} (b - a)^{n}$ とおくとき，  
$R_{n}$ を **Lagrange の剰余項**（ラグランジュの剰余項），または単に **剰余項** という．

```spoiler:close:証明

$A \in \R$ を以下をみたすようにとる．

$$
f(b) = \sum_{k = 0}^{n - 1} \frac{f^{(k)}(a)}{k!} (b - a)^{k} + \frac{A}{n!} (b - a)^{n}
$$

また，関数 $g(x)$ を

$$
g(x) = f(b) - \sum_{k = 0}^{n - 1} \frac{f^{(k)}(x)}{k!} (b - x)^{k} + \frac{A}{n!} (b - x)^{n}
$$

とおく．

このとき $g(x)$ は区間 $[a,\ b]$ で連続かつ微分可能で $g(a) = g(b) = 0$ なので，  
[Rolle の定理](/mathematics/analysis/differential/rolle-and-mean-value) より $g'(c) = 0$ をみたす $c \in (a,\ b)$ が存在する．

$g(x)$ を $x$ で微分すると

$$
g'(x) = \frac{(b - x)^{n - 1}}{(n - 1)!} (A - f^{(n)}(x))
$$

$x = c$ を代入して

$$
g'(c) = \frac{(b - c)^{n - 1}}{(n - 1)!} (A - f^{(n)}(c))
$$

$b \neq c$ に注意して（$\because ~ c \in (a,\ b)$），$g'(c) = 0$ より

$$
A = f^{(n)}(c)
$$

すなわち

$$
f(b) = \sum_{k = 0}^{n - 1} \frac{f^{(k)}(a)}{k!} (b - a)^{k} + \frac{f^{(n)}(c)}{n!} (b - a)^{n}. \quad \square
$$

---

$g(a) = g(b) = 0$ や $g'(x)$ は頑張って計算します．

```

## 系：$x = a$ を中心とする Taylor の定理

実関数 $f(x)$：$a$ を含む区間で $n$ 階微分可能 とする．

このとき，

$$
{}^{\exists} c \in (a,\ x) \quad s.t. \quad f(x) = \sum_{k = 0}^{n - 1} \frac{f^{(k)}(a)}{k!} (x - a)^{k} + \frac{f^{(n)}(\textcolor{red}{c})}{n!} (x - a)^{n}
$$

~~~

一般の関数を多項式で表せるという驚くべき定理です．

$b = x$ とした系も知られています．  
これは以下の Taylor 展開で有用です．

~~~theorem:Taylor展開

実関数 $f(x)$：$a$ を含む区間 $I$ で無限階微分可能 とする．

このとき，任意の $x \in I$ に対して

剰余項 $R_{n}(x) = \displaystyle \frac{f^{(n)}(c)}{n!} (x - a)^{n}$ を定義し $\displaystyle \lim_{n \rightarrow \infty} R_{n}(x) = 0$ をみたすならば

$$
f(x) = \sum_{k = 0}^{\infty} \frac{f^{(k)}(a)}{k!} (x - a)^{k}
$$

と表せる．

これを **$x = a$ 周りの Taylor 展開**（テイラー展開）という．

~~~

テイラーの定理を無限に続けたとして，剰余項，つまり余りの部分が $0$ に収束するとき，なんと元の関数と一致してしまいます．

実際に計算しようとして無限に続けるのは不可能ですが，ある程度の $n$ でも $x = a$ の近くならばいい精度がでます．

つまり，$\sum$ の後の方の項は $x$ が $a$ から離れたとき用のある種の補正項なのです．

$a = 0$ とした [Maclaurin の定理・展開](maclaurin-theorem-and-series) もよく知られています．
