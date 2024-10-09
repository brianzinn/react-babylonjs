import assert from 'assert'
import { assignProperty } from '../src/helper/property'

describe(' > assignProperty tests', function testSuite() {
  it('Basic assign property by index', async function test() {
    const sut = {
      field1: {
        list: ['one', 'one'],
      },
    }

    assignProperty('two', sut, 'field1.list[1]')

    assert.deepEqual(
      {
        field1: {
          list: ['one', 'two'],
        },
      },
      sut,
      'should be exact match'
    )
  })
})
