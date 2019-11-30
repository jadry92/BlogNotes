---
layout: post
title: Regular Expressions
category: Notes
---

"Regular Expressions are the key tools that all Developer should have in their pocket", it's the phrase with the teacher [Alberto Alcocer](https://twitter.com/beco) repat constantly in the course of [regular expressions](https://platzi.com/clases/expresiones-regulares/) in Platzi.

A Regex (Regular Expression) is a patter which is possible to filter strings without using a lot of resources. Regexes are commonly used to filter URL, phone numbers, emails and so on.

### Example 1:

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

The first thing that we have to know about Regexes is that each character or "Class" has a specific meaning. For example, the “.” class means whatever character.

### Example 2:

[`hola`] - >  [`.`] - >  [`h`] [`o`] [`l`] [`a`] \
where:\
[**input**] - > [**Filter**] - > [**Result**]

As we can see each letter making matched with the Regex.

The basics classes are in the next  CheatSheets. We should have in mind all of it to read and create our Regex.

#### Basics Class:
```
. -> whatever caracter
\w - > find any conjunct that looks like as word
\d - > find all the digits
\s - > spaces in blank
```

Also we can create our classes using `[]` 
#### Costume Classes:
``` 
[0-9] ~ \d
[0-9a-zA-Z_] ~ \w
```

### Example 3:

[`hola`] - >  [`[oa]`] - >  [`o`] [`l`] \
where:\
[**input**] - > [**Filter**] - > [**Result**]

And we can repiet class usin the coutres
####  General Counters:
```
* -> zero or more (greedy)
+ -> one or more
? -> zero or one
```

####  Extra:
```
^ - > beging of the line
$ -> end of the line
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgwNTE2MDIyNCwtOTY2MjAwOTY3LC0xOD
U1MTg1NTQ4LC00Mjk3NDM4MTcsLTUwNzY5NjgwNyw2MTEzNjMw
MDcsLTM2MDY4Njc4NSwtMTIwODMyMjkwMyw3ODkwMzI4LDMxMD
gzNDQ3OSw0MTk2MDQ2MywxODk4MzU0OTg3LDgyNDk2NzE4MCwt
MzUzNjk1NDk1LC02MDUxMTkxMDRdfQ==
-->