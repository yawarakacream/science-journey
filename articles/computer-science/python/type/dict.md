---
title: "dict型"
---

**dict** は，値と値を関連づけて纏める型です．  
日本語では **辞書型** とも呼ばれます．

キーと値は基本的には任意の型を入れられます．

以下の例ではキーに str を使うことが多いですが，str 以外でも同様のことが成り立ちます．

# 定義

## 基本的な定義

`{}` を使った定義が最も基本的です．

~~~code:main.py
d = { 'a': 1, 'b': 2, 'p': True, 'x': 'xyz' }
print(d)
~~~

~~~code:output
{'a': 1, 'b': 2, 'p': True, 'x': 'xyz'}
~~~

関連付けは `:` を使い，左側を **キー**，右側を **値** といいます．

また，dict() を使って

~~~code:main.py
d = dict(a=1, b=2, p=True, x='xyz')
print(d)
~~~

~~~code:output
{'a': 1, 'b': 2, 'p': True, 'x': 'xyz'}
~~~

とも書けます．これも基本的ですがあまり見かけない気がします．

## list・tuple から

キーと値を list や tuple でペアにして，それらを纏めた list や tuple から dict を生成できます．

~~~code:main.py
p = []
for i in range(3):
  p.append((i, i ** 2))

print(p)
print(dict(p))
~~~

~~~code:output
[(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25), (6, 36), (7, 49), (8, 64), (9, 81)]
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}
~~~

キーと値を別々に保持している場合は [zip 関数](/computer-science/python/syntax/for-technics) が有用です．

~~~code:main.py
p = []
q = []
for i in range(3):
  p.append(i)
  q.append(i ** 2)

print(p)
print(q)
print(dict(zip(p, q)))
~~~

~~~code:output
[0, 1, 2]
[0, 1, 4]
{0: 0, 1: 1, 2: 4}
~~~

## 内包表記

Python らしい list の定義方法として **内包記法** があります．

~~~code:main.py
d = { i: i ** 2 for i in range(10) }
print(d)
~~~

~~~code:output
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}
~~~

内包記法は for 文をそのまま書くようにしてリストを生成できます．

`[キー: 値 for 変数名 in forで回すもの]` が基本構文です．

これは以下の処理と等価です．

~~~code:main.py
d = {}
for i in range(10):
    d[i] = i ** 2
print(d)
~~~

# 演算子

## [] 演算子：要素へのアクセス

[] の中にキーを記述すると，対応する値を取得できます．

~~~code:main.py
d = { 'a': 1, 'b': 2, 'p': True, 'x': "xyz" }
print(d['p'])
~~~

~~~code:output
True
~~~

存在しないキーを取得しようとするとエラーになります．

~~~code:main.py
d = { 'a': 1, 'b': 2 }
print(d['c'])
~~~

~~~code:output
Traceback (most recent call last):
  File "./main.py", line 2, in <module>
    print(d['c'])
KeyError: 'c
~~~

ただし代入 `=` は可能で，これによって後から要素を追加できます．

~~~code:main.py
d = { 'a': 1, 'b': 2 }
d['c'] = 3
print(d['c'])
~~~

~~~code:output
3
~~~

## in 演算子

キーが存在するかの判定には `in` 演算子があります．

~~~code:main.py
d = { 'a': 1, 'b': 2 }
print('c' in d)
~~~

~~~code:output
False
~~~

## del 演算子

要素を削除するには `del` 演算子が使えます．

~~~code:main.py
d = { 'a': 1, 'b': 2 }
del d['a']
print(d)
~~~

~~~code:output
{'b': 2}
~~~

# メソッド

## items

items メソッドはキーと値を纏めて **view objects** と呼ばれるものにして返します．

これは for 文のループに有用です．

~~~code:main.py
d = { 'a': 1, 'b': 2, 'p': True, 'x': "xyz" }
for k, v in d.items():
    print(f"{k}: {v}")
~~~

~~~code:output
a: 1
b: 2
p: True
x: xyz
~~~

list() を使えば (キー, 値) の tuple の list を取得できます．  
tuple() にすれば tuple になります．

~~~code:main.py
d = { 'a': 1, 'b': 2, 'p': True, 'x': 'xyz' }
print(list(d.items()))
~~~

~~~code:output
[('a', 1), ('b', 2), ('p', True), ('x', 'xyz')]
~~~

## keys・values

items はキーと値をペアにしましたが，keys と values はペアにせずそれぞれ返します．

list() などの変換もできます．  
今回の例では values は tuple() の変換をしてみます．

~~~code:main.py
d = { 'a': 1, 'b': 2, 'p': True, 'x': 'xyz' }
print(list(d.keys()))
print(tuple(d.values()))
~~~

~~~code:output
['a', 'b', 'p', 'x']
(1, 2, True, 'xyz')
~~~
