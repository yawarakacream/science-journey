---
title: "真理値：bool型"
draft: true
---

**bool** は True・False の $2$ 通りの値もつ型です．

文字列に変換されてもそのまま True や False となります．

内部的には **整数として処理されており**，True は 1，False は 0 を意味します．  
進んですべきことではありませんが，int として [数の演算](/computer-science/python/type/int-float-complex) に使えます．

# 演算子

| 演算子 | 意味 |
|:-:|:--|
| x or y  | x と y の論理和 |
| x and y | x と y の論理積 |
| not x   | x の否定 |
| x ^ y   | x と y の排他的論理和 |

# 例

```spoiler:open
~~~code:main.py
print(True)
print(2 + 3 * True - 4 * False)
print(complex(True))
~~~
~~~code:output
True
5
(1+0j)
~~~
```

```spoiler:open
~~~code:main.py
print(True or False)
print(True and False)
print(not False)
print(True ^ False)
~~~
~~~code:output
True
False
True
True
~~~
```
