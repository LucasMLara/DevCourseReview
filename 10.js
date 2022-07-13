function setProfit(cost, sellPrice) {
  
  if(typeof cost !== 'number' || typeof sellPrice !== 'number') {
    return 'Insira apenas números'
  }

  if(cost < 0 || sellPrice < 0) {
    return 'Valor inserido inferior à Zero'
  }
  
  let taxedCost = cost * 1.2;

  if(taxedCost > sellPrice) {
    return 'Não haverá lucro algum'
  }
  
  return sellPrice - taxedCost;
  
}

console.log(setProfit(90, 20))