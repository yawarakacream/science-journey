---
title: "for文のテクニック"
draft: true
---

[for 文](/computer-science/python/syntax/for-and-while) に使える便利な関数を紹介します．

なお，for 文のテクニックと題していますが，それぞれの関数はもちろん for 文以外でも適当な場面で利用できます．  
たとえば range 関数は list() で囲うと list に変換できます．

## range

整数のループです．

```spoiler:close

`range(n)`  
0 から `n` - 1 までの整数

`range(m, n)`  
`m` から `n` - 1 までの整数

`range(m, n, s)`  
`m` から `s` ずつ進めて `n` - 1 までの整数

~~~code:main.py
for i in range(3):
    print(i)
~~~

~~~code:output
0
1
2
~~~

```

## reversed

逆順にループします．

```spoiler:close

~~~code:main.py
for i in reversed(["abc", "def", "ghi"]):
    print(i)
~~~

~~~code:output
ghi
def
abc
~~~

```

## enumerate

list などを数字とともにループします．

```spoiler:close

~~~code:main.py
for i, x in enumerate(["abc", "def", "ghi"]):
    print(f"i = {i}, x = {x}")
~~~

~~~code:output
i = 0, x = abc
i = 1, x = def
i = 2, x = ghi
~~~

```

## zip

複数の list などを纏めてループします．

```spoiler:close

~~~code:main.py
p = ["abc", "def", "ghi"]
q = ["jkl", "mno", "pqr"]
for x, y in zip(p, q):
    print(f"x = {x}, y = {y}")
~~~

~~~code:output
x = abc, y = jkl
x = def, y = mno
x = ghi, y = pqr
~~~

長さが異なる場合は小さい方を優先し，大きい方の余分な分は無視されます．

~~~code:main.py
p = ["abc", "def", "ghi", "xyz"]
q = ["jkl", "mno", "pqr"]
for x, y in zip(p, q):
    print(f"x = {x}, y = {y}")
~~~

~~~code:output
x = abc, y = jkl
x = def, y = mno
x = ghi, y = pqr
~~~

```

## dict.items

dict はキーと値を同時にループできます．

```spoiler:close

~~~code:main.py
d = { "a": "X", "b": "Y", "c": "Z" }
for k, v in d.items():
    print(f"{k}: {v}")
~~~

~~~code:output
a: X
b: Y
c: Z
~~~

```
