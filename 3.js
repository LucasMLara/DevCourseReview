let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigWord = array[0];
let smallWord= array[0];

function biggestWord(array) {
  for(let i = 0; i < array.length; i++){
    if(array[i].length > bigWord.length ){
      bigWord = array[i]
    }
  }
  return bigWord
}

console.log('biggestWord: ', biggestWord(array))

function smallestWord(array) {
  for(let i = 0; i < array.length; i++) {
    for(let i = 0; i < array.length; i++){
      if(array[i].length < smallWord.length ){
        smallWord = array[i]
      }
    }
    return smallWord
  }
}

console.log('smallestWord: ',smallestWord(array))