---
title: "有界性と上限・下限"
description: "集合の有界性と，それをベースに数列・関数の有界性を定義します．単調で有界な数列は収束することも確認します．"
---

~~~definition:有界性

$S$：空でない $\R$ の部分集合 とする．

$S$ が **上に有界**（bounded from above）

$\quad \overset{def}{\iff}$ ${}^{\exists} M \in \R \quad s.t. \quad {}^{\forall} x \in S,\ x \leq M$

$\quad \iff$ 任意の $x \in S$ に対して $x \leq M$ が成り立つ $M \in \R$ が存在する

---

$S$ が **下に有界**（bounded from below）

$\quad \overset{def}{\iff}$ ${}^{\exists} m \in \R \quad s.t. \quad {}^{\forall} x \in S,\ x \geq m$

$\quad \iff$ 任意の $x \in S$ に対して $x \geq m$ が成り立つ $m \in \R$ が存在する

---

$S$ が **有界**（bounded）

$\quad \overset{def}{\iff}$ $S$ が上に有界かつ下に有界

~~~

~~~definition:上限・下限

$\alpha$ が $S$ の **上限**（supremum）

$\quad\overset{def}{\iff}$ $\alpha$ は最小の上界

$
\quad\iff
\begin{cases}
    (1) ~ {}^{\forall} x \in S,\ x \leq \alpha \quad \\
    (2) ~ {}^{\forall} \varepsilon > 0,\ {}^{\exists} x \in S \quad s.t. \quad x \geq \alpha - \varepsilon
\end{cases}
$

この上限 $\alpha$ を **$\sup S$** で表す．

---

$\alpha$ が $S$ の **下限**（infimum）

$\quad\overset{def}{\iff}$ $\alpha$ は最大の下界

$
\quad\iff
\begin{cases}
    (1) ~ {}^{\forall} x \in S,\ x \geq \alpha \quad \\
    (2) ~ {}^{\forall} \varepsilon > 0,\ {}^{\exists} x \in S \quad s.t. \quad x \leq \alpha + \varepsilon
\end{cases}
$

この下限 $\alpha$ を **$\inf S$** で表す．

~~~

中高で最大値や最小値を扱ってきました．  
上限・下限は最大値・最小値を拡張したような概念です．

下界は「かかい」と発音します．

また，これからは最大値を **$\max S$**，最小値を **$\min S$** と書くことにしましょう．

~~~spoiler:open:例

集合 $A = \{ -1, 0, 2 \}$ は有界で，$\sup A = 2,\ \inf A = -1$．

集合 $A = \{ x ~ | ~ 0 < x \}$ は下に有界で，$\inf A = 0$．

~~~

上界・下界が存在するならば，それ以上・以下の数はすべて上界・下界です．

~~~spoiler:open:例

自然数の集合 $\N$ は下に有界で，$\inf \N = 1$．

ただし $1$ 以外，たとえば $0,\ -2,\ -3,\ -100$ もみな $N$ の下界．

~~~

~~~theorem:上限下限と最大値最小値

$\max S$ が存在する $\implies$ $\sup S = \max S$

$\min S$ が存在する $\implies$ $\inf S = \min S$

~~~

最大値・最小値が存在するならば，それらは上限・下限です．

ただし，上限・下限が存在しても最大値・最小値が存在するとは限りません．

~~~spoiler:open:例

集合 $A = \{ x ~ | ~ x < 1 \}$ は上に有界で，$\sup A = 1$．  
しかし，最大値 $\max A$ は存在しない．

~~~

# 基本語句

集合の有界性と同様に，数列や関数の有界性も考えられます．

有界な数列のことを **有界列**，有界な関数のことを **有界関数** といいます．  
また，上に有界，下に有界という言葉も使われます．

~~~spoiler:open:例

$a_{n} = n^{2} ~ (n \in \N)$ は下に有界で，$\inf a_{n} = 1$．

$f(x) = \sin x ~ (x \in \R)$ は有界で，$\sup f = 1,\ \inf f = -1$．

~~~

まったく同じ考え方なので定義は略します．

~~~theorem:単調で有界な数列の収束性

単調な数列 $\{ a_{n} \}$ が収束する $\iff$ $\{ a_{n} \}$ は有界

特に，

$(1)$ 上に有界・単調増加 $\implies ~ \displaystyle \lim_{n\rightarrow\infty} a_{n} = \sup a_{n}$

$(2)$ 下に有界・単調減少 $\implies ~ \displaystyle \lim_{n\rightarrow\infty} a_{n} = \inf a_{n}$

```spoiler:close:証明

$(1)$ を示す．

$\alpha := \sup a_{n}$ とする．上限の定義から

$(1)$ 任意の $a_{n}$，つまり $n$ に対し $a_{n} \leq \alpha$  
$(2)$ 任意の $\varepsilon > 0$ に対し $\alpha - \varepsilon < a_{N}$ をみたす $a_{N}$ が，つまり $N$ が存在

すなわち，任意の $\varepsilon > 0$ に対しある $N$ が存在して

$$
\alpha - \varepsilon < a_{n} \leq \alpha
$$
$$
\therefore ~ \lim_{n \rightarrow \infty} a_{n} = \alpha \quad \square
$$

```

~~~

有界で単調な数列は収束します．

直感的な定理です．


