let currentPlayer = '';

let activePlayer = '';

let passivePlayer = '';

let end;

function startPlayer() {
  if (document.getElementById('circleBegins').checked) {
    activePlayer = 'O';
    currentPlayer = activePlayer;
    passivePlayer = 'X';
  } else if (document.getElementById('crossBegins').checked) {
    activePlayer = 'X';
    currentPlayer = activePlayer;
    passivePlayer = 'O';
  }
}

function switchPlayer() {
  activePlayer = passivePlayer;
  passivePlayer = currentPlayer;
  currentPlayer = activePlayer;
}

function choosePlayerShape() {
  switch (currentPlayer) {
    case 'X':
      return crossShape;
    case 'O':
      return circleShape;
  }
}

function choosePlayerArray() {
  switch (currentPlayer) {
    case 'X':
      return crossPlayerChoices;
    case 'O':
      return circlePlayerChoices;
  }
}

function choosePlayerColor() {
  switch (currentPlayer) {
    case 'X':
      return '#B35860';
    case 'O':
      return '#049917';
  }
}

function cellNumber(cellId) {
  return cellNames.indexOf(cellId);
}

function resetPlayerSettings() {
  currentPlayer = '';
  activePlayer = '';
  passivePlayer = '';
  end = undefined;
}
