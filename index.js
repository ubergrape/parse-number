/**
 * Parse the first number from a string.
 *
 * @param {Str} str
 *
 * @return {Integer}
 */
module.exports = function parseNumber(str) {
	var match = String(str).match(/-?\d+(?:\.\d+)?/);
	return match ? match[0] / 1 : 0;
};