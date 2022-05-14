---
title: "l'Hôpitalの定理"
description: "l'Hôpitalの定理（ロピタルの定理）を証明します．"
---

~~~theorem:l'Hôpitalの定理(0/0)

実関数 $f(x),\ g(x)$：$a$ を含む開区間 $I$ で連続，$I \setminus \{a\}$ で微分可能，$g'(x) \neq 0$  

とし，

$\quad \displaystyle \lim_{x \rightarrow a} f(x) = \lim_{x \rightarrow a} g(x) = 0$

であるとする．このとき

$\quad$ $\displaystyle \lim_{x \rightarrow a} \frac{f'(x)}{g'(x)} = \alpha$ $\quad$ ならば $\quad$ $\displaystyle \lim_{x \rightarrow a} \frac{f(x)}{g(x)} = \alpha$

$\quad (\alpha \in [-\infty, \infty])$

これを（$0 / 0$ 型の）**l'Hopital の定理**（ロピタルの定理）という．

```spoiler:close:証明

${}^{\forall} x \in I ~ (x \neq a)$ に対し，[Cauchy の平均値の定理](/mathematics/analysis/differential/rolle-and-mean-value) からある $c \in (x, a)$ が存在して

$$
\frac{f(x) - f(a)}{g(x) - g(a)} = \frac{f'(c)}{g'(c)}
$$

が成り立つ．

$f(x),\ g(x)$ は $x = a$ で連続で $\displaystyle \lim_{x \rightarrow a} f(x) = \lim_{x \rightarrow a} g(x) = 0$ なので $f(a) = g(a) = 0$．これを用いて

$$
\frac{f(x)}{g(x)} = \frac{f(x) - f(a)}{g(x) - g(a)}
$$

すなわち

$$
\frac{f(x)}{g(x)} = \frac{f'(c)}{g'(c)}
$$

である．$x \rightarrow a$ のとき $c \rightarrow a$ なので

$$
\lim_{x \rightarrow a} \frac{f(x)}{g(x)} = \lim_{c \rightarrow a} \frac{f'(c)}{g'(c)}
$$

見栄えのために変数を置き換えると

$$
\lim_{x \rightarrow a} \frac{f(x)}{g(x)} = \lim_{x \rightarrow a} \frac{f'(x)}{g'(x)}
$$

を得る．$\square$

```

~~~

~~~theorem:l'Hôpitalの定理(∞/∞)

実関数 $f(x),\ g(x)$：$a$ を含むある開区間 $I$ において $I \setminus \{a\}$ で微分可能，$g'(x) \neq 0$  

とし，

$\quad \displaystyle \lim_{x \rightarrow a} f(x) = \lim_{x \rightarrow a} g(x) = \infty$

であるとする．このとき

$\quad$ $\displaystyle \lim_{x \rightarrow a} \frac{f'(x)}{g'(x)} = \alpha$ $\quad$ ならば $\quad$ $\displaystyle \lim_{x \rightarrow a} \frac{f(x)}{g(x)} = \alpha$

$\quad (\alpha \in [-\infty, \infty])$

これを（$\infty / \infty$ 型の）**l'Hopital の定理**（ロピタルの定理）という．

~~~

l'Hôpital（ロピタル）の定理です．

$0 / 0$ か $\infty / \infty$ の形の不定形の極限を求めたいとき，分子分母をそれぞれ微分した極限が **存在するならば** もとの極限もその値，と主張しています．

分子分母を微分しても値が変わらない，というよりかは，**微分した極限から元の極限に極限が渡ってくる** というイメージのほうが近いです．

また，一階の微分でもまだ難しかった場合，仮定をみたす限り繰り返し微分してもよいこともわかります．

大学受験の裏技，などと紹介されがちという点でも有名ですね．  
大学に入ればきちんと証明を与えることができます．
