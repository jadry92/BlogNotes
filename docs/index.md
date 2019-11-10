---
layout: default
---
This site contain all the notes, tutorials and ideas that I used to create career as in tech industry.
You might find post about different topics such as AI (Artificial intelligence),


<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <div>
        <small>Published : <em>{{ post.date | date: "%a, %b %d, %Y" }}</em></small>
      </div>
    </li>
  {% endfor %}
</ul>
