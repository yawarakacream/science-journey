---
title: "転置行列"
description: "行列の転置は，大学に入ってすぐに学ぶ行列の基礎のひとつです．転置行列で定義される交代行列と対称行列についても抑えておきましょう．"
---

~~~definition:転置行列

$A$：$m \times n$ 行列

$\quad A$ の **転置行列** $ ~ {}^{t} A := [a_{ji}].$

~~~

ある行列の行を列に，列を行にした行列を **転置行列**（transposed matrix）といいます．

したがって，${}^{t} A$ は $n \times m$ 行列になります．

~~~spoiler:open:例
$$
A =
\begin{pmatrix}
    1 & 2 & 3 \\
    4 & 5 & 6
\end{pmatrix}
\iff
{}^{t} A =
\begin{pmatrix}
    1 & 4 \\
    2 & 5 \\
    3 & 6
\end{pmatrix}
$$
~~~

~~~theorem:転置行列の性質

$(1) \quad {}^{t} \left( {}^{t} A \right) = A$

$(2) \quad {}^{t} \left( A + B \right) = {}^{t} A + {}^{t} B$

$(3) \quad {}^{t} \left( k A \right) = k {}^{t} A$

$(4) \quad {}^{t} \left( AB \right) = {}^{t} B ~ {}^{t} A$

```spoiler:close:証明

$A = [a_{ij}]$：$m \times n$，$B = [b_{ij}]$：$n \times l$ 行列とする．

**型と成分をそれぞれ確認する．**

はじめに型は，

$AB$ の型は定義から $m \times l$ なので，${}^{t} \left( AB \right)$ は $l \times m$ 型．  
${}^{t} A$：$n \times m$ 型， ${}^{t} B$：$l \times n$ 型 より，${}^{t} B ~ {}^{t} A$ は $l \times m$ 型．

となり，${}^{t} \left( AB \right)$ と ${}^{t} B ~ {}^{t} A$ の型は等しい．

次に成分は，

$$
AB = [c_{ij}]
$$
$$
{}^{t} B ~ {}^{t} A = [d_{ij}]
$$

とすると，

$$
c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}
$$
$$
d_{ji} = \sum_{k=1}^{n} b_{kj} a_{ik}
$$

と表せ，${}^{\forall}(i,\ j) \implies c_{ij} = d_{ji}$．  
よって各成分は等しい．

型と成分が等しいので，${}^{t} \left( AB \right) = {}^{t} B ~ {}^{t} A$ が成り立つ．$\square$

### 成分の図

転置行列は添字がややこしいので，図？を使って確認しておきます．

$AB$ の $(i,\ j)$ 成分 $c_{ij}$
$$
\renewcommand{\r}[1]{\textcolor{red}{#1}}
\newcommand{\b}[1]{\textcolor{blue}{#1}}
\begin{bmatrix}
    a_{11}     & \dots & a_{1j}     & \dots & a_{1n}     \\
    \vdots     &       & \vdots     &       & \vdots     \\
    \r{a_{i1}} & \dots & \r{a_{ij}} & \dots & \r{a_{in}} \\
    \vdots     &       & \vdots     &       & \vdots     \\
    a_{m1}     & \dots & a_{mj}     & \dots & a_{mn}
\end{bmatrix}
\begin{bmatrix}
    b_{11} & \dots & \b{b_{1j}} & \dots & b_{1l} \\
    \vdots &       & \vdots     &       & \vdots \\
    b_{i1} & \dots & \b{b_{ij}} & \dots & b_{il} \\
    \vdots &       & \vdots     &       & \vdots \\
    b_{n1} & \dots & \b{b_{nj}} & \dots & b_{nl}
\end{bmatrix}
$$

${}^{t} B ~ {}^{t} A$ の $(j,\ i)$ 成分 $d_{ji}$
$$
\renewcommand{\r}[1]{\textcolor{red}{#1}}
\newcommand{\b}[1]{\textcolor{blue}{#1}}
\begin{bmatrix}
    b_{11}     & \dots & b_{i1}     & \dots & b_{n1}     \\
    \vdots     &       & \vdots     &       & \vdots     \\
    \b{b_{1j}} & \dots & \b{b_{ij}} & \dots & \b{b_{nj}} \\
    \vdots     &       & \vdots     &       & \vdots     \\
    b_{1l}     & \dots & b_{il}     & \dots & b_{nl}
\end{bmatrix}
\begin{bmatrix}
    a_{11} & \dots & \r{a_{i1}} & \dots & a_{m1} \\
    \vdots &       & \vdots     &       & \vdots \\
    a_{1j} & \dots & \r{a_{ij}} & \dots & a_{mj} \\
    \vdots &       & \vdots     &       & \vdots \\
    a_{1n} & \dots & \r{a_{in}} & \dots & a_{mn}
\end{bmatrix}
$$

よって，
$$
\begin{alignat*}{1}
    \sum_{k=1}^{n} a_{ik} b_{kj} &= \sum_{k=1}^{n} b_{kj} a_{ik} \\
               \therefore c_{ij} &= d_{ji}
\end{alignat*}
$$

```

$(5) \quad ({}^{t}A)^{-1} = {}^{t}(A^{-1})$

```spoiler:close:証明

${}^{t}A {}^{t}(A^{-1}) = {}^{t} (A^{-1} A) = {}^{t} I = I$  
${}^{t}(A^{-1}) {}^{t}A = {}^{t} (A A^{-1}) = {}^{t} I = I$

逆行列の定義より，$({}^{t}A)^{-1} = {}^{t}(A^{-1})． \quad \square$

```

~~~

$(1)$ から $(3)$ は明らかといっていいでしょう．

# 対称行列と交代行列

~~~definition:対称行列と交代行列

$A$：正方行列

$\quad$ $A$ が **対称行列** $\overset{def}\iff$ $A = {}^{t} A$  
$\quad$ $A$ が **交代行列** $\overset{def}\iff$ $A = - {}^{t} A$

~~~

~~~spoiler:open:例

対称行列

$$
\begin{pmatrix}
    1 & 2 & 3 \\
    2 & 4 & 5 \\
    3 & 5 & 6
\end{pmatrix}
$$

交代行列

$$
\begin{pmatrix}
    0  & 1 \\
    -1 & 0
\end{pmatrix}
$$

~~~

~~~theorem:交代行列と対称行列の関係

$A$ が交代行列 $\implies$ $A^{2}$ は対称行列

```spoiler:close:証明

$$
\begin{alignat*}{1}
    ({}^{t} A) {}^{2} &= {}^{t} (AA) \\
                      &= {}^{t} A ~ {}^{t} A \qquad \qquad \left( ~ \because ~ {}^{t} (XY) = {}^{t} Y ~ {}^{t} X \right) \\
                      &= (-A)(-A) \\
                      &= A^{2}
\end{alignat*}
$$

よって $A^{2}$ は対称行列．$\square$

```

~~~

たまに出てきます．

# 表記揺れ

## 転置行列

転置行列の書き方は分野によって様々です．  
概ね，

$$
{}^{t} A \quad A^{T}
$$

が使われます．
