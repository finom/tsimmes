(function(root, $) {
	var BALA_PLACEHODER;

	if (typeof define == 'function' && define.amd) {
		define([], function() {
			return $;
		});
	} else if (typeof module == 'object' && module.exports) {
		module.exports = $;
	} else {
		root.$ = $;
	}
})(this);
