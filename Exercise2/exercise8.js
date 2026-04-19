function discount(amount) {
  if(typeof amount !== 'number') return 'enter the valid amount'
  return amount > 100 ? amount*0.1 : amount*0.05
}

discount(100)