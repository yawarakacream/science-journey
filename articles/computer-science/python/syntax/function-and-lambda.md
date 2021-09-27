---
title: "関数とラムダ式"
draft: true
---

Python ではある処理をひとかたまりに **関数** として纏めておくことができます．

標準で多くの関数が定義されています．関数は () を伴って呼び出します．

~~~code:main.py
print('Hello, World!')
~~~

~~~code:output
Hello, World!
~~~

() の中に入れたもの，今回では 'Hello, World!' ですが，これを **引数** といいます．

print は引数を出力する関数です．

引数の個数に制限はなく，ひとつも持たないものもありますし，複数個持つものもあります．

# def 文

自分で関数を定義するには **def 文** を使うのが最も基本的です．

~~~code:main.py
def f():
    print('test')

f()
~~~

~~~code:output
test
~~~

ここでは引数を持たない f という関数を定義しました．

「def 関数名():」で始め，次の行に処理の内容を記述します．

その関数の処理なのか関数の外の処理なのかを区別するため，各行の先頭をあけておく必要があります．

これを **インデント** といい，Python では関数以外でも以外でもこのインデントによって処理を区別します．

インデントは適当な個数の半角スペースやタブ文字（\t）でも動作しますが，半角スペース $4$ つが推奨されています．

~~~code:main.py
def f():
    print('test')
    print('test')

f()
~~~

~~~code:output
test
test
~~~

複数行記述できます．

## 引数

引数をもつ関数は以下のように定義します．

~~~code:main.py
def f(x, y):
    print(x + y)

f(1, 2)
~~~

~~~code:output.py
3
~~~

引数は () の中にカンマで区切って定義します．

こうして定義した引数は，その関数の中でだけ使える変数として振る舞います．

## ローカル変数

「関数の中でだけ使える変数」は引数以外にも，関数の中で通常通りに定義できます．  
こうした変数を **ローカル変数** といいます．

~~~code:main.py
def f(x, y):
    z = x * y
    print(z)

f(3, -4)

print(z)
~~~

~~~code:output.py
-12
Traceback (most recent call last):
  File "./main.py", line 7, in <module>
    z
NameError: name 'z' is not defined
~~~

引数と同様に，ローカル変数も関数の外から使うことはできません．  
print(z) を試みましたが，それは無視され not defined といったエラーが代わりに出力されました．

## グローバル変数

「関数の中でだけ使える変数」としてローカル変数がありました．

逆に，関数の外に定義される変数を **グローバル変数** といいます．

~~~code:main.py
k = 100

def f():
    print(k)

f()
~~~

~~~code:output
100
~~~

グローバル変数は関数の中でも値を取得できます．

では代入はどうでしょうか．

~~~code:main.py
k = 100

def f():
    k = 0
    print(k)

f()
print(k)
~~~

~~~code:output
0
100
~~~

グローバル変数の k に 0 を代入するつもりでしたが，うまくいきません．

Python では変数の定義も代入も = なので区別できず，関数の中で単に = とされた場合は **ローカル変数の定義が優先** されます．

グローバル変数の k に代入したい場合は **global 文** でグローバル変数であることを明示します．

~~~code:main.py
k = 100

def f():
    global k
    k = 0
    print(k)

f()
print(k)
~~~

~~~code:output
0
0
~~~

逆に，global 文はグローバル変数の定義にもなります．

~~~code:main.py
def f():
    global k
    k = 0
    print(k)

f()
print(k)
~~~

~~~code:output
0
0
~~~

もっとも，処理が複雑になると何がグローバル変数だったかわからなくなってしまうので，  
このようにしてグローバル変数を定義するのはまったく推奨されたものではありません．

## 関数内関数

関数の中で関数を定義することができます．

~~~code:main.py
def f():
    def g():
        print("g")
    g()
    print("f")

f()
g()
~~~

~~~code:output
g
f
Traceback (most recent call last):
  File "./main.py", line 8, in <module>
    g()
NameError: name 'g' is not defined
~~~

関数の中で定義した関数は外から呼び出せません．global 文を使ってグローバルに定義することもできません．

関数 f の中で定義した関数 g はそのままでも f の変数を取得はできますが，やはり代入はできません．

代入するにはグローバル変数での global 文にあたる **nonlocal 文** を使って明示してあげます．

~~~code:main.py
def f():
    p = 0
    def g():
        nonlocal p
        p = 1
    g()
    print(p)

f()
~~~

~~~code:output
1
~~~

nonlocal 文は global 文と似た働きをしますが，nonlocal 文で g から f の変数を定義することはできません．

~~~code:main.py
def f():
    def g():
        nonlocal p
        p = 1
    g()
    print(p)

f()
~~~

~~~code:output
  File "./main.py", line 3
    nonlocal p
    ^
SyntaxError: no binding for nonlocal 'p' found
~~~

存在しない変数の nonlocal はできない，というエラーが出力されました．

## 値の返却

すべての関数は値を返却します．

~~~code:main.py
def f(x):
  return 2 * x

y = f(3)
print(y)
~~~

~~~code:output
6
~~~

return 文によって返却する値を指定します．

return 文は必ず必要というわけではなく，省略した場合暗黙的に None が返却されます．

~~~code:main.py
def f(x):
    print(2 * x)

y = f(3)
print(y)
~~~

~~~code:output
6
None
~~~

return 文に到達すると，関数は処理を終了します．

~~~code:main.py
def f():
    print('a')
    return
    print('b')

f()
~~~

~~~code:output
a
~~~

a は出力されましたが，直前で return されてしまったので b は出力されません．

# lambda 式

関数には lambda 式（無名関数）と呼ばれる定義方法があります．

~~~code:main.py
f = lambda x: 2 * x
print(f(3))
~~~

~~~code:output
6
~~~

lambda 式は **lambda 文** を使って「lambda 引数: 処理」のように定義し，複数行に跨って処理を記述することはできません．

lambda 式は変数として振る舞える関数の定義方法，ともいえます．  
関数は再定義できませんが，lambda 式はあくまで変数なので好きに再代入できます．

~~~code:main.py
f = lambda x: 2 * x
print(f(3))
f = lambda x: 7 * x
print(f(3))
~~~

~~~code:output
6
21
~~~

以下のような書き方も認められます．

~~~code:main.py
print((lambda x: 2 * x)(4))
~~~

~~~code:output
8
~~~

return していないのに値が返ってきていることに気づいたでしょうか．

lambda 式は最後に処理したものの値を return なしに返す，という特徴があります．
