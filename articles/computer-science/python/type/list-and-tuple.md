---
title: "list・tuple型"
---

**list** と **tuple** はともにいくつかの値を纏めておける型です．

**list は要素の変更が可能，tuple は要素の変更が不可能**，という点で区別されます．

list と tuple は **sequence 型** というものに属しています．

list 型に実装されている機能，tuple 型に実装されている機能，sequence 型に実装されている機能はそれぞれ区別可能ですが，簡単のためにここでは区別しないものとします．

実用上は区別しなくてもそこまで困りません．  
tuple に使えない機能が含まれていますが，要素を変更しそうなものはダメということでなんとなくわかると思います．

[str 型](/computer-science/python/type/str) も sequence 型の機能の大部分が使えます．

なお，Python では **0-indexed**，つまり要素を 0 番目，1 番目，．．．と数えることに注意します．

# 定義

## 基本的な定義

list は []，tuple は () で囲うのが最も基本的な定義方法です．

~~~code:main.py
print([1, 2, 3, True, 'abc'])
print((1, 2, 3, True, 'abc'))
~~~

~~~code:output
[1, 2, 3, True, 'abc']
(1, 2, 3, True, 'abc')
~~~

## 内包記法

Python らしい list の定義方法として **内包記法** があります．

~~~code:main.py
p = [2 * i for i in range(10)]
print(p)
~~~

~~~code:output
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
~~~

内包記法は for 文をそのまま書くようにしてリストを生成できます．

`[処理 for 変数名 in forで回すもの]` が基本構文です．

これは以下の処理と等価です．

~~~code:main.py
p = []
for i in range(10):
    p.append(i * 2)
print(p)
~~~

（append・insert については後述）

ただし，append や insert といった後から要素を追加するメソッドは遅い処理であることが知られており，できるだけ内包記法を使うことが推奨されています．

tuple については，そのままだと generator 式と呼ばれる別のオブジェクトになってしまいます．  
tuple() で包むことで tuple の内包表記になります．

~~~code:main.py
p = tuple(2 * i for i in range(10))
print(p)
~~~

~~~code:output
(0, 2, 4, 6, 8, 10, 12, 14, 16, 18)
~~~

厳密には，tuple の内包表記になるというより generator 式を tuple に変換しているのですが，実用上は tuple の内包表記になると思っておけばよいでしょう．

## 変換

他の sequence 型や要素を複数個持つ値は list() や tuple() で囲うとそれぞれに変換できます．

~~~code:main.py
p = list(range(10))
print(p)
~~~

~~~code:output
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
~~~

（[range 関数についてはこちら](/computer-science/python/syntax/for-technics)）

# 演算子

## [] 演算子：要素へのアクセス

[i] 演算子で i 番目の要素にアクセスできます．

~~~code:main.py
p = [1, 2, 3]
print(p[2])
~~~

~~~code:output
3
~~~

要素は 0 から数えるので，`p[2]` は 2 ではなく 3 が返ってきます．

## [] 演算子：スライス

[i, j] 演算子で i から j - 1 番目，つまり区間 $[i, j)$ の要素を切り出すことができます．

~~~code:main.py
p = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(p[2:4])
~~~

~~~code:output
[3, 4]
~~~

j 番目の要素は含まないことに注意します．

## in 演算子

`x in p` は p に x が含まれているかを判定します．

~~~code:main.py
p = [1, 2, 3]
print(1 in p)
print(-10 in p)
~~~

~~~code:output
True
False
~~~

## + 演算子

`p + q` で p と q を結合します．

~~~code:main.py
p = [1, 2, 3]
q = [4, 5, 6]
r = p + q
print(r)
~~~

~~~code:output
[1, 2, 3, 4, 5, 6]
~~~

# 組み込み関数

## len 関数

要素の個数を取得します．

~~~code:main.py
p = [1, 2, 3]
print(len(p))
~~~

~~~code:output
4
~~~

## min 関数・max 関数

要素の中で最も小さいもの，大きいものを取得します．

~~~code:main.py
p = [1, 2, 3]
print(min(p))
print(max(p))
~~~

~~~code:output
1
3
~~~

型が異なるなどして比較できないときはエラーになります．

~~~code:main.py
p = [1, 2, '3']
print(max(p))
~~~

~~~code:output
Traceback (most recent call last):
  File "./main.py", line 2, in <module>
    print(min([1, 2, '3']))
TypeError: '<' not supported between instances of 'str' and 'int'
~~~

## sum 関数

要素の和を取得します．

型が異なるなどして和が計算できない場合はエラーになります．

~~~code:main.py
p = [1, 2, 3]
print(sum(p))
~~~

~~~code:output
6
~~~

# メソッド

## append・insert

append は最後尾に要素を追加します．

~~~code:main.py
p = [1, 2, 3]
p.append(4)
print(p)
~~~

~~~code:output
[1, 2, 3, 4]
~~~

任意の位置に要素を追加するには insert メソッド を使います．  
始めの引数に挿入する位置を入力します．

~~~code:main.py
p = [1, 2, 3]
p.insert(1, 4)
print(p)
~~~

~~~code:output
[1, 4, 2, 3]
~~~

## count

`p.count(x)` は p に x が含まれる個数を取得します．

~~~code:main.py
p = [1, 2, 3, 3, 3, 3, 3, 4, 5]
print(p.count(3))
~~~

~~~code:output
5
~~~
