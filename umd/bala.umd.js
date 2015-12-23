(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.$ = factory();
	}
}(this, function() {
	return (function(document, fn, s_addEventListener, s_querySelectorAll, $, Bala) {
		$ = function(s, context) {//console.log(s, context);
			return new Bala(s, context);
		};

		Bala = function(s, context) {
			fn.push.apply(this, !s
				? fn // if arg is falsy, pass []
				: s[s_addEventListener] // else if arg is node or window,
					? [s] // pass [s]
					: "" + s === s // else if arg is string
						? /</.test(s) // if contains "<" (if HTML is passed)
							? ((context = document.createElement(context || 'q')).innerHTML = s, context.children) // parse it and return node.children
							: context // if context is truly
								? ((context = $(context)[0]) // if context element is found
									? context[s_querySelectorAll](s) // select element from context
									: fn) // if context isn't found, pass []
								: document[s_querySelectorAll](s) // else select elements globally
						: /f/.test(typeof s) // else if function is passed
							? document.readyState[0] == 'c' // if DOM is ready
								? s() // run function
								: document[s_addEventListener]('DOMContentLoaded', s) // else wait for DOM ready
							: s); // else guessing that s is array-like object
		};

		$.fn = Bala.prototype = fn;

		$.one = function(s, context) {
			return $(s, context)[0] || null;
		};

		return $;
	})(document, [], 'addEventListener', 'querySelectorAll');

}));
