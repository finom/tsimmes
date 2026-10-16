balajs
======

**balajs** is renamed to [tsimmes](https://www.npmjs.com/package/tsimmes). This package re-exports it.

```sh
npm uninstall balajs
npm install tsimmes
```

```js
import $ from 'tsimmes';
```

The old browser files (`bala.min.js`, `bala.umd.js` and the `es5/` builds) stay here unchanged, so existing `<script>` tags keep working.
