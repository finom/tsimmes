(function(root, $) {
	BALA_PLACEHODER;


	if (typeof define == 'function' && define.amd) {
		define([], () => $);
	} else if (typeof module == 'object' && module.exports) {
		module.exports = $;
	} else {
		root.$ = $;
	}
})(this);
