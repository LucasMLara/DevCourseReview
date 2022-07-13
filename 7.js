function setAmericanGrades(grade) {
  
  let result;

  if(typeof grade !== 'number') {
    return result = 'Insira apenas números'
  } else if(grade > 100 || grade < 0) {
    result = 'Erro: Nota inserída inválida'
  } else if (grade >= 90) {
    result = 'A'
  } else if(grade >= 80) {
    result = 'B'
  } else if(grade >= 70) {
    result = 'C'
  } else if(grade >= 60) {
    result = 'D'
  } else if(grade >= 50) {
    result = 'E'
  } else {
    result = 'F'
  }

  return result;
}

console.log(setAmericanGrades(90));
