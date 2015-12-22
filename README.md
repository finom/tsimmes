bala.js
============

**UNDER DEVELOPMENT**

## A function for elements selection in 375 chars.


![](http://pngimg.com/upload/bullets_PNG1473.png)

(the image belongs to it's author)





---------------------

**bala.js** is a function that allows you easily select elements on a web page.
```js
var buttons = $('.button');
```

You can use it as a global variable on your page
```html
<script>
$=(function(c,d,b){b=function(a,e){d.push.apply(this,a?a.nodeType||a==window?[a]:""+a===a?/</.test(a)?((i=c.createElement(e||"q")).innerHTML=a,i.children):(e&&b(e)[0]||c).querySelectorAll(a):/f/.test(typeof a)?/c/.test(c.readyState)?a():c.addEventListener("DOMContentLoaded",a):a:d)};b.fn=b.prototype=d;b.one=function(a){return b(a,context)[0]};return b})(document,[]);
</script>
```

```html
<script>
    $(function() {
        $('.my-selector').on('click', function() {
            alert('I need my balalaika');
        });
    });
</script>
```

And you can use it as a local variable in a script you make

```js
(function(win, $) {
    // your code starts here
    $(function() {
        $('.my-selector').on('click', function() {
            alert('I need my balalaika');
        });
    });
  // your code ends here
})(window, function(c,d,b){b=function(a,e){d.push.apply(this,a?a.nodeType||a==window?[a]:""+a===a?/</.test(a)?((i=c.createElement(e||"q")).innerHTML=a,i.children):(e&&b(e)[0]||c).querySelectorAll(a):/f/.test(typeof a)?/c/.test(c.readyState)?a():c.addEventListener("DOMContentLoaded",a):a:d)};b.fn=b.prototype=d;b.one=function(a){return b(a,context)[0]};return b}(document,[]));
```

It's inherited from ``Array.prototype`` which means it has the same collection of methods.

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

That means when you make your own library (VanillaJS plugin :)) you can use **bala** in case if you don't know which arg type will be passed.

```js
var myCoolLibrary = function(el) {
  el = $(el);
  // ...
};
```

### $.one
Getting zero-indexed element is annoying. **bala** has one little static method called ``$.one`` which selects only one element.

```js
$.one('.button');
//vs
$('.button')[0];
```

This funtion is also created to get rid of extra variables (usually DOM libraries make two vars: ``$$`` and ``$``) that means you can import **bala** nicely via module system.
```js
import $ from 'bala';
```
```js
var $ = require('bala');
```

### Find elements inside another element
```js
var elements = $('.my-selector', element);
// or
element = $.one('.my-selector', element);
```


### DOM ready
```
$(function() {
  alert('DOM is ready');
});
```
By the way, instead of using DOM ready you can pass all your scripts to the end of ``body`` tag.
```html
    ...
    <script src="app.js"></script>
  </body>
</html>
```


### Parse HTML
```js
var div = $('<div><span class="yeah"></span></div>');
```

### Contextual HTML parsing
In case if you need to parse HTML which contains contextual elements (``td``, ``tr``, ``option``) you can pass a context tag name as a second argument.
```js
var cells = $('<td>foo</td><td>bar</td>', 'tr')
```

### 

## What's the difference between **bala** and [balalaika](https://github.com/finom/balalaika/)?

The new DOM API and new JavaScript features are coming into the browsers. Some of the functions from balalaika don't have sense today. For example you can use nativelly supported [Object.assign](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  instead of ``$.extend`` function. You can use [element.matches](https://developer.mozilla.org/ru/docs/Web/API/Element/matches) instead of ``$.fn.is``. The only things you may need are ``$.fn.on`` and ``$.fn.off`` methods (for namespaced events etc). If you really need them, use balalaika instead.

## Plugins

You can extend **bala** as easily as you do it with jQuery, Zepto or balalaika. Use ``fn`` or ``prototype`` property to define your own plugin.

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

Or in case if you need to set style only for one element you can use ``$.one``.

```js
$.one('.my-selector').style.color = 'red';
```

### Delegated events
```js
$('.my-selector').forEach(function(element) {
  element.addEventListener('click', function() {
    if(this.contains(evt.target.closest('.delegated-selector'))) {
      alert('yep!');
    }
  });
});
```
Or
```js
$.one('.my-selector').addEventListener('click', function() {
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

### Animations
Use [element.animate](https://developers.google.com/web/updates/2014/05/Web-Animations-element.animate-is-now-in-Chrome-36) for smooth GPU-accelerated animations.
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

Heh, of course there aren't ajax features. Use fantastic nativelly supported [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) function
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


* bala means bullet in Spanish