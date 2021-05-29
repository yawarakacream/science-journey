---
title: "連続型確率変数と確率密度関数"
---

~~~definition:連続型確率変数と確率密度関数

確率空間 $(\Omega,\ \mathscr{F},\ P)$，確率変数 $X$，分布関数 $F_{X}(x)$ がある．

$X$ が **連続型確率変数** $\overset{def}\iff$ $F_{X}(x)$ が連続関数

**確率密度関数** $f_{X}(x)$ $\overset{def}\iff$ $\displaystyle F_{X}(x) = \int_{-\infty}^{x} f_{X}(t) ~ dt$ を満たす $f_{X}(x)$

~~~

連続的な確率です．

**$f_{X}(x)$ を積分することにより確率が求まります**．  
注意として，確率密度関数は **確率を直接的に表すものではありません**．  

連続型確率変数と確率密度関数は，それぞれ [離散型確率変数と確率質量関数](/mathematics/mathematical-statistics/random-variable/discrete) に対応する概念です．

~~~theorem:確率密度関数の性質

$(1)$ $f_{X}(x) \geq 0 \quad for \quad {}^{\forall} x \in \R$

$(2)$ $\displaystyle \int_{-\infty}^{\infty} f_{X}(x) ~ dx = 1$

$(3)$ $\displaystyle P(X \in A) = \int_{A} f_{X}(x) ~ dx \quad for \quad  {}^{\forall} A \subset \R$

$(4)$ $\displaystyle \frac{d}{dx}F_{X}(x) = f_{X}(x)$

~~~

確率質量関数とは異なり，確率密度関数は $f_{X}(x) > 1$ であることもあります．  

~~~spoiler:open:例

確率密度関数 $f_{X}(x)$ が

$$
f_{X}(x) =
\begin{cases}
    x &(0 \leq x \leq \sqrt{2}) \\
    0 &(otherwise)
\end{cases}
$$

と与えられているとき，以下のように確率を計算できます．

- $\displaystyle P(1 \leq X \leq \sqrt{2}) = \int_{1}^{\sqrt{2}} f_{X}(x) ~ dx = \frac{1}{2}.$

- $\displaystyle P(X = k) = \int_{k}^{k} f_{X}(x) ~ dx = 0.$

- $\displaystyle P \left( X < \frac{1}{2} \right) = \int_{-\infty}^{\frac{1}{2}} f_{X}(x) = \int_{-\infty}^{0} 0 ~ dx + \int_{0}^{\frac{1}{2}} x ~ dx = \frac{1}{8}.$

~~~
