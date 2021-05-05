---
title: "基本語句と演算"
notes:
---

集合の基本語句・演算とよく使われる集合の記号を確認します．

~~~definition:基本語句

### 集合
ある条件を満たすものの集まり

### 元（要素）
集合を構成する個々のもの

### 空集合
元をもたない集合

### 部分集合
ある集合の元のうち一部あるいは全ての元をもつ集合  
また，空集合はすべての集合の部分集合

### 補集合
ある集合があって，全体集合からその集合との差を取った集合

### 有限集合
元が有限個の集合

### 無限集合
元が無限個の集合

### 外延的記法
元を列挙するような記法  
例：$\{1,\ 2,\ 8\}$

### 内包的記法
元の条件を定める記法  
例：$\{x ~ | ~ ax^{2} + bx + c = 0\}$

### 互いに素
$A$ と $B$ が互いに素 $\overset{def}\iff A \cup B = \emptyset$ $\iff$ すべての元が異なる

~~~

~~~definition:集合の演算

和集合 $A \cup B := \{x ~ | ~ x \in A$ または $x \in B\}$

積集合 $A \cap B := \{x ~ | ~ x \in A$ かつ $x \in B\}$

差集合 $A \setminus B := \{x ~ | ~ x \in A$ かつ $x \notin B\}$

複数の和集合
$$
\begin{alignat*}{1}
    \bigcup_{i=l}^{r} A_{i} &:= \{x ~ | ~ l \leq {}^{\exists}i \leq r,\ A_{i} \owns x \} \\
                            &\ = A_{l} \cup A_{l + 1} \cup ... \cup A_{r}
\end{alignat*}
$$

複数の積集合
$$
\begin{alignat*}{1}
    \bigcap_{i=l}^{r} A_{i} &:= \{x ~ | ~ l \leq {}^{\forall}i \leq r,\ A_{i} \owns x \} \\
                            &\ = A_{l} \cap A_{l + 1} \cap ... \cap A_{r}
\end{alignat*}
$$

冪集合 $2^{X} := \{A ~ | ~ A \subset X\} \quad$（部分集合の集合）

補集合 $A^{c} := U \setminus A \quad$（$U$：全体集合）

~~~

## よく使われる集合の記号

| 記号 | 意味 |
| :-: | :-- |
| $\emptyset$ | 空集合 |
| $\varnothing$ | 空集合 |
| $\mathbb{P}$ | 素数 |
| $\N$ | 自然数 |
| $\Z$ | 整数 |
| $\mathbb{Q}$ | 有理数 |
| $\R$ | 実数 |
| $\cnums$ | 複素数 |