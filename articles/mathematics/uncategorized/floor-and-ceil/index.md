---
title: "床関数・天井関数"
description: "床関数・天井関数について整理します．"
notes:
draft: true
---

~~~definition:床関数
**床関数**  
小数を切り捨てる関数

$$
\lfloor x \rfloor := \max \{ n \in \Z \mid n \leq x \}
$$

$\mathrm{floor} (x),\ [x]$ などとも表す．
~~~

~~~definition:天井関数
**天井関数**  
小数を切り上げる関数

$$
\lceil x \rceil := \min \{ n \in \Z \mid n \geq x \}
$$

$\mathrm{ceiling} (x)$ などとも表す．
~~~

床関数・天井関数は，それぞれ小数を切り捨て・切り上げて整数にする関数です．

厳密には $x$ 以下の最大の整数・$x$ 以上の最小の整数 として定義されます．

$[ x ]$ はガウス記号とも呼ばれます．

~~~theorem:床関数の性質

$(1)$ $\lfloor x \rfloor \leq x < \lfloor x \rfloor + 1$

$(2)$ $x - 1 < \lfloor x \rfloor \leq x$

$(3)$ $\displaystyle \lfloor nx \rfloor = \sum_{k = 0}^{n - 1} \left\lfloor x + \frac{k}{n} \right\rfloor$（Hermite の恒等式）

$(4)$ 右連続

~~~

~~~theorem:天井関数の性質

$(1)$ $\lceil x \rceil - 1 < x \leq \lceil x \rceil$

$(2)$ $x \leq \lceil x \rceil < x + 1$

$(3)$ $\displaystyle \lceil nx \rceil = \sum_{k = 0}^{n - 1} \left\lceil x - \frac{k}{n} \right\rceil$

$(4)$ 左連続

~~~
