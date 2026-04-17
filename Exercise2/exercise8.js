function discount(amount) {
//   var disc;
//   if (totalamount > 100) {
//     disc = totalamount * 0.1;
//   } else {
//     disc = totalamount * 0.05;
//   }
//   return disc;
// }
  
  // handling the types of input
  
  if(typeof amount !== 'number') return 'enter the valid amount'

  // discount according to the amount
  
  return amount > 100 ? amount*0.1 : amount*0.05
}

discount(100)