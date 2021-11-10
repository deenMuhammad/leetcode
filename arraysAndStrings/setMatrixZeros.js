// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

// You must do it in place.

// Example 1:

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 1:

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const indexes = [];
  let results = [...matrix];
  for (let i = 0; i < matrix.length; i++) {
    //first depth
    for (let j = 0; j < matrix[i].length; j++) {
      //second depth
      const element = matrix[i][j];
      if (element == 0) {
        //do the magic here
        //first change all the rows
        for (let index = 0; index < matrix.length; index++) {
          indexes.push([index, j]);
        }
        for (let j = 0; j < matrix[i].length; j++) {
          indexes.push([i, j]);
        }
      }
    }
  }
  for (let k = 0; k < indexes.length; k++) {
    const element = indexes[k];
    results[element[0]][element[1]] = 0;
  }
  return results;
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

//PASSED
