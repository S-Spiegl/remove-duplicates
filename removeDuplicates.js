//planning - working on assumption that list refers to an array

function removeDuplicates(array) {
  const uniqueNumbers = []
  array.forEach((number) => {
    !uniqueNumbers.includes(number) && uniqueNumbers.push(number)
  })
  
  return uniqueNumbers.sort(function(a,b){return b - a})
}

module.exports = removeDuplicates;