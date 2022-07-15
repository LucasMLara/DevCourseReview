function revertWord(word) {
  
  if(typeof word !== 'string') {
    return "Insira uma palavra"
  }
  
  let reversedWord = '';

  for(let i = 0; i < word.length; i++){
    reversedWord += word[word.length - 1 - i];
  }
  return reversedWord
}

revertWord('Teste')


function revertWordFancy(word) {
  
    return word.split('').reverse().join('');
}

console.log(revertWordFancy('familia'))