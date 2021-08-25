---
title: "確率変数と分布関数"
desciprion: "確率変数と分布関数について定義します．集合ベースだった確率を実数と結び付け，連続的な確率を扱うことを目指します．"
---

~~~definition:確率変数

標本点を実数に対応させる関数を **確率変数** という．

確率変数 $X : \Omega \rightarrow \R$ $\quad$（$\Omega$：標本空間）

~~~

~~~definition:分布関数

$(\Omega,\ \mathscr{F},\ P)$：確率空間  
$X$：確率変数

$X$ の **分布関数** $F_{X}(x) : \R \rightarrow [0,\ 1]$ は，

$$
F_{X}(x) := P(X \leq x) = P(\{\omega ~ | ~ X(\omega) \leq x\})
$$

~~~

いよいよ大学の統計らしくなってきます！  
集合ベースだった確率を実数と結び付け，連続的な確率を扱うことを目指します．

**確率変数** は，標本空間の要素を実数に置き換えるための関数です．

**分布関数** は，任意の実数 $x$ に対し $X(\omega) \leq x$ をみたす $\omega$ の集合の確率 $P$ を与える関数です．

~~~theorem:分布関数の性質

$(1)$ $\textcolor{blue}{0 \leq F_{X}(x) \leq 1} \quad for \quad {}^{\forall} x \in \R$

$(2)$ **広義単調増加** $\quad$ $x_{1} < x_{2} \implies F_{X}(x_{1}) \leq F_{X}(x_{2})$

$(3)$ $\textcolor{blue}{F_{X}(-\infty) = 0,\ F_{X}(\infty) = 1}$

$(4)$ **右連続** $\quad$ $F_{X}(x) = F_{X}(x+)$

~~~
