function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//field interactions
async function startGame() {
  startPlayer();
  writeGameName();
  screenChange('container', currentPlayer + "'s turn", '');
  screenChange('buttons', '', '');
  await wait(500);
  calculatingStance = false;
}

async function restart() {
  resetArrays();
  content('main').innerHTML = '';
  screenChange('container', '', '');
  screenChange('buttons', '', '');
  createTable();
  writeGameName();
  startMessage();
}

function screenChange(div, template, playerColor) {
  content(div).style.opacity = 0;
  setTimeout(function () {
    loadTemp(div, template);
    content(div).style.opacity = 1;
    content(div).style.color = playerColor;
  }, 500);
}

function loadTemp(div, template) {
  content(div).innerHTML = '';
  content(div).innerHTML = template;
}

function addClassToArrayList(id, classString) {
  choosePlayerShape().forEach((element) => {
    content(id + element).classList.add(classString);
  });
}

function removeClassToArrayList(id, classString) {
  choosePlayerShape().forEach((element) => {
    content(id + element).classList.remove(classString);
  });
}

function showHoverEffect(cellId) {
  if (!end && !currentState[cellNumber(cellId)] && !calculatingStance) {
    content(cellId).classList.remove('no-pointer');
    addClassToArrayList(cellId, 'hover-color');
  }
}

function deleteHoverEffect(cellId) {
  if (!end && !currentState[cellNumber(cellId)] && !calculatingStance) {
    content(cellId).classList.add('no-pointer');
    removeClassToArrayList(cellId, 'hover-color');
  }
}

async function fillCell(cellId) {
  if (!end && !currentState[cellNumber(cellId)] && !calculatingStance) {
    calculatingStance = true;
    removeClassToArrayList(cellId, 'hover-color');
    await wait(100);
    flipAnimation(cellId);
    betweenMoves(cellId);
  }
}

function flipAnimation(id) {
  choosePlayerShape().forEach((element) => {
    content(id + element).firstElementChild.classList.toggle('pixel-inner');
    content(id + element).firstElementChild.classList.toggle('pixel-inner-transformed');
  });
}

async function betweenMoves(cellId) {
  choosePlayerArray().push(cellNumber(cellId));
  currentState[cellNumber(cellId)] = currentPlayer;
  content(cellId).classList.add('no-pointer');
  checkIfWon();
  await wait(500);
  theGameMustGoOn();
}

async function theGameMustGoOn() {
  if (!end) {
    switchPlayer();
    screenChange('container', currentPlayer + "'s turn", '');
    await wait(500);
    calculatingStance = false;
  }
}

//win
function checkIndex(cellCheck) {
  if (choosePlayerArray().indexOf(cellCheck) < 0) {
    return false;
  } else {
    return true;
  }
}

function searchForWinningCells(cell1, cell2, cell3) {
  if (checkIndex(cell1) + checkIndex(cell2) + checkIndex(cell3) == 3) {
    playerWins(cell1, cell2, cell3);
  }
}

async function playerWins(cell1, cell2, cell3) {
  winningCells.push(cellNames[cell1], cellNames[cell2], cellNames[cell3]);
  disableAllCells();
  await wait(500);
  paintWin(winningCells, choosePlayerColor());
  end = currentPlayer;
  screenChange('container', end + ' wins!', choosePlayerColor());
  await wait(1000);
  screenChange('buttons', restartButton, '');
}

function paintWin(array, color) {
  array.forEach((element) => {
    content(element).parentElement.style.backgroundColor = color;
  });
}

function checkIfWon() {
  searchForWinningCells(0, 1, 2);
  searchForWinningCells(3, 4, 5);
  searchForWinningCells(6, 7, 8);
  searchForWinningCells(0, 3, 6);
  searchForWinningCells(1, 4, 7);
  searchForWinningCells(2, 5, 8);
  searchForWinningCells(0, 4, 8);
  searchForWinningCells(2, 4, 6);
  draw();
}

async function draw() {
  if (tableIsFull() && end !== null) {
    end = 'Nobody';
    screenChange('container', end + ' wins...', '#c09426');
    await wait(1000);
    screenChange('buttons', restartButton, '');
  }
}

function disableAllCells() {
  cellNames.forEach((element) => {
    content(element).classList.add('no-pointer');
  });
}
