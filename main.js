$(function () {
  function mark (chosenCell) {
    if (player === 1) {
      $(chosenCell).css('color', '#ffffff')
      $(chosenCell).append('<p>X</p>')
      $(chosenCell).css('background-color', '#f88379')
    } else if (player === 2) {
      $(chosenCell).css('color', '#ffffff')
      $(chosenCell).append('<p>O</p>')
      $(chosenCell).css('background-color', '#000080')
    }
  }

  function announce () {
    if (whoWon() === 3) {
      $('.message h1').html('Equally matched')
      $('.click h2').html('Another round?')
    } else if (isGameOver() === false) {
      if (player === 1) {
        $('.message h1').html('It is now X\'s turn')
      } else if (player === 2) {
        $('.message h1').html('It is now O\'s turn')
      }
    } else if (isGameOver() === true) {
      if (player === 1) {
        $('.message h1').html('O wins!')
        $('.click h2').html('Another round?')
      } else if (player === 2) {
        $('.message h1').html('X wins!')
        $('.click h2').html('Another round?')
      }
    }
  }

  function wrapper (chosenCell, index) {
    mark($(chosenCell))
    playTurn(index)
    isGameOver()
    announce()
  }

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
    $('.cell').css('background-color', '#e2e2e2')
    $('.cell p').remove()
    $('.message h1').html('Your move, X')
    $('.click h2').html('Restart')
  })
})
