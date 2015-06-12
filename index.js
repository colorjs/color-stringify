/**
 * @module  color-stringify
 */

module.exports = stringify;


var names = require('color-name');


/** Inverted color names */
var nameValues = {};
for (var name in names) {
	nameValues[names[name]] = name;
}


/**
 * Stringify color values to any target format
 *
 * @param {array} values An array of values to stringify, by default - rgb[a]
 * @param {string} type A color space to stringify values to. By default - rgb.
 */
function stringify (values, type) {
	if (type === 'hex') {
		var res = values.slice(0,3).map(function (value) {
			return (value < 16 ? '0' : '') + value.toString(16);
		}).join('');

		if (res[0] === res[1] && res[2] === res[3] && res[4] === res[5]) res = res[0] + res[2] + res[4];

		return '#' + res;
	}

	if (type === 'keyword') {
		return nameValues[values];
	}

	var isPercent = /percent|^h/i.test(type);

	type = !type || /percent/i.test(type) ? 'rgb' : type;

	var isAlphaSpace = /rgb|hs[lv]/i.test(type);

	//convert rgb to percents
	if (isPercent && type === 'rgb') {
		values = values.map(function (value) {
			return value * 100 / 255;
		});
	}

	//normalize space name
	if (isAlphaSpace && type[type.length - 1] === 'a') {
		type = type.slice(0,-1);
	}

	//normalize alpha
	var alpha = 1;
	if (values.length > type.length) {
		alpha = values.pop();
	}

	//decide the space name
	var alphaPf = isAlphaSpace && alpha < 1 ? 'a' : '';

	//<hue> case requires percents
	var res = type + alphaPf;

	res += '(' + values.map(function (value, i) {
		if (isPercent && !(type[i] === 'h')) {
			return value + '%';
		}
		else {
			return value;
		}
	}).join(', ');

	res += ( alpha < 1 ? ', ' + alpha : '' ) + ')';

	return res;
}