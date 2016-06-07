import assert from 'assert'
import _map from '../lib/map'
import _filter from '../lib/filter'
import _groupBy from '../lib/groupBy'
import _mapValues from '../lib/mapValues'

describe('lodash-bound', function () {
  it('can chain lodash-bound methods to an object', function () {
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

    assert.deepEqual(unreadBodyByConversationId, { c1: [ 'world' ], c2: [ 'foo', 'bar' ] })
  })
})
