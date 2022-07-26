function isPalindrome(string) {
    let reversedString = string.split('').reverse().join('')
    if(string !== reversedString) return false
    return true
  }
  
  console.log(isPalindrome('arara'))

  
  function indexOfGreatestNumber(array) {
    
        let indexOfGreatestNumber = 0;
    
        for(let number in array){
              if(array[indexOfGreatestNumber] < array[number]){
                    indexOfGreatestNumber = number
                  }
                }
            return indexOfGreatestNumber
        }
        
        console.log(indexOfGreatestNumber(numbers))
        
let numbers = [2, 56, 7, 89, 78, 4, 6, 1]

function indexOfLesserNumber(array) {
  
  let indexOfLesserNumber = 0;

  for(let number in array){
      if(array[indexOfLesserNumber] > array[number]){
          indexOfLesserNumber = number
        }
      }
  return indexOfLesserNumber
}

console.log(indexOfLesserNumber(numbers))

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggetsName(array) {
  let bigNome = '';

  for(nome of array){
    if(nome.length > bigNome.length) {
      bigNome = nome
    }
  }
  return bigNome
}

console.log(biggetsName(names))

let newNumbers = [2, 3, 2, 5, 8, 2, 3]

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

console.log(maisRepetido(newNumbers))

function maisRepetido(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2

// function mostRepeatedNumber(numbers) {
// //  versão errada: eu q fiz
//   let howManyTimes = 0;
//   let repeatedNumber = 0;
//   let indexRepeatedNumber = 0;

//   for(let i in numbers) {
//     let verifyNumber = numbers[i]
//     for(let i2 in numbers) {
//       if(verifyNumber === numbers[i2])
//       howManyTimes++
//     }
//   }
//   if(repeatedNumber > howManyTimes) {
//     howManyTimes = repeatedNumber;
//     indexRepeatedNumber = i
//   }
//   return numbers[indexRepeatedNumber]
// }

// console.log(mostRepeatedNumber(newNumbers))

function sumOfAllNumbersUntilOne(n) {
  if(n < 0) throw new Error('Number must be higher than 0')
  
  let sum = 0;

  for(let i = 1;i <= n;i++){
    sum = sum + i
  }

  return sum
}

console.log(sumOfAllNumbersUntilOne(5))

console.log([1,2,3,4,5,6,7,8].reduce((item, acc) => item + acc, 0 ))