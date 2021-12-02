---
title: "行列式の定義"
description: "順列を用いて行列式を定義し，正則性との関連，「交代性」「多重線形性」といった性質を紹介します．"
---

~~~definition:行列式（Determinant）

$A$：$n$ 次正方行列，$A = [a_{ij}]$

$\quad$ $A$ の **行列式** $\displaystyle |A| := \sum_{\sigma \in S_{n}} \mathrm{sign} (\sigma) ~ \prod_{i = 1}^{n} a_{i \sigma_{i}}$

行列式は $\det A$ と書くこともある．

```spoiler:close:順列

$\sigma$ は順列です．

長さ $n$ の **順列** とは $1$ から $n$ までの自然数を適当な順番で並べたもののことを指します．  
たとえば長さ $3$ の順列は

$\quad (1~2~3),\ (1~3~2),\ (2~1~3),\ (2~3~1),\ (3~1~2) ,\ (3~2~1)$

の $6$ 種類考えられます．この順列の集合を $S_{n}$ と書きます．

つまり，$\displaystyle \sum_{\sigma \in S_{3}}$ は

$\quad$「$\sigma = (1~2~3)$ のとき」$+$「$\sigma = (1~3~2)$ のとき」$+ \cdots +$「$\sigma = (3~2~1)$ のとき」

という総和を表します．

$\mathrm{sign} (\sigma)$ は順列 $\sigma$ の符号です．**順列の符号** とは

$\quad$ $r :=$「$i < j$ かつ $\sigma_{i} > \sigma_{j}$ をみたす $(i,\ j)$ の個数」

とおくと

$\quad$ $\mathrm{sign} (\sigma) := (-1)^{r}$

と定義されます．

たとえば $\sigma = (1~4~2~3)$ は $(i,\ j) = (2,\ 3),\ (2,\ 4)$ という $(i,\ j)$ があり $r = 2$，よって $\mathrm{sign} (\sigma) = (-1)^{2} = 1$ です．

$$

```

~~~

行列式は行列の特徴を示す指標のひとつです．

絶対値のような書き方がありますが，行列式は負になり得ます．

~~~theorem:行列式の性質

$(1)$ 行，列を入れ替えると $-1$ 倍（交代性）

