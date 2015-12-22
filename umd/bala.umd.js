(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.$ = factory();
  }
}(this, function () {
    return (function(document, fn, $) {
      $ = function(s, context) {
	    fn.push.apply( this, !s ? fn : s.nodeType || s == window ? [s] : "" + s === s ? /</.test( s ) 
	    ? ( ( i = document.createElement( context || 'q' ) ).innerHTML = s, i.children ) : (context&&$(context)[0]||document).querySelectorAll(s) : /f/.test(typeof s) ? /c/.test(document.readyState) ? s() : document.addEventListener('DOMContentLoaded', s) : s );
      }; 
    $.fn = $.prototype = fn;

    $.one = function(s) {
      return $(s, context)[0]||null;
    };

    return $;
      
    })(document, []);
}));