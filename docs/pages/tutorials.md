---
layout: "page"
title: "Tutorials"
permalink: "/tutorials/"
subtitle: "Tutorials that I find usefull"
feature-img: "assets/img/pexels/computer.jpeg"
tags: [Tutorials]
---

<ul>
  {% for post in site.posts %}
    {% if post.categories contains "Tutorials" %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <div>
          <small>Published : <em>{{ post.date | date: "%a, %b %d, %Y" }}</em></small>
        </div>
      </li>
    {% endif %}
  {% endfor %}
</ul>
