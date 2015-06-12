# color-stringify [![Build Status](https://travis-ci.org/dfcreative/color-stringify.svg?branch=master)](https://travis-ci.org/dfcreative/color-stringify) [![Code Climate](https://codeclimate.com/github/dfcreative/color-stringify/badges/gpa.svg)](https://codeclimate.com/github/dfcreative/color-stringify)

Stringify passed color values to a color string.

`$ npm install color-stringify`

```js
var stringify = require('color-stringify');

stringify([120,100,100,.4], 'hsl'); //hsla(120, 100%, 100%, .4)
```

## API

### `stringify(<values>, <type>?)`

`<values>` is an array.

`<type>` is a string, optional. By default - `'rgb'`.

Supported types:

* [x] `'hex'` — `#RRGGBB` or `#RGB` if possible.
* [x] `'keyword'` — `red`, see [the list of supported names](http://npmjs.org/package/color-name).
* [x] `'percent'` — `rgb(10%, 20%, 30% [,a])`.
* [x] `'adobe1'` — `R:0, G:0, B:0`.
* [x] `'adobe2'` — `(R0 / G0 / B0)`.
* [ ] `'websafe'` — [request feature](/issues).
* [ ] `'pantone'` — [request feature](/issues).
* [x] Any other type is stringified as `<type>(<a>, <b>, <c>, ...)`.


[![NPM](https://nodei.co/npm/color-stringify.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/color-stringify/)