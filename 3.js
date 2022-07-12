function greaterOfThreeNumbers(a, b, c) {

  if(!+a || !+b)
  return console.log('Insira apenas números')

  if(a > b && a > c){
    return console.log(`${a} is Greater than ${b} and ${c}`)
  }else if (b > a && b > c) {
    return console.log(`${b} is Greater than ${a} and ${c}`)
  }
    return console.log(`${c} is Greater than ${a} and ${b}`)
}

greaterOfThreeNumbers(9999,88, 987)