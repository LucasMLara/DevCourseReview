function setAmericanGrades(grade) {
  
  let result;

  if(typeof grade !== 'number') {
    return result = 'Insira apenas números'
  }

  if(grade > 100 || grade < 0) {
    result = 'Erro: Nota inserída inválida'
  }
  return result;
}

console.log(setAmericanGrades(-1));
