const removeDuplicates = require('./removeDuplicates')

describe('removeDuplicates', () => {
  it('removes duplicates from pre-ordered array', () => {
    expect(removeDuplicates([1,2,2])).toEqual([1,2])
  })  
})
