function factorial(number) {
  let factorial = 1;
  if(typeof number !== 'number') {
    return 'Insira apenas números'
  }

  for(let i = number; i > 0; i--) {
    factorial *= i
  }
  return factorial
}

factorial(10)

/* Recursion */
function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
factorialize(5);



