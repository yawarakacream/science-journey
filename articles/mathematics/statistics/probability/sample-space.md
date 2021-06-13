---
title: "標本空間"
description: "数理統計学・確率論における基本語句を纏めました．標本空間・標本点・事象や互いに排反といった語句はきちんと抑えておきましょう．基本的には集合論の「集合」を「事象」に置き換えたものです．"
---

~~~definition:基本語句

**標本空間** $\Omega$ (sample space)  
$\quad \overset{def}\iff$ 試行（trial）の起こり得る結果の集合

**標本点** (sample point)  
$\quad \overset{def}\iff$ 標本空間の要素

**事象** (event)  
$\quad \overset{def}\iff$ 標本空間の部分集合

---

**空事象** $\varnothing$  
$\quad \overset{def}\iff$ 起こり得ない事象

**和事象** $A \cup B$  
$\quad \overset{def}\iff$ $A$ と $B$ の少なくとも一方が起こる事象

**積事象** $A \cap B$  
$\quad \overset{def}\iff$ $A$ と $B$ が同時に起こった事象

**差事象** $A - B$  
$\quad \overset{def}\iff$ $A$ から $B$ を除いた事象

**余事象** $A^{c}$  
$\quad \overset{def}\iff$ $A$ が起こらない事象

$A$ と $B$ が **互いに排反**  
$\quad \overset{def}\iff$ $A \cup B = \varnothing$

~~~

基本的に集合論の「集合」を「事象」に言い換えただけです．  
差事象は集合論の差集合でよく使う記号 $A \setminus B$ よりも $A - B$ の方がメジャーなようです．
