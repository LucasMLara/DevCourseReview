function isGreaterThanZero(number) {
  let result;
  
  if(typeof number !== 'number') {
    return result = 'Insira apenas números'
  }
  
    if (number > 0) {
      return result = 'Greater than 0'
    } else if (number < 0) {
      return result = 'Less than 0'
    } else {
      return result = 'Equals 0'
    }
}

console.log(isGreaterThanZero(0))