---
layout: "page"
title: "Ideas"
subtitle : "Ideas that I got in the wile"
permalink: "/ideas/"
feature-img: "assets/img/pexels/computer.jpeg"
tags: [Ideas]
---

<ul>
  {% for post in site.posts %}
    {% if post.categories contains "Ideas" %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <div>
          <small>Published : <em>{{ post.date | date: "%a, %b %d, %Y" }}</em></small>
        </div>
      </li>
    {% endif %}
  {% endfor %}
</ul>
