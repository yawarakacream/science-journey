---
title: "正則行列"
description: ""
---

~~~definition:正則行列と逆行列

正方行列 $A$ に対し，

$X$ が $A$ の **逆行列** $\overset{def}\iff$ $AX = I$ かつ $XA = I$

$A$ が **正則行列** $\overset{def}\iff$ $A$ の逆行列が存在

逆行列は通常 $A^{-1}$ のように表す．

~~~

非常によく使います．

ふつうの数（スカラー）$a$ の逆数 $1/a$ に相当しますが，  
$\textcolor{blue}{\bm{A \neq O}}$ **でも逆行列を持たないことがある** ことに注意します．

```spoiler:close:逆行列を持たない例

例として $
A =
\begin{bmatrix}
    1 & 1 \\
    0 & 0
\end{bmatrix}
$ の逆行列を求めてみましょう．

$$
A^{-1} =
\begin{bmatrix}
    x & y \\
    z & w
\end{bmatrix}
$$

とおくと

$$
AA^{-1} = 
\begin{bmatrix}
    x + z & y + w \\
    0     & 0
\end{bmatrix}
$$

となりますが，これは $AA^{-1} = I$ に反します．  
よって $A$ の逆行列は存在しません．

また，したがって $A$ は正則行列ではありません．

```

~~~theorem:逆行列の一意性
正則行列 $A$ の逆行列 $A^{-1}$ は一意に定まる．
~~~

```spoiler:close:証明

$AX = I,\ XA = I$ かつ $AY = I,\ YA = I$ とすると，  

$X = IX = (YA) X = Y (AX) = YI = Y. \quad \square$

```

一意性の証明は，それを $X,\ Y$ など複数の文字でおいて，$X = Y$ を導くのがセオリーです．

~~~theorem:逆行列の性質

$(1) \quad \left(A^{-1}\right)^{-1} = A$

$(2) \quad \left(AB\right)^{-1} = B^{-1} A^{-1}$

```spoiler:close:証明

$(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AA^{-1} = I$  
$(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}B = I$

$\therefore ~ (AB)^{-1} = B^{^-1}A^{-1}. \quad \square$

```

~~~

# 余談

## 正則行列と逆行列の定義

正則行列をはじめに定義して，正則行列から出てくる行列を逆行列の定義に使う人もいます．  
同値なのでどちらでも構いません．

## $AX = I \iff XA = I$

実は $\textcolor{blue}{AX = I \iff XA = I}$ であることが知られており，逆行列を求めたり存在を示すときはどちらかを考えるだけで必要十分です．

このページでは教科書的に両方示しています．
