// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let strings = [];
  let length = 0;
  let lengths = 0;
  if (s.length == 1) {
    return 1;
  }
  for (let i = 0; i < s.length; i++) {
    const element = s.charAt(i);
    let index = strings.indexOf(element);
    if (index != -1) {
      let rem = strings.length - 1 - index;
      if (lengths < length) {
        lengths = length;
      }
      length = rem + 1;
      strings = [...strings.slice(index + 1), element];
    } else {
      strings.push(element);
      length = length + 1;
    }
  }
  if (lengths < length) {
    lengths = length;
  }
  return lengths;
};

console.log(lengthOfLongestSubstring("dvdf"));
//PASSED
