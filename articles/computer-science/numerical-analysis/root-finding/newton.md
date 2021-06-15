---
title: "Newton法"
description: "求根アルゴリズムとして最も有名な Newton（ニュートン）法について纏めました．微分可能な関数による方程式の数値解を求めます．C++ のサンプルコードも掲載しています．"
draft: true
---

**Newton 法** は，非線形方程式に対する反復解法で，最も有名なアルゴリズムのひとつです．

微分可能な関数によって構成される方程式の数値解を求めます．

**簡易 Newton 法** と呼ばれる，計算が少し簡単な代わりに収束が遅いアルゴリズムも知られています．

~~~definition:Newton法

微分可能な関数 $f(x)$ がある．  
**Newton 法**（ニュートン法）は，$f(x) = 0$ となる $x$ を求めるアルゴリズム．

---

$1.$ 初期値 $x_{0}$ を与える．

$2.$ $k = 0,\ 1,\ ...$ に対し以下の操作を繰り返す．

- **誤差が許容できた** とき，3. へ遷移
- 誤差が許容できなかったとき，$\displaystyle x_{k + 1} = x_{k} + \frac{f(x_{k})}{f'(x_{k})}$ とおき $2.$ へ戻る（[反復式](/computer-science/numerical-analysis/root-finding/iteratives-and-banach)）．

$3.$ $x_{k}$ を解とし終了．

---

関数 $f(x)$，初期値 $x_{0}$ の取り方によって，$x_{k}$ が **収束しないことがある**．  
収束するならば $k \rightarrow \infty$ のとき厳密解となる．

~~~

以下のように解 $x$ に近づいていきます．

~~~graph:coordinate-system-2d
(() => ({
    axes: {
        enabled: true,
        scales: false,
    },
    ratio: [16, 9],
    coordinateArea: {
        from: { x: -0.5, y: -1 },
        to: { x: 5, y: 11 }
    },
    formulas: [
        {
            type: "function",
            data: {
                label: "f(x)",
                x: (t) => t,
                y: (t) => (t - 1) * (t - 1) - Math.exp(-t * t),
                range: { from: -0.5, to: 6.5 },
                color: "#000000",
            },
        },
        {
            type: "point",
            data: {
                label: "x",
                labelWithValues: false,
                x: 1.384,
                y: 0,
                color: "#000000",
            },
        },
        {
            type: "point",
            data: {
                label: "x_{k}",
                labelWithValues: false,
                x: 4,
                y: 0,
                color: "#0000ff",
            },
        },
        {
            type: "function",
            data: {
                label: "l_{k}",
                x: (t) => Math.min(t, 4),
                y: (t) => t < 4 ? 6 * t - 15 : 0,
                range: { from: 2.5, to: 4.1 },
                color: "#0000ff44",
            },
        },
        {
            type: "point",
            data: {
                label: "x_{k + 1}",
                labelWithValues: false,
                x: 2.5,
                y: 0,
                color: "#00ff00",
            },
        },
        {
            type: "function",
            data: {
                label: "l_{k + 1}",
                x: (t) => Math.min(t, 2.5),
                y: (t) => t < 2.5 ? 3 * t - 5.28 : 0,
                range: { from: 1.75, to: 2.6 },
                color: "#00ff0044",
            },
        },
        {
            type: "point",
            data: {
                label: "x_{k + 2}",
                labelWithValues: false,
                x: 1.75,
                y: 0,
                color: "#ff0000",
            },
        },
        {
            type: "function",
            data: {
                label: "l_{k + 2}",
                x: (t) => Math.min(t, 1.75),
                y: (t) => t < 1.75 ? 1.67 * t - 2.4 : 0,
                range: { from: 1.44, to: 1.8 },
                color: "#ff000044",
            },
        },
    ],
}))()
~~~

つまり，**$f(x)$ の $x_{k}$ における接線を引き $x$ 軸と交わる点を $x_{k + 1}$ と定める**，という操作ですね．

みてわかるように，初期値の取り方によって求まる解が定まります．  
たとえば $x_{0} = -1$ とすると $x = 0$ に近づきます．

誤差の許容については，適当な $\varepsilon$ を定めて

- 絶対誤差 $|x_{k + 1} - x_{k}| < \varepsilon$
- 相対誤差 $\displaystyle \left| \frac{x_{k + 1} - x_{k}}{x_{k}} \right| < \varepsilon$
- **残差（residual）** $|f(x_{k})| < \varepsilon$

のいずれかを条件とすることが多いです．

## 反復式の導出

反復式 $\displaystyle x_{k + 1} = x_{k} + \frac{f(x_{k})}{f'(x_{k})}$ を示します．

$f(x)$ の $x = x_{k}$ における接線の方程式は，

$$
y = f'(x) ~ (x - x_{k}) - f(x_{k})
$$

仮定から $(x,\ y) = (x_{k + 1},\ 0)$ を代入して，

$$
0 = f'(x) ~ (x_{k + 1} - x_{k}) - f(x_{k})
$$

$$
\therefore ~ x_{k + 1} = x_{k} - \frac{f(x_{k})}{f'(x_{k})}.
$$

```spoiler:open:例

実は先ほど説明に使ったグラフは $f(x) = (x - 1)^{2} - e^{-x^{2}}$ でした．

~~~graph:coordinate-system-2d
(() => ({
    axes: {
        enabled: true,
        scales: true,
    },
    ratio: [16, 9],
    coordinateArea: {
        from: { x: -0.5, y: -1 },
        to: { x: 5, y: 11 }
    },
    formulas: [
        {
            type: "function", 
            data: {
                label: "f(x) = (x - 1)^{2} - e^{-x^{2}}",
                x: (t) => t,
                y: (t) => (t - 1) * (t - 1) - Math.exp(-t * t),
                range: { from: -1.5, to: 6.5 },
                color: "#ff0000",
            },
        },
        {
            type: "point",
            data: {
                label: "(1.3838457,\ 0)",
                x: 1.384,
                y: 0,
                color: "#000000",
            },
        },
    ],
}))()
~~~

方程式 $f(x) = 0$ の解は $x = 0,\ 1.3838457...$ です．  
このうち $x = 1.3838457...$ の方を求めてみます．

準備として $f(x)$ を微分すると，

$$
f'(x) = 2(x - 1) + 2x e^{-x^{2}}
$$

となります．

今回は初期値を $x_{0} = 5$ として，収束判定の条件に $\varepsilon = 10^{-8}$ とした残差を用いることにします．  
実はこの条件下では収束しますが，汎用性を考えて最大反復回数を $N = 50$ と定めておきます．

C++ では以下のように Newton 法を実装できます．

~~~code:newton.cpp
#include <iostream>
#include <iomanip>
#include <vector>
#include <cmath>

using namespace std;

// f(x)
double f(double x) {
    return (x - 1) * (x - 1) - exp(-x * x);
}

// f'(x)
double df(double x) {
    return 2 * (x - 1) + 2 * x * exp(-x * x);
}

int main() {
    // 出力桁数を指定
    cout << setprecision(8);

    // 許容残差
    double eps = 1e-8;
    // 最大反復回数
    int N = 50;
    // x の vector
    vector<double> x(N + 2);
    // 初期値
    x[0] = 5;

    // 求根
    for (int k = 0; k <= N; k++) {
        // 残差の確認
        if (abs(f(x[k])) < eps) {
            cout << "収束する" << endl;
            cout << "k = " << k << ", x = " << x[k] << endl;
            return 0;
        }
        // 次の x を求める
        x[k + 1] = x[k] - (f(x[k]) / df(x[k]));
    }
    // 最大反復回数を超えたので終了
    cout << "収束しない" << endl;
    return 0;
}
~~~

~~~code:output
収束する
k = 6, x = 1.3838457
~~~

```

# 簡易 Newton 法（Parallel Code 法）

~~~definition:簡易Newton法

**簡易 Newton 法**（簡易ニュートン法）または **Parallel Code 法**（パラレルコード法）は，Newton 法の接線を簡易にとるアルゴリズム．

---

$1.$ $f'(x_{0})$ が存在する初期値 $x_{0}$ を与える．

$2.$ $k = 0, 1, ...$ に対し以下の操作を繰り返す．

- **誤差が許容できた** とき，3. へ遷移
- 誤差が許容できなかったとき，$\displaystyle x_{k + 1} = x_{k} + \frac{f(x_{k})}{f'(\textcolor{blue}{x_{0}})}$ とおき $2.$ へ戻る．

$3.$ $x_{k}$ を解とし終了．

~~~

~~~graph:coordinate-system-2d
(() => ({
    axes: {
        enabled: true,
        scales: false,
    },
    ratio: [16, 9],
    coordinateArea: {
        from: { x: -0.5, y: -1 },
        to: { x: 5, y: 11 }
    },
    formulas: [
        {
            type: "function",
            data: {
                label: "f(x)",
                x: (t) => t,
                y: (t) => (t - 1) * (t - 1) - Math.exp(-t * t),
                range: { from: -0.5, to: 6.5 },
                color: "#000000",
            },
        },
        {
            type: "point",
            data: {
                label: "x",
                labelWithValues: false,
                x: 1.384,
                y: 0,
                color: "#000000",
            },
        },
        {
            type: "point",
            data: {
                label: "x_{k}",
                labelWithValues: false,
                x: 4,
                y: 0,
                color: "#0000ff",
            },
        },
        {
            type: "function",
            data: {
                label: "l_{k}",
                x: (t) => Math.min(t, 4),
                y: (t) => t < 4 ? 6 * t - 15 : 0,
                range: { from: 2.5, to: 4.1 },
                color: "#0000ff44",
            },
        },
        {
            type: "point",
            data: {
                label: "x_{k + 1}",
                labelWithValues: false,
                x: 2.5,
                y: 0,
                color: "#00ff00",
            },
        },
        {
            type: "function",
            data: {
                label: "l_{k + 1}",
                x: (t) => Math.min(t, 2.5),
                y: (t) => t < 2.5 ? 6 * t - 12.75 : 0,
                range: { from: 2.13, to: 2.6 },
                color: "#00ff0044",
            },
        },
        {
            type: "point",
            data: {
                label: "x_{k + 2}",
                labelWithValues: false,
                x: 2.13,
                y: 0,
                color: "#ff0000",
            },
        },
        {
            type: "function",
            data: {
                label: "l_{k + 2}",
                x: (t) => Math.min(t, 2.2),
                y: (t) => t < 2.13 ? 6 * t - 11.5 : 0,
                range: { from: 1.92, to: 2.18 },
                color: "#ff000044",
            },
        },
    ],
}))()
~~~
（$x_{k + 2}$ までで止めておきます）

簡易 Newton 法は，接線の傾きを $f'(x_{0})$ に固定した Newton 法です．

明らかに収束が遅いことがわかりますが，計算が少し簡単になりました．

$f(x)$ が $x \neq x_{0}$ で微分不可能でよいという利点があるようにみえますが，  
微分可能性が関係ないアルゴリズムとしては [Secant 法](/computer-science/numerical-analysis/root-finding/secant) が広く知られています．
