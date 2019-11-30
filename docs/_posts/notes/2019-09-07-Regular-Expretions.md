---
layout: post
title: Regular Expressions
category: Notes
---

"Regular Expressions are the key tools that all Developer should have in their pocket", it's the phrase with the teacher [Alberto Alcocer](https://twitter.com/beco) repat constantly in the course of [regular expressions](https://platzi.com/clases/expresiones-regulares/) in Platzi.

A Regex (Regular Expression) is a patter which is possible to filter strings without using a lot of resources. Regexes are commonly used to filter URL, phone numbers, emails and so on:
Example:
If we would like to know if the next emails are valid for a registered in a specific platform. 
```
email 1: blue_keep@windous.fail
email 2: asd@qwe@gmail.com
```
With the next Regex:
```
regex : [\w\._]{1,30}@[\w\.\-]+\.[a-z]{2,5}
```
We would find that:






```
. -> whatever ca racter
\w - > find any conjunct that looks like as word
\d - > find all the digits
\s - > spaces in blank
[0-9] ~ \d
[0-9a-zA-Z_] ~ \w
.* -> greedy all
+ -> one or more
? -> zero or one
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMzEwODM0NDc5LDQxOTYwNDYzLDE4OTgzNT
Q5ODcsODI0OTY3MTgwLC0zNTM2OTU0OTUsLTYwNTExOTEwNF19

-->