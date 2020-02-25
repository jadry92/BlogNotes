---
title: "Notes"
default: "notes"
---
## Notes:

<ul>
  {% for post in site.posts %}
    {% if post.categories contains "Notes" %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <div>
          <small>Published : <em>{{ post.date | date: "%a, %b %d, %Y" }}</em></small>
        </div>
      </li>
    {% endif %}
  {% endfor %}
</ul>
