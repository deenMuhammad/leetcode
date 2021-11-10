// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let target = 1;
  for (let index = 0; index < A.length; index++) {
    if (!A.includes(index + 1)) {
      return index + 1;
    } else {
      target = index + 2;
    }
  }
  return target;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
