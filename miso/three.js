function solution(S, C) {
  //written the code assuming all the constraints are in place. ex: cells only contain integers
  let formattedrows = S.split("\n").map((item) => item.split(","));
  let target = formattedrows[0].indexOf(C);
  let arr = [];
  console.log(formattedrows);
  for (let index = 1; index < formattedrows.length; index++) {
    const element = formattedrows[index];
    arr.push(parseInt(element[target]));
  }
  let sorted = arr.sort(function (a, b) {
    return b - a;
  });
  return sorted[0];
}

console.log(
  solution(
    "id,name,age,act.,room,dep.\n1,Jack,18,T,13,8\n17,Betty,28,F,15,7",
    "age"
  )
);
