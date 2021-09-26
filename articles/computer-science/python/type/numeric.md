---
title: "数：int・float・complex型"
draft: true
---

Python には数を表す型として，

- 整数 **int**
- 実数 **float**
- 複素数 **complex**

があります．

## int

整数型 int は（メモリの許す限り）任意の大きさの整数です．

~~~code:main.py
a = 10
b = 0x10
c = 1000000
d = 1_000_000
print(a)
print(b)
print(c)
print(d)
~~~

~~~code:output
10
16
1000000
1000000
~~~

定義には整数をそのまま書けばよいです．

接頭語なしだと $10$ 進数になります．  
先頭に 0b をつけると $2$ 進数，0o をつけると $8$ 進数，0x をつけると $16$ 進数になります．

区切り文字として \_ が存在しますが必須ではありません．\_ は実行時には無視されます． 

## float

実数型 float は公式で実数と呼ばれていますが，中身は [倍精度浮動小数点数](/computer-science/numerical-analysis/floating-point-number/structure) です．

~~~code:main.py
a = 10.0
print(a)
~~~

~~~code:output
10.0
~~~

小数点を付ければ float になります．

ちなみに単精度浮動小数点数の型は存在しません．

## complex

複素数型 complex は実部と虚部をそれぞれ倍精度浮動小数点数で保持する複素数です．

~~~code:main.py
a = 1.5 + 2.4j
print(a)
~~~

~~~code:output
(1.5+2.4j)
~~~

虚数単位は **j** です．i ではありません．

# 演算子

| 演算子 | 意味 |
|:-:|:--|
| + | 足し算 |
| - | 引き算 |
| * | 掛け算 |
| / | 割り算 |
| // | 割り算（整数） |
| % | 余り |
| ** | 冪乗 |

基本的に同じ型同士の演算はその型の結果になります．

異なる型での演算は，int → float → complex の順で優先されます（たとえば float + complex は complex）．

ただし以下の例外があります．

- int / int は float
- 任意の型 // 任意の型 は両方床関数をとり，結果は優先される方の型
- complex の // と % はできない

# 比較

| 演算子 | 意味 |
|:-:|:--|
| <  | 未満 |
| <= | 以下 |
| >  | 超過 |
| >= | 以上 |
| == | 等しい |
| != | 等しくない |

それぞれ，条件にマッチすれば True、しなければ False が返ります．

~~~code:main.py
print(1 < 2)
~~~

~~~code:output
True
~~~

演算は連鎖できます．  
たとえば 1 < x < 2 は 1 < x かつ x < 2 を判定します．

# 変換

`int(f: float)`  
f を int に変換します．小数点以下は切り捨てられます．

`int(s: str)`  
s を int に変換します．

`int(s: str, n: int)`  
s を n 進数と解釈して int に変換します．

complex は変換できません．

## float

`float(i: int)`  
i を float に変換します．

`float(s: str)`  
str を float に変換します．

complex は変換できません．

## complex

`complex(x)`  
実部が x，虚部が 0 の complex に変換します．

`complex(x, y)`  
実部が x，虚部が y の complex に変換します．

`complex(s: str)`  
str を Python のソースコードのように解釈し，対応する complex を返します．

文字列を与える complex はよくできています．  
詳しくは例をみてください．

# 例

```spoiler:open
~~~code:main.py
print(1 + 2)
print(3.4 + 2)
print(1.2 * (1 + 2j))
print((1 + 2j) ** 2)
~~~
~~~code:output
3
5.4
(1.2+2.4j)
(-3+4j)
~~~
```

```spoiler:open
~~~code:main.py
print(int(1.2))
print(int(1.9))
print(int("ff", 16))
print(complex(2))
print(complex("1"))
print(complex("1+2j"))

print(float(1 + 2j))
~~~
~~~code:output
1
1
255
(2+0j)
(1+0j)
(1+2j)
Traceback (most recent call last):
  File "./main.py", line 4, in <module>
    print(float(1 + 2j))
TypeError: can't convert complex to float
~~~
```
