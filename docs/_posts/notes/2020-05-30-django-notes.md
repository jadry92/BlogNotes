---
layout: post
title: "Notes Django"
feature-img: "assets/img/pexels/computer.jpeg"
date: 2020-06-01
categories: [Notes]
tags: [programming, Backend, python, django]
---

### Abstrac models
An abstrac models is base model a class that could be used as base to create model more complex. But this model is not represent a table in the database. To create an abstrac class model I have to create a class Meta inside the class model. E.g

---
# Django
from django.db import models

class BaseModel(models.Model):
    """Abstrac Class"""

    created = models.DateTimeField(
        'created at',
        auto_now_add=True,
        help_text='Date time on which the object was created'
    )
    modified = models.DateTimeField(
        'modified at',
        auto_now=True,
        help_text='Date time on which the object was last modified'
    )

    class Meta:
        """ Meta Obtions """
        abstract = True
        get_latest_by = 'created'
        ordering = ['-created', '-modified']

class Student(BaseModel):
    name = models.CharField()

    class Meta(BaseModel.Meta):
        db_table = 'student_role'
---

### Proxy models
Proxy models allow you to inherit funtionality from models. And to add custum funtionality.
e.g:

---
class Person(models.Model):
    first_name = models.CharField()
    last_name = models.CharField()

class MyPerson(Person):
    class Meta:
        proxy = True

    def say_something(self, msg):
        print(msg)

# good
johan = MyPerson.objects.get(id == 1)
johan.say_something('hi there')
# error
sebas = MyPerson.objects.get(id == 1)
sebas.say_something('hi there')
---