$$
\renewcommand{\r}[1]{\textcolor{red}{#1}}
\newcommand{\b}[1]{\textcolor{blue}{#1}}
\newcommand{\g}[1]{\textcolor{green}{#1}}

\begin{vmatrix}
  \vdots     & \cdots     & \vdots \\
  \b{a_{i1}} & \b{\cdots} & \b{a_{in}} \\
  \vdots     & \cdots     & \vdots \\
  \r{a_{j1}} & \r{\cdots} & \r{a_{jn}} \\
  \vdots     & \cdots     & \vdots \\
\end{vmatrix}
=
\g{-}
\begin{vmatrix}
  \vdots     & \cdots     & \vdots \\
  \r{a_{j1}} & \r{\cdots} & \r{a_{jn}} \\
  \vdots     & \cdots     & \vdots \\
  \b{a_{i1}} & \b{\cdots} & \b{a_{in}} \\
  \vdots     & \cdots     & \vdots \\
\end{vmatrix}
$$

$(2)$ 行，列成分をくくり出せる（多重線形性）

$$
\renewcommand{\r}[1]{\textcolor{red}{#1}}
\newcommand{\b}[1]{\textcolor{blue}{#1}}
\newcommand{\g}[1]{\textcolor{green}{#1}}

\begin{vmatrix}
  \vdots                  & \cdots & \vdots                  \\
  \b{a_{i1}} + \r{b_{i1}} & \cdots & \b{a_{in}} + \r{b_{in}} \\
  \vdots                  & \cdots & \vdots                  \\
\end{vmatrix}
=
\begin{vmatrix}
  \vdots     & \cdots & \vdots     \\
  \b{a_{i1}} & \cdots & \b{a_{in}} \\
  \vdots     & \cdots & \vdots     \\
\end{vmatrix}
+
\begin{vmatrix}
  \vdots     & \cdots & \vdots     \\
  \r{b_{i1}} & \cdots & \r{b_{in}} \\
  \vdots     & \cdots & \vdots     \\
\end{vmatrix}
$$

$$
\renewcommand{\r}[1]{\textcolor{red}{#1}}
\newcommand{\b}[1]{\textcolor{blue}{#1}}

\begin{vmatrix}
  \vdots           & \cdots & \vdots           \\
  \b{k} \r{a_{i1}} & \cdots & \b{k} \r{a_{in}} \\
  \vdots           & \cdots & \vdots           \\
\end{vmatrix}
=
\b{k}
\begin{vmatrix}
  \vdots     & \cdots & \vdots     \\
  \r{a_{i1}} & \cdots & \r{a_{in}} \\
  \vdots     & \cdots & \vdots     \\
\end{vmatrix}
$$

$(3)$ ある行，列に他の行，列を加えても行列式の値は変わらない

$$
\renewcommand{\r}[1]{\textcolor{red}{#1}}
\newcommand{\b}[1]{\textcolor{blue}{#1}}

\begin{vmatrix}
  \vdots                  & \cdots & \vdots                  \\
  \b{a_{i1}} + \r{a_{j1}} & \cdots & \b{a_{in}} + \r{a_{jn}} \\
  \vdots                  & \cdots & \vdots                  \\
  \r{a_{j1}}              & \cdots & \r{a_{jn}}              \\
  \vdots                  & \cdots & \vdots                  \\
\end{vmatrix}
=
\begin{vmatrix}
  \vdots     & \cdots & \vdots     \\
  \b{a_{i1}} & \cdots & \b{a_{in}} \\
  \vdots     & \cdots & \vdots     \\
  \r{a_{j1}} & \cdots & \r{a_{jn}} \\
  \vdots     & \cdots & \vdots     \\
\end{vmatrix}
$$

~~~

行の様子だけ載せましたが列に対しても同様のことが成り立ちます．

$(2)$ と $(3)$ がぱっと見矛盾しているように見えるかもしれませんが，[零ベクトルを含む行列の行列式は 0](/mathematics/linear-algebra/determinant/basic-calculation) であることに注意すると矛盾していないことがわかります．

一般に行列式の計算は大変です（$|S_{n}| = n!$ なので項が $n!$ 個出てくる）．  
簡単に計算するための方法がいくつか考えられており，詳しくは [基礎的な計算](/mathematics/linear-algebra/determinant/basic-calculation)，[余因子展開](/mathematics/linear-algebra/determinant/cofactor) をご覧ください．

~~~theorem:行列式と正則性

$A$ が正則 $\iff$ $|A| \neq 0$

```spoiler:close:証明

$A$ を $n$ 次正方行列とします．

## $\implies$

[適当な計算](/mathematics/linear-algebra/determinant/basic-calculation) により

$$
|A||A^{-1}| = |AA^{-1}| = |I| = 1 \neq 0
$$
$$
\therefore |A| \neq 0. \quad \square
$$

## $\impliedby$

対偶「$A$ は正則でない $\implies$ $|A| = 0$」を示す．

[任意の行列は階数標準形に変形できる](/mathematics/linear-algebra/elementary-operation/echelon) ので，適当な基本行列の積 $P,\ Q$ 及び $A$ の階数標準形 $B$ が存在して

$$
PAQ = B
$$

とかける．

$A$ は正則でないので $\mathrm{rank} ~ A < n$（$\because$ [正則性と階数](/mathematics/linear-algebra/elementary-operation/echelon)）．

すなわち $\mathrm{rank} ~ B < n$ で，$B$ は零ベクトルを含むから $|B| = 0$ なので（$\because$ [零ベクトルを含む行列の行列式](/mathematics/linear-algebra/determinant/basic-calculation)）

$$
|PAQ| = |B| = 0
$$

また，$|PAQ| = |P||A||Q|$ より（$\because$ [行列の積の行列式](/mathematics/linear-algebra/determinant/basic-calculation)）

$$
|P||A||Q| = 0
$$

である．$P,\ Q$ は正則なので「$\implies$」で既に示したように $|P|,\ |Q| \neq 0$，したがって $|A| = 0$．$\square$

```

~~~

正則性の判定に使えます．
