const recursiveArr = (arr)=>{
  if (arr.length === 0) return false
  return arr[0] + recursiveArr(arr.slice(1))
}