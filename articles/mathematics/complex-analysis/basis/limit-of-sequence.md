---
title: "複素数列の極限"
description: ""
draft: true
---

~~~definition:複素数列の極限

複素数列 $\{ \alpha_{n} \}$ が $\alpha \in \C$ に **収束する** $\defiff$ $\displaystyle \lim_{n \to \infty} |\alpha_{n} - \alpha| = 0$

複素数列 $\{ \alpha_{n} \}$ が **発散する** $\defiff$ $\{ \alpha_{n} \}$ が収束しない

複素数列 $\{ \alpha_{n} \}$ が **無限大に発散する** $\defiff$ $\displaystyle \lim_{n \to \infty} |\alpha_{n}| = \infty$

実数列と同様に $\displaystyle \textcolor{blue}{\lim_{n \to \infty} \alpha_{n} = \alpha},\ \textcolor{blue}{\alpha_{n} \to \infty}$ のように表す．

収束する複素数列を **収束列** という．

~~~

複素数列の極限は，絶対値を取って実数の極限を使って定義します．

```spoiler:close:例

$(1) \displaystyle \lim_{n \to \infty} \left( \frac{1 + i}{2} \right)^{n}$

$\hspace{5mm} \displaystyle \left| \left( \frac{1 + i}{2} \right)^{n} \right| = \left| \frac{1 + i}{2} \right|^{n} = \left( \frac{\sqrt{2}}{2} \right)^{n} \to 0$

$\hspace{5mm} \therefore ~ \displaystyle \lim_{n \to \infty} \left( \frac{1 + i}{2} \right)^{n} = 0$．

$(2) \displaystyle \lim_{n \to \infty} (1 + 2i) n$

$\hspace{5mm} |(1 + 2i) n| = |1 + 2i| n = \sqrt{5} ~ n \to \infty$

$\hspace{5mm} \displaystyle ~ \therefore \lim_{n \to \infty} (1 + 2i) n = \infty$

$(3) \displaystyle \lim_{n \to \infty} i^{n}$

$\hspace{5mm} i^{n}$ は $i,\ -1,\ -i,\ 1$ をぐるぐるし続けるので，発散．

```

~~~theorem:複素数列の極限

$a_{n} = \Re \alpha_{n},\ a = \Re \alpha,\ b_{n} = \Im \alpha_{n},\ b = \Im \alpha$ とするとき

$$
\lim_{n \to \infty} \alpha_{n} = \alpha \iff \lim_{n \to \infty} a_{n} = a,\ \lim_{n \to \infty} b_{n} = b
$$

~~~

実部と虚部を分けて極限を取ることができます．  

ただし，発散するときは実数列と見るか複素数列と見るかで発散の意味が変わることがあります．

```spoiler:close:例
$(-1)^{n} n$ は  
$\quad$ 実数列 $\implies$ 振動  
$\quad$ 複素数列 $\implies$ 無限大
```

~~~theorem:極限の演算

$\displaystyle \lim_{n \to \infty} \alpha_{n} = \alpha,\ \lim_{n \to \infty} \beta_{n} = \beta$ とするとき

$\displaystyle (1) \lim_{n \to \infty} (\alpha_{n} + \beta_{n}) = \alpha + \beta$

$\displaystyle (2) \lim_{n \to \infty} \alpha_{n} \beta_{n} = \alpha \beta$

~~~

実数列と同様です．

## 有界列

~~~definition:有界列
複素数列 $\{ \alpha_{n} \}$ が **有界列** $\defiff$ ${}^{\exists} M > 0 \quad s.t. \quad |a_{n}| < M$
~~~

~~~theorem:有界列
$\{ \alpha_{n} \}$ が収束列 $\implies$ $\{ \alpha_{n} \}$ が有界列
~~~

複素数列の収束とは複素平面上で動く点 $\alpha_{n}$ と原点 $0$ の距離のことでした．  
有界列は $\alpha_{n}$ をすっぽり覆うような円が存在することを指しています．

## Cauchy 列

~~~definition:Cauchy列

複素数列 $\{ \alpha_{n} \}$ が **Cauchy 列**  
$\quad\defiff$ ${}^{\forall} \varepsilon > 0,\ {}^{\exists} N \in \N ~ [ {}^{\forall} m,\ n \leq N \implies |\alpha_{n} - \alpha_{m}| < \varepsilon ]$

~~~

~~~theorem:Cauchy列
$\{ \alpha_{n} \}$ が Cauchy 列 $\iff$ $\{ \alpha_{n} \}$ が収束列
~~~

実数のときと同様です．

# 級数

複素数列の級数を考えます．  
収束性や実部と虚部を分けていいことなどは数列と同様なので省略します．

~~~definition:絶対収束
複素級数 $\displaystyle \sum_{n = 1}^{\infty} \alpha_{n}$ が **絶対収束する** $\defiff$ $\displaystyle \sum_{n = 1}^{\infty} |\alpha_{n}|$ が収束する
~~~

~~~theorem:絶対収束
$\{ \alpha_{n} \}$ が絶対収束する $\implies$ $\{ \alpha_{n} \}$ が収束する
~~~

実数のときと同様です．
