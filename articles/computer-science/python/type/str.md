---
title: "文字列：str型"
draft: true
---

**str** は文字列を扱う型です．

# 定義

基本的にクォテーション（' か "）を使って定義します．

str は空白スペースまたは + で結合できます．

~~~code:main.py
print('ABC' "DEF")
print('ABC' + "DEF")
~~~

~~~code:output
ABCDEF
ABCDEF
~~~

先頭に f を付して定義すると，中に変数を展開できます．

~~~code:main.py
x = 1
print(f'x = {x}, True = {True}')
~~~

~~~code:output
x = 1, True = True
~~~

クォテーションを $3$ つ使うと複数行に渡って記述できます．

~~~code:main.py
x = """abc
def
ghi"""
print(x)
~~~

~~~code:output
abc
def
ghi
~~~

## 変換

`str()` で囲うと変数を str 型に変換できます．

~~~code:main.py
x = 12
y = str(12)
print(y)
print(type(y))
~~~

~~~code:output
12
<class 'str'>
~~~

int に対しては以下の組み込み関数が存在します．

- `bin()`：2 進数へ
- `oct()`：8 進数へ
- `hex()`：16 進数へ

~~~code:main.py
print(hex(12))
~~~

~~~code:output
0xc
~~~

# メソッド

## format

format メソッドは f を使った展開以前に使われていた展開方法です．

~~~code:main.py
print("a = {}, b = {}".format(1, 2))
~~~

~~~code:output
a = 1, b = 2
~~~

format の引数は可変長で，{} の中に順次展開していきます．

## startswith

s.startswith(t) は s が t から始まるかを判定します．

~~~code:main.py
print("abcd".startswith("ab"))
~~~

~~~code:output
True
~~~

## endswith

s.endswith(t) は s が t で終わるかを判定します．

~~~code:main.py
print("abcd".endswith("ab"))
~~~

~~~code:output
False
~~~

## split

s.split(t) は s を t で区切った list を返します．

~~~code:main.py
print("ab, c, def".split(", "))
~~~

~~~code:output
['ab', 'c', 'def']
~~~

## replace

s.replace(old, new) は s に含まれる old を new に置換した文字列を返します．

~~~code:main.py
print("123123123".replace("1", "4"))
~~~

~~~code:output
423423423
~~~

## zfill

s.zfill(x) は s を x 桁になるように 0 埋めした文字列を返します．

~~~code:main.py
print("123".zfill(8))
print("-456".zfill(8))
~~~

~~~code:output
00000123
-0000456
~~~

# sequence 型

str は文字「列」型とはいいます．では一文字ずつ取り出すとどうなるのでしょうか．

~~~code:main.py
x = "abc"[1]
print(x)
print(type(x))
~~~

~~~code:output
b
<class 'str'>
~~~

[i] は i 番目の文字を取得する演算子です．i は 0 から数えます．  
x は b という一文字ですが type(x) が示す通り str 型です．

実は，Python には「文字型」のような一文字だけを表す型がありません．  
一文字だけであっても文字列と呼び，したがって str 型は str 型を纏めたものと見做せるのです．

詳しくいえば str 型は sequence 型として振る舞わせられます．  
実際，[i] は str 型というより sequence 型の演算子です．

sequence 型としての機能はその代表格である list・tuple の機能と纏めて [list・tuple 型](/computer-science/python/type/list-tuple) で紹介していますので，詳しくはそちらをご覧ください．
