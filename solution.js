var moves = []
var movesPlayerOne = []
var movesPlayerTwo = []
var player = 1

function playTurn (index) {
  if (moves.includes(index)) {
    return false
  } else if (isGameOver() === true) {
    return false
  } else if (player === 1) {
    movesPlayerOne.push(index)
    moves.push(index)
    player = 2
    return true
  } else if (player === 2) {
    movesPlayerTwo.push(index)
    moves.push(index)
    player = 1
    return true
  }
}

function isGameOver () {
  if (whoWon()) {
    return true
  } else {
    return false
  }
}

/*
array.includes(searchElement, fromIndex)
This method does not search for > 1 element
*/

function whoWon () {
  if (movesPlayerOne.includes(0) && movesPlayerOne.includes(1) && movesPlayerOne.includes(2) ||
      movesPlayerOne.includes(3) && movesPlayerOne.includes(4) && movesPlayerOne.includes(5) ||
      movesPlayerOne.includes(6) && movesPlayerOne.includes(7) && movesPlayerOne.includes(8) ||
      movesPlayerOne.includes(0) && movesPlayerOne.includes(3) && movesPlayerOne.includes(6) ||
      movesPlayerOne.includes(1) && movesPlayerOne.includes(4) && movesPlayerOne.includes(7) ||
      movesPlayerOne.includes(2) && movesPlayerOne.includes(5) && movesPlayerOne.includes(8) ||
      movesPlayerOne.includes(2) && movesPlayerOne.includes(4) && movesPlayerOne.includes(6) ||
      movesPlayerOne.includes(0) && movesPlayerOne.includes(4) && movesPlayerOne.includes(8)) {
    return 1
  } else if (movesPlayerTwo.includes(0) && movesPlayerTwo.includes(1) && movesPlayerTwo.includes(2) ||
             movesPlayerTwo.includes(3) && movesPlayerTwo.includes(4) && movesPlayerTwo.includes(5) ||
             movesPlayerTwo.includes(6) && movesPlayerTwo.includes(7) && movesPlayerTwo.includes(8) ||
             movesPlayerTwo.includes(0) && movesPlayerTwo.includes(3) && movesPlayerTwo.includes(6) ||
             movesPlayerTwo.includes(1) && movesPlayerTwo.includes(4) && movesPlayerTwo.includes(7) ||
             movesPlayerTwo.includes(2) && movesPlayerTwo.includes(5) && movesPlayerTwo.includes(8) ||
             movesPlayerTwo.includes(2) && movesPlayerTwo.includes(4) && movesPlayerTwo.includes(6) ||
             movesPlayerTwo.includes(0) && movesPlayerTwo.includes(4) && movesPlayerTwo.includes(8)) {
    return 2
  } else if (moves.length === 9) {
    return 3
  } else {
    return 0
  }
}

function restart () {
  moves = []
  movesPlayerOne = []
  movesPlayerTwo = []
  player = 1
}
