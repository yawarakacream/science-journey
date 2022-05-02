---
title: "行列式の基礎的な計算"
description: "正則行列，転置行列，三角行列などの特殊な行列の行列式やサイズの小さい行列式の覚え方，余因子展開による計算方法を紹介します．"
draft: true
---

# 特殊な行列

## 行列の積

~~~spoiler:close

行列の積は行列式の積です．

$$
|AB| = |A| |B|
$$

~~~

## 零ベクトルを含む行列

~~~spoiler:close

零ベクトルを含む行列の行列式は $0$ です．

```spoiler:open:証明

多重線形性から

$$
\newcommand{\b}[1]{\textcolor{blue}{#1}}
\begin{vmatrix}
  \vdots & \cdots & \vdots \\
  0      & \cdots & 0      \\
  \vdots & \cdots & \vdots \\
\end{vmatrix}
=
\begin{vmatrix}
  \vdots         & \cdots & \vdots         \\
  \b{0} \times 0 & \cdots & \b{0} \times 0 \\
  \vdots         & \cdots & \vdots         \\
\end{vmatrix}
=
\b{0}
\times
\begin{vmatrix}
  \vdots & \cdots & \vdots \\
  0      & \cdots & 0      \\
  \vdots & \cdots & \vdots \\
\end{vmatrix}
=
0
$$

```

~~~

## 単位行列

~~~spoiler:close

単位行列の行列式は $1$ です．

$$
|I| = 1
$$

~~~

## 正則行列

~~~spoiler:close

$A$ が正則のとき，$|A||A^{-1}| = |AA^{-1}| = |I| = 1$ より

$$
\displaystyle |A^{-1}| = \frac{1}{|A|}
$$

が成り立ちます．

~~~

## 転置行列

~~~spoiler:close

行列を転置しても行列式の値は変わりません．

$$
|{}^{t} A| = |A|
$$

```spoiler:open:証明（基本行列）

（基本行列を表す文字は [基本変形と基本行列](/mathematics/linear-algebra/elementary-operation/operation) と同様）

$P_{i}(c)$，$P_{ij}$ は明らか．

$P_{ij}(c)$ は [ある行，列に他の行，列を加えても行列式の値は変わらない](/mathematics/linear-algebra/determinant/definition) ことを用いれば，任意の $(i,\ j)$ に対し

$$
|P_{ij}(c)| = |I| = 1
$$

であり，${}^{t} P_{ij}(c) = P_{ji}(c)$ なので $|{}^{t} P_{ij}(c)| = |P_{ji}(c)| ~ (= 1)$ となり成立．$\square$

```

```spoiler:open:証明（一般の行列）

$A$ が正則ならば，適当な基本行列の積が存在して $A = P_{1} P_{2} \cdots P_{m}$ とかけ，  
上記で基本行列について証明できたことを用いると
$$
\begin{alignat*}{1}
  |{}^{t} A| &= |{}^{t} (P_{1} P_{2} \cdots P_{m})| \\
             &= |{}^{t} P_{m} \cdots {}^{t} P_{2} {}^{t} P_{1}| \\
             &= |{}^{t} P_{m}| \cdots |{}^{t} P_{2}| |{}^{t} P_{1}| \\
             &= |{}^{t} P_{1}| |{}^{t} P_{2}| \cdots |{}^{t} P_{m}| \\
             &= |P_{1}| |P_{2}| \cdots |P_{m}| \\
             &= |A|
\end{alignat*}
$$
となり成立．

$A$ が正則でないならば，[転置行列も正則でない](/mathematics/linear-algebra/matrix/transpose) こと，及び [正則でない行列の行列式は $0$](/mathematics/linear-algebra/determinant/definition) から，$|A| = |{}^{t} A| = 0$．

よって任意の $A$ に対し $|{}^{t} A| = |A|$．$\square$

```

~~~

## 上三角行列・下三角行列

~~~spoiler:close

上三角行列，下三角行列の行列式は対角成分の積です．

$$
\begin{vmatrix}
  a_{11} & \cdots & a_{1n} \\
         & \ddots & \vdots \\
  O      &        & a_{nn} \\
\end{vmatrix}
=
a_{11} a_{22} \cdots a_{nn}
$$

$$
\begin{vmatrix}
  a_{11} &        & O      \\
  \vdots & \ddots &        \\
  a_{n1} & \cdots & a_{nn} \\
\end{vmatrix}
=
a_{11} a_{22} \cdots a_{nn}
$$

~~~

## 第 $i$ 行（$j$ 列）の第 $j$（$i$）成分以外が $0$ の行列

~~~spoiler:close

字数を下げることができます．

$$
\begin{vmatrix}
  A & \bm{o} & B \\
  * & a_{ij} & * \\
  C & \bm{o} & D \\
