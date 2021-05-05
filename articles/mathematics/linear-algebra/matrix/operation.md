---
title: "行列の演算"
---

行列の演算を確認します．

~~~definition:和と差

型が同じ行列 $A = [a_{ij}],\ B = [b_{ij}]$ がある．

和 $A + B := [a_{ij} + b_{ij}]$

差 $A + B := [a_{ij} - b_{ij}]$

~~~

行列の和と差は要素の和と差です．

*型が同じ行列同士* のときにのみ定義されます．  
たとえば，$2 \times 3$ 行列と $3 \times 2$ 行列の和は計算できません．

~~~definition:積

$m \times n$ 行列 $A$ と $n \times l$ 行列 $B$ がある．

積 $AB := [\sum_{k=1}^{n} a_{ik} b_{kj}] \quad$ 結果は $m \times l$ 行列

スカラー倍 $kA := [ka_{ij}] \quad (k \in \R)$

マイナス倍 $-A := [-a_{ij}]$

~~~

行列の積は少し計算が面倒です．  
結果の行列の型が，左側の行列の型と右側の行列の型を混ぜたものになるのが特徴です．  
左側の行列の列の数と右側の行列の行の数が等しいときにのみ定義されます．

また，$AB$ と $BA$ がともに定義されていた場合，その積は非可換，つまり行列の順番によって結果が変わってしまいます．

ベクトルの積も，ベクトルは行列の特別な場合なので同様に計算します．  
この積と高校で学んだ内積（や外積）は別物です．

### 例

$
A =
\begin{bmatrix}
    1 & 2 \\
    3 & 4
\end{bmatrix}
,\
B =
\begin{bmatrix}
    5 & 7 \\
    6 & 8
\end{bmatrix}
$
とする．

$$
A + B =
\begin{bmatrix}
    1 + 5 & 2 + 7 \\
    3 + 6 & 4 + 8
\end{bmatrix}
=
\begin{bmatrix}
    6 & 8 \\
    9 & 12
\end{bmatrix}
.
$$

$$
A - B =
\begin{bmatrix}
    1 - 5 & 2 - 7 \\
    3 - 6 & 4 - 8
\end{bmatrix}
=
\begin{bmatrix}
    -4 & -5 \\
    -3 & -4
\end{bmatrix}
.
$$

$$
AB = 
\begin{bmatrix}
    1 \cdot 5 + 2 \cdot 6 & 1 \cdot 7 + 2 \cdot 8 \\
    3 \cdot 5 + 4 \cdot 6 & 3 \cdot 7 + 4 \cdot 8
\end{bmatrix}
=
\begin{bmatrix}
    17 & 23 \\
    39 & 53
\end{bmatrix}
.
$$

$$
BA =
\begin{bmatrix}
    5 \cdot 1 + 7 \cdot 3 & 5 \cdot 2 + 7 \cdot 4 \\
    6 \cdot 1 + 8 \cdot 3 & 6 \cdot 2 + 8 \cdot 4
\end{bmatrix}
=
\begin{bmatrix}
    26 & 38 \\
    30 & 44
\end{bmatrix}
.
$$

$$
2A =
\begin{bmatrix}
    2 & 4 \\
    6 & 8
\end{bmatrix}
.
$$

$$
-B =
\begin{bmatrix}
    -5 & -7 \\
    -6 & -8
\end{bmatrix}
.
$$