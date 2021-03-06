---
title: "周辺確率分布"
description: "結合確率分布から各変数の分布や確率を求めます．周辺累積分布関数，周辺確率質量関数，周辺確率密度関数を定義します．"
draft: true
---

[結合確率分布](/mathematics/statistics/random-variable/joint) から変数を消去した確率分布を考えます．

これを **周辺確率分布** といいます．

~~~definition:周辺累積分布関数

確率変数 $X,\ Y$ の結合累積分布関数 $F_{X,\ Y}(x,\ y)$ からなる $X$ の **周辺累積分布関数** $F_{X}(x)$ は

$$
F_{X}(x) := F_{X,\ Y}(x,\ \infty)
$$

$Y$ についても同様．

~~~

~~~definition:周辺確率〇〇関数

離散型確率変数 $X,\ Y$ の結合確率質量関数 $f_{X,\ Y}(x,\ y)$ からなる $X$ の **周辺確率質量関数** $f_{X}(x)$ は

$$
f_{X}(x) := \sum_{y} f_{X,\ Y}(x,\ y)
$$

連続型確率変数 $X,\ Y$ の結合確率密度関数 $f_{X,\ Y}(x,\ y)$ からなる $X$ の **周辺確率密度関数** $f_{X}(x)$ は

$$
f_{X}(x) := \int_{-\infty}^{\infty} f_{X,\ Y}(x,\ y) ~ dy
$$

$Y$ についても同様．

~~~


つまり，消去したい変数があればその取り得る値すべてを足し上げてしまえばよいのです．
