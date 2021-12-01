---
title: "有名な微分公式"
description: "有名な微分（導関数）を纏めました．"
---

# 多項式関数

$$
\frac{d}{dx} k = 0
$$

$$
\frac{d}{dx} x^{r} = r x^{r - 1}
$$

~~~spoiler:close:証明

$y = x^{r}$ とします．

自然対数をとって

$$
\begin{alignat*}{1}
    \log y &= \log x^{r} \\
           &= r \log x \\
\end{alignat*}
$$

$x$ で微分して

$$
\begin{alignat*}{1}
    \frac{y'}{y} &= r \cdot \frac{1}{x} \\
\end{alignat*}
$$

分母を払って

$$
\begin{alignat*}{1}
    y' &= r \cdot \frac{1}{x} \cdot y \\
       &= r \cdot x^{-1} \cdot x^{r} \\
       &= r x^{r - 1} \qquad \square
\end{alignat*}
$$

~~~

# 三角関数

$$
\frac{d}{dx} \sin x = \cos x
$$

~~~spoiler:close:証明

定義通りに進めます．

$$
\begin{alignat*}{1}
    (\sin x)' &= \lim_{h \rightarrow 0} \frac{\sin(x + h) - \sin x}{h} \\
              &= \lim_{h \rightarrow 0} \frac{\sin x \cos h + \cos x \sin h - \sin x}{h} \\
              &= \lim_{h \rightarrow 0} \left( \frac{\sin x (\cos h - 1)}{h} + \frac{\cos x \sin h}{h} \right) \\
              &= \lim_{h \rightarrow 0} \left( \sin x \cdot \frac{\cos h - 1}{h} + \cos x \cdot \frac{\sin h}{h} \right) \\
              &= \sin x \cdot 0 + \cos x \cdot 1 \\
              &= \cos x \qquad \square
\end{alignat*}
$$

なお，$\displaystyle \frac{\cos h - 1}{h},\ \frac{\sin h}{h}$ の極限については [極限の戦略と基本パターン](/mathematics/high-school-mathematics-3/limit/strategy) で説明しています．

~~~

$$
\frac{d}{dx} \cos x = - \sin x
$$

$$
\frac{d}{dx} \tan x = \frac{1}{\cos^{2} x}
$$

~~~spoiler:close:証明

商の微分公式を使います．

$$
\begin{alignat*}{1}
    (\tan x)' &= \left( \frac{\sin x}{\cos x} \right)' \\
              &= \frac{(\sin x)' \cos x - \sin x (\cos x)'}{\cos^{2} x} \\
              &= \frac{\cos^{2} x + \sin^{2} x}{\cos^{2} x} \\
              &= \frac{1}{\cos^{2} x} \qquad \square
\end{alignat*}
$$

~~~

$$
\frac{d}{dx} \arcsin x = \frac{1}{\sqrt{1 - x^{2}}}
$$

~~~spoiler:close:証明

$y = \arcsin x$ とすると $x = \sin y$ です．

$y$ で微分すると

$$
\frac{dx}{dy} = \cos y
$$

逆関数の微分公式から

$$
\begin{alignat*}{1}
    \frac{dy}{dx} &= \frac{1}{\frac{dx}{dy}} \\
                  &= \frac{1}{\cos y} \\
                  &= \frac{1}{\sqrt{1 - \sin^{2} y}} \\
                  &= \frac{1}{\sqrt{1 - x^{2}}} \qquad \square
\end{alignat*}
$$

~~~

$$
\frac{d}{dx} \arccos x = - \frac{1}{\sqrt{1 - x^{2}}}
$$

$$
\frac{d}{dx} \arctan x = \frac{1}{1 + x^{2}}
$$

~~~spoiler:close:証明

$y = \arctan x$ とすると $x = \tan y$ です．

$y$ で微分すると

$$
\begin{alignat*}{1}
    \frac{dx}{dy} &= \frac{1}{\cos^{2} y} \\
                  &= 1 + \tan^{2} y
\end{alignat*}
$$

逆関数の微分公式から

$$
\begin{alignat*}{1}
    \frac{dy}{dx} &= \frac{1}{\frac{dx}{dy}} \\
                  &= \frac{1}{1 + \tan^{2} y} \\
                  &= \frac{1}{1 + x^{2}} \qquad \square
\end{alignat*}
$$

~~~

# 指数関数・対数関数

$\log$ の底が $e$ でないときは，底の変換公式で $e$ にします．

$$
\frac{d}{dx} e^{x} = e^{x}
$$

$$
\frac{d}{dx} a^{x} = a^{x} \log a
$$

~~~spoiler:close:証明

$y = a^{x}$ とします．

自然対数をとって

$$
\begin{alignat*}{1}
    \log y &= \log a^{x} \\
           &= x \log a
\end{alignat*}
$$

$x$ で微分して

$$
\frac{y'}{y} = \log a
$$

分母を払って

$$
\begin{alignat*}{1}
    y' &= y \cdot \log a \\
       &= a^{x} \log a \qquad \square
\end{alignat*}
$$

~~~

$$
\frac{d}{dx} \log |x| = \frac{1}{x}
$$

~~~spoiler:close:証明

定義通りに進めます．

$$
\begin{alignat*}{1}
    (\log |x|)' &= \lim_{h \rightarrow 0} \frac{\log |x + h| - \log |x|}{h} \\
                &= \lim_{h \rightarrow 0} \frac{1}{h} (\log |x + h| - \log |x|) \\
                &= \lim_{h \rightarrow 0} \frac{1}{h} \log \left| \frac{x + h}{x} \right| \\
                &= \lim_{h \rightarrow 0} \frac{1}{h} \log \left| 1 + \frac{h}{x} \right| \\
                &= \lim_{h \rightarrow 0} \frac{1}{x} \cdot \frac{x}{h} \log \left| 1 + \frac{h}{x} \right| \\
                &= \lim_{h \rightarrow 0} \frac{1}{x} \cdot \log \left| 1 + \frac{h}{x} \right|^{\displaystyle \frac{x}{h}} \\
                &= \lim_{h \rightarrow 0} \frac{1}{x} \cdot \log \left| 1 + \frac{1}{\frac{h}{x}} \right|^{\displaystyle \frac{x}{h}} \\
                &= \frac{1}{x} \cdot \log e \\
                &= \frac{1}{x} \qquad \square
\end{alignat*}
$$

$h \rightarrow 0$ のとき $\displaystyle \frac{x}{h} \rightarrow \infty$ なので，$\log$ の中身がまるまる $e$ の定義になります．

~~~
