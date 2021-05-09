---
title: "確率公理と性質"
---

確率の定義と，そこからわかる定理（というか系）を確認します．

~~~definition:確率（確率公理）

空でない集合 $\Omega$ とその完全加法族 $\mathscr{F}$，及び関数 $P: \mathscr{F} \rightarrow \R$ がある．

$P$ が $\Omega$ 上（或いは $\mathscr{F}$ 上）の **確率測度**（probability measure）である  
$$
\quad \overset{def}\iff
\begin{cases}
    (1) ~ P(\Omega) = 1 \\
    (2) ~ {}^{\forall} A \in \mathscr{F} \implies P(A) \geq 0 \\
    (3) ~ A_{1},\ A_{2},\ ... \in \mathscr{F},\ A_{i} \cap A_{j} = \varnothing ~ (i \neq j) \\
        \qquad \implies P(\bigcup_{i=1}^{\infty} A_{i}) = \sum_{i=1}^{\infty} P(A_{i})
\end{cases}
$$

確率空間（probability space）  
$\quad \overset{def}\iff$ 組 $(\Omega,\ \mathscr{F},\ P)$

~~~

確率論では，確率は事象を与えると $0$ から $1$ の値が返ってくる関数で考えます．

$(1)$ $\Omega$ は標本空間，すなわち起こり得る試行のすべての集合なので，$P(\Omega) = 1$ です．  
$(2)$ どのような事象を与えても，確率が負になるということはありません（非負性）．  
$(3)$ はこれだとわかりづらいです（完全加法性）が，互いに排反な事象があったとき "それらの和事象から得られる値" と "各事象から得られた値の和" が等しくなることが示せます（有限加法性）．

ここで出てきたパラメータを纏めた組 $(\Omega,\ \mathscr{F},\ P)$ を確率空間と呼びます．

~~~theorem:確率

事象 $A, B$ が $A \sub B$  
$$
\quad \implies
\begin{cases}
    (1) ~ P(A) \leq P(B) \\
    (2) ~ P(B - A) = P(B) - P(A)
\end{cases}
$$

${}^{\forall}A \in \mathscr{F} \implies 0 \leq P(A) \leq 1$

~~~

事象の包含関係はそのまま確率の大小関係です．  
事象の差を取って求めた確率と，確率を求めたから差を取った値は等しくなります．

確率はどんな $A$ に対しても $0$ から $1$ の間です．

~~~theorem:加法定理

$A,\ B \in \mathscr{F} \implies P(A \cup B) = P(A) + P(B) - P(A \cap B)$

特に $B = A^{c}$ のとき，  
$$
P(A \cup A^{c}) = P(A) + P(A^{c}) - P(\varnothing) = P(\Omega) = 1
$$

~~~

$P$ の意味を考えれば明らかです．  
ある事象の確率と余事象の確率の和は，$($事象$)$ $\cup$ $($余事象$)$ $= \Omega$ なので確率公理より $1$ です．

# 表記揺れ

### 確率測度

確率測度のことを単に **確率** ということがあります．

### 確率空間

確率空間のことを **確率モデル** ということがあります．
