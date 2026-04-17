function calculateMatrixSum(matrix) {
  // var sum = 0;
  // for (var i = 0; i < matrix.length; i++)
  //   for (var j = 0; j < matrix[i].length; j++)
  //     sum += matrix[i][j];
  // return sum;
  
  // using flat() method that gets multiple array and flats into 1
  let flatteningArray = matrix.flat()
  // reduce it to a single value
  
  return flatteningArray.reduce((accumulator,currentValue)=> accumulator + currentValue)
}

calculateMatrixSum([[0,1],[1,0]]) 