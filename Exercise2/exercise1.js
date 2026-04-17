let numbers = [1,24,5,44,3,2,44]

function calculateAverage(numbers) {
//   var sum = 0;
//   var count = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     count++;
//   }
//   var average = sum / count;
//   return average;

// calculating the sum of numbers
let totalSum = numbers.reduce((accumulator,currentValue)=> accumulator + currentValue)

// calculating the size of the numbers
let totalLength = numbers.length
 // calculating the average
 let average = totalSum / totalLength
 return average

}