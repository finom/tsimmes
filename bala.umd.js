(function(root, $) {
	$ = ((document, s_querySelectorAll, fn, $) => (
	($ = (s, context, bala) => (
		(bala = Object.create(fn)),

		s && bala.push( // if s is truly then push the following
			...(s.dispatchEvent // if arg is node or window,
				? [s] // then pass [s]
				: typeof s == 'string' // else if arg is a string
					? /</.test(s) // if the string contains "<" (if HTML code is passed)
						// then parse it and return node.children
						// use 'querySelectorAll' (HTMLUnknownElement) if content is not presented
						? ((context = document.createElement(context || s_querySelectorAll)).innerHTML = s
							, context.children)
						: context // else if context is truly
							? ((context = $(context)[0]) // if context element is found
								? context[s_querySelectorAll](s) // then select element from context
								: bala) // else pass [] (context isn't found)
							: document[s_querySelectorAll](s) // else select elements globally
					: s.length ? s : fn)), // else guessing that s variable is array-like Object
        bala
	)),

	($.fn = fn),

	($.one = (s, context) => $(s, context)[0]),

	$
))(document, 'querySelectorAll', []);
;


	if (typeof define == 'function' && define.amd) {
		define([], () => $);
	} else if (typeof module == 'object' && module.exports) {
		module.exports = $;
	} else {
		root.$ = $;
	}
})(this);
