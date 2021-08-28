---
title: "余因子と余因子行列"
description: "余因子，余因子行列を定義し，性質を確認します．余因子展開についても扱います．"
draft: true
---

~~~definition:余因子

$n$ 次正方行列 $A$ の第 $i$ 行，第 $j$ 列を除いた $A$ の行列式を $(-1)^{i + j}$ 倍した数を $A$ の **$(i,\ j)$ 余因子** という．

$$
\tilde{a}_{ij} :=
(-1)^{i + j}
\begin{vmatrix}
  a_{11}       & \cdots & a_{1,\ j - 1}     & a_{1, j + 1}     & a_{1n} \\
  \vdots       & \vdots & \vdots            & \vdots           & \vdots \\
  a_{i - 1, 1} & \cdots & a_{i - 1,\ j - 1} & a_{i - 1, j + 1} & a_{i - 1,\ n} \\
  a_{i + 1, 1} & \cdots & a_{i + 1,\ j - 1} & a_{i + 1, j + 1} & a_{i + 1,\ n} \\
  \vdots       & \vdots & \vdots            & \vdots           & \vdots \\
  a_{n1}       & \cdots & a_{n,\ j-1}       & a_{n, j + 1}     & a_{nn} \\
\end{vmatrix}
$$

~~~

ここでは余因子を $\tilde{a}_{ij}$ と表すことにします．

**$(-1)^{i + j}$ 倍** を忘れないよう注意します．

~~~spoiler:close:例

$
A = 
\begin{vmatrix}
  1 & 2 & 3 \\
  4 & 5 & 6 \\
  7 & 8 & 9
\end{vmatrix}
$
に対し

$$
\tilde{a}_{11} = (-1)^{1 + 1}
\begin{vmatrix}
  5 & 6 \\
  8 & 9
\end{vmatrix}
= -3
$$

$$
\tilde{a}_{32} = (-1)^{3 + 2}
\begin{vmatrix}
  1 & 3 \\
  4 & 6
\end{vmatrix}
= 6
$$

~~~

~~~theorem:余因子の性質

第 $i$ 行目について

$$
\sum_{j = 1}^{n} a_{ij} \tilde{a}_{kj} =
\begin{cases}
  |A| & (i = k) \\
  0   & (i \neq k) \\
\end{cases}
$$

