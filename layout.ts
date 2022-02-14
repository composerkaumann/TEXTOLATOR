"use strict";
//
// Define and generate all divs.
//
function generateDivs(quantity) {
  var container = document.createElement("div");
  container.setAttribute("id", "container");
  var calc = document.createElement("div");
  calc.setAttribute("id", "calc");
  container.appendChild(calc);
  document.body.appendChild(container);
  for (var y = 0; y < quantity; y++) {
    var cell = document.createElement("div");
    cell.setAttribute("id", "".concat(y));
    document.getElementById("calc").appendChild(cell);
  }
}
generateDivs(500);
//
// Set class to calculator display divs.
//
function displayDivClass(start) {
  for (var i = 0, len = 10; i < len; i++) {
    var titleDiv = document.getElementById(start + i);
    titleDiv.setAttribute("class", "display");
  }
}
displayDivClass(53);
//
// Define all button click areas that consist of 3 adjacent divs.
//
function createBtn(middleDivId, btnValue) {
  document.getElementById(middleDivId).textContent = btnValue;
  var btnDivs = [middleDivId - 1, middleDivId, middleDivId + 1];
  var btnElements = btnDivs.map(function (id) {
    return document.getElementById(id);
  });
  btnElements.forEach(function (occ) {
    occ.classList.add("btn");
    occ.addEventListener(
      "mousedown",
      function () {
        // Typescript error because function in another file
        btnEvent(btnValue);
      },
      false
    );
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
// Define the title and spread it to divs.
//
function calcTitle(start) {
  var title = ["T", "E", "X", "T", "O", "L", "A", "T", "O", "R"];
  for (var i = 0; i < title.length; i++) {
    var titleDiv = document.getElementById(start + i);
    titleDiv.textContent = title[0 + i];
    titleDiv.setAttribute("class", "title");
  }
}
calcTitle(138);
//
// Define the divs for visual borders for calc, display, buttons.
//
function makeBoxes() {
  var verticalLine = [];
  var horLowLine = [];
  var horHiLine = [];
  for (var i = 25; i < 475; ) {
    verticalLine.push(i);
    i = i + 24;
    verticalLine.push(i);
    i = i + 1;
  }
  for (var i = 52; i < 73; i++) {
    verticalLine.push(i);
    i = i + 1;
  }
  verticalLine.push(127, 131, 132, 136);
  var vertAdd = [202, 206, 207, 211, 212, 216, 218, 222];
  var _loop_1 = function (i) {
    verticalLine.push.apply(
      verticalLine,
      vertAdd.map(function (v) {
        return v + 75 * i;
      })
    );
  };
  for (var i = 0; i < 4; i++) {
    _loop_1(i);
  }
  for (var i = 1; i < 24; i++) {
    horLowLine.push(i);
  }
  for (var i = 28; i < 47; i++) {
    horLowLine.push(i);
  }
  horLowLine.push(103, 104, 105, 108, 109, 110);
  var horLoAdd = [178, 179, 180, 183, 184, 185, 188, 189, 190, 194, 195, 196];
  var _loop_2 = function (i) {
    horLowLine.push.apply(
      horLowLine,
      horLoAdd.map(function (v) {
        return v + 75 * i;
      })
    );
  };
  for (var i = 0; i < 4; i++) {
    _loop_2(i);
  }
  for (var i = 78; i < 97; i++) {
    horHiLine.push(i);
  }
  for (var i = 476; i < 499; i++) {
    horHiLine.push(i);
  }
  horHiLine.push(153, 154, 155, 158, 159, 160);
  var horHiAdd = [228, 229, 230, 233, 234, 235, 238, 239, 240, 244, 245, 246];
  var _loop_3 = function (i) {
    horHiLine.push.apply(
      horHiLine,
      horHiAdd.map(function (v) {
        return v + 75 * i;
      })
    );
  };
  for (var i = 0; i < 4; i++) {
    _loop_3(i);
  }
  for (var i = 53; i < 72; i++) {
    document.getElementById(i).setAttribute("class", "display");
  }
  populateBox(verticalLine, "\u007C", "vert");
  populateBox(horLowLine, "\u005F", "horLo");
  populateBox(horHiLine, "\u203E", "horHi");
}
//
// Populate the divs defined for visual of calc, display, buttons.
//
function populateBox(arr, content, clazz) {
  var elements = arr.map(function (id) {
    return document.getElementById(id);
  });
  elements.forEach(function (occ) {
    occ.textContent = content;
    occ.setAttribute("class", clazz);
  });
}
makeBoxes();
//
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey || event.altKey || event.metaKey) {
    return;
  }
  if (event.key === "1") {
    btnEvent(1);
  }
  if (event.key === "2") {
    btnEvent(2);
  }
  if (event.key === "3") {
    btnEvent(3);
  }
  if (event.key === "4") {
    btnEvent(4);
  }
  if (event.key === "5") {
    btnEvent(5);
  }
  if (event.key === "6") {
    btnEvent(6);
  }
  if (event.key === "7") {
    btnEvent(7);
  }
  if (event.key === "8") {
    btnEvent(8);
  }
  if (event.key === "9") {
    btnEvent(9);
  }
  if (event.key === "0") {
    btnEvent(0);
  }
  if (event.key === "c" || event.key === "C" || event.key === "Clear") {
    btnEvent("C");
  }
  if (event.key === "+") {
    btnEvent("+");
  }
  if (event.key === "-") {
    btnEvent("-");
  }
  if (event.key === "*") {
    btnEvent("*");
  }
  if (event.key === "/") {
    btnEvent("/");
  }
  if (event.key === "." || event.key === ",") {
    btnEvent(".");
  }
  if (event.key === "=" || event.key === "Enter") {
    btnEvent("=");
  }
});
