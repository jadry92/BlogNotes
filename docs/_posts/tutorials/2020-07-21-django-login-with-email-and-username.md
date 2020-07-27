---
layout: "post"
title: "Django login with email and username"
category: tutorials
date: 2020-07-21
hide: False
excerpt_separator: <!--more-->
feature-img: "assets/img/pexels/computer.jpeg"
tags: [django, python]
---

This is a simple solution to create custume logins with django.

<!--more-->

Working in my project of [AIgram](https://github.com/jadry92/Platzigram-project), I realise that Instagram allows users to login with their username, email and phone number. So I challenge my self to achieve that without breaking the Django authentication structure. Searching about on the internet I found [this post](https://stackoverflow.com/questions/25316765/log-in-user-using-either-email-address-or-username-in-django) where they show how to create multiples login checks using the Django authentication. My implementation of that I summarise in the next steps.

First, add the authentication "backend" class in the "settings.py" that class has your login logic (login with email, log in with phone number, so on.).

```python
...
AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'users.backends.EmailModelBackend'
]
...
```
In this case, I add the default "ModelBackend" which allows me to log in with username and "EmailModelBackend" which is my costume.

Second, create a python file "backends.py" in the "users" app with the class "EmailModelBackend".
This class inherit from "ModelBackend" and re-write the method "authenticate" as is shown in the code.

```python
# Django
from django.contrib.auth.backends import ModelBackend
# Models
from users.models import User

class EmailModelBackend(ModelBackend):
    """
    authentication class to login with the email address.
    """

    def authenticate(self, request, username=None, password=None, **kwargs):

        if '@' in username:
            kwargs = {'email': username}
        else:
            return None
        if password is None:
            return None
        try:
            user = User.objects.get(**kwargs)

        except User.DoesNotExist:
            User.set_password(password)

        else:
            if user.check_password(password) and self.user_can_authenticate(user):
                return user

```

I re-write the method  base on the base [code](https://github.com/django/django/blob/3d16496037fbb8a6bbc6b6e354fa4f5eb65e6cea/django/contrib/auth/backends.py#L9)

To Have In mind:
---

* The Django authentication checks all the backends and which first allow to authenticate will use.
* The stronger of the system is equal at the weakest point.
