---
layout: home
title: Welcome to My GitHub Pages Site
---

This is the homepage of my site hosted at [deanpretorius.github.io](https://deanpretorius.github.io).

## Recent Posts

{% for post in site.posts %}
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p>{{ post.date | date: "%B %d, %Y" }}</p>
{% endfor %}

Feel free to explore!