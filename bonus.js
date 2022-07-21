// function printSquare(n, s) {
//   let inputLine = '';

//   for(let j = 0; j < n; j++){
//     inputLine = inputLine + s
//   }
//   for(let i = 0; i < n; i++){
//     console.log(inputLine)
//   }
// }

// printSquare(2, '%')


// function printLeftTriangle(size, symbol) {
//   let inputLine = '';

//   for(let i = 0; i <= size; i++){
//     console.log(inputLine)
//     inputLine = inputLine + symbol
//   }

// }

// printLeftTriangle(5, '*')

function printRightTriangle(size, symbol) {
  let inputLine = '';

  for(let i = 0; i <= size; i++){
    console.log(inputLine)
    inputLine = inputLine + symbol
  }

}

printRightTriangle(5, '*')