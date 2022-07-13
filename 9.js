function evenOdd(a,b,c) {

  if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return 'Insira apenas números'
  }

  if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
    return true
  }
  return false
}

console.log(evenOdd(2,2,2))