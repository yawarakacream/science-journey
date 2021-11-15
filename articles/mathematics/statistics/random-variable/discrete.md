---
title: "離散型確率変数と確率質量関数"
draft: true
---

~~~definition:離散型確率変数と確率質量関数

確率空間 $(\Omega,\ \mathscr{F},\ P)$，確率変数 $X$，累積分布関数 $F_{X}(x)$ に対し，

$X$ が **離散型確率変数** $\overset{def}\iff$ $F_{X}(x)$ が階段関数

**確率質量関数**（PMF）$f_{X}(x) := P(X = x) = P(\{\omega ~ | ~ X(\omega) = x\})$

PMF：probability mass function

---

$f_{X}(x)$ が確率質量関数である **必要十分条件** は以下の $(1)$ かつ $(2)$．

$(1)$ $0 \leq f_{X}(x) \leq 1 \quad for \quad {}^{\forall} x \in \R$

$(2)$ $\displaystyle \sum_{i} f_{X}(x_{i}) = 1$

~~~

離散的，すなわちバラバラな事象の確率です．

**$f_{X}(x)$ は，$X = x$ となる確率を表します**．

離散型確率変数と確率質量関数は，それぞれ [連続型確率変数と確率密度関数](/mathematics/statistics/random-variable/continuous) に対応する概念です．

~~~theorem:確率質量関数の利用

$(1)$ $\displaystyle P(X \in A) = \sum_{x \in A} f_{X}(x) \quad for \quad  {}^{\forall} A \subset \R$

$(2)$ $\displaystyle F_{X}(x) = \sum_{x_{i} \leq x} f_{X}(x_{i})$

~~~

# 表記揺れ

確率質量関数のことを単に **確率関数** ということがあります．

対して，確率密度関数 を確率関数と呼んでいるのはみたことがありません．．．なぜでしょうか．．．
