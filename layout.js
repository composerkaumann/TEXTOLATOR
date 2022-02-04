"use strict";
//
function generateDivs(quantity) {
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  const calc = document.createElement("div");
  calc.setAttribute("id", "calc");
  container.appendChild(calc);
  document.body.appendChild(container);
  for (let y = 0; y < quantity; y++) {
    const cell = document.createElement("div");
    cell.setAttribute("id", `${y}`);
    document.getElementById("calc").appendChild(cell);
  }
}
generateDivs(500);
//
function displayDivClass(start) {
  for (let i = 0, len = 10; i < len; i++) {
    const titleDiv = document.getElementById(start + i);
    titleDiv.setAttribute("class", "display");
  }
}
displayDivClass(53);
//
function createBtn(middleDivId, btnValue) {
  document.getElementById(middleDivId).textContent = btnValue;
  const btnDivs = [middleDivId - 1, middleDivId, middleDivId + 1];
  const btnElements = btnDivs.map((id) => document.getElementById(id));
  btnElements.forEach((occ) => {
    occ.classList.add("btn");
  });
}
createBtn(129, "\u0043");
createBtn(134, "\u00B1");
createBtn(204, 7);
createBtn(209, 8);
createBtn(214, 9);
createBtn(220, "\u002B");
createBtn(279, 4);
createBtn(284, 5);
createBtn(289, 6);
createBtn(295, "\u002D");
createBtn(354, 1);
createBtn(359, 2);
createBtn(364, 3);
createBtn(370, "\u002A");
createBtn(429, 0);
createBtn(434, "\u002E");
createBtn(439, "\u003D");
createBtn(445, "\u002F");
//
function calcTitle(start) {
  const title = ["T", "E", "X", "T", "O", "L", "A", "T", "O", "R"];
  for (let i = 0; i < title.length; i++) {
    const titleDiv = document.getElementById(start + i);
    titleDiv.textContent = title[0 + i];
    titleDiv.setAttribute("class", "title");
  }
}
calcTitle(138);
//
function makeBoxes() {
  const verticalLine = [];
  const horLowLine = [];
  const horHiLine = [];

  for (let i = 25; i < 475; ) {
    verticalLine.push(i);
    i = i + 24;
    verticalLine.push(i);
    i = i + 1;
  }

  for (let i = 52; i < 73; i++) {
    verticalLine.push(i);
    i = i + 1;
  }
  verticalLine.push(127, 131, 132, 136);

  const vertAdd = [202, 206, 207, 211, 212, 216, 218, 222];
  for (let i = 0; i < 4; i++) {
    verticalLine.push(...vertAdd.map((v) => v + 75 * i));
  }

  for (let i = 1; i < 24; i++) {
    horLowLine.push(i);
  }
  for (let i = 28; i < 47; i++) {
    horLowLine.push(i);
  }

  horLowLine.push(103, 104, 105, 108, 109, 110);
  const horLoAdd = [178, 179, 180, 183, 184, 185, 188, 189, 190, 194, 195, 196];
  for (let i = 0; i < 4; i++) {
    horLowLine.push(...horLoAdd.map((v) => v + 75 * i));
  }

  for (let i = 78; i < 97; i++) {
    horHiLine.push(i);
  }

  for (let i = 476; i < 499; i++) {
    horHiLine.push(i);
  }

  horHiLine.push(153, 154, 155, 158, 159, 160);
  const horHiAdd = [228, 229, 230, 233, 234, 235, 238, 239, 240, 244, 245, 246];
  for (let i = 0; i < 4; i++) {
    horHiLine.push(...horHiAdd.map((v) => v + 75 * i));
  }

  for (let i = 53; i < 72; i++) {
    document.getElementById(i).setAttribute("class", "display");
  }

  populateBox(verticalLine, "\u007C", "vert");
  populateBox(horLowLine, "\u005F", "horLo");
  populateBox(horHiLine, "\u203E", "horHi");
}
//
function populateBox(arr, content, clazz) {
  const elements = arr.map((id) => document.getElementById(id));
  elements.forEach((occurrence) => {
    occurrence.textContent = content;
    occurrence.setAttribute("class", clazz);
  });
}
makeBoxes();
