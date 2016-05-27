# lodash-bound

> Allows using chained lodash functions with ES bind (`::`) syntax

[`babel-plugin-lodash`](https://github.com/lodash/babel-plugin-lodash) and [`lodash-webpack-plugin`](https://github.com/lodash/lodash-webpack-plugin) introduced an optimizaion that includes only the used lodash methods in the compiled webpack file. So you can still `import _ from 'lodash'` without having the entire lodash library to load.

However, chaining is not supported. `_.chain(value).method()` or `_(value).method()` will result in an (understandable) error.

That error links to [this article](https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba) which suggests using `lodash/fp` in order to maintain somwhat chained syntax.

With the new ES bind syntax, `::`, it's now possible to 'chain' a method to an object, as if it was on its `prototype`.

```js
function upcase() { return this.toUpperCase() }
function shout(n) { return this + '!'.repeat(n) }
console.log('hello'::upcase()::shout(5)) // => HELLO!!!!!
```

So this library, wraps all lodash methods with functions that consider `this` as the value. Lodash methods take a value as a first argument, which wouldn't fit the `::` syntax. Also, each method requires only the single corresponding file from lodash, so no unnecessary sources are being added to the output.

## Installation

```sh
npm install lodash-bound --save
```

## Usage

```js
import _map from 'lodash-bound/lib/map'
import _filter from 'lodash-bound/lib/filter'
import _groupBy from 'lodash-bound/lib/groupBy'
import _mapValues from 'lodash-bound/lib/mapValues'

let arr = [
  { id: 'm1', conversationId: 'c1', body: 'hello', read: true },
  { id: 'm2', conversationId: 'c1', body: 'world', read: false },
  { id: 'm3', conversationId: 'c2', body: 'foo', read: false },
  { id: 'm4', conversationId: 'c2', body: 'bar', read: false },
]

let unreadByConversation = arr
  ::_filter({ read: false })
  ::_groupBy('conversationId')
  ::_mapValues(x => x::_map('body'))
```

## License

MIT
