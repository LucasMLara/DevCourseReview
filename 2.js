function whoIsGreater(a, b) {

  if(typeof a !== 'number' || typeof b !== 'number') {
    return result = 'Insira apenas números'
  }

  if(a > b){
    return console.log(`${a} is Greater than ${b}`)
  }
    return console.log(`${b} is Greater than ${a}`)
}

whoIsGreater(9,88)