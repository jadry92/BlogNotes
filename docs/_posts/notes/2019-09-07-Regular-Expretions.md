---
layout: post
title: Regular Expressions
category: Notes
---

"Regular Expressions are the key tools that all Developer should have in their pocket", it's the phrase with the teacher [Alberto Alcocer](https://twitter.com/beco) repat constantly in the course of [regular expressions](https://platzi.com/clases/expresiones-regulares/) in Platzi.

A Regex (Regular Expression) is a patter which is possible to filter strings without using a lot of resources. Regexes are commonly used to filter URL, phone numbers, emails and so on.
Example:
If we would like to know if the next emails are valid for a registered in a specific platform.
```
blue_keep@windous.fail
asd@qwe@gmail.como
```
With the next Regex:
```
^[\w\._]{1,30}@[\w\.\-]+\.[a-z]{2,5}$
```
We would find that:

![example 1]({{ "/assets/img/posts/notes/2019-09-07-Regular-Expretions/example.png" | relative_url }})

But what does it mean all those weird characters? :unamused: :expressionless:

The first thing that we have to now about Regexes is that each character or "Class" has a specific meaning. For example, the “.” class means whatever character.
### Example 2:

[`hola`] - >  [`.`] - >  [`h`] [`o`] [`l`] [`a`]
where:
[**input**] - > [**Filter**] - > [**Result**] 

As we can see each letter making matched with the Regex.

The basics classes are in the next  CheatSheets that we should have in mind to read and create our Regex.

#### Class:
```
. -> whatever caracter
\w - > find any conjunct that looks like as word
\d - > find all the digits
\s - > spaces in blank
[0-9] ~ \d
[0-9a-zA-Z_] ~ \w
^ - > beging of the line
$ -> end of the line
```
Where `[]` are used to create a spe
#### Counters:
```
* -> greedy
+ -> one or more
? -> zero or one
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0MDgzODg2NTIsLTE4NTUxODU1NDgsLT
QyOTc0MzgxNywtNTA3Njk2ODA3LDYxMTM2MzAwNywtMzYwNjg2
Nzg1LC0xMjA4MzIyOTAzLDc4OTAzMjgsMzEwODM0NDc5LDQxOT
YwNDYzLDE4OTgzNTQ5ODcsODI0OTY3MTgwLC0zNTM2OTU0OTUs
LTYwNTExOTEwNF19
-->