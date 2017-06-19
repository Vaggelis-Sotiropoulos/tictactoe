function tictactoe() {
	this.player1 = 'X';
  this.player2 = 'O';
  this.moves = {X: 0, O: 0};
  this.board = [[,,], [,,], [,,]];
}

tictactoe.prototype.enter = function() {
  if ((this.moves.X + this.moves.O) === 9) {
    console.log('STALEMATE! Play again?');
    // prompt users if they wish to play again
  } else if ((this.moves.X + this.moves.O) % 2 === 0) {
    console.log('Player X, please select your desired tile: ');
    // cli X enters its tile and X moves count goes up by 1
    // check if victory
  } else {
    console.log('Player O, please select your desired tile: ');
    // cli O enters its tile and O moves count goes up by 1
    // check if victory
  }
};

tictactoe.prototype.victory = function() {
  var columnCountO = 0;
  var diagonalCountO = 0;
  var rowCountO = 0;

  var columnCountX = 0;
  var diagonalCountX = 0;
  var rowCountX = 0;

  for (var i = 0; i < this.board.length; i++) {
    // check board if three in a row for X or O
  }

  if (columnCountO === 3 || diagonalCountO === 3 || rowCountO === 3) {
    console.log('VICTORY FOR O!');
    // prompt users if they wish to play again
  } else if (columnCountX === 3 || diagonalCountX === 3 || rowCountX === 3) {
    console.log('VICTORY FOR X!');
    // prompt users if they wish to play again
  }
}