let cellNames = [];

let currentState = ['', '', '', '', '', '', '', '', ''];

let emptyCells = ['', '', '', '', '', '', '', '', ''];

let crossShape = ['r0c0', 'r1c1', 'r2c2', 'r3c3', 'r4c4', 'r5c5', 'r6c6', 'r0c6', 'r1c5', 'r2c4', 'r4c2', 'r5c1', 'r6c0'];

let circleShape = ['r0c3', 'r0c4', 'r1c5', 'r2c6', 'r3c6', 'r4c6', 'r5c5', 'r6c4', 'r6c3', 'r6c2', 'r5c1', 'r4c0', 'r3c0', 'r2c0', 'r1c1', 'r0c2'];

let gameName = ['T', 'I', 'C', 'T', 'A', 'C', 'T', 'O', 'E'];

let letterT = ['r0c0', 'r0c1', 'r0c2', 'r0c3', 'r0c4', 'r0c5', 'r0c6', 'r1c3', 'r2c3', 'r3c3', 'r4c3', 'r5c3', 'r6c3'];

let letterI = ['r0c3', 'r1c3', 'r2c3', 'r3c3', 'r4c3', 'r5c3', 'r6c3'];

let letterC = ['r0c5', 'r0c4', 'r0c3', 'r0c2', 'r1c1', 'r2c0', 'r3c0', 'r4c0', 'r5c1', 'r6c2', 'r6c3', 'r6c4', 'r6c5'];

let letterA = ['r0c3', 'r1c2', 'r1c4', 'r2c1', 'r2c5', 'r3c1', 'r3c5', 'r4c1', 'r4c2', 'r4c3', 'r4c4', 'r4c5', 'r5c1', 'r5c5', 'r6c1', 'r6c5'];

let letterO = ['r0c3', 'r0c4', 'r1c5', 'r2c6', 'r3c6', 'r4c6', 'r5c5', 'r6c4', 'r6c3', 'r6c2', 'r5c1', 'r4c0', 'r3c0', 'r2c0', 'r1c1', 'r0c2'];

let letterE = ['r0c0', 'r0c1', 'r0c2', 'r0c3', 'r0c4', 'r0c5', 'r1c0', 'r2c0', 'r3c0', 'r3c1', 'r3c2', 'r3c3', 'r4c0', 'r5c0', 'r6c0', 'r6c1', 'r6c2', 'r6c3', 'r6c4', 'r6c5'];

let circlePlayerChoices = [];

let crossPlayerChoices = [];

let winningCells = [];

let calculatingStance = true;

function tableIsEmpty() {
  return currentState.every((x) => x === '');
}

function tableIsFull() {
  return currentState.every((x) => x !== '');
}

function resetArrays() {
  cellNames = [];
  currentState = ['', '', '', '', '', '', '', '', ''];
  emptyCells = ['', '', '', '', '', '', '', '', ''];
  circlePlayerChoices = [];
  crossPlayerChoices = [];
  winningCells = [];
  calculatingStance = true;
  resetPlayerSettings();
}
