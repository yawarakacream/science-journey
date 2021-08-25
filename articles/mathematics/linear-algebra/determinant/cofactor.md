---
title: "余因子と余因子行列"
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

~~~definition:余因子行列

$n$ 次正方行列 $A$ の $(i,\ j)$ 余因子を $(j,\ i)$ 成分にもつ行列を $A$ の **余因子行列** という．

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

ここでは余因子行列を $\tilde{A}$，転置行列を $A^\top$ と表すことにします．

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

$n = 2$ のときの公式は高校で行列を扱っていたときに紹介されていたそうですね．

$n \neq 2$ のときに逆行列を求めるには素直に掃き出す法が簡単です．
