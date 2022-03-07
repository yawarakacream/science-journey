---
title: "d'Alembertの収束判定法"
description: "d'Alembertの収束判定法（ダランベールの収束判定法）を確認し証明します．"
draft: true
---

~~~theorem:d'Alembertの収束判定法

$\displaystyle \sum_{n = 1}^{\infty} a_{n} :$ 級数

$\quad (1) ~ \displaystyle \lim_{n \rightarrow \infty} \left| \frac{a_{n + 1}}{a_{n}} \right| < 1 \implies \sum_{n = 1}^{\infty} a_{n}$ は収束する

$\quad (2) ~ \displaystyle \lim_{n \rightarrow \infty} \left| \frac{a_{n + 1}}{a_{n}} \right| > 1 \implies \sum_{n = 1}^{\infty} a_{n}$ は発散する

$\quad (3) ~ \displaystyle {}^{\exists} N \in \N \left[ {}^{\forall} n \geq N \implies \left| \frac{a_{n + 1}}{a_{n}} \right| \geq 1 \right] \implies \sum_{n = 1}^{\infty} a_{n}$ は発散する

これを **d'Alembert の収束判定法**（ダランベールの収束判定法）という．

~~~

$\displaystyle \lim_{n \rightarrow \infty} \left| \frac{a_{n + 1}}{a_{n}} \right| = 1$ のときは収束することも発散することもあります．

ただし，十分大きなすべての $n$ で $1$ になるならば発散します $(3)$．

```spoiler:close:例

$\displaystyle a_{n} = \frac{e^{n}}{n!}$ とし，$\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が収束するか調べてみます．

$$
\begin{alignat*}{1}
  \lim_{n \rightarrow \infty} \left| \frac{a_{n + 1}}{a_{n}} \right|
    &= \lim_{n \rightarrow \infty} \frac{e^{n + 1}}{(n + 1)!} \cdot \frac{n!}{e^{n}} \\
    &= \lim_{n \rightarrow \infty} \frac{e}{n + 1} \\
    &= 0
\end{alignat*}
$$

d'Alembert の収束判定法 $(1)$ より $\displaystyle \sum_{n = 1}^{\infty} a_{n}$ は収束します．

```
