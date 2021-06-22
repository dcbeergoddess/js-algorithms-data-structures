// function logAtLeast5(n) {
//   for (let i = 1; i <= Math.max(5, n); i++) {
//     console.log(i);
//   }
// }

// console.log(logAtLeast5(1))
// console.log(logAtLeast5(3))

function logAtMost5(n) {
  for( let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

console.log(logAtMost5(1))
console.log(logAtMost5(100))