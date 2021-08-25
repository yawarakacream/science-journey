---
title: "独立性"
description: "事象の独立性を定義します．複雑な確率を考える上で重要な概念です．"
draft: true
---

~~~definition:独立性

確率空間 $(\Omega,\ \mathscr{F},\ P)$ と 事象 $A,\ B \in \mathscr{F}$ に対し，

$A$ と $B$ が **独立** $\overset{def}\iff$ $P(A \cap B) = P(A) ~ P(B)$

~~~

独立性の定義です．

事象が独立でないことを **従属** といいます．

~~~theorem:独立性の条件

$P(B) \neq 0,\ P(A ~ | ~ B) = P(A) \quad \implies \quad$ $A$ と $B$ は独立

~~~

乗法定理より従います．

