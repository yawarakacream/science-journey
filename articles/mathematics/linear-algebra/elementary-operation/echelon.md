---
title: "階段行列・階数標準形と階数"
description: "階段行列と階数標準形，そこから定まる階数の性質，一意性を確認します．"
---

# 階段行列

~~~definition:階段行列

$A$ が **階段行列**

$$
\newcommand{\b}[1]{\textcolor{blue}{#1}}
\overset{def}\iff A =
\begin{bmatrix}
    &   & \b{1} & * & 0     & * & 0     & * &        & 0      & *      \\
    &   &       &   & \b{1} & * & 0     & * &        & \vdots & \vdots \\
    &   &       &   &       &   & \b{1} & * &        & \vdots & \vdots \\
    &   &       &   &       &   &       &   & \ddots & 0      & *      \\
    &   &       &   &       &   &       &   &        & \b{1}  & *      \\
    &   &       &   &       &   &       &   &        &        &
\end{bmatrix}
$$

$*$ は任意の数  
何も書かれていないところは $0$

ただし，$A = O$ の階段行列は $O$ と定める．

```spoiler:close:例

$$
\begin{bmatrix}
    1 & 7 & 0 & 3 & 4 \\
    0 & 0 & 1 & 2 & 3 \\
    0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

$$
\begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1
\end{bmatrix}
$$

単位行列は階段行列

```

~~~

階段行列とは，まさに階段の形をした行列です．  

任意の行列は，適当な **行基本変形により階段行列に変形** することができます（**変形定理**）．

```spoiler:close:例

次の行列 $A$ を行基本変形して階段行列を求めます．

$$
A = 
\begin{bmatrix}
    1 & 1 & 3 \\
    0 & 1 & 2 \\
    0 & 3 & 8
\end{bmatrix}
$$

$3$ 行目に $1$ 行目 $\times ~ (-2)$ を加えると，

$$
\begin{bmatrix}
    1 & 1 & 3 \\
    0 & 1 & 2 \\
    0 & 1 & 2
\end{bmatrix}
$$

$3$ 行目に $2$ 行目 $\times ~ (-1)$ を加えると，

$$
\begin{bmatrix}
    1 & 1 & 3 \\
    0 & 1 & 2 \\
    0 & 0 & 0
\end{bmatrix}
$$

$1$ 行目に $2$ 行目 $\times ~ (-1)$ を加えると，

$$
\begin{bmatrix}
    1 & 0 & 1 \\
    0 & 1 & 2 \\
    0 & 0 & 0
\end{bmatrix}
$$

階段行列ができました．  
どのように変形しても同様の結果が得られます．

また，よって

$$
\mathrm{rank} ~ A = 2.
$$

```

この際いくらかの性質が残ったり，新たな性質が現れたりします．  
階段行列はある程度形が整ってるので，雑多な成分の行列をそのまま考えるよりも扱いやすそうですね．

# 行列の標準形

~~~definition:階数標準形

行列 $A$ がある．  
$A$ を行基本変形，列基本変形により

$$
\begin{bmatrix}
    I_{k} & O \\
    O     & O
\end{bmatrix}
$$

の形に変形できたとき，これを行列の **階数標準形**，或いは単に **標準形** という．

~~~

階段行列を列でも作ってみたようなものです．

~~~theorem:階数標準形の存在と一意性

**任意の行列** は階数標準形に **変形できる**．

変形の過程に依らず，行列の階数標準形は **一意に定まる**．

```spoiler:close:証明

$m \times n$ 行列 $A$ が階数標準形
$
\begin{bmatrix}
    I_{r} & O \\
    O     & O
\end{bmatrix}
,\
\begin{bmatrix}
    I_{s} & O \\
    O     & O
\end{bmatrix}
(r \leq s)
$
に変形できたとする．  

このとき，適当な基本行列の積 $P_{1},\ Q_{1},\ P_{2},\ Q_{2}$ が存在し，

$$
\begin{alignat*}{1}
    P_{1} A Q_{1} &=
    \begin{bmatrix}
        I_{r} & O \\
        O     & O
    \end{bmatrix}
    \\
    P_{2} A Q_{2} &=
    \begin{bmatrix}
        I_{s} & O \\
        O     & O
    \end{bmatrix}
\end{alignat*}
$$

と表せる．

$P = P_{2} P_{1}^{-1},\ Q = Q_{1}^{-1} Q_{2}$ とおくと，

$$
\begin{alignat*}{1}
    \begin{bmatrix}
        I_{s} & O \\
        O     & O
    \end{bmatrix}
    &=
    P_{2} A Q_{2}
    \\
    &=
    P_{2}
    \left(
        P_{1}^{-1}
        \begin{bmatrix}
            I_{r} & O \\
            O     & O
        \end{bmatrix}
        Q_{1}^{-1}
    \right)
    Q_{2}
    \\
    &=
    P
    \begin{bmatrix}
        I_{r} & O \\
        O     & O
    \end{bmatrix}
    Q
\end{alignat*}
$$

と書ける．

$(1,\ 1)$ ブロックが $r$ 次正方行列になるよう以下のように $P,\ Q$ をブロック分割すると，

$$
P =
\begin{bmatrix}
    P_{11} & P_{12} \\
    P_{21} & P_{22}
\end{bmatrix}
,\
Q =
\begin{bmatrix}
    Q_{11} & Q_{12} \\
    Q_{21} & Q_{22}
\end{bmatrix}
$$

$$
\begin{alignat*}{1}
    \therefore ~
    \begin{bmatrix}
        I_{s} & O \\
        O     & O
    \end{bmatrix}
    &=
    \begin{bmatrix}
        P_{11} & P_{12} \\
        P_{21} & P_{22}
    \end{bmatrix}
    \begin{bmatrix}
        I_{r} & O \\
        O     & O
    \end{bmatrix}
    \begin{bmatrix}
        Q_{11} & Q_{12} \\
        Q_{21} & Q_{22}
    \end{bmatrix}
    \\
    &=
    \begin{bmatrix}
        P_{11} Q_{11} & P_{11} Q_{12} \\
        P_{21} Q_{11} & P_{21} Q_{12}
    \end{bmatrix}
\end{alignat*}
$$

**左辺の $(1,\ 1)$ ブロックは $s$ 次，右辺の $(1,\ 1)$ ブロックは $r$ 次正方行列であることに注意する．**  
（つまり分割のしかたが異なる）

$r \leq s$ より $P_{11} Q_{11} = I_{r}$ が得られ，$Q_{11} = P_{11}^{-1}$ より $Q_{11}$ は正則．

また同様に $P_{21} Q_{11} = O$ が得られ，右から $Q_{11}^{-1}$ を掛けることにより，

$$
P_{21} = O
$$
$$
\therefore ~ P_{21} Q_{12} = O
$$

ここで，$r < s$ だと $P_{21} Q_{12} \neq O$ となり矛盾する．  
すなわち

$$
\begin{alignat*}{1}
    r &= s \\
    \therefore ~ I_{r} &= I_{s} \\
\end{alignat*}
$$
$$
\therefore ~
\begin{bmatrix}
    I_{r} & O \\
    O     & O
\end{bmatrix}
=
\begin{bmatrix}
    I_{s} & O \\
    O     & O
\end{bmatrix}
.
\quad \square
$$

## $P_{11} Q_{11} = I_{r}$ ？ $\quad$ $P_{21} Q_{12} \neq O$ ？

たとえば，$m = n = 6,\ \textcolor{blue}{r = 2},\ \textcolor{red}{s = 5}$ だと，

右辺の分割に合わせて罫線を引いて，

$$
\renewcommand{\r}[1]{\textcolor{red}{#1}}
\newcommand{\b}[1]{\textcolor{blue}{#1}}

\begin{bmatrix}
    P_{11} Q_{11} & P_{11} Q_{12} \\
    P_{21} Q_{11} & P_{21} Q_{12}
\end{bmatrix}
=
\left[\begin{array}{cc|cccc}
    \b{1} & 0     & 0     & 0     & 0     & 0 \\
    0     & \b{1} & 0     & 0     & 0     & 0 \\
    \hline
    0     & 0     & \r{1} & 0     & 0     & 0 \\
    0     & 0     & 0     & \r{1} & 0     & 0 \\
    0     & 0     & 0     & 0     & \r{1} & 0 \\
    0     & 0     & 0     & 0     & 0     & 0
\end{array}\right]
$$

となっています．

$I_{s}$ の左上の部分を取ると，$P_{11} Q_{11} = I_{r}$ です．

$r < s$ のとき，このように $P_{21}Q_{12}$ のところにはみ出た $\textcolor{red}{1}$ が残ってしまい，$P_{21} Q_{12} = O$ に矛盾します．

$P_{21} Q_{12} = O$ を導く $P_{21} Q_{11} = O$ も見ればわかりますね．  
ついでに $P_{11} Q_{12} = O$ です．

```

~~~

一意性の証明は，それらを $X,\ Y$ など複数の文字でおいて，$X = Y$ を導くのがセオリーです．  
今回は見通しが微妙になるので成分で違う文字を使いました．

# 階数

~~~definition:階数

行列 $A$ と $A$ から得られた階段行列 $B$ がある．

$A$ の **階数** $\overset{def}\iff$ $B$ の $\bm{o}$ でない行の数

$\mathrm{rank} ~ A$ のように表す．

```spoiler:close:例

$$
\mathrm{rank}
\begin{bmatrix}
    1 & 7 & 0 & 3 & 4 \\
    0 & 0 & 1 & 2 & 3 \\
    0 & 0 & 0 & 0 & 0
\end{bmatrix}
= 2
$$

$$
\mathrm{rank}
\begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1
\end{bmatrix}
= 3
$$

```

~~~

階段行列はこの階数のために存在するようなものです．  
様々な場面で登場します．

~~~theorem:階数の一意性
行列の階数は **一意に定まる**．
~~~

階数標準形の一意性より明らかです．

~~~theorem:正則性と階数

$n$ 次正方行列 $A$ がある．

$A$ が正則 $\iff$ $A$ の階段行列は単位行列 $\iff$ $\mathrm{rank} ~ A = n$

```spoiler:close:証明

$A$ の階段行列は単位行列 $\iff$ $\mathrm{rank} ~ A = n$  
は階段行列の一意性より明らか（余談にて）．

$A$ が正則 $\iff$ $A$ の階段行列は単位行列  
を示す．

### $\implies$

$A$ の階段行列を $B$ とおき，$B \neq I$ と仮定する．

このとき，適当な正則行列（[= 基本行列の積](/mathematics/linear-algebra/elementary-operation/operation)）$P$ があって，

$$
PA = B
$$

と書け，両辺に右から $A^{-1}$ を掛けると，

$$
P = B A^{-1}
$$

となる．

$B$ は単位行列でない階段行列なので，下の何行かは零ベクトルであり，よって $B A^{-1}$ も同様に零ベクトルをもつ．  
しかし，[正則行列はすべての行に零ベクトルをもたない](/mathematics/linear-algebra/matrix/regular) ことより $P$ の正則性に矛盾．

よって $B = I$．

### $\impliedby$

$A$ の階段行列は $I$ なので，適当な正則行列（[= 基本行列の積](/mathematics/linear-algebra/elementary-operation/operation)）$P$ があって，

$$
PA = I
$$

とかけ，$A^{-1} = P$ で $A$ は正則．

以上より同値性が示された．$\square$

```

~~~

$\mathrm{rank}$ による正則性の判定は重要です．

# 余談

階段行列を

$$
\begin{bmatrix}
    1 & 1 & 3 \\
    0 & 1 & 2 \\
    0 & 0 & 0
\end{bmatrix}
$$

のように，言葉通りに階段状になっている行列，とする人もいます．  
階数を調べるだけならそれで十分です．

なお，言葉通りの定義だと，ある行列の階段行列は無限に存在しますが，  
本ページのような定義の階段行列は一意に定まることが知られています．
