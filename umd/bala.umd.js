(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.$ = factory();
	}
}(this, function() {
	return (function(document, fn, $, Bala, i) {
		$ = function(s, context) {
			return new Bala(s, context);
		};

		Bala = function(s, context) {
			fn.push.apply(this, !s
				? fn // if arg is falsy, pass []
				: s.nodeType || s == window // else if arg is node or window,
					? [s] // pass [s]
					: "" + s === s // else if arg is string
						? /</.test(s) // if contains "<" (if HTML is passed)
							? ((i = document.createElement(context || 'q')).innerHTML = s, i.children) // parse it and return node.children
							: (context && $(context)[0] || document).querySelectorAll(s) // else select elements by selector
						: /f/.test(typeof s) // else if function is passed
							? /c/.test(document.readyState) // if DOM is ready
								? s() // run function
								: document.addEventListener('DOMContentLoaded', s) // else wait for DOM ready
							: s); // else guessing that s is array-like object
		};

		$.fn = Bala.prototype = fn;

		$.one = function(s, context) {
			return $(s, context)[0] || null;
		};

		return $;

	})(document, []);
}));
