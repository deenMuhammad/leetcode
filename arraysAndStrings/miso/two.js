function solution(S = "") {
  count = 0;
  if (S.length == 1) {
    return -1;
  }
  for (let index = 0; index < S.length; index++) {
    let element = S.charAt(index);
    let next = S.length - 1 > index ? S.charAt(index + 1) : null;
    let prev = index > 0 ? S.charAt(index - 1) : null;
    let nextNext = S.length - 2 > index ? S.charAt(index + 2) : null;
    if (element == "-") {
      continue;
    }
    if (prev == "-" || (next && next == "-")) {
      //in this case we can build watertanks
      if (!next && !nextNext && prev == "-") {
        count = count + 1;
      }
      if (next == "-" && nextNext == "H") {
        count = count + 1;
        index = index + 2;
      } else if (next == "-") {
        count = count + 1;
        index = index + 1;
      } else if (next == "H") {
        count = count + 1;
      }
    } else return -1;
  }
  return count;
}

console.log(solution("H-H-HH-H-H-HH-"));
