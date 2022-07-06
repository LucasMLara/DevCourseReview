function whoIsGreater(a, b) {

  if(!+a || !+b)
  return console.log('Insira apenas números')

  if(a > b){
    return console.log(`${a} is Greater than ${b}`)
  }
    return console.log(`${b} is Greater than ${a}`)
}

whoIsGreater(9,88)