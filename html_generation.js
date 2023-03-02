//templates
let mainTable = /*html*/ `<table class="main-grid" id="mainGrid"></table>`;

function mainRowTemplate(row) {
  return /*html*/ `
    <tr id="row${row}"></tr>`;
}

function mainColumnTemplate(row, column) {
  return /*html*/ `
        <td class="box-standard cell${row}${column}">
            <table  class="inner-grid no-pointer" id="cell${row}${column}" 
                    onmouseenter="showHoverEffect('cell${row}${column}')" 
                    onmouseleave="deleteHoverEffect('cell${row}${column}')" 
                    onclick="fillCell('cell${row}${column}')">
            </table>
        </td>`;
}

function innerRowTemplate(idName) {
  return /*html*/ `
    <tr id="${idName}">${createPixels(idName)}</tr>`;
}

function innerColumnTemplate(idName, num) {
  return /*html*/ `
    <td class="pixel" id="${idName}c${num}">
        <div class="pixel-inner">
            <div class="pixel-front"></div>
            <div class="pixel-back"></div>
        </div>
    </td>`;
}

let settingScreen = /*html*/ `
<div>
  <span>Startplayer:</span>
  <label class="input-container" style="color: #049917">
    O (P1)
    <input type="radio" checked="checked" name="beginner" id="circleBegins" />
    <span class="checkmark"></span>
  </label>
  <label class="input-container" style="color: #B35860">
    X (P2)
    <input type="radio" name="beginner" id="crossBegins" />
    <span class="checkmark"></span>
  </label>
</div>`;

let startButton = /*html*/ `<div class="start-button" onclick="startGame()"><span>START</span></div>`;

let restartButton = /*html*/ `<div class="start-button" onclick="restart()"><span>RESTART</span></div>`;

//generate playing field
function createTable() {
  content('main').innerHTML += mainTable;
  for (let row = 0; row < 3; row++) {
    content('mainGrid').innerHTML += mainRowTemplate(row);
    createBox(row);
  }
}

function createBox(row) {
  for (let column = 0; column < 3; column++) {
    content('row' + row).innerHTML += mainColumnTemplate(row, column);
    createInnerBox(row, column);
  }
}

function createInnerBox(row, column) {
  let cellName = 'cell' + row + column;
  cellNames.push(cellName);
  for (let i = 0; i < 7; i++) {
    content(cellName).innerHTML += createPixelBox(cellName, i);
  }
}

function createPixelBox(cellName, pxNum) {
  let idName = cellName + 'r' + pxNum;
  let content = innerRowTemplate(idName);
  return content;
}

function createPixels(idName) {
  let content = '';
  for (let i = 0; i < 7; i++) {
    content += innerColumnTemplate(idName, i);
  }
  return content;
}

function writeGameName() {
  for (let i = 0; i < cellNames.length; i++) {
    let letterName = eval('letter' + gameName[i]);
    letterName.forEach((element) => {
      content(cellNames[i] + element).classList.toggle('filled');
    });
  }
}

function startMessage() {
  screenChange('container', settingScreen);
  screenChange('buttons', startButton);
}

function content(id) {
  return document.getElementById(id);
}
