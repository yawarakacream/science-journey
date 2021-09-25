---
title: "式の割り当てと削除"
draft: true
---

[式と頭部](/computer-science/mathematica/syntax/expression-and-head) で示したように，変数や関数は $=$ を使って定義するのでした．

~~~code:builtin.nb
In[1]:= a = 4
Out[1]= 4

In[2]:= f[x_] = 2x
Out[2]= 2 x
~~~

Wolfram 言語では式を定義することを **割り当て** などと呼び，$=$ は即時割り当てと呼ばれる割り当て方法のひとつです．

なお，本サイトでは「式の割り当て」と「式の定義」という用語を同一視することにします．  
Wolfram 言語のドキュメントでも同一視されてそうなのでたぶん問題ないと思います．

# 式の情報

準備として式の情報を見る方法を確認します．

式は先頭に ? をつけることで情報を見ることができます．

~~~code:information.nb
In[1]:= ?x
Out[1]= Missing[UnknownSymbol, x]

In[2]:= x = 1
Out[2]= 1

In[3]:= ?x
Out[3]= Symbol
        Global`x
        Assignment x = 1
         Full Name Global`x
~~~

（Out[3] のような ? を使った出力はここではうまく書けません，以下も同様です，大目に見てください．．．）

In[1] までの時点で x には何も割り当てられていなかったとします．

Out[1] では Missing[UnknownSymbol, x] と，何も割り当てられていなかったこと，Out[3] では x に 1 が割り当てられていたことがわかります．

Full Name Global\`x という部分が気になりますね．  
実は，Wolfram 言語では私たちが割り当てた式に Global\` という接頭語をつけて管理しています．

~~~code:information.nb
In[4]:= Global`x
Out[4]= 1
~~~

Global\`x としても x を呼び出すことができます．  
ふつう Global\` は省略しますが，後述の式の削除をする上で少し有用です．

なお，? は [Information 関数](https://reference.wolfram.com/language/ref/Information.html) のシンタックスシュガーです．

# 式の割り当て

## 即時割り当て

即時割り当ては $=$ を使った割り当てで，その場ですぐに計算されます．

$1$ から $100$ までの乱数を生成する関数 RandomInteger[100] を使って試してみると，

~~~code:assignment.nb
In[1]:= b = RandomInteger[100]
Out[1]= 74

In[2]:= b
Out[2]= 74

In[3]:= b
Out[3]= 74
~~~

b に $74$ という数が割り当てられたので，以降ずっと b は $74$ のままです．

## 遅延割り当て

遅延割り当ては $:=$ を使った割り当てで，その式が呼ばれたタイミングで毎回計算されます．

~~~code:assignment.nb
In[4]:= c := RandomInteger[100]

In[5]:= c
Out[5]= 92

In[6]:= c
Out[6]= 39
~~~

c は RandomInteger[100] を計算しないまま保持し続けていることがわかります．

## 既に割り当てられている式？

即時割り当てはその場ですぐに計算されてしまうので，以下のような意図しない挙動を生むことがあります．

~~~code:assignment.nb
In[7]:= x = 0
Out[7]= 0

In[8]:= f[x_] = 2 x
Out[8]= 0

In[9]:= f[1]
Out[9]= 0

In[10]:= f[10]
Out[10]= 0
~~~

f[x_] は $2x$ という関数のつもりでしたが，定義するときに既に x に $0$ が代入されていたので，f[x_] は恒等的に $0$ になってしまいました．

~~~code:assignment.nb
In[11]:= g[x_] := 2 x

In[12]:= g[3]
Out[12]= 6

In[13]:= g[0]
Out[13]= 0
~~~

遅延割り当てを使うと x を保持し続け，正しく $2x$ を計算してくれました．

関数は呼ばれるとき，引数をその関数内で使えるローカルな式として解釈し，グローバルに割り当てられている式よりも優先することがわかります．  
（即時割り当ては割り当てた時点で x が 0 に置換されているので，ローカルな x は使いどころがなく無視される）

通常のプログラミング言語のことを考えると，変数は即時割り当て，関数は遅延割り当て，とそれぞれ決めておくといいかもしれません．  
呼ぶ度に値が異なる変数はなんとなく気持ち悪いですし，関数も事故の元です．

なお，$=$，$:=$ はそれぞれ [Set 関数](https://reference.wolfram.com/language/ref/Set.html)，[SetDelayed 関数](https://reference.wolfram.com/language/ref/SetDelayed.html) のシンタックスシュガーです．

# 式の削除

## Clear と ClearAll

Clear 関数を使うと式を削除できます．

~~~code:clearing.nb
In[1]:= x = 1
Out[1]= 1

In[2]:= x
Out[2]= 1

Out[3]:= Clear[x]

In[4]:= x
Out[4]= x
~~~

$1$ が消えました．

Clear は = や := したものだけを削除します．

Attribute などもすべて消したい場合は ClearAll 関数を使います．

~~~code:clearing.nb
In[5]:= f[x_] := -3 x

In[6]:= SetAttributes[f, Listable]

In[7]:= ?f
Out[7]= Symbol
        Global`f
        Definitions f[x_] := -3 x
         Attributes {Listable}
          Full Name Global`f

In[8]:= Clear[f]
Out[8]= Symbol
        Global`f
        Attributes {Listable}
         Full Name Global`f

In[9]:= ClearAll[f]

In[10]:= ?f
Out[10]= Symbol
         Global`f
         Full Name Global`f
~~~

Clear や ClearAll では中身を消せるものの，Global\`f といった存在は残ります．

ClearAll は Clear の上位互換なので ClearAll してから Clear する必要はありません．

ちなみに，Attribute だけを削除するには [ClearAttributes 関数](https://reference.wolfram.com/language/ref/ClearAttributes.html) など専用の関数があります．

## Unset

Unset 関数を使っても中身を消すことができます．

Unset 関数には =. というシンタックスシュガーがあります．

~~~code:clearing.nb
In[11]:= y = 1
Out[11]= 1

In[12]:= y =.

In[13]:= y
Out[13]= y
~~~

Clear や ClearAll と同様に Global\`y といった存在は残ります．

## Remove

Clear や ClearAll、Unset では存在が残るのでした．  
それらも含めて抹消するには Remove 関数を使います．

~~~code:clearing.nb
In[14]:= z = -1
Out[14]= -1

In[15]:= Remove[z]

In[16]:= ?z
Out[16]= Missing[UnknownSymbol, z]
~~~

Remove（と Clear、ClearAll）は引数を文字列で受け取ることができます．

先ほど，私たちが割り当てた式には Global\` という接頭語がついていると言いました．  
ワイルドカードとして * が使えるので，"Global\`*" とするとすべての式を抹消できます．

~~~code:clearing.nb
In[17]:= Remove["Global`*"]

In[18]:= ?Global`*
Out[18]= Missing[UnknownSymbol, Global`*]
~~~

私たちが割り当てたすべての式が消えてしまいました．

? についても同様に，?Global`* とすると割り当てたすべての式の情報を列挙させることができます．
