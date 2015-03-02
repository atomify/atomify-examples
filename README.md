atomify-examples
================

Examples demonstrating Atomify's capabilities and options




## Mini Tutorial
### How to build a re-usable component

Check the [atomify.github.io/atomify-examples](http://serapath.github.io/atomify-examples) of this repository and follow the slide to get a working example.

The slide also explain how to do theming on a component level. Please examine the source code you create by following the slides and open an issue if you have any questions.


#### How atomify works
  * __Atomify turtles all the way down :-)__, which means:

    1. It will watch `index.js` and all `required()` __javascript modules__ and __template__ files required and inlined as strings, to produce a `APP.bundle.js` file.

    2. In addition it will watch the `index.css` and all `@import urls` _(which can be normal urls or names of other __npm installed components__ similar to the current one) to produce a `APP.bundle.css` file.

    2. It will then `onFileChange` recompile `APP.bundle.js` and `APP.bundle.css` and inject it live into __LiveStyleGuide__ @ `./index.html`,
    which makes it very convenient in combination with [Github Pages](https://pages.github.com/). (check out how to set up a [__Project site__](https://pages.github.com/)),
    in order to _test_ & _demo_ a component to other developers.
