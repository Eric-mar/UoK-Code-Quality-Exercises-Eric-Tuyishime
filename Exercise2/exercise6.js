function maxNumber(a, b, c) {
  let sortingDescendingOrder = [a,b,c].sort((a,b)=>b-a,0)
  return sortingDescendingOrder[0]
  }
maxNumber(1,3,2)