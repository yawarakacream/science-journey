---
title: "丸めとマシンイプシロン"
description: "浮動小数点数の丸め方4種類ととマシン（計算機）イプシロンについて纏めました。浮動小数点数を考える上で必須の概念です。"
---

浮動小数点数にはその特性上，表現できない数があり，避けられない誤差が生まれてしまいます．

ここでは誤差の扱い方と最小単位を確認します．

# 丸め誤差

表現できない数が与えられたとき，適当な表現できる数に書き換える，ということをします．

主に以下の $4$ 種が使われます．

- 正の無限大方向への丸め（切り上げ）
- 負の無限大方向への丸め（切り捨て）
- $0$ 方向への丸め
- 最近点への丸め

そのままの意味です．

最近点の丸めだけ注意として，最近点が $2$ つあるときは，仮数部の最終ビットが偶数である方に丸めます．

~~~spoiler:open:例：最近点の偶数への丸め

たとえば倍精度浮動小数点数で $1 + 2^{-53}$ は，

$$
1 + 2^{-53} = \left( 1 + \frac{0}{2^{1}} + \frac{0}{2^{2}} + \cdots + \frac{0}{2^{52}} \textcolor{red}{+ \frac{1}{2^{53}}} \right) \times 2^{0}
$$

となり赤い部分がはみ出てしまうので，表すことができません．  
（[浮動小数点数の構造](/computer-science/numerical-analysis/floating-point-number/structure) を参照）

このとき，以下の $2$ 種類の丸め方が考えられます．

$$
1 + 2^{-53} \approx \left( 1 + \frac{0}{2^{1}} + \frac{0}{2^{2}} + \cdots + \frac{1}{2^{52}} \right) \times 2^{0}
$$
$$
1 + 2^{-53} \approx \left( 1 + \frac{0}{2^{1}} + \frac{0}{2^{2}} + \cdots + \frac{0}{2^{52}} \right) \times 2^{0}
$$

$2$ 種類の丸めが考えられるときは **仮数部の最終ビットが偶数である方** に丸めるという定義でした．  
最終ビットが偶数ということは，最終ビットが $0$ だという意味なので（ビットは $0$ か $1$ かのどちらか），

$$
1 + 2^{-53} \approx \left( 1 + \frac{0}{2^{1}} + \frac{0}{2^{2}} + \cdots + \frac{0}{2^{52}} \right) \times 2^{0}
$$

を採用します．

~~~

# マシンイプシロン

~~~definition:マシンイプシロン
マシンイプシロン（machine epsilon） $\varepsilon_{M}$  
$\overset{def}\iff$ $1 + \varepsilon_{M} > 1$ をみたす最小の正の数
~~~

数学的には任意の正の実数で成り立ちますが，浮動小数点数ではそうともいきません．

その最小単位を **マシンイプシロン** といい，$\textcolor{blue}{\varepsilon_{M}}$ で表します．

すなわち，たとえば

$$
1 + \frac{\varepsilon_{M}}{2} = 1
$$

が成り立ってしまいます．

丸め誤差の例をみれば想像はつくと思いますが，  
浮動小数点数のマシンイプシロンは，仮数部のビット数を $d$ とすると，

$$
\varepsilon_{M} = 2^{-d}
$$

であり，

単精度 $\varepsilon_{M} = 2^{-23} \approx 1.19 \times 10^{-7}$  
倍精度 $\varepsilon_{M} = 2^{-52} \approx 2.22 \times 10^{-16}$

のように計算されます．

なお，マシンイプシロンは **浮動小数点数の最小とは別物** です．

実際，倍精度で $\varepsilon_{M} = 2^{-52}$ より小さい $2^{-53}$ は

$$
2^{-53} = \left( 1 + \frac{0}{2^{1}} + \frac{0}{2^{2}} + \cdots + \frac{0}{2^{52}} \right) \times 2^{\textcolor{blue}{-53}}
$$

と表すことができます．

また，あくまで $\textcolor{blue}{1} + \varepsilon_{M} > \textcolor{blue}{1}$ であることに注意します．つまり，

$$
\textcolor{red}{0} + \varepsilon_{M} > \textcolor{red}{0}
$$

をみたす最小の正の数はマシンイプシロンとはいいません．  
浮動小数点数の世界では $\textcolor{blue}{1} + \varepsilon_{M} > \textcolor{blue}{1}$ と $\textcolor{red}{0} + \varepsilon_{M} > \textcolor{red}{0}$ は同値ではなく，$\textcolor{blue}{1}$ がポイントであることに注意します．

なお，$\textcolor{red}{0}$ のときの数は浮動小数点数の正の最小値 +min です．  
+min については [特殊な値](/computer-science/numerical-analysis/floating-point-number/special-values) で扱っています．

## 一般の場合

~~~spoiler:close

一般に $t$ 進浮動小数点数のマシンイプシロンは，その仮数部の大きさを $d$ とすると，

$$
\varepsilon_{M} = 2^{1 - d}
$$

と表されます．

単精度・倍精度浮動小数点数においては隠れビットの存在を加味するので $1$ が消えます．

~~~
