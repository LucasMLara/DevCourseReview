function revertWord(word) {
  
  let reversedWord = '';
  
  if(typeof word !== 'string') {
    return "Insira uma palavra"
  }

  for(let i = 0; i < word.length; i++){
    reversedWord += word[word.length - 1 - i];
  }
  return reversedWord
}

console.log(revertWord('alo'))

function revertWordFancy(word) {
  
    return word.split('').reverse().join('');
}

console.log(revertWordFancy('familia'))