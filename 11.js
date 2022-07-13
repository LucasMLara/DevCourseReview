function lionGetMyMoney(salary) {
  let INSS;
  let IR;

  if(typeof salary !== 'number') {
    return 'Insira apenas números'
  }

  if (salary <= 1556.94) {
    INSS = salary * .8
  } else if (salary <= 2594.92) {
    INSS = salary * .9
  } else if (salary <= 5189.82) {
    INSS = salary * .11
  } else {
    INSS = 570.88
  }

  let baseSalary = salary - INSS;

    if(baseSalary <= 1903.98) {
      IR = 0 
  } else if (baseSalary <= 2826.65) {
    IR = (baseSalary * .075) - 142.8
  } else if(baseSalary <= 3751.05) {
    IR = (baseSalary * .15) - 354.8
  } else if (baseSalary <= 4664.68) {
    IR = (baseSalary * 0.225) - 636.13
  } else {
    IR = (baseSalary * 0.275) - 869.36
}

  return baseSalary - IR

}

console.log(lionGetMyMoney(3000))