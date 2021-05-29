---
title: "確率変数と分布関数"
---

~~~definition:確率変数

標本空間 $\Omega$ がある．

**確率変数** $X(\omega)$ $\overset{def}\iff$ $\omega \in \Omega$ に実数を対応させる関数

~~~

~~~definition:分布関数

確率空間 $(\Omega,\ \mathscr{F},\ P)$，確率変数 $X$ がある．

$X$ の **分布関数** $F_{X}(x) : R \rightarrow [0,\ 1]$ は，

$$
F_{X}(x) := P(X \leq x) = P(\{\omega ~ | ~ X(\omega) \leq x\})
$$

~~~

**確率変数** は，標本空間の要素を実数に置き換えるための関数です．

**分布関数** は，任意の実数 $x$ に対し $X(\omega) \leq x$ をみたす $\omega$ の集合の確率 $P$ を与える関数です．

~~~theorem:分布関数の性質

$(1)$ $\textcolor{blue}{0 \leq F_{X}(x) \leq 1} \quad for \quad {}^{\forall} x \in \R$

$(2)$ **非減少関数** $\quad$ $x_{1} < x_{2} \implies F_{X}(x_{1}) \leq F_{X}(x_{2})$

$(3)$ $\textcolor{blue}{F_{X}(-\infty) = 0,\ F_{X}(\infty) = 1}$

$(4)$ **右連続** $\quad$ $F_{X}(x) = F_{X}(x+)$

~~~