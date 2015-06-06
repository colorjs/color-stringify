var stringify = require('./');
var assert = require('chai').assert;

describe('color-string tests', function () {
	it('generators', function () {
		assert.equal(stringify([255, 10, 35], 'hex'), "#ff0a23");

		assert.equal(stringify([255, 10, 35]), "rgb(255, 10, 35)");
		assert.equal(stringify([255, 10, 35, 0.3]), "rgba(255, 10, 35, 0.3)");
		assert.equal(stringify([255, 10, 35, 0.3]), "rgba(255, 10, 35, 0.3)");
		assert.equal(stringify([255, 10, 35, 0.3]), "rgba(255, 10, 35, 0.3)");
		assert.equal(stringify([255, 10, 35, 0.3]), "rgba(255, 10, 35, 0.3)");
		assert.equal(stringify([255, 10, 35, 1.0]), "rgb(255, 10, 35)");
		assert.equal(stringify([255, 10, 35, 0]), "rgba(255, 10, 35, 0)");

		assert.equal(stringify([280, 40, 60], 'hsl'), "hsl(280, 40%, 60%)");
		assert.equal(stringify([280, 40, 60, 0.3], 'hsl'), "hsla(280, 40%, 60%, 0.3)");
		assert.equal(stringify([280, 40, 60, 0.3], 'hsl'), "hsla(280, 40%, 60%, 0.3)");
		assert.equal(stringify([280, 40, 60, 0.3], 'hsl'), "hsla(280, 40%, 60%, 0.3)");
		assert.equal(stringify([280, 40, 60, 0.3], 'hsl'), "hsla(280, 40%, 60%, 0.3)");
		assert.equal(stringify([280, 40, 60, 0], 'hsl'), "hsla(280, 40%, 60%, 0)");
		assert.equal(stringify([280, 40, 60], 'hsl'), "hsl(280, 40%, 60%)");

		assert.equal(stringify([280, 40, 60], 'hwb'), "hwb(280, 40%, 60%)");
		assert.equal(stringify([280, 40, 60, 0.3], 'hwb'), "hwb(280, 40%, 60%, 0.3)");
		assert.equal(stringify([280, 40, 60, 0.3], 'hwb'), "hwb(280, 40%, 60%, 0.3)");
		assert.equal(stringify([280, 40, 60, 0], 'hwb'), "hwb(280, 40%, 60%, 0)");
	});
});
