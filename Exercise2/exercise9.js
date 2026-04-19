function calculateMatrixSum(matrix) {

  let flatteningArray = matrix.flat()

  return flatteningArray.reduce((accumulator,currentValue)=> accumulator + currentValue,0)
}

calculateMatrixSum([[0,1],[1,0]]) 