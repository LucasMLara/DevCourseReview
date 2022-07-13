
function calculator(op ,a ,b) {

  if(typeof a !== 'number' || typeof b !== 'number') {
    return result = 'Insira apenas números'
  }
    
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

// outro teste

function evalCalc(a, op, b) {
  let result = eval(`${a}${op}${b}`)
  console.log(result)
}

evalCalc(1,'+',2)