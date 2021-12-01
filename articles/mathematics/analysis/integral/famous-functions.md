---
title: "有名な積分公式"
description: "有名な積分（原始関数）を纏めました．"
---

積分定数は省略します．

積分は微分の逆操作なので，大方の証明は [有名な微分公式](/mathematics/analysis/differential/famous-functions) をご覧ください．

# 多項式関数等

$$
\int x^{r} ~ dx = \frac{1}{r + 1} x^{r + 1} \quad (r \neq -1)
$$

$$
\int \frac{dx}{x} = \log |x|
$$

$$
\int \frac{dx}{\sqrt{a^{2} - x^{2}}} = \arcsin \frac{x}{a}
$$

$$
\int \frac{dx}{x^{2} + a^{2}} = \frac{1}{a} \arctan \frac{x}{a}
$$

# 三角関数

$$
\int \sin x ~ dx = - \cos x
$$

$$
\int \cos x ~ dx = \sin x
$$

$$
\int \tan x ~ dx = - \log |\cos x|
$$

$$
\int \arcsin x ~ dx = x \arcsin x + \sqrt{1 - x^{2}}
$$

~~~spoiler:close:証明

見えない $1$ がいると思って部分積分します．

$$
\begin{alignat*}{1}
    \int \arcsin x ~ dx &= \int 1 \cdot \arcsin x ~ dx \\
                        &= x \cdot \arcsin x - \int x \cdot \frac{1}{\sqrt{1 - x^{2}}} ~ dx \\
                        &= x \arcsin x + \sqrt{1 - x^{2}} \qquad \square
\end{alignat*}
$$

~~~

$$
\int \arccos x ~ dx = x \arccos x - \sqrt{1 - x^{2}}
$$

$$
\int \arctan x ~ dx = x \arctan x - \frac{1}{2} \log (1 + x^{2})
$$

~~~spoiler:close:証明

見えない $1$ がいると思って部分積分します．

$$
\begin{alignat*}{1}
    \int \arctan x ~ dx &= \int 1 \cdot \arctan x ~ dx \\
                        &= x \cdot \arctan x - \int x \cdot \frac{1}{1 + x^{2}} ~ dx \\
                        &= x \arctan x - \frac{1}{2} \log (1 + x^{2}) \qquad \square
\end{alignat*}
$$

~~~

# 指数関数・対数関数

$\log$ の底が $e$ でないときは，底の変換公式で $e$ にします．

$$
\int e^{x} ~ dx = e^{x}
$$

$$
\int a^{x} ~ dx = \frac{a^{x}}{\log a}
$$

$$
\int \log x ~ dx = x \log x - x
$$

~~~spoiler:close:証明

見えない $1$ がいると思って部分積分します．

$$
\begin{alignat*}{1}
    \int \log x ~ dx &= \int 1 \cdot \log x ~ dx \\
                     &= x \cdot \log x - \int x \cdot \frac{1}{x} ~ dx \\
                     &= x \log x - x \qquad \square
\end{alignat*}
$$

~~~
