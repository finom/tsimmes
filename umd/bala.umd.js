(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.$ = factory();
	}
}(this, function() {
	return (function(document, s_addEventListener, s_querySelectorAll, $, Bala) {
		$ = function(s, context) {
			return new Bala(s, context);
		};

		Bala = function(s, context) {
			s && [].push.apply(this, // if s is truly then push the following
				s[s_addEventListener] // if arg is node or window,
					? [s] // then pass [s]
					: "" + s === s // else if arg is a string
						? /</.test(s) // if the string contains "<" (if HTML code is passed)
							// then parse it and return node.children
							// use 'addEventListener' (HTMLUnknownElement) if content is not presented
							? ((context = document.createElement(context || s_addEventListener)).innerHTML = s
								, context.children)
							: context // else if context is truly
								? ((context = $(context)[0]) // if context element is found
									? context[s_querySelectorAll](s) // then select element from context
									: []) // else pass [] (context isn't found)
								: document[s_querySelectorAll](s) // else select elements globally
						// else if function is passed
						// ("function" and "undefined" are the longest values of typeof
						// and we've already checked s for falsy)
						: (typeof s)[7]
							? document.readyState[0] == 'c' // if DOM is ready
								? s() // then run given function
								: document[s_addEventListener]('DOMContentLoaded', s) // else wait for DOM ready
							: s); // else guessing that s variable is array-like object
		};

		$.fn = Bala.prototype = [];

		$.one = function(s, context) {
			return $(s, context)[0] || null;
		};

		return $;
	})(document, 'addEventListener', 'querySelectorAll');
}));
