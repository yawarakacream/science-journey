---
title: "Maclaurinの定理・展開"
description: "Taylor展開・定理の特別な場合であるMaclaurinマクローリンの定理，Maclaurinマクローリン展開について纏めました．有名な展開の公式の一覧も載せています．"
draft: true
---

~~~theorem:Maclaurinの定理

$f(x)$：$0$ を含む区間 $I$ で $n$ 階微分可能 とする．

このとき，任意の $x \in I$ に対して

$$
{}^{\exists} c \in (0,\ x) \quad s.t. \quad f(x) = \sum_{k = 0}^{n - 1} \frac{f^{(k)}(0)}{k!} x^{k} + \frac{f^{(n)}(\textcolor{red}{c})}{n!} x^{n}
$$

が成り立つ．

これを **Maclaurin の定理**（マクローリンの定理）という．

~~~

~~~theorem:Maclaurin展開

$f(x)$：$0$ を含む区間 $I$ で無限階微分可能 とする．

このとき，任意の $x \in I$ に対して

剰余項 $R_{n}(x) = \displaystyle \frac{f^{(n)}(c)}{n!} x^{n}$ を定義し $\displaystyle \lim_{n \rightarrow \infty} R_{n}(x) = 0$ をみたすならば

$$
f(x) = \sum_{k = 0}^{\infty} \frac{f^{(k)}(0)}{k!} x^{k}
$$

と表せる．

これを **Maclaurin 展開**（マクローリン展開）という．

~~~

Maclaurin の定理・展開は，原点周りの [Taylorの定理・展開](/mathematics/analysis/differential/taylor-theorem-and-series) です．

# 有名な展開

$$
\begin{alignat*}{1}
    e^{x} &= \sum_{n = 0}^{\infty} \frac{x}{n!} \\
          &= 1 + x + \frac{x}{2!} + \frac{x}{3!} + \cdots
\end{alignat*}
$$

$$
\begin{alignat*}{1}
    \log (1 + x) &= \sum_{n = 1}^{\infty} \frac{(-1)^{n + 1}}{n} x^{n} \\
                 &= x - \frac{x^{2}}{2} + \frac{x^{3}}{3} - \cdots
\end{alignat*}
\qquad (-1 < x < 1)
$$

$$
\begin{alignat*}{1}
    \sin x &= \sum_{n = 0}^{\infty} \frac{(-1)^{n}}{(2n + 1)!} x^{2n + 1} \\
           &= x - \frac{x^{3}}{6} + \cdots
\end{alignat*}
$$

$$
\begin{alignat*}{1}
    \cos x &= \sum_{n = 0}^{\infty} \frac{(-1)^{n}}{(2n)!} x^{2n} \\
           &= 1 - \frac{x^{2}}{2} + \cdots
\end{alignat*}
$$

# 余談

もちろん証明にはなりませんが，雰囲気的には以下のように考えられます．

適当な関数 $f(x)$ を $f(x) = a_{0} + a_{1} x + a_{2} x^{2} + a_{3} x^{3} + \cdots$ というような多項式で表せると便利そうです！

さて，$x = 0$ を代入すると，後ろの項がすべて消えてくれて $a_{0}$ が残ります．

$$
f(0) = a_{0} + a_{1} \cdot 0 + a_{2} \cdot 0 + a_{3} \cdot 0 + \cdots
$$
$$
\therefore ~ a_{0} = f(0)
$$

同じような操作で $a_{1}$ を求められると理想的ですね．

$x = 0$ を代入すると $a_{1}$ だけが残ってくれるように $f(x)$ をうまく書き換えたいのですが，  
そこで $f(x)$ を微分してみると

$$
f'(x) = 1 a_{1} + 2 a_{2} x + 3 a_{3} x^{2} + \cdots
$$

$x = 0$ を代入して

$$
f'(0) = 1 a_{1} + 2 a_{2} \cdot 0 + 3 a_{3} \cdot 0 + \cdots
$$
$$
\therefore ~ 1 a_{1} = f'(0)
$$

$a_{1}$ がわかりました．さらに微分して $x = 0$ を代入すると，

$$
f''(x) = 1 \cdot 2 a_{2} + 2 \cdot 3 a_{3} x + \cdots
$$
$$
f''(0) = 1 \cdot 2 a_{2} + 2 \cdot 3 a_{3} \cdot 0 + \cdots
$$
$$
\therefore ~ 1 \cdot 2 a_{2} = f''(0)
$$

$a_{2}$ もわかりました．よってこの操作を繰り返せばよさそうで，以下のように予想できます．

$$
\begin{alignat*}{1}
                               1 \cdot 2 \cdot 3 a_{3} &= f^{(3)}(0) \\
                       1 \cdot 2 \cdot 3 \cdot 4 a_{4} &= f^{(4)}(0) \\
               1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 a_{5} &= f^{(5)}(0) \\
                                                       &\vdots \\
    1 \cdot 2 \cdot \cdots \cdot (n - 1) \cdot n a_{n} &= f^{(n)}(0) \\
                                                       &\vdots
\end{alignat*}
$$

左辺の係数を階乗に置き換えて右辺に持ってくると，

$$
a_{n} = \frac{f^{(n)}(0)}{n!}
$$

$a_{n}$ の一般項？がわかりました．
