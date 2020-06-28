---
layout: "post"
title: "Blog setup"
feature-img: "assets/img/pexels/computer.jpeg"
date: 2020-06-13
categories: [Tutorial]
tags: [blog, Docker, jekyll, ssl, less-encript]
excerpt_separator: <!--more-->
---

This guied has all the step that I use to create this blog.
<!--more-->

List of technologies used in this project:

* Jekyll
* less encript
* nginex
* docker
* ubuntu
* docker-compuse


The Diagram of the arquitecture is:

()[img]

### Technologies

#### Jekyll :

[Jekyll](https://jekyllrb.com) is a Ruby framework to create static pages and blogs in a simple way. And the communita has create a lot of templates. This blog is base in the tema [Type-on-Strap](https://github.com/sylhare/Type-on-Strap) with my ome configuration.

The project file configuration is:

```python
BlogNotes.dev
├── _data  # configuration data in YML format
├── _drafts # drafts post
├── _includes # all HTML/Makedown parts of layouts
├── _layouts # all the layouts used to generate pages
├── _posts # All posts in the blog
├── _sass # all the pre-process steyl sheet
├── _site # The full site compile
├── assets # The extra files for extra funtionalities in the web page
│   ├── css # sass file or css
│   ├── data # data of the post or other web pages
│   ├── fonts # fonts used in the all teh blog
│   ├── img # Images
│   └── js # javascript
└── pages # the main pages
_config.yml # main configuration file
intex.md # home page
```

The Geme configuration is:

```ruby
source "https://rubygems.org"
gem "jekyll"

# plugins
group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
end
```

#### Nginx:

```nginx
upstream blognotes {
    server blognotes:4001 weight=1;
}

server {
    listen 80;
    server_name blognotes.dev;
    server_tokens off;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name blognotes.dev;
    server_tokens off;

    ssl_certificate /etc/letsencrypt/live/blognotes.dev/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/blognotes.dev/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass  http://blognotes;
        proxy_set_header    Host                $http_host;
        proxy_set_header    X-Real-IP           $remote_addr;
        proxy_set_header    X-Forwarded-For     $proxy_add_x_forwarded_for;
    }
}
```


#### docker:

Docker file for 

```docker
FROM jekyll/jekyll:latest

ENV APP_HOME /srv/jekyll

CMD [ "jekyll", "serve" ]
```

#### ubuntu:
#### docker-compuse:
```yaml
version: '3'

services:
  blog:
    hostname: blognotes
    build:
      context: ./Blognotes/docs
      dockerfile: ./Dockerfile
    depends_on:
      - nginx
      - certbot
    ports:
      - "4001:4000"
    volumes:
      - ./Blognotes/docs:/srv/jekyll
  nginx:
    image: nginx
    restart: unless-stopped
    volumes:
      - ./data/nginx:/etc/nginx/conf.d
      - ./data/certbot/conf:/etc/letsencrypt
      - ./data/certbot/www:/var/www/certbot
    ports:
      - "80:80"
      - "443:443"
    command: "/bin/sh -c 'while :; do sleep 6h & wait $${!}; nginx -s reload; done & nginx -g \"daemon off;\"'"
  certbot:
    image: certbot/certbot
    restart: unless-stopped
    volumes:
      - ./data/certbot/conf:/etc/letsencrypt
      - ./data/certbot/www:/var/www/certbot
    entrypoint: "/bin/sh -c 'trap exit TERM; while :; do certbot renew; sleep 12h & wait $${!}; done;'"
```
#### let's encript:

### reference:

[1] - [nginx and let's encript](https://medium.com/@pentacent/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71)

[2] - [Blog Template](https://github.com/sylhare/Type-on-Strap)
