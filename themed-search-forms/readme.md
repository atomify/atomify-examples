Atomify Example App
===================

### Description

This is a simple example app to show off what a [atomify](http://github.com/techwraith/atomify) app might look like. If you want to try it out yourself:

```
git clone git@github.com:Techwraith/atomify-example.git
cd atomify-example
npm install
node server.js
open http://localhost:3000
```

### App structure

The app should be pretty easy to get around in the basic structure looks like this:

```
ui/
|-entry.js
|-entry.css
static/
node_modules/
index.html
server.js
```

#### `server.js`

Serves the app on these routes

- `/`: serves up `index.html`
- `/bundle.js`: serves the bundled js
- `/bundle.css`: serves the bundled css
- `/*`: serves up any static files in `static`

#### `ui/entry.js`

Is the entry point for the Atomify bundled js. This just uses browserify under the hood, so require modules like you normally would. If you'd like to reuire a handlebars template, do that like: `require('template.html.hbs')`.

#### `ui/entry.css`

Is this entry point for the Atomify bundled css. This uses npm-css and rework under the hood.

You'll notice that some variables were injected into the css in `server.js`, you can use those like: `color: var(variableName);`.

Any css in an `@import` statement will be inlined. If the text passed into the `@import` statement is a module name or a directory, it's style is imported.

Any module loaded this way needs to either have an `index.css` file in it's root or a `style` property in it's `package.json`.
