---
title: "比較判定法・積分判定法"
description: "比較判定法と積分判定法を確認し証明します．例として汎調和級数も扱っています．"
draft: true
---

~~~theorem:比較判定法

$\displaystyle \sum_{n = 1}^{\infty} a_{n},\ \sum_{n = 1}^{\infty} b_{n} :$ **正項級数**

$(1) ~ a_{n} \geq b_{n}$ ならば，

$\qquad\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が収束する $\implies \displaystyle \sum_{n = 1}^{\infty} b_{n}$ が収束する

$(2) ~ a_{n} \leq b_{n}$ ならば，

$\qquad\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が発散する $\implies \displaystyle \sum_{n = 1}^{\infty} b_{n}$ が発散する

$(3) ~ \displaystyle 0 < \lim_{n \rightarrow \infty} \frac{a_{n}}{b_{n}} < \infty$ ならば，

$\qquad\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が収束する $\iff \displaystyle \sum_{n = 1}^{\infty} b_{n}$ が収束する

これを **比較判定法** という．

~~~

**正項級数に使える** 判定法です．

$(2)$ は $(1)$ の対偶です．

~~~spoiler:close:例

$\displaystyle a_{n} = \frac{(n + 1)^{n}}{n^{n + 1}}$ とし，$\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が収束するか調べてみます．

$\displaystyle b_{n} = \frac{1}{n}$ とすると，$\displaystyle \sum_{n = 1}^{\infty} a_{n},\ \sum_{n = 1}^{\infty} b_{n}$ はともに正項級数で

$$
\begin{alignat*}{1}
  \lim_{n \rightarrow \infty} \frac{a_{n}}{b_{n}}
    &= \lim_{n \rightarrow \infty} \frac{(n + 1)^{n}}{n^{n + 1}} \cdot n \\
    &= \lim_{n \rightarrow \infty} \frac{(n + 1)^{n}}{n^{n}} \\
    &= \lim_{n \rightarrow \infty} \left( \frac{n + 1}{n} \right)^{n} \\
    &= \lim_{n \rightarrow \infty} \left( 1 + \frac{1}{n} \right)^{n} \\
    &= e
\end{alignat*}
$$

より，比較判定法 $(3)$ が使えます．

$\displaystyle \sum_{n = 1}^{\infty} b_{n} = \infty$（調和級数）なので $\displaystyle \sum_{n = 1}^{\infty} a_{n}$ は発散します．

~~~

~~~theorem:積分判定法

$\displaystyle \sum_{n = 1}^{\infty} a_{n} :$ **正項級数**  
$f : f(n) = a_{n}$ をみたす単調関数

$\quad\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が収束する $\iff\displaystyle \int_{1}^{\infty} f(x) ~ dx$ が収束する

これを **積分判定法** という．

~~~

**正項級数に使える** 判定法です．

[十分大きなすべての $\underline{n}$](/mathematics/analysis/sequence-and-series/definition-of-series) の話と同様の理由で積分の下端は $1$ でなくてよいです．下端を $c$ とすると，$f(n) = a_{n}$ は $n \geq c$ のときに成り立てばよいです．

```spoiler:open:例

$\displaystyle a_{n} = \frac{1}{n^{p}} ~ (p \geq 1)$ とし，$\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が収束するか調べてみます．

$\displaystyle \sum_{n = 1}^{\infty} a_{n}$ は正項級数で，$\displaystyle f(n) = \frac{1}{x^{p}}$ とすると $f(n) = a_{n}$ をみたすので，この $f(n)$ で積分判定法が使えます．

$p = 1$ のとき

$$
\begin{alignat*}{1}
  \int_{1}^{\infty} f(x) ~ dx
    &= \int_{1}^{\infty} \frac{dx}{x} \\
    &= \left[ \log x \right]_{1}^{\infty} \\
    &= \infty
\end{alignat*}
$$

$p > 1$ のとき

$$
\begin{alignat*}{1}
  \int_{1}^{\infty} f(x) ~ dx
    &= \int_{1}^{\infty} \frac{dx}{x^{p}} \\
    &= \left[ -\frac{1}{p - 1} \cdot \frac{1}{x^{p - 1}} \right]_{1}^{\infty} \\
    &= \frac{1}{p - 1}
\end{alignat*}
$$

したがって，$p = 1$ のとき発散，$p > 1$ のとき収束します．

これは **汎調和級数** とよばれる有名な級数です．特に $p = 1$ のときは **調和級数** といいます．

```
