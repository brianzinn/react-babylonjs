---
---

<h1 align="center">
  Introduction
</h1>

# Gatsby Ant-Design Documentation Starter

Forked from https://github.com/cvluca/gatsby-starter-markdown.

This starter is boilerplate for (technical) documentation websites optionally accomponied by a blog (you can use it forever you want of course).

# Getting started

```
npm install gatsby -g
gatsby new my-docs https://github.com/jannikbuschke/gatsby-antd-docs
cd my-docs
npm run start
```

Visit http://localhost:8000.

Edit files in `/content/docs` and see live updates.

# Features

- [x] Ant Design
- [x] Typescript
- [x] Markdown
- [x] MDX
- [x] Syntax highlighting

# Roadmap

- [x] Add typescript
- [x] Remove Redux
- [x] General simplifications
- [x] Add mdx
- [x] Add syntax highlighting with prismjs
- [x] Improve Header UI
- [ ] Fix menu item links not showing active state
- [ ] Blog feature / second content type
- [ ] Improved typings
- [ ] Improved responsiveness
- [ ] Add Search

# Hosting

In order to host the site the **sites path** needs to be put into gatsby-config.js export object on to the property _pathPrefix_. Then run

```
npm run build
```

and copy the content of the public folder to the webspace.

# License

MIT
