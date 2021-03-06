---
title: "数列の極限：ε-N 論法"
description: "躓きやすい ε-N 論法のきもちとともに，数列の収束と発散を厳密に定義します．数列 {a_n} が α ∈ R に収束する ⇔ 任意の ε > 0 に対して ε に応じて決まる N が存在し，任意の n ≧ N なる n で　|a_n - α| < ε"
---

数列の極限を定義します．  
添字のおかげでどういう考え方をしているのかわかりやすいので，関数の極限を扱う準備としての側面が強いです．

ここでは，初項 $n = 1$ から始まる無限実数列（実数の項が無限に続く数列）について考えることにします．

~~~definition:数列の収束

実数列 $\{a_{n}\}$ が $\alpha \in \R$ に **収束する**

$\quad \overset{def}\iff {}^{\forall}\varepsilon > 0,\ {}^{\exists}N = N(\varepsilon) \in \N \quad \lbrack \ {}^{\forall}n \geq N \implies |a_{n} - \alpha| < \varepsilon \ \rbrack$

$\quad \iff$ 任意の $\varepsilon > 0$ に対して $\varepsilon$ に応じて決まる $N \in \N$ が存在し，任意の $n \geq N$ なる $n$ で $|a_{n} - \alpha| < \varepsilon$．

これを $\varepsilon - N$ 論法 という．

---

$\{ a_{n} \}$ が収束するとき

$$
\textcolor{blue}{
    \lim_{n \rightarrow \infty} a_{n} = \alpha
    \qquad a_{n} \xrightarrow{n \rightarrow \infty} \alpha
    \qquad a_{n} \rightarrow \alpha ~ (n \rightarrow \infty)
}
$$

のように表す．

~~~

~~~definition:数列の発散

実数列 $\{a_{n}\}$ が **発散する**

$\quad \overset{def}\iff$ $\{a_{n}\}$ が収束しない

実数列 $\{a_{n}\}$ が **正の無限大に発散する**

$\quad \overset{def}\iff {}^{\forall}L > 0,\ {}^{\exists}N = N(L) \in \N \quad \lbrack \ {}^{\forall}n \geq N \implies a_{n} > L \ \rbrack$

$\quad \iff$ 任意の $L > 0$ に対して $L$ に応じて決まる $N \in \N$ が存在し，任意の $n \geq N$ なる $n$ で $a_{n} > L$．

実数列 $\{a_{n}\}$ が **負の無限大に発散する**

$\quad \overset{def}\iff {}^{\forall}L < 0,\ {}^{\exists}N = N(L) \in \N \quad \lbrack \ {}^{\forall}n \geq N \implies a_{n} < L \ \rbrack$

$\quad \iff$ 任意の $L < 0$ に対して $L$ に応じて決まる $N \in \N$ が存在し，任意の $n \geq N$ なる $n$ で $a_{n} < L$．

実数列 $\{a_{n}\}$ が **振動する**

$\quad \overset{def}\iff$ $\{a_{n}\}$ が発散するが無限大には発散しない

---

正の無限大に発散するとき

$$
\textcolor{blue}{
    \lim_{n \rightarrow \infty} a_{n} = \infty
    \qquad a_{n} \xrightarrow{n \rightarrow \infty} \infty
    \qquad a_{n} \rightarrow \infty ~ (n \rightarrow \infty)
}
$$

負の無限大に発散するとき

$$
\textcolor{blue}{
    \lim_{n \rightarrow \infty} a_{n} = - \infty
    \qquad a_{n} \xrightarrow{n \rightarrow \infty} - \infty
    \qquad a_{n} \rightarrow - \infty ~ (n \rightarrow \infty)
}
$$

のように表す．

~~~

どちらも「条件を $1$ つ設けたとき，ある $N$ とその先すべてがその条件を満たす」が軸です．

極限を取る変数が明らかなときは $n \rightarrow \infty$ を省略して $\lim a_{n} = \alpha,\ a_{n} \rightarrow \infty$ などと書くこともあります．

## 例：$a_{n} = 0.1^{n}$

$a_{n}$ は $0.1,\ 0.01,\ 0.001,\ ...$ と続き，その極限値は $0$ です．  
$\varepsilon - N$ 論法の気持ちとしては，

$\varepsilon = 0.5$ を提示すると，$N = 1$ のとき  
$\quad |a_{1} - 0| = 0.1 < \varepsilon,\ |a_{2} - 0| = 0.01 < \varepsilon,\ ...$  
$\varepsilon = 0.05$ を提示すると，$N = 2$ のとき  
$\quad |a_{2} - 0| = 0.01 < \varepsilon,\ |a_{3} - 0| = 0.001 < \varepsilon,\ ...$  
$\varepsilon = 0.005$ を提示すると，$N = 3$ のとき  
$\quad |a_{3} - 0| = 0.001 < \varepsilon,\ |a_{4} - 0| = 0.0001 < \varepsilon,\ ...$  

