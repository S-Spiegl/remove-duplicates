//planning - working on assumption that list refers to an array

function removeDuplicates(array) {
  const uniqueNumbers = []
  array.forEach((number) => {
    if(!uniqueNumbers.includes(number)){
      uniqueNumbers.push(number)
    }
  })
  return uniqueNumbers
}

module.exports = removeDuplicates;