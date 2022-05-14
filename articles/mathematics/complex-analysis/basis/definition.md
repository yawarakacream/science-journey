---
title: "複素数の定義と演算"
description: "2次元ベクトル空間を基に複素数体を構成し，実数の拡張であること，演算の性質を確認し，絶対値や偏角といった諸項目を定義します．"
draft: true
---

~~~definition:複素数

**複素数体**  
$\R^{2}$ に対して次の演算による体

$\alpha = (a,\ b),\ \beta = (c,\ d) \in \R^{2}$ に対して

$\quad$ **加法** $\alpha + \beta = (a +_{\R} c,\ b +_{\R} d)$

$\quad$ **乗法** $\alpha \times \beta = (a \times_{\R} c - b \times_{\R} d,\ a \times_{\R} d + b \times_{\R} c)$

**複素数**  
複素数体の元

**虚数単位**  
$i := (0,\ 1) \in \C$

~~~

高校で複素数とは虚数単位 $i = \sqrt{-1}$ を用いる謎の数として登場しました．

ここでは複素数を $\R^{2}$ に特別な演算を定義したものと捉えます．  
つまり，複素数平面を複素数の定義に使っている形です．

虚数単位は $(0,\ 1)$ の特別な言い方と解釈できます．  
この定義によれば $i^{2} = (0,\ 1) \times (0,\ 1) = (-1,\ 0) = -1$ なので，確かに $\textcolor{blue}{i = \sqrt{-1}}$ に矛盾しません．

定義から，**複素数の演算は実数の演算と同一視** できます．

~~~definition:複素数の表記

$\alpha = (a,\ b) \in \C$ はふつう，虚数単位 $i$ を用いて

$$
\textcolor{blue}{\alpha = a + bi}
$$

と表す．

~~~

~~~theorem:実数と複素数の関係

**複素数は実数の拡張**．

$b = 0$ のとき，表記法や加法・乗法の構造が一致し，$\alpha$ を単なる実数と見做せる．

特に，$0 = (0,\ 0),\ 1 = (1,\ 0)$ は複素数体の加法・乗法の単位元で，これは実数体と同様．

~~~

$a + bi$ としてよいのは，$(a,\ b) = (a,\ 0) + (b,\ 0) \times (0,\ 1)$ と一意に表せることによります．

~~~definition:絶対値・複素共役・実部・虚部

$\alpha = a + bi \in \C$ に対して

$\quad$ $\alpha$ の **絶対値** $|\alpha| := \sqrt{a^{2} + b^{2}}$

$\quad$ $\alpha$ の **共役複素数** $\overline{\alpha} := a - bi$

$\quad$ $\alpha$ の **実部** $\Re \alpha := a$

$\quad$ $\alpha$ の **虚部** $\Im \alpha := b$

$\quad$ $\alpha$ が **虚数** $\defiff$ $\Im \alpha \neq 0$

$\quad$ $\alpha$ が **純虚数** $\defiff$ $\alpha$ は虚数 かつ $\Re \alpha = 0$

~~~

絶対値・実部・虚部は実数です．

~~~theorem:複素数の演算の性質

$i^{-1} = - i$

$\displaystyle \alpha^{-1} = \frac{\overline{\alpha}}{|\alpha|} \quad (\alpha \neq 0)$

$\overline{\alpha \pm \beta} = \overline{\alpha} \pm \overline{\beta}$

$\overline{\alpha \beta} = \overline{\alpha} \overline{\beta}$

$\displaystyle \Re \alpha = \frac{\alpha + \overline{\alpha}}{2}$

$\displaystyle \Im \alpha = \frac{\alpha - \overline{\alpha}}{2i}$

$|\alpha|^{2} = \alpha \overline{\alpha}$

$|\alpha| = |- \alpha| = |\overline{\alpha}| \geq 0$

$|\alpha \beta| = |\alpha| |\beta|$

$|\alpha| = 0 \iff \alpha = 0$

$|\alpha + \beta| \leq |\alpha| + |\beta|$（三角不等式）

~~~

# 極形式

~~~definition:複素数平面・極形式

**複素数平面**  
$\R^{2}$ の直交座標平面

$\alpha \in \C,\ \alpha \neq 0$ に対して

$\quad$ $\alpha$ の **偏角**  
$\quad$ $\arg \alpha :=$ 複素数平面上で原点から $\alpha$ に向かう線分の角度  

$\quad$ $\alpha$ の **極形式**  
$\quad$ $r = |\alpha|,\ \theta = \arg \alpha$ として  
$$
\quad \alpha = r (\cos \theta + i \sin \theta)
$$
$\quad$ と表した形

~~~

偏角は多くのプログラミング言語でいう所謂 $\mathrm{atan2} (b,\ a)$ です．  
数学でも $\arctan$ などを用いてきちんと定義できますが，ここではやりません．

ふつう $0 \leq \arg \alpha < 2 \pi$ や $- \pi < \arg \alpha \leq \pi$ などに制限します．  
以下では気にしていませんが，適当に $\mathrm{mod}$ を取るなどすればよいです．

~~~theorem:極形式の演算の性質

$|\alpha| = ($ 複素数平面上で原点から $\alpha$ に向かう線分の長さ $)$

$\arg \alpha^{-1} = - \arg \alpha$

$\arg \alpha \beta = \arg \alpha + \arg \beta$

**de Moivre の定理**（ド・モアブルの定理）  
$\alpha^{n} = r^{n} (\cos n \theta + i \sin n \theta) \quad (n \in \Z)$

~~~
