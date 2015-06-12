var stringify = require('./');
var assert = require('chai').assert;

describe('color-stringify', function () {
	it('color-string tests', function () {
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

		assert.equal(stringify([255, 255, 0], 'keyword'), "yellow");
		assert.equal(stringify([100, 255, 0], 'keyword'), undefined);

		//short hex
		assert.equal(stringify([0, 255, 255], 'hex'), '#0ff');
	});

	it('edge cases', function () {
		//TODO: add adobe1, adobe2 types
	});
});
