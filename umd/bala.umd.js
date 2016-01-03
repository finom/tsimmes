(function(root, $) {
	$ = (function(document, s_addEventListener, s_querySelectorAll) {
		function $(s, context, bala) {
			bala = Object.create($.fn);

			s && bala.push.apply(bala, // if s is truly then push the following
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
									: bala) // else pass [] (context isn't found)
								: document[s_querySelectorAll](s) // else select elements globally
						: typeof s == 'function' // else if function is passed
							// if DOM is ready
							// readyState[7] means readyState value is "interactive" or "complete" (not "loading")
							? document.readyState[7]
								? s() // then run given function
								: document[s_addEventListener]('DOMContentLoaded', s) // else wait for DOM ready
							: s); // else guessing that s variable is array-like Object

			return bala;
		}

		$.fn = [];

		$.one = function(s, context) {
			return $(s, context)[0] || null;
		};

		return $;
	})(document, 'addEventListener', 'querySelectorAll');


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
