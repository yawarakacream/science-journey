---
title: "ベクトル空間と部分ベクトル空間"
description: "線形代数で最も重要な要素のひとつ，ベクトル空間について確認します．ベクトル空間は直交座標系を拡張したような概念です．"
draft: true
---

~~~definition:ベクトル空間

$V$ が $K$ 上の **ベクトル空間**（vector space）$\overset{def}{\iff}$ 以下の性質をみたすベクトルの集合

$(1)$ 以下の演算が定義されている

- スカラー倍 ${}^{\forall}\bm{v} \in V,\ {}^{\forall}k \in K \implies k \bm{v} \in V$ が定義されている
- 加法 ${}^{\forall}\bm{u},\ \bm{v} \in V \implies \bm{u} + \bm{v} \in V$ が定義されている

$(2)$ 各演算に対し，以下の性質をみたす

- $\bm{u} + \bm{v} = \bm{v} + \bm{u}$（交換法則）
- $(\bm{u} + \bm{v}) + \bm{w} = \bm{u} + (\bm{v} + \bm{w})$（結合法則）
- $k (l \bm{u}) = (kl) \bm{u}$（結合法則）
- $k (\bm{u} + \bm{v}) = k \bm{u} + k \bm{v}$（分配法則）
- $(k + l) \bm{v} = k \bm{v} + k \bm{u}$（分配法則）
- $1\bm{v} = \bm{v}$（恒等変換）
- $0\bm{v} = \bm{o}$（$0$ 倍は $\bm{o}$）

~~~

たとえば $\R^{3}$ は $3$ 次元実ベクトル全体の集合で，ベクトル空間です．

ベクトル空間は直交座標系を拡張したような概念です．  
高校のベクトルで斜交座標系に触れた人は扱いやすいかもしれません．

~~~definition:部分ベクトル空間
$W$ が $V$ の **部分ベクトル空間** $\overset{def}{\iff}$ $W$ は $V$ の部分集合でベクトル空間
~~~

$V$ からとってきた部分集合が必ず部分ベクトル空間になるとは限りません．

部分ベクトル空間か判定するには地道に性質を調べるしかありません．  
主に実数，複素数のベクトル空間を扱うことになると思いますが，これらにおいては $(2)$ の性質がすべて成り立つので $(1)$ の性質のみを調べればよいです．

また，スカラー倍の条件からベクトル空間は **零ベクトルを含む** ことがわかります（$k = 0$ のとき）．  
零ベクトルを条件のひとつに加えてる本も多いかもしれません．

~~~spoiler:open:例

以下の $W$ が $R^{2}$ の部分ベクトル空間か判定してみます．

### 部分ベクトル空間の例

$(1) ~ W = \left\{ \left[ \begin{array}{c} x_{1} \\ x_{2} \end{array} \right] \in \R^{2} ~ \middle| ~ 3 x_{1} + 7 x_{2} = 0 \right\}$

スカラー倍を確認：

任意の $\bm{x} = \left[ \begin{array}{c} x_{1} \\ x_{2} \end{array} \right] \in W,\ k \in \R$ に対して

$$
\begin{alignat*}{1}
    3 (k x_{1}) + 7 (k x_{2}) &= k (3 x_{1} + 7 x_{2}) \\ &= k \cdot 0 \\ &= 0
\end{alignat*}
$$

よって $\left[ \begin{array}{c} k x_{1} \\ k x_{2} \end{array} \right] \in W$ より $k \bm{x} \in W$．

加法を確認：

任意の $\bm{x} = \left[ \begin{array}{c} x_{1} \\ x_{2} \end{array} \right],\ \bm{y} = \left[ \begin{array}{c} y_{1} \\ y_{2} \end{array} \right] \in W$ に対して

$$
\begin{alignat*}{1}
    3 (x_{1} + y_{1}) + 7 (x_{2} + y_{2}) &= (3 x_{1} + 7 x_{2}) + (3 y_{1} + 7 y_{2}) \\ &= 0 + 0 \\ &= 0
\end{alignat*}
$$

よって $\left[ \begin{array}{c} x_{1} + y_{1} \\ x_{2} + y_{2} \end{array} \right] \in W$ より $\bm{x} + \bm{y} \in W$．

以上より $W$ は $V$ の部分ベクトル空間．

### 部分ベクトル空間でない例

$(2) ~ W = \left\{ \left[ \begin{array}{c} x_{1} \\ x_{2} \end{array} \right] \in \R^{2} ~ \middle| ~ 3 x_{1} + 7 x_{2} = 1 \right\}$

$W$ が部分ベクトル空間ならば零ベクトルを含むが，明らかに含まない．  
よって $W$ は 部分ベクトル空間ではない．

~~~
