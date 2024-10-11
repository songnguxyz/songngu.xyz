---
layout: default
---

<div id="projects" class="container">
  <div class="row">
    <div class="col-sm">
        <a class="project" id="project-wlhmn" href="https://lophocmatngu.wiki/" data-toggle="tooltip" data-placement="top" title="Wiki Lớp Học Mật Ngữ" >
            <div class="logo"></div>
        </a>
    </div>
    <div class="col-sm">
        <a class="project" id="project-wcrkvn" href="https://cookierunkingdom.fandom.com/vi/" data-toggle="tooltip" data-placement="top" title="Wiki Cookie Run Kingdom Tiếng Việt">
            <div class="logo"></div>
        </a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
        <a class="project" id="project-waltp" href="https://ailatrieuphu.fandom.com/vi/" data-toggle="tooltip" data-placement="top" title="Wiki Ai Là Triệu Phú" >
            <div class="logo"></div>
        </a>
    </div>
    <div class="col-sm">
        <a class="project" id="project-wcg" href="https://cg.songngu.xyz/" data-toggle="tooltip" data-placement="top" title="Wiki Custom Gameshows">
            <div class="logo"></div>
        </a>
    </div>
  </div>
</div>

<div id="posts">
    <div class="row">
        {% for post in site.posts limit:2 %}
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{post.title}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Post &#8226; {{ post.date | date: "%-d %B %Y" }}</h6>
                    <p class="card-text">{{post.excerpt | strip_html | truncatewords:20}}</p>
                    <a href="{{post.url}}" class="card-link">Đọc bài</a>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
</div>