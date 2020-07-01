---
layout: "page"
title: "Notes"
permalink: "/notes/"
feature-img: "assets/img/pexels/computer.jpeg"
tags: [Notes,blog]
---

<ul>
  {% for post in site.posts %}
    {% if post.categories contains "Notes" %}
      {% unless post.hide %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <div>
            <small>Published : <em>{{ post.date | date: "%a, %b %d, %Y" }}</em></small>
          </div>
        </li>
      {% endunless %}
    {% endif %}
  {% endfor %}
</ul>
