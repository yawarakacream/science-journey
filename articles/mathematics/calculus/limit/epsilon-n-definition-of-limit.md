---
title: "数列の極限：ε-N 論法"
---

数列の極限を定義します．  
添字のおかげでどういう考え方をしているのかわかりやすいので，関数の極限を扱う準備としての側面が強いです．

ここでは，初項 $n = 1$ から始まる無限実数列（実数の項が無限に続く数列）を単に数列と呼び，この数列について考えることにします．

~~~definition:数列の収束
数列 $\{a_{n}\}$ が $\alpha \in \R$ に **収束** する．  
$\quad \overset{def}\iff {}^{\forall}\varepsilon > 0,\ {}^{\exists}N = N(\varepsilon) \in \N \quad \lbrack \ {}^{\forall}n \geq N \implies |a_{n} - \alpha| < \varepsilon \ \rbrack$  
$\quad \iff$ 任意の $\varepsilon > 0$ に対して $\varepsilon$ に応じて決まる $N \in \N$ が存在し，任意の $n \geq N$ なる $n$ で $|a_{n} - \alpha| < \varepsilon$．

このことを $\bm{\varepsilon - N}$ **論法** という．
~~~

~~~definition:数列の発散
数列 $\{a_{n}\}$ が正の無限大に **発散** する．  
$\quad \overset{def}\iff {}^{\forall}L > 0,\ {}^{\exists}N = N(L) \in \N \quad \lbrack \ {}^{\forall}n \geq N \implies a_{n} > L \ \rbrack$  
$\quad \iff$ 任意の $L > 0$ に対して $L$ に応じて決まる $N \in \N$ が存在し，任意の $n \geq N$ なる $n$ で $a_{n} > L$．

数列 $\{a_{n}\}$ が負の無限大に発散する．  
$\quad \overset{def}\iff {}^{\forall}L < 0,\ {}^{\exists}N = N(L) \in \N \quad \lbrack \ {}^{\forall}n \geq N \implies a_{n} < L \ \rbrack$  
$\quad \iff$ 任意の $L < 0$ に対して $L$ に応じて決まる $N \in \N$ が存在し，任意の $n \geq N$ なる $n$ で $a_{n} < L$．
~~~

どちらも「条件を $1$ つ設けたとき，ある $N$ とその先すべてがその条件を満たす」が軸です．

### 例：$a_{n} = 0.1^{n}$

$a_{n}$ は $0.1,\ 0.01,\ 0.001,\ ...$ と続き，その極限値は $0$ です．  
$\varepsilon - N$ 論法の気持ちとしては，

| $\varepsilon$ | $\mid a_{N} - 0 \mid$ | $\mid a_{N + 1} - 0 \mid$ | $N$ |
| :-- | :-- | :-- | :-- |
| $0.1$ | $0.1$ | $0.1 \cdot 0.1$ | $1$ |
| $0.001$ | $0.001$ | $0.001 \cdot 0.1$ | $2$ |
| $0.0001$ | $0.0001$ | $0.0001 \cdot 0.1$ | $3$ |

というように，どんなに小さい $\varepsilon$ を提示しても  

$\quad |a_{N} - 0| \leq \varepsilon$ かつ $|a_{N + 1} - 0| \leq \varepsilon$ かつ ...  

な $N$ が存在するので，$a_{n} \rightarrow 0$ だということになります．

よく「十分小さな $\varepsilon$」などと言われ，そこがよくわからなくなる原因だろうと思います．  
しかし，$\varepsilon - N$ 論法がいいたいのは，どんなに小さな $\varepsilon$ **でもいいよ** ということであって，  
$\varepsilon = 100000000$ のような値であっても $N$ が存在する必要があります（たとえばこの場合は $N = 1$ で十分）．

ただ収束性を考えるのに $\varepsilon$ が大きいときのことは別にどうでもよい，というか小は大を兼ねてくれるので，  
みんな「十分小さな $\varepsilon$」と言いたがるわけです．

### 例：$b_{n} = 0.1^{n} + 1$

$b_{n}$ は $1.1,\ 1.01,\ 1.001,\ ...$ と続きその極限値は $1$ ですが，$a_{n}$ と同様に $0$ に収束すると思ってみます．つまり，

$\quad |b_{N} - 0| \leq \varepsilon$ かつ $|b_{N + 1} - 0| \leq \varepsilon$ かつ ...  

がどんな $\varepsilon$ に対しても成り立つならよいです．

| $\varepsilon$ | $\mid b_{N} - 0 \mid$ | $\mid b_{N + 1} - 0 \mid$ | $N$ |
| :-- | :-- | :-- | :-- |
| $1.1$ | $1.1$ | $1.1 \cdot 0.1$ | $1$ |
| $1.001$ | $1.001$ | $1.001 \cdot 0.1$ | $2$ |
| $1.0001$ | $1.0001$ | $1.0001 \cdot 0.1$ | $3$ |
| $0.1$ | - | - | - |

$\varepsilon > 1$ のときはよさそうな $N$ がみつかりましたが，  
$\varepsilon = 0.1$ を選ぶと $|b_{n} - 0| > 1$ なのでよさそうな $N$ が見つからなくなってしまいました．

$N$ がみつからない $\varepsilon$ が $1$ つでもあればアウトなので，$b_{n} \rightarrow 0$ にはならないことがこれで示せました．