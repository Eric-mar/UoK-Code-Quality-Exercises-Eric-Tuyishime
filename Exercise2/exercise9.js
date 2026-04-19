function calculateMatrixSum(matrix) {
  if (!matrix.every(row => Array.isArray(row))) return "Matrix must be a 2D array"  
  let flatteningArray = matrix.flat()
  return flatteningArray.reduce((accumulator,currentValue)=> accumulator + currentValue,0)
}

calculateMatrixSum([[0,1],[1,0]]) 