---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a PhD student in the [Nevada Seismological Laboratory](https://www.unr.edu/nsl) at the University of Nevada, Reno. My research focuses on why some faults creep and others don't using geomorphic and mineral controls.

Beyond research, I am passionate about public outreach and understanding seismic hazard in order to reduce risk and promote community resilience. Since 2022, I have been involved in numerous media and community outreach activities, inspiring K-12 students and the wider community to engage with the natural hazards we live amongst. In early 2024, I joined the Geoscience Society of New Zealand Executive Committee as the Co-Editor of the *Geoscientist Aotearoa* Magazine where I continue to share the latest geoscience news and findings to the community.

<figure class="talk-figure talk-figure--wide"><img src="{{ '/images/home-field.jpg' | relative_url }}" alt="Hannah in a trench exposure of the Lake Heron Fault"><figcaption>Trench exposure of the Lake Heron Fault, Canterbury, New Zealand. March 2026</figcaption></figure>

Latest news
------
{% include news-list.html limit=5 %}

[All news &rarr;](/news/)

Awards &amp; Grants
------
<ul class="news-list">
{% for item in site.data.awards %}
  <li><span class="news-date">{{ item.when }}</span> <span><strong>{{ item.title }}</strong>{% if item.detail %}, {{ item.detail | markdownify | remove: '<p>' | remove: "</p>" | strip }}{% endif %}</span></li>
{% endfor %}
</ul>

Education
------
* **PhD, Earthquake Geology** — University of Nevada, Reno *(in progress)*
* **M.Sc., Earth Science** — University of Auckland, 2024
* **B.Sc., Geology and Geography** — University of Otago, 2021
