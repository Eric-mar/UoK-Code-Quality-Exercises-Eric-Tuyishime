function findEvenNumbers(numbers) {
//   var evenNumbers = [];
//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//     }
//   }
//   return evenNumbers;

// filtering even numbers from the list using filter method

return numbers.filter(num=> num % 2 === 0)
}