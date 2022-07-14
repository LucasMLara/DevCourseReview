let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let media;
let howManyOddNumbers = 0;
let higherNumber = numbers[0];
let lowerNumber = numbers[0]

let newArray = []

for(let i = 1; i <=25; i++){
  newArray.push(i / 2)
}
console.log(newArray)

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] % 2 !== 0) {
//     howManyOddNumbers++ 
//   }
// }

// if(howManyOddNumbers === 0) {
//   console.log('Nenhum valo Impar encontrado')
// } else {
//   console.log(howManyOddNumbers)
// }
// for(let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }


// for(let i = 0; i < numbers.length; i++) {
//   result += numbers[i]
// }
// console.log(result)

// console.log(numbers.reduce((acc, item) => acc + item, 0))

// for(let i = 0; i < numbers.length; i++) {
//   media = result += numbers[i] / numbers.length
// }
// if(media > 20) {
//   console.log('Valor maior do que 20')
// } else {
//   console.log('Valor inferior ou igual a 20')
// }
// console.log(Math.ceil(media))


// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] > higherNumber) {
//     higherNumber = numbers[i]
//   }
// }
// console.log(higherNumber)

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] < lowerNumber) {
//     lowerNumber = numbers[i]
//   }
// }
// console.log(lowerNumber);
