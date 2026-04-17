function maxNumber(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else {
//     if (b > a && b > c) {
//       return b;
//     } else {
//       return c;
//     }
//   }
// }
  
// sorting the numbers in descending order

  let sortingDescendingOrder = [a,b,c].sort((a,b)=>b-a,0)
  
  return sortingDescendingOrder[0]
  }

maxNumber(1,3,2)