というように，どんなに小さい $\varepsilon$ を提示しても  

$\quad |a_{N} - 0| < \varepsilon$ かつ $|a_{N + 1} - 0| < \varepsilon$ かつ ...  

な $N$ が存在するので，$a_{n} \rightarrow 0$ だということになります．

よく「十分小さな $\varepsilon$」などと言われ，そこがよくわからなくなる原因だろうと思います．  
しかし，$\varepsilon - N$ 論法がいいたいのは，どんなに小さな $\varepsilon$ **でもいいよ** ということであって，  
$\varepsilon = 100000000$ のような値であっても $N$ が存在する必要があります（たとえばこの場合は $N = 1$ で十分）．

ただ収束性を考えるのに $\varepsilon$ が大きいときのことは別にどうでもよい，というか小は大を兼ねてくれるので，  
みんな「十分小さな $\varepsilon$」と言いたがるわけです．

~~~spoiler:close:厳密な証明

$\varepsilon - N$ 論法による証明は，自分で $\textcolor{blue}{N(\varepsilon)}$，すなわち $\textcolor{blue}{\varepsilon}$ に応じた $\textcolor{blue}{N}$ を定められればよいです．  
$\varepsilon - N$ 論法は，極限値を求める方法などではありません．予め求めた極限値が正当かを確認するものです．

---

$$
\lim_{n \rightarrow 0} 0.1^{n} = 0
$$

と予想して，これを示しましょう．すなわち，

$$
|0.1^{N} - 0| < \varepsilon ~ (\iff 0.1^{N} < \varepsilon)
$$

がどのような $\varepsilon$ に対しても成り立つ $N$ を探します．  
どう探してもよいですが，今回は $\log_{10}$ を取ってみます．すると，

$$
\begin{alignat*}{1}
                    0.1^{N} &< \varepsilon \\
           N \log_{10}{0.1} &< \log_{10} \varepsilon \\
    - \log_{10} \varepsilon &< N
\end{alignat*}
$$

より，$- \log_{10} \varepsilon < N$ であれば $n \geq N \implies 0.1^{n} < \varepsilon$ だとわかります．

たとえば，ここで $N = \lfloor -\log_{10} \varepsilon \rfloor + 2$ と定めると，

$$
0.1^{\lfloor - \log_{10} \varepsilon \rfloor + 2} < \varepsilon
$$

となり，この式はさっきの計算をみれば真です．

$N$ を見つけられたので，

$$
\lim_{n \rightarrow 0} 0.1^{n} = 0
$$

が示されました．$\square$

---

ふつうは証明に $N$ を求める過程は書かず，概ね以下のようになるでしょう：

${}^{\forall} \varepsilon > 0$ に対し，$N \in \N$ を

$$
N = \lfloor -\log_{10} \varepsilon \rfloor + 2
$$

と定めると，任意の $n \geq N$ に対し

$$
0.1^{n}
    \leq 0.1^{N} 
    = 0.1^{\lfloor -\log_{10} \varepsilon \rfloor + 2} 
    < 0.1^{-\log_{10} \varepsilon}
    = \varepsilon
$$

$$
\therefore ~  |0.1^{n} - 0| < \varepsilon
$$

したがって

$$
\lim_{n \rightarrow \infty} 0.1^{n} = 0 \quad \square
$$

~~~

## 例：$b_{n} = 0.1^{n} + 1$

$b_{n}$ は $1.1,\ 1.01,\ 1.001,\ ...$ と続きその極限値は $1$ ですが，$a_{n}$ と同様に $0$ に収束すると思ってみます．つまり，

$\quad |b_{N} - 0| < \varepsilon$ かつ $|b_{N + 1} - 0| < \varepsilon$ かつ ...  

となる $N$ が $\varepsilon$ に対しても存在するか考えてみましょう．

$\varepsilon = 1.5$ を提示すると，$N = 1$ のとき  
$\quad |b_{1} - 0| = 1.1 < \varepsilon,\ |b_{2} - 0| = 1.01 < \varepsilon,\ ...$  
$\varepsilon = 0.5$ を提示すると，$N = 1$ のとき  
$\quad |b_{1} - 0| = 1.1 > \varepsilon,\ |b_{2} - 0| = 1.01 > \varepsilon$  
$\quad |b_{3} - 0| = 1.001 > \varepsilon,\ |b_{4} - 0| = 1.0001 > \varepsilon$  
$\quad |b_{100} - 0| = 1.00...01 > \varepsilon,\ ...$  

$\varepsilon = 1.5$ のときはよさそうな $N$ がみつかりましたが，  
$\varepsilon = 0.5$ を選ぶとよさそうな $N$ が見つからなくなってしまいました．

$N$ がみつからない $\varepsilon$ が $1$ つでもあればアウトなので，$b_{n} \rightarrow 0$ にはならないことがこれで示せました．
