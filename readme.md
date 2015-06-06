# color-stringify [![Build Status](https://travis-ci.org/dfcreative/color-stringify.svg?branch=master)](https://travis-ci.org/dfcreative/color-stringify) [![Code Climate](https://codeclimate.com/github/dfcreative/color-stringify/badges/gpa.svg)](https://codeclimate.com/github/dfcreative/color-stringify)

Stringify passed color values to a css-color string.

`$ npm install color-stringify`

```js
var stringify = require('color-stringify');

stringify([120,100,100,.4], 'hsl');

//hsla(120, 100%, 100%, .4)
```

[![NPM](https://nodei.co/npm/color-stringify.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/color-stringify/)