---
title: "微分の定義"
description: "微分の定義を確認します．"
---

~~~definition:微分係数

関数 $f(x)$，$a \in \R$ に対し，

極限値

$$
\lim_{h \rightarrow 0} \frac{f(a + h) - f(a)}{h}
$$

が存在するとき，$f(x)$ は $x = a$ で **微分可能** という．  
また，この極限値を **微分係数** といい，$f'(a)$ で表す．

~~~

~~~definition:導関数

一般の点の微分を考える．

関数 $f(x)$，区間 $I$ に対し，

$f(x)$ が区間 $I$ で **微分可能** $\overset{def}\iff$ $f(x)$ は ${}^{\forall} x \in I$ で微分可能

$f'(x)$ が $f(x)$ の **導関数** $\overset{def}\iff$ 一般の $x \in \R$ に対する $f(x)$ の微分係数

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

~~~definition:高次導関数

関数 $f(x)$ の導関数 $f'(x)$ が微分可能であるとき，  
$f(x)$ は $2$ 階微分可能といい，$f'(x)$ の微分 $f''(x)$ を $f(x)$ の $2$ 次導関数という．

再帰的に **$n$ 階微分可能**，**$n$ 次導関数** を定義し，  
$f(x)$ の $n$ 次導関数を
$$
f^{(n)} (x) \qquad \frac{d^{n}f}{dx^{n}} \qquad \frac{d^{n}}{dx^{n}} f(x)
$$

のように表す．

$f(x)$ が $n$ 階微分可能で $f^{(n)}(x)$ が連続であるとき，$f(x)$ は **$n$ 階連続微分可能**，**$C^{n}$ 級** であるという．

~~~

高校の定義と同様です．

**$C^{n}$ 級** という言い方を抑えましょう．

```spoiler:close:例

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
