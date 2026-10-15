---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* PhD, Earthquake Geology, University of Nevada, Reno *(in progress)*
* M.Sc., Earth Science, University of Auckland, 2024
* B.Sc., Geology and Geography, University of Otago, 2021

Positions & Service
======
* PhD Student, Nevada Seismological Laboratory, University of Nevada, Reno
* Co-Editor, *Geoscientist Aotearoa*, Geoscience Society of New Zealand Executive Committee (2024–present)

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>

Outreach
======
  <ul>{% for post in site.outreach reversed %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% endfor %}</ul>
