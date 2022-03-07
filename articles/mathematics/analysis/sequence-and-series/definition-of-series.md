---
title: "級数の導入"
draft: true
---

~~~definition:部分和・級数

無限数列 $\{ a_{n} \}$ に対し，

$$
S_{n} := \sum_{k = 1}^{n} a_{k}
$$

と定める．この $S_{n}$ を **$n$ 部分和** といい，極限

$$
\lim_{n \rightarrow \infty} S_{n}
$$

を **級数** という．級数は

$$
\sum_{n = 1}^{\infty} a_{n} \quad \sum a_{n} \quad a_{1} + a_{2} + \cdots
$$

のようにも表す．

~~~

数列の項を無限に足し続けたものを級数といいます．

有限の $n$ 部分和を有限級数，極限をとったものを無限級数と呼ぶこともあります．

級数は **前から足している** ことに注意します．  
$a_{1} + a_{2} + \cdots$ で表すのは形式的なもので，級数は足し算を無限回したものではありません．

実際に，なんと足す順番を入れ替えただけで値が変わることがあることが知られています（[Riemann の級数定理](/mathematics/analysis/sequence-and-series/absolutely-and-conditionally-convergent)）．

数列の添字について，当サイトでは基本的に $1$ から始まる数列及び級数を考えることにします．

また「十分大きな（すべての） $n$」という言葉がしばしば出現します．これは，級数は前の方に都合の悪い部分があるとき，有限個であれば

$$
\sum_{n = 1}^{m - 1} a_{n} + \sum_{n = m}^{\infty} a_{n}
$$

のように切り取ってしまうことで十分大きな $n$ だけ考えれば大丈夫になる，ということを主張しています．当サイトでは冗長にならないよう一々付け加えないことにします．なお，厳密には「ある $N$ が存在して $n \geq(>) ~ N$ をみたすすべての $n$」です．

# 基本的な級数

~~~definition:正項級数・交代級数

$\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が **正項級数** $\overset{def}{\iff}$ ${}^{\forall} n \in \N,\ a_{n} \geq 0$

$\displaystyle \sum_{n = 1}^{\infty} a_{n}$ が **交代級数** $\overset{def}{\iff}$ ${}^{\forall} n \in \N,\ \mathrm{sign}(a_{n + 1}) \neq \mathrm{sign}(a_{n})$

~~~

すべての項が負でない（つまり $0$ でもよい）数列の級数を正項級数，符号が交互に入れ替わる数列の級数を交代級数といいます．

~~~theorem:正項級数の収束性

正項級数が収束する $\iff$ 部分和が上に有界

```spoiler:close:証明

正項級数の部分和の列 $\{ S_{n} \}$ は単調増加し，[単調列は有界なら収束，有界でないならば発散する](/mathematics/analysis/sequence-and-series/bounded) ため．$\square$

```

~~~

直感的な定理です．

収束性を判定しているだけで，具体的な値は求められていないことに注目します．

高校でも無限等比級数というものを扱いましたが，あまり重要視はされませんでした．  
というのも，級数はその具体的な値を求めること，さらにいえば収束するか発散するか判定することもとても難しいのです．

収束するのか発散するのか未解決な級数もあります．