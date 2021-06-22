const { PerformanceObserver, performance } = require('perf_hooks');

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total; 
}

console.log(addUpTo(6))
//21

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
//1st run: Time Elapsed: 1.1416461179852486 seconds.
//2nd run: Time Elapsed: 1.2111540130078793 seconds.
//3rd run: Time Elapsed: 1.188018821001053 seconds.