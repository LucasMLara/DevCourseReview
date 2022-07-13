function isTriangle(a,b,c) {
  
  let result;

  if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return result = 'Insira apenas números'
  }

  if(a < 0 || b < 0 || c < 0){
    return result = 'um dos ângulos inseridos é inválido'
  }

  if( a + b + c !== 180) {
    return result = false
  } else {
    return result = true
  }
}

console.log(isTriangle(60,60,60))