```spoiler:close:証明

## $i = k$

[行列式の多重線形性](/mathematics/linear-algebra/determinant/definition) を用いて

- $|A|$ を第 $i$ 行が $a_{ij}$ 以外 $0$ な行列式の $\sum_{j}$ で表す
- [次数を下げる](/mathematics/linear-algebra/determinant/basic-calculation) と余因子になっている

という手順で示します．

あまり好ましくはないですが，長くなりすぎるので $3$ 行目からは $j$ 番目だけを載せています．

$2$ 行目と $3$ 行目は計算を進めていません．$4$ 行目の変形がわかりやすくなるように書き直した形です．  
不要なら $3$ 行目は読み飛ばして構いません．

$$
\renewcommand{\r}[1]{\textcolor{red}{#1}}
\newcommand{\b}[1]{\textcolor{blue}{#1}}
\begin{alignat*}{1}
  |A|
  &=
    \begin{vmatrix}
      a_{11} & \cdots & a_{1j} & \cdots & a_{1n} \\
      \vdots &        & \vdots &        & \vdots \\
      a_{i1} & \cdots & a_{ij} & \cdots & a_{in} \\
      \vdots &        & \vdots &        & \vdots \\
      a_{n1} & \cdots & a_{nj} & \cdots & a_{nn} \\
    \end{vmatrix}
  \\
  &=
    \begin{vmatrix}
      a_{11}     & \cdots & a_{1j} & \cdots & a_{1n} \\
      \vdots     &        & \vdots &        & \vdots \\
      \b{a_{i1}} & \cdots & 0      & \cdots & 0      \\
      \vdots     &        & \vdots &        & \vdots \\
      a_{n1}     & \cdots & a_{nj} & \cdots & a_{nn} \\
    \end{vmatrix}
  +
  \cdots
  +
    \begin{vmatrix}
      a_{11}     & \cdots & a_{1j}     & \cdots & a_{1n} \\
      \vdots     &        & \vdots     &        & \vdots \\
      0          & \cdots & \b{a_{ij}} & \cdots & 0      \\
      \vdots     &        & \vdots     &        & \vdots \\
      a_{n1}     & \cdots & a_{nj}     & \cdots & a_{nn} \\
    \end{vmatrix}
  +
  \cdots
  +
    \begin{vmatrix}
      a_{11} & \cdots & a_{1j} & \cdots & a_{1n}     \\
      \vdots &        & \vdots &        & \vdots     \\
      0      & \cdots & 0      & \cdots & \b{a_{in}} \\
      \vdots &        & \vdots &        & \vdots     \\
      a_{n1} & \cdots & a_{nj} & \cdots & a_{nn}     \\
    \end{vmatrix}
  \\
  &=
  \cdots
  +
    \begin{vmatrix}
      a_{11}     & \cdots & a_{1, j-1}   & a_{1j}     & a_{1, j+1}   & \cdots & a_{1n}     \\
      \vdots     &        & \vdots       & \vdots     & \vdots       &        & \vdots     \\
      a_{i-1, 1} & \cdots & a_{i-1, j-1} & a_{i-1, j} & a_{i-1, j+1} & \cdots & a_{i-1, n} \\
      0          & \cdots & 0            & \b{a_{ij}} & 0            & \cdots & 0          \\
      a_{i+1, 1} & \cdots & a_{i+1, j-1} & a_{j+1, j} & a_{i+1, j+1} & \cdots & a_{i+1, n} \\
      \vdots     &        & \vdots       & \vdots     & \vdots       &        & 0          \\
      a_{n1}     & \cdots & a_{n, j-1}   & a_{nj}     & a_{n, j+1}   & \cdots & a_{nn}     \\
    \end{vmatrix}
  +
  \cdots
  \\
  &=
  \cdots
  +
    \b{a_{ij}}
    \r{
    (-1)^{i + j}
    \begin{vmatrix}
      a_{11}     & \cdots & a_{1, j-1}   & a_{1, j+1}   & \cdots & a_{1n}     \\
      \vdots     &        & \vdots       & \vdots       &        & \vdots     \\
      a_{i-1, 1} & \cdots & a_{i-1, j-1} & a_{i-1, j+1} & \cdots & a_{i-1, n} \\
      a_{i+1, 1} & \cdots & a_{i+1, j-1} & a_{i+1, j+1} & \cdots & a_{i+1, n} \\
      \vdots     &        & \vdots       & \vdots       &        & 0          \\
      a_{n1}     & \cdots & a_{n, j-1}   & a_{n, j+1}   & \cdots & a_{nn}     \\
    \end{vmatrix}
    }
  +
  \cdots
  \\
  &=
  \cdots + \b{a_{ij}} \r{\tilde{a}_{ij}} + \cdots
  \\
  &=
  \sum_{j = 1}^{n} a_{ij} \tilde{a}_{ij}. \qquad \square
\end{alignat*}
$$

## $i \neq k$

$|A|$ の第 $k$ 行を第 $i$ 行に置き換えた行列式を $|B|$ とおく．  
（便宜上 $i < k$ とするが $i$ と $k$ の大小関係はどうでもいい）

$$
|A| =
\begin{vmatrix}
  a_{11} & \cdots & a_{1j} & \cdots & a_{1n} \\
  \vdots &        & \vdots &        & \vdots \\
  a_{i1} & \cdots & a_{ij} & \cdots & a_{in} \\
  \vdots &        & \vdots &        & \vdots \\
  a_{k1} & \cdots & a_{kj} & \cdots & a_{kn} \\
  \vdots &        & \vdots &        & \vdots \\
  a_{n1} & \cdots & a_{nj} & \cdots & a_{nn} \\
\end{vmatrix}
$$

$$
|B| =
\begin{vmatrix}
  a_{11} & \cdots & a_{1j} & \cdots & a_{1n} \\
  \vdots &        & \vdots &        & \vdots \\
  a_{i1} & \cdots & a_{ij} & \cdots & a_{in} \\
  \vdots &        & \vdots &        & \vdots \\
  a_{i1} & \cdots & a_{ij} & \cdots & a_{in} \\
  \vdots &        & \vdots &        & \vdots \\
  a_{n1} & \cdots & a_{nj} & \cdots & a_{nn} \\
\end{vmatrix}
$$

$|A|$ と $|B|$ は第 $k$ 行以外等しいので（$|A|$ の第 $k$ 行における余因子は $|A|$ の第 $k$ 行に依存しないから），$|A|$ の第 $k$ 行における余因子と $|B|$ を第 $k$ 行における各余因子は等しい．

よって，$|B|$ を余因子展開すると

$$
|B| = \sum_{j = 1}^{n} a_{ij} \tilde{a}_{kj}
$$

となる．$- (1)$

また，[行列式の多重線形性](/mathematics/linear-algebra/determinant/definition) から，第 $k$ 行から第 $i$ 行を引いても値は変わらず，[零ベクトルを含む行列の行列式は $0$](/mathematics/linear-algebra/determinant/basic-calculation) なので

$$
\begin{alignat*}{1}
  |B|
  &=
    \begin{vmatrix}
      a_{11} & \cdots & a_{1j} & \cdots & a_{1n} \\
      \vdots &        & \vdots &        & \vdots \\
      a_{i1} & \cdots & a_{ij} & \cdots & a_{in} \\
      \vdots &        & \vdots &        & \vdots \\
      a_{i1} & \cdots & a_{ij} & \cdots & a_{in} \\
      \vdots &        & \vdots &        & \vdots \\
      a_{n1} & \cdots & a_{nj} & \cdots & a_{nn} \\
    \end{vmatrix}
  \\
  &=
    \begin{vmatrix}
      a_{11} & \cdots & a_{1j} & \cdots & a_{1n} \\
      \vdots &        & \vdots &        & \vdots \\
      a_{i1} & \cdots & a_{ij} & \cdots & a_{in} \\
      \vdots &        & \vdots &        & \vdots \\
      0      & \cdots & 0      & \cdots & 0      \\
      \vdots &        & \vdots &        & \vdots \\
      a_{n1} & \cdots & a_{nj} & \cdots & a_{nn} \\
    \end{vmatrix}
  \\
  &=
  0
\end{alignat*}
$$

である．$- (2)$

$(1),\ (2)$ より

$$
\sum_{j = 1}^{n} a_{ij} \tilde{a}_{kj} = 0
$$

とわかる．$\square$

```

