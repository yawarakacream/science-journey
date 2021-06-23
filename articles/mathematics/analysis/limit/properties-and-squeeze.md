---
title: "基本性質とはさみうちの原理"
---

~~~theorem:極限の基本性質

$\displaystyle \lim_{x \rightarrow a} f(x) = \alpha \in \R,\ \lim_{x \rightarrow a} g(x) = \beta \in \R$ とするとき，

$\displaystyle (1) ~ \lim_{x \rightarrow a} \left( f(x) + g(x) \right) = \alpha + \beta$

$\displaystyle (2) ~ \lim_{x \rightarrow a} f(x) ~ g(x) = \alpha \beta$

$\displaystyle (3) ~ \lim_{x \rightarrow a} \frac{g(x)}{f(x)} = \frac{\beta}{\alpha} \quad (\alpha \neq 0)$

$\displaystyle (4) ~ f(x) \leq g(x) \implies \alpha \leq \beta$

~~~

$(2)$ は $g(x)$ を定数関数とすると定数倍は $\lim$ の外に出せることがわかります．

$$
\lim_{x \rightarrow a} kf(x) = k \cdot \lim_{x \rightarrow a} f(x) = k \alpha
$$

~~~theorem:はさみうちの原理

関数 $h(x)$ が $f(x) \leq h(x) \leq g(x)$ をみたすとする．このとき，

$$
\lim_{x \rightarrow a} f(x) = \lim_{x \rightarrow a} g(x) = \alpha ~ \implies ~ \lim_{x \rightarrow a} h(x) = \alpha
$$

```spoiler:close:証明

絶対値を不等式に書き換えた $\varepsilon - \delta$ 論法を用いて示す．

${}^{\forall} \varepsilon > 0$ に対し，定義から

$$
|x - a| \leq \delta_{1} \implies -\varepsilon < f(x) - \alpha < \varepsilon
$$
$$
|x - a| \leq \delta_{2} \implies -\varepsilon < g(x) - \alpha < \varepsilon
$$

をみたす $\delta_{1},\ \delta_{2}$ が存在する．

ここで $\delta := \min(\delta_{1},\ \delta_{2})$ とすると $f(x) \leq h(x) \leq g(x)$ より

$$
\begin{alignat*}{1}
    |x - a| \leq \delta &\implies -\varepsilon < f(x) - \alpha < \varepsilon,\ -\varepsilon < g(x) - \alpha < \varepsilon \\
                        &\implies -\varepsilon + \alpha < f(x),\ g(x) < \alpha + \varepsilon \\
                        &\implies -\varepsilon + \alpha < f(x) \leq h(x) \leq g(x) < \alpha + \varepsilon \\
                        &\implies -\varepsilon + \alpha < h(x) < \alpha + \varepsilon \\
                        &\implies -\varepsilon < h(x) - \alpha < \varepsilon
\end{alignat*}
$$

よって $\displaystyle \lim_{x \rightarrow a} h(x) = \alpha$．$\square$

```

~~~

$f(x) < h(x) < g(x)$ のイメージが強いかもしれません．

$f(x) < h(x) < g(x) \implies f(x) \leq h(x) \leq g(x)$，  
つまり $\leq$ は $<$ よりも緩い条件であることに注意します．

高校では事実を受け入れるに留まりましたが，$\varepsilon - \delta$ 論法から証明できます．
