# Intro to Big O
* [BIG O SLIDES](https://cs.slides.com/colt_steele/big-o-notation)

* **OBJECTIVES**
- Motivate the need for something like Big O Notation
- Describe what Big O Notation is
- Simplify Big O Expressions
- Define "time complexity" and "space complexity"
- Evaluate the time complexity and space complexity of different algorithms using Big O Notation
- Describe what a logarithm is

* **IDEA**
- Imagine we have multiple implementations of the same function
- How can we determine which one is the best?
- How to classify and talk about code
- It's important to have a precise vocabulary to talk about how our code performs
- Useful for discussing trade-offs between different approaches
- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications 
- LESS IMPORTANT: It comes up in interviews

## Timing Our Code
* **EXAMPLE**
1. Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number *n*.
```js
//FIRST TO COME TO MIND
  function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }

  //ANOTHER OPTION --> No Loop Involved
  function addUpTo(n) {
    return n * (n + 1) / 2;
  }
  //WHICH ONE IS BETTER?????
```
- ![SLIDE ON SECOND OPTION MATH](assets/timing1.png)

* WHAT DOES BETTER MEAN?
- Faster? --> Focus here first
- Less memory-intensive?
- More readable?
- Brevity?

* Evaluating Speed
- Built in Timing Functions - method: `performance.now()`
```js
//going to tell the number of milliseconds since the document was crated (since the window was opened) --> save to variable before calling function 
  let t1 = performance.now();
  addUpTo(1000000000);
  //after that finishes check performance --> should have incremented a bunch of of milliseconds 
  let t2 = performance.now();
  //Have two numbers --> subtract and divide by 1000
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
```
* For Node.JS --> built in `perf-hooks`
```js
const { PerformanceObserver, performance } = require('perf_hooks');
```
* When we run first option every time we run the code the Time Elapsed changes slightly
- 1st run: Time Elapsed: 1.1416461179852486 seconds.
- 2nd run: Time Elapsed: 1.2111540130078793 seconds.
- 3rd run: Time Elapsed: 1.188018821001053 seconds.

* When we run second option --> much smaller number
- 1st run: Time Elapsed: 0.00046827000379562377 seconds.
- 2nd run: Time Elapsed: 0.000020511001348495484 seconds.
- 3rd run: Time Elapsed: 0.000020467013120651246 seconds.

* The Problem with Time
- Different machines will record different times
- The same machine will record different times!
- For fast algorithms, speed measurements may not be precise enough?

## Counting Operations
- Rather than counting *seconds*, which are so variable...
- Count the *number* of simple operations the computer has to perform
- time will always be determined by the number of operations 

- ![COUNTING FASTER EXAMPLE](assets/counting1.png)
* Slower Function with Loop with be based on *n*
- ![COUNTING SLOWER EXAMPLE](assets/counting2.png)
- How to we generalize this last function
* COUNTING IS HARD
- Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2
- But regardless of the exact number, the number of operations grows roughly proportionally with *n*
- WE CARE ABOUT THE GENERAL TREND --> BIG 0

























