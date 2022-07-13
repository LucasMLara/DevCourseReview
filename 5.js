function isTriangle(a,b,c) {


  if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return 'Insira apenas números'
  }

  if(a < 0 || b < 0 || c < 0){
    return 'um dos ângulos inseridos é inválido'
  }

  if( a + b + c !== 180) {
    return false
  } else {
    return true
  }
}

console.log(isTriangle(60,60,60))