# Problem Solving Patterns
**PREREQUISITES**
- Colt's Section 1: BIG O NOTATION
- Colt's Section 4: PROBLEM SOLVING APPROACH
* [SLIDES](https://cs.slides.com/colt_steele/problem-solving-patterns)
## INTRO
**Master** Common Problem Solving Patterns
#### Some Patterns...
* Frequency Counter
* Multiple Pointers
* Sliding Window
* Divide and Conquer
* Dynamic Programming
* Greedy Algorithms
* Backtracking
* MANY MORE!

## Frequency Counter Pattern
- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(N^2) operations with arrays/strings
#### AN EXAMPLE
- Write a function called **same**, which accepts two arrays. 
- The function should return true if every value in the array has it's corresponding value squared in the second array.
- The frequency of values must be the same
```js
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
```
- [Naive Solution](02-same-refactor.js) ==> WANT TO TRY AND AVOID NESTED LOOPS ==> quadratic time  
- [Refactored Solution](03-same-refactor.js) ==> Time Complexity - O(n) --> loop over each array one time --> two separate loops different from two nested loops
- Quick to access data in an object

## ANAGRAMS
- Given Two Strings, write a Function to determine if the second string is an anagram of the first.
- An anagram is a word, phrase, or name formed by rearranging the letters of another, such as *cinema*, formed from 
- If in interview setting ask about edge cases, spaces, lowercase words, etc. 
- We can assume there won't be spaces 
```js
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
```
- [MY SOLUTION](04-anagrams.js)
- [COLT'S SOLUTION]



