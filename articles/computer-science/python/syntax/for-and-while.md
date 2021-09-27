---
title: "for・while文"
draft: true
---

# for

**for 文** は処理を繰り返す文です．

~~~code:main.py
for s in ['abc', 'def', 'ghi']:
    print(s)
~~~

~~~code:output
abc
def
ghi
~~~

構文は `for 変数名 in 回すもの:` で，回すものは sequence 型を指定します．

sequence 型は様々ありますが，

- [str](/computer-science/python/type/str)
- [list と tuple](/computer-science/python/type/list-tuple)

が代表的です．

for 文は要素をひとつずつ取り出し `変数名` に代入して，やはり **インデントを基に** プログラムを実行します．  
取り出す順序は要素の順になることが保証されています．

## range

for 文といえば整数のループです．

たとえば C++ では

~~~code:main.cpp
for (int i = 0; i < 3; i++) {
    cout << i << endl;
}
~~~

~~~code:output
0
1
2
~~~

非常に有名な構文ですね．

しかし，Python にはこのような構文はありません．

代わりに **range 関数** という組み込みの関数があります．

~~~code:main.py
for i in range(3):
    print(i)
~~~

~~~code:output
0
1
2
~~~

**range 型** という，list などとはまた別の sequence 型があります．

range 関数はその range 型の値を返す関数で，0 から 与えられた引数 - 1 までの数を表します．

引数は他にも以下のような与え方があります．

`range(n)`  
0 から `n` - 1 までの整数

`range(m, n)`  
`m` から `n` - 1 までの整数

`range(m, n, s)`  
`m` から `s` ずつ進めて `n` - 1 までの整数

range の他にも多くの便利な関数が用意されています．  
それらは [for文のテクニック](/computer-science/python/syntax/for-technics) で紹介しています．

## 処理の中断

処理は `continue` と `break` で中断できます．

~~~code:main.py
for i in range(100):
    if i % 2 == 0 or i % 3 == 0:
        continue
    if i > 10:
        break
    print(i)
~~~

~~~code:output
1
5
7
~~~

`continue` は処理をその時点では中断するがループは続ける，という文です．  
この例では 2 または 3 で割り切れるときは print まで辿りつかず出力されませんでした．

range は 100 までが指定されていますが，i > 10 までで終了してしまっています．  
`break` は処理を中断しループも終了する，という文です．

## else

`else` 節を使うと break せず for が終了したときにのみ実行される処理を記述できます．

~~~code:main.py
def f(x):
    for s in ["abc", "def", "ghi"]:
        if s == x:
            print("A")
            break
    else:
        print("B")

f("abc")
f("jkl")
~~~

~~~code:output
A
B
~~~

"abc" を入れたときは print("A") の後 break したので print("B") は無視されました．

"jkl" を入れたときは break せず for が終了したので print("B") が実行されました．

else 節は省略可能です．

余談ですがこの例はもっとうまく書けます．

# while

**while 文** はある条件が成立している間，処理を実行し続ける文です．

~~~code:main.py
x = 0

while x < 10:
    x += 1

print(x)
~~~

~~~code:output
10
~~~

構文は `while 条件:` で if 文と同様です（elif はありませんが）．

あまり例がよくないのですが，x が 10 になるまで繰り返してくれました．

for 文と同様に else 節を追加できます．

~~~code:main.py
def f(x):
    p = ["abc", "def", "ghi"]
    for i in range(len(p)):
        if p[i] == x:
            print("A")
            break
    else:
        print("B")

f("abc")
f("jkl")
~~~

~~~code:output
A
B
~~~
