---
title: "極限の求め方"
description: "極限の戦略と基本パターン集です。"
---

極限の頻出パターン集です。

極限の戦略は、**知っている形に持ち込む** に尽きます。

怖いのは感覚にそぐわない結果が出てきたりすることです。  
地道に計算するしかありません。

なお、ふつうは極限をとるなら **$x \rightarrow 0$** か **$x \rightarrow \infty$** の形でなければ扱えないと思ってよいです。  
この形になっていなければ適宜置き換えて対応します。

~~~spoiler:close:置き換える例

$\displaystyle \lim_{x \rightarrow \pi} \frac{\sin (\pi - x)}{\pi - x}$ を求めます。

$t = \pi - x$ とおくと、$x \rightarrow \pi$ のとき $t \rightarrow 0$ で、

$$
\begin{alignat*}{1}
    \lim_{x \rightarrow \pi} \frac{\sin (\pi - x)}{\pi - x}
        &= \lim_{t \rightarrow 0} \frac{\sin t}{t} \\
        &= 1
\end{alignat*}
$$

極限値が求まりました。

~~~

[漸化式](/mathematics/high-school-mathematics-b/sequence/recurrence-relation-strategy) ほどのバリエーションはありません。  
大抵ボーナス問題です。基本を抑えれば問題ないでしょう。

## 有名な極限

~~~spoiler:close

覚えておく必要のある極限です。

$$
\lim_{x \rightarrow 0} \frac{\sin x}{x} = 1
$$

無限大に飛ばしたときの関数の大小関係も抑えておくと便利です。

$$
\lim_{x \rightarrow \infty} \frac{x^{n}}{a^{x}} = 0
$$
（多項式関数は指数関数に勝てない）

$$
\lim_{x \rightarrow \infty} \frac{\log x}{x^{n}} = 0
$$
（対数関数は多項式関数に勝てない）

### はさみうちの原理

$\leq$ は _$=$ でもよい_ という意味です。  
つまり、$\leq$ は $<$ よりも緩い条件で、$p < q$ をみたすならば $p \leq q$ といえる点に注意します。

$$
f(x) \leq h(x) \leq g(x),\ \lim_{x \rightarrow a} f(x) = \lim_{x \rightarrow a} g(x) = \alpha
$$
$$
\quad \implies \lim_{x \rightarrow a} h(x) = \alpha
$$

### 区分求積法

$$
\lim_{n \rightarrow \infty} \frac{1}{n} \sum_{k = 1}^{n} f\left(\frac{k}{n}\right) = \int_{0}^{1} f(x) ~ dx
$$

$$
\lim_{n \rightarrow \infty} \frac{1}{n} \sum_{k = 0}^{n - 1} f\left(\frac{k}{n}\right) = \int_{0}^{1} f(x) ~ dx
$$

### 積分

$$
\lim_{x \rightarrow a} \frac{1}{x - a} \int_{a}^{x} f(t) ~ dt = f(a)
$$

```spoiler:close:証明

$f(x)$ の原子関数を $F(x)$ とすると、

$$
\begin{alignat*}{1}
\lim_{x \rightarrow a} \frac{1}{x - a} \int_{a}^{x} f(t) ~ dt
    &= \lim_{x \rightarrow a} \frac{1}{x - a} \Big[ F(t) \Big]_{a}^{x} \\
    &= \lim_{x \rightarrow a} \frac{F(x) - F(a)}{x - a} \\
    &= \frac{d}{dx} F(x) \\
    &= f(x)
\end{alignat*}
$$

```

~~~

## 微分の定義

~~~spoiler:close

微分の定義を使うと簡単に求められることがあります。

### 例

$\displaystyle \lim_{x \rightarrow 0} \frac{1 - \cos x}{x}$ を求めます。

微分の定義になるようにうまく変形します。

$$
\begin{alignat*}{1}
    \lim_{x \rightarrow 0} \frac{1 - \cos x}{x}
        &= \lim_{x \rightarrow 0} \frac{1 - \cos x}{0 - x} \\
        &= \lim_{x \rightarrow 0} \frac{\cos 0 - \cos x}{0 - x}
\end{alignat*}
$$

これはよくみると $\cos x$ の $x = 0$ における微分係数なので、$(\cos x)' = - \sin x$ より

$$
\lim_{x \rightarrow 0} \frac{\cos 0 - \cos x}{0 - x} = - \sin 0 = 0
$$

したがって、

$$
\lim_{x \rightarrow 0} \frac{1 - \cos x}{x} = 0
$$

極限値が求まりました。

~~~

## $e$ の定義

~~~spoiler:close

$e$ の定義は

$$
e = \lim_{x \rightarrow \infty} \left ( 1 + \frac{1}{x} \right)^{x}
$$

