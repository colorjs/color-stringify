# color-stringify [![test](https://github.com/colorjs/color-stringify/actions/workflows/test.js.yml/badge.svg)](https://github.com/colorjs/color-stringify/actions/workflows/test.js.yml) [![size](https://img.shields.io/bundlephobia/minzip/color-stringify?label=size)](https://bundlephobia.com/result?p=color-stringify) ![stable](https://img.shields.io/badge/stability-stable-green)

Stringify passed values into a color string.

`$ npm install color-stringify`

```js
import stringify from 'color-stringify';

stringify([120,100,100,.4], 'hsl'); //hsla(120, 100%, 100%, 0.4)
```

## API

### `stringify(<values>, <type>?)`

`<values>` is an array or an object from [`color-parse`](https://npmjs.com/color-parse)

`<type>` is an optional string:

* [x] `'hex'` — `#RRGGBB` or `#RGB` if possible.
* [x] `'keyword'` — `red`, see [the list of supported names](http://npmjs.org/package/color-name).
* [x] `'percent'` — `rgb(10%, 20%, 30%, 0.1)`.
* [x] `'adobe1'` — `R:0, G:0, B:0`.
* [x] `'adobe2'` — `(R0 / G0 / B0)`.
* [ ] `'websafe'` — [request feature](https://github.com/colorjs/color-stringify/issues/new/?title=Websafe%20type).
* [ ] `'pantone'` — [request feature](https://github.com/colorjs/color-stringify/issues/new/?title=pantone%20type).
* [x] `undefined` — `rgba(10, 20, 30, 0.2)`.
* [x] Any other string — `<type>(<value1>, <value2>, <value3>, ...)`.
