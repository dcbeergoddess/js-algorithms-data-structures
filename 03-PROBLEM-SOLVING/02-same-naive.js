// Write a function called **same**, which accepts two arrays. 
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same

function same(arr1, arr2) {
  //edge case
  if (arr1.length !== arr2.length) {
    return false
  }
  //loop over first array 
  for(let i = 0; i < arr1.length; i++) {
    //call index of where you pass in square of each value and check if it's in second array
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    //if returns -1 (meaning it's not in there)
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2)
    //if it's in there remove it from array
    arr2.splice(correctIndex, 1)
  }
  //if never returned false return true
  return true
}

console.log(same([1,2,3], [4,1,9])) 
// [ 4, 1, 9 ]
// [ 4, 9 ]
// [ 9 ]
// true
console.log(same([1,2,3], [1,9])) 
// false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)
// [ 4, 4, 1 ]
// [ 4, 4 ]
// false