でした。これを用いて極限を求めることがあります。

### 例

実数 $\alpha$ に対して

$$
\lim_{x \rightarrow \infty} \left( 1 + \frac{\alpha}{x} \right)^{x}
$$

を求めます。

$t = \frac{x}{\alpha}$ とおくと、$x \rightarrow \infty$ のとき $t \rightarrow \infty$ で、

$$
\begin{alignat*}{1}
    \lim_{x \rightarrow \infty} \left( 1 + \frac{\alpha}{x} \right)^{x}
        &= \lim_{x \rightarrow \infty} \left( \left ( 1 + \frac{1}{\frac{x}{\alpha}} \right)^{\frac{x}{\alpha}} \right)^{\alpha} \\
        &= \lim_{x \rightarrow \infty} \left( \left ( 1 + \frac{1}{\frac{x}{\alpha}} \right)^{\frac{x}{\alpha}} \right)^{\alpha} \\
        &= \lim_{t \rightarrow \infty} \left( \left ( 1 + \frac{1}{t} \right)^{t} \right)^{\alpha} \\
        &= e^{\alpha} \\
\end{alignat*}
$$

極限値が求まりました。

~~~

# 最終手段

最終手段を紹介します。

高校では以下の定理は証明もしませんし大抵は紹介もされないので、高校生が無断で使うと怒られると思います。  
あくまで検算用です！最終手段

なお、以下の説明では実用上の問題がない程度にいくらかの条件を省いています。  
厳密な条件や証明は大学数学の方で紹介していますので、興味があればご覧ください。

## ロピタルの定理

~~~spoiler:close

分数の **不定形** の極限に対して、分子と分母をそれぞれ微分すると極限値が求まることがあります。

```theorem:ロピタルの定理
$$
\lim_{x \rightarrow a} \frac{f(x)}{g(x)} = \lim_{x \rightarrow a} \frac{f'(x)}{g'(x)}
$$
```

ロピタルの定理で注意すべきは、**極限値が存在しない場合でも値が出てきてしまうことがある** 点です。  
この問題は大学数学の方で解説している条件をみたさないことに起因します。  
（誤解のないように言えば、ロピタルの定理に悪いところがあるのではなく条件をみたさずに使うのが悪い）

ただし、逆に極限値が存在するのにそれと異なる値が出てきてしまう、ということはありません。検算には有用です。

### 例

$\displaystyle \lim_{x \rightarrow \infty} \frac{\log x}{e^{x}}$ を求めます。

$(\log x)' = \frac{1}{x},\ (e^{x})' = e^{x}$ より

$$
\begin{alignat*}{1}
    \lim_{x \rightarrow \infty} \frac{\log x}{e^{x}}
        &= \lim_{x \rightarrow \infty} \frac{\frac{1}{x}}{e^{x}} \\
        &= \lim_{x \rightarrow \infty} \frac{1}{x e^{x}} \\
        &= 0
\end{alignat*}
$$

極限値が求まりました。

~~~