第 $j$ 列目について

$$
\sum_{i = 1}^{n} a_{ij} \tilde{a}_{ik} =
\begin{cases}
  |A| & (j = k) \\
  0   & (j \neq k) \\
\end{cases}
$$

$i = k$（行について）$j = k$（列について）のとき，すなわち $|A|$ が求まるとき，これを **余因子展開** という．

~~~

余因子展開は [行列式の基礎的な計算](/mathematics/linear-algebra/determinant/basic-calculation) のほうでも紹介しています．

余因子は行列式なので元の行列式を展開していると捉えられます．

列のほうの証明は行のほうと同様なので省略しました．

~~~definition:余因子行列

$n$ 次正方行列 $A$ の $(\textcolor{blue}{i},\ \textcolor{red}{j})$ 余因子を $(\textcolor{red}{j},\ \textcolor{blue}{i})$ 成分にもつ $n$ 次正方行列を $A$ の **余因子行列** という．

$$
\tilde{A} :=
  \begin{bmatrix}
    \tilde{a}_{11} & \tilde{a}_{21} & \cdots & \tilde{a}_{n1} \\
    \tilde{a}_{12} & \tilde{a}_{22} & \cdots & \tilde{a}_{n2} \\
    \vdots         & \vdots         & \ddots & \vdots         \\
    \tilde{a}_{1n} & \tilde{a}_{2n} & \cdots & \tilde{a}_{nn} \\
  \end{bmatrix}
$$

~~~

ここでは余因子行列を $\tilde{A}$ と表すことにします．

$(j,\ i)$ 成分が $(i,\ j)$ 余因子と，**転置している** ことに注意します．

~~~spoiler:close:例

$
A =
\begin{bmatrix}
  1 & 2 \\
  3 & 4
\end{bmatrix}
$
の余因子行列 $\tilde{A}$ は

$$
\tilde{a}_{11} = 4,\ \tilde{a}_{12} = -3,\ \tilde{a}_{21} = -2,\ \tilde{a}_{22} = 1
$$

なので

$$
\tilde{A} =
\begin{bmatrix}
  4  & -2 \\
  -3 & 1
\end{bmatrix}
$$

となります．

$$
\tilde{A} =
\begin{bmatrix}
  4  & -3 \\
  -2 & 1
\end{bmatrix}
$$

ではありません．

~~~

~~~theorem:余因子行列の性質

$$
A \raisebox{-0.01em}{$\tilde{A}$} ~ = ~ \raisebox{-0.02em}{$\tilde{A}$} A = |A| I
$$

~~~

~~~theorem:余因子行列と正則性

$A$ が正則ならば

$$
A^{-1} = \frac{1}{|A|} \tilde{A}
$$

特に $n = 2$ のとき

$$
\begin{bmatrix}
  a & b \\
  c & d
\end{bmatrix}
^{-1} =
\frac{1}{ad - bc}
\begin{bmatrix}
  d  & -b \\
  -c & a
\end{bmatrix}
$$

~~~

上の定理から下の定理はすぐにわかります．

$n = 2$ のときの式は高校で行列を扱っていたとき公式として紹介されていたそうですね．

$n \neq 2$ のときに逆行列を求めるには素直に掃き出す法が簡単です．

（$A$ と $\tilde{A}$ の高さが合ってくれないのが気になりますね．．．）
