const removeDuplicates = require('./removeDuplicates')

describe('removeDuplicates', () => {
  it('removes duplicates from pre-ordered array', () => {
    expect(removeDuplicates([1,2,2])).toEqual([1,2])
  })  
  it('removes duplicates from pre-ordered array regardless of length', () => {
    expect(removeDuplicates([1,2,2,5,6,8,8,10,10,11])).toEqual([1,2,5,6,8,10,11])
  })
  it('sorts list following removal of duplicates', () => {
    expect(removeDuplicates([3,1,2,1])).toEqual([1,2,3])
  })
  it('sorts list following removal of duplicates (10 numbers as per instructions)', () => {
    expect(removeDuplicates([3,10,2,1,40,99,100,84,11,42])).toEqual([1,2,3,10,11,40,42,84,99,100])
  })
})
