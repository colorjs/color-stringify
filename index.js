/**
 * @module  color-stringify
 */

module.exports = stringify;

var names = require('color-name');


/**
 * Stringify color to any target
 *
 * @param {array} values An array of values to stringify, by default - rgb[a]
 * @param {string} type A color space to stringify values to. By default - rgb.
 */
function stringify (values, type) {
	if (type === 'hex') {
		return '#' + values.slice(0,3).map(function (value) {
			return (value < 16 ? '0' : '') + value.toString(16);
		}).join('');
	}

	type = type || 'rgb';

	var isAlphaSpace = /rgb|hs[lv]/.test(type);

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
	if (type[0] === 'h') {
		res += '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
	}
	else {
		res += '(' + values.join(', ');
	}

	res += ( alpha < 1 ? ', ' + alpha : '' ) + ')';

	return res;
}