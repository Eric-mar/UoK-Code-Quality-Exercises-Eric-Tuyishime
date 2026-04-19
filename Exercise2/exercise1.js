let numbers = [1,24,5,44,3,2,44]

const average = (numbers)=>{

    if(typeof numbers !==number ) return "enter numbers"
 return numbers.reduce((accumulator,currentValue)=> accumulator + currentValue)/numbers.length

}
console.log(average(numbers))