大学数学：[l'Hôpital の定理](/mathematics/analysis/limit/lhopital-rule)

## マクローリン展開

~~~spoiler:close

無限階微分可能な関数 $f(x)$ は以下のように **無限に続く多項式で表せる** ことが知られています。  
このことをマクローリン展開といいます。

```theorem:マクローリン展開

$$
\begin{alignat*}{1}
    f(x) &= \sum_{n = 0}^{\infty} \frac{f^{(n)}(0)}{n!} x^{n} \\
         &= f(0) + \frac{f'(0)}{1!} x + \frac{f''(0)}{2!} x^{2} + \cdots
\end{alignat*}
$$

```

多項式の極限は簡単に求められるので、簡単に微分できそうな関数に対してしばしば有効です。

なお、マクローリン展開には適用できる条件がいくらかあります。

基本的に高校で扱う関数はすべて展開できると思ってよいですが、例外として **対数関数に注意** しなければなりません。

```spoiler:open:有名なマクローリン展開

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

```

なぜこれが成り立つのかについては、大学数学の方に感覚的な説明もありますのでそちらを参照してください。

### 例

$\displaystyle \lim_{x \rightarrow 0} \frac{\sin x}{x}$ を求めます。

$(\sin x)' = \cos x,\ (\sin x)'' = - \sin x$ より

$$
\begin{alignat*}{1}
    \sin x &= \sin 0 + \frac{\cos 0}{1!} \cdot x + \frac{- \sin 0}{2!} x^{2} + \cdots \\
           &= 0 + 1 \cdot x + \frac{-1}{2} x^{2} + \cdots \\
           &= x + \frac{-1}{2} x^{2} + \cdots \\
\end{alignat*}
$$

よって

$$
\begin{alignat*}{1}
    \lim_{x \rightarrow 0} \frac{\sin x}{x}
        &= \lim_{x \rightarrow 0} \left( \frac{x + \frac{-1}{2} x^{2} + \cdots}{x} \right) \\
        &= \lim_{x \rightarrow 0} \left( 1 + \frac{-1}{2} x^{1} + \cdots \right) \\
        &= 1
\end{alignat*}
$$

後ろの方の項は $x \rightarrow 0$ ですべて消えてしまうので、これで極限値が求まりました。

ちなみに、マクローリン展開は無限に続くところを打ち切ると近似式になり、  
上記の式は $x$ が十分小さいとき $\sin x$ を $x$ で近似できることを示しています。  
物理の振り子の話などで見覚えのある近似式ですね。

~~~

~~~spoiler:close:細かい話

> 後ろの方の項は $x \rightarrow 0$ ですべて消えてしまう

とありますが、$\frac{1}{\infty}$ の $0$ を無限に足し続けて $0$ になるとは本当でしょうか？

例として $\displaystyle \lim_{n \rightarrow \infty} \frac{1 + 2 + \cdots + n}{n^{2}}$ を考えてみると

正しい計算
$$
\begin{alignat*}{1}
\lim_{n \rightarrow \infty} \frac{1 + 2 + \cdots + n}{n^{2}}
    &= \lim_{n \rightarrow \infty} \frac{\frac{1}{2} n (n + 1)}{n^{2}} \\
    &= \lim_{n \rightarrow \infty} \frac{1}{2} \left( \frac{n^{2} + n}{n^{2}} \right) \\
    &= \lim_{n \rightarrow \infty} \frac{1}{2} \left( 1 + \frac{1}{n} \right) \\
    &= \frac{1}{2} \cdot (1 + 0) \\
    &= \frac{1}{2}
\end{alignat*}
$$

正しくない計算
$$
\begin{alignat*}{1}
\lim_{n \rightarrow \infty} \frac{1 + 2 + \cdots + n}{n^{2}}
    &= \lim_{n \rightarrow \infty} \frac{1 + 2 + \cdots + n}{n^{2}} \\
    &= \lim_{n \rightarrow \infty} \left( \frac{1}{n^{2}} + \frac{2}{n^{2}} + \cdots + \frac{n}{n^{2}} \right) \\
    &= 0 + 0 + \cdots + 0 \\
    &= 0
\end{alignat*}
$$

というわけで、$\frac{1}{\infty}$ の $0$ は無限に足しても $0$ とは限らなさそうです。

しかし実は、マクローリン展開の前にマクローリンの定理という以下の主張があります。

```theorem:マクローリンの定理

$f(x)$ が $n$ 回微分可能ならば、次式をみたす $c ~ (0 < c < x)$ が存在する。

$$
f(x) = f(0) + \frac{f'(0)}{1!} x + \frac{f''(0)}{2!} x^{2} + \cdots \frac{f^{(n - 1)}(0)}{(n - 1)!} x^{n - 1} + \frac{f^{(n)}(\textcolor{red}{c})}{n!} x^{n}
$$

```

マクローリンの定理によって、**$n + 1,\ n + 2,\ ...$ 項めを纏めて $n$ 項めに入れてしまってよい** ことがわかります。

言い換えれば、無限に展開しなくても **途中で打ち切ってしまってよい** ということです。

たとえば、先に例に挙げた極限は
$$
\begin{alignat*}{1}
    \lim_{x \rightarrow 0} \frac{\sin x}{x}
        &= \lim_{x \rightarrow 0} \left( \frac{x + \frac{-1}{2} x^{2} + k x^{3}}{x} \right) \\
        &= \lim_{x \rightarrow 0} \left( 1 + \frac{-1}{2} x^{1} + k x^{2} \right) \\
        &= 1
\end{alignat*}
$$
と計算でき、無限に $0$ を足した場合と同様の結果が得られました。

したがって、マクローリン展開で極限を考えるとき「後ろの方の項は $x \rightarrow 0$ ですべて消えてしまう」とみなせることが正当化されます。

~~~

大学数学：[Maclaurin の定理と展開](/mathematics/analysis/differential/maclaurin-theorem-and-series)

## 余談

~~~spoiler:close:この説明でよいのか

こうした定理を裏技的に扱い雑な説明をしてしまうことに対して、もちろんさまざま議論があるでしょうが、私はそれでいいと思っています。

たとえばはさみうちの原理はロピタルの定理と同程度以上に重要な定理ですが、高校ではあくまで感覚的な説明に留まります。  
はさみうちの原理が許されてロピタルの定理が許されないのは不思議です。

はさみうちの原理と違って感覚的な証明もしづらいのはその通りですが・・・。

~~~
