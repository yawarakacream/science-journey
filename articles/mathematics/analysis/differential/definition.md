---
title: "微分の定義"
---

~~~definition:微分係数

関数 $f(x)$，$a \in \R$ がある．

極限値

$$
\lim_{h \rightarrow 0} \frac{f(a + h) - f(a)}{h}
$$

が存在するとき，$f(x)$ は $x = a$ で **微分可能** という．  
また，この極限値を **微分係数** といい，$f'(a)$ で表す．

~~~

~~~definition:導関数

一般の点の微分を考える．

関数 $f(x)$，区間 $I$ がある．

$f(x)$ が区間 $I$ で **微分可能** $\overset{def}\iff$ $f(x)$ は ${}^{\forall} x \in I$ で微分可能

$f(x)$ の**導関数** $f'(x)$ $\overset{def}\iff$ 一般の $x \in \R$ に対する $f(x)$ の微分係数

$$
f'(x) := \lim_{h \rightarrow 0} \frac{f(x + h) - f(x)}{h}
$$

$f(x)$ を **微分する** $\overset{def}\iff$ $f(x)$ の導関数を求める

導関数は

$$
\frac{df}{dx},\ \frac{d}{dx}f(x)
$$

のように表すこともある．

~~~

高校の定義と同様です．

```spoiler:open:例

$f(x) = x^{2}$ を微分してみよう．

$$
\begin{alignat*}{1}
    f'(x)
    &= \lim_{h \rightarrow 0} \frac{f(x + h) - f(x)}{h} \\
    &= \lim_{h \rightarrow 0} \frac{(x + h)^{2} - x^{2}}{h} \\
    &= \lim_{h \rightarrow 0} \frac{2xh + h^{2}}{h} \\
    &= \lim_{h \rightarrow 0} (2x + h) \\
    &= 2x
\end{alignat*}
$$

```

$\varepsilon - \delta$ 論法で極限を定義しなおしたので，微分も定義しなおしてみた，という格好です．

とはいえ，求められない限り微分するだけなら $\varepsilon - \delta$ 論法などはわざわざ持ち出さなくてもよいと思います．
