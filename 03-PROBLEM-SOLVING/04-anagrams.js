// Given Two Strings, write a Function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as *cinema*, formed from *iceman*

function validAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false
  }
  
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for(let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    // console.log(frequencyCounter1)
  } 
  for(let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    // console.log(frequencyCounter2)
  }
  for(let key in frequencyCounter1) {
    if(frequencyCounter1[key] !== frequencyCounter2[key]){
      return false 
    }
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  return true
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext'))


