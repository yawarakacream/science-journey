---
title: "反復法と収束"
description: "反復法の考え方を確認し，反復式の収束について縮小写像の原理（不動点定理）の観点から考えます．"
draft: true
---

~~~definition:反復法

方程式 $f(x) = 0$ の解 $x = \alpha$ を求めるにあたり，  
適当な初期値 $x_{0}$ を与え

$$
x_{i + 1} = g(x_{i})
$$

により定まる列 $\{x_{i}\}$ を順に計算し $\alpha$ に近づけていく手法のことを **反復法** という．

この列を **反復列**，漸化式を **反復式** という．

（すなわち $\displaystyle \lim_{i \rightarrow \infty} x_{i} = \alpha$）

~~~

定義として書くほどのことでもありませんが，本サイトの構造上，上記のように記述しておきます．

私たちの目標は $x_{i}$ が解に近づいてくれて尚且つなるべく収束の早い $g(x)$ を見つけることです．

反復式の代表的な例としては [Newton 法](/computer-science/numerical-analysis/root-finding/newton) が挙げられます．  
Newton 法は初歩的なアルゴリズムではありますが収束が早いことで知られ，現代でも平方根の計算などに有用とされています．

ここでは具体的な $g(x)$ については軽く紹介するに留め，この $g(x)$ が正しく機能する条件とその収束の速さについて考えてみます．

# 収束性

~~~definition:縮小写像

距離空間 $I$ 上で定義された $g : I \rightarrow I$ に対し，

$g$ が **縮小写像** $\overset{def}{\iff}$ ${}^{\exists} L \in [0, 1) \quad s.t. \quad |g(x) - g(y)| \leq L |x - y| ~ ({}^{\forall} x,\ y \in I)$

不等式 $|g(x) - g(y)| \leq L$ を **Lipschitz 条件**（リプシッツ条件），  
$L$ を **Lipschitz 定数**（リプシッツ定数）という．

~~~

$L$ の範囲からなんだか縮小していってくれそうな感じがわかればいいと思います．

~~~theorem:縮小写像の原理（不動点定理）

完備な区間 $I$ 上で定義された縮小写像 $g : I \rightarrow I$ に対し，

$$
\textcolor{blue}{g(\alpha) = \alpha}
$$

をみたす **$a \in I$ が唯一つ存在** する．

これを **不動点** といい，初期値 ${}^{\forall} x_{0} \in I$ を与え $x_{i + 1} = g(x_{i})$ としたとき

$$
\lim_{i \rightarrow \infty} x_{i} = \alpha
$$

である．

## 系

方程式 $f(x) = 0$ の解 $\alpha$ を反復式 $x_{i + 1} = g(x_{i})$ によって求めるとき，  
$\alpha$ の近傍で $g(x)$ が縮小写像ならば，その反復式は $\alpha$ に収束する．

~~~

縮小写像はその名の通り範囲を狭めていってくれるような写像でした．  
範囲を狭めるということはどこかに行き着く先があることを暗示しています．

縮小写像の原理は **その先が一意** であり，かつ **存在を保証** してくれる定理です．

~~~spoiler:close:例

$f(x) = x^{2} - 2 = 0$ の解のひとつ $x = \sqrt{2}$ について考えます．

ここで，[Newton 法](/computer-science/numerical-analysis/root-finding/newton) より

$$
g(x) = \frac{x}{2} + \frac{1}{x}
$$

とした反復法は $\pm \sqrt{2}$ のどちらかに収束するはずです．

今回は $\sqrt{2}$ について議論したいので，初期値を $\sqrt{2}$ に近い方にとります．  
すなわち初期値と反復式を，

$$
x_{0} = 1,\ x_{i + 1} = \frac{x_{i}}{2} + \frac{1}{x_{i}}
$$

と定めます．

実際にコンピュータ上で動作させると問題ないことがわかります．  
ここではその収束性を理論的に示します．

そのためには私たちは

$(1)$ $g(x)$ が縮小写像  
$(2)$ 方程式 $x = g(x)$ の解が $\sqrt{2}$

の $2$ 点を調べればよいでしょう．

### $(1)$

まず初期値を含むような $\sqrt{2}$ の近傍として，たとえば区間 $I = [1, 2]$ をとっておきます． 
すると，任意の $x,\ y \in I ~ (x \neq y)$ に対して

$$
{}^{\exists}L ~ s.t. ~ |g(x) - g(y)| \leq L |x - y|
$$

をみたすならば $g$ は縮小写像といえます．

$x = y$ のときは明らかです．  
$x \neq y$ のとき，

$$
\begin{alignat*}{1}
    |g(x) - g(y)| &= \left| \left( \frac{x}{2} + \frac{1}{x} \right) - \left(\frac{y}{2} + \frac{1}{y} \right) \right| \\
                  &= \left| \frac{x^{2} y - x y^{2} + 2y - 2x}{2xy} \right| \\
                  &= \left| \frac{(xy - 2)(x - y)}{2xy} \right| \\
                  &= |x - y| \left| \frac{xy - 2}{2xy} \right| \\
\end{alignat*}
$$

より

$$
\begin{alignat*}{1}
    {}^{\exists}L \in [0, 1) ~ s.t. ~ |g(x) - g(y)| \leq L |x - y|
        &\iff {}^{\exists}L \in [0, 1) ~ s.t. ~ \left| \frac{xy - 2}{2xy} \right| \leq L \\
        &\iff -1 < \frac{1}{xy} - \frac{1}{2} < 1 \\
        &\iff - \frac{1}{2} < \frac{1}{xy} < \frac{3}{2}
\end{alignat*}
$$

を示せばよく，適当な計算により

$$
\min \left(\frac{1}{xy}\right) = \frac{1}{4},\ \max \left(\frac{1}{xy}\right) = 1
$$

より成立します．

よって $g$ は縮小写像で，縮小写像の原理の系より反復式が収束することがわかりました．

### $(2)$

求める解はその不動点であるので，

$$
\begin{alignat*}{1}
                                               x &= g(x) \\
    x - \left( \frac{x}{2} + \frac{1}{x} \right) &= 0 \\
                       \frac{x}{2} - \frac{1}{x} &= 0 \\
                             \frac{x^{2}}{2} - 1 &= 0 \\
                                           x^{2} &= 2 \\
                                               x &= \sqrt{2} \quad (\because ~ x \in I)
\end{alignat*}
$$

確かに不動点は $1$ つしかなく，その値は $\sqrt{2}$ です．

~~~

# 収束次数

~~~definition:収束次数

反復列 $\{x_{i}\}$ の **収束次数** $p$

$\quad \displaystyle\overset{def}\iff \lim_{i \rightarrow \infty} \frac{|x_{i + 1} - \alpha|}{|x_{i} - \alpha|^{p}} = C$ をみたす $p$

このとき，$\{x_{i}\}$ は **$p$ 次収束する** という．

$C$ は $0$ でない定数．  
ただし，解の近傍で変化が少ないならば $k$ に依存してもよい．

~~~

収束次数は反復列の **収束の速さ** を示す値です．

$x_{i} - \alpha$ は真の解 $\alpha$ との誤差ですから，たとえば $p = 1$ のとき

$$
|x_{i + 1} - \alpha| = C |x_{i} - \alpha|
$$

となり，$C$ 倍ずつ誤差が小さくなっていくと考えられます．

$C$ は厳密に定数である必要はありません．  
怪しいことを言っている気がするかもしれませんが，こうした係数はさほど問題ではなく，  
あくまで誤差の減り方が何乗に比例するかがわかればよいのです．
