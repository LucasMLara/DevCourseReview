function chessPiecesMovements(piece){

  let universalPiece = piece.toLowerCase()
  
  let result;

  switch(universalPiece) {
    case 'king':
      result = 'King Movements'
      break;
    case 'queen':
      result = 'Queen Movements'
      break;
    case 'rook':
      result = 'Rook Movements'
      break;
    case 'bishop':
      result = 'Bishop Movements'
      break;
    case 'knight':
      result = 'Knight Movements'
      break;
    case 'pawn':
      result = 'Pawn Movements'
      break;
    default:
      result = 'Piece Not found in this game'
  }
  return result
}

console.log(chessPiecesMovements('king'))