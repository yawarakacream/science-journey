---
title: "条件付き確率と乗法定理"
description: "条件付き確率を定義し，そこから導かれる有名な定理，乗法定理を証明します．"
---

~~~definition:条件付き確率

確率空間 $(\Omega,\ \mathscr{F},\ P)$ と $A,\ B \in \mathscr{F}$ に対し，

$B$ が与えられたときの $A$ の **条件付き確率** $P(A ~ | ~ B)$ は，

$$
P(A ~ | ~ B) := \frac{P(A \cap B)}{P(B)}
$$

ただし，$P(B) = 0$ のときは定義されない．

~~~

高校の条件付き確率と同様です．

~~~theorem:一般乗法定理

確率空間 $(\Omega,\ \mathscr{F},\ P)$ と $A_{1},\ A_{2},\ ...,\ A_{n} \in \mathscr{F} ~ (n \geq 2)$ があって，

$$
P \left(A_{1} \cap A_{2} \cap \cdots \cap A_{n - 1} \right) > 0
$$

のとき，

$$
P \left(A_{1} \cap A_{2} \cap \cdots \cap A_{n} \right) 
$$
$$
\quad = P(A_{1}) ~ P(A_{2} ~ | ~ A_{1}) ~ P(A_{3} ~ | ~ A_{1} \cap A_{2}) ~ \cdots ~ P(A_{n} ~ | ~ A_{1} \cap A_{2} \cap \cdots \cap A_{n - 1})
$$

```spoiler:close:証明

条件付き確率の定義を少し変形すると，$X,\ Y \in \mathscr{F}$ に対し，

$$
P(X \cap Y) = P(X ~ | ~ Y) ~ P(Y)
$$

となる（乗法定理）．

これを用いて一般乗法定理を数学的帰納法により示す．

$n = 2$ のときは乗法定理より明らか．

$n = k$ のときに成り立つと仮定して $n = k + 1$ のとき，

$$
P \left(A_{1} \cap A_{2} \cap \cdots \cap A_{k + 1} \right) 
$$
$$
\quad
\begin{alignat*}{1}
    &= P \left( A_{k + 1} \cap \left( A_{1} \cap A_{2} \cap \cdots \cap A_{k} \right) \right) \\
    &= P \left( A_{k + 1} ~ | ~ A_{1} \cap A_{2} \cap \cdots \cap A_{k} \right) ~ \textcolor{red}{P(A_{1} \cap A_{2} \cap \cdots \cap A_{k})} \\
    &= P \left( A_{k + 1} ~ | ~ A_{1} \cap A_{2} \cap \cdots \cap A_{k} \right) ~ \textcolor{red}{P(A_{1}) ~ P(A_{2} ~ | ~ A_{1}) ~ P(A_{3} ~ | ~ A_{1} \cap A_{2}) ~ \cdots ~ P(A_{k} ~ | ~ A_{1} \cap A_{2} \cap \cdots \cap A_{k - 1})} \\
    &= P(A_{1}) ~ P(A_{2} ~ | ~ A_{1}) ~ P(A_{3} ~ | ~ A_{1} \cap A_{2}) ~ \cdots ~ P(A_{k + 1} ~ | ~ A_{1} \cap A_{2} \cap \cdots \cap A_{k}) \\
\end{alignat*}
$$

と変形でき成立．

以上より，任意の $n \geq 2$ について一般乗法定理が成り立つ．$\quad \square$

```

~~~

条件付き確率から導かれる有名な定理です．

~~~definition:独立性

確率空間 $(\Omega,\ \mathscr{F},\ P)$ と 事象 $A,\ B \in \mathscr{F}$ に対し，

$A$ と $B$ が **独立** $\overset{def}\iff$ $P(A \cap B) = P(A) ~ P(B)$

$A$ と $B$ が **独立** $\overset{def}\iff$ $A$ と $B$ が独立でない

~~~

独立性の定義です．

~~~theorem:独立性の条件

$P(B) \neq 0,\ P(A ~ | ~ B) = P(A) \quad \implies \quad$ $A$ と $B$ は独立

~~~

乗法定理より従います．
