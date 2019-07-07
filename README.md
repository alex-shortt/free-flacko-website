![AWGE Logo](https://dwvo2npct47gg.cloudfront.net/images/landing.jpg "AWGE")

# awge-website
Website for awgeshit.com

Development: Alex Shortt
Creative + Design: Ilya Zaidze

# Code Format
---
1. **Highly** recommended to use [Atom IDE](https://ide.atom.io/) with the following packages for faster/unified development:
    * [atom-beautify](https://github.com/Glavin001/atom-beautify) with default settings for formatting
    * [atom-minify](https://github.com/armin-pfaeffle/atom-minify) with for minifying main.js
    * [sass-autocompile](https://github.com/armin-pfaeffle/sass-autocompile) for compliling main sass file
2. Scss
    1. Write code in respective scss file based on style scope (global, animation, or individual page)
    2. If it's for a specific page, prefix each with the page name, such as `about-classname` for about page. See other files for examples
    3. When done editing and saving scss files, compile `main.scss` using `ctrl+shift+c` and it will auto-generate the new `main.min.css` file
3. Javascript
    1. I'm sorry.
    2. Use jQuery everywhere you can,&nbsp;*especially*&nbsp;for simple document queries
    3. When done editing and saving `main.js`, compile using `ctrl+shift+m` and it will auto-generate new `main.min.js` file
4. HTML
    1. When you create a new HTML page, you must create the HTML file in `/pages`, then add entries in the `initHash()` function and `loadPage()`, following the format of other pages.
    2. Structure classnames in a hierarchical fashion with long and annoying prefixes. You may end up with long classnames (see: `contact-contact-label-container`), but that is the code style that keeps everything uniform. So keep it that way.
    3. Use classnames for styles, never ID's
