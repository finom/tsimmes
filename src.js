$ = ((document, s_querySelectorAll, $) => (
	($ = (s, context, tsimmes=[]) => (
		s && tsimmes.push( // if s is truly then push the following
			...(s.dispatchEvent // if arg is node or window,
				? [s] // then pass [s]
				: "" + s === s // else if arg is a string
					? /</.test(s) // if the string contains "<" (if HTML code is passed)
						// then parse it and return node.children
						// use 'undefined' (HTMLUnknownElement) if context is not presented
						? ((context = document.createElement(context)).innerHTML = s
							, context.children)
						: context // else if context is truly
							? ((context = $(context)[0]) // if context element is found
								? context[s_querySelectorAll](s) // then select element from context
								: tsimmes) // else pass [] (context isn't found)
							: document[s_querySelectorAll](s) // else select elements globally
					: s)), // else guessing that s variable is array-like Object
        tsimmes
	)),

	($.one = (s, context) => $(s, context)[0]),

	$
))(document, 'querySelectorAll');
