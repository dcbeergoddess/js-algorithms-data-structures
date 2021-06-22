const { PerformanceObserver, performance } = require('perf_hooks');

function addUpTo(n) {
  return n * (n + 1) / 2
}

console.log(addUpTo(6))
// // 6*(6+1)/2

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
//1st run: Time Elapsed: 0.00046827000379562377 seconds.
//2nd run: Time Elapsed: 0.000020511001348495484 seconds.
//3rd run: Time Elapsed: 0.000020467013120651246 seconds.

