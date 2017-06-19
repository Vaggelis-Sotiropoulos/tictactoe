function tictactoe() {
	this.player1 = 'X';
  this.player2 = 'O';
  this.moves = {X: 0, O: 0};
  this.board = [[,,], [,,], [,,]];
}

tictactoe.prototype.enter = function() {
  if ((this.moves.X + this.moves.O) === 9) {
    console.log('STALEMATE! Play again?');

  } else if ((this.moves.X + this.moves.O) % 2 === 0) {
    console.log('Current Board: ', this.board);

    var putItIn = prompt('Player X: Please Select row and column (no space and in that order) to place your X: ');
    var rowColumn = putItIn.split('').map(function(item) {
      return Number(item);
    });

    this.board[rowColumn[0]][rowColumn[1]] = 'X';
    this.moves.X += 1;

    this.victory();

  } else {
    console.log('Current Board: ', this.board);

    var putItIn = prompt('Player O: Please Select row and column (no space and in that order) to place your O: ');
    var rowColumn = putItIn.split('').map(function(item) {
      return Number(item);
    });

    this.board[rowColumn[0]][rowColumn[1]] = 'O';
    this.moves.O += 1;

    this.victory();
  }
};

tictactoe.prototype.victory = function() {
  var columnCountO = 0;
  var diagonalCountO = 0;
  var rowCountO = 0;

  var columnCountX = 0;
  var diagonalCountX = 0;
  var rowCountX = 0;
  var theVictory = false

  if(this.board[0][0] === 'X' && this.board[1][1] === 'X' && this.board[2][2] === 'X') {
    console.log('VICTORY FOR X!');
    theVictory = true;
  }

  if(this.board[0][2] === 'X' && this.board[1][1] === 'X' && this.board[2][0] === 'X') {
    console.log('VICTORY FOR X!');
    theVictory = true;
  }
 
  if(this.board[0][0] === 'O' && this.board[1][1] === 'O' && this.board[2][2] === 'O') {
    console.log('VICTORY FOR O!');
    theVictory = true;
  }

  if(this.board[0][2] === 'O' && this.board[1][1] === 'O' && this.board[2][0] === 'O') {
    console.log('VICTORY FOR O!');
    theVictory = true;
  }

  if (this.board[0][0] === 'X' && this.board[1][0] === 'X' && this.board[2][0] === 'X') {
    console.log('VICTORY FOR X!');
    theVictory = true;
  }

  if (this.board[0][1] === 'X' && this.board[1][1] === 'X' && this.board[2][1] === 'X') {
    console.log('VICTORY FOR X!');
    theVictory = true;
  }

  if (this.board[0][2] === 'X' && this.board[1][2] === 'X' && this.board[2][2] === 'X') {
    console.log('VICTORY FOR X!');
    theVictory = true;
  }

  if (this.board[0][0] === 'O' && this.board[1][0] === 'O' && this.board[2][0] === 'O') {
    console.log('VICTORY FOR O!');
    theVictory = true;
  }

  if (this.board[0][1] === 'O' && this.board[1][1] === 'O' && this.board[2][1] === 'O') {
    console.log('VICTORY FOR O!');
    theVictory = true;
  }

  if (this.board[0][2] === 'O' && this.board[1][2] === 'O' && this.board[2][2] === 'O') {
    console.log('VICTORY FOR O!');
    theVictory = true;
  }

  if (theVictory === false) {
    this.enter();
  }
}

