function reverseString(str) {
//   var reversed = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;

  // spliting the str
  let splitting = str.split('')

  // using reverse method and join  them
  return splitting.reverse().join('')

}