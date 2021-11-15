---
title: "結合確率分布"
desciprion: "複数の確率変数による分布と確率です．結合累積分布関数，結合確率質量関数，結合確率密度関数を定義し，その性質を確認します．"
draft: true
---

複数の確率変数からなる確率分布を考えます．

これを **結合確率分布** や **同時確率分布** といいます．  
以下では結合〇〇で統一します．

~~~definition:結合累積分布関数

確率変数 $X,\ Y$ の **結合累積分布関数**（joint ...）$F_{X,\ Y}(x,\ y) : \R^{2} \rightarrow [0,\ 1]$ は

$$
F_{X,\ Y}(x,\ y) := P(X \leq x,\ Y \leq y)
$$

~~~

$2$ つの確率変数からなる分布です．

$1$ 変数の累積分布関数と同様の性質をもつ，自然な定義だと思います．

以下に取り上げる結合確率〇〇関数も $1$ 変数のときと同様であることがわかります．

~~~theorem:結合累積分布関数の性質

$(1)$ $\textcolor{blue}{0 \leq F_{X,\ Y}(x,\ y) \leq 1} \quad for \quad {}^{\forall} x,\ y \in \R$

$(2)$ それぞれの変数について **広義単調増加**

$(3)$ $\textcolor{blue}{F_{X,\ Y}(-\infty, y) = F_{X,\ Y}(x, -\infty) = 0,\ F_{X,\ Y}(\infty, \infty) = 1}$

$(2)$ それぞれの変数について **右連続**

~~~

# 離散型

~~~definition:結合確率質量関数

離散型確率変数 $X,\ Y$ の **結合確率質量関数** $f_{X,\ Y}(x,\ y)$ は

$\displaystyle\quad f_{X,\ Y}(x,\ y) := F_{X,\ Y}(x,\ y)$

~~~

~~~theorem:結合確率質量関数の性質

$(1)$ $\displaystyle f_{X,\ Y}(x,\ y) \geq 0 \quad for \quad {}^{\forall} x,\ y \in \R$

$(2)$ $\displaystyle \sum_{i} \sum_{j} f_{X,\ Y}(x_{i},\ y_{j}) = 1$

~~~

$1$ 変数：[離散型確率変数と確率質量関数](/mathematics/statistics/random-variable/discrete)

# 連続型

~~~definition:結合確率質量関数

連続型確率変数 $X,\ Y$ の **結合確率密度関数** $f_{X,\ Y}(x,\ y)$ は

$\displaystyle\quad F_{X,\ Y}(x,\ y) = \int_{-\infty}^{y} \int_{-\infty}^{x} f_{X,\ Y}(s,\ t) ~ ds dt$

をみたす $f_{X,\ Y}(x,\ y)$

~~~

~~~theorem:結合確率密度関数の性質

$(1)$ $\displaystyle f_{X,\ Y}(x,\ y) \geq 0 \quad for \quad {}^{\forall} x,\ y \in \R$

$(2)$ $\displaystyle \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{X,\ Y}(x,\ y) ~ dx dy = 1$

~~~

$1$ 変数：[連続型確率変数と確率密度関数](/mathematics/statistics/random-variable/continuous)
