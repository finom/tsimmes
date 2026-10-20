tsimmes [![npm version](https://badge.fury.io/js/tsimmes.svg)](https://badge.fury.io/js/tsimmes)
============

<!-- <p align="center">
<img src="https://github.com/finom/tsimmes/assets/1082083/ec10294f-9b8b-4af1-9f66-a5694bacdfb5" width="450">
</p> -->

### jQuery in 226 ASCII chars

**tsimmes** is a function that allows you to select elements on a web page. Think of it as of `document.querySelectorAll` on steroids.

```js
const buttons = $('.button');
```

You can use it as a global variable

```html
<script>
$=((a,b,c)=>(c=(d,e,f=[])=>(d&&f.push(...(d.dispatchEvent?[d]:""+d===d?/</.test(d)?((e=a.createElement(e)).innerHTML=d,e.children):e?(e=c(e)[0])?e[b](d):f:a[b](d):d)),f),c.one=(a,b)=>c(a,b)[0],c))(document,"querySelectorAll");
</script>
```


*If you don't want to use ``$`` variable just rename it.*
```js
foo=...
// instead of
$=...
```

And you can use it as a local variable in a script you make

```js
((win, $) => {
    // your code starts here
    const divs = $('div');
    console.log(divs);
    // your code ends here
})(window, ((a,b,c)=>(c=(d,e,f=[])=>(d&&f.push(...(d.dispatchEvent?[d]:""+d===d?/</.test(d)?((e=a.createElement(e)).innerHTML=d,e.children):e?(e=c(e)[0])?e[b](d):f:a[b](d):d)),f),c.one=(a,b)=>c(a,b)[0],c))(document,"querySelectorAll"));
```

The function is also published on NPM

```
npm install tsimmes
```


`$()` returns a plain `Array`, so every [array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) works on the result, and `for...of` and spread work too:

```js
$('.button').filter((el) => !el.disabled).forEach((el) => el.classList.add('ready'));
const [first] = $('.item');
Array.isArray($('a')); // true
```

## More features?

### Various types support

**tsimmes** accepts many kinds of first argument and converts everything into array

```js
$('.one, #two')
$(document.querySelectorAll('.selector'));
$(document.body);
$(element.children);
$(jQuery('.selector'));
$([document.querySelector('.one'), document.querySelector('.two')])
```

That means when you make your own library (VanillaJS "plugin") you can use **tsimmes** in case if you don't know which arg type will be passed by a programmer.

```js
const myCoolLibrary = (el) => {
  el = $(el);
  // ...
};
```

### $.one

Getting zero-indexed element in DOM libraries is annoying. **tsimmes** has one little static method called ``$.one`` which selects only one element.

```js
$.one('.button');
//vs
$('.button')[0];
```

This function is also created to get rid of extra variables (usually DOM libraries make two vars: ``$$`` and ``$``). It means you can import **tsimmes** nicely via module system.

**AMD**
```js
require(['path/to/tsimmes/umd/tsimmes.umd.js'], ($) => {
	// ...
});
```

**CommonJS**
```js
const $ = require('path/to/tsimmes/tsimmes.umd.js');
```

**CommonJS + NPM**
```js
const $ = require('tsimmes');
```

**ECMAScript 2015**
```js
import $ from 'tsimmes';
```

### Find elements inside another element
```js
const elements = $('.my-selector', someParent);
// or
const element = $.one('.my-selector', someParent);
```


### Parse HTML
Simple parsing.
```js
const div = $('<div><span class="yeah"></span></div>');
```

### Contextual HTML parsing
In case if you need to parse HTML which contains contextual elements (``td``, ``tr``, ``option``) you can pass a context tag name as a second argument.
```js
const cells = $('<td>foo</td><td>bar</td>', 'tr')
```

## I need more examples!

### Add style
```js
for(let element of $('.my-selector')) {
    element.style.color = 'red';
}
```

In case if you need to set style only for one element you can use ``$.one``.

```js
$.one('.my-selector').style.color = 'red';
```

### Events delegation
```js
for(let element of $('.my-selector')) {
    element.addEventListener('click', function ({ target }) {
        if (this.contains(target.closest('.delegated-selector'))) {
            alert('yep!');
        }
    });
}
```
Or
```js
$.one('.my-selector').addEventListener('click', function ({ target }) {
    if (this.contains(target.closest('.delegated-selector'))) {
        alert('yep!');
    }
});
```

### Elements removal
```js
for(let element of $('.my-selector')) {
    element.remove();
}
```
Or
```js
$.one('.my-selector').remove();
```

### Animations
Use [element.animate](https://developers.google.com/web/updates/2014/05/Web-Animations-element.animate-is-now-in-Chrome-36) for smooth GPU-accelerated animations. You may need [polyfill for Web Animations API](https://github.com/web-animations/web-animations-js).
```js
$.one('.my-selector').animate({
    opacity: [0.5, 1],
    transform: ['scale(0.5)', 'scale(1)'],
}, {
    direction: 'alternate',
    duration: 500,
    iterations: Infinity,
});
```

Do you still need jQuery?
