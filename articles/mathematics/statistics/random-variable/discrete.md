---
title: "離散型確率変数と確率質量関数"
---

~~~definition:離散型確率変数と確率質量関数

確率空間 $(\Omega,\ \mathscr{F},\ P)$，確率変数 $X$，分布関数 $F_{X}(x)$ がある．

$X$ が **離散型確率変数** $\overset{def}\iff$ $F_{X}(x)$ が階段関数

**確率質量関数** $f_{X}(x) := P(X = x) = P(\{\omega ~ | ~ X(\omega) = x\})$

~~~

離散的，すなわちバラバラな事象の確率です．

**$f_{X}(x)$ は，$X = x$ となる確率を表します**．

離散型確率変数と確率質量関数は，それぞれ [連続型確率変数と確率密度関数](/mathematics/mathematical-statistics/random-variable/continuous) に対応する概念です．

~~~theorem:確率質量関数の性質

$(1)$ $0 \leq f_{X}(x) \leq 1 \quad for \quad {}^{\forall} x \in \R$

$(2)$ $\displaystyle \sum_{i} f_{X}(x_{i}) = 1$

$(3)$ $\displaystyle P(X \in A) = \sum_{x \in A} f_{X}(x) \quad for \quad  {}^{\forall} A \subset \R$

$(4)$ $\displaystyle F_{X}(x) = \sum_{x_{i} \leq x} f_{X}(x_{i})$

ただし，$x_{1},\ x_{2},\ ...$ は離散型確率変数 $X$ がとる実数．

~~~

# 表記揺れ

確率質量関数のことを単に **確率関数** ということがあります．

対して，確率密度関数 を確率関数と呼んでいるのはみたことがありません．．．なぜでしょうか．．．
