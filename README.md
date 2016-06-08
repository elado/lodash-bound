# lodash-bound

> Enables chained lodash functions with ES bind (`::`) syntax

[![build status](https://img.shields.io/travis/elado/lodash-bound/master.svg?style=flat-square)](https://travis-ci.org/elado/lodash-bound) [![npm version](https://img.shields.io/npm/v/lodash-bound.svg?style=flat-square)](https://www.npmjs.com/package/lodash-bound) [![codeclimate](https://img.shields.io/codeclimate/github/elado/lodash-bound.svg?style=flat-square)](https://codeclimate.com/github/elado/lodash-bound)

[`babel-plugin-lodash`](https://github.com/lodash/babel-plugin-lodash) and [`lodash-webpack-plugin`](https://github.com/lodash/lodash-webpack-plugin) introduced an optimizaion that includes only the used lodash methods in the compiled webpack file. So you can still `import _ from 'lodash'` without having the entire lodash library to load.

However, chaining is not supported. `_.chain(value).method()` or `_(value).method()` will result in an (understandable) error.

That error links to [this article](https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba) which suggests using `lodash/fp` in order to maintain somwhat chained syntax.

With the new ES bind syntax, `::`, it's now possible to 'chain' a method to an object, as if it was on its `prototype`.

```js
function upcase() { return this.toUpperCase() }
function shout(n) { return this + '!'.repeat(n) }
console.log('hello'::upcase()::shout(5)) // => HELLO!!!!!
```

This library wraps all lodash methods with functions that consider `this` as the value, because lodash methods take a value as a first argument, which wouldn't fit the `::` syntax.

Each method requires only the single corresponding file from lodash, so no unnecessary sources are being added to the output.

## Installation

```sh
npm install lodash-bound --save
```

Requires also `babel-preset-es2015` and `babel-preset-stage-0` babel presets.

## Usage

```js
import _map from 'lodash-bound/map'
import _filter from 'lodash-bound/filter'
import _groupBy from 'lodash-bound/groupBy'
import _mapValues from 'lodash-bound/mapValues'

let arr = [
  { id: 'm1', conversationId: 'c1', body: 'hello', read: true },
  { id: 'm2', conversationId: 'c1', body: 'world', read: false },
  { id: 'm3', conversationId: 'c2', body: 'foo', read: false },
  { id: 'm4', conversationId: 'c2', body: 'bar', read: false }
]

let unreadBodyByConversationId = arr
  ::_filter({ read: false })
  ::_groupBy('conversationId')
  ::_mapValues(x => x::_map('body'))

// => { c1: [ 'world' ], c2: [ 'foo', 'bar' ] }
```

### Usage with `babel-plugin-lodash` and `lodash-webpack-plugin`

This library integrates (almost) seamlessly with [`babel-plugin-lodash`](https://github.com/lodash/babel-plugin-lodash) and [`lodash-webpack-plugin`](https://github.com/lodash/lodash-webpack-plugin).

To do so, the babel plugin needs to point to this library with the `id` option:

#### `.babelrc`

```json
{
  "presets": [ "es2015", "stage-0" ],
  "plugins": [
    [ "lodash", { "id": "lodash-bound" } ]
  ]
}
```

Now the code can `import`/`require` multiple functions from `loadsh-bound`, without requiring the entire library.

```js
import { mapValues, filter } from 'lodash-bound'

const o = { a: 2, b: 4, c: 3 }
console.log(o::mapValues(n => n * n)::filter(n => n > 5))
```

`lodash-webpack-plugin` installation instructions [here](https://github.com/lodash/lodash-webpack-plugin).

Thanks @jdalton for the info!

> Note: Webpack 2 will support 'tree-shaking' which eliminates unused requires. This will allow requiring all methods in one statements: `import { _map, _filter, _groupBy, _mapValues } from 'lodash-bound'`, without requiring all the rest of the methods, and without babel-plugin-lodash.

## Test

```sh
npm install
npm test
```

## License

MIT
