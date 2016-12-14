$(function () {
  function mark (chosenCell) {
    if (player === 1) {
      $(chosenCell).css('color', '#000000')
      $(chosenCell).append('<p>X</p>')
    } else if (player === 2) {
      $(chosenCell).css('color', '#ffffff')
      $(chosenCell).append('<p>O</p>')
    }
  }

  function colorChange (chosenCell) {
    $(chosenCell).css('background-color', '#4D72B2')
  }

  function announce () {
    if (whoWon() === 3) {
      $('.message h1').html('Looks like a draw')
    } else if (isGameOver() === false) {
      if (player === 1) {
        $('.message h1').html('It is now X\'s turn')
      } else if (player === 2) {
        $('.message h1').html('It is now O\'s turn')
      }
    } else if (isGameOver() === true) {
      $('.message h1').html('Player ' + player + ' wins!')
    }
  }

  function wrapper (chosenCell, index) {
    mark($(chosenCell))
    colorChange(chosenCell)
    playTurn(index)
    isGameOver()
    announce()
  }
  $('.cell').hover(function () {
    $(this).css('cursor', 'pointer')
  })

  $('#zero').on('click', function () {
    if (isGameOver() === false) {
      wrapper(('#zero'), 0)
    }
  })

  $('#one').on('click', function () {
    if (isGameOver() === false) {
      wrapper(('#one'), 1)
    }
  })

  $('#two').on('click', function () {
    if (isGameOver() === false) {
      wrapper(('#two'), 2)
    }
  })

  $('#three').on('click', function () {
    if (isGameOver() === false) {
      wrapper(('#three'), 3)
    }
  })

  $('#four').on('click', function () {
    if (isGameOver() === false) {
      wrapper(('#four'), 4)
    }
  })

  $('#five').on('click', function () {
    if (isGameOver() === false) {
      wrapper(('#five'), 5)
    }
  })

  $('#six').on('click', function () {
    if (isGameOver() === false) {
      wrapper(('#six'), 6)
    }
  })

  $('#seven').on('click', function () {
    if (isGameOver() === false) {
      wrapper(('#seven'), 7)
    }
  })

  $('#eight').on('click', function () {
    if (isGameOver() === false) {
      wrapper(('#eight'), 8)
    }
  })

  $('.click').on('click', function () {
    restart()
    $('.cell').css('background-color', '#183465')
    $('.cell p').remove()
    $('.message h1').html('Who will go first?')
  })
})
