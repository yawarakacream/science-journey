---
title: "確率変数の独立性"
description: "確率変数の独立性を定義し，条件を確認します．"
draft: true
---

~~~definition:独立性

$X,\ Y$：確率変数

$X,\ Y$ が **独立**  
$\quad\overset{def}{\iff} P(X \leq x,\ Y \leq y) = P(X \leq x) P(Y \leq y)$  
$\quad\iff F_{X,\ Y}(x,\ y) = F_{X}(x) F_{Y}(y)$  
$\quad\iff f_{X,\ Y}(x,\ y) = f_{X}(x) f_{Y}(y)$  
$\quad\iff f_{X | Y}(x,\ y) = f_{X}(x)$

$X,\ Y$ が **従属** $\overset{def}{\iff}$ $X,\ Y$ が独立でない

~~~

[事象の独立性](/mathematics/statistics/probability/independence) に基づく自然な定義です．

やはり事象のときと同様で，独立であるとは「片方の事象がもう片方の事象の確率に影響を与えないこと」をいいます．
