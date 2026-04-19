let numbers = [1,24,5,44,3,2,44]

function calculateAverage(numbers) {

let totalSum = numbers.reduce((accumulator,currentValue)=> accumulator + currentValue)
let totalLength = numbers.length
 return totalSum / totalLength
 

}