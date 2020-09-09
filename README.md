# freshStart
> A clear and responsive theme for [Hugo](//gohugo.io/) witch provides a dynamic environment to manage bookmarks in a clean and fast start page.

**Some changes are made in this branch:** 

- Add background configuration in [`config.yaml`](#Configuration), now you can use image from the Internet as your background.
- Add [hitokoto](https://hitokoto.cn/)
- Modify search form for supporting multiple search engines, now you can:
  - Group search engines;
  - Have a better look with multiple search engines.
  - Styles of search form are inspired by [geeknav](https://github.com/CrazyBoyM/geeknav).
- Files changed:
  - new file:   .gitignore
  - modified:   layouts/_default/baseof.html
  - modified:   layouts/index.html
  - modified:   layouts/partials/head.html
  - modified:   static/css/main.css
  - new file:   static/css/search.css
  - new file:   static/js/init.js
  - new file:   static/js/search.js
  - ...

## Screenshot
![startPageColumns = false](./images/screenshot.png)


## Installation
Inside your Hugo site directory run:
```
$ git submodule add https://github.com/rz3n/hugo-theme-freshstart.git themes/freshstart
```
For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.


## Configuration
Example `config.yaml`:

```yaml
baseURL: https://example.com
languageCode: en-us
hasCJKLanguage: true
title: Your site title
theme: freshstart

params:
  author: Ricardo Franzen
  description: rfranzen.com
  favicon: /favicon.ico
  background: https://image.example.com/

  # Type of hitokoto, for more information: 
  # see https://developer.hitokoto.cn/sentence/#%E5%8F%A5%E5%AD%90%E7%B1%BB%E5%9E%8B%EF%BC%88%E5%8F%82%E6%95%B0%EF%BC%89
  # for multiple types, use & to connect them
  hitokoto: c=i&c=h

  # CDN for font-awesome 5.14.0 all.min.css.
  # Default is https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css.
  fontawesomeCDN: 

  searchEngines:
    # Please ensure the group name and the search engine name is unique.
    - group: Default
      icon: fas fa-search
      items:
        - name: Baidu
          activated: true
          url: https://www.baidu.com/s?wd={search}&ie=utf-8
        - name: Google
          activated: true
          url: https://google.com/search
        - name: DuckDuckGo
          activated: true
          url: https://www.duckduckgo.com
        - name: Bai
          activated: true
          url: https://www.baidu.com/s?wd={search}&ie=utf-8
        - name: Goog
          activated: true
          url: https://google.com/search
    - group: Academic
      icon: fas fa-search
      items:
        - name: Gole
          activated: true
          url: https://google.com/search
        - name: DckGo
          activated: true
          url: https://www.duckduckgo.com
    - group: Music
      icon: fas fa-search
      items:
        - name: Gogle
          activated: true
          url: https://google.com/search
        - name: ckDuckGo
          activated: true
          url: https://www.duckduckgo.com
    - group: Movie
      icon: fas fa-search
      items:
        - name: Googl
          activated: true
          url: https://google.com/search
        - name: DucuckGo
          activated: true
          url: https://www.duckduckgo.com


  nav:
    - name: Gmail
      icon: fas fa-envelope red
      url: https://mail.google.com

    - name: Twitter
      icon: fab fa-twitter aqua
      url: https://twitter.com
    
    - name: Facebook
      icon: fab fa-facebook blue
      url: https://facebook.com


  bookmarks:
    - group: dev
      icon: fas fa-code-branch
      items:
        - name: cloudflare
          url: https://cloudflare.com
        - name: codepen.io
          url: https://codepen.io
        - name: github
          icon: fab fa-github
          url: https://github.com
        - name: gitlab
          icon: fab fa-gitlab
          url: https://gitlab.com

    - group: docs
      icon: fas fa-folder-open
      items:
        - name: docker
          url: https://docs.docker.com/

        - name: puppet
          url: https://puppet.com/docs/puppet/latest/

        - name: terraform
          url: https://www.terraform.io/docs/
    
    - group: tools
      icon: fas fa-tools
      items:
        - name: some site
          url: #
        - name: another site
          url: #
```

## Sources
* Icons from [Font Awesome](https://fontawesome.com/icons?d=gallery)
