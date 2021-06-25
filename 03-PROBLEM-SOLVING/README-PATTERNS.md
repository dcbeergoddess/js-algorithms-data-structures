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







