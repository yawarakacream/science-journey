---
title: "if文"
draft: true
---

**if 文** は条件分岐を行う文です．

~~~code:main.py
x = 2

if x == 1:
    print("one")

if x == 2:
    print("two")

if x == 3:
    print("three")
~~~

~~~code:output
two
~~~

`if 条件:` で始め，先頭に適当なスペースをあけて処理を記述します．

[これは関数のときと同様の理由です．](/computer-science/python/syntax/function-and-lambda)

やはり関数と同様に，このことを **インデント** といいます．

`==` は [int 型の比較演算子](/computer-science/python/type/numeric) です．  
一般に条件は [bool 型](/computer-science/python/type/bool) をすべて許容します．

## 分岐

**else 節** を使うと条件に一致しなかったときの処理を記述できます．

~~~code:main.py
x = 100

if x == 1:
    print("one")

else:
    print("else")
~~~

~~~code:output
else
~~~

**elif 節** を使うと連続的に条件を記述できます．

~~~code:main.py
if 条件 A:
    print("A")

elif 条件 B:
    print("B")
~~~

このように記述すると，条件 B は **条件 A が偽であった場合のみ** 判定されます．

条件 A が真だったときは省略されるので効率的ですし，以下のようなロジックを書くのに役立ちます．

~~~code:main.py
x = 64

if x < 60:
    print("D")

elif x < 70:
    print("C")

elif x < 80:
    print("B")

elif x < 90:
    print("A")

else:
    print("S")
~~~

~~~code:output
C
~~~

`print("C")` の条件は `x < 70` とだけあるように見えますが，「`x < 60` でない かつ `x < 70`」を意味します．

elif 節・else 節は省略可能です．  
elif 節は複数個記述できます．
