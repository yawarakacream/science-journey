---
title: "条件付き確率分布"
description: "条件付き確率分布を定義し，全確率の定理や Bayes の定理の拡張にあたる性質を確認します．確率変数の独立性も定義します．"
draft: true
---

~~~definition:条件付き確率分布

$X,\ Y$：確率変数

$Y = y$ が与えられたときの $X$ の **条件付き確率分布** $P(X = x ~ | ~ Y = y)$ は

$$
P(X = x ~ | ~ Y = y) := \frac{P(X = x,\ Y = y)}{P(Y = y)}
$$

ただし $P(Y = y) > 0$．

~~~

~~~definition:条件付き確率〇〇関数

$X,\ Y$：確率変数

$Y$ が与えられたときの $X$ の **条件付き確率〇〇関数** $f_{X | Y}(x,\ y)$ は

$$
f_{X | Y}(x,\ y) := \frac{f_{X,\ Y}(x,\ y)}{f_{Y}(y)}
$$

〇〇は離散型のとき「質量」，連続型のとき「密度」．

ただし $f_{Y}(y) > 0$．

~~~

[事象ベースの条件付き確率](/mathematics/statistics/probability/conditional-probability) に基づく自然な定義です．

~~~theorem:条件付き確率〇〇関数の性質

$(1)$ $\displaystyle f_{X | Y}(x,\ y) \geq 0 \quad for \quad {}^{\forall} x,\ y \in \R$

$(2$：離散型$)$ $\displaystyle \sum_{x} f_{X | Y}(x,\ y) = 1$

$(2$：連続型$)$ $\displaystyle \int_{-\infty}^{\infty} f_{X | Y}(x,\ y) ~ dx = 1$

~~~

簡単な計算でわかります．