\end{vmatrix}
=
(-1)^{i + j}
a_{ij}
\begin{vmatrix}
  A & B \\
  C & D \\
\end{vmatrix}
$$

$$
\begin{vmatrix}
  A      & *      & B      \\
  \bm{o} & a_{ij} & \bm{o} \\
  C      & *      & D      \\
\end{vmatrix}
=
(-1)^{i + j}
a_{ij}
\begin{vmatrix}
  A & B \\
  C & D \\
\end{vmatrix}
$$

$*$ の部分は消えてなくなります．

---

特に，第 $1$ 行（列）目に対して

$$
\begin{vmatrix}
  a_{11} & 0      & \cdots & 0      \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  \vdots & \vdots & \cdots & \vdots \\
  a_{n1} & a_{n2} & \cdots & a_{nn} \\
\end{vmatrix}
=
a_{11}
\begin{vmatrix}
  a_{22} & \cdots & a_{2n} \\
  \vdots & \cdots & \vdots \\
  a_{n2} & \cdots & a_{nn} \\
\end{vmatrix}
$$

$a_{21},\ \cdots,\ a_{n1}$ は消えてなくなります．

$$
\begin{vmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  0      & a_{22} & \cdots & a_{2n} \\
  \vdots & \vdots & \cdots & \vdots \\
  0      & a_{n2} & \cdots & a_{nn} \\
\end{vmatrix}
=
a_{11}
\begin{vmatrix}
  a_{22} & \cdots & a_{2n} \\
  \vdots & \cdots & \vdots \\
  a_{n2} & \cdots & a_{nn} \\
\end{vmatrix}
$$

$a_{12},\ \cdots,\ a_{1n}$ は消えてなくなります．

~~~

# 小さい行列式

## $n = 1$

~~~spoiler:close

$(1,\ 1)$ 要素自身

$$
|A| = a_{11}
$$

~~~

## $n = 2$

~~~spoiler:close

左上 $\times$ 右下 $-$ 右上 $\times$ 左下

$$
\renewcommand{\r}[1]{\textcolor{red}{#1}}
\newcommand{\b}[1]{\textcolor{blue}{#1}}

\begin{alignat*}{1}
|A|
  &=
    \begin{vmatrix}
      \r{a_{11}} & \b{a_{12}} \\
      \b{a_{21}} & \r{a_{22}}
    \end{vmatrix}
  \\
  &= \r{a_{11} a_{22}} - \b{a_{12} a_{21}}
\end{alignat*}
$$

~~~

## $n = 3$

~~~spoiler:close

$a_{11},\ a_{22},\ a_{33}$ が $1$ つだけ含まれるときはマイナス

$$
\newcommand{\b}[1]{\textcolor{blue}{#1}}
\begin{alignat*}{1}
  |A| = & ~ \b{a_{11}} \b{a_{22}} \b{a_{33}} + a_{12} a_{23} a_{31} + a_{13} a_{21} a_{32} \\
        & - \b{a_{11}} a_{23} a_{32} - a_{13} \b{a_{22}} a_{31} - a_{12} a_{21} \b{a_{33}}
\end{alignat*}
$$

~~~

# 余因子展開

~~~spoiler:close

[余因子](/mathematics/linear-algebra/determinant/cofactor) を用いた計算方法が知られています．

証明は [余因子と余因子行列](/mathematics/linear-algebra/determinant/cofactor) のページにあります．

第 $i$ 行に関して展開すると

$$
|A| = \sum_{j = 1}^{n} a_{ij} \tilde{a}_{ij}
$$

第 $j$ 列に関して展開すると

$$
|A| = \sum_{i = 1}^{n} a_{ij} \tilde{a}_{ij}
$$

```spoiler:open:例

$
A =
\begin{bmatrix}
  1 & 2 & 3 \\
  4 & 5 & 6 \\
  7 & 8 & 9
\end{bmatrix}
$
を第 $2$ 行に関して展開してみます．

余因子は

$$
\tilde{a}_{21}
=
(-1)^{2 + 1}
\begin{vmatrix}
  2 & 3 \\
  8 & 9
\end{vmatrix}
=
6
$$

$$
\tilde{a}_{22}
=
(-1)^{2 + 2}
\begin{vmatrix}
  1 & 3 \\
  7 & 9
\end{vmatrix}
=
-12
$$

$$
\tilde{a}_{23}
=
(-1)^{2 + 3}
\begin{vmatrix}
  1 & 2 \\
  7 & 8
\end{vmatrix}
=
6
$$

よって $|A|$ は

$$
\begin{alignat*}{1}
|A|
  &= a_{21} \tilde{a}_{21} + a_{22} \tilde{a}_{22} + a_{23} \tilde{a}_{23} \\
  &= 4 \times 6 + 5 \times (-12) + 6 \times 6 \\
  &= 0
\end{alignat*}
$$

```

~~~
