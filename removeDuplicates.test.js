const removeDuplicates = require('./removeDuplicates')

describe('removeDuplicates', () => {
  it('removes duplicates from pre-ordered array', () => {
    expect(removeDuplicates([1,2,2])).toEqual([2,1])
  })  
  it('removes duplicates from pre-ordered array regardless of length', () => {
    expect(removeDuplicates([1,2,2,5,6,8,8,10,10,11])).toEqual([11,10,8,6,5,2,1])
  })
  it('sorts list in descending order following removal of duplicates', () => {
    expect(removeDuplicates([3,1,2,1])).toEqual([3,2,1])
  })
  it('sorts list in descending order following removal of duplicates (10 numbers as per instructions)', () => {
    expect(removeDuplicates([3,10,2,11,42,99,100,84,11,42])).toEqual([100,99,84,42,11,10,3,2])
  })
  it('sorts list in descending order following removal of duplicates (10 numbers and 4 duplicates as per instructions)', () => {
    expect(removeDuplicates([3,84,3,11,42,99,100,84,11,42])).toEqual([100,99,84,42,11,3])
  })
})
