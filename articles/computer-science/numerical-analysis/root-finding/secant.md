---
title: "Secant法"
description: "Secant（セカント）法は，微分不可能な関数を含む方程式の数値解を求める手法です．"
draft: true
---

**Secant 法** は，非線形方程式に対する反復解法で，最も有名なアルゴリズムのひとつです．

Newton 法に似たアルゴリズムですが，Secant 法は方程式が **微分不可能な関数で構成されていてもよい** という特徴をもちます．

~~~definition:Newton法

微分可能な関数 $f(x)$ がある．  
**Secant 法**（セカント法）または **割線法** は，$f(x) = 0$ となる $x$ を求めるアルゴリズム．

---

$1.$ 初期値 $x_{0},\ x_{1}$ を与える．

$2.$ $k = 1,\ 2,\ ...$ に対し以下の操作を繰り返す．

- **誤差が許容できた** とき，3. へ遷移
- 誤差が許容できなかったとき，$\displaystyle x_{k + 1} = x_{k} - f(x_{k}) \frac{x_{k} - x_{k - 1}}{f(x_{k}) - f(x_{k - 1})}$ とおき $2.$ へ戻る（[反復式](/computer-science/numerical-analysis/root-finding/iteratives-and-banach)）．

$3.$ $x_{k}$ を解とし終了．

---

関数 $f(x)$，初期値 $x_{0}$ の取り方によって，$x_{k}$ が **収束しないことがある**．  
収束するならば $k \rightarrow \infty$ のとき厳密解となる．

~~~

殆ど [Newton 法](/computer-science/numerical-analysis/root-finding/newton) です．

異なるところは，微分して $(x_{k},\ f(x_{k}))$ における接線の代わりに $(x_{k},\ f(x_{k})),\ (x_{k - 1},\ f(x_{k - 1}))$ を通るような直線を使っているところです．

## 反復式の導出

反復式 $\displaystyle x_{k + 1} = x_{k} - f(x_{k}) \frac{x_{k} - x_{k - 1}}{f(x_{k}) - f(x_{k - 1})}$ を導出します．

$(x_{k},\ f(x_{k})),\ (x_{k - 1},\ f(x_{k - 1}))$ を通るような直線の方程式は，

$$
y = \frac{x_{k} - f(x_{k - 1})}{x_{k} - x_{k - 1}} ~ (x - x_{k}) + f(x_{k})
$$

仮定から $(x,\ y) = (x_{k + 1},\ 0)$ を代入して，

$$
0 = \frac{f(x_{k}) - f(x_{k - 1})}{x_{k + 1} - x_{k - 1}} ~ (x - x_{k}) + f(x_{k})
$$
$$
\therefore ~ x_{k + 1} = x_{k} - f(x_{k}) \frac{x_{k} - x_{k - 1}}{f(x_{k}) - f(x_{k - 1})}
$$
