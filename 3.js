// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let bigWord = array[0];
// let smallWord= array[0];

// function biggestWord(array) {
//   for(let i = 0; i < array.length; i++){
//     if(array[i].length > bigWord.length ){
//       bigWord = array[i]
//     }
//   }
//   return bigWord
// }

// console.log('biggestWord: ', biggestWord(array))

// function smallestWord(array) {
//   for(let i = 0; i < array.length; i++) {
//     for(let i = 0; i < array.length; i++){
//       if(array[i].length < smallWord.length ){
//         smallWord = array[i]
//       }
//     }
//     return smallWord
//   }
// }

// console.log('smallestWord: ',smallestWord(array))


function primeNumberLucas(firstNumber, secondNumber){
  
  
  let passouNosegundoFor = 0
  let passouNoprimeiroFordoLucas = 0
  
  if(typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
      throw new Error('Insira apenas números')
    }

  if(firstNumber > secondNumber) {
    throw new Error('O primeiro parâmetro deve conter um numero inferior ao segundo parâmetro')
  }
  
    if(secondNumber === 2 ) {
      return secondNumber
    }

    let result; 
    
    let initialValue = firstNumber % 2 === 0 ? firstNumber + 1 : firstNumber

    console.log('primeNumberLucas')
  for(let currentNumber = firstNumber; currentNumber <= secondNumber; currentNumber+=2){
    passouNoprimeiroFordoLucas++
    
    let prime = true;
    for(let currentDivisor = firstNumber; currentDivisor < currentNumber; currentDivisor++ ) {
      
      if(currentNumber % currentDivisor === 0){
        prime = false
      }
    }
    if(prime) {
      result = currentNumber
    }
  }0
  console.log('passou no primeiro for', passouNoprimeiroFordoLucas)
  return result;
}

console.log(primeNumberLucas(3,10000))


// function primeNumberMurilo(firstNumber, secondNumber){

//   let passouNoprimeiroFordoMurilo = 0
  
  
//   if(typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
//       return 'Insira apenas números'
//     }
    
  
//     let result; 
//     console.log('primeNumberMurilo')
//   for(let currentNumber = secondNumber; currentNumber >= firstNumber; currentNumber--){
//     passouNoprimeiroFordoMurilo++
//     // console.log('primeiro for')
//     let prime = true;
//     for(let currentDivisor = firstNumber; currentDivisor < currentNumber; currentDivisor++ ) {
//       // console.log('segundo for')
//       if(currentNumber % currentDivisor === 0){
//         prime = false
//       }
//     }
//     if(prime) {
//       console.log('passouNoprimeiroFordoMurilo: ', passouNoprimeiroFordoMurilo)
//       return currentNumber
//     }
//   }0
//   return result;
// }

// console.log(primeNumberMurilo(2,10000))

/** _____________________________ */

// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);