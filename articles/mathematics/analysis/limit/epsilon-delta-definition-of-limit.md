---
title: "関数の極限：ε-δ 論法"
description: "ε-δ論法を用いて，関数の収束と発散を厳密に定義します．"
---

関数の極限を定義します．

ここでは実数値一変数関数を取り扱います．

~~~definition:関数の収束

実関数 $f(x)$ が $x \rightarrow a$ で $\alpha \in \R$ に **収束する**

$\quad \overset{def}\iff {}^{\forall}\varepsilon > 0,\ {}^{\exists}\delta = \delta(\varepsilon) > 0 \quad \left\lbrack \ |x - a| \leq \delta \implies |f(x) - \alpha| < \varepsilon \ \right\rbrack$

$\quad \iff$ 任意の $\varepsilon > 0$ に対して $\varepsilon$ に応じて決まる $\delta > 0$ が存在し，任意の $|x - a| < \delta$ なる $x$ で $|f(x) - \alpha| < \varepsilon$．

これを $\varepsilon - \delta$ 論法 という．

---

収束するとき

$$
\textcolor{blue}{
  \lim_{x \rightarrow a} f(x) = \alpha
  \qquad f(x) \rightarrow \alpha ~ (x \rightarrow a)
}
$$

のように表す．

~~~

~~~definition:関数の発散

実関数 $f(x)$ が $x \rightarrow a$ で **発散する**

$\quad \overset{def}\iff$ $f(x)$ が $x \rightarrow a$ で収束しない

実関数 $f(x)$ が $x \rightarrow a$ で **正の無限大に発散する**

$\quad \overset{def}\iff {}^{\forall}L > 0,\ {}^{\exists}\delta = \delta(L) > 0 \quad \left\lbrack \ |x - a| < \delta \implies f(x) > L \ \right\rbrack$

$\quad \iff$ 任意の $L > 0$ に対して $L$ に応じて決まる $\delta > 0$ が存在し，任意の $|x - a| < \delta$ なる $x$ で $f(x) > L$．

実関数 $f(x)$ が $x \rightarrow a$ で **負の無限大に発散する**

$\quad \overset{def}\iff {}^{\forall}L < 0,\ {}^{\exists}\delta = \delta(L) > 0 \quad \left\lbrack \ |x - a| < \delta \implies f(x) < L \ \right\rbrack$

$\quad \iff$ 任意の $L < 0$ に対して $L$ に応じて決まる $\delta > 0$ が存在し，任意の $|x - a| < \delta$ なる $x$ で $f(x) < L$．

実関数 $f(x)$ が $x \rightarrow a$ で **振動する**

$\quad \overset{def}\iff$ $f(x)$ が発散するが無限大には発散しない

---

正の無限大に発散するとき

$$
\textcolor{blue}{
  \lim_{x \rightarrow a} f(x) = \infty
  \qquad f(x) \rightarrow \infty ~ (x \rightarrow a)
}
$$

負の無限大に発散するとき

$$
\textcolor{blue}{
  \lim_{x \rightarrow a} f(x) = - \infty
  \qquad f(x) \rightarrow - \infty ~ (x \rightarrow a)
}
$$

のように表す．

~~~

[ε-N 論法](/mathematics/analysis/limit/epsilon-n-definition-of-limit) がわかれば理解できるでしょう．  
とる極限が $x \rightarrow \infty$ 以外でよくなった以外は同様の主張です．

$|x - a| < \delta$ は $x$ の範囲を左右から絞ることを意味していますね．

少し条件を弱めて，右・左，つまり正・負の方向だけから絞る極限も考えられます．

~~~definition:片側極限

実関数 $f(x)$ の $x \rightarrow a + 0$ の **右側極限** が $\alpha \in \R$ に収束する  
$\quad \overset{def}\iff {}^{\forall}\varepsilon > 0,\ {}^{\exists}\delta = \delta(\varepsilon) > 0 \quad \left\lbrack \ 0 < x - a < \delta \implies |f(x) - \alpha| < \varepsilon \ \right\rbrack$

実関数 $f(x)$ の $x \rightarrow a - 0$ の **左側極限** が $\alpha \in \R$ に収束する  
$\quad \overset{def}\iff {}^{\forall}\varepsilon > 0,\ {}^{\exists}\delta = \delta(\varepsilon) > 0 \quad \left\lbrack \ -\delta < x - a < 0 \implies |f(x) - \alpha| < \varepsilon \ \right\rbrack$

---

右側極限は

$$
\textcolor{blue}{
  \lim_{x \rightarrow a + 0} f(x) = \alpha
  \qquad \lim_{x \rightarrow a \downarrow 0} f(x) = \alpha
  \qquad f(x) \rightarrow \alpha ~ (x \downarrow a)
}
$$

左側極限は

$$
\textcolor{blue}{
  \lim_{x \rightarrow a - 0} f(x) = \alpha
  \qquad \lim_{x \rightarrow a \uparrow 0} f(x) = \alpha
  \qquad f(x) \rightarrow \alpha ~ (x \uparrow a)
}
$$

のように表す．

発散のときも同様．

~~~

高校のときと同様なので簡単に済ませました．

これまでと変わらず，右側極限は $x \rightarrow a \textcolor{blue}{+ 0}$，左側極限は $x \rightarrow a \textcolor{blue}{- 0}$ のように符号を付した $0$ を使って表します．

定義をみると $f(a)$ を使っていないので，**$f(x)$ は $x = a$ で定義されていなくてもよい** ことがわかります．  
ただし $|x - a| \leq \delta$ という比較のため，**$a$ 近傍で定義されている** 必要はあります．

[ε-N 論法](/mathematics/analysis/limit/epsilon-n-definition-of-limit) のときと同じく $\varepsilon$ の小は大を兼ねます．  
したがって $f(x)$ は連続である必要はありません．  
（$\varepsilon = 0.01$ で成り立つなら $\varepsilon = 0.1$ などのこともカバーできている）
