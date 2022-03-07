---
title: "Cauchyの収束判定法・Leibnizの収束判定法"
description: "Cauchyの収束判定法（コーシーの収束判定法，冪根判定法）とLeibnizの収束判定法（ライプニッツの収束判定法）を確認し証明します．"
draft: true
---

~~~theorem:Cauchyの収束判定法

$\displaystyle \sum_{n = 1}^{\infty} a_{n} :$ **正項級数**

$\quad (1) ~ \displaystyle \lim_{n \rightarrow \infty} \sqrt[n]{a_{n}} < 1 \implies \sum_{n = 1}^{\infty} a_{n}$ は収束する

$\quad (2) ~ \displaystyle \lim_{n \rightarrow \infty} \sqrt[n]{a_{n}} > 1 \implies \sum_{n = 1}^{\infty} a_{n}$ は発散する

$\quad (3) ~ \sqrt[n]{a_{n}} \geq 1$ をみたす $n$ が無数に存在 $\displaystyle\implies \sum_{n = 1}^{\infty} a_{n}$ は発散する

これを **Cauchy の収束判定法**（コーシーの収束判定法）という．

~~~

**正項級数に使える** 判定法です．

$\displaystyle \lim_{n \rightarrow \infty} \sqrt[n]{a_{n}} = 1$ のときは収束することも発散することもあります．

~~~theorem:Leibnizの収束判定法

$\displaystyle \sum_{n = 1}^{\infty} a_{n} :$ **交代級数**

$\quad \{ |a_{n}| \}$ が単調に $0$ に収束する $\implies\displaystyle \sum_{n = 1}^{\infty} a_{n}$ は収束する

```spoiler:close:証明

$a_{n}$ を $|a_{n}|$ で置き換え，$\{ (-1)^{n + 1} a_{n} \}$ の $m$ 部分和 $S_{m}$ が収束することを示す．すなわち

$$
S_{m} = \sum_{n = 1}^{m} (-1)^{n + 1} a_{n}
$$
$$
\lim_{m \rightarrow \infty} S_{n} ~ (= \sum_{n = 1}^{\infty} (-1)^{n + 1} a_{n} = a_{1} - a_{2} + a_{3} - a_{4} + \cdots)
$$

が収束することを示す（$a_{1}$ が負のときは全体を $-1$ 倍すればよい）．

$2m$ 部分和は $\{ a_{n} \}$ が単調減少することから

$$
\begin{alignat*}{1}
  S_{2m} &= a_{1} - a_{2} + a_{3} - \cdots - a_{2m - 2} + a_{2m - 1} - a_{2m} \\
         &= a_{1} - (a_{2} - a_{3}) - \cdots - (a_{2m - 2} - a_{2m - 1}) - a_{2m} \\
         &\leq a_{1} \\
  \\
  S_{2m} &\leq S_{2m} + (a_{2m + 1} - a_{2m + 2}) \\
         &= S_{2m + 1}
\end{alignat*}
$$

すなわち $\{ S_{2m} \}$ は上に有界で単調増加し，[したがって収束する](/mathematics/analysis/sequence-and-series/bounded)．

$2m + 1$ 部分和について

$$
\begin{alignat*}{1}
  \lim_{m \rightarrow \infty} S_{2m + 1}
    &= \lim_{m \rightarrow \infty} S_{2m} + a_{2m + 1} \\
    &= \lim_{m \rightarrow \infty} S_{2m} \quad (\because ~ a_{2m + 1} \rightarrow 0)
\end{alignat*}
$$

となるので，$\displaystyle \lim_{m \rightarrow \infty} S_{m}$ は収束する．$\square$

```

これを **Leibniz の収束判定法**（ライプニッツの収束判定法）という．

~~~

**交代級数に使える** 判定法です．

直感的です．

```spoiler:close:例

$\displaystyle a_{n} = (-1)^{n} \sin \frac{1}{n}$ とし，$\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が収束するか調べてみます．

定義から $\displaystyle \sum_{n = 1}^{\infty} a_{n}$ は交代級数です．

$\displaystyle |a_{n}| = \sin \frac{1}{n}$ は $\displaystyle 1 \leq \frac{1}{n} \leq \frac{\pi}{2} ~ (n \in \N)$ から単調に $0$ に収束します．

よって，Leibniz の収束判定法より $\displaystyle \sum_{n = 1}^{\infty} a_{n}$ は収束します．

```
