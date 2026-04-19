function findEvenNumbers(numbers) {
    if(typeof numbers !== 'number') return 'not a valid input'
return numbers.filter(num=> num % 2 === 0)
}