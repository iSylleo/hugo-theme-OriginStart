<h1 align="center"> 🚀OriginStart </h1>

<p align="center"> A journey of a thousand miles begins with one step. </p>

---

> [**OriginStart**](https://github.com/SylleoYr/hugo-theme-OriginStart) is a responsive theme for Hugo which is forked and modified from [freshstart](https://github.com/rz3n/hugo-theme-freshstart). OriginStart provides you a clean and easy-to-use start page for your Internet experience.

[GitHub](https://github.com/SylleoYr/hugo-theme-OriginStart) | [Gitee](https://gitee.com/SylleoYr/hugo-theme-OriginStart)

<!-- compatible browsers -->

## Features

- Responsive design
- Custom search engines
- Poetry sentences
- Custom theme color & background
- Blur theme (not compatible with all browsers)
- Weather plugin
- Inject CSS & JS

> **For using blur theme on Firefox:** if you are using Firefox, your need to configure `layout.css.backdrop-filter.enabled` to true to enable the blur effects.
> 1. Open [about:config](about:config) in Firefox browser;
> 2. Search the option `layout.css.backdrop-filter.enabled` and set it to `true`;
> 3. Reload your site.

## Screenshot

**useBlur: false**

![useBlur = false](./images/noblur.png)

**useBlur: true**

![useBlur = true](./images/blur.png)

## Installation & Usage

### Preconditions

- Basic command line & git skills
- Git installed
- Hugo (version >= 0.74.3) installed
- A text editor you like

### Install the theme

Inside your Hugo site directory run:

```bash
$ git submodule add https://github.com/SylleoYr/hugo-theme-OriginStart themes/OriginStart
```
### Usage

Copy the contents in the `exampleSite` directory into your site root directory, and then:

**To preview:**

```bash
$ hugo server
```

Then open `http://localhost:1313` in your browser to preview the site.

**To build:**

```bash
$ hugo
# or
$ hugo --minify
```

It will generate the static files in the `public` directory.

## Configuration

See [`config.yaml`](./exampleSite/config.yaml).

> **:information_source: Note:** the example site is prompted with a message, please disable it in your production environment:
> - please delete `alert.js` in `static/js/` directory,
> - or set the `activated` property of `Alert` of `customJS` to false, or delete this item.

## Thanks

Thanks to the following projects (unordered):

* [Font Awesome](https://fontawesome.com/icons?d=gallery)
* [Hugo](https://gohugo.io)
* [freshstart](https://github.com/rz3n/hugo-theme-freshstart)
* [Hitokoto](https://hitokoto.cn/)
* [今日诗词](https://www.jinrishici.com/)
* [HeWeather](https://www.heweather.com/)
* [ribbon.js](https://github.com/hustcc/ribbon.js)
* The search engine list style refers to [CrazyBoyM/geeknav](https://github.com/CrazyBoyM/geeknav).

## License

This project is licensed under [MIT](./LICENSE).
