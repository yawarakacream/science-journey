---
title: "Rolleの定理と平均値の定理"
description: "Rolleの定理を証明し，Cauchy（コーシー）の平均値の定理，その特別な場合である平均値定理を証明します．平均値の定理は高校でも扱われますが，大学では厳密な証明を与えることができます．"
draft: true
---

~~~theorem:Rolleの定理

$f(x)$：区間 $[a,\ b]$ で連続，区間 $(a,\ b)$ で微分可能 とする．

このとき，

$$
f(a) = f(b) \implies {}^{\exists} c \in (a,\ b) \quad s.t. \quad f'(c) = 0
$$

これを **Rolle の定理**（ロルの定理）という．

```spoiler:close:証明

$f(x)$ が定数関数のときは $f'(x) = 0$ より明らか．

$f(x)$ が定数関数でないとき，

[最大値最小値定理](/mathematics/analysis/differential/continuous-function-and-max-min) より，$f(x)$ が最大値，最小値をとる点 $c_{1},\ c_{2} \in [a,\ b]$ が存在する．

このとき（$f(x)$ は定数関数ではないので）$c_{1} \neq c_{2}$ であり，  
$c_{1},\ c_{2}$ の少なくとも一方は $(a,\ b)$ に含まれる．

その点を $c$ とおけば，$f(x)$ は $x = c$ で最大値または最小値をとるので $f'(c) = 0$．$\square$

```

~~~

平均値の定理，[Taylor の定理](/mathematics/analysis/differential/taylor-theorem) に繋がる重要な定理です．

~~~theorem:平均値の定理

$f(x)$：区間 $[a,\ b]$ で連続，区間 $(a,\ b)$ で微分可能  
$g(x)$：区間 $[a,\ b]$ で連続，区間 $(a,\ b)$ で微分可能，$g'(x) \neq 0$ とする．

このとき，

$$
{}^{\exists} c \in (a,\ b) \quad s.t. \quad \frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(c)}{g'(c)}
$$

これを **Cauchy の平均値の定理**（コーシーの平均値の定理）という．

```spoiler:close:証明

まず $g(b) - g(a) \neq 0$ を示す．

$g(a) = g(b)$ とすると，Rolle の定理より $g'(c)$ なる $c \in (a,\ b)$ が存在するが，$g'(x) \neq 0 ~ ({}^{\forall}x \in (a,\ b))$ に矛盾．

よって $g(b) - g(a) \neq 0$．

$F(x)$ を

$$
F(x) := f(x) - f(a) - \frac{f(b) - f(a)}{g(b) - g(a)} (g(x) - g(a))
$$

とすると，$F(x)$ は $[a,\ b]$ で連続，$(a,\ b)$ で微分可能で，$F(a) = F(b) = 0$．

よって Rolle の定理から $F'(c) = 0$ をみたす $c \in (a,\ b)$ が存在する．

$\displaystyle F'(x) = f'(x) - \frac{f(b) - f(a)}{g(b) - g(a)} g'(x)$ より，

$$
F'(c) = f'(c) - \frac{f(b) - f(a)}{g(b) - g(a)} g'(c) = 0
$$

$$
\therefore ~ \frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(c)}{g'(c)}. \quad \square
$$

```

---

$f(x)$：区間 $[a,\ b]$ で連続，区間 $(a,\ b)$ で微分可能 とする．

このとき，

$$
{}^{\exists} c \in (a,\ b) \quad s.t. \quad \frac{f(b) - f(a)}{b - a} = f'(c)
$$

これを **Lagrange の平均値の定理**（ラグランジュの平均値の定理），  
または単に **平均値の定理**（mean value theorem）という．

$g(x) = x$ とした Cauchy の平均値の定理である．

~~~

（Lagrange の）平均値の定理は高校でも扱われました．

大学ではそれを拡張した定理，そして証明を与えることができます．
