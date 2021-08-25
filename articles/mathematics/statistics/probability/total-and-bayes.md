---
title: "全確率の定理・Bayesの定理"
description: "統計学で最も有名な定理の1つである「全確率の定理」「Bayesの定理（ベイズの定理）」の概要と証明です．"
draft: true
---

~~~theorem:全確率の定理

$(\Omega,\ \mathscr{F},\ P)$：確率空間  
$A_{1},\ A_{2},\ ...\ $：${}^{\forall} i,\ P(A_{i}) > 0$ をみたす $\Omega$ の分割

このとき事象 $B$ に対し，

$$
P(B) = \sum_{i=1}^{\infty} P(A_{i}) ~ P(B ~ | ~ A_{i})
$$

```spoiler:open:証明

[確率公理](/mathematics/mathematical-statistics/probability/probability-axioms) と [一般乗法定理](/mathematics/mathematical-statistics/probability/conditional-probability) を用いて示します．

$$
\begin{alignat*}{1}
    P(B) &= P(B \cap \Omega) \\
         &= P \left( B \cap \left( \bigcup_{i = 1}^{\infty} A_{i} \right) \right) \\
         &= P \left( \bigcup_{i = 1}^{\infty} \left( B \cap A_{i} \right) \right) \\
         &= P \left( \sum_{i = 1}^{\infty} \left( B \cap A_{i} \right) \right) \\
         &= P \left( \sum_{i = 1}^{\infty} P(A_{i})~ P(B ~ | ~ A_{i}) \right)
\end{alignat*}
$$

```

~~~

~~~theorem:Bayesの定理

$(\Omega,\ \mathscr{F},\ P)$：確率空間  
$A_{1},\ A_{2},\ ...\ $：${}^{\forall} i,\ P(A_{i}) > 0$ をみたす $\Omega$ の分割

このとき $P(B) > 0$ なる事象 $B$ に対し，

$$
P(A_{i} ~ | ~ B) = \frac{P(A_{i}) ~ P(B ~ | ~ A_{i})}{\sum_{j = 1}^{\infty} P(A_{j}) ~ P(B ~ | ~ A_{j})}
$$

これを **Bayes の定理**（ベイズの定理）という．

```spoiler:open:証明

全確率の定理 と [条件付き確率の定義](/mathematics/mathematical-statistics/probability/conditional-probability) を用いて示します．  
特に約分などもなく，そのまま分子と分母を書き換えるだけです．

$$
\begin{alignat*}{1}
    P(A_{i} ~ | ~ B) &= \frac{P(A_{i} \cap B)}{P(B)} \\
                     &= \frac{P(A_{i}) ~ P(B ~ | ~ A_{i})}{\sum_{j = 1}^{\infty} P(A_{j}) ~ P(B ~ | ~ A_{j})}
\end{alignat*}
$$

```

~~~
