---
title: "独立性"
description: "事象の独立性を定義します。複雑な確率を考える上で重要な概念です。"
draft: true
---

~~~definition:独立性

確率空間 $(\Omega,\ \mathscr{F},\ P)$ と 事象 $A,\ B \in \mathscr{F}$ がある．

$A$ と $B$ が **独立** $\overset{def}\iff$ $P(A \cap B) = P(A) ~ P(B)$

~~~

独立性の定義です．

乗法定理を用いると，

$$
P(A ~ | ~ B) P (A)
$$

と表すこともできます（$P(B) \neq 0$ のとき）．

事象が独立でないことを **従属** といいます．
