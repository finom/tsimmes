bala.js [![npm version](https://badge.fury.io/js/balajs.svg)](https://badge.fury.io/js/balajs) [![Join the chat at https://gitter.im/finom/bala](https://badges.gitter.im/finom/bala.svg)](https://gitter.im/finom/bala?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
============



### A function for elements selection in 379 chars

**Less than Google Analytics tracking code!**


![](http://pngimg.com/upload/bullets_PNG1473.png)

(the image is taken somewhere from the internet)


---------------------

**bala.js** is the function that allows you easily select elements on a web page and get rid of jQuery in most cases.
```js
var buttons = $('.button');
```

You can use it as a global variable on your page
```html
<script>
$=function(e,f,g){function c(a,b,d){d=Object.create(c.fn);a&&d.push.apply(d,a[f]?[a]:""+a===a?/</.test(a)?((b=e.createElement(b||f)).innerHTML=a,b.children):b?(b=c(b)[0])?b[g](a):d:e[g](a):"function"==typeof a?e.readyState[7]?a():e[f]("DOMContentLoaded",a):a);return d}c.fn=[];c.one=function(a,b){return c(a,b)[0]||null};return c}(document,"addEventListener","querySelectorAll");
</script>
```

```html
<script>
    $(function() {
        alert($('.my-selector').length);
    });
</script>
```

And you can use it as a local variable in a script you make

```js
(function(win, $) {
    // your code starts here
    $(function() {
        alert($('.my-selector').length);
    });
  // your code ends here
})(window, function(e,f,g){function c(a,b,d){d=Object.create(c.fn);a&&d.push.apply(d,a[f]?[a]:""+a===a?/</.test(a)?((b=e.createElement(b||f)).innerHTML=a,b.children):b?(b=c(b)[0])?b[g](a):d:e[g](a):"function"==typeof a?e.readyState[7]?a():e[f]("DOMContentLoaded",a):a);return d}c.fn=[];c.one=function(a,b){return c(a,b)[0]||null};return c}(document,"addEventListener","querySelectorAll"));
```

Or install it via NPM
```
npm install --save balajs
```

**bala.js** is inherited from ``Array.prototype`` which means it has the same collection of methods as native array has.

<ul>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" target="_blank">concat</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">join</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" target="_blank">pop</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">push</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" target="_blank">reverse</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank">shift</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target="_blank">slice</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">sort</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" target="_blank">splice</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString"  target="_blank">toString</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" target="_blank">unshift</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" target="_blank">every</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">filter</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank">forEach</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" target="_blank">lastIndexOf</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">map</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" target="_blank">some</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" target="_blank">copyWithin</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" target="_blank">entries</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" target="_blank">fill</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="_blank">find</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" target="_blank">findIndex</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" target="_blank">includes</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys" target="_blank">keys</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values" target="_blank">values</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/%40%40iterator" target="_blank">[Symbol.iterator]</a></li>
</ul>

## More features?

### Different types support
**bala** is very flexible function. It accepts many kinds of first argument and converts everythng into **bala** instance
```js
$('.one, two')
$(document.querySelectorAll('.selector'));
$(document.body);
$(element.children);
$(jQuery('.selector'));
$([document.querySelector('.one'), document.querySelector('.two')])
```

That means when you make your own library (VanillaJS plugin :)) you can use **bala** in case if you don't know which arg type will be passed by a user.

```js
var myCoolLibrary = function(el) {
  el = $(el);
  // ...
};
```

### $.one
Getting zero-indexed element in DOM libraries is annoying. **bala** has one little static method called ``$.one`` which selects only one element.

```js
$.one('.button');
//vs
$('.button')[0];
```

This function is also created to get rid of extra variables (usually DOM libraries make two vars: ``$$`` and ``$``) which means you can import **bala** nicely via module system.

**AMD**
```js
require(['path/to/bala/umd/bala.umd.js'], function($) {
	// ...
});
```

**CommonJS**
```js
var $ = require('path/to/bala/umd/bala.umd.js');
```

**CommonJS + NPM**
```js
var $ = require('balajs');
```

**ECMAScript 2015**
```js
import $ from 'balajs';
```

Note that UMD version of **bala** takes ~530 bytes minified and uncompressed and ~360 bytes minified and gzipped (which still less than any DOM library takes).

### Find elements inside another element
```js
var elements = $('.my-selector', someParent);
// or
var element = $.one('.my-selector', someParent);
```


### DOM ready
When you pass a function to **bala** it will be executed after ``DOMContentLoaded`` event (or immediately if DOM is ready).

```js
$(function() {
  alert('DOM is ready');
});
```
By the way, instead of using "DOM ready" you can pass all your scripts to the end of ``body`` tag. It works everywhere.
```html
    ...
    <script src="app.js"></script>
  </body>
</html>
```


### Parse HTML
Just simple parsing.
```js
var div = $('<div><span class="yeah"></span></div>');
```

### Contextual HTML parsing
In case if you need to parse HTML which contains contextual elements (``td``, ``tr``, ``option``) you can pass a context tag name as a second argument.
```js
var cells = $('<td>foo</td><td>bar</td>', 'tr')
```


## What's the difference between **bala** and [balalaika](https://github.com/finom/balalaika/)?

The new DOM API and new JavaScript features are coming into the browsers very quickly. Some of the functions from balalaika don't have sense today. For example you can use natively supported [Object.assign](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  instead of ``$.extend`` function (you may need to find polyfill for it). You can use [element.matches](https://developer.mozilla.org/ru/docs/Web/API/Element/matches) instead of ``$.fn.is``. The only things you may need are ``$.fn.on`` and ``$.fn.off`` methods (for namespaced events etc). If you really need them, use balalaika instead.

## Plugins

You can extend **bala** as easily as you do it with jQuery, Zepto or balalaika. Use ``fn`` property to define your own plugin.

```js
$.fn.toggle = function(boolean) {
  this.forEach(function(item) {
    item.hidden = boolean;
  });
};

$('.button').toggle(false); // hides all buttons
```

## I need more examples!

### Iterate over elements
True way
```js
for(let element of $('.button')) {
  console.log(element);
}
```

Old school way
```js
$('.button').forEach(function(element) {
  console.log(element);
});
```

### Add style
```js
$('.my-selector').forEach(function(element) {
    element.style.color = 'red';
});
```

In case if you need to set style only for one element you can use ``$.one``.

```js
$.one('.my-selector').style.color = 'red';
```

### Delegated events
```js
$('.my-selector').forEach(function(element) {
  element.addEventListener('click', function(evt) {
    if(this.contains(evt.target.closest('.delegated-selector'))) {
      alert('yep!');
    }
  });
});
```
Or
```js
$.one('.my-selector').addEventListener('click', function(evt) {
  if(this.contains(evt.target.closest('.delegated-selector'))) {
    alert('yep!');
  }
});
```

### Elements removal
```js
$('.my-selector').forEach(function(element) {
    element.remove();
});
```
Or
```js
$.one('.my-selector').remove();
```

You may need [DOM4 polyfill](https://github.com/WebReflection/dom4) to get ``element.remove`` and ``element.closest`` methods.

### Animations
Use [element.animate](https://developers.google.com/web/updates/2014/05/Web-Animations-element.animate-is-now-in-Chrome-36) for smooth GPU-accelerated animations. You may need [polyfill for Web Animations API](https://github.com/web-animations/web-animations-js)
```js
$.one('.my-selector').animate([
  {transform: 'translate(' + snowLeft + 'px, -100%)'},
  {transform: 'translate(' + snowLeft + 'px, ' + window.innerHeight + 'px)'}
], {
  duration: 1500,
  iterations: 10,
  delay: 300
});
```
Do you really need jQuery?

### Ajax

Heh, of course there aren't ajax features. Use fantastic nativelly supported [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) function instead of ugly XMLHttpRequest.
```js
fetch('user.json')
  .then(function(response) {
    return response.json();
   })
  .then(function(user) {
    console.log(user);
  })
  .catch(alert);
```
You may need [polyfill](https://github.com/github/fetch) for it

## Browser support
**bala** works in all modern browsers starting Internet Explorer 9. The only thing that doesn't work in IE9 is contextual parsing due to specific bugs. If you need to know how to build a table dynamically in IE9 and below via native DOM functions please refer to [this article](https://msdn.microsoft.com/en-us/library/ms532998(v=vs.85).aspx).

*bala means "bullet" in Spanish
