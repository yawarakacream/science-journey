---
title: "確率変数と累積分布関数"
desciprion: "確率変数と累積分布関数（分布関数）について定義します．集合ベースだった確率を実数と結び付け，関数とともに確率を扱うことを目指します．"
---

~~~definition:確率変数
確率的に値が決まる量を **確率変数** という．
~~~

~~~definition:累積分布関数

$(\Omega,\ \mathscr{F},\ P)$：確率空間  
$X$：確率変数

$X$ の **確率分布** $P_{X}(X = x)$ は，

$$
P_{X}(X = x) = P(\{ \omega ~ | ~ X(\omega) = x \})
$$

$X$ の **累積分布関数** または単に **分布関数**（CDF）$F_{X}(x) : \R \rightarrow [0,\ 1]$ は，

$$
F_{X}(x) := P_{X}(X \leq x)
$$

CDF：cumulative distribution function

~~~

いよいよ大学の統計らしくなってきます！  
集合ベースだった確率を実数と結び付け，関数とともに確率を扱うことを目指します．

**確率変数** は，標本点の代わりにこれから考えていく，確率的に値が決まる実数です．  
標本点を実数に置き換える関数とも考えられます．

$\quad$ 確率変数 $X : \Omega \rightarrow \R$ $\quad$（$\Omega$：標本空間）

**累積分布関数** は，任意の実数 $x$ に対し $X(\omega) \leq x$ をみたす $\omega$ の集合の確率 $P$ を与える関数です．分布関数とも呼ばれます．

~~~theorem:累積分布関数の性質

$(1)$ $\textcolor{blue}{0 \leq F_{X}(x) \leq 1} \quad for \quad {}^{\forall} x \in \R$

$(2)$ **広義単調増加** $\quad$ $x_{1} < x_{2} \implies F_{X}(x_{1}) \leq F_{X}(x_{2})$

$(3)$ $\textcolor{blue}{F_{X}(-\infty) = 0,\ F_{X}(\infty) = 1}$

$(4)$ **右連続** $\quad$ $F_{X}(x) = F_{X}(x+)$

~~~

左連続とは限りません．
