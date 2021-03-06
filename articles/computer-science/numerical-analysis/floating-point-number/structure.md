---
title: "浮動小数点数の構造"
description: "浮動小数点数の構造をコンピュータ上のメモリの状態とともにみてみます．あまり触れることのない一般の浮動小数点数についても確認しておきましょう．"
---

浮動小数点数の構造を，コンピュータ上のメモリの状態とともにみてみます．

# 一般の浮動小数点数

まずは一般の $t$ 進浮動小数点数の定義です．  
符号はどうでもいいので置いておきます．

~~~definition:一般の浮動小数点数

指数部 $m$ 桁 $\{e_{i}\}_{i = 0}^{m - 1}$，仮数部 $n$ 桁 $\{d_{i}\}_{i = 0}^{n - 1}$，桁のバイアス $b \in \N$ の $t$ 進浮動小数点数 $x$

$$
\begin{alignat*}{1}
x &= \sum_{i = 0}^{n - 1} \frac{d_{i}}{t^{i}} \times t^{p} \\
  &= \left( \frac{d_{0}}{t^{0}} + \frac{d_{2}}{t^{2}} + \cdots + \frac{d_{n - 1}}{t^{n - 1}} \right) \times t^{p}
\end{alignat*}
$$

ただし，$(a)_{t}$ は $a$ の $t$ 進表現とし，

$$
p = (e_{0} e_{1} ... e_{m - 1})_{t} - b
$$

$$
e_{i},\ d_{i} \in \{ 0,\ 1,\ ...,\ t - 1 \}
$$

~~~

まさにアボガドロ定数 $N_{A} = 6.0221... × 10^{23}$ のような書き方をしていることがわかります．  
$N_{A}$ の $6.0221...$ にあたる部分を **仮数部**，$23$ にあたる部分を **指数部** といいます．

$p$ と $b$ がわかりづらいですが，$b$ がないと $p$ が必ず正の数になってしまいます．  
$p$ を負の数にする，つまり万有引力定数 $G = 6.67408... × 10^{-11}$ のような小さい数のためにいくらか下駄を履かせておくのです．

$p$ 自身に符号の概念を導入してもいいはずですが，なぜかそうはしません．  
（たぶん余計複雑になる & 数学的な表記が困難になるから？）

書いておいてなんですが，一般の浮動小数点数を考えることはまあないです．  
資料がなくて苦労しました．

# $2$ 進浮動小数点数（IEEE754）

次に実際にコンピュータ上で実装されている浮動小数点数です．

メモリ上にある $0,\ 1$ のどちらかが格納される箱を **ビット（bit）** と呼びます．

それぞれ，  
符号 $1$ bit，指数部 $8$ bit，仮数部 $23$ bit の浮動小数点数を **単精度浮動小数点数**  
符号 $1$ bit，指数部 $11$ bit，仮数部 $52$ bit の浮動小数点数を **倍精度浮動小数点数**  
といいます．

単精度は計 $32$ bit，倍精度は計 $64$ bit で，まさに倍です．

メモリが潤沢な現代では倍精度を使うことが一般的です．

以下は倍精度の定義です．単精度も bit 数を変えるだけで同様です．

~~~definition:倍精度浮動小数点数

符号 $s: 1$ bit，指数部 $\{e_{i}\}_{i = 1}^{11}: 11$ bit，仮数部 $\{d_{i}\}_{i = 1}^{52}: 52$ bit の倍精度浮動小数点数 $x$

$$
x = (-1)^{s} \left( 1 + \frac{d_{1}}{2^{1}} + \frac{d_{2}}{2^{2}} + \cdots + \frac{d_{52}}{2^{52}} \right) \times 2^{p}
$$

ただし，

$$
\begin{alignat*}{1}
p &= (e_{1} e_{2} ... e_{11})_{2} - (2^{11 - 1} - 1) \\
  &= (e_{1} e_{2} ... e_{11})_{2} - 1023
\end{alignat*}
$$

$$
(\therefore -1022 \leq p \leq 1023)
$$

メモリの状態

| $s$ | $e_{1} ~ e_{2} ~ \cdots ~ e_{11}$ | $d_{1} ~ d_{2} ~ \cdots ~ d_{52}$ |
|:-:|:-:|:-:|

~~~

一般の場合との相違点として，

- 符号
- 仮数部の $d_{0} / 2^{0}$ が $1$ に固定
- バイアス $b = 1023$
- $\{e_{i}\}$ の添字の範囲

が挙げられます．

### 符号

プラスかマイナスかの $2$ 通りを判定するのに $1$ bit 必要で，$x$ の式に入れるとこうなります．  
特別言うことはありません．

### 仮数部

仮数部の最初が $1$ なのは重要です．  
浮動小数点数の定義からすると $d_{0} / 2^{0}$ があるはずですが，これが $1$ に確定しています．

IEEE754 では $d_{0} = 1$ とすると定められており，$1 / 2^{0} = 1$ より $1$ です．

よくみるとメモリ上に $d_{0}$ はそもそも存在しません．必ず $1$ なのでメモリ上に置く必要がないのです．  
つまり，メモリ上にある $d_{1},\ d_{2},\ ...,\ d_{52}$ とは別に，存在しないけど仮想的に $d_{0} = 1$ があると思って数を表現します．

この隠れた $d_{0}$ を **隠れビット** といいます．

こうすることで $10$ 進数でいう $1.2 \times 10^{3}$ と $0.12 \times 10^{4}$ のような表記揺れを抑え，数の表現を一意に定めることができます．  
これを **正規化** といいます．

また，隠れビットを含むと実質的に $53$ bit 分の情報を保持していることになります．  
これを **ケチ表現** といいます．

ところで，よく考えると $d_{0} = 1$ だと $x = 0$ が表現できません．  
他にも浮動小数点数における特殊な数があり，[特殊な値 - 浮動小数点数](/computer-science/numerical-analysis/floating-point-number/special-values) で扱います．

### バイアス

バイアス $b$ は，指数部のビット数を $|e_{i}|$ とおくと，
$$
b = (2^{|e_{i}| - 1} - 1)
$$
とすると定め，$p$ の下半分を負の数すると決められています．

倍精度では $|e_{i}| = 11$ より $b = (2^{11 - 1} - 1) = 2013$ です．  
単精度なら $|e_{i}| = 8$ より $b = (2^{8 - 1} - 1) = 127$ です．

### $\{e_{i}\}$ の添字

添字の違いは，うまい書き方が思いつかなかっただけです．．．

メモリ上に $\{d_{i}\}$ を $i = 1$ から配置する都合で $\{e_{i}\}$ も $i = 1$ からにしました．

一般の浮動小数点数について書きたかったのですがうまい兼ね合いが．．．  
賢い書き方募集中です．

# 余談

符号 $1$ bit，指数部 $15$ bit，仮数部 $112$ bit の **四倍精度浮動小数点数** のようなものも考えられていたりします．

正規化をしない（$d_{0}$ を隠さない）規格もあります．
