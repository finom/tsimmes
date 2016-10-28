window.$ = (function $bala(document, sAddEventListener, sQuerySelectorAll) {
  function $(s, context, bala) {
    bala = Object.create($.fn);

    s && bala.push.apply(bala, // if s is truly then push the following
      s[sAddEventListener] // if arg is node or window,
        ? [s] // then pass [s]
        : '' + s === s // else if arg is a string
          ? /</.test(s) // if the string contains "<" (if HTML code is passed)
            // then parse it and return node.children
            // use 'addEventListener' (HTMLUnknownElement) if content is not presented
            ? ((context = document.createElement(context || sAddEventListener)).innerHTML = s
              , context.children)
            : context // else if context is truly
              ? ((context = $(context)[0]) // if context element is found
                ? context[sQuerySelectorAll](s) // then select element from context
                : bala) // else pass [] (context isn't found)
              : document[sQuerySelectorAll](s) // else select elements globally
          : typeof s === 'function' // else if function is passed
            // if DOM is ready
            // readyState[7] means readyState value is "interactive" or "complete" (not "loading")
            ? document.readyState[7]
              ? s() // then run given function
              : document[sAddEventListener]('DOMContentLoaded', s) // else wait for DOM ready
            : s); // else guessing that s variable is array-like Object

    return bala;
  }

  $.fn = [];

  $.one = function one(s, context) {
    return $(s, context)[0] || null;
  };

  return $;
}(document, 'addEventListener', 'querySelectorAll'));
