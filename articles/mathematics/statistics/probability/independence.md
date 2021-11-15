---
title: "事象の独立性"
description: "事象の独立性を定義し，条件を確認します．"
draft: true
---

~~~definition:独立性

確率空間 $(\Omega,\ \mathscr{F},\ P)$ と 事象 $A,\ B \in \mathscr{F}$ に対し，

$A$ と $B$ が **独立**  
$\quad\overset{def}\iff$ $P(A \cap B) = P(A) ~ P(B)$  
$\quad\iff$ $P(B) \neq 0,\ P(A ~ | ~ B) = P(A)$

$A$ と $B$ が **従属** $\overset{def}\iff$ $A$ と $B$ が独立でない

~~~

片方の事象がもう片方の事象の確率に影響を与えないとき，それらは独立であるといいます．

$2$ つめの必要十分条件は [乗法定理](/mathematics/statistics/probability/conditional-probability) より従います．
