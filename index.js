
function calculator(op ,a ,b) {
  if(!+a || !+b)
  
  return console.log('Insira apenas números')
    
  let result;
  
  switch(op){
    case '+':
      result = a + b
      console.log(`${a} + ${b} = ${result}`)
      break;
    case '-':
      result = a - b
      console.log(`${a} - ${b} = ${result}`)
      break;
    case '*':
      result = a * b
      console.log(`${a} * ${b} = ${result}`)
      break;
    case '/':
      result = a / b
      console.log(`${a} / ${b} = ${result}`)
      break;
    case '%':
      result = a % b
      console.log(`${a} % ${b} = ${result}`)
      break;
    default:
      console.log('Operation Not Defined')
  }
}

calculator('+', '5', 5)