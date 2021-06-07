---
title: "積の微分・Leibniz の公式"
description: "積の微分とその一般化，Leibniz（ライプニッツ）の公式の説明と証明です。"
---

~~~theorem:積の微分

関数 $f(x),\ g(x)$ が微分可能であるとき，

$$
(f(x) ~ g(x))' = f'(x) ~ g(x) + f (x) ~ g'(x)
$$

```spoiler:close:証明

定義通りに計算します．

$$
\begin{alignat*}{1}
    (f(x) g(x))' &= \lim_{h \rightarrow 0} \frac{f(x + h) g(x + h) - f(x) g(x)}{h} \\
                 &= \lim_{h \rightarrow 0} \frac{f(x + h) g(x + h) \textcolor{red}{- f(x) g(x + h) + f(x) g(x + h)} - f(x) g(x)}{h} \\
                 &= \lim_{h \rightarrow 0} \frac{f(x + h) g(x + h) - f(x) g(x + h)}{h} + \lim_{h \rightarrow 0} \frac{f(x) g(x + h) - f(x) g(x)}{h} \\
                 &= \lim_{h \rightarrow 0} \frac{f(x + h) - f(x)}{h} g(x + h) + \lim_{h \rightarrow 0} f(x) \frac{g(x + h) - g(x)}{h} \\
                 &= f'(x) g(x) + f(x) g'(x) \qquad \square
\end{alignat*}
$$

```

~~~

有名な公式です．

~~~theorem:Leibniz（ライプニッツ）の公式

関数 $f(x),\ g(x)$ が $n$ 階微分可能であるとき，

$$
(f(x) ~ g(x))^{(n)} = \sum_{k = 0}^{n} {}_{n} \mathrm{C} {}_{k} ~ f^{(k)}(x) ~ g^{(n - k)}(x)
$$

```spoiler:close:証明

数学的帰納法で証明します．

見栄えが冗長になってしまうので $(x)$ は略します．

$n = 1$ のときは上記の「積の微分」．

$n = m$ で成り立つとして $n = m + 1$ のとき，

$$
\newcommand{\comb}[2]{{}_{#1} \mathrm{C} {}_{#2}}
\begin{alignat*}{1}
    (f \cdot g)^{(m + 1)} &= \left( (f \cdot g)^{(m)} \right)' \\
                          &= \left( \sum_{k = 0}^{m} \comb{m}{k} f^{(k)} g^{(m - k)} \right)' \\
                          &= \sum_{k = 0}^{m} \comb{m}{k} \left( f^{(k)} g^{(m - k)} \right)' \\
                          &= \sum_{k = 0}^{m} \comb{m}{k} \left( f^{(k + 1)} g^{(m - k)} + f^{(k)} g^{(m - k + 1)} \right) \\
                          &= \textcolor{red}{\sum_{k = 0}^{m} \comb{m}{k} f^{(k + 1)} g^{(m - k)}} + \textcolor{blue}{\sum_{k = 0}^{m} \comb{m}{k} f^{(k)} g^{(m - k + 1)}}
\end{alignat*}
$$

ここで，

$$
\newcommand{\comb}[2]{{}_{#1} \mathrm{C} {}_{#2}}
\begin{alignat*}{1}
    \textcolor{red}{\sum_{k = 0}^{m} \comb{m}{k} f^{(k + 1)} g^{(m - k)}}
    &= \sum_{k = 0}^{m - 1} \comb{m}{k} f^{(k + 1)} g^{(m - k)} + \textcolor{green}{\comb{m}{m}} f^{(m + 1)} g^{(m - m)} \\
    &= \sum_{k = 1}^{m} \comb{m}{k - 1} f^{(k)} g^{(m - k + 1)} + \textcolor{green}{\comb{m + 1}{m + 1}} f^{(m + 1)} g^{(0)}
\end{alignat*}
$$
$$
\newcommand{\comb}[2]{{}_{#1} \mathrm{C} {}_{#2}}
(\because \textcolor{green}{\comb{m}{m} = \comb{m + 1}{m + 1}})
$$

$$
\newcommand{\comb}[2]{{}_{#1} \mathrm{C} {}_{#2}}
\begin{alignat*}{1}
    \textcolor{blue}{\sum_{k = 0}^{m} \comb{m}{k} f^{(k)} g^{(m - k + 1)}}
    &= \textcolor{green}{\comb{m}{0}} f^{(0)} g^{(m + 1)} + \sum_{k = 1}^{m} \comb{m}{k} f^{(k)} g^{(m - k + 1)} \\
    &= \textcolor{green}{\comb{m + 1}{0}} f^{(0)} g^{(m + 1)} + \sum_{k = 1}^{m} \comb{m}{k} f^{(k)} g^{(m - k + 1)}
\end{alignat*}
$$
$$
\newcommand{\comb}[2]{{}_{#1} \mathrm{C} {}_{#2}}
(\because \textcolor{green}{\comb{m}{0} = \comb{m + 1}{0}})
$$

を用いて，

$$
\newcommand{\comb}[2]{{}_{#1} \mathrm{C} {}_{#2}}
\begin{alignat*}{1}
    (f \cdot g)^{(m + 1)} &= \textcolor{red}{\sum_{k = 1}^{m} \comb{m}{k - 1} f^{(k)} g^{(m - k + 1)} + \comb{m + 1}{m + 1} f^{(m + 1)} g^{(0)}} + \textcolor{blue}{\comb{m + 1}{0} f^{(0)} g^{(m + 1)} + \sum_{k = 1}^{m} \comb{m}{k} f^{(k)} g^{(m - k + 1)}} \\
                          &= \comb{m + 1}{0} f^{(0)} g^{(m + 1)} + \sum_{k = 1}^{m} \textcolor{green}{\left (\comb{m}{k - 1} + \comb{m}{k} \right)} f^{(k)} g^{(m - k + 1)} + \comb{m + 1}{m + 1} f^{(m + 1)} g^{(0)} \\
                          &= \comb{m + 1}{0} f^{(0)} g^{(m + 1)} + \sum_{k = 1}^{m} \textcolor{green}{\comb{m + 1}{k}} f^{(k)} g^{(m - k + 1)} + \comb{m + 1}{m + 1} f^{(m + 1)} g^{(0)} \\
                          &= \sum_{k = 0}^{m + 1} \comb{m + 1}{k} f^{(k)} g^{(m - k + 1)} \\
                          &= \sum_{k = 0}^{m + 1} \comb{m + 1}{k} f^{(k)} g^{(m + 1 - k)}
\end{alignat*}
$$
$$
\newcommand{\comb}[2]{{}_{#1} \mathrm{C} {}_{#2}}
(\because \textcolor{green}{\comb{m}{k - 1} + \comb{m}{k} = \comb{m + 1}{k}})
$$

と変形でき，$n = m + 1$ のときも成り立つ．

したがって，数学的帰納法により任意の $n \in \N$ で成り立つ．$\square$

```

~~~

一般の $n$ 階微分の積の微分です．

二項定理に似ていますね！

証明は難しくないですが，変形が大変です．  
特に $\newcommand{\comb}[2]{{}_{#1} \mathrm{C} {}_{#2}} \comb{m}{k - 1} + \comb{m}{k} = \comb{m + 1}{k}$ が一見非自明ですね．．．  
よく考えるとパスカルの三角形の定義を述べていることがわかります．
