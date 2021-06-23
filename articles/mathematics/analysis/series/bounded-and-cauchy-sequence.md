---
title: "収束列・Cauchy列"
description: "収束列，Cauchy列（コーシー列）を定義し，これらの関係性を確認します．"
draft: true
---

~~~definition:収束列

数列 $\{a_{n}\}$ が **収束列**

$\quad \overset{def}{\iff} \displaystyle {}^{\exists}\alpha \in \R ~ s.t. ~ \lim_{n \rightarrow \infty} a_{n} = \alpha$

```spoiler:close:参考：数列の収束

数列 $\{a_{n}\}$ が $\alpha \in \R$ に **収束** する．

$\quad \overset{def}\iff {}^{\forall}\varepsilon > 0,\ {}^{\exists}N = N(\varepsilon) \in \N \quad \lbrack \ {}^{\forall}n \geq N \implies |a_{n} - \alpha| < \varepsilon \ \rbrack$

詳細：[数列の極限：ε-N 論法](/mathematics/analysis/limit/epsilon-n-definition-of-limit)

```

~~~

収束する数列のことを **収束列** といいます．

# Cauchy 列

本題です．

~~~definition:Cauchy列

数列 $\{a_{n}\}$ が **Cauchy 列**（コーシー列）

$\quad \overset{def}\iff {}^{\forall} \varepsilon > 0,\ {}^{\exists} N \in \N \quad \lbrack \ {}^{\forall}m,\ n \geq N \implies |a_{m} - a_{n}| < \varepsilon \ \rbrack$

~~~

非常に有名な数列です．

Cauchy 列は番号が進むにつれ項と項の差が小さくなっていくような数列といえます．  
そこで想像つくかもしれませんが，以下のような命題が知られています．

~~~theorem:Cauchy列と有界列

$\{a_{n}\}$ が Cauchy 列 $\implies$ $\{a_{n}\}$ が有界列

```spoiler:close:証明

Cauchy 列の定義より任意の $\varepsilon > 0$ に対し

$$
{}^{\forall}m,\ n \geq N \implies |a_{m} - a_{n}| < \varepsilon
$$

をみたす $N$ が存在する．特に $\varepsilon = 1,\ m = N$ をとれば

$$
{}^{\forall}n \geq N \implies |a_{N} - a_{n}| < 1
$$

$M := \max(|a_{1}|,\ |a_{2}|,\ ...,\ |a_{N - 1}|,\ |a_{N} - 1|,\ |a_{N} + 1|)$ とおくと

$$
{}^{\forall}n \geq N \implies |a_{n}| \leq M
$$

よって $\{a_{n}\}$ は有界．$\square$

---

$n \geq N$ のときは $|a_{N} - a_{n}| < 1$ の時点で有界なことはわかります．

その下では $n < N$ でも有界かを調べています．  
$n < N$ のときは $n < N$ での絶対値の最大値 $\max(|a_{1}|,\ |a_{2}|,\ ...,\ |a_{n - 1}|)$ を使えば上下から抑えられ，  
$n \geq N$ の分も纏めてしまうために $|a_{N} - 1|,\ |a_{N} + 1|$ も $\max()$ に加えています．

```

~~~

~~~theorem:Cauchy列と収束列

$\{a_{n}\}$ が Cauchy 列 $\iff$ $\{a_{n}\}$ が収束列

```spoiler:close:証明

必要性・十分性をそれぞれ示します．

## $\implies$

Cauchy 列は有界列なので，$\{a_{n}\}$ は収束部分列 $\{a_{n_{i}}\}$ をもつ．

Cauchy 列の定義から ${}^{\forall} \varepsilon > 0$ に対し $N \in \N$ が存在して

$$
{}^{\forall}m,\ n \geq N \implies |a_{m} - a_{n}| < \varepsilon
$$

$n = n_{i}$ とすると，$\{a_{n_{i}}\}$ は $\{a_{n}\}$ の部分列から ${}^{\forall} i \geq N$ に対し $n_{i} \geq i (\geq N)$ なので

$$
{}^{\forall}m,\ i \geq N \implies |a_{m} - a_{n_{i}}| < \varepsilon
$$

$i \rightarrow \infty$ のとき，$a_{n_{i}} \rightarrow \alpha$ とおくと

$$
{}^{\forall}m \geq N \implies |a_{m} - \alpha| < \varepsilon
$$

よって $\{a_{n}\}$ は $\alpha$ に収束し，収束列．$\square$

## $\impliedby$

$\displaystyle a_{n} \rightarrow \alpha$ とすると，[数列の収束の定義](/mathematics/analysis/limit/epsilon-n-definition-of-limit) から ${}^{\forall} \varepsilon > 0$ に対し $N \in \N$ が存在して

$$
{}^{\forall}n \geq N \implies |a_{n} - \alpha| < \frac{\varepsilon}{2}
$$

${}^{\forall}m,\ m > N$ のとき

$$
\begin{alignat*}{1}
  |a_{m} - a_{n}| &= |(a_{m} \textcolor{red}{- \alpha}) + (\textcolor{red}{\alpha} - a_{n})| \\
                  &\leq |a_{m} - \alpha| + |\alpha - a_{n}| \\
                  &< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} \\
                  &= \varepsilon
\end{alignat*}
$$

よって $\{a_{n}\}$ は Cauchy 列．$\square$

```

~~~

Cauchy 列と収束列が同値であることがわかりました．

Cauchy 列は $\varepsilon - N$ 論法によく似た定義でしたが，**Cauchy 列自身は極限に言及していない** ことに注意します．  
極限に対してはこうした定理（証明）が必要です．

# 余談

Cauchy 列と有界列の方は収束列のための補題のようなものですが，定理として置いておきます．

一般に収束列は有界列なので，実際のところ下の定理がわかれば上の定理はどうでもよいです．  
Cauchy 列 $\iff$ 収束列を示すために有界列が必要で有界列のために収束列が必要で・・・という循環論法にならないための定理ですね．
