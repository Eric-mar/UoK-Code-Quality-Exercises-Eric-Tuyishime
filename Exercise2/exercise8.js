function discount(amount) {
  if(typeof amount !== 'number') return 'enter a number'
  return amount > 100 ? amount*0.1 : amount*0.05
}

discount(100)