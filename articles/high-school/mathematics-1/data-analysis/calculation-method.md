---
title: "データの分析の計算方法"
description: "データの分析の計算はこれさえ抑えれば完璧です。平均・分散・標準偏差・共分散・相関係数を定義し、共通テスト頻出の定数倍・平行移動に関する性質を確認します。"
---

平均・分散・標準偏差・共分散・相関係数の定義と性質を確認します。

それぞれの関係性を意識するとよいと思います。

## 定義

**平均 $E$**

データの総和 $\div$ データ数

$$
E(X) = \frac{1}{n} \sum_{k = 1}^{n} x_{k}
$$

**分散 $\mathrm{Var}$**

「平均との差」の $2$ 乗の平均  
「$2$ 乗の平均」と「平均の $2$ 乗」の差

$$
\begin{alignat*}{1}
  \mathrm{Var}(X) &= \frac{1}{n} \sum_{k = 1}^{n} (x_{k} - E(X))^{2} \\
                  &= E(X^{2}) - (E(X))^{2}
\end{alignat*}
$$

**標準偏差 $\sigma$**

分散の平方根

$$
\sigma(X) = \sqrt{\mathrm{Var}(X)}
$$

**共分散 $\mathrm{Cov}$**

「平均との差」の積の平均

$$
\mathrm{Cov}(X,\ Y) = \frac{1}{n} \sum_{k = 1}^{n} (x_{k} - E(Y)) (y_{k} - E(Y))
$$

**相関係数** $\rho$

共分散 $\div$ 標準偏差の積

$$
\rho(X,\ Y) = \frac{\mathrm{Cov}(X,\ Y)}{\sigma(X) ~ \sigma(Y)}
$$

## 性質

定数倍・平行移動に関して

$$
E(aX + b) = a ~ E(X) + b
$$

$$
\mathrm{Var}(aX + b) = a^{2} ~ \mathrm{Var}(X)
$$

$$
\sigma(aX + b) = |a| ~ \sigma(X)
$$

$$
\mathrm{Cov}(aX + b,\ cY + d) = ac ~ \mathrm{Cov}(X,\ Y)
$$

$$
\rho(aX + b,\ cY + d) = \mathrm{sign}(ac) ~ \rho(X,\ Y)
$$

平行移動は統計を考える上で大した問題ではないことがわかります。

$\mathrm{sign}(x)$ は $x$ の符号を返すものとします。
