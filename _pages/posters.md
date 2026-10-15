---
title: "Research Posters"
permalink: /posters/
author_profile: true
---

<!-- To add a poster: upload the image to images/posters/ and copy one of the blocks below. -->
<div class="poster-grid">
{% for i in (1..7) %}
  <figure>
    <a href="{{ '/images/posters/poster-' | append: i | append: '.jpg' | relative_url }}"><img src="{{ '/images/posters/poster-' | append: i | append: '.jpg' | relative_url }}" alt="Research poster {{ i }}"></a>
    <figcaption>Poster title, Conference, Year</figcaption>
  </figure>
{% endfor %}
</div>
