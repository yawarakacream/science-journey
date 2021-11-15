---
title: "積空間・和空間・直和空間"
description: "積空間，和空間，直和空間を定義します．"
draft: true
---

~~~definition:積空間・和空間

$W_{1},\ W_{2}$：$V$ の部分空間

$\quad$ **積空間** $W_{1} \cap W_{2} := \{ \bm{x} \mid \bm{x} \in W_{1}$ かつ $\bm{x} \in W_{2} \}$

$\quad$ **和空間** $W_{1} + W_{2} := \{ \bm{x}_{1} + \bm{x}_{2} \mid \bm{x}_{1} \in W_{1},\ \bm{x}_{2} \in W_{2} \}$

~~~

積集合 $W_{1} \cap W_{2}$ はそのまま部分空間になりますが、和集合 $W_{1} \cup W_{2}$ はなるとは限りません．

~~~spoiler:close:反例
$$
V = \R^{2},\ W_{1} = \left\{ k \begin{pmatrix} 1 \\ 0 \end{pmatrix} ~ \middle| ~ k \in \R \right\},\ W_{2} = \left\{ k \begin{pmatrix} 0 \\ 1 \end{pmatrix} ~ \middle| ~ k \in \R  \right\}
$$
~~~

~~~definition:直和空間

$W_{1},\ W_{2}$：$V$ の部分空間

$\quad$ $W_{1} + W_{2}$ が **直和空間** または単に **直和**  
$\qquad$ $\overset{def}{\iff}$ ${}^{\forall} \bm{v} \in W_{1} + W_{2}$ に対し $\bm{w}_{1} \in W_{1},\ \bm{w}_{2} \in W_{2}$ が一意に存在し $\bm{v} = \bm{w}_{1} + \bm{w}_{2}$  
$\qquad$ $\iff W_{1} \cap W_{2} = \{ \bm{o} \}$

このとき，$W_{1} + W_{2}$ を $W_{1} \oplus W_{2}$ または $W_{1} \overset{.}{+} W_{2}$ などと表す．

~~~
